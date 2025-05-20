import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
     * Retrieve a token\'s metadata, including the email address of the user that the token was created for and the ID of the account it\'s associated with.  Note: HubSpot access tokens will fluctuate in size as the information that\'s encoded in them changes over time. It\'s recommended to allow for tokens to be up to 300 characters to account for any potential changes.
     * Retrieve OAuth token metadata
     * @param token The access token that you want to retrieve information about.
     */
    public getWithHttpInfo(token: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AccessTokenInfoResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getWithHttpInfo(token, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a token\'s metadata, including the email address of the user that the token was created for and the ID of the account it\'s associated with.  Note: HubSpot access tokens will fluctuate in size as the information that\'s encoded in them changes over time. It\'s recommended to allow for tokens to be up to 300 characters to account for any potential changes.
     * Retrieve OAuth token metadata
     * @param token The access token that you want to retrieve information about.
     */
    public get(token: string, _options?: PromiseConfigurationOptions): Promise<AccessTokenInfoResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.get(token, observableOptions);
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
     * Delete a refresh token, typically after a user uninstalls your app. Access tokens generated with the refresh token will not be affected.  This will not uninstall the application from HubSpot or inhibit data syncing between an account and the app.
     * Delete a refresh token
     * @param token The refresh token to delete.
     */
    public archiveWithHttpInfo(token: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(token, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a refresh token, typically after a user uninstalls your app. Access tokens generated with the refresh token will not be affected.  This will not uninstall the application from HubSpot or inhibit data syncing between an account and the app.
     * Delete a refresh token
     * @param token The refresh token to delete.
     */
    public archive(token: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(token, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a refresh token\'s metadata, including the email address of the user that the token was created for and the ID of the account it\'s associated with. Learn more about [refresh tokens](https://developers.hubspot.com/docs/guides/api/app-management/oauth-tokens#generate-initial-access-and-refresh-tokens).
     * Retrieve refresh token metadata
     * @param token The refresh token to retrieve information about.
     */
    public getWithHttpInfo(token: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RefreshTokenInfoResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getWithHttpInfo(token, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a refresh token\'s metadata, including the email address of the user that the token was created for and the ID of the account it\'s associated with. Learn more about [refresh tokens](https://developers.hubspot.com/docs/guides/api/app-management/oauth-tokens#generate-initial-access-and-refresh-tokens).
     * Retrieve refresh token metadata
     * @param token The refresh token to retrieve information about.
     */
    public get(token: string, _options?: PromiseConfigurationOptions): Promise<RefreshTokenInfoResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.get(token, observableOptions);
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
     * Use a [previously obtained refresh token](#get-oauth-2.0-access-and-refresh-tokens) to generate a new access token.   Access tokens are short lived. You can check the `expires_in` parameter when generating an access token to determine its lifetime (in seconds). If you need offline access to HubSpot data, store the refresh token you get when [initiating your OAuth integration](https://developers.hubspot.com/docs/guides/api/app-management/oauth-tokens#initiating-oauth-access) and use it to generate a new access token once the initial one expires.  Note: HubSpot access tokens will fluctuate in size as the information that\'s encoded in them changes over time. It\'s recommended to allow for tokens to be up to 300 characters to account for any potential changes.
     * Refresh an access token
     * @param [grantType]
     * @param [code]
     * @param [redirectUri]
     * @param [clientId]
     * @param [clientSecret]
     * @param [refreshToken]
     */
    public createWithHttpInfo(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TokenResponseIF>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createWithHttpInfo(grantType, code, redirectUri, clientId, clientSecret, refreshToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Use a [previously obtained refresh token](#get-oauth-2.0-access-and-refresh-tokens) to generate a new access token.   Access tokens are short lived. You can check the `expires_in` parameter when generating an access token to determine its lifetime (in seconds). If you need offline access to HubSpot data, store the refresh token you get when [initiating your OAuth integration](https://developers.hubspot.com/docs/guides/api/app-management/oauth-tokens#initiating-oauth-access) and use it to generate a new access token once the initial one expires.  Note: HubSpot access tokens will fluctuate in size as the information that\'s encoded in them changes over time. It\'s recommended to allow for tokens to be up to 300 characters to account for any potential changes.
     * Refresh an access token
     * @param [grantType]
     * @param [code]
     * @param [redirectUri]
     * @param [clientId]
     * @param [clientSecret]
     * @param [refreshToken]
     */
    public create(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: PromiseConfigurationOptions): Promise<TokenResponseIF> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create(grantType, code, redirectUri, clientId, clientSecret, refreshToken, observableOptions);
        return result.toPromise();
    }


}



