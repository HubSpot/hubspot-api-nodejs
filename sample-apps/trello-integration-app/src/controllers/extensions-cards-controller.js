const _ = require('lodash')
const express = require('express')
const router = new express.Router()
const mysqlDbHelper = require('../helpers/mysql-db-helper')
const HUBSPOT_APPLICATION_ID = process.env.HUBSPOT_APPLICATION_ID
const CARD_TITLE = 'Trello Integration Test Card'
const hubspotClientHelper = require('../helpers/hubspot-client-helper')
const responseHelper = require('../helpers/log-response-helper')
const handleError = require('../helpers/error-handler-helper')
const checkAuthorizationMiddleware = require('../middlewares/check-authorization')

exports.getRouter = () => {
    router.use(checkAuthorizationMiddleware)

    router.get('/extension', async (req, res) => {
        try {
            const cardId = await mysqlDbHelper.getCardId()
            const baseUrl = await mysqlDbHelper.getUrl()

            res.render('extension', { cardId, cardTitle: CARD_TITLE, baseUrl })
        } catch (e) {
            handleError(e, res)
        }
    })

    router.post('/extension', async (req, res) => {
        try {
            const hubspotClient = hubspotClientHelper.getClientWithDevApiKey()
            const dealObjectType = {
                name: 'deals',
                propertiesToSend: ['hs_object_id', 'dealname'],
            }
            const baseUrl = await mysqlDbHelper.getUrl()
            const fetch = {
                targetUrl: `${baseUrl}/trello/cards`,
                objectTypes: [dealObjectType],
            }

            const actions = {
                baseUrls: [baseUrl],
            }

            const cardId = await mysqlDbHelper.getCardId()
            let response

            if (_.isNil(cardId)) {
                const cardCreateRequest = {
                    title: CARD_TITLE,
                    fetch,
                    actions,
                    display: { properties: [] },
                }

                console.log('Calling crm.extensions.cards.cardsApi.create API method. Create extension card.')
                // Create a new extension card
                // POST /crm/v3/extensions/cards/:appId
                // https://developers.hubspot.com/docs/api/crm/extensions/custom-cards
                response = await hubspotClient.crm.extensions.cards.cardsApi.create(
                    HUBSPOT_APPLICATION_ID,
                    cardCreateRequest,
                )

                await mysqlDbHelper.saveCardId(response.body.id)
            } else {
                const cardUpdateRequest = {
                    fetch,
                    actions,
                }

                console.log('Calling crm.extensions.cards.cardsApi.update API method. Update extension card.')
                // Update extension card
                // PATCH /crm/v3/extensions/cards/:appId/:cardId
                // https://developers.hubspot.com/docs/api/crm/extensions/custom-cards
                response = await hubspotClient.crm.extensions.cards.cardsApi.update(
                    HUBSPOT_APPLICATION_ID,
                    cardId,
                    cardUpdateRequest,
                )
            }
            responseHelper.logResponse(response)

            res.redirect('/init/done')
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/done', async (req, res) => {
        try {
            const cardId = await mysqlDbHelper.getCardId()

            res.render('done', { cardId })
        } catch (e) {
            handleError(e, res)
        }
    })

    return router
}
