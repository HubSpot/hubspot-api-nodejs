require('./config')
const Promise = require('bluebird')
const _ = require('lodash')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const ngrok = require('ngrok')
const dbHelper = require('./helpers/db-helper')
const checkAuthorizationMiddleware = require('./middlewares/check-authorization')
const checkEnvironmentMiddleware = require('./middlewares/check-environment')
const oauthController = require('./controllers/oauth-controller')
const PORT = 3000

const releaseConnections = (server) => {
    dbHelper.close()
    return server.close(() => {
        console.log('Process terminated')
    })
}

const handleError = (e, res) => {
    if (_.isEqual(e.message, 'HTTP request failed')) {
        const errorMessage = JSON.stringify(e, null, 2)
        console.error(errorMessage)
        return res.redirect(`/error?msg=${errorMessage}`)
    }

    console.error(e)
    res.redirect(`/error?msg=${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
}

const app = express()

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

app.get('/', checkAuthorizationMiddleware, async (req, res) => {
    try {
        res.render('extension')
    } catch (e) {
        handleError(e, res)
    }
})

app.get('/error', (req, res) => {
    res.render('error', { error: req.query.msg })
})

app.use('/oauth', oauthController.getRouter())

app.use((error, req, res, next) => {
    res.render('error', { error: error.message })
})
;(async () => {
    try {
        const server = app.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`)
            return Promise.delay(100)
                .then(() => ngrok.connect(PORT))
                .tap((url) => console.log('Please use:', url))
                .then(dbHelper.saveUrl)
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
