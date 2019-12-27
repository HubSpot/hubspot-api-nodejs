require('dotenv').config({ path: '.env' })
const _ = require('lodash')
const path = require('path')
const express = require('express')
const Hubspot = require(`${__dirname}/../..`)
const bodyParser = require('body-parser')

const PORT = 3000

const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET
const SCOPES = 'contacts'
const REDIRECT_URI = `http://localhost:${PORT}/oauth-callback`
const GRANT_TYPES = {
    AUTHORIZATION_CODE: 'authorization_code',
    REFRESH_TOKEN: 'refresh_token',
}
const CONTACT_OBJECT_TYPE = 'contacts'

let tokenStore = {}

const logResponse = (message, data) => {
    console.log(message, JSON.stringify(data, null, 1))
}

const checkEnv = (req, res, next) => {
    if (_.startsWith(req.url, '/error')) return next()

    if (_.isNil(CLIENT_ID)) return res.redirect('/error?msg=Please set HUBSPOT_CLIENT_ID env variable to proceed')
    if (_.isNil(CLIENT_SECRET))
        return res.redirect('/error?msg=Please set HUBSPOT_CLIENT_SECRET env variable to proceed')

    next()
}

const isAuthorized = () => {
    return !_.isEmpty(tokenStore.refresh_token)
}

const isTokenExpired = () => {
    return Date.now() >= tokenStore.updated_at + tokenStore.expires_in * 1000
}

const prepareContactsContent = (contacts) => {
    return _.map(contacts, (contact) => {
        const companyName = _.get(contact, 'properties.company') || ''
        const name = getFullName(contact.properties)
        return { id: contact.id, name, companyName }
    })
}

const getFullName = (contactProperties) => {
    const firstName = _.get(contactProperties, 'firstname') || ''
    const lastName = _.get(contactProperties, 'lastname') || ''
    return `${firstName} ${lastName}`
}

const refreshToken = async () => {
    hubspot = Hubspot()

    const result = await hubspot.oauth.tokensApi.getTokens(
        GRANT_TYPES.REFRESH_TOKEN,
        undefined,
        REDIRECT_URI,
        CLIENT_ID,
        CLIENT_SECRET,
        tokenStore.refresh_token,
    )
    tokenStore = result.body
    tokenStore.updated_at = Date.now()
    console.log('Updated tokens', tokenStore)

    hubspot.setAccessToken(tokenStore.access_token)
}

const app = express()

let hubspot = Hubspot()

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

app.get('/', async (req, res) => {
    try {
        if (!isAuthorized()) return res.render('login')
        if (isTokenExpired()) await refreshToken()

        const properties = ['firstname', 'lastname', 'company']

        // Get all contacts
        // GET /crm/v3/objects/:objectType
        // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
        console.log('Calling .crm.objects.basicApi.getPage. Retrieve contacts.')
        const contactsResponse = await hubspot.crm.objects.basicApi.getPage(
            CONTACT_OBJECT_TYPE,
            undefined,
            undefined,
            properties,
        )
        logResponse('Response from API', contactsResponse)

        res.render('contacts', { tokenStore, contacts: prepareContactsContent(contactsResponse.body.results) })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${e.message}`)
    }
})

app.use('/oauth', async (req, res) => {
    // Use the client to get authorization Url
    // https://www.npmjs.com/package/hubspot
    console.log('Creating authorization Url')
    const authorizationUrl = hubspot.oauth.getAuthorizationUrl(CLIENT_ID, REDIRECT_URI, SCOPES)
    console.log('Authorization Url', authorizationUrl)

    res.redirect(authorizationUrl)
})

app.use('/oauth-callback', async (req, res) => {
    const code = _.get(req, 'query.code')

    // Get OAuth 2.0 Access Token and Refresh Tokens
    // POST /oauth/v1/token
    // https://tools.hubteam.com/api-catalog/services/OAuthService/v1/spec/public?branch=master&swaggerVersion=3
    console.log('Retrieving access token by code:', code)
    const getTokensResponse = await hubspot.oauth.tokensApi.getTokens(
        GRANT_TYPES.AUTHORIZATION_CODE,
        code,
        REDIRECT_URI,
        CLIENT_ID,
        CLIENT_SECRET,
    )
    logResponse('Retrieving access token result:', getTokensResponse)

    tokenStore = getTokensResponse.body
    tokenStore.updated_at = Date.now()

    // Set token for the
    // https://www.npmjs.com/package/hubspot
    hubspot.setAccessToken(tokenStore.access_token)
    res.redirect('/')
})

app.get('/login', (req, res) => {
    tokenStore = {}
    res.redirect('/')
})

app.get('/refresh', async (req, res) => {
    try {
        if (isAuthorized()) await refreshToken()
        res.redirect('/')
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${e.message}`)
    }
})

app.get('/error', (req, res) => {
    res.render('error', { error: req.query.msg })
})

app.use((error, req, res, next) => {
    res.render('error', { error: error.message })
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
