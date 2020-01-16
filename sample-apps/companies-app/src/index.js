require('./config')
const _ = require('lodash')
const path = require('path')
const express = require('express')
const hubspot = require('../../..')
const bodyParser = require('body-parser')
const Promise = require('bluebird')

const PORT = 3000

const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET
const SCOPES = 'contacts'
const OBJECTS_LIMIT = 30
const ADD_ACTION = 'Add selected to company'
const DELETE_ACTION = 'Delete selected from Company'
const REDIRECT_URI = `http://localhost:${PORT}/oauth-callback`
const CONTACT_OBJECT_TYPE = 'contacts'
const COMPANY_OBJECT_TYPE = 'companies'
const REFRESH_TOKEN = 'refresh_token'

let tokenStore = {}

const checkEnv = (req, res, next) => {
    if (_.startsWith(req.url, '/error')) return next()

    if (_.isNil(CLIENT_ID)) return res.redirect('/error?msg=Please set HUBSPOT_CLIENT_ID env variable to proceed')
    if (_.isNil(CLIENT_SECRET))
        return res.redirect('/error?msg=Please set HUBSPOT_CLIENT_SECRET env variable to proceed')

    next()
}

const isAuthorized = () => {
    console.log(tokenStore)
    return !_.isEmpty(tokenStore.refresh_token)
}

const isTokenExpired = () => {
    return Date.now() >= tokenStore.updated_at + tokenStore.expires_in * 1000
}

const refreshToken = async () => {
    const result = await hubspotClient.oauth.tokensApi.getTokens(
        REFRESH_TOKEN,
        undefined,
        undefined,
        CLIENT_ID,
        CLIENT_SECRET,
        tokenStore.refresh_token,
    )
    tokenStore = result.body
    tokenStore.updated_at = Date.now()
    console.log('Updated tokens', tokenStore)

    hubspotClient.setAccessToken(tokenStore.access_token)
}

const checkAuthorization = async (req, res, next) => {
    if (_.startsWith(req.url, '/error')) return next()
    if (_.startsWith(req.url, '/login')) return next()
    if (!isAuthorized()) return res.redirect('/login')
    if (isTokenExpired()) await refreshToken()

    next()
}

const isPropertyEditable = (property) => {
    return !property.modificationMetadata.readOnlyValue && !property.calculated
}

const preparePropertiesForView = (companyProperties, allProperties) => {
    return _.chain(allProperties)
        .filter(isPropertyEditable)
        .map((property) => {
            return {
                name: property.name,
                label: property.label,
                value: _.get(companyProperties, `${property.name}`),
            }
        })
        .value()
}

const prepareAllContactsForView = (contacts) => {
    return _.map(contacts, (contact) => {
        const id = _.get(contact, 'id')
        const firstName = _.get(contact, 'properties.firstname') || ''
        const lastName = _.get(contact, 'properties.lastname') || ''
        const name = `${firstName} ${lastName}`
        return { id, name }
    })
}

const prepareCompaniesForView = (companies) => {
    return _.map(companies, (company) => {
        const id = _.get(company, 'id')
        const name = _.get(company, 'properties.name')
        const domain = _.get(company, 'properties.domain')
        return { id, name, domain }
    })
}

const logResponse = (response) => {
    console.log('Response from API', JSON.stringify(response, null, 2))
}

const app = express()

const hubspotClient = new hubspot.Client({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
    scopes: SCOPES,
})

const getAllCompanies = async () => {
    // Get all companies
    // GET /crm/v3/objects/:objectType
    // https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview
    console.log('Calling crm.objects.basicApi.getPage API method. Retrieve all companies.')
    const companiesResponse = await hubspotClient.crm.objects.basicApi.getPage(COMPANY_OBJECT_TYPE, OBJECTS_LIMIT)
    logResponse(companiesResponse)

    return companiesResponse.body.results
}

const getCompaniesByDomain = async (domain) => {
    const searchBody = {
        filters: [
            {
                propertyName: 'domain',
                operator: 'EQ',
                value: domain,
            },
        ],
        sorts: [],
        limit: OBJECTS_LIMIT,
        after: 0,
        properties: [],
    }
    // Search for companies by domain
    // POST /crm/v3/objects/:objectType/search
    // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
    console.log('Calling crm.objects.searchApi.doSearch API method. Retrieve companies by domain.')
    const companiesResponse = await hubspotClient.crm.objects.searchApi.doSearch(COMPANY_OBJECT_TYPE, searchBody)
    logResponse(companiesResponse)

    return companiesResponse.body.results
}

