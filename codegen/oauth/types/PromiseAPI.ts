import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
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
    public getWithHttpInfo(token: string, _options?: Configuration): Promise<HttpInfo<AccessTokenInfoResponse>> {
        const result = this.api.getWithHttpInfo(token, _options);
        return result.toPromise();
    }

    /**
     * @param token 
     */
    public get(token: string, _options?: Configuration): Promise<AccessTokenInfoResponse> {
        const result = this.api.get(token, _options);
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
    public archiveWithHttpInfo(token: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(token, _options);
        return result.toPromise();
    }

    /**
     * @param token 
     */
    public archive(token: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(token, _options);
        return result.toPromise();
    }

    /**
     * @param token 
     */
    public getWithHttpInfo(token: string, _options?: Configuration): Promise<HttpInfo<RefreshTokenInfoResponse>> {
        const result = this.api.getWithHttpInfo(token, _options);
        return result.toPromise();
    }

    /**
     * @param token 
     */
    public get(token: string, _options?: Configuration): Promise<RefreshTokenInfoResponse> {
        const result = this.api.get(token, _options);
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
    public createWithHttpInfo(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Promise<HttpInfo<TokenResponseIF>> {
        const result = this.api.createWithHttpInfo(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options);
        return result.toPromise();
    }

    /**
     * @param grantType 
     * @param code 
     * @param redirectUri 
     * @param clientId 
     * @param clientSecret 
     * @param refreshToken 
     */
    public create(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Promise<TokenResponseIF> {
        const result = this.api.create(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options);
        return result.toPromise();
    }


}



