const _ = require('lodash')
const express = require('express')
const router = new express.Router()
const Promise = require('bluebird')
const trelloHelper = require('../helpers/trello-helper')
const hubspotHelper = require('../helpers/hubspot-helper')
const handleError = require('../helpers/error-handler-helper')
const checkAuthorizationMiddleware = require('../middlewares/check-authorization')
const mysqlDbHelper = require('../helpers/mysql-db-helper')

const parseMappings = (req) => {
    const mappingIds = _.get(req, 'body.id') || []

    return mappingIds.map((mappingId, index) => ({
        id: mappingId,
        boardListId: _.get(req, `body.boardListId[${index}]`),
        pipelineStageId: _.get(req, `body.pipelineStageId[${index}]`),
    }))
}

exports.getRouter = () => {
    router.use(checkAuthorizationMiddleware)

    router.get('/board/:boardId/pipeline/:pipelineId/mapping/:mappingId/remove', async (req, res) => {
        try {
            const boardId = _.get(req, 'params.boardId')
            const pipelineId = _.get(req, 'params.pipelineId')
            const mappingId = _.get(req, 'params.mappingId')

            await mysqlDbHelper.removeMapping(mappingId)

            res.redirect(`/mappings/board/${boardId}/pipeline/${pipelineId}`)
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/board/:boardId/pipeline/:pipelineId/mapping/add', async (req, res) => {
        try {
            const boardId = _.get(req, 'params.boardId')
            const pipelineId = _.get(req, 'params.pipelineId')

            await mysqlDbHelper.addMapping(boardId, pipelineId)

            res.redirect(`/mappings/board/${boardId}/pipeline/${pipelineId}`)
        } catch (e) {
            handleError(e, res)
        }
    })

    router.get('/board/:boardId/pipeline/:pipelineId', async (req, res) => {
        try {
            const boardId = _.get(req, 'params.boardId')
            const pipelineId = _.get(req, 'params.pipelineId')
            const boardLists = await trelloHelper.getBoardLists(boardId)
            const pipelineStages = await hubspotHelper.getPipelineStages(pipelineId)
            const mappings = await mysqlDbHelper.getMappings(boardId, pipelineId)

            res.render('mapping-list', { boardLists, pipelineStages, mappings, boardId, pipelineId })
        } catch (e) {
            handleError(e, res)
        }
    })

    router.post('/board/:boardId/pipeline/:pipelineId', async (req, res) => {
        try {
            const boardId = _.get(req, 'params.boardId')
            const pipelineId = _.get(req, 'params.pipelineId')
            const mappings = parseMappings(req)

            await Promise.map(mappings, (mapping) => mysqlDbHelper.updateMapping(mapping))

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
