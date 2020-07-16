const _ = require('lodash')
const express = require('express')
const router = new express.Router()
const mysqlDbHelper = require('../helpers/mysql-db-helper')
const hubspotOauthHelper = require('../helpers/hubspot-oauth-helper')
const trelloOauthHelper = require('../helpers/trello-oauth-helper')
const trelloClientHelper = require('../helpers/trello-client-helper')
const hubspotClientHelper = require('../helpers/hubspot-client-helper')
const logResponse = require('../helpers/log-response-helper')
const handleError = require('../helpers/error-handler-helper')

const HUBSPOT_CLIENT_ID = process.env.HUBSPOT_CLIENT_ID
const HUBSPOT_CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET
const TRELLO_API_KEY = process.env.TRELLO_API_KEY
const SCOPES = 'contacts'

exports.getRouter = () => {
    router.get('/login', async (req, res) => {
        try {
            const hubspotAuthorized = await hubspotOauthHelper.verifyAuthorization()
            const trelloAuthorized = await trelloOauthHelper.verifyAuthorization()
            const baseUrl = await mysqlDbHelper.getUrl()

            res.render('login', { hubspotAuthorized, trelloAuthorized, baseUrl })
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/hubspot', async (req, res) => {
        try {
            const redirectUrl = await hubspotOauthHelper.getOauthRedirectUri()
            const hubspotClient = await hubspotClientHelper.getClient()
            // Use the client to get authorization Url
            // https://www.npmjs.com/package/@hubspot/api-client#obtain-your-authorization-url
            console.log('Creating authorization Url')
            const authorizationUrl = hubspotClient.oauth.getAuthorizationUrl(HUBSPOT_CLIENT_ID, redirectUrl, SCOPES)
            console.log('Authorization Url', authorizationUrl)

            res.redirect(authorizationUrl)
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/trello', async (req, res) => {
        try {
            const redirectUrl = await trelloOauthHelper.getOauthRedirectUri()
            console.log('Creating authorization Url')
            const authorizationUrl = trelloOauthHelper.getAuthUrl(TRELLO_API_KEY, redirectUrl)
            console.log('Authorization Url', authorizationUrl)

            res.redirect(authorizationUrl)
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/trello/callback', async (req, res) => {
        res.send(
            `<script type="text/javascript"> 
            var token = window.location.href.split("token=")[1];
            window.location = "/oauth/trello/token/" + token;
         </script>`,
        )
    })

    router.get('/trello/token/:token', async (req, res) => {
        try {
            const token = _.get(req, 'params.token')
            console.log('Trello token', token)

            await mysqlDbHelper.saveTrelloToken(token)

            const trelloClient = await trelloClientHelper.getClient()
            trelloClient.token = token

            res.redirect('/')
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/hubspot/callback', async (req, res) => {
        try {
            const code = _.get(req, 'query.code')
            const redirectUrl = await hubspotOauthHelper.getOauthRedirectUri()
            const hubspotClient = await hubspotClientHelper.getClient()
            // Create OAuth 2.0 Access Token and Refresh Tokens
            // POST /oauth/v1/token
            // https://developers.hubspot.com/docs/api/working-with-oauth
            console.log('Retrieving access token by code:', code)
            const result = await hubspotClient.oauth.defaultApi.createToken(
                'authorization_code',
                code,
                redirectUrl,
                HUBSPOT_CLIENT_ID,
                HUBSPOT_CLIENT_SECRET,
            )
            logResponse(result)
            // Set token for the
            // https://www.npmjs.com/package/@hubspot/api-client
            const tokensData = result.body
            await mysqlDbHelper.saveHubspotTokensData(tokensData)
            hubspotClient.setAccessToken(tokensData.accessToken)

            res.redirect('/')
        } catch (e) {
            handleError(e, res)
        }
    })

    return router
}
