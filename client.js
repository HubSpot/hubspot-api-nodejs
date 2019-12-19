const pjson = require('./package.json')
const request = require('request-promise')
const _ = require('lodash')
const qs = require('querystring')
const clientConfigHelper = require('./helpers/clients-config')

const clientsConfig = clientConfigHelper.getClientsConfig()

const DEFAULT_HEADERS = { 'User-Agent': `${pjson.name}_${pjson.version}` }
const API_TIMEOUT = 60000

const getClientFactories = () => {
  return _.reduce(
    clientsConfig,
    (factories, clientConfig) => {
      _.set(factories, clientConfig.clientFactoryName, require(clientConfig.clientFactoryPath))

      return factories
    },
    {}
  )
}

const clientFactories = getClientFactories()

const getApiClients = () => {
  return _.reduce(
    clientsConfig,
    (apiClients, clientConfig) => {
      _.set(apiClients, clientConfig.apiClientName, new clientFactories[clientConfig.clientFactoryName].ApiClient())

      return apiClients
    },
    {}
  )
}

module.exports = (opts = {}) => {
  const apiClients = getApiClients()

  let accessToken
  let clientId
  let clientSecret
  let redirectUri
  let refreshToken
  let apiTimeout
  let basePath
  let defaultHeaders
  let cache = true
  let enableCookies = false
  let apiKey

  const setPropertyForApiClients = (path, value) => {
    const setFunction = _.partial(_.set, _, path, value)
    _.map(apiClients, setFunction)
  }

  const setApiKey = (apiKeyToSet) => {
    apiKey = apiKeyToSet
    setPropertyForApiClients('authentications.hapikey.apiKey', apiKeyToSet)
  }

  const setTimeout = (timeout) => {
    apiTimeout = timeout || API_TIMEOUT
    setPropertyForApiClients('timeout', apiTimeout)
  }

  const setBasePath = (basePathToSet) => {
    basePath = basePathToSet || 'https://api.hubapi.com'
    _.each(clientsConfig, (clientConfig) => {
      const pathValue = `${basePath}${clientConfig.basePathSufix}`.replace(/\/+$/, '')
      _.set(apiClients[clientConfig.apiClientName], 'basePath', pathValue)
    })
  }

  const setCache = (cacheToSet) => {
    if (!_.isNil(cacheToSet)) {
      cache = cacheToSet
      setPropertyForApiClients('cache', cacheToSet)
    }
  }

  const setEnableCookies = (enableCookiesToSet) => {
    if (!_.isNil(enableCookiesToSet)) {
      enableCookies = enableCookiesToSet
      setPropertyForApiClients('enableCookies', enableCookiesToSet)
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
    setPropertyForApiClients('authentications.oauth2.accessToken', accessToken)
  }

  const setDefaultHeaders = (defaultHeadersToSet) => {
    defaultHeaders = _.assign({}, defaultHeadersToSet, DEFAULT_HEADERS)
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

  const getOptions = () => {
    return {
      timeout: apiTimeout,
      basePath,
      defaultHeaders,
      cache,
      enableCookies,
      clientId,
      clientSecret,
      redirectUri,
      refreshToken,
      apiKey,
      accessToken,
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

  const getApi = () => {
    const api = _.reduce(
      clientsConfig,
      (api, clientConfig) => {
        _.each(clientConfig.apiClientFilesConfig, (apiClientFileConfig) => {
          const client = new clientFactories[clientConfig.clientFactoryName][apiClientFileConfig.factoryMethodName](
            apiClients[clientConfig.apiClientName]
          )
          _.set(api, apiClientFileConfig.apiPath, client)
        })

        return api
      },
      {}
    )
    const basicApi = {
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
      getOptions,
      oauth: {
        getAuthorizationUrl,
        getAccessToken,
        refreshAccessToken,
        getPortalInfo,
      },
    }

    return _.assign({}, basicApi, api)
  }

  setOptions(opts)

  return getApi()
}
