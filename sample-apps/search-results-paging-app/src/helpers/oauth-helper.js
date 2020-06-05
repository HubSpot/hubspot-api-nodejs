const _ = require('lodash')
const dbHelper = require('./db-helper')

const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET
const REFRESH_TOKEN = 'refresh_token'

module.exports = {
    refreshToken: async (hubspotClient) => {
        const tokens = await dbHelper.getTokens()

        if (!tokens.refreshToken) {
            throw new Error('Cannot find refresh token')
        }

        // Create OAuth 2.0 Access Token and Refresh Tokens
        // POST /oauth/v1/token
        // https://developers.hubspot.com/docs/api/working-with-oauth
        const result = await hubspotClient.oauth.defaultApi.createToken(
            REFRESH_TOKEN,
            undefined,
            undefined,
            CLIENT_ID,
            CLIENT_SECRET,
            tokens.refreshToken,
        )

        console.log('Updated tokens', result.body)
        await dbHelper.saveTokens(result.body)
        hubspotClient.setAccessToken(result.body.accessToken)
        return hubspotClient
    },

    verifyAuthorization: async () => {
        const tokens = await dbHelper.getTokens()
        return !_.isEmpty(tokens)
    },
}
