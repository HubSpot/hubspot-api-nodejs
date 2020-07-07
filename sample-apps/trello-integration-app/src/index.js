require('./config')
const Promise = require('bluebird')
const _ = require('lodash')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const ngrok = require('ngrok')
const dbHelper = require('./helpers/db-helper')
const hubspotOauthHelper = require('./helpers/hubspot-oauth-helper')
const trelloOauthHelper = require('./helpers/trello-oauth-helper')
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

const releaseConnections = (server) => {
    dbHelper.close()
    return server.close(() => {
        console.log('Process terminated')
    })
}

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

    if (_.startsWith(req.url, '/oauth/login')) {
        return next()
    }

    const hubspotAuthorized = await hubspotOauthHelper.verifyAuthorization()

    if (!hubspotAuthorized) {
        return res.redirect('/oauth/login')
    }

    const hubspotTokenExpired = await hubspotOauthHelper.verifyTokenExpiration()

    if (hubspotTokenExpired) {
        const hubspotClient = await hubspotClientHelper.getHubspotClient()
        await hubspotOauthHelper.refreshToken(hubspotClient)
    }

    const trelloAuthorized = await trelloOauthHelper.verifyAuthorization()

    if (!trelloAuthorized) {
        return res.redirect('/oauth/login')
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

app.get('/oauth/login', async (req, res) => {
    const hubspotAuthorized = await hubspotOauthHelper.verifyAuthorization()
    const trelloAuthorized = await trelloOauthHelper.verifyAuthorization()
    const baseUrl = await dbHelper.getUrl()
    res.render('login', { hubspotAuthorized, trelloAuthorized, baseUrl })
})

app.get('/oauth/hubspot', async (req, res) => {
    const redirectUrl = await hubspotOauthHelper.getOauthRedirectUri()
    const hubspotClient = await hubspotClientHelper.getHubspotClient()
    // Use the client to get authorization Url
    // https://www.npmjs.com/package/@hubspot/api-client#obtain-your-authorization-url
    console.log('Creating authorization Url')
    const authorizationUrl = hubspotClient.oauth.getAuthorizationUrl(
        ENV_VARIABLES.HUBSPOT_CLIENT_ID,
        redirectUrl,
        SCOPES,
    )
    console.log('Authorization Url', authorizationUrl)

    res.redirect(authorizationUrl)
})

app.get('/oauth/trello', async (req, res) => {
    const redirectUrl = await trelloOauthHelper.getOauthRedirectUri()
    console.log('Creating authorization Url')
    const authorizationUrl = trelloOauthHelper.getAuthUrl(ENV_VARIABLES.TRELLO_API_KEY, redirectUrl)
    console.log('Authorization Url', authorizationUrl)

    res.redirect(authorizationUrl)
})

app.get('/oauth/trello/callback', async (req, res) => {
    res.send(
        `<script type="text/javascript"> 
            var token = window.location.href.split("token=")[1];
            window.location = "/oauth/trello/token/" + token;
         </script>`,
    )
})

app.get('/oauth/trello/token/:token', async (req, res) => {
    const token = _.get(req, 'params.token')
    console.log('Trello token', token)
    await dbHelper.saveTrelloToken(token)
    res.redirect('/')
})

app.get('/oauth/hubspot/callback', async (req, res) => {
    const code = _.get(req, 'query.code')
    const redirectUrl = await hubspotOauthHelper.getOauthRedirectUri()
    const hubspotClient = await hubspotClientHelper.getHubspotClient()
    // Create OAuth 2.0 Access Token and Refresh Tokens
    // POST /oauth/v1/token
    // https://developers.hubspot.com/docs/api/working-with-oauth
    console.log('Retrieving access token by code:', code)
    const result = await hubspotClient.oauth.defaultApi.createToken(
        'authorization_code',
        code,
        redirectUrl,
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

app.use((error, req, res, next) => {
    res.render('error', { error: error.message })
})
;(async () => {
    try {
        const server = app.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`)
            return Promise.delay(100)
                .then(() => ngrok.connect(PORT))
                .tap((url) => console.log('Please use:', url))
                .then(dbHelper.saveUrl)
                .catch(async (e) => {
                    console.log('Error during app start. ', e)
                    return releaseConnections(server)
                })
        })

        process.on('SIGTERM', () => releaseConnections(server))
    } catch (e) {
        console.error('Error during app start. ', e)
    }
})()
