import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
import { TokenResponseIF } from '../models/TokenResponseIF';

import { AccessTokensApiRequestFactory, AccessTokensApiResponseProcessor} from "../apis/AccessTokensApi";
export class ObservableAccessTokensApi {
    private requestFactory: AccessTokensApiRequestFactory;
    private responseProcessor: AccessTokensApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccessTokensApiRequestFactory,
        responseProcessor?: AccessTokensApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccessTokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccessTokensApiResponseProcessor();
    }

    /**
     * @param token 
     */
    public getWithHttpInfo(token: string, _options?: Configuration): Observable<HttpInfo<AccessTokenInfoResponse>> {
        const requestContextPromise = this.requestFactory.get(token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param token 
     */
    public get(token: string, _options?: Configuration): Observable<AccessTokenInfoResponse> {
        return this.getWithHttpInfo(token, _options).pipe(map((apiResponse: HttpInfo<AccessTokenInfoResponse>) => apiResponse.data));
    }

}

import { RefreshTokensApiRequestFactory, RefreshTokensApiResponseProcessor} from "../apis/RefreshTokensApi";
export class ObservableRefreshTokensApi {
    private requestFactory: RefreshTokensApiRequestFactory;
    private responseProcessor: RefreshTokensApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RefreshTokensApiRequestFactory,
        responseProcessor?: RefreshTokensApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RefreshTokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RefreshTokensApiResponseProcessor();
    }

    /**
     * @param token 
     */
    public archiveWithHttpInfo(token: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param token 
     */
    public archive(token: string, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(token, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param token 
     */
    public getWithHttpInfo(token: string, _options?: Configuration): Observable<HttpInfo<RefreshTokenInfoResponse>> {
        const requestContextPromise = this.requestFactory.get(token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param token 
     */
    public get(token: string, _options?: Configuration): Observable<RefreshTokenInfoResponse> {
        return this.getWithHttpInfo(token, _options).pipe(map((apiResponse: HttpInfo<RefreshTokenInfoResponse>) => apiResponse.data));
    }

}

import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi";
export class ObservableTokensApi {
    private requestFactory: TokensApiRequestFactory;
    private responseProcessor: TokensApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TokensApiRequestFactory,
        responseProcessor?: TokensApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TokensApiResponseProcessor();
    }

    /**
     * @param grantType 
     * @param code 
     * @param redirectUri 
     * @param clientId 
     * @param clientSecret 
     * @param refreshToken 
     */
    public createWithHttpInfo(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Observable<HttpInfo<TokenResponseIF>> {
        const requestContextPromise = this.requestFactory.create(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param grantType 
     * @param code 
     * @param redirectUri 
     * @param clientId 
     * @param clientSecret 
     * @param refreshToken 
     */
    public create(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Observable<TokenResponseIF> {
        return this.createWithHttpInfo(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options).pipe(map((apiResponse: HttpInfo<TokenResponseIF>) => apiResponse.data));
    }

}
