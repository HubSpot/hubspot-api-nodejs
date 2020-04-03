require('./config')
const _ = require('lodash')
const path = require('path')
const express = require('express')
const hubspot = require('../../..')
const bodyParser = require('body-parser')

const PORT = 3000

const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET
const SCOPE = 'contacts'
const OBJECTS_LIMIT = 30
const ADD_ACTION = 'Add selected to company'
const DELETE_ACTION = 'Delete selected from Company'
const REDIRECT_URI = `http://localhost:${PORT}/oauth-callback`
const CONTACT_OBJECT_TYPE = 'contacts'
const COMPANY_OBJECT_TYPE = 'companies'
const REFRESH_TOKEN = 'refresh_token'
const COMPANY_TO_CONTACT_ASSOCIATION_TYPE = 'company_to_contact'

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
    return !_.isEmpty(tokenStore.refreshToken)
}

const isTokenExpired = () => {
    return Date.now() >= tokenStore.updatedAt + tokenStore.expiresIn * 1000
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

    hubspotClient.setAccessToken(tokenStore.accessToken)
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

const hubspotClient = new hubspot.Client()

const getAllCompanies = async () => {
    // Get companies
    // GET /crm/v3/objects/companies
    // https://developers.hubspot.com/docs-beta/crm/companies
    console.log('Calling crm.companies.basicApi.getPage API method. Retrieve all companies.')
    const companiesResponse = await hubspotClient.crm.companies.basicApi.getPage(OBJECTS_LIMIT)
    logResponse(companiesResponse)

    return companiesResponse.body.results
}

const getCompaniesByDomain = async (domain) => {
    const searchBody = {
        filterGroups: [
            {
                filters: [
                    {
                        propertyName: 'domain',
                        operator: 'EQ',
                        value: domain,
                    },
                ],
            },
        ],
        sorts: [],
        limit: OBJECTS_LIMIT,
        after: 0,
        properties: [],
    }
    // Search for companies by domain
    // POST /crm/v3/objects/companies/search
    // https://developers.hubspot.com/docs-beta/crm/companies
    console.log('Calling crm.companies.searchApi.doSearch API method. Retrieve companies by domain.')
    const companiesResponse = await hubspotClient.crm.companies.searchApi.doSearch(searchBody)
    logResponse(companiesResponse)

    return companiesResponse.body.results
}

const createCompany = async (properties) => {
    // Create a Company
    // POST /crm/v3/objects/companies/
    // https://developers.hubspot.com/docs-beta/crm/companies
    console.log('Calling crm.companies.basicApi.create API method. Create company.')
    return hubspotClient.crm.companies.basicApi.create({ properties })
}

const updateCompany = (id, properties) => {
    // Update a Company
    // PATCH /crm/v3/objects/companies/:objectId/
    // https://developers.hubspot.com/docs-beta/crm/companies
    console.log('Calling crm.companies.basicApi.update API method. Update company.')
    return hubspotClient.crm.companies.basicApi.update(id, { properties })
}

const deleteCompanyContactsAssociations = async (companyId, contactIds) => {
    const requestBody = {
        inputs: _.map(contactIds, (contactId) => {
            return {
                from: { id: companyId },
                to: { id: contactId },
                type: COMPANY_TO_CONTACT_ASSOCIATION_TYPE,
            }
        }),
    }
    // Remove an associations between company and contacts
    // DELETE /crm/v3/associations/:fromObjectType/:toObjectType/batch/archive
    // https://developers.hubspot.com/docs-beta/crm/associations
    console.log(
        'Calling crm.associations.batchApi.archiveBatch API method. Deleting association between company and contacts.',
    )
    const deleteAssociationsResponse = await hubspotClient.crm.associations.batchApi.archiveBatch(
        COMPANY_OBJECT_TYPE,
        CONTACT_OBJECT_TYPE,
        requestBody,
    )
    logResponse(deleteAssociationsResponse)
}

const createCompanyContactsAssociations = async (companyId, contactIds) => {
    const requestBody = {
        inputs: _.map(contactIds, (contactId) => {
            return {
                from: { id: companyId },
                to: { id: contactId },
                type: COMPANY_TO_CONTACT_ASSOCIATION_TYPE,
            }
        }),
    }
    console.log('requestBody', JSON.stringify(requestBody))
    // Associate company and contacts
    // POST /crm/v3/associations/:fromObjectType/:toObjectType/batch/create
    // https://developers.hubspot.com/docs-beta/crm/associations
    console.log(
        'Calling crm.associations.batchApi.createBatch API method. Creating association between company and contacts.',
    )
    const createAssociationsResponse = await hubspotClient.crm.associations.batchApi.createBatch(
        COMPANY_OBJECT_TYPE,
        CONTACT_OBJECT_TYPE,
        requestBody,
    )
    logResponse(createAssociationsResponse)
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
        handleError(e, res)
    }
})

