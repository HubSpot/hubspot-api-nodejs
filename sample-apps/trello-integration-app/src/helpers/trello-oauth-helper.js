const _ = require('lodash')
const redisDbHelper = require('./redis-db-helper')

module.exports = {
    verifyAuthorization: async () => {
        const token = await redisDbHelper.getTrelloToken()
        return !_.isEmpty(token)
    },
    getAuthUrl: (key, returnUrl, name = 'HubSpot', expiration = 'never', scope = 'read', responseType = 'token') =>
        `https://trello.com/1/authorize?key=${key}&name=${name}&expiration=${expiration}&response_type=${responseType}&scope=${scope}&return_url=${returnUrl}`,
    getOauthRedirectUri: async () => {
        const baseUrl = await redisDbHelper.getUrl()
        return `${baseUrl}/oauth/trello/callback`
    },
}
