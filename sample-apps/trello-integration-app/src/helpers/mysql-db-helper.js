const _ = require('lodash')
const mysql = require('mysql')
const Promise = require('bluebird')

let connection = null

const MYSQL_HOST = process.env.MYSQL_HOST
const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_DATABASE = process.env.MYSQL_DATABASE
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD

const MAPPINGS_TABLE_INIT = `create table if not exists mappings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  board_id          VARCHAR(255)  NOT NULL,
  board_list_id     VARCHAR(255)  default null,
  pipeline_id       VARCHAR(255)  NOT NULL,
  pipeline_stage_id VARCHAR(255)  default null,
  created_at        datetime      default CURRENT_TIMESTAMP,
  UNIQUE KEY board_id_pipeline_id_board_list_id (board_id, pipeline_id, board_list_id),
  UNIQUE KEY board_id_pipeline_id_pipeline_stage_id (board_id, pipeline_id, pipeline_stage_id)
);`

const HUBSPOT_TOKENS_TABLE_INIT = `create table if not exists hubspot_tokens  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  refresh_token  VARCHAR(255)   default null,
  access_token   VARCHAR(255)   default null,
  expires_in     bigint         default null,
  created_at     datetime       default CURRENT_TIMESTAMP,
  updated_at     datetime       default CURRENT_TIMESTAMP
);`

const TRELLO_TOKENS_TABLE_INIT = `create table if not exists trello_tokens  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  token VARCHAR(255) default null
);`

const URLS_TABLE_INIT = `create table if not exists urls  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(255) default null
);`

const CARDS_TABLE_INIT = `create table if not exists cards  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  card_id VARCHAR(255) default null
);`

const DEAL_ASSOCIATIONS_TABLE_INIT = `create table if not exists deal_associations  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  deal_id VARCHAR(255) default null,
  card_id VARCHAR(255) default null
);`

const CARD_WEBHOOKS_TABLE_INIT = `create table if not exists card_webhooks  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  webhook_id VARCHAR(255) default null,
  card_id VARCHAR(255) default null
);`

const run = (sql) => {
    console.log(sql)
    return _.isNull(connection) ? Promise.reject(new Error('MYSQL DB not initialized!')) : connection.queryAsync(sql)
}

