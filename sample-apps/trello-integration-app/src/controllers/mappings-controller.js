const _ = require('lodash')
const express = require('express')
const router = new express.Router()
const dbHelper = require('../helpers/db-helper')
const trelloHelper = require('../helpers/trello-helper')
const hubspotHelper = require('../helpers/hubspot-helper')
const handleError = require('../helpers/error-handler-helper')
const checkAuthorizationMiddleware = require('../middlewares/check-authorization')
const hubspotSignatureValidatorMiddleware = require('../middlewares/hubspot-signature-validator')

exports.getRouter = () => {
    router.use(checkAuthorizationMiddleware)

    router.get('/mapping-list', async (req, res) => {
        try {
            const boardLists = [
                {
                    id: 6,
                    name: 'Name 06',
                },
                {
                    id: 0,
                    name: 'Name 00',
                },
            ]

            const pipelineStages = [
                {
                    id: 60,
                    label: 'Name 60',
                },
                {
                    id: 90,
                    label: 'Name 90',
                },
            ]

            const mappings = [
                {
                    boardListId: 6,
                    pipelineStageId: 60,
                    id: 0,
                },
                {
                    id: 1,
                    boardListId: 6,
                    pipelineStageId: 90,
                },
                {
                    id: 4,
                },
            ]

            res.render('mapping-list', { boardLists, pipelineStages, mappings })
        } catch (e) {
            handleError(e, res)
        }
    })

    router.post('/mapping-list', async (req, res) => {
        try {
            console.log("router.post('/mapping-list'", JSON.stringify(req.body, null, 2))

            res.redirect('/mappings/mapping-list')
        } catch (e) {
            handleError(e, res)
        }
    })

    return router
}
