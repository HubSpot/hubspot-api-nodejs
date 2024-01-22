import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
import { TokenResponseIF } from '../models/TokenResponseIF';

import { ObservableAccessTokensApi } from "./ObservableAPI";
import { AccessTokensApiRequestFactory, AccessTokensApiResponseProcessor} from "../apis/AccessTokensApi";

export interface AccessTokensApiGetRequest {
    /**
     * 
     * @type string
     * @memberof AccessTokensApiget
     */
    token: string
}

export class ObjectAccessTokensApi {
    private api: ObservableAccessTokensApi

    public constructor(configuration: Configuration, requestFactory?: AccessTokensApiRequestFactory, responseProcessor?: AccessTokensApiResponseProcessor) {
        this.api = new ObservableAccessTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getWithHttpInfo(param: AccessTokensApiGetRequest, options?: Configuration): Promise<HttpInfo<AccessTokenInfoResponse>> {
        return this.api.getWithHttpInfo(param.token,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public get(param: AccessTokensApiGetRequest, options?: Configuration): Promise<AccessTokenInfoResponse> {
        return this.api.get(param.token,  options).toPromise();
    }

}

import { ObservableRefreshTokensApi } from "./ObservableAPI";
import { RefreshTokensApiRequestFactory, RefreshTokensApiResponseProcessor} from "../apis/RefreshTokensApi";

export interface RefreshTokensApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof RefreshTokensApiarchive
     */
    token: string
}

export interface RefreshTokensApiGetRequest {
    /**
     * 
     * @type string
     * @memberof RefreshTokensApiget
     */
    token: string
}

export class ObjectRefreshTokensApi {
    private api: ObservableRefreshTokensApi

    public constructor(configuration: Configuration, requestFactory?: RefreshTokensApiRequestFactory, responseProcessor?: RefreshTokensApiResponseProcessor) {
        this.api = new ObservableRefreshTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public archiveWithHttpInfo(param: RefreshTokensApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.token,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archive(param: RefreshTokensApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.token,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getWithHttpInfo(param: RefreshTokensApiGetRequest, options?: Configuration): Promise<HttpInfo<RefreshTokenInfoResponse>> {
        return this.api.getWithHttpInfo(param.token,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public get(param: RefreshTokensApiGetRequest, options?: Configuration): Promise<RefreshTokenInfoResponse> {
        return this.api.get(param.token,  options).toPromise();
    }

}

import { ObservableTokensApi } from "./ObservableAPI";
import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi";

export interface TokensApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof TokensApicreate
     */
    grantType?: string
    /**
     * 
     * @type string
     * @memberof TokensApicreate
     */
    code?: string
    /**
     * 
     * @type string
     * @memberof TokensApicreate
     */
    redirectUri?: string
    /**
     * 
     * @type string
     * @memberof TokensApicreate
     */
    clientId?: string
    /**
     * 
     * @type string
     * @memberof TokensApicreate
     */
    clientSecret?: string
    /**
     * 
     * @type string
     * @memberof TokensApicreate
     */
    refreshToken?: string
}

export class ObjectTokensApi {
    private api: ObservableTokensApi

    public constructor(configuration: Configuration, requestFactory?: TokensApiRequestFactory, responseProcessor?: TokensApiResponseProcessor) {
        this.api = new ObservableTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createWithHttpInfo(param: TokensApiCreateRequest = {}, options?: Configuration): Promise<HttpInfo<TokenResponseIF>> {
        return this.api.createWithHttpInfo(param.grantType, param.code, param.redirectUri, param.clientId, param.clientSecret, param.refreshToken,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public create(param: TokensApiCreateRequest = {}, options?: Configuration): Promise<TokenResponseIF> {
        return this.api.create(param.grantType, param.code, param.redirectUri, param.clientId, param.clientSecret, param.refreshToken,  options).toPromise();
    }

}
