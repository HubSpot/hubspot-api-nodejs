const _ = require('lodash')
const express = require('express')
const router = new express.Router()
const dbHelper = require('../helpers/db-helper')
const HUBSPOT_APPLICATION_ID = process.env.HUBSPOT_APPLICATION_ID
const CARD_TITLE = 'Trello Integration Test Card'
const hubspotClientHelper = require('../helpers/hubspot-client-helper')
const responseHelper = require('../helpers/response-helper')
const checkAuthorizationMiddleware = require('../middlewares/check-authorization')

exports.getRouter = () => {
    router.use(checkAuthorizationMiddleware)

    router.get('/extension', async (req, res) => {
        const cardId = await dbHelper.getCardId()
        const baseUrl = await dbHelper.getUrl()

        res.render('extension', { cardId, cardTitle: CARD_TITLE, baseUrl })
    })

    router.post('/extension', async (req, res) => {
        const hubspotClient = hubspotClientHelper.getHubspotClientWithDevApiKey()
        const dealObjectType = {
            name: 'deals',
            propertiesToSend: ['hs_object_id', 'dealname'],
        }
        const baseUrl = await dbHelper.getUrl()
        const fetch = {
            targetUrl: `${baseUrl}/trello/cards`,
            objectTypes: [dealObjectType],
        }

        const actions = {
            baseUrls: [baseUrl],
        }

        const cardId = await dbHelper.getCardId()
        let response

        if (_.isNil(cardId)) {
            const cardCreateRequest = {
                title: CARD_TITLE,
                fetch,
                actions,
                display: { properties: [] },
            }

            response = await hubspotClient.crm.extensions.cards.cardsApi.create(
                HUBSPOT_APPLICATION_ID,
                cardCreateRequest,
            )

            await dbHelper.saveCardId(response.body.id)
        } else {
            const cardUpdateRequest = {
                fetch,
                actions,
            }
            response = await hubspotClient.crm.extensions.cards.cardsApi.update(
                HUBSPOT_APPLICATION_ID,
                cardId,
                cardUpdateRequest,
            )
        }
        responseHelper.logResponse(response)

        return res.redirect('/init/done')
    })

    router.get('/done', async (req, res) => {
        const cardId = await dbHelper.getCardId()

        res.render('done', { cardId })
    })

    return router
}
