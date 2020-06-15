const _ = require('lodash')
const path = require('path')
const express = require('express')
const hubspot = require('../../..')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
require('./config')

const PORT = 3000
const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET
const SCOPES = 'contacts crm.import'
const REDIRECT_URI = `http://localhost:${PORT}/oauth-callback`
const GRANT_TYPES = {
    AUTHORIZATION_CODE: 'authorization_code',
    REFRESH_TOKEN: 'refresh_token',
}

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
    return !_.isEmpty(tokenStore.refreshToken)
}

const isTokenExpired = () => {
    return Date.now() >= tokenStore.updatedAt + tokenStore.expiresIn * 1000
}

const checkAuthorization = async (req, res, next) => {
    if (_.startsWith(req.url, '/error')) return next()
    if (_.startsWith(req.url, '/login')) return next()
    if (!isAuthorized()) return res.redirect('/login')
    if (isTokenExpired()) await refreshToken()

    next()
}

const refreshToken = async () => {
    const result = await hubspotClient.oauth.defaultApi.createToken(
        GRANT_TYPES.REFRESH_TOKEN,
        undefined,
        undefined,
        CLIENT_ID,
        CLIENT_SECRET,
        tokenStore.refreshToken,
    )
    tokenStore = result.body
    tokenStore.updatedAt = Date.now()
    console.log('Updated tokens', tokenStore)

    hubspotClient.setAccessToken(tokenStore.accessToken)
}

const handleError = (e, res) => {
    if (_.isEqual(e.message, 'HTTP request failed')) {
        const errorMessage = JSON.stringify(e, null, 2)
        console.error(errorMessage)
        return res.redirect(`/error?msg=${errorMessage}`)
    }

    console.error(e)
    res.redirect(`/error?msg=${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
}

const getImportDetails = async (id) => {
    // Get a complete summary of an import record
    // GET /crm/v3/imports/:importId
    // https://developers.hubspot.com/docs/api/crm/imports
    console.log('Calling hubspotClient.crm.imports.coreApi.getById. Retrieve a import details by id:', id)
    const importResponse = await hubspotClient.crm.imports.coreApi.getById(id)
    logResponse('Import Response:', importResponse)

    return importResponse.body
}

const app = express()

const hubspotClient = new hubspot.Client()

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(
    fileUpload({
        createParentPath: false,
    }),
)

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
app.use('/oauth', async (req, res) => {
    // Use the client to get authorization Url
    // https://www.npmjs.com/package/@hubspot/api-client#obtain-your-authorization-url
    console.log('Creating authorization Url')
    const authorizationUrl = hubspotClient.oauth.getAuthorizationUrl(CLIENT_ID, REDIRECT_URI, SCOPES)
    console.log('Authorization Url', authorizationUrl)

    res.redirect(authorizationUrl)
})

app.use('/oauth-callback', async (req, res) => {
    const code = _.get(req, 'query.code')

    // Create OAuth 2.0 Access Token and Refresh Tokens
    // POST /oauth/v1/token
    // https://developers.hubspot.com/docs/api/working-with-oauth
    console.log('Retrieving access token by code:', code)
    const getTokensResponse = await hubspotClient.oauth.defaultApi.createToken(
        GRANT_TYPES.AUTHORIZATION_CODE,
        code,
        REDIRECT_URI,
        CLIENT_ID,
        CLIENT_SECRET,
    )
    logResponse('Retrieving access token result:', getTokensResponse)

    tokenStore = getTokensResponse.body
    tokenStore.updatedAt = Date.now()

    // Set token for the
    // https://www.npmjs.com/package/@hubspot/api-client
    hubspotClient.setAccessToken(tokenStore.accessToken)
    res.redirect('/')
})
app.use(checkAuthorization)

app.get('/', async (req, res) => {
    res.redirect('/imports')
})

app.get('/imports', async (req, res) => {
    try {
        // Retrieving import records
        // GET /crm/v3/imports
        // https://developers.hubspot.com/docs/api/crm/imports
        console.log('Calling hubspotClient.crm.imports.coreApi.getPage. Get imports page.')
        const importsResponse = await hubspotClient.crm.imports.coreApi.getPage()
        logResponse('Imports Response:', importsResponse)

        res.render('imports', { importsDetails: importsResponse.body.results })
    } catch (e) {
        handleError(e, res)
    }
})

app.post('/imports', async (req, res) => {
    try {
        const fileToImport = _.get(req, 'files.file')

        if (!fileToImport) {
            throw new Error('Cannot get file to import')
        }

        const fileToImportConfig = {
            value: fileToImport.data,
            options: {
                filename: fileToImport.name,
                contentType: 'text/csv',
            },
        }

        const importRequest = {
            name: fileToImport.name,
            files: [
                {
                    fileName: fileToImport.name,
                    fileImportPage: {
                        hasHeader: true,
                        columnMappings: [
                            {
                                columnName: 'First Name',
                                propertyName: 'firstname',
                                columnObjectType: 'CONTACT',
                            },
                            {
                                columnName: 'Email',
                                propertyName: 'email',
                                columnObjectType: 'CONTACT',
                            },
                        ],
                    },
                },
            ],
        }

        // Start a new import
        // POST/crm/v3/imports
        // https://developers.hubspot.com/docs/api/crm/imports
        console.log('Calling crm.imports.coreApi.create API method. Starting a new import')
        const result = await hubspotClient.crm.imports.coreApi.create(JSON.stringify(importRequest), fileToImportConfig)

        logResponse('Import result', result)
        res.redirect(`imports/${result.body.id}`)
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/imports/new', async (req, res) => {
    try {
        res.render('imports-start')
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/imports/:id', async (req, res) => {
    try {
        const id = _.get(req, 'params.id')
        if (_.isNil(id)) {
            return res.redirect('/error?msg=Missed import id')
        }

        const importDetails = await getImportDetails(id)

        res.render('import-details', { importDetails })
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/imports/:id/internal', async (req, res) => {
    try {
        const id = _.get(req, 'params.id')
        if (_.isNil(id)) {
            return res.redirect('/error?msg=Missed import id')
        }

        const importDetails = await getImportDetails(id)

        res.status(200).jsonp(importDetails)
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/imports/:id/cancel', async (req, res) => {
    try {
        const id = _.get(req, 'params.id')

        console.error('/imports/:id/cancel', id)
        if (_.isNil(id)) {
            return res.redirect('/error?msg=Missed import id')
        }

        // Cancel an active import
        // POST /crm/v3/imports/:importId/cancel
        // https://developers.hubspot.com/docs/api/crm/imports
        console.log('Calling hubspotClient.crm.imports.coreApi.cancel. Cancel import by id:', id)
        const importCancelResponse = await hubspotClient.crm.imports.coreApi.cancel(id)
        logResponse('Import Cancel Response:', importCancelResponse)

        res.redirect(`/imports/${id}`)
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/data/example.csv', async (req, res) => {
    try {
        res.sendFile('/data/example.csv', { root: __dirname })
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/login', (req, res) => {
    if (isAuthorized()) return res.redirect('/')
    res.render('login')
})

app.get('/error', (req, res) => {
    res.render('error', { error: req.query.msg })
})

app.use((error, req, res, next) => {
    res.render('error', { error: error.message })
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
