require('./config')
const _ = require('lodash')
const path = require('path')
const express = require('express')
const hubspot = require('@hubspot/api-client')
const bodyParser = require('body-parser')
const Promise = require('bluebird')
const chance = require('chance').Chance()
const queryString = require('query-string')
const dbHelper = require('./js/db-helper')
const Redis = require('ioredis')

const PORT = 3000
const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET
const SCOPES = 'contacts'
const REDIRECT_URI = `http://localhost:${PORT}/oauth-callback`
const REFRESH_TOKEN = 'refresh_token'
const TEN_SECOND_ROLLING = 10 * 1000
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'
const REDIS_PORT = 6379
const THROTTLING_DELAY_TIME = 105
const CONCURRENCY_LIMIT = 10
const BOTTLENECK_ID = 'sample-app'
const CUSTOM_LIMITER_OPTIONS = {
    /* Some basic options */
    maxConcurrent: CONCURRENCY_LIMIT,
    minTime: THROTTLING_DELAY_TIME,
    id: BOTTLENECK_ID, // All limiters with the same id will be clustered together
    /* Clustering options */
    datastore: 'ioredis', // or "redis"
    clearDatastore: false,
    clientOptions: {
        host: REDIS_HOST,
        port: REDIS_PORT,
        // Redis client options
        // Using NodeRedis? See https://github.com/NodeRedis/node_redis#options-object-properties
        // Using ioredis? See https://github.com/luin/ioredis/blob/master/API.md#new-redisport-host-options
    },
    Redis,
}
const hubspotClientsWithCustomLimiterOptions = []
const hubspotClientsWithCustomLimiterOptionsAndThreeRetry = []
let tokenStore = {}
let hubspotClient,
    hubspotClientWithDefaultLimiter,
    hubspotClientWithDefaultLimiterAndThreeRetry,
    hubspotClientWithSixRetry
let initialStart = true
let executeBatchWithRetryEndTime = 0

const waitUntilTenSecondRollingForExecuteBatchWithRetry = async () => {
    const timeSinceLastExecutionOfBatchWithRetry = Date.now() - executeBatchWithRetryEndTime
    if (TEN_SECOND_ROLLING > timeSinceLastExecutionOfBatchWithRetry) {
        const timeToWait = TEN_SECOND_ROLLING - timeSinceLastExecutionOfBatchWithRetry
        console.log(`Waiting ${timeToWait} to Ten Second Rolling for execution Batch With Retry`)
        await Promise.delay(timeToWait)
    }
}

const checkEnv = (req, res, next) => {
    if (_.startsWith(req.url, '/error')) return next()

    if (_.isNil(CLIENT_ID)) return res.redirect('/error?msg=Please set HUBSPOT_CLIENT_ID env variable to proceed')
    if (_.isNil(CLIENT_SECRET))
        return res.redirect('/error?msg=Please set HUBSPOT_CLIENT_SECRET env variable to proceed')

    next()
}

const initializeClients = () => {
    hubspotClient = new hubspot.Client()
    hubspotClientWithDefaultLimiter = new hubspot.Client()
    hubspotClientWithDefaultLimiterAndThreeRetry = new hubspot.Client({
        numberOfApiCallRetries: hubspot.NumberOfRetries.Three,
    })
    hubspotClientWithSixRetry = new hubspot.Client({
        useLimiter: false,
        numberOfApiCallRetries: hubspot.NumberOfRetries.Six,
    })
    _.times(4, () => {
        const hubspotClient = new hubspot.Client({
            useLimiter: true,
            limiterOptions: CUSTOM_LIMITER_OPTIONS,
        })
        hubspotClientsWithCustomLimiterOptions.push(hubspotClient)
    })
    _.times(4, () => {
        const hubspotClient = new hubspot.Client({
            useLimiter: true,
            limiterOptions: CUSTOM_LIMITER_OPTIONS,
            numberOfApiCallRetries: hubspot.NumberOfRetries.Three,
        })
        hubspotClientsWithCustomLimiterOptionsAndThreeRetry.push(hubspotClient)
    })
}

const isAuthorized = () => {
    console.log('tokenStore', tokenStore)
    return !_.isEmpty(tokenStore.refreshToken)
}

const isTokenExpired = () => {
    return Date.now() >= tokenStore.updatedAt + tokenStore.expiresIn * 1000
}

