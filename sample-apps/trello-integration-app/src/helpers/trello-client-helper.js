const Trello = require('trello')
const redisDbHelper = require('./redis-db-helper')
const TRELLO_API_KEY = process.env.TRELLO_API_KEY
let trelloClient

module.exports = {
    getClient: async () => {
        if (trelloClient) {
            return trelloClient
        }

        const token = await redisDbHelper.getTrelloToken()
        trelloClient = new Trello(TRELLO_API_KEY, token)

        return trelloClient
    },
}
