import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { PublicSubscriptionStatus } from '../models/PublicSubscriptionStatus';
import { PublicSubscriptionStatusesResponse } from '../models/PublicSubscriptionStatusesResponse';
import { PublicUpdateSubscriptionStatusRequest } from '../models/PublicUpdateSubscriptionStatusRequest';
import { SubscriptionDefinitionsResponse } from '../models/SubscriptionDefinitionsResponse';

import { DefinitionApiRequestFactory, DefinitionApiResponseProcessor} from "../apis/DefinitionApi";
export class ObservableDefinitionApi {
    private requestFactory: DefinitionApiRequestFactory;
    private responseProcessor: DefinitionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefinitionApiRequestFactory,
        responseProcessor?: DefinitionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefinitionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefinitionApiResponseProcessor();
    }

    /**
     * Get a list of all subscription definitions for the portal
     * Get subscription definitions
     */
    public getPageWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SubscriptionDefinitionsResponse>> {
        const requestContextPromise = this.requestFactory.getPage(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all subscription definitions for the portal
     * Get subscription definitions
     */
    public getPage(_options?: Configuration): Observable<SubscriptionDefinitionsResponse> {
        return this.getPageWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SubscriptionDefinitionsResponse>) => apiResponse.data));
    }

}

import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi";
export class ObservableStatusApi {
    private requestFactory: StatusApiRequestFactory;
    private responseProcessor: StatusApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatusApiRequestFactory,
        responseProcessor?: StatusApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatusApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatusApiResponseProcessor();
    }

    /**
     * Returns a list of subscriptions and their status for a given contact.
     * Get subscription statuses for a contact
     * @param emailAddress 
     */
    public getEmailStatusWithHttpInfo(emailAddress: string, _options?: Configuration): Observable<HttpInfo<PublicSubscriptionStatusesResponse>> {
        const requestContextPromise = this.requestFactory.getEmailStatus(emailAddress, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of subscriptions and their status for a given contact.
     * Get subscription statuses for a contact
     * @param emailAddress 
     */
    public getEmailStatus(emailAddress: string, _options?: Configuration): Observable<PublicSubscriptionStatusesResponse> {
        return this.getEmailStatusWithHttpInfo(emailAddress, _options).pipe(map((apiResponse: HttpInfo<PublicSubscriptionStatusesResponse>) => apiResponse.data));
    }

    /**
     * Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
     * Subscribe a contact
     * @param publicUpdateSubscriptionStatusRequest 
     */
    public subscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Observable<HttpInfo<PublicSubscriptionStatus>> {
        const requestContextPromise = this.requestFactory.subscribe(publicUpdateSubscriptionStatusRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.subscribeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
     * Subscribe a contact
     * @param publicUpdateSubscriptionStatusRequest 
     */
    public subscribe(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Observable<PublicSubscriptionStatus> {
        return this.subscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest, _options).pipe(map((apiResponse: HttpInfo<PublicSubscriptionStatus>) => apiResponse.data));
    }

    /**
     * Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
     * Unsubscribe a contact
     * @param publicUpdateSubscriptionStatusRequest 
     */
    public unsubscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Observable<HttpInfo<PublicSubscriptionStatus>> {
        const requestContextPromise = this.requestFactory.unsubscribe(publicUpdateSubscriptionStatusRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unsubscribeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
     * Unsubscribe a contact
     * @param publicUpdateSubscriptionStatusRequest 
     */
    public unsubscribe(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Observable<PublicSubscriptionStatus> {
        return this.unsubscribeWithHttpInfo(publicUpdateSubscriptionStatusRequest, _options).pipe(map((apiResponse: HttpInfo<PublicSubscriptionStatus>) => apiResponse.data));
    }

}
