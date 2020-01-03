import http = require('http');
import * as _ from 'lodash'
import * as qs from 'querystring'
import request = require('request');
import { Response } from 'request'
// @ts-ignore
import * as pJson from '../../package.json'
import {
    AssociationsApi,
    BasicApi,
    BatchApi as BatchObjectsApi,
    CreateNativeObjectsApi,
    SearchApi,
} from '../codegen/crm/objects/api'
import { ApiKeyAuth, DefaultApi, OAuth } from '../codegen/crm/owners/api'
import { PipelinesApi, PipelineStagesApi } from '../codegen/crm/pipelines/api'
import { BatchApi, CoreApi } from '../codegen/crm/properties/api'
import { AccessTokensApi, RefreshTokensApi, TokensApi } from '../codegen/oauth/api'

const DEFAULT_HEADERS = { 'User-Agent': `${pJson.name}_${pJson.version}` }

export class Client {
    public oauth: {
        accessTokensApi: AccessTokensApi,
        refreshTokensApiI: RefreshTokensApi,
        tokensApi: TokensApi,
        getAuthorizationUrl: (clientId: string, redirectUri: string, scopes: string) => string
    }
    public crm: {
        objects: {
            associationsApi: AssociationsApi
            basicApi: BasicApi
            batchApi: BatchObjectsApi
            createNativeObjectsApi: CreateNativeObjectsApi
            searchApi: SearchApi
        }
        owners: {
            defaultApi: DefaultApi
        }
        pipelines: {
            pipelinesApi: PipelinesApi
            pipelineStagesApi: PipelineStagesApi
        }
        properties: {
            batchApi: BatchApi
            coreApi: CoreApi
        }
    }
    protected _associationsApi: AssociationsApi
    protected _basicApi: BasicApi
    protected _batchObjectsApi: BatchObjectsApi
    protected _createNativeObjectsApi: CreateNativeObjectsApi
    protected _searchApi: SearchApi
    protected _defaultApi: DefaultApi
    protected _pipelinesApi: PipelinesApi
    protected _pipelineStagesApi: PipelineStagesApi
    protected _batchApi: BatchApi
    protected _coreApi: CoreApi
    protected _accessTokensApi: AccessTokensApi
    protected _refreshTokensApi: RefreshTokensApi
    protected _tokensApi: TokensApi
    protected _apiClientsWithAuth: any[]
    protected _apiClients: any[]
    protected _apiKey: string | undefined
    protected _basePath = 'https://api.hubapi.com'
    protected _accessToken: string | undefined
    protected _defaultHeaders: object | undefined
    protected _refreshToken: string | undefined
    protected authentications = {
        'hapikey': new ApiKeyAuth('query', 'hapikey'),
        'oauth2': new OAuth(),
    }
    constructor(
        options: {
            apiKey?: string
            accessToken?: string
            clientId?: string
            clientSecret?: string
            redirectUri?: string
            refreshToken?: string
            basePath?: string
            defaultHeaders?: object
        } = {},
    ) {
        this._associationsApi = new AssociationsApi()
        this._basicApi = new BasicApi()
        this._batchObjectsApi = new BatchObjectsApi()
        this._createNativeObjectsApi = new CreateNativeObjectsApi()
        this._searchApi = new SearchApi()
        this._defaultApi = new DefaultApi()
        this._pipelinesApi = new PipelinesApi()
        this._pipelineStagesApi = new PipelineStagesApi()
        this._batchApi = new BatchApi()
        this._coreApi = new CoreApi()
        this._accessTokensApi = new AccessTokensApi()
        this._refreshTokensApi = new RefreshTokensApi()
        this._tokensApi = new TokensApi()
        this._apiClientsWithAuth = [
            this._associationsApi,
            this._basicApi,
            this._batchObjectsApi,
            this._createNativeObjectsApi,
            this._searchApi,
            this._defaultApi,
            this._pipelinesApi,
            this._pipelineStagesApi,
            this._batchApi,
            this._coreApi
        ]
        this._apiClients = this._apiClientsWithAuth.slice()
        this._apiClients.push(this._accessTokensApi, this._refreshTokensApi, this._tokensApi)
        this._setUseQuerystring(true)
        this._setOptions(options)
        this.crm = {
            objects: {
                associationsApi: this._associationsApi,
                basicApi: this._basicApi,
                batchApi: this._batchObjectsApi,
                createNativeObjectsApi: this._createNativeObjectsApi,
                searchApi: this._searchApi,
            },
            owners: {
                defaultApi: this._defaultApi,
            },
            pipelines: {
                pipelineStagesApi: this._pipelineStagesApi,
                pipelinesApi: this._pipelinesApi,
            },
            properties: {
                batchApi: this._batchApi,
                coreApi: this._coreApi,
            },
        }
        this.oauth = {
            accessTokensApi: this._accessTokensApi,
            refreshTokensApiI: this._refreshTokensApi,
            tokensApi: this._tokensApi,
            getAuthorizationUrl: this._getAuthorizationUrl.bind(this)
        }
    }

