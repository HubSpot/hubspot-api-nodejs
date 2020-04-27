const _ = require('lodash')
const express = require('express')
const router = new express.Router()
const dbHelper = require('./db-helper')
const url = require('url')

const SCOPE = 'contacts'
const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET
const AUTHORIZATION_CODE = 'authorization_code'

const getHostUrl = (req) => {
    return url.format({
        protocol: 'https',
        hostname: req.get('host'),
    })
}

exports.getRouter = () => {
    router.get('/oauth', async (req, res) => {
        const redirectUri = `${getHostUrl(req)}/auth/oauth-callback`
        // Use the client to get authorization Url
        // https://www.npmjs.com/package/@hubspot/api-client#obtain-your-authorization-url
        const authorizationUrl = req.hubspotClient.oauth.getAuthorizationUrl(CLIENT_ID, redirectUri, SCOPE)
        console.log('Authorization Url:', authorizationUrl)

        res.redirect(authorizationUrl)
    })

    router.get('/oauth-callback', async (req, res) => {
        const code = _.get(req, 'query.code')
        const redirectUri = `${getHostUrl(req)}/auth/oauth-callback`
        // Get OAuth 2.0 Access Token and Refresh Tokens
        // POST /oauth/v1/token
        // https://developers.hubspot.com/docs/api/working-with-oauth
        console.log('Retrieving access token by code:', code)
        const getTokensResponse = await req.hubspotClient.oauth.defaultApi.createToken(
            AUTHORIZATION_CODE,
            code,
            redirectUri,
            CLIENT_ID,
            CLIENT_SECRET,
        )
        await dbHelper.saveTokens(getTokensResponse.body)
        res.redirect('/')
    })

    return router
}
