const _ = require('lodash')
const mysqlDbHelper = require('../helpers/mysql-db-helper')
const hubspotClientHelper = require('./hubspot-client-helper')
const responseHelper = require('../helpers/log-response-helper')
const DEAL_OBJECT_TYPE = 'deals'

module.exports = {
    checkIfDealAssociated: async (dealId) => {
        const cardId = await mysqlDbHelper.getDealAssociatedCard(dealId)
        return !_.isNil(cardId)
    },
    checkIfCardAssociatedToDeals: async (cardId) => {
        const associations = await mysqlDbHelper.getDealAssociationsForCard(cardId)
        return !_.isEmpty(associations)
    },
    formatCardExtensionDataResponse: async (isDealAssociated, card) => {
        const baseUrl = await mysqlDbHelper.getUrl()
        let results
        let primaryAction
        if (isDealAssociated) {
            const result = {
                objectId: card.idShort,
                title: card.name,
                link: card.shortUrl,
            }

            if (card.members.length > 0) {
                result.properties = [
                    {
                        label: 'Members',
                        dataType: 'STRING',
                        value: card.members.map((member) => member.username).join(', '),
                    },
                ]
            }

            results = [result]
            primaryAction = {
                type: 'ACTION_HOOK',
                httpMethod: 'DELETE',
                associatedObjectProperties: ['hs_object_id'],
                uri: `${baseUrl}/trello/cards/associations`,
                label: 'Remove the association',
            }
        } else {
            results = []
            primaryAction = {
                type: 'IFRAME',
                width: 650,
                height: 350,
                label: 'Associate Trello card',
                associatedObjectProperties: ['hs_object_id', 'dealname'],
                uri: `${baseUrl}/trello/cards/search-frame`,
            }
        }

        return {
            results,
            primaryAction,
        }
    },
    getPipelines: async () => {
        const client = await hubspotClientHelper.getClient()

        console.log(`Getting HubSpot pipelines`)
        // Get all pipelines for the deals
        // GET /crm/v3/pipelines/:objectType
        // https://developers.hubspot.com/docs/api/crm/pipelines
        const response = await client.crm.pipelines.pipelinesApi.getAll(DEAL_OBJECT_TYPE)
        responseHelper.logResponse(response)

        return response.body.results
    },
    getPipelineStages: async (pipelineId) => {
        const client = await hubspotClientHelper.getClient()

        console.log(`Getting HubSpot pipeline by id ${pipelineId}`)
        // Get pipeline by id
        // GET /crm/v3/pipelines/:objectType/:pipelineId
        // https://developers.hubspot.com/docs/api/crm/pipelines
        const response = await client.crm.pipelines.pipelinesApi.getById(DEAL_OBJECT_TYPE, pipelineId)
        responseHelper.logResponse(response)

        return response.body.stages
    },
    updateDeal: async (dealId, pipelineId, pipelineStageId) => {
        const client = await hubspotClientHelper.getClient()
        const deal = {
            properties: {
                pipeline: pipelineId,
                dealstage: pipelineStageId,
            },
        }

        console.log(`Updating deal ${dealId}`)
        // Perform a partial update of deal
        // PATCH /crm/v3/objects/deals/:dealId
        // https://developers.hubspot.com/docs/api/crm/deals
        const response = await client.crm.deals.basicApi.update(dealId, deal)
        responseHelper.logResponse(response)

        return response.body
    },
    verifyPipeline: async (pipelineId) => {
        try {
            const client = await hubspotClientHelper.getClient()

            console.log(`Getting HubSpot pipeline ${pipelineId}`)
            // Get pipeline by id for the deals
            // GET /crm/v3/pipelines/:objectType/:pipelineId
            // https://developers.hubspot.com/docs/api/crm/pipelines
            const response = await client.crm.pipelines.pipelinesApi.getById(DEAL_OBJECT_TYPE, pipelineId)
            responseHelper.logResponse(response)

            return true
        } catch (e) {
            if (responseHelper.checkIfNotFoundResponseStatus(e)) {
                return false
            }

            throw e
        }
    },
    verifyPipelineStage: async (pipelineId, pipelineStageId) => {
        try {
            const client = await hubspotClientHelper.getClient()

            console.log(`Getting HubSpot pipeline ${pipelineId} stage ${pipelineStageId}`)
            // Get pipeline stage by id
            // GET /crm/v3/pipelines/:objectType/:pipelineId/stages/:stageId
            // https://developers.hubspot.com/docs/api/crm/pipelines
            const response = await client.crm.pipelines.pipelineStagesApi.getById(
                DEAL_OBJECT_TYPE,
                pipelineId,
                pipelineStageId,
            )
            responseHelper.logResponse(response)

            return true
        } catch (e) {
            if (responseHelper.checkIfNotFoundResponseStatus(e)) {
                return false
            }

            throw e
        }
    },
}
