const Redis = require('ioredis')
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'
const HUBSPOT_TOKENS_DATA_KEY = 'hubspot_tokens_data'
const TRELLO_TOKEN_KEY = 'trello_token'
const URL_KEY = 'base_url'

const redisClient = new Redis({
    host: REDIS_HOST,
})

module.exports = {
    close: () => redisClient.disconnect(),
    getHubspotTokensData: async () => {
        const hubspotTokensDataString = await redisClient.get(HUBSPOT_TOKENS_DATA_KEY)
        return JSON.parse(hubspotTokensDataString)
    },
    saveHubspotTokensData: (hubspotTokensData) => {
        const hubspotTokensDataString = JSON.stringify(hubspotTokensData)
        return redisClient.set(HUBSPOT_TOKENS_DATA_KEY, hubspotTokensDataString)
    },
    getTrelloToken: () => redisClient.get(TRELLO_TOKEN_KEY),
    saveTrelloToken: (token) => redisClient.set(TRELLO_TOKEN_KEY, token),
    getUrl: () => redisClient.get(URL_KEY),
    saveUrl: (url) => redisClient.set(URL_KEY, url),
}
