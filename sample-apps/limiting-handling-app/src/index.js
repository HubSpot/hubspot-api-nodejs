require('./config')
const _ = require('lodash')
const path = require('path')
const express = require('express')
const hubspot = require('../../..')
const bodyParser = require('body-parser')
const Promise = require('bluebird')
const chance = require('chance').Chance()
const queryString = require('query-string')
const waitInterceptorHelper = require('./js/wait-interceptor-helper')
const dbHelper = require('./js/db-helper')
const WAIT_TIMEOUT = 60 * 1000
const PORT = 3000
const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET
const SCOPES = 'contacts'
const REDIRECT_URI = `http://localhost:${PORT}/oauth-callback`
const REFRESH_TOKEN = 'refresh_token'

const hubspotClientsWithRedisLimiter = []
let tokenStore = {}
let hubspotClient, hubspotClientWithDefaultLimiter, hubspotClientWithSixRetry
let initialStart = true

const checkEnv = (req, res, next) => {
    if (_.startsWith(req.url, '/error')) return next()

    if (_.isNil(CLIENT_ID)) return res.redirect('/error?msg=Please set HUBSPOT_CLIENT_ID env variable to proceed')
    if (_.isNil(CLIENT_SECRET))
        return res.redirect('/error?msg=Please set HUBSPOT_CLIENT_SECRET env variable to proceed')

    next()
}

const initializeClients = () => {
    hubspotClient = new hubspot.Client({
        allowRateLimiting: false,
        interceptors: [waitInterceptorHelper.getWaitInterceptor(WAIT_TIMEOUT)],
    })
    hubspotClientWithDefaultLimiter = new hubspot.Client()
    hubspotClientWithSixRetry = new hubspot.Client({
        allowRateLimiting: false,
        allowConcurrentLimiting: false,
        numberOfApiCallRetries: hubspot.NumberOfRetries.Six,
    })
    _.map(new Array(4), () => {
        const hubspotClient = new hubspot.Client({
            allowRateLimiting: false,
            allowConcurrentLimiting: false,
            interceptors: [waitInterceptorHelper.getWaitInterceptor(WAIT_TIMEOUT)],
        })
        hubspotClientsWithRedisLimiter.push(hubspotClient)
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
    hubspotClientWithSixRetry.setAccessToken(accessToken)
    _.map(hubspotClientsWithRedisLimiter, (hsClient) => hsClient.setAccessToken(accessToken))
}

const refreshToken = async () => {
    // Create OAuth 2.0 Access Token and Refresh Tokens
    // POST /oauth/v1/token
    // https://developers.hubspot.com/docs-beta/intro-to-auth
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
    const retryExecTime = _.get(query, 'retryExecTime') || ''
    const waitInterceptorExecTime = _.get(query, 'waitInterceptorExecTime') || ''
    return { defaultLimiterExecTime, retryExecTime, waitInterceptorExecTime }
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
        const execTimes = getExecTimesFromQuery(req.query)
        console.log('Started batch execution by clients with default limiter')
        execTimes.defaultLimiterExecTime = await getBatchExecutionTime([hubspotClientWithDefaultLimiter])
        console.log(`Batch execution by clients with default limiter took: ${execTimes.defaultLimiterExecTime}`)

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

        res.redirect(queryString.stringifyUrl({ url: '/', query: execTimes }))
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/execute-batch/with-wait-interceptor', checkAuthorization, async (req, res) => {
    try {
        const execTimes = getExecTimesFromQuery(req.query)
        console.log('Started batch execution by clients that have custom wait interceptor')
        execTimes.waitInterceptorExecTime = await getBatchExecutionTime(hubspotClientsWithRedisLimiter)
        console.log(
            `Batch execution by clients that have custom wait interceptor took: ${execTimes.waitInterceptorExecTime} ms`,
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
    // Use the client to getAll authorization Url
    // https://www.npmjs.com/package/hubspot
    console.log('Creating authorization Url')
    const authorizationUrl = hubspotClient.oauth.getAuthorizationUrl(CLIENT_ID, REDIRECT_URI, SCOPES)
    console.log('Authorization Url', authorizationUrl)

    res.redirect(authorizationUrl)
})

app.get('/oauth-callback', async (req, res) => {
    const code = _.get(req, 'query.code')

    // Create OAuth 2.0 Access Token and Refresh Tokens
    // POST /oauth/v1/token
    // https://developers.hubspot.com/docs-beta/intro-to-auth
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
    // https://www.npmjs.com/package/hubspot
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
        waitInterceptorHelper.init()
        initializeClients()
        const server = app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))

        process.on('SIGTERM', async () => {
            await dbHelper.close()

            server.close(() => {
                console.log('Process terminated')
            })
        })
    } catch (e) {
        console.error('Error during app start. ', e)
    }
})()
