const _ = require('lodash')
const express = require('express')
const router = new express.Router()
const dbHelper = require('../helpers/db-helper')
const trelloHelper = require('../helpers/trello-helper')
const hubspotHelper = require('../helpers/hubspot-helper')
const handleError = require('../helpers/error-handler-helper')
const checkAuthorizationMiddleware = require('../middlewares/check-authorization')

exports.getRouter = () => {
    router.use(checkAuthorizationMiddleware)

    router.get('/search', async (req, res) => {
        try {
            const query = _.get(req, 'query.q')
            const cards = await trelloHelper.searchForCards(query)

            res.json(cards.map((card) => ({ name: card.name, id: card.id })))
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/search-frame', async (req, res) => {
        try {
            const dealname = _.get(req, 'query.dealname')

            res.render('search-frame', { dealname })
        } catch (e) {
            handleError(e, res)
        }
    })

    router.post('/search-frame', async (req, res) => {
        try {
            const dealId = _.get(req, 'query.hs_object_id')
            const cardId = _.get(req, 'body.card_id')

            await dbHelper.createDealAssociation(dealId, cardId)

            res.redirect('/trello/cards/search-frame-success')
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/search-frame-success', async (req, res) => {
        try {
            res.render('search-frame-success')
        } catch (e) {
            handleError(e, res)
        }
    })

    router.delete('/associations', async (req, res) => {
        try {
            const dealId = _.get(req, 'query.hs_object_id')
            await dbHelper.deleteDealAssociation(dealId)

            res.status(204).end()
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/', async (req, res) => {
        try {
            const dealId = _.get(req, 'query.hs_object_id')
            let card
            let isDealAssociated = await hubspotHelper.checkIfDealAssociated(dealId)

            if (isDealAssociated) {
                const cardId = await dbHelper.getDealAssociation(dealId)
                card = await trelloHelper.getCard(cardId)
                if (_.isNil(card)) {
                    isDealAssociated = false
                } else {
                    const idMembers = _.get(card, 'idMembers') || []
                    card.members = await trelloHelper.getMembers(idMembers)
                }
            }

            res.json(await hubspotHelper.formatCardExtensionDataResponse(isDealAssociated, card))
        } catch (e) {
            handleError(e, res)
        }
    })

    return router
}
