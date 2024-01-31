import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BehavioralEventHttpCompletionRequest } from '../models/BehavioralEventHttpCompletionRequest';

import { BehavioralEventsTrackingApiRequestFactory, BehavioralEventsTrackingApiResponseProcessor} from "../apis/BehavioralEventsTrackingApi";
export class ObservableBehavioralEventsTrackingApi {
    private requestFactory: BehavioralEventsTrackingApiRequestFactory;
    private responseProcessor: BehavioralEventsTrackingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BehavioralEventsTrackingApiRequestFactory,
        responseProcessor?: BehavioralEventsTrackingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BehavioralEventsTrackingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BehavioralEventsTrackingApiResponseProcessor();
    }

    /**
     * Endpoint to send an instance of a behavioral event
     * Sends Custom Behavioral Event
     * @param behavioralEventHttpCompletionRequest 
     */
    public sendWithHttpInfo(behavioralEventHttpCompletionRequest: BehavioralEventHttpCompletionRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.send(behavioralEventHttpCompletionRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendWithHttpInfo(rsp)));
            }));
    }

    /**
     * Endpoint to send an instance of a behavioral event
     * Sends Custom Behavioral Event
     * @param behavioralEventHttpCompletionRequest 
     */
    public send(behavioralEventHttpCompletionRequest: BehavioralEventHttpCompletionRequest, _options?: Configuration): Observable<void> {
        return this.sendWithHttpInfo(behavioralEventHttpCompletionRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
