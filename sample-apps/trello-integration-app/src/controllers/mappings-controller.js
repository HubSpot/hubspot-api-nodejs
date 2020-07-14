const _ = require('lodash')
const express = require('express')
const router = new express.Router()
const trelloHelper = require('../helpers/trello-helper')
const hubspotHelper = require('../helpers/hubspot-helper')
const handleError = require('../helpers/error-handler-helper')
const checkAuthorizationMiddleware = require('../middlewares/check-authorization')

exports.getRouter = () => {
    router.use(checkAuthorizationMiddleware)

    router.get('/board/:boardId/pipeline/:pipelineId/mapping/:mappingId/remove', async (req, res) => {
        try {
            console.log('/board/:boardId/pipeline/:pipelineId/mapping/:mappingId/remove')

            const boardId = _.get(req, 'params.boardId')
            const pipelineId = _.get(req, 'params.pipelineId')

            res.redirect(`/mappings/board/${boardId}/pipeline/${pipelineId}`)
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/board/:boardId/pipeline/:pipelineId/mapping/add', async (req, res) => {
        try {
            console.log('/board/:boardId/pipeline/:pipelineId/mapping/add')

            const boardId = _.get(req, 'params.boardId')
            const pipelineId = _.get(req, 'params.pipelineId')

            res.redirect(`/mappings/board/${boardId}/pipeline/${pipelineId}`)
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/board/:boardId/pipeline/:pipelineId', async (req, res) => {
        try {
            const boardId = _.get(req, 'params.boardId')
            const pipelineId = _.get(req, 'params.pipelineId')
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

            res.render('mapping-list', { boardLists, pipelineStages, mappings, boardId, pipelineId })
        } catch (e) {
            handleError(e, res)
        }
    })

    router.post('/board/:boardId/pipeline/:pipelineId', async (req, res) => {
        try {
            console.log("router.post('/mapping-list'", JSON.stringify(req.body, null, 2))

            const boardId = _.get(req, 'params.boardId')
            const pipelineId = _.get(req, 'params.pipelineId')

            res.redirect(`/mappings/board/${boardId}/pipeline/${pipelineId}`)
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/board/:boardId', async (req, res) => {
        try {
            const boardId = _.get(req, 'params.boardId')
            const pipelines = await hubspotHelper.getPipelines()

            res.render('pipelines', { pipelines, boardId })
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/', async (req, res) => {
        try {
            const trelloBoards = await trelloHelper.getBoards()

            res.render('boards', { trelloBoards })
        } catch (e) {
            handleError(e, res)
        }
    })

    return router
}
