import {
    AssociationsApi,
    BasicApi,
    BatchApi as BatchObjectsApi,
    CreateNativeObjectsApi,
    SearchApi
} from "../codegen/crm/objects/api";
import {DefaultApi} from "../codegen/crm/owners/api";
import {PipelinesApi, PipelineStagesApi} from "../codegen/crm/pipelines/api";
import {BatchApi, CoreApi} from "../codegen/crm/properties/api";
import * as _ from "lodash";
import * as pJson from '../package.json';
import request from "request-promise";
import * as qs from "querystring"

const DEFAULT_HEADERS = {'User-Agent': `${pJson.name}_${pJson.version}`};

class AssociationsApiInternal extends AssociationsApi  {}
class BasicApiInternal extends BasicApi {}
class BatchObjectsApiInternal extends BatchObjectsApi {}
class CreateNativeObjectsApiInternal extends CreateNativeObjectsApi {}
class SearchApiInternal extends SearchApi {}
class DefaultApiInternal extends DefaultApi {}
class PipelinesApiInternal extends PipelinesApi {}
class PipelineStagesApiInternal extends PipelineStagesApi {}
class BatchApiInternal extends BatchApi {}
class CoreApiInternal extends CoreApi {}


export class Client {
    public oauth = {
        getAuthorizationUrl: this._getAuthorizationUrl,
        getAccessToken: this._getAccessToken,
        refreshAccessToken: this._refreshAccessToken,
        getPortalInfo: this._getPortalInfo
    };
    public crm: {
        objects: {
            associationsApi: AssociationsApiInternal,
            basicApi: BasicApiInternal,
            batchApi: BatchObjectsApiInternal,
            createNativeObjectsApi: CreateNativeObjectsApiInternal,
            searchApi: SearchApiInternal,
        },
        owners: {
            defaultApi: DefaultApiInternal,
        },
        pipelines: {
            pipelinesApi: PipelinesApiInternal,
            pipelineStagesApi: PipelineStagesApiInternal,
        },
        properties: {
            batchApi: BatchApiInternal,
            coreApi: CoreApiInternal,
        },
    };
    protected _associationsApi: AssociationsApiInternal;
    protected _basicApi: BasicApiInternal;
    protected _batchObjectsApi: BatchObjectsApiInternal;
    protected _createNativeObjectsApi: CreateNativeObjectsApiInternal;
    protected _searchApi: SearchApiInternal;
    protected _defaultApi: DefaultApiInternal;
    protected _pipelinesApi: PipelinesApiInternal;
    protected _pipelineStagesApi: PipelineStagesApiInternal;
    protected _batchApi: BatchApiInternal;
    protected _coreApi: CoreApiInternal;
    protected _apiClients: any[];
    protected _apiKey: string | undefined;
    protected _basePath: string | undefined;
    protected _accessToken: string | undefined;
    protected _defaultHeaders: object | undefined;
    protected _clientId: string | undefined;
    protected _clientSecret: string | undefined;
    protected _redirectUri: string | undefined;
    protected _refreshToken: string | undefined;


