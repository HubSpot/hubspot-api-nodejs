const hubspotClientHelper = require('./helpers/hubspot-client-helper')
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
    const result = await hubspotClient.crm.contacts.searchApi.doSearch(searchParams)
    return result.body
}

;(async () => {
    try {
        hubspotClient = await hubspotClientHelper.getHubspotClientWithRefreshedToken()
        const result = await searchNextContactsBatch(0, 100, 'aprots')
        console.log(JSON.stringify(result, null, 2))
    } catch (e) {
        console.error('Error during app start. ', e)
    }
})()
