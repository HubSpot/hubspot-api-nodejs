const _ = require('lodash')
const crypto = require('crypto')
const express = require('express')
const router = new express.Router()
const dbHelper = require('./db-helper')

const utils = require('./utils')
const kafkaHelper = require('./kafka-helper')

const SIGNATURE_HEADER = 'X-HubSpot-Signature'

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
    return (req, res, buf, encoding) => {
        try {
            if (req.originalUrl === '/webhooks') {
                const rawBody = buf.toString(encoding)
                const signature = req.header(SIGNATURE_HEADER)

                const secret = process.env.HUBSPOT_CLIENT_SECRET
                const hash = crypto
                    .createHash('sha256')
                    .update(secret + rawBody)
                    .digest('hex')

                if (signature === hash) return
            }
        } catch (e) {
            console.log(e)
        }

        throw new Error('Unauthorized webhook or error with request processing!')
    }
}