    constructor(options: {
        apiKey?: string,
        accessToken?: string,
        clientId?: string,
        clientSecret?: string,
        redirectUri?: string,
        refreshToken?: string,
        basePath?: string,
        defaultHeaders?: object
    } = {}) {
        this._associationsApi = new AssociationsApiInternal();
        this._basicApi = new BasicApiInternal();
        this._batchObjectsApi = new BatchObjectsApiInternal();
        this._createNativeObjectsApi = new CreateNativeObjectsApiInternal();
        this._searchApi = new SearchApiInternal();
        this._defaultApi = new DefaultApiInternal();
        this._pipelinesApi = new PipelinesApiInternal();
        this._pipelineStagesApi = new PipelineStagesApiInternal();
        this._batchApi = new BatchApiInternal();
        this._coreApi = new CoreApiInternal();
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
            this._coreApi
        ];
        this._setOptions(options);
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
                pipelinesApi: this._pipelinesApi,
                pipelineStagesApi: this._pipelineStagesApi,
            },
            properties: {
                batchApi: this._batchApi,
                coreApi: this._coreApi,
            },

        };
    }

    public setApiKey(apiKeyToSet: string) {
        this._apiKey = apiKeyToSet;
        _.each(this._apiClients, (apiClient) => {
            apiClient.setApiKey(0, apiKeyToSet)
        })
    }

    public setBasePath(basePathToSet?: string) {
        if (_.isNil(basePathToSet)) {
            return;
        }

        this._basePath = basePathToSet;
        const objectsBasePath = `${basePathToSet}/crm/v3/objects`.replace(/\/+$/, '');
        const ownersBasePath = `${basePathToSet}/crm/v3/owners`.replace(/\/+$/, '');
        const pipelinesBasePath = `${basePathToSet}/crm/v3/pipelines`.replace(/\/+$/, '');
        const propertiesBasePath = `${basePathToSet}/crm/v3/properties`.replace(/\/+$/, '');
        this._associationsApi.basePath = objectsBasePath;
        this._basicApi.basePath = objectsBasePath;
        this._batchObjectsApi.basePath = objectsBasePath;
        this._createNativeObjectsApi.basePath = objectsBasePath;
        this._searchApi.basePath = objectsBasePath;
        this._defaultApi.basePath = ownersBasePath;
        this._pipelinesApi.basePath = pipelinesBasePath;
        this._pipelineStagesApi.basePath = pipelinesBasePath;
        this._batchApi.basePath = propertiesBasePath;
        this._coreApi.basePath = propertiesBasePath;
    }

    public setAccessToken(accessTokenToSet: string) {
        this._accessToken = accessTokenToSet;
        _.each(this._apiClients, (apiClient) => {
            apiClient._accessToken = accessTokenToSet;
        })
    }

    public setDefaultHeaders(defaultHeadersToSet?: object) {
        this._defaultHeaders = _.assign({}, defaultHeadersToSet, DEFAULT_HEADERS);
        _.each(this._apiClients, (apiClient) => {
            apiClient._defaultHeaders = this._defaultHeaders;
        })
    }

    public setAuth(options: { apiKey?: string, accessToken?: string } = {}) {
        if (options.apiKey) {
            this.setApiKey(options.apiKey)
        } else if (options.accessToken) {
            this.setAccessToken(options.accessToken)
        }
    }

    public setOAuth(options: { clientId?: string, clientSecret?: string, redirectUri?: string, refreshToken?: string } = {}) {
        this._clientId = options.clientId;
        this._clientSecret = options.clientSecret;
        this._redirectUri = options.redirectUri;
        this._refreshToken = options.refreshToken;
    }

    public getOptions(): {
        basePath: string | undefined,
        defaultHeaders: object | undefined,
        clientId: string | undefined,
        clientSecret: string | undefined,
        redirectUri: string | undefined,
        refreshToken: string | undefined,
        apiKey: string | undefined,
        accessToken: string | undefined
    } {
        return {
            basePath: this._basePath,
            defaultHeaders: this._defaultHeaders,
            clientId: this._clientId,
            clientSecret: this._clientSecret,
            redirectUri: this._redirectUri,
            refreshToken: this._refreshToken,
            apiKey: this._apiKey,
            accessToken: this._accessToken
        }
    }

    public apiRequest(opts: any) {
        const params = _.cloneDeep(opts);
        params.method = params.method || 'GET';
        params.json = true;
        params.resolveWithFullResponse = true;
        params.url = params.overlapUrl || this._basePath + (params.path || '');
        delete params.overlapUrl;
        delete params.path;
        params.qsStringifyOptions = {
            arrayFormat: 'repeat'
        };

        return request(params).then((res) => res.body)
    }

    protected _getAuthorizationUrl(newData: any): string {
        const initialParams: any = {};
        if (this._clientId) initialParams.client_id = this._clientId;
        if (this._redirectUri) initialParams.redirect_uri = this._redirectUri;

        const params = Object.assign({}, initialParams, newData);
        return `${this._basePath}/oauth/authorize?${qs.stringify(params)}`
    }

    protected _getAccessToken(newData: any) {
        const initialData = {
            grant_type: 'authorization_code',
            client_id: this._clientId,
            client_secret: this._clientSecret,
            redirect_uri: this._redirectUri,
        };
        const form = Object.assign({}, initialData, newData);

        return this.apiRequest({
            method: 'POST',
            path: '/oauth/v1/token',
            form
        })
    }

    protected _refreshAccessToken(newData: any) {
        const initialData = {
            grant_type: 'refresh_token',
            client_id: this._clientId,
            client_secret: this._clientSecret,
            redirect_uri: this._redirectUri,
            refresh_token: this._refreshToken,
        };
        const form = Object.assign({}, initialData, newData);

        return this.apiRequest({
            method: 'POST',
            path: '/oauth/v1/token',
            form,
        }).then((results) => {
            this.setAccessToken(results.access_token); // refresh the new access_token on the client
            return results
        })
    }

    protected _getPortalInfo() {
        return this.apiRequest({
            method: 'GET',
            path: `/oauth/v1/access-tokens/${this._accessToken}`,
        })
    }

    private _setOptions(options: {
        apiKey?: string,
        accessToken?: string,
        clientId?: string,
        clientSecret?: string,
        redirectUri?: string,
        refreshToken?: string,
        basePath?: string,
        defaultHeaders?: object
    }) {
        this.setAuth(options);
        this.setOAuth(options);
        this.setBasePath(options.basePath);
        this.setDefaultHeaders(options.defaultHeaders);
    }
}
