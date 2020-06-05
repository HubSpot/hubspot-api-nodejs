const Redis = require('ioredis')
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'

const redisClient = new Redis({
    host: REDIS_HOST,
})

module.exports = {
    close: () => redisClient.disconnect(),
    getTokens: async () => {
        const tokensString = await redisClient.get('tokens')
        return JSON.parse(tokensString)
    },
    saveTokens: (tokens) => {
        const tokensString = JSON.stringify(tokens)
        return redisClient.set('tokens', tokensString)
    },
}
