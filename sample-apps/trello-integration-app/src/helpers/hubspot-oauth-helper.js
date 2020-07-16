const _ = require('lodash')
const mysqlDbHelper = require('../helpers/mysql-db-helper')

const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET
const REFRESH_TOKEN = 'refresh_token'

module.exports = {
    refreshToken: async (hubspotClient) => {
        let tokensData = await mysqlDbHelper.getHubspotTokensData()

        if (!tokensData.refresh_token) {
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
            tokensData.refresh_token,
        )

        tokensData = result.body
        console.log('Updated tokens', tokensData)
        await mysqlDbHelper.updateHubspotTokensData(tokensData)
        hubspotClient.setAccessToken(tokensData.accessToken)
        return hubspotClient
    },

    verifyAuthorization: async () => {
        const tokensData = await mysqlDbHelper.getHubspotTokensData()
        return !_.isEmpty(tokensData)
    },

    verifyTokenExpiration: async () => {
        const tokensData = await mysqlDbHelper.getHubspotTokensData()
        return Date.now() >= new Date(tokensData.updated_at).getTime() + tokensData.expires_in * 1000
    },
    getOauthRedirectUri: async () => {
        const baseUrl = await mysqlDbHelper.getUrl()
        return `${baseUrl}/oauth/hubspot/callback`
    },
}
