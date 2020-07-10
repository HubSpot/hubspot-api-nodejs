const Trello = require('trello')
const dbHelper = require('./db-helper')
const TRELLO_API_KEY = process.env.TRELLO_API_KEY
let trelloClient

module.exports = {
    getClient: async () => {
        if (trelloClient) {
            return trelloClient
        }

        const token = await dbHelper.getTrelloToken()
        trelloClient = new Trello(TRELLO_API_KEY, token)

        return trelloClient
    },
}
