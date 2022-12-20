import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
import { TokenResponseIF } from '../models/TokenResponseIF';
import { ObservableAccessTokensApi } from './ObservableAPI';

import { AccessTokensApiRequestFactory, AccessTokensApiResponseProcessor} from "../apis/AccessTokensApi";
export class PromiseAccessTokensApi {
    private api: ObservableAccessTokensApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccessTokensApiRequestFactory,
        responseProcessor?: AccessTokensApiResponseProcessor
    ) {
        this.api = new ObservableAccessTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param token 
     */
    public getAccessToken(token: string, _options?: Configuration): Promise<AccessTokenInfoResponse> {
        const result = this.api.getAccessToken(token, _options);
        return result.toPromise();
    }


}



import { ObservableRefreshTokensApi } from './ObservableAPI';

import { RefreshTokensApiRequestFactory, RefreshTokensApiResponseProcessor} from "../apis/RefreshTokensApi";
export class PromiseRefreshTokensApi {
    private api: ObservableRefreshTokensApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RefreshTokensApiRequestFactory,
        responseProcessor?: RefreshTokensApiResponseProcessor
    ) {
        this.api = new ObservableRefreshTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param token 
     */
    public archiveRefreshToken(token: string, _options?: Configuration): Promise<void> {
        const result = this.api.archiveRefreshToken(token, _options);
        return result.toPromise();
    }

    /**
     * @param token 
     */
    public getRefreshToken(token: string, _options?: Configuration): Promise<RefreshTokenInfoResponse> {
        const result = this.api.getRefreshToken(token, _options);
        return result.toPromise();
    }


}



import { ObservableTokensApi } from './ObservableAPI';

import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi";
export class PromiseTokensApi {
    private api: ObservableTokensApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TokensApiRequestFactory,
        responseProcessor?: TokensApiResponseProcessor
    ) {
        this.api = new ObservableTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param grantType 
     * @param code 
     * @param redirectUri 
     * @param clientId 
     * @param clientSecret 
     * @param refreshToken 
     */
    public createToken(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Promise<TokenResponseIF> {
        const result = this.api.createToken(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options);
        return result.toPromise();
    }


}



