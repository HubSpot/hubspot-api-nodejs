const hubspot = require('../../../..')
const DEVELOPER_API_KEY = process.env.HUBSPOT_DEVELOPER_API_KEY
const hubspotClient = new hubspot.Client()
const hubspotClientWithDevApiKey = new hubspot.Client({ apiKey: DEVELOPER_API_KEY })

module.exports = {
    getHubspotClient: () => hubspotClient,
    getHubspotClientWithDevApiKey: () => hubspotClientWithDevApiKey,
}
