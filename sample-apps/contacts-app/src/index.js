require('dotenv').config({ path: '.env' })
require('csv-express')

const _ = require('lodash')
const path = require('path')
const express = require('express')
// eslint-disable-next-line node/no-unpublished-require
const HubspotNew = require(`${__dirname}/../../..`)
const bodyParser = require('body-parser')
const Promise = require('bluebird')

const PORT = 3000
const CONTACTS_LIMIT = 30
const CONTACT_OBJECT_TYPE = 'contacts'
const ENGAGEMENT_OBJECT_TYPE = 'engagements'

const hubspotNew = HubspotNew({ apiKey: process.env.HUBSPOT_API_KEY })

const logResponse = (data) => {
    console.log('Response from API', JSON.stringify(data, null, 1))
}

const checkEnv = (req, res, next) => {
    if (_.startsWith(req.url, '/error')) return next()
    if (_.isNil(process.env.HUBSPOT_API_KEY))
        return res.redirect('/error?msg=Please set HUBSPOT_API_KEY env variable to proceed')

    next()
}

const prepareContactsContent = (contacts) => {
    return _.map(contacts, (contact) => {
        const companyName = _.get(contact, 'properties.company') || ''
        return { id: contact.id, name: getFullName(contact.properties), companyName }
    })
}

const toDate = (value) => {
    return _.isNil(value) ? null : new Date(value).getTime()
}

const prepareEngagements = (engagements) => {
    return _.map(engagements, (engagementDetails) => {
        const details = _.pick(engagementDetails.engagement, ['id', 'type'])
        details.title = _.get(engagementDetails, 'metadata.title') || ''
        console.log(details)
        return details
    })
}

const getEditableProperties = (properties) => {
    return _.reduce(
        properties,
        (editableProps, property) => {
            if (!isReadOnly(property)) editableProps[property.name] = { name: property.name, label: property.label }
            return editableProps
        },
        {},
    )
}

const getMutableProperties = (properties) => {
    console.log(JSON.stringify(properties, null, 1))
    return _.reduce(
        properties,
        (mutableProps, property) => {
            if (!isMutable(property)) mutableProps[property.name] = property
            return mutableProps
        },
        {},
    )
}

const isMutable = (property) => {
    return property.mutability.readOnlyDefinition
}

const getContactEditableProperties = (contactProperties, editableProperties) => {
    return _.reduce(
        editableProperties,
        (contactEditableProperties, property, propertyName) => {
            contactEditableProperties[propertyName] = property
            const contactProperty = contactProperties[propertyName]
            if (contactProperty) contactEditableProperties[propertyName].value = contactProperty

            return contactEditableProperties
        },
        {},
    )
}

const getFullName = (contactProperties) => {
    const firstName = _.get(contactProperties, 'firstname') || ''
    const lastName = _.get(contactProperties, 'lastname') || ''
    return `${firstName} ${lastName}`
}

const isReadOnly = (property) => {
    return property.mutability.readOnlyValue || property.calculated
}

const getPropertyDetails = (property = {}) => {
    return {
        name: { label: 'Name', value: property.name },
        label: { label: 'Label', value: property.label },
        description: { label: 'Description', value: property.description },
        groupName: { label: 'Group Name', value: property.groupName },
        type: { label: 'Type', value: property.type },
        fieldType: { label: 'Field Type', value: property.fieldType },
    }
}

const toCsv = (contacts, properties) => {
    return _.map(contacts, (contact) => {
        const csvContact = _.reduce(
            properties,
            (csvContact, property) => {
                csvContact[property.label] = _.get(contact, `properties.${property.name}`) || ''
                return csvContact
            },
            {},
        )

        console.log(csvContact)
        return csvContact
    })
}

const getEngagementById = async (engagementId) => {
    // Get a engagement record by its id
    // GET /engagements/v1/engagements/:engagementId
    // https://developers.hubspot.com/docs/methods/engagements/get_engagement
    console.log('Calling apiRequest API method. Retrieve a engagement by id:', engagementId)
    const engagementResponse = await hubspotNew.apiRequest({ path: `/engagements/v1/engagements/${engagementId}` })
    logResponse(engagementResponse)
    return engagementResponse.body
}

const app = express()

app.use(express.static('css'))
app.use(express.static('html'))

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

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(checkEnv)

app.get('/', async (req, res) => {
    res.redirect('/contacts')
})

