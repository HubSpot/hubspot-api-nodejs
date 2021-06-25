require('dotenv').config({ path: '.env' })
require('csv-express')

const _ = require('lodash')
const path = require('path')
const express = require('express')
// eslint-disable-next-line node/no-unpublished-require
const hubspot = require('@hubspot/api-client')
const bodyParser = require('body-parser')
const Promise = require('bluebird')

const PORT = 3000
const CONTACTS_LIMIT = 100
const CONTACT_OBJECT_TYPE = 'contacts'
const ENGAGEMENT_OBJECT_TYPE = 'engagements'

const hubspotClient = new hubspot.Client({ apiKey: process.env.HUBSPOT_API_KEY })

const logResponse = (data) => {
    console.log('Response from API', JSON.stringify(data, null, 1))
}

const checkEnv = (req, res, next) => {
    if (_.startsWith(req.url, '/error')) {
        return next()
    }
    if (_.isNil(process.env.HUBSPOT_API_KEY)) {
        return res.redirect('/error?msg=Please set HUBSPOT_API_KEY env variable to proceed')
    }

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
            if (!isReadOnly(property)) {
                editableProps[property.name] = { name: property.name, label: property.label }
            }
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
            if (!isMutable(property)) {
                mutableProps[property.name] = property
            }
            return mutableProps
        },
        {},
    )
}

const isMutable = (property) => {
    return property.modificationMetadata.readOnlyDefinition
}

const getContactEditableProperties = (contactProperties, editableProperties) => {
    return _.reduce(
        editableProperties,
        (contactEditableProperties, property, propertyName) => {
            contactEditableProperties[propertyName] = property
            const contactProperty = contactProperties[propertyName]
            if (contactProperty) {
                contactEditableProperties[propertyName].value = contactProperty
            }

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
    return property.modificationMetadata.readOnlyValue || property.calculated
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
    const engagementResponse = await hubspotClient.apiRequest({ path: `/engagements/v1/engagements/${engagementId}` })
    logResponse(engagementResponse)
    return engagementResponse.body
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

const getAllContacts = async (properties, query) => {
    const contacts = []
    let contactsResponse
    let after
    do {
        if (_.isNil(query) || _.isEmpty(query)) {
            // Get contacts
            // GET /crm/v3/objects/contacts
            // https://developers.hubspot.com/docs/api/crm/contacts
            console.log('Calling crm.contacts.basicApi.getPage API method. Retrieve contacts')
            contactsResponse = await hubspotClient.crm.contacts.basicApi.getPage(CONTACTS_LIMIT, after, properties)
        } else {
            // Search for contacts
            // POST /crm/v3/objects/contacts/search
            // https://developers.hubspot.com/docs/api/crm/contacts
            console.log(
                'Calling crm.contacts.searchApi.doSearch API method. Retrieve contacts with search query:',
                query,
            )
            contactsResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
                query,
                limit: CONTACTS_LIMIT,
                properties,
                filterGroups: [],
                after,
                sorts: ['firstname'],
            })
        }
        logResponse(contactsResponse)
        after = _.get(contactsResponse, 'body.paging.next.after')
        contacts.push(...contactsResponse.body.results)
    } while (!_.isNil(after))

    return contacts
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
            // POST /crm/v3/objects/contacts/
            // https://developers.hubspot.com/docs/api/crm/contacts
            console.log('Calling crm.contacts.basicApi.create API method. Create new contact')
            const createResponse = await hubspotClient.crm.contacts.basicApi.create({ properties })
            logResponse(createResponse)

            const id = _.get(createResponse, 'body.id')

            res.redirect(`/contacts/${id}`)
        }
    } catch (e) {
        handleError(e, res)
    }
})

