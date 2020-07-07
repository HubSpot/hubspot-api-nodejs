require('./config')
const _ = require('lodash')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const dbHelper = require('./helpers/db-helper')
const hubspotOauthHelper = require('./helpers/hubspot-oauth-helper')
const hubspotClientHelper = require('./helpers/hubspot-client-helper')

const PORT = 3000
const ENV_VARIABLES = {
    HUBSPOT_CLIENT_ID: process.env.HUBSPOT_CLIENT_ID,
    HUBSPOT_CLIENT_SECRET: process.env.HUBSPOT_CLIENT_SECRET,
    HUBSPOT_APPLICATION_ID: process.env.HUBSPOT_APPLICATION_ID,
    HUBSPOT_DEVELOPER_API_KEY: process.env.HUBSPOT_DEVELOPER_API_KEY,
    TRELLO_API_KEY: process.env.TRELLO_API_KEY,
}
const SCOPES = 'contacts'
const REDIRECT_URI = `http://localhost:${PORT}/oauth-callback`

const checkEnv = (req, res, next) => {
    if (_.startsWith(req.url, '/error')) return next()

    const notSetEnvVariables = []

    _.keys(ENV_VARIABLES).forEach((key) => {
        if (_.isNil(ENV_VARIABLES[key])) {
            notSetEnvVariables.push(key)
        }
    })

    if (!_.isEmpty(notSetEnvVariables)) {
        return res.redirect(
            `/error?msg=Please set ${notSetEnvVariables} env variable${
                notSetEnvVariables.length > 1 ? 's' : ''
            } to proceed`,
        )
    }

    next()
}

const checkAuthorization = async (req, res, next) => {
    if (_.startsWith(req.url, '/error')) {
        return next()
    }

    if (_.startsWith(req.url, '/login')) {
        return next()
    }

    const hubspotAuthorized = await hubspotOauthHelper.verifyAuthorization()

    if (!hubspotAuthorized) {
        return res.redirect('/login')
    }

    const hubspotTokenExpired = await hubspotOauthHelper.verifyTokenExpiration()

    if (hubspotTokenExpired) {
        const hubspotClient = hubspotClientHelper.getHubspotClient()
        await hubspotOauthHelper.refreshToken(hubspotClient)
    }

    return next()
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
        res.render('readme')
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/login', async (req, res) => {
    const isAuthorized = await hubspotOauthHelper.verifyAuthorization()
    console.log('Is logged-in', isAuthorized)
    if (isAuthorized) return res.redirect('/')
    res.render('login')
})

app.get('/oauth', async (req, res) => {
    const hubspotClient = hubspotClientHelper.getHubspotClient()
    // Use the client to get authorization Url
    // https://www.npmjs.com/package/@hubspot/api-client#obtain-your-authorization-url
    console.log('Creating authorization Url')
    const authorizationUrl = hubspotClient.oauth.getAuthorizationUrl(
        ENV_VARIABLES.HUBSPOT_CLIENT_ID,
        REDIRECT_URI,
        SCOPES,
    )
    console.log('Authorization Url', authorizationUrl)

    res.redirect(authorizationUrl)
})

app.get('/oauth-callback', async (req, res) => {
    const code = _.get(req, 'query.code')
    const hubspotClient = hubspotClientHelper.getHubspotClient()
    // Create OAuth 2.0 Access Token and Refresh Tokens
    // POST /oauth/v1/token
    // https://developers.hubspot.com/docs/api/working-with-oauth
    console.log('Retrieving access token by code:', code)
    const result = await hubspotClient.oauth.defaultApi.createToken(
        'authorization_code',
        code,
        REDIRECT_URI,
        ENV_VARIABLES.HUBSPOT_CLIENT_ID,
        ENV_VARIABLES.HUBSPOT_CLIENT_SECRET,
    )
    logResponse(result)
    // Set token for the
    // https://www.npmjs.com/package/@hubspot/api-client
    const tokensData = { ...result.body, updatedAt: Date.now() }
    await dbHelper.saveHubspotTokensData(tokensData)
    hubspotClient.setAccessToken(tokensData.accessToken)
    res.redirect('/')
})

app.get('/error', (req, res) => {
    res.render('error', { error: req.query.msg })
})

app.use((error, req, res) => {
    res.render('error', { error: error.message })
})
;(async () => {
    try {
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
