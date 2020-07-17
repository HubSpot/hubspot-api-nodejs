const hubspot = require('../../../..')
const hubspotOauthHelper = require('./hubspot-oauth-helper')
const DEVELOPER_API_KEY = process.env.HUBSPOT_DEVELOPER_API_KEY
let hubspotClient
const hubspotClientWithDevApiKey = new hubspot.Client({ apiKey: DEVELOPER_API_KEY })

module.exports = {
    getClient: async () => {
        if (hubspotClient) {
            return hubspotClient
        }

        hubspotClient = new hubspot.Client()

        if (await hubspotOauthHelper.verifyAuthorization()) {
            return hubspotOauthHelper.refreshToken(hubspotClient)
        }

        return hubspotClient
    },
    getClientWithDevApiKey: () => hubspotClientWithDevApiKey,
}