const createCompany = async (properties) => {
    // Create a Company
    // POST /crm/v3/objects/:objectType/
    // https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview
    console.log('Calling crm.objects.basicApi.create API method. Create company.')
    return hubspotClient.crm.objects.basicApi.create(COMPANY_OBJECT_TYPE, { properties })
}

const updateCompany = (id, properties) => {
    // Update a Company
    // PATCH /crm/v3/objects/:objectType/:objectId/
    // https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview
    console.log('Calling crm.objects.basicApi.update API method. Update company.')
    return hubspotClient.crm.objects.basicApi.update(COMPANY_OBJECT_TYPE, id, { properties })
}

const deleteCompanyContactAssociation = async (companyId, contactId) => {
    // Remove an association between company and contact
    // DELETE /crm/v3/objects/:objectType/:objectId/associations/:associatedObjectType/:toObjectId
    // https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview
    const deleteAssociationResponse = await hubspotClient.crm.objects.associationsApi.archiveAssociation(
        COMPANY_OBJECT_TYPE,
        companyId,
        CONTACT_OBJECT_TYPE,
        contactId,
    )
    logResponse(deleteAssociationResponse)
}

const deleteCompanyContactsAssociations = (companyId, contactIds) => {
    const deleteAssociationFn = _.partial(deleteCompanyContactAssociation, companyId, _)
    return Promise.map(contactIds, deleteAssociationFn)
}

const createCompanyContactAssociation = async (companyId, contactId) => {
    // Associate company and contact
    // PUT /crm/v3/objects/:objectType/:objectId/associations/:associatedObjectType/:toObjectId
    // https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview
    const createAssociationResponse = await hubspotClient.crm.objects.associationsApi.createAssociation(
        COMPANY_OBJECT_TYPE,
        companyId,
        CONTACT_OBJECT_TYPE,
        contactId,
    )
    logResponse(createAssociationResponse)
}

const createCompanyContactsAssociations = (companyId, contactIds) => {
    const createAssociationFn = _.partial(createCompanyContactAssociation, companyId, _)
    return Promise.map(contactIds, createAssociationFn)
}

app.use(express.static('css'))
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

app.get('/', checkAuthorization, (req, res) => {
    res.redirect('/companies')
})

