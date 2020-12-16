const hubspot = require('@hubspot/api-client')
const _ = require('lodash')
const Promise = require('bluebird')

const hubspotClient = new hubspot.Client({ apiKey: process.env.HUBSPOT_API_KEY })

const CONTACTS_TO_CREATE = [
    {
        properties: {
            address: 'test address 01',
            email: 'oauth.sample.test.01@hubspot.com',
            city: 'test city 01',
            country: 'test country 01',
            firstname: 'Contact created for test oauth-sample',
            lastname: '01',
        },
    },
    {
        properties: {
            address: 'test address 02',
            email: 'oauth.sample.test.02@hubspot.com',
            city: 'test city 02',
            country: 'test country 02',
            firstname: 'Contact created for test oauth-sample',
            lastname: '02',
        },
    },
]

const getContactsIdsCreatedForTests = async (query) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const searchBody = {
        filterGroups: [],
        sorts: [],
        limit: 30,
        after: 0,
        properties: [],
        query,
    }
    const searchResult = await hubspotClient.crm.contacts.searchApi.doSearch(searchBody)
    return _.map(searchResult.body.results, (company) => {
        return { id: company.id }
    })
}

const restoreEnvironment = async () => {
    console.log('Archiving contacts created for tests')
    const contactsIdsToArchive = await getContactsIdsCreatedForTests(CONTACTS_TO_CREATE[0].properties.firstname)
    await hubspotClient.crm.contacts.batchApi.archive({ inputs: contactsIdsToArchive })
}

exports.initializeEnvironment = async () => {
    await restoreEnvironment()

    console.log('Creating contacts for tests')
    await hubspotClient.crm.contacts.batchApi.create({
        inputs: CONTACTS_TO_CREATE,
    })
}

exports.restoreEnvironment = restoreEnvironment

exports.createdContacts = CONTACTS_TO_CREATE