const setAccessTokenToAllClients = (accessToken) => {
    hubspotClient.setAccessToken(accessToken)
    hubspotClientWithDefaultLimiter.setAccessToken(accessToken)
    hubspotClientWithDefaultLimiterAndThreeRetry.setAccessToken(accessToken)
    hubspotClientWithSixRetry.setAccessToken(accessToken)
    _.each(hubspotClientsWithCustomLimiterOptions, (hsClient) => hsClient.setAccessToken(accessToken))
    _.each(hubspotClientsWithCustomLimiterOptionsAndThreeRetry, (hsClient) => hsClient.setAccessToken(accessToken))
}

const refreshToken = async () => {
    // Create OAuth 2.0 Access Token and Refresh Tokens
    // POST /oauth/v1/token
    // https://developers.hubspot.com/docs/api/working-with-oauth
    const result = await hubspotClient.oauth.defaultApi.createToken(
        REFRESH_TOKEN,
        undefined,
        undefined,
        CLIENT_ID,
        CLIENT_SECRET,
        tokenStore.refreshToken,
    )
    tokenStore = result.body
    tokenStore.updatedAt = Date.now()
    console.log('Updated tokens', tokenStore)

    await dbHelper.saveTokens(tokenStore)
    setAccessTokenToAllClients(tokenStore.accessToken)
}

const getTokensFromDb = async () => {
    tokenStore = (await dbHelper.getTokens()) || {}
}

const checkAuthorization = async (req, res, next) => {
    if (_.startsWith(req.url, '/error')) {
        return next()
    }

    if (_.startsWith(req.url, '/login')) {
        return next()
    }

    if (initialStart) {
        await getTokensFromDb()
    }

    if (!isAuthorized()) {
        return res.redirect('/login')
    }

    if (initialStart) {
        setAccessTokenToAllClients(tokenStore.accessToken)
        initialStart = false
    }

    if (isTokenExpired()) {
        await refreshToken()
    }

    next()
}

const logResponse = (response) => console.log('Response from API', JSON.stringify(response, null, 2))

const app = express()

