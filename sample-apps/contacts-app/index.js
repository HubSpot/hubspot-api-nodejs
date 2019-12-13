require('dotenv').config({ path: '.env' })
require('csv-express')

const _ = require('lodash')
const path = require('path')
const express = require('express')
const HubspotNew = require('../..')
const HubspotOld = require('hubspot')
const bodyParser = require('body-parser')
const Promise = require('bluebird')

const PORT = 3000
const CONTACTS_LIMIT = 30
const CONTACT_OBJECT_TYPE = 'contacts'
const ENGAGEMENT_OBJECT_TYPE = 'engagements'

const hubspotNew = HubspotNew({ apiKey: process.env.HUBSPOT_API_KEY })
const hubspotOld = new HubspotOld({ apiKey: process.env.HUBSPOT_API_KEY })

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
    {}
  )
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
    {}
  )
}

const getFullName = (contactProperties) => {
  const firstName = _.get(contactProperties, 'firstname') || ''
  const lastName = _.get(contactProperties, 'lastname') || ''
  return `${firstName} ${lastName}`
}

const isReadOnly = (property) => {
  return property.readOnlyValue || property.calculated
}

const getPropertyDetails = (property = {}) => {
  return {
    name: { label: 'Name', value: property.name },
    label: { label: 'Label', value: property.label },
    description: { label: 'Description', value: property.description },
    groupName: { label: 'Group Name', value: property.groupName },
    type: { label: 'Type', value: property.type },
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
      {}
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
  const engagement = await hubspotOld.apiRequest({ path: `/engagements/v1/engagements/${engagementId}` })
  console.log('Response from API', engagement)
  return engagement
}

const app = express()

app.use(express.static('css'))
app.use(express.static('html'))

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
  })
)

app.use(
  bodyParser.json({
    limit: '50mb',
    extended: true,
  })
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

      // Create or update a contact
      // POST /contacts/v1/contact/createOrUpdate/email/:contact_email
      // https://developers.hubspot.com/docs/methods/contacts/create_or_update
      console.log('Calling contacts.create_or_update API method. Create new contact with email:', email)
      const result = await hubspotNew.crm.objects.create(CONTACT_OBJECT_TYPE, {
        body: {
          properties,
        },
      })
      console.log('Response from API', result)

      res.redirect('/contacts')
    }
  } catch (e) {
    console.error(e)
    res.redirect(`/error?msg=${e.message}`)
  }
})

app.post('/contacts/:id', async (req, res) => {
  try {
    const id = _.get(req, 'params.id')
    const email = _.get(req, 'body.email')
    if (!_.isNil(email)) {
      const properties = req.body

      // Create a contact
      // POST /crm/v3/objects/:objectType/:objectId
      // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
      console.log('Calling contacts.create_or_update API method. Update contact with email:', email)
      const result = await hubspotNew.crm.objects.update(CONTACT_OBJECT_TYPE, id, {
        body: {
          properties,
        },
      })
      console.log('Response from API', result)

      res.redirect('/contacts')
    }
  } catch (e) {
    console.error(e)
    res.redirect(`/error?msg=${e.message}`)
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
      console.log('Calling crm.objects.getPage API method. Retrieve contacts')
      contactsResponse = await hubspotNew.crm.objects.getPage(CONTACT_OBJECT_TYPE, {
        limit: CONTACTS_LIMIT,
        properties,
      })
      console.log('Response from API', contactsResponse)
    } else {
      // Search for contacts by email, name, or company name
      // POST /crm/v3/objects/:objectType/search
      // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
      console.log('Calling crm.objects.doSearch API method. Retrieve contacts with search query:', query)
      contactsResponse = await hubspotNew.crm.objects.doSearch(CONTACT_OBJECT_TYPE, {
        body: {
          query,
          properties,
        },
        limit: CONTACTS_LIMIT,
      })
      console.log('Response from API', contactsResponse)
    }

    res.render('contacts', { contacts: prepareContactsContent(contactsResponse.results), query })
  } catch (e) {
    console.error(e)
    res.redirect(`/error?msg=${e.message}`)
  }
})

