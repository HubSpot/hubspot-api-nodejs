import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
import { TokenResponseIF } from '../models/TokenResponseIF';

import { ObservableAccessTokensApi } from "./ObservableAPI";
import { AccessTokensApiRequestFactory, AccessTokensApiResponseProcessor} from "../apis/AccessTokensApi";

export interface AccessTokensApiGetAccessTokenRequest {
    /**
     * 
     * @type string
     * @memberof AccessTokensApigetAccessToken
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
    public getAccessToken(param: AccessTokensApiGetAccessTokenRequest, options?: Configuration): Promise<AccessTokenInfoResponse> {
        return this.api.getAccessToken(param.token,  options).toPromise();
    }

}

import { ObservableRefreshTokensApi } from "./ObservableAPI";
import { RefreshTokensApiRequestFactory, RefreshTokensApiResponseProcessor} from "../apis/RefreshTokensApi";

export interface RefreshTokensApiArchiveRefreshTokenRequest {
    /**
     * 
     * @type string
     * @memberof RefreshTokensApiarchiveRefreshToken
     */
    token: string
}

export interface RefreshTokensApiGetRefreshTokenRequest {
    /**
     * 
     * @type string
     * @memberof RefreshTokensApigetRefreshToken
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
    public archiveRefreshToken(param: RefreshTokensApiArchiveRefreshTokenRequest, options?: Configuration): Promise<void> {
        return this.api.archiveRefreshToken(param.token,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRefreshToken(param: RefreshTokensApiGetRefreshTokenRequest, options?: Configuration): Promise<RefreshTokenInfoResponse> {
        return this.api.getRefreshToken(param.token,  options).toPromise();
    }

}

import { ObservableTokensApi } from "./ObservableAPI";
import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi";

export interface TokensApiCreateTokenRequest {
    /**
     * 
     * @type string
     * @memberof TokensApicreateToken
     */
    grantType?: string
    /**
     * 
     * @type string
     * @memberof TokensApicreateToken
     */
    code?: string
    /**
     * 
     * @type string
     * @memberof TokensApicreateToken
     */
    redirectUri?: string
    /**
     * 
     * @type string
     * @memberof TokensApicreateToken
     */
    clientId?: string
    /**
     * 
     * @type string
     * @memberof TokensApicreateToken
     */
    clientSecret?: string
    /**
     * 
     * @type string
     * @memberof TokensApicreateToken
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
    public createToken(param: TokensApiCreateTokenRequest = {}, options?: Configuration): Promise<TokenResponseIF> {
        return this.api.createToken(param.grantType, param.code, param.redirectUri, param.clientId, param.clientSecret, param.refreshToken,  options).toPromise();
    }

}
