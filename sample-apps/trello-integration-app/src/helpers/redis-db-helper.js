const Redis = require('ioredis')
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'
const TRELLO_TOKEN_KEY = 'trello_token'
const URL_KEY = 'base_url'
const CARD_ID_KEY = 'extension_card_id'

const redisClient = new Redis({
    host: REDIS_HOST,
})

const getDealAssociationKey = (dealId) => `deal_association_${dealId}`

module.exports = {
    close: () => redisClient.disconnect(),
    getTrelloToken: () => redisClient.get(TRELLO_TOKEN_KEY),
    saveTrelloToken: (token) => redisClient.set(TRELLO_TOKEN_KEY, token),
    getUrl: () => redisClient.get(URL_KEY),
    saveUrl: (url) => redisClient.set(URL_KEY, url),
    getCardId: () => redisClient.get(CARD_ID_KEY),
    saveCardId: (cardId) => redisClient.set(CARD_ID_KEY, cardId),
    getDealAssociation: (dealId) => redisClient.get(getDealAssociationKey(dealId)),
    createDealAssociation: (dealId, cardId) => redisClient.set(getDealAssociationKey(dealId), cardId),
    deleteDealAssociation: (dealId) => redisClient.del(getDealAssociationKey(dealId)),
}