app.get('/contacts/new', async (req, res) => {
  try {
    // Get All Contacts Properties
    // GET /properties/v1/contacts/properties
    // https://developers.hubspot.com/docs/methods/contacts/v2/get_contacts_properties
    console.log('Calling contacts.properties.get API method. Retrieve all contacts properties')
    const hubspotProperties = await hubspotOld.contacts.properties.get()
    console.log('Response from API', hubspotProperties)

    // Get List of Owners
    // GET /owners/v2/owners/
    // https://developers.hubspot.com/docs/methods/owners/get_owners
    console.log('Calling hubspot.owners.get API method. Retrieve all contacts owners')
    const owners = await hubspotOld.owners.get()
    console.log('Response from API', owners)

    const editableProperties = getEditableProperties(hubspotProperties)
    const properties = getContactEditableProperties({}, editableProperties)

    res.render('list', { items: properties, owners, action: '/contacts' })
  } catch (e) {
    console.error(e)
    res.redirect(`/error?msg=${e.message}`)
  }
})

app.get('/contacts/:id', async (req, res) => {
  try {
    const id = _.get(req, 'params.id')
    if (_.isNil(id)) return res.redirect('/error?msg=Missed contact')

    // Get All Contacts Properties
    // GET /properties/v1/contacts/properties
    // https://developers.hubspot.com/docs/methods/contacts/v2/get_contacts_properties
    console.log('Calling contacts.properties.get API method. Retrieve all contacts properties')
    const hubspotProperties = await hubspotOld.contacts.properties.get()
    console.log('Response from API', hubspotProperties)

    // Get a contact record by its id
    // GET /crm/v3/objects/:objectType/:objectId
    // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
    console.log('Calling crm.objects.getById API method. Retrieve a contact by id:', id)
    const contact = await hubspotNew.crm.objects.getById(CONTACT_OBJECT_TYPE, id, {
      properties: _.map(hubspotProperties, 'name'),
    })
    console.log('Response from API', contact)

    // Get List of Owners
    // GET /owners/v2/owners/
    // https://developers.hubspot.com/docs/methods/owners/get_owners
    console.log('Calling hubspot.owners.get API method. Retrieve all contacts owners')
    const owners = await hubspotOld.owners.get()
    console.log('Response from API', owners)

    // Get Associated Engagements
    // GET /crm/v3/objects/:objectType/:objectId/associations/:associatedObjectType
    // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
    console.log('Calling crm.objects.getAssociations API method. Retrieve all contact engagements')
    let hubspotEngagements = await hubspotNew.crm.objects.getAssociations(
      CONTACT_OBJECT_TYPE,
      id,
      ENGAGEMENT_OBJECT_TYPE
    )
    console.log('Response from API', hubspotEngagements)

    hubspotEngagements = await Promise.map(hubspotEngagements.results, (engagement) => getEngagementById(engagement.id))

    const editableProperties = getEditableProperties(hubspotProperties)
    const properties = getContactEditableProperties(contact.properties, editableProperties)
    const engagements = prepareEngagements(hubspotEngagements)

    res.render('list', {
      items: properties,
      engagements,
      owners,
      action: `/contacts/${id}`,
      engagementAction: `/contacts/${id}/engagement`,
    })
  } catch (e) {
    console.error(e)
    res.redirect(`/error?msg=${e.message}`)
  }
})

app.get('/contacts/:id/engagement', async (req, res) => {
  try {
    const id = _.get(req, 'params.id')
    if (_.isNil(id)) return res.redirect('/error?msg=Missed contact')
    res.render('engagements', { id })
  } catch (e) {
    console.error(e)
    res.redirect(`/error?msg=${e.message}`)
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
    console.log('Calling engagements.create API method. Create contact engagement')
    const result = await hubspotOld.engagements.create(payload)
    console.log('Response from API', result)

    res.redirect(`/contacts/${id}`)
  } catch (e) {
    console.error(e)
    res.redirect(`/error?msg=${e.message}`)
  }
})

