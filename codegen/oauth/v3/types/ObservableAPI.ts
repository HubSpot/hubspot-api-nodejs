import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { TokenInfoResponseBaseIF } from '../models/TokenInfoResponseBaseIF';
import { TokenResponseIF } from '../models/TokenResponseIF';

import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";
export class ObservableAdvancedApi {
    private requestFactory: AdvancedApiRequestFactory;
    private responseProcessor: AdvancedApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AdvancedApiRequestFactory,
        responseProcessor?: AdvancedApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AdvancedApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AdvancedApiResponseProcessor();
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
    public getTokenWithHttpInfo(assertion?: string, clientAssertion?: string, clientAssertionType?: string, clientId?: string, clientSecret?: string, code?: string, codeVerifier?: string, grantType?: string, redirectUri?: string, refreshToken?: string, scope?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TokenResponseIF>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getToken(assertion, clientAssertion, clientAssertionType, clientId, clientSecret, code, codeVerifier, grantType, redirectUri, refreshToken, scope, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTokenWithHttpInfo(rsp)));
            }));
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
    public getToken(assertion?: string, clientAssertion?: string, clientAssertionType?: string, clientId?: string, clientSecret?: string, code?: string, codeVerifier?: string, grantType?: string, redirectUri?: string, refreshToken?: string, scope?: string, _options?: ConfigurationOptions): Observable<TokenResponseIF> {
        return this.getTokenWithHttpInfo(assertion, clientAssertion, clientAssertionType, clientId, clientSecret, code, codeVerifier, grantType, redirectUri, refreshToken, scope, _options).pipe(map((apiResponse: HttpInfo<TokenResponseIF>) => apiResponse.data));
    }

    /**
     * Returns validity and metadata for access and refresh tokens.
     * Token introspection endpoint
     * @param [clientId]
     * @param [clientSecret]
     * @param [token]
     * @param [tokenTypeHint]
     */
    public introspectTokenWithHttpInfo(clientId?: string, clientSecret?: string, token?: string, tokenTypeHint?: string, _options?: ConfigurationOptions): Observable<HttpInfo<TokenInfoResponseBaseIF>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.introspectToken(clientId, clientSecret, token, tokenTypeHint, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.introspectTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns validity and metadata for access and refresh tokens.
     * Token introspection endpoint
     * @param [clientId]
     * @param [clientSecret]
     * @param [token]
     * @param [tokenTypeHint]
     */
    public introspectToken(clientId?: string, clientSecret?: string, token?: string, tokenTypeHint?: string, _options?: ConfigurationOptions): Observable<TokenInfoResponseBaseIF> {
        return this.introspectTokenWithHttpInfo(clientId, clientSecret, token, tokenTypeHint, _options).pipe(map((apiResponse: HttpInfo<TokenInfoResponseBaseIF>) => apiResponse.data));
    }

    /**
     * Deletes/Revokes provided Refresh Token
     * Token Revocation endpoint
     * @param [clientId]
     * @param [clientSecret]
     * @param [token]
     * @param [tokenTypeHint]
     */
    public revokeTokenWithHttpInfo(clientId?: string, clientSecret?: string, token?: string, tokenTypeHint?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.revokeToken(clientId, clientSecret, token, tokenTypeHint, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revokeTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes/Revokes provided Refresh Token
     * Token Revocation endpoint
     * @param [clientId]
     * @param [clientSecret]
     * @param [token]
     * @param [tokenTypeHint]
     */
    public revokeToken(clientId?: string, clientSecret?: string, token?: string, tokenTypeHint?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.revokeTokenWithHttpInfo(clientId, clientSecret, token, tokenTypeHint, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
