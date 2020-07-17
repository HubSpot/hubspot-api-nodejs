const trelloHelper = require('./trello-helper')
const mysqlDbHelper = require('./mysql-db-helper')

module.exports = {
    runRecoveryForDeletedCard: async (cardId) => {
        await mysqlDbHelper.deleteDealAssociationsForCard(cardId)
        const webhookId = await mysqlDbHelper.getCardWebhookId(cardId)

        if (webhookId) {
            await trelloHelper.deleteCardWebhookSubscription(webhookId)
        }
    },

    runRecoveryForDeletedPipeline: async (pipelineId) => {
        await mysqlDbHelper.removeMappingsForPipeline(pipelineId)
    },

    runRecoveryForDeletedPipelineStage: async (pipelineStageId) => {
        await mysqlDbHelper.removeMappingsForPipelineStage(pipelineStageId)
    },

    runRecoveryForDeletedDeal: async (dealId, cardId) => {
        await mysqlDbHelper.deleteDealAssociation(dealId)

        const isCardAssociatedToDeals = await trelloHelper.checkIfCardAssociatedToDeals(cardId)
        const webhookId = await mysqlDbHelper.getCardWebhookId(cardId)

        if (!isCardAssociatedToDeals && webhookId) {
            await trelloHelper.deleteCardWebhookSubscription(webhookId)
        }
    },
}
