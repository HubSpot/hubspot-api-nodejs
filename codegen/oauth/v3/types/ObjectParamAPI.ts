import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { TokenInfoResponseBaseIF } from '../models/TokenInfoResponseBaseIF';
import { TokenResponseIF } from '../models/TokenResponseIF';

import { ObservableAdvancedApi } from "./ObservableAPI";
import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";

export interface AdvancedApiGetTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetToken
     */
    assertion?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetToken
     */
    clientAssertion?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetToken
     */
    clientAssertionType?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetToken
     */
    clientId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetToken
     */
    clientSecret?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetToken
     */
    code?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetToken
     */
    codeVerifier?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetToken
     */
    grantType?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetToken
     */
    redirectUri?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetToken
     */
    refreshToken?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetToken
     */
    scope?: string
}

export interface AdvancedApiIntrospectTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApiintrospectToken
     */
    clientId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApiintrospectToken
     */
    clientSecret?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApiintrospectToken
     */
    token?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApiintrospectToken
     */
    tokenTypeHint?: string
}

export interface AdvancedApiRevokeTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApirevokeToken
     */
    clientId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApirevokeToken
     */
    clientSecret?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApirevokeToken
     */
    token?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApirevokeToken
     */
    tokenTypeHint?: string
}

export class ObjectAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedApiRequestFactory, responseProcessor?: AdvancedApiResponseProcessor) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Authenticates a client and returns access and refresh tokens.
     * OAuth token endpoint
     * @param param the request object
     */
    public getTokenWithHttpInfo(param: AdvancedApiGetTokenRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TokenResponseIF>> {
        return this.api.getTokenWithHttpInfo(param.assertion, param.clientAssertion, param.clientAssertionType, param.clientId, param.clientSecret, param.code, param.codeVerifier, param.grantType, param.redirectUri, param.refreshToken, param.scope,  options).toPromise();
    }

    /**
     * Authenticates a client and returns access and refresh tokens.
     * OAuth token endpoint
     * @param param the request object
     */
    public getToken(param: AdvancedApiGetTokenRequest = {}, options?: ConfigurationOptions): Promise<TokenResponseIF> {
        return this.api.getToken(param.assertion, param.clientAssertion, param.clientAssertionType, param.clientId, param.clientSecret, param.code, param.codeVerifier, param.grantType, param.redirectUri, param.refreshToken, param.scope,  options).toPromise();
    }

    /**
     * Returns validity and metadata for access and refresh tokens.
     * Token introspection endpoint
     * @param param the request object
     */
    public introspectTokenWithHttpInfo(param: AdvancedApiIntrospectTokenRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TokenInfoResponseBaseIF>> {
        return this.api.introspectTokenWithHttpInfo(param.clientId, param.clientSecret, param.token, param.tokenTypeHint,  options).toPromise();
    }

    /**
     * Returns validity and metadata for access and refresh tokens.
     * Token introspection endpoint
     * @param param the request object
     */
    public introspectToken(param: AdvancedApiIntrospectTokenRequest = {}, options?: ConfigurationOptions): Promise<TokenInfoResponseBaseIF> {
        return this.api.introspectToken(param.clientId, param.clientSecret, param.token, param.tokenTypeHint,  options).toPromise();
    }

    /**
     * Deletes/Revokes provided Refresh Token
     * Token Revocation endpoint
     * @param param the request object
     */
    public revokeTokenWithHttpInfo(param: AdvancedApiRevokeTokenRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.revokeTokenWithHttpInfo(param.clientId, param.clientSecret, param.token, param.tokenTypeHint,  options).toPromise();
    }

    /**
     * Deletes/Revokes provided Refresh Token
     * Token Revocation endpoint
     * @param param the request object
     */
    public revokeToken(param: AdvancedApiRevokeTokenRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.revokeToken(param.clientId, param.clientSecret, param.token, param.tokenTypeHint,  options).toPromise();
    }

}
