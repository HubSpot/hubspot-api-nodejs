const hubspot = require('../../../..')
const { refreshToken } = require('./oauth-helper')
const hubspotClient = new hubspot.Client()

module.exports = {
    getHubspotClient: () => hubspotClient,
    getHubspotClientWithRefreshedToken: () => refreshToken(hubspotClient),
}
