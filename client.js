const objectClientFactory = require('./codegen/crm/objects')
const pipelinesClientFactory = require('./codegen/crm/pipelines')
const pjson = require('./package.json')
const request = require('request-promise')
const _ = require('lodash')
const qs = require('querystring')

const DEFAULT_HEADERS = { 'User-Agent': `${pjson.name}_${pjson.version}` }
const API_TIMEOUT = 60000
const objectsApiClient = new objectClientFactory.ApiClient()
const pipelinesApiClient = new pipelinesClientFactory.ApiClient()

const API_CLIENTS = [objectsApiClient, pipelinesApiClient];

let accessToken
let clientId
let clientSecret
let redirectUri
let refreshToken
let apiTimeout
let basePath

const setPropertyForApiClients = (path, value) => {
  const setFunction = _.partialRight(_.set, path, value)
  _.map(API_CLIENTS, setFunction)
}

const setApiKey = (apiKey) => {
  setPropertyForApiClients('authentications.hapikey.apiKey', apiKey)
}

const setTimeout = (timeout) => {
  apiTimeout = timeout || API_TIMEOUT
  setPropertyForApiClients('timeout', apiTimeout)
}

const setBasePath = (basePathToSet) => {
  basePath = basePathToSet || 'https://api.hubapi.com'
  objectsApiClient.basePath = `${basePath}/crm/v3/objects`.replace(/\/+$/, '')
  pipelinesApiClient.basePath = `${basePath}crm/v3/pipelines`.replace(/\/+$/, '')
}

const setCache = (cache) => {
  if (!_.isNil(cache)) {
    setPropertyForApiClients('cache', cache)
  }
}

const setEnableCookies = (enableCookies) => {
  if (!_.isNil(enableCookies)) {
    setPropertyForApiClients('enableCookies', enableCookies)
  }
}

const setAgent = (agent) => {
  if (!_.isNil(agent)) {
    setPropertyForApiClients('agent', agent)
  }
}

const setRequestAgent = (requestAgent) => {
  if (!_.isNil(requestAgent)) {
    setPropertyForApiClients('requestAgent', requestAgent)
  }
}

const setAccessToken = (accessTokenToSet) => {
  accessToken = accessTokenToSet
  setPropertyForApiClients('authentications.accessToken', accessToken)
}

const setDefaultHeaders = (defaultHeadersToSet) => {
  const defaultHeaders = _.assign({}, defaultHeadersToSet, DEFAULT_HEADERS)
  setPropertyForApiClients('defaultHeaders', defaultHeaders)
}

const setAuth = (options = {}) => {
  if (options.apiKey) {
    setApiKey(options.apiKey)
  } else if (options.accessToken) {
    setAccessToken(options.accessToken)
  }
}

const setOAuth = (options = {}) => {
  clientId = options.clientId
  clientSecret = options.clientSecret
  redirectUri = options.redirectUri
  refreshToken = options.refreshToken
}

const getDefaultOptions = () => {
  return {
    timeout: apiTimeout,
    basePath,
    defaultHeaders: objectsApiClient.defaultHeaders,
    cache: objectsApiClient.cache,
    enableCookies: objectsApiClient.enableCookies,
  }
}

const apiRequest = (opts) => {
  const params = _.cloneDeep(opts)
  if (this.auth) {
    params.auth = this.auth
  }
  params.method = params.method || 'GET'
  params.json = true
  params.resolveWithFullResponse = true

  params.url = params.overlapUrl || basePath + (params.path || '')
  delete params.overlapUrl
  delete params.path
  params.qs = Object.assign({}, this.qs, params.qs)

  params.qsStringifyOptions = {
    arrayFormat: 'repeat',
  }

  params.timeout = apiTimeout

  return request(params).then((res) => res.body)
}

const getAuthorizationUrl = (newData) => {
  const initialParams = {}
  if (clientId) initialParams.client_id = clientId
  if (redirectUri) initialParams.redirect_uri = redirectUri

  const params = Object.assign({}, initialParams, newData)
  return `https://app.hubspot.com/oauth/authorize?${qs.stringify(params)}`
}

const getAccessToken = (newData) => {
  const initialData = {
    grant_type: 'authorization_code',
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
  }
  const form = Object.assign({}, initialData, newData)
  return apiRequest({
    method: 'POST',
    path: '/oauth/v1/token',
    form,
  })
}

const refreshAccessToken = (newData) => {
  const initialData = {
    grant_type: 'refresh_token',
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    refresh_token: refreshToken,
  }
  const form = Object.assign({}, initialData, newData)

  return apiRequest({
    method: 'POST',
    path: '/oauth/v1/token',
    form,
  }).then((results) => {
    setAccessToken(results.access_token) // refresh the new access_token on the client
    return results
  })
}

const getPortalInfo = () => {
  return apiRequest({
    method: 'GET',
    path: `/oauth/v1/access-tokens/${accessToken}`,
  })
}

const setOptions = (options) => {
  setAuth(options)
  setOAuth(options)
  setTimeout(options.timeout)
  setBasePath(options.basePath)
  setDefaultHeaders(options.defaultHeaders)
  setCache(options.cache)
  setEnableCookies(options.enableCookies)
  setAgent(options.agent)
  setRequestAgent(options.requestAgent)
}

module.exports = (opts = {}) => {
  setOptions(opts)
  const basicClient = new objectClientFactory.BasicApi(objectsApiClient)
  const batchClient = new objectClientFactory.BatchApi(objectsApiClient)
  const searchClient = new objectClientFactory.SearchApi(objectsApiClient)
  const associationsClient = new objectClientFactory.AssociationsApi(objectsApiClient)
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
    apiRequest,
    setAccessToken,
    refreshAccessToken,
    setOAuth,
    setAuth,
    setOptions,
    setTimeout,
    setBasePath,
    setDefaultHeaders,
    setCache,
    setEnableCookies,
    setAgent,
    setRequestAgent,
    getDefaultOptions,
    oauth: {
      getAuthorizationUrl,
      getAccessToken,
      refreshAccessToken,
      getPortalInfo,
    },
  }
}