app.post('/contacts', async (req, res) => {
    try {
        const email = _.get(req, 'body.email')
        if (!_.isNil(email)) {
            const properties = req.body

            // Create a contact
            // POST /crm/v3/objects/:objectType/
            // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
            console.log('Calling crm.objects.basicApi.create API method. Create new contact')
            const createResponse = await hubspotNew.crm.objects.basicApi.create(CONTACT_OBJECT_TYPE, { properties })
            logResponse(createResponse)

            res.redirect('/contacts')
        }
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.post('/contacts/:id', async (req, res) => {
    try {
        const id = _.get(req, 'params.id')
        const email = _.get(req, 'body.email')
        if (!_.isNil(email)) {
            const properties = req.body

            // Update a contact
            // POST /crm/v3/objects/:objectType/:objectId
            // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
            console.log('Calling crm.objects.basicApi.update API method. Update contact with id:', id)
            const updateResponse = await hubspotNew.crm.objects.basicApi.update(CONTACT_OBJECT_TYPE, id, { properties })
            logResponse(updateResponse)

            res.redirect('/contacts')
        }
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/contacts', async (req, res) => {
    try {
        const query = _.get(req, 'query.search')
        let contactsResponse = { results: [] }
        const properties = ['firstname', 'lastname', 'company']
        if (_.isNil(query)) {
            // Get all contacts
            // GET /crm/v3/objects/:objectType
            // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
            console.log('Calling crm.objects.basicApi.getPage API method. Retrieve contacts')
            contactsResponse = await hubspotNew.crm.objects.basicApi.getPage(
                CONTACT_OBJECT_TYPE,
                CONTACTS_LIMIT,
                undefined,
                properties,
            )
            logResponse(contactsResponse)
        } else {
            // Search for contacts by email, name, or company name
            // POST /crm/v3/objects/:objectType/search
            // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
            console.log(
                'Calling crm.objects.searchApi.doSearch API method. Retrieve contacts with search query:',
                query,
            )
            contactsResponse = await hubspotNew.crm.objects.searchApi.doSearch(CONTACT_OBJECT_TYPE, {
                query,
                limit: CONTACTS_LIMIT,
                properties,
            })
            logResponse(contactsResponse)
        }

        res.render('contacts', { contacts: prepareContactsContent(contactsResponse.response.body.results), query })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/contacts/new', async (req, res) => {
    try {
        // Get All Contacts Properties
        // GET /crm/v3/properties/{objectType}
        // https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve all contacts properties')
        const propertiesResponse = await hubspotNew.crm.properties.coreApi.getAll(CONTACT_OBJECT_TYPE)
        logResponse(propertiesResponse)

        // Get List of Owners
        // GET /crm/v3/owners/
        // https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fowners-preview
        console.log('Calling crm.owners.defaultApi.getPage API method. Retrieve all contacts owners')
        const ownersResponse = await hubspotNew.crm.owners.defaultApi.getPage()
        logResponse(ownersResponse)

        const editableProperties = getEditableProperties(propertiesResponse.body.results)
        const properties = getContactEditableProperties({}, editableProperties)

        res.render('list', { items: properties, owners: ownersResponse.body.results, action: '/contacts' })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/contacts/:id', async (req, res) => {
    try {
        const id = _.get(req, 'params.id')
        if (_.isNil(id)) return res.redirect('/error?msg=Missed contact')

        // Get All Contacts Properties
        // GET /crm/v3/properties/{objectType}
        // https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve all contacts properties')
        const propertiesResponse = await hubspotNew.crm.properties.coreApi.getAll(CONTACT_OBJECT_TYPE)
        logResponse(propertiesResponse)

        const contactPropertiesNames = _.map(propertiesResponse.body.results, 'name')

        // Get a contact record by its id
        // GET /crm/v3/objects/:objectType/:objectId
        // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
        console.log('Calling crm.objects.basicApi.getById API method. Retrieve a contact by id:', id)
        const contactResponse = await hubspotNew.crm.objects.basicApi.getById(
            CONTACT_OBJECT_TYPE,
            id,
            contactPropertiesNames,
        )
        logResponse(contactResponse)

        // Get List of Owners
        // GET /crm/v3/owners/
        // https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fowners-preview
        console.log('Calling crm.owners.defaultApi.getPage API method. Retrieve all contacts owners')
        const ownersResponse = await hubspotNew.crm.owners.defaultApi.getPage()
        logResponse(ownersResponse)

        // Get Associated Engagements
        // GET /crm/v3/objects/:objectType/:objectId/associations/:associatedObjectType
        // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
        console.log('Calling crm.objects.associationsApi.getAssociations API method. Retrieve all contact engagements')
        const hubspotEngagementsResponse = await hubspotNew.crm.objects.associationsApi.getAssociations(
            CONTACT_OBJECT_TYPE,
            id,
            ENGAGEMENT_OBJECT_TYPE,
        )
        logResponse(hubspotEngagementsResponse)

        const hubspotEngagements = await Promise.map(hubspotEngagementsResponse.body.results, (engagement) =>
            getEngagementById(engagement.id),
        )

        const editableProperties = getEditableProperties(propertiesResponse.body.results)
        const properties = getContactEditableProperties(contactResponse.body.properties, editableProperties)
        const engagements = prepareEngagements(hubspotEngagements)

        res.render('list', {
            items: properties,
            engagements,
            owners: ownersResponse.body.results,
            action: `/contacts/${id}`,
            engagementAction: `/contacts/${id}/engagement`,
        })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/contacts/:id/engagement', async (req, res) => {
    try {
        const id = _.get(req, 'params.id')
        if (_.isNil(id)) return res.redirect('/error?msg=Missed contact')
        res.render('engagements', { id })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.post('/contacts/:id/engagement', async (req, res) => {
    try {
        const id = _.get(req, 'params.id')
        let payload = _.clone(req.body)
        payload = _.set(payload, 'metadata.startTime', toDate(_.get(payload, 'metadata.startTime')))
        payload = _.set(payload, 'metadata.endTime', toDate(_.get(payload, 'metadata.endTime')))

        // Create an Engagement
        // POST /engagements/v1/engagements
        // https://developers.hubspot.com/docs/methods/engagements/create_engagement
        console.log('Calling apiRequest API method. Create contact engagement')
        const response = await hubspotNew.apiRequest({
            path: `/engagements/v1/engagements`,
            method: 'POST',
            body: payload,
        })
        logResponse(response)

        res.redirect(`/contacts/${id}`)
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/properties', async (req, res) => {
    try {
        // Get All Contacts Properties
        // GET /crm/v3/properties/{objectType}
        // https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve all contacts properties')
        const propertiesResponse = await hubspotNew.crm.properties.coreApi.getAll(CONTACT_OBJECT_TYPE)
        logResponse(propertiesResponse)

        const mutableProperties = getMutableProperties(propertiesResponse.body.results)

        res.render('properties', { properties: mutableProperties })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.post('/properties', async (req, res) => {
    try {
        // Create a contact property
        // POST /crm/v3/properties/{objectType}
        // https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public
        console.log('Calling crm.properties.coreApi.create API method. Create contact property')
        const result = await hubspotNew.crm.properties.coreApi.create(CONTACT_OBJECT_TYPE, req.body)
        console.log('Response from API', result)

        res.redirect('/properties')
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.post('/properties/:name', async (req, res) => {
    try {
        const name = _.get(req, 'params.name')

        // Update a contact property
        // PATCH /crm/v3/properties/{objectType}/{propertyName}
        // https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public
        console.log('Calling contacts.properties.update API method. Update contact property, with name:', name)
        const result = await hubspotNew.crm.properties.coreApi.update(CONTACT_OBJECT_TYPE, name, req.body)
        console.log('Response from API', result)

        res.redirect('/properties')
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/properties/new', async (req, res) => {
    try {
        // Get Contact Property Groups
        // GET /properties/v1/contacts/groups
        // https://developers.hubspot.com/docs/methods/contacts/v2/get_contact_property_groups
        console.log('Calling apiRequest API method. Retrieve all contact property groups')
        const groupsResponse = await hubspotNew.apiRequest({ path: `/properties/v1/contacts/groups` })
        logResponse(groupsResponse)

        res.render('list', { items: getPropertyDetails(), action: '/properties', groups: groupsResponse.body })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/properties/:name', async (req, res) => {
    try {
        const name = _.get(req, 'params.name')
        if (_.isNil(name)) return res.redirect('/error?msg=Missed property')

        // Get Contacts Property by Name
        // GET /crm/v3/properties/{objectType}/{propertyName}
        // https://developers.hubspot.com/docs/methods/contacts/v2/get_contacts_properties
        console.log('Calling crm.properties.coreApi.getByName API method. Retrieve all contacts properties')
        const propertyResponse = await hubspotNew.crm.properties.coreApi.getByName(CONTACT_OBJECT_TYPE, name)
        logResponse(propertyResponse)

        // Get Contact Property Groups
        // GET /properties/v1/contacts/groups
        // https://developers.hubspot.com/docs/methods/contacts/v2/get_contact_property_groups
        console.log('Calling apiRequest API method. Retrieve all contact property groups')
        const groupsResponse = await hubspotNew.apiRequest({ path: `/properties/v1/contacts/groups` })
        logResponse(groupsResponse)

        const propertyDetails = getPropertyDetails(propertyResponse.body)
        res.render('list', { items: propertyDetails, action: `/properties/${name}`, groups: groupsResponse.body })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/export', async (req, res) => {
    try {
        // Get All Contacts Properties
        // GET /crm/v3/properties/{objectType}
        // https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve all contacts properties')
        const propertiesResponse = await hubspotNew.crm.properties.coreApi.getAll(CONTACT_OBJECT_TYPE)
        logResponse(propertiesResponse)

        const contactsPropertiesNames = _.map(propertiesResponse.body.results, 'name')

        // Get all contacts
        // GET /crm/v3/objects/:objectType
        // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
        console.log('Calling crm.objects.basicApi.getPage API method. Retrieve contacts')
        const contactsResponse = await hubspotNew.crm.objects.basicApi.getPage(
            CONTACT_OBJECT_TYPE,
            CONTACTS_LIMIT,
            undefined,
            contactsPropertiesNames,
        )
        logResponse(contactsResponse)

        const csvContent = toCsv(contactsResponse.body.results, propertiesResponse.body.results)

        res.csv(csvContent, true, { 'Content-disposition': 'attachment; filename=contacts.csv' })
    } catch (e) {
        console.error(e)
        res.redirect(`/error?msg=${_.get(e, 'response.body.message') || e.message}`)
    }
})

app.get('/error', (req, res) => {
    res.render('error', { error: req.query.msg })
})

app.use((error, req, res, next) => {
    res.render('error', { error: error.message })
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
