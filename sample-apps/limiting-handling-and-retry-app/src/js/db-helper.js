const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'
let redisClient = null

module.exports = {
    init: () => {
        try {
            const Redis = require('ioredis')
            redisClient = new Redis({
                host: REDIS_HOST,
            })
        } catch (e) {
            console.error('Redis db is not available')
            console.error(e)
            throw e
        }
    },

    close: () => {
        if (redisClient) return redisClient.disconnect()
    },
    getTokens: async () => {
        const tokensString = await redisClient.get('tokens')
        return JSON.parse(tokensString)
    },
    saveTokens: (tokens) => {
        const tokensString = JSON.stringify(tokens)
        return redisClient.set('tokens', tokensString)
    },
}
