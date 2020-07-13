const _ = require('lodash')
const redisDbHelper = require('./redis-db-helper')

module.exports = {
    checkIfDealAssociated: async (dealId) => {
        const cardId = await redisDbHelper.getDealAssociation(dealId)
        return !_.isNil(cardId)
    },
    formatCardExtensionDataResponse: async (isDealAssociated, card) => {
        const baseUrl = await redisDbHelper.getUrl()
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
}
