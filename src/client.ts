import * as _ from 'lodash'
import * as qs from 'querystring'
import requestPromise from 'request-promise'
// @ts-ignore
import * as pJson from '../../package.json'
import {
    AssociationsApi,
    BasicApi,
    BatchApi as BatchObjectsApi,
    CreateNativeObjectsApi,
    SearchApi,
} from '../codegen/crm/objects/api'
import { DefaultApi } from '../codegen/crm/owners/api'
import { PipelinesApi, PipelineStagesApi } from '../codegen/crm/pipelines/api'
import { BatchApi, CoreApi } from '../codegen/crm/properties/api'
import { AccessTokensApi, RefreshTokensApi, TokensApi } from '../codegen/oauth/api'
import { ApiKeyAuthCustom } from './custom-authentications/apiKeyAuthCustom'
import { OAuthCustom } from './custom-authentications/oAuthCustom'

const DEFAULT_HEADERS = { 'User-Agent': `${pJson.name}_${pJson.version}` }

class AssociationsApiInternal extends AssociationsApi {
    constructor() {
        super();
        this.authentications.hapikey = new ApiKeyAuthCustom('query', 'hapikey')
        this.authentications.oauth2 = new OAuthCustom()

    }
}
class BasicApiInternal extends BasicApi {
    constructor() {
        super();
        this.authentications.hapikey = new ApiKeyAuthCustom('query', 'hapikey')
        this.authentications.oauth2 = new OAuthCustom()

    }
}
class BatchObjectsApiInternal extends BatchObjectsApi {
    constructor() {
        super();
        this.authentications.hapikey = new ApiKeyAuthCustom('query', 'hapikey')
        this.authentications.oauth2 = new OAuthCustom()

    }
}
class CreateNativeObjectsApiInternal extends CreateNativeObjectsApi {
    constructor() {
        super();
        this.authentications.hapikey = new ApiKeyAuthCustom('query', 'hapikey')
        this.authentications.oauth2 = new OAuthCustom()

    }
}
class SearchApiInternal extends SearchApi {
    constructor() {
        super();
        this.authentications.hapikey = new ApiKeyAuthCustom('query', 'hapikey')
        this.authentications.oauth2 = new OAuthCustom()

    }
}
class DefaultApiInternal extends DefaultApi {
    constructor() {
        super();
        // @ts-ignore
        this.authentications.hapikey = new ApiKeyAuthCustom('query', 'hapikey')
        this.authentications.oauth2 = new OAuthCustom()

    }
}
class PipelinesApiInternal extends PipelinesApi {
    constructor() {
        super();
        // @ts-ignore
        this.authentications.hapikey = new ApiKeyAuthCustom('query', 'hapikey')
        this.authentications.oauth2 = new OAuthCustom()

    }
}
class PipelineStagesApiInternal extends PipelineStagesApi {
    constructor() {
        super();
        // @ts-ignore
        this.authentications.hapikey = new ApiKeyAuthCustom('query', 'hapikey')
        this.authentications.oauth2 = new OAuthCustom()

    }
}
class BatchApiInternal extends BatchApi {
    constructor() {
        super();
        // @ts-ignore
        this.authentications.hapikey = new ApiKeyAuthCustom('query', 'hapikey')
        this.authentications.oauth2 = new OAuthCustom()

    }
}
class CoreApiInternal extends CoreApi {
    constructor() {
        super();
        // @ts-ignore
        this.authentications.hapikey = new ApiKeyAuthCustom('query', 'hapikey')
        this.authentications.oauth2 = new OAuthCustom()

    }
}
class AccessTokensApiInternal extends AccessTokensApi {}
class RefreshTokensApiInternal extends RefreshTokensApi {}
class TokensApiInternal extends TokensApi {}

export class Client {
    public oauth: {
        accessTokensApi: AccessTokensApiInternal,
        refreshTokensApiI: RefreshTokensApiInternal,
        tokensApi: TokensApiInternal,
        getAuthorizationUrl: (clientId: string, redirectUri: string, scopes: string) => string
    }
    public crm: {
        objects: {
            associationsApi: AssociationsApiInternal
            basicApi: BasicApiInternal
            batchApi: BatchObjectsApiInternal
            createNativeObjectsApi: CreateNativeObjectsApiInternal
            searchApi: SearchApiInternal
        }
        owners: {
            defaultApi: DefaultApiInternal
        }
        pipelines: {
            pipelinesApi: PipelinesApiInternal
            pipelineStagesApi: PipelineStagesApiInternal
        }
        properties: {
            batchApi: BatchApiInternal
            coreApi: CoreApiInternal
        }
    }
    protected _associationsApi: AssociationsApiInternal
    protected _basicApi: BasicApiInternal
    protected _batchObjectsApi: BatchObjectsApiInternal
    protected _createNativeObjectsApi: CreateNativeObjectsApiInternal
    protected _searchApi: SearchApiInternal
    protected _defaultApi: DefaultApiInternal
    protected _pipelinesApi: PipelinesApiInternal
    protected _pipelineStagesApi: PipelineStagesApiInternal
    protected _batchApi: BatchApiInternal
    protected _coreApi: CoreApiInternal
    protected _accessTokensApi: AccessTokensApiInternal
    protected _refreshTokensApi: RefreshTokensApiInternal
    protected _tokensApi: TokensApiInternal
    protected _apiClients: any[]
    protected _apiKey: string | undefined
    protected _basePath = 'https://api.hubapi.com'
    protected _accessToken: string | undefined
    protected _defaultHeaders: object | undefined
    protected _refreshToken: string | undefined

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
        this._associationsApi = new AssociationsApiInternal()
        this._basicApi = new BasicApiInternal()
        this._batchObjectsApi = new BatchObjectsApiInternal()
        this._createNativeObjectsApi = new CreateNativeObjectsApiInternal()
        this._searchApi = new SearchApiInternal()
        this._defaultApi = new DefaultApiInternal()
        this._pipelinesApi = new PipelinesApiInternal()
        this._pipelineStagesApi = new PipelineStagesApiInternal()
        this._batchApi = new BatchApiInternal()
        this._coreApi = new CoreApiInternal()
        this._accessTokensApi = new AccessTokensApiInternal()
        this._refreshTokensApi = new RefreshTokensApiInternal()
        this._tokensApi = new TokensApiInternal()
        this._apiClients = [
            this._associationsApi,
            this._basicApi,
            this._batchObjectsApi,
            this._createNativeObjectsApi,
            this._searchApi,
            this._defaultApi,
            this._pipelinesApi,
            this._pipelineStagesApi,
            this._batchApi,
            this._coreApi,
            this._accessTokensApi,
            this._refreshTokensApi,
            this._tokensApi
        ]
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
        _.each(this._apiClients, (apiClient) => {
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
        _.each(this._apiClients, (apiClient) => {
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

    public apiRequest(opts: any) {
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

        return requestPromise(params)
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
}
