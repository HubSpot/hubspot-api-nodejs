import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
import { TokenResponseIF } from '../models/TokenResponseIF';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiArchiveRefreshTokenRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiarchiveRefreshToken
     */
    token: string
}

export interface DefaultApiCreateTokenRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApicreateToken
     */
    grantType?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateToken
     */
    code?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateToken
     */
    redirectUri?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateToken
     */
    clientId?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateToken
     */
    clientSecret?: string
    /**
     * 
     * @type string
     * @memberof DefaultApicreateToken
     */
    refreshToken?: string
}

export interface DefaultApiGetAccessTokenRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetAccessToken
     */
    token: string
}

export interface DefaultApiGetRefreshTokenRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetRefreshToken
     */
    token: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public archiveRefreshToken(param: DefaultApiArchiveRefreshTokenRequest, options?: Configuration): Promise<void> {
        return this.api.archiveRefreshToken(param.token,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createToken(param: DefaultApiCreateTokenRequest, options?: Configuration): Promise<TokenResponseIF> {
        return this.api.createToken(param.grantType, param.code, param.redirectUri, param.clientId, param.clientSecret, param.refreshToken,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAccessToken(param: DefaultApiGetAccessTokenRequest, options?: Configuration): Promise<AccessTokenInfoResponse> {
        return this.api.getAccessToken(param.token,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRefreshToken(param: DefaultApiGetRefreshTokenRequest, options?: Configuration): Promise<RefreshTokenInfoResponse> {
        return this.api.getRefreshToken(param.token,  options).toPromise();
    }

}
