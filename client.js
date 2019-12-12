const objectClientFactory = require('./codegen/crm/objects')
const pipelinesClientFactory = require('./codegen/crm/pipelines')
const pjson = require('./package.json')

const DEFAULT_HEADERS = { 'User-Agent': `${pjson.name}_${pjson.version}` }

module.exports = (opts = {}) => {
  if (!opts.apiKey) {
    console.log('apiKey is a required parameter')
    return
  }

  const objectsApiClient = new objectClientFactory.ApiClient()
  objectsApiClient.authentications.hapikey.apiKey = opts.apiKey
  objectsApiClient.defaultHeaders = DEFAULT_HEADERS

  const basicClient = new objectClientFactory.BasicApi(objectsApiClient)
  const batchClient = new objectClientFactory.BatchApi(objectsApiClient)
  const searchClient = new objectClientFactory.SearchApi(objectsApiClient)
  const associationsClient = new objectClientFactory.AssociationsApi(objectsApiClient)

  const pipelinesApiClient = new pipelinesClientFactory.ApiClient()
  pipelinesApiClient.authentications.hapikey.apiKey = opts.apiKey
  objectsApiClient.defaultHeaders = DEFAULT_HEADERS

  const pipelinesClient = new pipelinesClientFactory.PipelinesApi(pipelinesApiClient)
  const pipelineStagesClient = new pipelinesClientFactory.PipelineStagesApi(pipelinesApiClient)

  return {
    crm: {
      objects: {
        getPage: basicClient.getPage.bind(basicClient),
        getById: basicClient.getById.bind(basicClient),
        create: basicClient.create.bind(basicClient),
        update: basicClient.update.bind(basicClient),
        delete: basicClient.archive.bind(basicClient),
        archiveBatch: batchClient.archiveBatch.bind(batchClient),
        createBatch: batchClient.createBatch.bind(batchClient),
        readBatch: batchClient.readBatch.bind(batchClient),
        updateBatch: batchClient.updateBatch.bind(batchClient),
        doSearch: searchClient.doSearch.bind(searchClient),
        createAssociation: associationsClient.createAssociation.bind(associationsClient),
        getAssociations: associationsClient.getAssociations.bind(associationsClient),
        deleteAssociation: associationsClient.archiveAssociation.bind(associationsClient),
      },
      pipelines: {
        getPipelines: pipelinesClient.getPage.bind(pipelinesClient),
        getById: pipelinesClient.getById.bind(pipelinesClient),
        create: pipelinesClient.create.bind(pipelinesClient),
        replace: pipelinesClient.replace.bind(pipelinesClient),
        update: pipelinesClient.update.bind(pipelinesClient),
        delete: pipelinesClient.archive.bind(pipelinesClient),
        getStage: pipelineStagesClient.getById.bind(pipelineStagesClient),
        getStages: pipelineStagesClient.getPage.bind(pipelineStagesClient),
        createStage: pipelineStagesClient.create.bind(pipelineStagesClient),
        deleteStage: pipelineStagesClient.archive.bind(pipelineStagesClient),
        replaceStage: pipelineStagesClient.replace.bind(pipelineStagesClient),
        updateStage: pipelineStagesClient.update.bind(pipelineStagesClient),
      },
    },
  }
}
