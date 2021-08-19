import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
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
    public getAccessToken(token: string, _options?: Configuration): Observable<AccessTokenInfoResponse> {
        const requestContextPromise = this.requestFactory.getAccessToken(token, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccessToken(rsp)));
            }));
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
    public archiveRefreshToken(token: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archiveRefreshToken(token, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveRefreshToken(rsp)));
            }));
    }
 
    /**
     * @param token 
     */
    public getRefreshToken(token: string, _options?: Configuration): Observable<RefreshTokenInfoResponse> {
        const requestContextPromise = this.requestFactory.getRefreshToken(token, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRefreshToken(rsp)));
            }));
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
    public createToken(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Observable<TokenResponseIF> {
        const requestContextPromise = this.requestFactory.createToken(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createToken(rsp)));
            }));
    }
 
}