    public setApiKey(apiKeyToSet: string) {
        this._apiKey = apiKeyToSet
        this.authentications.hapikey.apiKey = apiKeyToSet;
        _.each(this._apiClientsWithAuth, (apiClient) => {
            apiClient.setApiKey(0, apiKeyToSet)
        })
    }

    public setBasePath(basePathToSet?: string) {
        if (_.isNil(basePathToSet)) {
            return
        }

        this._basePath = basePathToSet
        const objectsBasePath = `${basePathToSet}/crm/v3/objects`.replace(/\/+$/, '')
        const ownersBasePath = `${basePathToSet}/crm/v3/owners`.replace(/\/+$/, '')
        const pipelinesBasePath = `${basePathToSet}/crm/v3/pipelines`.replace(/\/+$/, '')
        const propertiesBasePath = `${basePathToSet}/crm/v3/properties`.replace(/\/+$/, '')
        const oauthBasePath = `${basePathToSet}/oauth`.replace(/\/+$/, '')
        this._associationsApi.basePath = objectsBasePath
        this._basicApi.basePath = objectsBasePath
        this._batchObjectsApi.basePath = objectsBasePath
        this._createNativeObjectsApi.basePath = objectsBasePath
        this._searchApi.basePath = objectsBasePath
        this._defaultApi.basePath = ownersBasePath
        this._pipelinesApi.basePath = pipelinesBasePath
        this._pipelineStagesApi.basePath = pipelinesBasePath
        this._batchApi.basePath = propertiesBasePath
        this._coreApi.basePath = propertiesBasePath
        this._accessTokensApi.basePath = oauthBasePath
        this._refreshTokensApi.basePath = oauthBasePath
        this._tokensApi.basePath = oauthBasePath

    }

    public setAccessToken(accessTokenToSet: string) {
        this._accessToken = accessTokenToSet
        this.authentications.oauth2.accessToken = accessTokenToSet;
        _.each(this._apiClientsWithAuth, (apiClient) => {
            apiClient.accessToken = accessTokenToSet
        })
    }

    public setDefaultHeaders(defaultHeadersToSet?: object) {
        this._defaultHeaders = _.assign({}, defaultHeadersToSet, DEFAULT_HEADERS)
        _.each(this._apiClients, (apiClient) => {
            apiClient.defaultHeaders = this._defaultHeaders
        })
    }

    public setAuth(options: { apiKey?: string; accessToken?: string } = {}) {
        if (options.apiKey) {
            this.setApiKey(options.apiKey)
        } else if (options.accessToken) {
            this.setAccessToken(options.accessToken)
        }
    }

    public getOptions(): {
        basePath: string | undefined
        defaultHeaders: object | undefined
        refreshToken: string | undefined
        apiKey: string | undefined
        accessToken: string | undefined
    } {
        return {
            accessToken: this._accessToken,
            apiKey: this._apiKey,
            basePath: this._basePath,
            defaultHeaders: this._defaultHeaders,
            refreshToken: this._refreshToken,
        }
    }

    public apiRequest(opts: any): Promise<{ response: http.IncomingMessage; body?: any;}> {
        const params = _.cloneDeep(opts)
        params.method = params.method || 'GET'
        params.json = true
        params.resolveWithFullResponse = true
        params.url = params.overlapUrl || this._basePath + (params.path || '')
        delete params.overlapUrl
        delete params.path
        params.qsStringifyOptions = {
            arrayFormat: 'repeat',
        }
        params.qs = Object.assign({}, params.qs)

        params.headers = _.assign({}, opts.headers, this._defaultHeaders)

        if (this.authentications.hapikey.apiKey) {
            this.authentications.hapikey.applyToRequest(params);
        }
        if (this.authentications.oauth2.accessToken) {
            this.authentications.oauth2.applyToRequest(params);
        }

        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            request(params, (error: any, response: Response, body: any) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response, body });
                    } else {
                        reject({ response, body });
                    }
                }
            });
        });
    }

    protected _getAuthorizationUrl(clientId: string, redirectUri: string, scopes: string): string {
        const params = {
            client_id: clientId,
            redirect_uri: redirectUri,
            scopes
        }
        return `https://app.hubspot.com/oauth/authorize?${qs.stringify(params)}`
    }

    private _setOptions(options: {
        apiKey?: string
        accessToken?: string
        refreshToken?: string
        basePath?: string
        defaultHeaders?: object
    }) {
        this.setAuth(options)
        this.setBasePath(options.basePath)
        this.setDefaultHeaders(options.defaultHeaders)
    }

    private _setUseQuerystring(useQuerystring: boolean) {
        _.each(this._apiClients, (apiClient) => apiClient._useQuerystring = useQuerystring)
    }
}
