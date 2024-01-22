import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { IdentificationTokenGenerationRequest } from '../models/IdentificationTokenGenerationRequest';
import { IdentificationTokenResponse } from '../models/IdentificationTokenResponse';

import { GenerateApiRequestFactory, GenerateApiResponseProcessor} from "../apis/GenerateApi";
export class ObservableGenerateApi {
    private requestFactory: GenerateApiRequestFactory;
    private responseProcessor: GenerateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GenerateApiRequestFactory,
        responseProcessor?: GenerateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GenerateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GenerateApiResponseProcessor();
    }

    /**
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
     * Generate a token
     * @param identificationTokenGenerationRequest 
     */
    public generateTokenWithHttpInfo(identificationTokenGenerationRequest: IdentificationTokenGenerationRequest, _options?: Configuration): Observable<HttpInfo<IdentificationTokenResponse>> {
        const requestContextPromise = this.requestFactory.generateToken(identificationTokenGenerationRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
     * Generate a token
     * @param identificationTokenGenerationRequest 
     */
    public generateToken(identificationTokenGenerationRequest: IdentificationTokenGenerationRequest, _options?: Configuration): Observable<IdentificationTokenResponse> {
        return this.generateTokenWithHttpInfo(identificationTokenGenerationRequest, _options).pipe(map((apiResponse: HttpInfo<IdentificationTokenResponse>) => apiResponse.data));
    }

}