app.post('/contacts/:id', async (req, res) => {
    try {
        const id = _.get(req, 'params.id')
        const email = _.get(req, 'body.email')
        if (!_.isNil(email)) {
            const properties = req.body

            // Update a contact
            // POST /crm/v3/objects/contacts/:objectId
            // https://developers.hubspot.com/docs/api/crm/contacts
            console.log('Calling crm.contacts.basicApi.update API method. Update contact with id:', id)
            const updateResponse = await hubspotClient.crm.contacts.basicApi.update(id, { properties })
            logResponse(updateResponse)

            res.redirect(`/contacts/${id}`)
        }
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/contacts', async (req, res) => {
    try {
        const query = _.get(req, 'query.search')
        const properties = ['firstname', 'lastname', 'company']
        const contacts = await getAllContacts(properties, query)
        res.render('contacts', { contacts: prepareContactsContent(contacts.slice(0, 50)), query })
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/contacts/new', async (req, res) => {
    try {
        // Get All Contacts Properties
        // GET /crm/v3/properties/:objectType
        // https://developers.hubspot.com/docs/api/crm/properties
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve all contacts properties')
        const propertiesResponse = await hubspotClient.crm.properties.coreApi.getAll(CONTACT_OBJECT_TYPE)
        logResponse(propertiesResponse)

        // Get List of Owners
        // GET /crm/v3/owners/
        // https://developers.hubspot.com/docs/api/crm/owners
        console.log('Calling crm.owners.defaultApi.getPage API method. Retrieve all contacts owners')
        const ownersResponse = await hubspotClient.crm.owners.defaultApi.getPage()
        logResponse(ownersResponse)

        const editableProperties = getEditableProperties(propertiesResponse.body.results)
        const properties = getContactEditableProperties({}, editableProperties)

        res.render('list', { items: properties, owners: ownersResponse.body.results, action: '/contacts' })
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/contacts/:id', async (req, res) => {
    try {
        const id = _.get(req, 'params.id')
        if (_.isNil(id)) {
            return res.redirect('/error?msg=Missed contact')
        }

        // Get All Contacts Properties
        // GET /crm/v3/properties/:objectType
        // https://developers.hubspot.com/docs/api/crm/properties
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve all contacts properties')
        const propertiesResponse = await hubspotClient.crm.properties.coreApi.getAll(CONTACT_OBJECT_TYPE)
        logResponse(propertiesResponse)

        const contactPropertiesNames = _.map(propertiesResponse.body.results, 'name')

        // Get a contact record by its id
        // GET /crm/v3/objects/contacts/:objectId
        // https://developers.hubspot.com/docs/api/crm/contacts
        console.log('Calling crm.contacts.basicApi.getById API method. Retrieve a contact by id:', id)
        const contactResponse = await hubspotClient.crm.contacts.basicApi.getById(id, contactPropertiesNames)
        logResponse(contactResponse)

        // Get List of Owners
        // GET /crm/v3/owners/
        // https://developers.hubspot.com/docs/api/crm/owners
        console.log('Calling crm.owners.defaultApi.getPage API method. Retrieve all contacts owners')
        const ownersResponse = await hubspotClient.crm.owners.defaultApi.getPage()
        logResponse(ownersResponse)

        // Get Associated Engagements
        // GET /crm/v3/objects/:objectType/:objectId/associations/:associatedObjectType
        // https://developers.hubspot.com/docs/api/crm/associations
        console.log('Calling crm.contacts.associationsApi.getAll API method. Retrieve all contact engagements')
        const hubspotEngagementsResponse = await hubspotClient.crm.contacts.associationsApi.getAll(
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
        handleError(e, res)
    }
})

app.get('/contacts/:id/engagement', async (req, res) => {
    try {
        const id = _.get(req, 'params.id')
        if (_.isNil(id)) {
            return res.redirect('/error?msg=Missed contact')
        }
        res.render('engagements', { id })
    } catch (e) {
        handleError(e, res)
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
        const response = await hubspotClient.apiRequest({
            path: `/engagements/v1/engagements`,
            method: 'POST',
            body: payload,
        })
        logResponse(response)

        res.redirect(`/contacts/${id}`)
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/contacts/delete/:id', async (req, res) => {
    try {
        const id = _.get(req, 'params.id')

        if (!_.isNil(id)) {
            // Archive a contact
            // DELETE /crm/v3/objects/contacts/:objectId
            // https://developers.hubspot.com/docs/api/crm/contacts
            console.log('Calling crm.contacts.basicApi.archive API method. Archive contact with id:', id)
            const response = await hubspotClient.crm.contacts.basicApi.archive(id)
            logResponse(response)
        }

        res.redirect('/contacts')
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/properties', async (req, res) => {
    try {
        // Get All Contacts Properties
        // GET /crm/v3/properties/:objectType
        // https://developers.hubspot.com/docs/api/crm/properties
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve all contacts properties')
        const propertiesResponse = await hubspotClient.crm.properties.coreApi.getAll(CONTACT_OBJECT_TYPE)
        logResponse(propertiesResponse)

        const mutableProperties = getMutableProperties(propertiesResponse.body.results)

        res.render('properties', { properties: mutableProperties })
    } catch (e) {
        handleError(e, res)
    }
})

app.post('/properties', async (req, res) => {
    try {
        // Create a contact property
        // POST /crm/v3/properties/:objectType
        // https://developers.hubspot.com/docs/api/crm/properties
        console.log('Calling crm.properties.coreApi.create API method. Create contact property')
        const result = await hubspotClient.crm.properties.coreApi.create(CONTACT_OBJECT_TYPE, req.body)
        console.log('Response from API', result)

        const name = _.get(result, 'body.name')

        res.redirect(`/properties/${name}`)
    } catch (e) {
        handleError(e, res)
    }
})

app.post('/properties/:name', async (req, res) => {
    try {
        const name = _.get(req, 'params.name')

        // Update a contact property
        // PATCH /crm/v3/properties/:objectType/:propertyName
        // https://developers.hubspot.com/docs/api/crm/properties
        console.log('Calling crm.properties.coreApi.update API method. Update contact property, with name:', name)
        const result = await hubspotClient.crm.properties.coreApi.update(CONTACT_OBJECT_TYPE, name, req.body)
        console.log('Response from API', result)

        res.redirect(`/properties/${name}`)
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/properties/new', async (req, res) => {
    try {
        // Get Contact Property Groups
        // GET //crm/v3/properties/:objectType/groups
        // https://developers.hubspot.com/docs/api/crm/properties
        console.log('Calling crm.properties.groupsApi.getAll API method. Retrieve all contact property groups')
        const groupsResponse = await hubspotClient.crm.properties.groupsApi.getAll(CONTACT_OBJECT_TYPE)
        logResponse(groupsResponse)

        res.render('list', { items: getPropertyDetails(), action: '/properties', groups: groupsResponse.body.results })
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/properties/:name', async (req, res) => {
    try {
        const name = _.get(req, 'params.name')
        if (_.isNil(name)) {
            return res.redirect('/error?msg=Missed property')
        }

        // Get Contact Property by Name
        // GET /crm/v3/properties/:objectType/:propertyName
        // https://developers.hubspot.com/docs/api/crm/properties
        console.log('Calling crm.properties.coreApi.getByName API method. Retrieve all contacts properties')
        const propertyResponse = await hubspotClient.crm.properties.coreApi.getByName(CONTACT_OBJECT_TYPE, name)
        logResponse(propertyResponse)

        // Get Contact Property Groups
        // GET //crm/v3/properties/:objectType/groups
        // https://developers.hubspot.com/docs/api/crm/properties
        console.log('Calling crm.properties.groupsApi.getAll API method. Retrieve all contact property groups')
        const groupsResponse = await hubspotClient.crm.properties.groupsApi.getAll(CONTACT_OBJECT_TYPE)
        logResponse(groupsResponse)

        const propertyDetails = getPropertyDetails(propertyResponse.body)
        res.render('list', {
            items: propertyDetails,
            action: `/properties/${name}`,
            groups: groupsResponse.body.results,
        })
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/export', async (req, res) => {
    try {
        // Get All Contacts Properties
        // GET /crm/v3/properties/:objectType
        // https://developers.hubspot.com/docs/api/crm/properties
        console.log('Calling crm.properties.coreApi.getAll API method. Retrieve all contacts properties')
        const propertiesResponse = await hubspotClient.crm.properties.coreApi.getAll(CONTACT_OBJECT_TYPE)
        logResponse(propertiesResponse)

        const contactsPropertiesNames = _.map(propertiesResponse.body.results, 'name')
        console.log('Calling hubspotClient.crm.contacts.getAll API method. Retrieve all contacts')
        const contacts = await hubspotClient.crm.contacts.getAll(undefined, undefined, contactsPropertiesNames)
        const csvContent = toCsv(contacts, propertiesResponse.body.results)

        res.csv(csvContent, true, { 'Content-disposition': 'attachment; filename=contacts.csv' })
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/error', (req, res) => {
    res.render('error', { error: req.query.msg })
})

app.use((error, req, res, next) => {
    res.render('error', { error: error.message })
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
