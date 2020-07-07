const Redis = require('ioredis')
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'

const redisClient = new Redis({
    host: REDIS_HOST,
})

module.exports = {
    close: () => redisClient.disconnect(),
    getHubspotTokensData: async () => {
        const hubspotTokensDataString = await redisClient.get('hubspotTokensData')
        return JSON.parse(hubspotTokensDataString)
    },
    saveHubspotTokensData: (hubspotTokensData) => {
        const hubspotTokensDataString = JSON.stringify(hubspotTokensData)
        return redisClient.set('hubspotTokensData', hubspotTokensDataString)
    },
}
