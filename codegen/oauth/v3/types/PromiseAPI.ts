import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { TokenInfoResponseBaseIF } from '../models/TokenInfoResponseBaseIF';
import { TokenResponseIF } from '../models/TokenResponseIF';
import { ObservableAdvancedApi } from './ObservableAPI';

import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";
export class PromiseAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdvancedApiRequestFactory,
        responseProcessor?: AdvancedApiResponseProcessor
    ) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Authenticates a client and returns access and refresh tokens.
     * OAuth token endpoint
     * @param [assertion]
     * @param [clientAssertion]
     * @param [clientAssertionType]
     * @param [clientId]
     * @param [clientSecret]
     * @param [code]
     * @param [codeVerifier]
     * @param [grantType]
     * @param [redirectUri]
     * @param [refreshToken]
     * @param [scope]
     */
    public getTokenWithHttpInfo(assertion?: string, clientAssertion?: string, clientAssertionType?: string, clientId?: string, clientSecret?: string, code?: string, codeVerifier?: string, grantType?: string, redirectUri?: string, refreshToken?: string, scope?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TokenResponseIF>> {
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
        const result = this.api.getTokenWithHttpInfo(assertion, clientAssertion, clientAssertionType, clientId, clientSecret, code, codeVerifier, grantType, redirectUri, refreshToken, scope, observableOptions);
        return result.toPromise();
    }

    /**
     * Authenticates a client and returns access and refresh tokens.
     * OAuth token endpoint
     * @param [assertion]
     * @param [clientAssertion]
     * @param [clientAssertionType]
     * @param [clientId]
     * @param [clientSecret]
     * @param [code]
     * @param [codeVerifier]
     * @param [grantType]
     * @param [redirectUri]
     * @param [refreshToken]
     * @param [scope]
     */
    public getToken(assertion?: string, clientAssertion?: string, clientAssertionType?: string, clientId?: string, clientSecret?: string, code?: string, codeVerifier?: string, grantType?: string, redirectUri?: string, refreshToken?: string, scope?: string, _options?: PromiseConfigurationOptions): Promise<TokenResponseIF> {
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
        const result = this.api.getToken(assertion, clientAssertion, clientAssertionType, clientId, clientSecret, code, codeVerifier, grantType, redirectUri, refreshToken, scope, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns validity and metadata for access and refresh tokens.
     * Token introspection endpoint
     * @param [clientId]
     * @param [clientSecret]
     * @param [token]
     * @param [tokenTypeHint]
     */
    public introspectTokenWithHttpInfo(clientId?: string, clientSecret?: string, token?: string, tokenTypeHint?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TokenInfoResponseBaseIF>> {
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
        const result = this.api.introspectTokenWithHttpInfo(clientId, clientSecret, token, tokenTypeHint, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns validity and metadata for access and refresh tokens.
     * Token introspection endpoint
     * @param [clientId]
     * @param [clientSecret]
     * @param [token]
     * @param [tokenTypeHint]
     */
    public introspectToken(clientId?: string, clientSecret?: string, token?: string, tokenTypeHint?: string, _options?: PromiseConfigurationOptions): Promise<TokenInfoResponseBaseIF> {
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
        const result = this.api.introspectToken(clientId, clientSecret, token, tokenTypeHint, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes/Revokes provided Refresh Token
     * Token Revocation endpoint
     * @param [clientId]
     * @param [clientSecret]
     * @param [token]
     * @param [tokenTypeHint]
     */
    public revokeTokenWithHttpInfo(clientId?: string, clientSecret?: string, token?: string, tokenTypeHint?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.revokeTokenWithHttpInfo(clientId, clientSecret, token, tokenTypeHint, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes/Revokes provided Refresh Token
     * Token Revocation endpoint
     * @param [clientId]
     * @param [clientSecret]
     * @param [token]
     * @param [tokenTypeHint]
     */
    public revokeToken(clientId?: string, clientSecret?: string, token?: string, tokenTypeHint?: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.revokeToken(clientId, clientSecret, token, tokenTypeHint, observableOptions);
        return result.toPromise();
    }


}



