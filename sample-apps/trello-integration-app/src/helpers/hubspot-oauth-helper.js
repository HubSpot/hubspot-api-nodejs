const _ = require('lodash')
const redisDbHelper = require('./redis-db-helper')

const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET
const REFRESH_TOKEN = 'refresh_token'

module.exports = {
    refreshToken: async (hubspotClient) => {
        let tokensData = await redisDbHelper.getHubspotTokensData()

        if (!tokensData.refreshToken) {
            throw new Error('Cannot find refresh token')
        }

        console.log(`Refreshing hubspot token`)
        // Create OAuth 2.0 Access Token and Refresh Tokens
        // POST /oauth/v1/token
        // https://developers.hubspot.com/docs/api/working-with-oauth
        const result = await hubspotClient.oauth.defaultApi.createToken(
            REFRESH_TOKEN,
            undefined,
            undefined,
            CLIENT_ID,
            CLIENT_SECRET,
            tokensData.refreshToken,
        )

        tokensData = { ...result.body, updatedAt: Date.now() }
        console.log('Updated tokens', tokensData)
        await redisDbHelper.saveHubspotTokensData(tokensData)
        hubspotClient.setAccessToken(tokensData.accessToken)
        return hubspotClient
    },

    verifyAuthorization: async () => {
        const tokensData = await redisDbHelper.getHubspotTokensData()
        return !_.isEmpty(tokensData)
    },

    verifyTokenExpiration: async () => {
        const tokensData = await redisDbHelper.getHubspotTokensData()
        return Date.now() >= tokensData.updatedAt + tokensData.expiresIn * 1000
    },
    getOauthRedirectUri: async () => {
        const baseUrl = await redisDbHelper.getUrl()
        return `${baseUrl}/oauth/hubspot/callback`
    },
}