app.get('/companies', checkAuthorization, async (req, res) => {
    try {
        const search = _.get(req, 'query.search') || ''
        let companiesResponse

        if (_.isNil(search) || _.isEmpty(search)) {
            companiesResponse = await getAllCompanies()
        } else {
            companiesResponse = await getCompaniesByDomain(search)
        }

        const companies = prepareCompaniesForView(companiesResponse)

        res.render('companies', { companies, search })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/companies/new', checkAuthorization, async (req, res) => {
    try {
        // Get all Company Properties
        // GET /crm/v3/properties/:objectType/
        // https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public?branch=master&swaggerVersion=2
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve company properties.')
        const propertiesResponse = await hubspotClient.crm.properties.coreApi.getAll(COMPANY_OBJECT_TYPE)
        logResponse(propertiesResponse)
        const properties = preparePropertiesForView({}, propertiesResponse.body.results)

        res.render('company', { companyId: '', properties, contacts: null })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/companies/:id', checkAuthorization, async (req, res) => {
    try {
        const companyId = _.get(req, 'params.id')

        // Get all Company Properties
        // GET /crm/v3/properties/:objectType/
        // https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public?branch=master&swaggerVersion=2
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve company properties.')
        const propertiesResponse = await hubspotClient.crm.properties.coreApi.getAll(COMPANY_OBJECT_TYPE)
        logResponse(propertiesResponse)

        const companyPropertiesNames = _.map(propertiesResponse.body.results, 'name')

        // Get a company record by its id
        // GET /crm/v3/objects/:objectType/:objectId
        // https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview
        console.log('Calling crm.objects.getById API method. Retrieve a company by id:', companyId)
        const companyResponse = await hubspotClient.crm.objects.basicApi.getById(
            COMPANY_OBJECT_TYPE,
            companyId,
            companyPropertiesNames,
        )
        logResponse(companyResponse)

        // Get a Company associated Contacts ids
        // GET /crm/v3/objects/:objectType/:objectId/associations/:associatedObjectType
        // https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview
        console.log(
            `Calling crm.objects.associationsApi.getAssociations API method. Retrieve list of contacts id's associated with the company ${companyId}.`,
        )
        const companyAssociatedContactsResponse = await hubspotClient.crm.objects.associationsApi.getAssociations(
            COMPANY_OBJECT_TYPE,
            companyId,
            CONTACT_OBJECT_TYPE,
        )
        logResponse(companyAssociatedContactsResponse)

        const contactsReadBatchBody = {
            properties: ['email', 'firstname', 'lastname'],
            inputs: companyAssociatedContactsResponse.body.results,
        }

        // Read a list of contacts objects given a collection of IDs
        // POST /crm/v3/objects/:objectType/batch/read
        // https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview
        const contactsReadBatchResponse = await hubspotClient.crm.objects.batchApi.readBatch(
            CONTACT_OBJECT_TYPE,
            undefined,
            contactsReadBatchBody,
        )
        logResponse(contactsReadBatchResponse)

        const contacts = prepareAllContactsForView(contactsReadBatchResponse.body.results)
        const properties = preparePropertiesForView(companyResponse.body.properties, propertiesResponse.body.results)

        res.render('company', { companyId, properties, contacts })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/companies/:companyId/contacts', checkAuthorization, async (req, res) => {
    try {
        const query = _.get(req, 'query.search') || ''
        let contactsResponse
        if (_.isNil(query) || _.isEmpty(query)) {
            // Get all contacts
            // GET /crm/v3/objects/:objectType
            // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
            console.log('Calling crm.objects.basicApi.getPage API method. Retrieve contacts')
            contactsResponse = await hubspotClient.crm.objects.basicApi.getPage(CONTACT_OBJECT_TYPE, OBJECTS_LIMIT)
        } else {
            // Search for contacts by email, name, or company name
            // POST /crm/v3/objects/:objectType/search
            // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
            console.log(
                'Calling crm.objects.searchApi.doSearch API method. Retrieve contacts with search query:',
                query,
            )
            contactsResponse = await hubspotClient.crm.objects.searchApi.doSearch(CONTACT_OBJECT_TYPE, {
                query,
                limit: OBJECTS_LIMIT,
            })
        }
        logResponse(contactsResponse)

        const contacts = prepareAllContactsForView(contactsResponse.body.results)
        res.render('contacts', { contacts, search: query })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.post('/companies/:companyId/contacts', checkAuthorization, async (req, res) => {
    try {
        const companyId = _.get(req, 'params.companyId')
        const action = _.get(req, 'body.action')
        const contactsIds = _.chain(req)
            .get('body.contactsIds')
            .values()
            .value()

        if (!_.includes([ADD_ACTION, DELETE_ACTION], action)) {
            return res.redirect(`/error?msg=Unknown contacts action: ${action}`)
        }

        if (action === DELETE_ACTION) {
            await deleteCompanyContactsAssociations(companyId, contactsIds)
        } else {
            await createCompanyContactsAssociations(companyId, contactsIds)
        }
        res.redirect(`/companies/${companyId}`)
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.post('/companies/:companyId*?', checkAuthorization, async (req, res) => {
    try {
        const companyId = _.get(req, 'params.companyId')
        const properties = _.get(req, 'body')

        const response = _.isNil(companyId)
            ? await createCompany(properties)
            : await updateCompany(companyId, properties)

        logResponse(response)

        const id = _.get(response, 'body.id')
        res.redirect(`/companies/${id}`)
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
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

    // Get OAuth 2.0 Access Token and Refresh Tokens
    // POST /oauth/v1/token
    // https://developers.hubspot.com/docs/methods/oauth2/get-access-and-refresh-tokens
    console.log('Retrieving access token by code:', code)
    const tokenStoreResult = await hubspotClient.oauth.tokensApi.getTokens(
        'authorization_code',
        code,
        REDIRECT_URI,
        CLIENT_ID,
        CLIENT_SECRET,
    )
    logResponse(tokenStoreResult)

    tokenStore = tokenStoreResult.response.body
    tokenStore.updated_at = Date.now()

    // Set token for the
    // https://www.npmjs.com/package/hubspot
    hubspotClient.setAccessToken(tokenStore.access_token)
    res.redirect('/')
})

app.get('/error', (req, res) => {
    res.render('error', { error: req.query.msg })
})

app.use((error, req, res, next) => {
    res.render('error', { error: error.message })
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
