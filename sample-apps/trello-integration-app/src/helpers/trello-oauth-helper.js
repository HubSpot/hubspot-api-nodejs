const _ = require('lodash')
const mysqlDbHelper = require('../helpers/mysql-db-helper')

module.exports = {
    verifyAuthorization: async () => {
        const token = await mysqlDbHelper.getTrelloToken()
        return !_.isEmpty(token)
    },
    getAuthUrl: (key, returnUrl, name = 'HubSpot', expiration = 'never', scope = 'read', responseType = 'token') =>
        `https://trello.com/1/authorize?key=${key}&name=${name}&expiration=${expiration}&response_type=${responseType}&scope=${scope}&return_url=${returnUrl}`,
    getOauthRedirectUri: async () => {
        const baseUrl = await mysqlDbHelper.getUrl()
        return `${baseUrl}/oauth/trello/callback`
    },
}
