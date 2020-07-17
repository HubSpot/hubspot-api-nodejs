const _ = require('lodash')
const Promise = require('bluebird')
const trelloClientHelper = require('./trello-client-helper')
const mysqlDbHelper = require('./mysql-db-helper')
const responseHelper = require('../helpers/log-response-helper')
const AUTHENTICATED_MEMBER = 'me'

module.exports = {
    searchForCards: async (query) => {
        const client = await trelloClientHelper.getClient()
        if (_.isNil(query) || _.isEmpty(query)) {
            return []
        }

        console.log(`Getting trello cards by query [${query}]`)
        const result = await client.makeRequest('GET', '/1/search', { query, modelTypes: ['cards'] })
        responseHelper.logResponse(result)

        return _.get(result, 'cards') || []
    },
    getCard: async (cardId) => {
        try {
            const client = await trelloClientHelper.getClient()

            console.log(`Getting trello card by id [${cardId}]`)
            const result = await client.makeRequest('GET', `/1/cards/${cardId}`)
            responseHelper.logResponse(result)

            return result
        } catch (e) {
            if (responseHelper.checkIfNotFoundResponseStatus(e)) {
                return console.log(`Card ${cardId} not found`)
            }

            throw e
        }
    },
    getMembers: async (idMembers) => {
        const client = await trelloClientHelper.getClient()

        console.log(`Getting trello card members`)
        const result = await Promise.map(idMembers, (memberId) => client.getMember(memberId))
        responseHelper.logResponse(result)

        return result
    },
    getBoards: async () => {
        const client = await trelloClientHelper.getClient()

        console.log(`Getting trello boards`)
        const result = await client.getBoards(AUTHENTICATED_MEMBER)
        responseHelper.logResponse(result)

        return result
    },
    getBoardLists: async (boardId) => {
        const client = await trelloClientHelper.getClient()

        console.log(`Getting trello board lists`)
        const result = await client.getListsOnBoard(boardId)
        responseHelper.logResponse(result)

        return result
    },
    createCardWebhookSubscription: async (cardId) => {
        const client = await trelloClientHelper.getClient()
        const baseUrl = await mysqlDbHelper.getUrl()
        const callbackUrl = `${baseUrl}/trello/cards/webhook`
        console.log(`Creating trello webhook for card ${cardId}`)
        const webhook = await client.addWebhook(undefined, callbackUrl, cardId)
        await mysqlDbHelper.saveCardWebhook(webhook.id, cardId)

        return webhook
    },
    updateCardWebhookSubscription: async (webhookId) => {
        const client = await trelloClientHelper.getClient()
        const baseUrl = await mysqlDbHelper.getUrl()
        const callbackURL = `${baseUrl}/trello/cards/webhook`
        const active = true

        console.log(`Updating trello webhook by id ${webhookId}`)
        const webhook = await client.makeRequest('PUT', `/1/webhooks/${webhookId}`, { callbackURL, active })
        responseHelper.logResponse(webhook)

        return webhook
    },
    checkIfCardWebhookCreated: async (cardId) => {
        const webhookId = await mysqlDbHelper.getCardWebhookId(cardId)
        return !_.isNil(webhookId)
    },
    deleteCardWebhookSubscription: async (webhookId) => {
        const client = await trelloClientHelper.getClient()

        try {
            console.log(`Removing trello webhook ${webhookId}`)
            await client.deleteWebhook(webhookId)
        } catch (e) {
            if (!responseHelper.checkIfNotFoundResponseStatus(e)) {
                throw e
            }

            console.log(`Webhook ${webhookId} not found`)
        }

        await mysqlDbHelper.deleteCardWebhook(webhookId)
    },
    getWebhookSubscriptions: async () => {
        const client = await trelloClientHelper.getClient()
        console.log(`Getting trello webhooks`)
        return client.makeRequest('GET', `/1/tokens/${client.token}/webhooks`)
    },
    checkIfCardAssociatedToDeals: async (cardId) => {
        const associations = await mysqlDbHelper.getDealAssociationsForCard(cardId)
        return !_.isEmpty(associations)
    },
    verifyCard: async (cardId) => {
        try {
            const client = await trelloClientHelper.getClient()

            console.log(`Getting Trello card by id ${cardId}`)
            await client.makeRequest('GET', `/1/cards/${cardId}`)

            return true
        } catch (e) {
            if (responseHelper.checkIfNotFoundResponseStatus(e)) {
                return false
            }

            throw e
        }
    },
}
