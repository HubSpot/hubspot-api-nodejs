const _ = require('lodash')
const express = require('express')
const Promise = require('bluebird')
const router = new express.Router()
const mysqlDbHelper = require('../helpers/mysql-db-helper')
const CARD_TITLE = 'Trello Integration Test Card'
const handleError = require('../helpers/error-handler-helper')
const checkAuthorizationMiddleware = require('../middlewares/check-authorization')
const hubspotHelper = require('../helpers/hubspot-helper')
const trelloHelper = require('../helpers/trello-helper')
const recoveryHelper = require('../helpers/recovery-helper')

const webhooksComparator = (webhookFromDb, webhookFromTrello) =>
    _.isEqual(webhookFromDb.webhook_id, webhookFromTrello.id)

const getWebhooksToProcess = async () => {
    const webhooksFromDb = await mysqlDbHelper.getCardWebhooks()
    const webhooksFromTrello = await trelloHelper.getWebhookSubscriptions()

    const webhooksThatShouldBeCreated = _.differenceWith(webhooksFromDb, webhooksFromTrello, webhooksComparator)
    const webhooksThatShouldBeUpdated = _.intersectionWith(webhooksFromDb, webhooksFromTrello, webhooksComparator)

    return { webhooksThatShouldBeCreated, webhooksThatShouldBeUpdated }
}

const createWebhook = async (webhookToCreate) => {
    if (!(await trelloHelper.verifyCard(webhookToCreate.card_id))) {
        return recoveryHelper.runRecoveryForDeletedCard(webhookToCreate.card_id)
    }

    await mysqlDbHelper.deleteCardWebhook(webhookToCreate.webhook_id)
    await trelloHelper.createCardWebhookSubscription(webhookToCreate.card_id)
}

const createWebhooks = async (webhooks) => Promise.map(webhooks, createWebhook)

const updateWebhooks = async (webhooks) =>
    Promise.map(webhooks, (webhook) => trelloHelper.updateCardWebhookSubscription(webhook.webhook_id))

exports.getRouter = () => {
    router.use(checkAuthorizationMiddleware)

    router.get('/extension', async (req, res) => {
        try {
            const cardId = await mysqlDbHelper.getCardId()
            const baseUrl = await mysqlDbHelper.getUrl()

            res.render('extension-init', { cardId, cardTitle: CARD_TITLE, baseUrl })
        } catch (e) {
            handleError(e, res)
        }
    })

    router.post('/extension', async (req, res) => {
        try {
            await hubspotHelper.initExtensionCard(CARD_TITLE)

            const { webhooksThatShouldBeCreated, webhooksThatShouldBeUpdated } = await getWebhooksToProcess()

            await createWebhooks(webhooksThatShouldBeCreated)
            await updateWebhooks(webhooksThatShouldBeUpdated)

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
