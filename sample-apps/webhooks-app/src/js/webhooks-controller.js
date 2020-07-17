const express = require('express')
const router = new express.Router()
const dbHelper = require('./db-helper')

const utils = require('./utils')
const kafkaHelper = require('./kafka-helper')

const SIGNATURE_HEADER = 'X-HubSpot-Signature'
const SIGNATURE_VERSION_HEADER = 'X-HubSpot-Signature-Version'

exports.getRouter = () => {
    router.post('/', async (req, res) => {
        const events = req.body

        console.log('Received hook events:')
        utils.logJson(events)
        await kafkaHelper.send(events)
        res.sendStatus(200)
    })

    router.get('/new', async (req, res) => {
        const notShownEventsCount = await dbHelper.getNewEventsCount()
        res.status(200).jsonp({ notShownEventsCount })
    })

    return router
}

exports.getWebhookVerification = () => {
    return async (req, res, buf) => {
        const originalUrl = req.originalUrl

        if (originalUrl !== '/webhooks') return

        const urlInfo = await dbHelper.getUrlInfo()
        const webhooksUrl = `${urlInfo.url}${req.originalUrl}`

        try {
            const requestBody = buf.toString()
            const signature = req.header(SIGNATURE_HEADER)
            const clientSecret = process.env.HUBSPOT_CLIENT_SECRET
            const signatureVersion = req.header(SIGNATURE_VERSION_HEADER)

            if (
                req.hubspotClient.webhooks.validateSignature(
                    signature,
                    clientSecret,
                    requestBody,
                    signatureVersion,
                    webhooksUrl,
                    req.method,
                )
            )
                return
        } catch (e) {
            console.log(e)
        }

        throw new Error('Unauthorized webhook or error with request processing!')
    }
}