module.exports = {
    init: async () => {
        try {
            connection = new mysql.createConnection({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
                database: MYSQL_DATABASE,
            })

            connection.connectAsync = Promise.promisify(connection.connect)
            connection.queryAsync = Promise.promisify(connection.query)

            console.log('connecting to MYSQL DB')
            await connection.connectAsync()

            console.log('init tables')
            await connection.queryAsync(MAPPINGS_TABLE_INIT)
            await connection.queryAsync(HUBSPOT_TOKENS_TABLE_INIT)
            await connection.queryAsync(TRELLO_TOKENS_TABLE_INIT)
            await connection.queryAsync(URLS_TABLE_INIT)
            await connection.queryAsync(CARDS_TABLE_INIT)
            await connection.queryAsync(DEAL_ASSOCIATIONS_TABLE_INIT)
            await connection.queryAsync(CARD_WEBHOOKS_TABLE_INIT)
        } catch (e) {
            console.error('DB is not available')
            console.error(e)
            throw e
        }
    },
    close: () => {
        if (connection) connection.end()
    },
    getMappings: (boardId, pipelineId) => {
        const getMappingsSql = `select * from mappings where board_id = "${boardId}" AND pipeline_id = "${pipelineId}" ORDER BY id ASC`
        return run(getMappingsSql)
    },
    getMappingForBoardList: async (boardListId) => {
        const getMappingForBoardList = `select * from mappings where board_list_id = "${boardListId}" limit 1`
        const result = await run(getMappingForBoardList)
        return result[0]
    },
    addMapping: (boardId, pipelineId) => {
        const getMappingsSql = `insert into mappings (board_id, pipeline_id) values ("${boardId}", "${pipelineId}")`
        return run(getMappingsSql)
    },
    updateMapping: ({ id, boardListId, pipelineStageId } = {}) => {
        const updateMappingsSql = `update mappings set board_list_id = '${boardListId}', pipeline_stage_id = '${pipelineStageId}' WHERE id = ${_.toNumber(
            id,
        )}`
        return run(updateMappingsSql)
    },
    removeMapping: (mappingId) => {
        const removeMappingsSql = `delete from mappings WHERE id = ${_.toNumber(mappingId)}`
        return run(removeMappingsSql)
    },
    removeMappingsForPipeline: (pipelineId) => {
        const removeMappingsSql = `delete from mappings WHERE pipeline_id = '${pipelineId}'`
        return run(removeMappingsSql)
    },
    removeMappingsForPipelineStage: (pipelineStageId) => {
        const removeMappingsSql = `delete from mappings WHERE pipeline_stage_id = '${pipelineStageId}'`
        return run(removeMappingsSql)
    },
    getHubspotTokensData: async () => {
        const getHubspotTokensData = `select * from hubspot_tokens ORDER BY updated_at DESC limit 1`
        const result = await run(getHubspotTokensData)
        return result[0]
    },
    saveHubspotTokensData: ({ refreshToken, accessToken, expiresIn } = {}) => {
        const saveHubspotTokens = `insert into hubspot_tokens (refresh_token, access_token, expires_in) values ("${refreshToken}", "${accessToken}", ${expiresIn})`
        return run(saveHubspotTokens)
    },
    updateHubspotTokensData: async ({ refreshToken, accessToken, expiresIn } = {}) => {
        const updateHubspotTokensData = `update hubspot_tokens set access_token = '${accessToken}', expires_in = '${expiresIn}', updated_at = CURRENT_TIMESTAMP where refresh_token = "${refreshToken}"`
        const getHubspotTokensData = `select * from hubspot_tokens where refresh_token = "${refreshToken}"`

        await run(updateHubspotTokensData)
        const result = await run(getHubspotTokensData)
        return result[0]
    },
    getTrelloToken: async () => {
        const getTrelloToken = `select * from trello_tokens ORDER BY id DESC limit 1`
        const result = await run(getTrelloToken)
        return _.get(result, '[0].token')
    },
    saveTrelloToken: (token) => {
        const saveTrelloToken = `insert into trello_tokens (token) values ("${token}")`
        return run(saveTrelloToken)
    },
    getUrl: async () => {
        const getUrl = `select * from urls ORDER BY id DESC limit 1`
        const result = await run(getUrl)
        return _.get(result, '[0].url')
    },
    saveUrl: (url) => {
        const saveUrl = `insert into urls (url) values ("${url}")`
        return run(saveUrl)
    },
    getCardId: async () => {
        const getCard = `select * from cards ORDER BY id DESC limit 1`
        const result = await run(getCard)
        return _.get(result, '[0].card_id')
    },
    saveCardId: (cardId) => {
        const saveCard = `insert into cards (card_id) values ("${cardId}")`
        return run(saveCard)
    },
    getDealAssociatedCard: async (dealId) => {
        const getDealAssociation = `select * from deal_associations where deal_id = "${dealId}" limit 1`
        const result = await run(getDealAssociation)
        return _.get(result, '[0].card_id')
    },
    getDealAssociationsForCard: (cardId) => {
        const getDealAssociationsForCard = `select * from deal_associations where card_id = "${cardId}"`
        return run(getDealAssociationsForCard)
    },
    createDealAssociation: (dealId, cardId) => {
        const saveDealAssociation = `insert into deal_associations (deal_id, card_id) values ("${dealId}", "${cardId}")`
        return run(saveDealAssociation)
    },
    deleteDealAssociation: (dealId) => {
        const deleteDealAssociation = `delete from deal_associations WHERE deal_id = ${dealId}`
        return run(deleteDealAssociation)
    },
    deleteDealAssociationsForCard: (cardId) => {
        const deleteDealAssociations = `delete from deal_associations WHERE card_id = '${cardId}'`
        return run(deleteDealAssociations)
    },
    getCardWebhookId: async (cardId) => {
        const getCardWebhook = `select * from card_webhooks where card_id = "${cardId}" limit 1`
        const result = await run(getCardWebhook)
        return _.get(result, '[0].webhook_id')
    },
    getCardWebhooks: () => {
        const getCardWebhooks = `select * from card_webhooks`
        return run(getCardWebhooks)
    },
    saveCardWebhook: (webhookId, cardId) => {
        const saveCardWebhook = `insert into card_webhooks (webhook_id, card_id) values ("${webhookId}", "${cardId}")`
        return run(saveCardWebhook)
    },
    deleteCardWebhook: (webhookId) => {
        const deleteCardWebhook = `delete from card_webhooks WHERE webhook_id = '${webhookId}'`
        return run(deleteCardWebhook)
    },
}