app.get('/companies/new', checkAuthorization, async (req, res) => {
    try {
        // Get all Company Properties
        // GET /crm/v3/properties/:objectType/
        // https://developers.hubspot.com/docs-beta/crm/properties
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve company properties.')
        const propertiesResponse = await hubspotClient.crm.properties.coreApi.getAll(COMPANY_OBJECT_TYPE)
        logResponse(propertiesResponse)
        const properties = preparePropertiesForView({}, propertiesResponse.body.results)

        res.render('company', { companyId: '', properties, contacts: null })
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/companies/:id', checkAuthorization, async (req, res) => {
    try {
        const companyId = _.get(req, 'params.id')

        // Get all Company Properties
        // GET /crm/v3/properties/:objectType/
        // https://developers.hubspot.com/docs-beta/crm/properties
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve company properties.')
        const propertiesResponse = await hubspotClient.crm.properties.coreApi.getAll(COMPANY_OBJECT_TYPE)
        logResponse(propertiesResponse)

        const companyPropertiesNames = _.map(propertiesResponse.body.results, 'name')

        // Get a company record by it's id
        // GET /crm/v3/objects/companies/:objectId
        // https://developers.hubspot.com/docs-beta/crm/companies
        console.log('Calling crm.companies.basicApi.getById API method. Retrieve a company by id:', companyId)
        const companyResponse = await hubspotClient.crm.companies.basicApi.getById(companyId, companyPropertiesNames)
        logResponse(companyResponse)

        // Get a Company associated Contacts id's
        // GET /crm/v3/objects/companies/:objectId/associations/:associatedObjectType
        // https://developers.hubspot.com/docs-beta/crm/companies
        console.log(
            `Calling crm.companies.associationsApi.getAssociations API method. Retrieve list of contacts id's associated with the company ${companyId}.`,
        )
        const companyAssociatedContactsResponse = await hubspotClient.crm.companies.associationsApi.getAssociations(
            companyId,
            CONTACT_OBJECT_TYPE,
        )
        logResponse(companyAssociatedContactsResponse)

        const contactsReadBatchBody = {
            properties: ['email', 'firstname', 'lastname'],
            inputs: companyAssociatedContactsResponse.body.results,
        }

        // Read a list of contacts objects given a collection of IDs
        // POST /crm/v3/objects/contacts/batch/read
        // https://developers.hubspot.com/docs-beta/crm/contacts
        console.log(`Calling crm.contacts.batchApi.readBatch API method. Retrieve list of contacts.`)
        const contactsReadBatchResponse = await hubspotClient.crm.contacts.batchApi.readBatch(
            false,
            contactsReadBatchBody,
        )
        logResponse(contactsReadBatchResponse)

        const contacts = prepareAllContactsForView(contactsReadBatchResponse.body.results)
        const properties = preparePropertiesForView(companyResponse.body.properties, propertiesResponse.body.results)

        res.render('company', { companyId, properties, contacts })
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/companies/:companyId/contacts', checkAuthorization, async (req, res) => {
    try {
        const query = _.get(req, 'query.search') || ''
        let contactsResponse
        if (_.isNil(query) || _.isEmpty(query)) {
            // Get contacts
            // GET /crm/v3/objects/contacts
            // https://developers.hubspot.com/docs-beta/crm/contacts
            console.log('Calling crm.contacts.basicApi.getPage API method. Retrieve contacts')
            contactsResponse = await hubspotClient.crm.contacts.basicApi.getPage(OBJECTS_LIMIT)
        } else {
            // Search for contacts
            // POST /crm/v3/objects/contacts/search
            // https://developers.hubspot.com/docs-beta/crm/contacts
            console.log(
                'Calling crm.contacts.searchApi.doSearch API method. Retrieve contacts with search query:',
                query,
            )
            contactsResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
                filterGroups: [],
                query,
                limit: OBJECTS_LIMIT,
                after: 0,
                properties: [],
                sorts: [],
            })
        }
        logResponse(contactsResponse)

        const contacts = prepareAllContactsForView(contactsResponse.body.results)
        res.render('contacts', { contacts, search: query })
    } catch (e) {
        handleError(e, res)
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
        handleError(e, res)
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
    const authorizationUrl = hubspotClient.oauth.getAuthorizationUrl(CLIENT_ID, REDIRECT_URI, SCOPE)
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
    hubspotClient.setAccessToken(tokenStore.accessToken)
    res.redirect('/')
})

app.get('/error', (req, res) => {
    res.render('error', { error: req.query.msg })
})

app.use((error, req, res, next) => {
    res.render('error', { error: error.message })
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
