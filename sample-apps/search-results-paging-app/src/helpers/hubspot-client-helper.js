const hubspot = require('@hubspot/api-client')
const { refreshToken } = require('./oauth-helper')
const hubspotClient = new hubspot.Client()

module.exports = {
    getHubspotClient: () => hubspotClient,
    getHubspotClientWithRefreshedToken: () => refreshToken(hubspotClient),
}
