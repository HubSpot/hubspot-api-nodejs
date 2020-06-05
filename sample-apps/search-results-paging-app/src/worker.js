const _ = require('lodash')
const hubspotClientHelper = require('./helpers/hubspot-client-helper')
const SEARCH_LIMIT = 100
let hubspotClient

const searchNextContactsBatch = async (after, limit, query) => {
    const searchParams = {
        filterGroups: [
            {
                filters: [
                    {
                        propertyName: 'hs_object_id',
                        operator: 'GT',
                        value: after,
                    },
                ],
            },
        ],
        query,
        limit,
        sorts: [{ propertyName: 'hs_object_id', direction: 'ASCENDING' }],
        properties: ['hs_object_id'],
    }
    // Search for contacts
    // POST /crm/v3/objects/contacts/search
    // https://developers.hubspot.com/docs/api/crm/contacts
    const result = await hubspotClient.crm.contacts.searchApi.doSearch(searchParams)
    return _.get(result, 'body.results') || []
}

const processContactsBatch = (contactsBatch) => {
    const contactIds = _.map(contactsBatch, 'id')
    console.log(`Processed contact id's: ${contactIds}`)
}

;(async () => {
    try {
        console.log('Started worker execution')
        hubspotClient = await hubspotClientHelper.getHubspotClientWithRefreshedToken()
        const query = process.env.CONTACTS_SEARCH_QUERY
        let after = 0

        do {
            const contactsBatch = await searchNextContactsBatch(after, SEARCH_LIMIT, query)

            if (_.isEmpty(contactsBatch)) {
                break
            }

            processContactsBatch(contactsBatch)
            after = _.last(contactsBatch).id
        } while (true)

        console.log('Finished worker execution')
    } catch (e) {
        console.error('Error during worker execution. ', e)
    }
})()