app.get('/properties', async (req, res) => {
  try {
    // Get All Contacts Properties
    // GET /properties/v1/contacts/properties
    // https://developers.hubspot.com/docs/methods/contacts/v2/get_contacts_properties
    console.log('Calling contacts.properties.get API method. Retrieve all contacts properties')
    const properties = await hubspotOld.contacts.properties.get()
    console.log('Response from API', properties)

    res.render('properties', { properties })
  } catch (e) {
    console.error(e)
    res.redirect(`/error?msg=${e.message}`)
  }
})

app.post('/properties', async (req, res) => {
  try {
    // Create a contact property
    // POST /properties/v1/contacts/properties
    // https://developers.hubspot.com/docs/methods/contacts/v2/create_contacts_property
    console.log('Calling contacts.properties.create API method. Create contact property')
    const result = await hubspotOld.contacts.properties.create(req.body)
    console.log('Response from API', result)

    res.redirect('/properties')
  } catch (e) {
    console.error(e)
    res.redirect(`/error?msg=${e.message}`)
  }
})

app.post('/properties/:name', async (req, res) => {
  try {
    const name = _.get(req, 'params.name')

    // Update a contact property
    // PUT /properties/v1/contacts/properties/named/:property_name
    // https://developers.hubspot.com/docs/methods/contacts/v2/update_contact_property
    console.log('Calling contacts.properties.update API method. Update contact property, with name:', name)
    const result = await hubspotOld.contacts.properties.update(name, req.body)
    console.log('Response from API', result)

    res.redirect('/properties')
  } catch (e) {
    console.error(e)
    res.redirect(`/error?msg=${e.message}`)
  }
})

app.get('/properties/new', async (req, res) => {
  res.render('list', { items: getPropertyDetails(), action: '/properties' })
})

app.get('/properties/:name', async (req, res) => {
  try {
    const name = _.get(req, 'params.name')
    if (_.isNil(name)) return res.redirect('/error?msg=Missed property')

    // Get All Contacts Properties
    // GET /properties/v1/contacts/properties
    // https://developers.hubspot.com/docs/methods/contacts/v2/get_contacts_properties
    console.log('Calling contacts.properties.get API method. Retrieve all contacts properties')
    const hubspotProperties = await hubspotOld.contacts.properties.get()
    console.log('Response from API', hubspotProperties)

    const property = _.find(hubspotProperties, { name })
    const properties = getPropertyDetails(property)
    res.render('list', { items: properties, action: `/properties/${name}` })
  } catch (e) {
    console.error(e)
    res.redirect(`/error?msg=${e.message}`)
  }
})

app.get('/export', async (req, res) => {
  try {
    // Get All Contacts Properties
    // GET /properties/v1/contacts/properties
    // https://developers.hubspot.com/docs/methods/contacts/v2/get_contacts_properties
    console.log('Calling contacts.properties.get API method. Retrieve all contacts properties')
    const properties = await hubspotOld.contacts.properties.get()
    console.log('Response from API', properties)

    // Get all contacts
    // GET /crm/v3/objects/:objectType
    // https://tools.hubteam.com/api-catalog/services/CrmPublicPipelines-Service/v3/spec/internal
    console.log('Calling crm.objects.getPage API method. Retrieve contacts')
    const contactsResponse = await hubspotNew.crm.objects.getPage(CONTACT_OBJECT_TYPE, {
      limit: CONTACTS_LIMIT,
      properties: _.map(properties, 'name'),
    })
    console.log('Response from API', contactsResponse)

    const csvContent = toCsv(contactsResponse.results, properties)

    res.csv(csvContent, true, { 'Content-disposition': 'attachment; filename=contacts.csv' })
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
