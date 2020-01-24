const hubspot = require('../../../../..')
const _ = require('lodash')
const Promise = require('bluebird')

const hubspotClient = new hubspot.Client({ apiKey: process.env.HUBSPOT_API_KEY })
const CONTACTS_TO_CREATE = [
    {
        properties: {
            address: 'test address 01',
            email: 'contacts.sample.test.01@hubspot.com',
            city: 'test city 01',
            country: 'test country 01',
            firstname: 'Contact created for test contacts-sample',
            lastname: '01',
        },
    },
    {
        properties: {
            address: 'test address 02',
            email: 'contacts.sample.test.02@hubspot.com',
            city: 'test city 02',
            country: 'test country 02',
            firstname: 'Contact created for test contacts-sample',
            lastname: '02',
        },
    },
]

const CONTACT_TEST_PROPERTY_GROUP = {
    name: 'test-contacts',
    label: 'Test Contacts Property Group',
}

const CONTACT_PROPERTIES_TO_CREATE = [
    {
        name: 'contacts_sample_test_01',
        label: 'Contact sample test 01',
        description: 'Property created for test contacts-sample',
        groupName: CONTACT_TEST_PROPERTY_GROUP.name,
        type: 'string',
        fieldType: 'text',
    },
    {
        name: 'contacts_sample_test_02',
        label: 'Contact sample test 02',
        description: 'Property created for test contacts-sample',
        groupName: CONTACT_TEST_PROPERTY_GROUP.name,
        type: 'string',
        fieldType: 'text',
    },
]

const CONTACT_OBJECT_TYPE = 'contacts'

const getObjectsIdsCreatedForTests = async (objectType, query) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const searchBody = {
        filterGroups: [],
        sorts: [],
        limit: 30,
        after: 0,
        properties: [],
        query,
    }
    const searchFn = _.get(hubspotClient, `crm.${objectType}.searchApi`)
    const searchResult = await searchFn.doSearch(searchBody)
    return _.map(searchResult.body.results, (company) => {
        return { id: company.id }
    })
}

const restoreEnvironment = async () => {
    console.log('Archiving contacts created for tests')
    const contactsIdsToArchive = await getObjectsIdsCreatedForTests(
        CONTACT_OBJECT_TYPE,
        CONTACTS_TO_CREATE[0].properties.firstname,
    )
    await hubspotClient.crm.contacts.batchApi.archiveBatch({ inputs: contactsIdsToArchive })

    console.log('Archiving contact properties created for tests')
    const propertiesBatchArchiveInputs = _.map(CONTACT_PROPERTIES_TO_CREATE, (contactProperty) => _.pick(contactProperty, ['name']))
    propertiesBatchArchiveInputs.push({ name: 'contacts_sample_test_03' })
    await hubspotClient.crm.properties.batchApi.archiveBatch(CONTACT_OBJECT_TYPE, {
        inputs: propertiesBatchArchiveInputs,
    })

    console.log('Archiving `test-contacts` contact property group created for tests')
    try {
        await hubspotClient.crm.properties.groupsApi.archive(CONTACT_OBJECT_TYPE, CONTACT_TEST_PROPERTY_GROUP.name)
    } catch (e) {
        const groupsErrorCode = _.get(e, 'response.body.groupsErrorCode')

        if (_.isEqual(groupsErrorCode, 'GROUP_NOT_FOUND')) {
            return
        }

        throw e
    }
}

exports.initializeEnvironment = async () => {
    await restoreEnvironment()

    console.log('Creating contacts for tests')
    await hubspotClient.crm.contacts.batchApi.createBatch({
        inputs: CONTACTS_TO_CREATE,
    })

    console.log('Creating a `test-contacts` contact property group')
    await hubspotClient.crm.properties.groupsApi.create(CONTACT_OBJECT_TYPE, CONTACT_TEST_PROPERTY_GROUP)

    console.log('Creating contact properties for test')
    await hubspotClient.crm.properties.batchApi.createBatch(CONTACT_OBJECT_TYPE, {
        inputs: CONTACT_PROPERTIES_TO_CREATE,
    })
}

exports.restoreEnvironment = restoreEnvironment

exports.createdContacts = CONTACTS_TO_CREATE
exports.createdProperties = CONTACT_PROPERTIES_TO_CREATE
exports.createdPropertyGroup = CONTACT_TEST_PROPERTY_GROUP
