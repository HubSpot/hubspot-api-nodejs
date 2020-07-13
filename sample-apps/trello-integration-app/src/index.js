require('./config')
const Promise = require('bluebird')
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const ngrok = require('ngrok')
const redisDbHelper = require('./helpers/redis-db-helper')
const mysqlDbHelper = require('./helpers/mysql-db-helper')
const checkEnvironmentMiddleware = require('./middlewares/check-environment')
const oauthController = require('./controllers/oauth-controller')
const extensionsCardsController = require('./controllers/extensions-cards-controller')
const trelloCardsController = require('./controllers/trello-cards-controller')
const mappingsController = require('./controllers/mappings-controller')
const handleError = require('./helpers/error-handler-helper')
const PORT = 3000

const releaseConnections = (server) => {
    redisDbHelper.close()
    mysqlDbHelper.close()
    return server.close(() => {
        console.log('Process terminated')
    })
}

const app = express()

app.use(morgan(':method :url :response-time'))
app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(
    bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
    }),
)

app.use(
    bodyParser.json({
        limit: '50mb',
        extended: true,
    }),
)

app.use(checkEnvironmentMiddleware)

app.get('/', async (req, res) => {
    res.redirect('/init/extension')
})

app.get('/error', (req, res) => {
    res.render('error', { error: req.query.msg })
})

app.use('/oauth', oauthController.getRouter())
app.use('/init', extensionsCardsController.getRouter())
app.use('/trello/cards', trelloCardsController.getRouter())
app.use('/mappings', mappingsController.getRouter())

app.use((error, req, res, next) => {
    handleError(error, res)
})
;(async () => {
    try {
        await mysqlDbHelper.init()
        const server = app.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`)
            return Promise.delay(100)
                .then(() => ngrok.connect(PORT))
                .tap((url) => console.log('Please use:', url))
                .then(redisDbHelper.saveUrl)
                .catch(async (e) => {
                    console.log('Error during app start. ', e)
                    return releaseConnections(server)
                })
        })

        process.on('SIGTERM', () => releaseConnections(server))
    } catch (e) {
        console.error('Error during app start. ', e)
    }
})()
