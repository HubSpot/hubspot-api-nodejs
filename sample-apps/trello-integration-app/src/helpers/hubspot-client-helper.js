const hubspot = require('@hubspot/api-client')
const hubspotOauthHelper = require('./hubspot-oauth-helper')
const DEVELOPER_API_KEY = process.env.HUBSPOT_DEVELOPER_API_KEY
let hubspotClient

module.exports = {
    getClient: async () => {
        if (hubspotClient) {
            return hubspotClient
        }

        hubspotClient = new hubspot.Client({ developerApiKey: DEVELOPER_API_KEY })

        if (await hubspotOauthHelper.verifyAuthorization()) {
            return hubspotOauthHelper.refreshToken(hubspotClient)
        }

        return hubspotClient
    },
}
