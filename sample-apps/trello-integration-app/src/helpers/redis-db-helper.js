const Redis = require('ioredis')
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'

const redisClient = new Redis({
    host: REDIS_HOST,
})

const getDealAssociationKey = (dealId) => `deal_association_${dealId}`

module.exports = {
    close: () => redisClient.disconnect(),
    getDealAssociation: (dealId) => redisClient.get(getDealAssociationKey(dealId)),
    createDealAssociation: (dealId, cardId) => redisClient.set(getDealAssociationKey(dealId), cardId),
    deleteDealAssociation: (dealId) => redisClient.del(getDealAssociationKey(dealId)),
}
