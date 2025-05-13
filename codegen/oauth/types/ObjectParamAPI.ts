import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
import { TokenResponseIF } from '../models/TokenResponseIF';

import { ObservableAccessTokensApi } from "./ObservableAPI";
import { AccessTokensApiRequestFactory, AccessTokensApiResponseProcessor} from "../apis/AccessTokensApi";

export interface AccessTokensApiGetRequest {
    /**
     * The access token that you want to retrieve information about.
     * Defaults to: undefined
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
     * Retrieve a token\'s metadata, including the email address of the user that the token was created for and the ID of the account it\'s associated with.  Note: HubSpot access tokens will fluctuate in size as the information that\'s encoded in them changes over time. It\'s recommended to allow for tokens to be up to 300 characters to account for any potential changes.
     * Retrieve OAuth token metadata
     * @param param the request object
     */
    public getWithHttpInfo(param: AccessTokensApiGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<AccessTokenInfoResponse>> {
        return this.api.getWithHttpInfo(param.token,  options).toPromise();
    }

    /**
     * Retrieve a token\'s metadata, including the email address of the user that the token was created for and the ID of the account it\'s associated with.  Note: HubSpot access tokens will fluctuate in size as the information that\'s encoded in them changes over time. It\'s recommended to allow for tokens to be up to 300 characters to account for any potential changes.
     * Retrieve OAuth token metadata
     * @param param the request object
     */
    public get(param: AccessTokensApiGetRequest, options?: ConfigurationOptions): Promise<AccessTokenInfoResponse> {
        return this.api.get(param.token,  options).toPromise();
    }

}

import { ObservableRefreshTokensApi } from "./ObservableAPI";
import { RefreshTokensApiRequestFactory, RefreshTokensApiResponseProcessor} from "../apis/RefreshTokensApi";

export interface RefreshTokensApiArchiveRequest {
    /**
     * The refresh token to delete.
     * Defaults to: undefined
     * @type string
     * @memberof RefreshTokensApiarchive
     */
    token: string
}

export interface RefreshTokensApiGetRequest {
    /**
     * The refresh token to retrieve information about.
     * Defaults to: undefined
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
     * Delete a refresh token, typically after a user uninstalls your app. Access tokens generated with the refresh token will not be affected.  This will not uninstall the application from HubSpot or inhibit data syncing between an account and the app.
     * Delete a refresh token
     * @param param the request object
     */
    public archiveWithHttpInfo(param: RefreshTokensApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.token,  options).toPromise();
    }

    /**
     * Delete a refresh token, typically after a user uninstalls your app. Access tokens generated with the refresh token will not be affected.  This will not uninstall the application from HubSpot or inhibit data syncing between an account and the app.
     * Delete a refresh token
     * @param param the request object
     */
    public archive(param: RefreshTokensApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.token,  options).toPromise();
    }

    /**
     * Retrieve a refresh token\'s metadata, including the email address of the user that the token was created for and the ID of the account it\'s associated with. Learn more about [refresh tokens](https://developers.hubspot.com/docs/guides/api/app-management/oauth-tokens#generate-initial-access-and-refresh-tokens).
     * Retrieve refresh token metadata
     * @param param the request object
     */
    public getWithHttpInfo(param: RefreshTokensApiGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<RefreshTokenInfoResponse>> {
        return this.api.getWithHttpInfo(param.token,  options).toPromise();
    }

    /**
     * Retrieve a refresh token\'s metadata, including the email address of the user that the token was created for and the ID of the account it\'s associated with. Learn more about [refresh tokens](https://developers.hubspot.com/docs/guides/api/app-management/oauth-tokens#generate-initial-access-and-refresh-tokens).
     * Retrieve refresh token metadata
     * @param param the request object
     */
    public get(param: RefreshTokensApiGetRequest, options?: ConfigurationOptions): Promise<RefreshTokenInfoResponse> {
        return this.api.get(param.token,  options).toPromise();
    }

}

import { ObservableTokensApi } from "./ObservableAPI";
import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi";

export interface TokensApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TokensApicreate
     */
    grantType?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TokensApicreate
     */
    code?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TokensApicreate
     */
    redirectUri?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TokensApicreate
     */
    clientId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TokensApicreate
     */
    clientSecret?: string
    /**
     * 
     * Defaults to: undefined
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
     * Use a [previously obtained refresh token](#get-oauth-2.0-access-and-refresh-tokens) to generate a new access token.   Access tokens are short lived. You can check the `expires_in` parameter when generating an access token to determine its lifetime (in seconds). If you need offline access to HubSpot data, store the refresh token you get when [initiating your OAuth integration](https://developers.hubspot.com/docs/guides/api/app-management/oauth-tokens#initiating-oauth-access) and use it to generate a new access token once the initial one expires.  Note: HubSpot access tokens will fluctuate in size as the information that\'s encoded in them changes over time. It\'s recommended to allow for tokens to be up to 300 characters to account for any potential changes.
     * Refresh an access token
     * @param param the request object
     */
    public createWithHttpInfo(param: TokensApiCreateRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TokenResponseIF>> {
        return this.api.createWithHttpInfo(param.grantType, param.code, param.redirectUri, param.clientId, param.clientSecret, param.refreshToken,  options).toPromise();
    }

    /**
     * Use a [previously obtained refresh token](#get-oauth-2.0-access-and-refresh-tokens) to generate a new access token.   Access tokens are short lived. You can check the `expires_in` parameter when generating an access token to determine its lifetime (in seconds). If you need offline access to HubSpot data, store the refresh token you get when [initiating your OAuth integration](https://developers.hubspot.com/docs/guides/api/app-management/oauth-tokens#initiating-oauth-access) and use it to generate a new access token once the initial one expires.  Note: HubSpot access tokens will fluctuate in size as the information that\'s encoded in them changes over time. It\'s recommended to allow for tokens to be up to 300 characters to account for any potential changes.
     * Refresh an access token
     * @param param the request object
     */
    public create(param: TokensApiCreateRequest = {}, options?: ConfigurationOptions): Promise<TokenResponseIF> {
        return this.api.create(param.grantType, param.code, param.redirectUri, param.clientId, param.clientSecret, param.refreshToken,  options).toPromise();
    }

}