const handleError = (e, res) => {
    if (_.isEqual(e.message, 'HTTP request failed')) {
        const errorMessage = JSON.stringify(e, null, 2)
        console.error(errorMessage)
        return res.redirect(`/error?msg=${errorMessage}`)
    }

    console.error(e)
    res.redirect(`/error?msg=${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
}

const executeBatch = (hubspotClients) => {
    let iteration = 0
    const maxIndex = hubspotClients.length - 1
    return Promise.map(Array(200), async (number, index) => {
        const requestStartTime = Date.now()
        const clientIndex = chance.integer({ min: 0, max: maxIndex })
        await hubspotClients[clientIndex].crm.companies.basicApi.getPage()
        const requestTime = Date.now() - requestStartTime
        console.log({ index, iteration: iteration++, requestTime })
    })
}

const getBatchExecutionTime = async (hubspotClients) => {
    const batchStartTime = Date.now()
    await executeBatch(hubspotClients)
    return Date.now() - batchStartTime
}

const getExecTimesFromQuery = (query) => {
    const defaultLimiterExecTime = _.get(query, 'defaultLimiterExecTime') || ''
    const defaultLimiterAndRetryExecTime = _.get(query, 'defaultLimiterAndRetryExecTime') || ''
    const retryExecTime = _.get(query, 'retryExecTime') || ''
    const customLimiterOptionsExecTime = _.get(query, 'customLimiterOptionsExecTime') || ''
    const customLimiterOptionsAndRetryExecTime = _.get(query, 'customLimiterOptionsAndRetryExecTime') || ''
    return {
        defaultLimiterExecTime,
        defaultLimiterAndRetryExecTime,
        retryExecTime,
        customLimiterOptionsExecTime,
        customLimiterOptionsAndRetryExecTime,
    }
}

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(
    bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
    }),
)

app.use(
    bodyParser.json({
        limit: '50mb',
        extended: true,
    }),
)

app.use(checkEnv)

app.get('/', checkAuthorization, async (req, res) => {
    try {
        res.render('batch-executor', getExecTimesFromQuery(req.query))
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/execute-batch/with-default-limiter', checkAuthorization, async (req, res) => {
    try {
        await waitUntilTenSecondRollingForExecuteBatchWithRetry()
        const execTimes = getExecTimesFromQuery(req.query)
        console.log('Started batch execution by clients with default limiter')
        execTimes.defaultLimiterExecTime = await getBatchExecutionTime([hubspotClientWithDefaultLimiter])
        console.log(`Batch execution by clients with default limiter took: ${execTimes.defaultLimiterExecTime}`)

        res.redirect(queryString.stringifyUrl({ url: '/', query: execTimes }))
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/execute-batch/with-default-limiter-and-retry', checkAuthorization, async (req, res) => {
    try {
        const execTimes = getExecTimesFromQuery(req.query)
        console.log('Started batch execution by clients with default limiter wit retry')
        execTimes.defaultLimiterAndRetryExecTime = await getBatchExecutionTime([
            hubspotClientWithDefaultLimiterAndThreeRetry,
        ])
        console.log(
            `Batch execution by clients with default limiter and retry took: ${execTimes.defaultLimiterAndRetryExecTime}`,
        )

        res.redirect(queryString.stringifyUrl({ url: '/', query: execTimes }))
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/execute-batch/with-retry', checkAuthorization, async (req, res) => {
    try {
        const execTimes = getExecTimesFromQuery(req.query)
        console.log('Started batch execution by clients with six api call retries')
        execTimes.retryExecTime = await getBatchExecutionTime([hubspotClientWithSixRetry])
        console.log(`Batch execution by clients with six api call retries took: ${execTimes.retryExecTime}`)

        executeBatchWithRetryEndTime = Date.now()
        res.redirect(queryString.stringifyUrl({ url: '/', query: execTimes }))
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/execute-batch/with-custom-limiter-options', checkAuthorization, async (req, res) => {
    try {
        await waitUntilTenSecondRollingForExecuteBatchWithRetry()
        const execTimes = getExecTimesFromQuery(req.query)
        console.log('Started batch execution by clients that have custom limiter options')
        execTimes.customLimiterOptionsExecTime = await getBatchExecutionTime(hubspotClientsWithCustomLimiterOptions)
        console.log(
            `Batch execution by clients that have custom limiter options took: ${execTimes.customLimiterOptionsExecTime} ms`,
        )

        res.redirect(queryString.stringifyUrl({ url: '/', query: execTimes }))
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/execute-batch/with-custom-limiter-options-and-retry', checkAuthorization, async (req, res) => {
    try {
        const execTimes = getExecTimesFromQuery(req.query)
        console.log('Started batch execution by clients that have custom limiter options and retry')
        execTimes.customLimiterOptionsAndRetryExecTime = await getBatchExecutionTime(
            hubspotClientsWithCustomLimiterOptionsAndThreeRetry,
        )
        console.log(
            `Batch execution by clients that have custom limiter options and retry took: ${execTimes.customLimiterOptionsAndRetryExecTime} ms`,
        )

        res.redirect(queryString.stringifyUrl({ url: '/', query: execTimes }))
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/login', async (req, res) => {
    console.log('Is logged-in', isAuthorized())
    if (isAuthorized()) return res.redirect('/')
    res.render('login')
})

app.get('/oauth', async (req, res) => {
    // Use the client to get authorization Url
    // https://www.npmjs.com/package/@hubspot/api-client#obtain-your-authorization-url
    console.log('Creating authorization Url')
    const authorizationUrl = hubspotClient.oauth.getAuthorizationUrl(CLIENT_ID, REDIRECT_URI, SCOPES)
    console.log('Authorization Url', authorizationUrl)

    res.redirect(authorizationUrl)
})

app.get('/oauth-callback', async (req, res) => {
    const code = _.get(req, 'query.code')

    // Create OAuth 2.0 Access Token and Refresh Tokens
    // POST /oauth/v1/token
    // https://developers.hubspot.com/docs/api/working-with-oauth
    console.log('Retrieving access token by code:', code)
    const tokenStoreResult = await hubspotClient.oauth.defaultApi.createToken(
        'authorization_code',
        code,
        REDIRECT_URI,
        CLIENT_ID,
        CLIENT_SECRET,
    )
    logResponse(tokenStoreResult)

    tokenStore = tokenStoreResult.body
    tokenStore.updatedAt = Date.now()

    // Set token for the
    // https://www.npmjs.com/package/@hubspot/api-client
    await dbHelper.saveTokens(tokenStore)
    setAccessTokenToAllClients(tokenStore.accessToken)
    res.redirect('/')
})

app.get('/error', (req, res) => {
    res.render('error', { error: req.query.msg })
})

app.use((error, req, res, next) => {
    res.render('error', { error: error.message })
})
;(async () => {
    try {
        dbHelper.init()
        initializeClients()
        const server = app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))

        process.on('SIGTERM', () => {
            dbHelper.close()
            server.close(() => {
                console.log('Process terminated')
            })
        })
    } catch (e) {
        console.error('Error during app start. ', e)
    }
})()
