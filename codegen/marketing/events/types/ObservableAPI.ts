import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BatchInputMarketingEventCreateRequestParams } from '../models/BatchInputMarketingEventCreateRequestParams';
import { BatchInputMarketingEventEmailSubscriber } from '../models/BatchInputMarketingEventEmailSubscriber';
import { BatchInputMarketingEventExternalUniqueIdentifier } from '../models/BatchInputMarketingEventExternalUniqueIdentifier';
import { BatchInputMarketingEventSubscriber } from '../models/BatchInputMarketingEventSubscriber';
import { BatchResponseMarketingEventPublicDefaultResponse } from '../models/BatchResponseMarketingEventPublicDefaultResponse';
import { BatchResponseSubscriberEmailResponse } from '../models/BatchResponseSubscriberEmailResponse';
import { BatchResponseSubscriberVidResponse } from '../models/BatchResponseSubscriberVidResponse';
import { CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging } from '../models/CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging';
import { EventDetailSettings } from '../models/EventDetailSettings';
import { EventDetailSettingsUrl } from '../models/EventDetailSettingsUrl';
import { MarketingEventCompleteRequestParams } from '../models/MarketingEventCompleteRequestParams';
import { MarketingEventCreateRequestParams } from '../models/MarketingEventCreateRequestParams';
import { MarketingEventDefaultResponse } from '../models/MarketingEventDefaultResponse';
import { MarketingEventPublicDefaultResponse } from '../models/MarketingEventPublicDefaultResponse';
import { MarketingEventPublicReadResponse } from '../models/MarketingEventPublicReadResponse';
import { MarketingEventUpdateRequestParams } from '../models/MarketingEventUpdateRequestParams';

import { AttendanceSubscriberStateChangesApiRequestFactory, AttendanceSubscriberStateChangesApiResponseProcessor} from "../apis/AttendanceSubscriberStateChangesApi";
export class ObservableAttendanceSubscriberStateChangesApi {
    private requestFactory: AttendanceSubscriberStateChangesApiRequestFactory;
    private responseProcessor: AttendanceSubscriberStateChangesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AttendanceSubscriberStateChangesApiRequestFactory,
        responseProcessor?: AttendanceSubscriberStateChangesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AttendanceSubscriberStateChangesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AttendanceSubscriberStateChangesApiResponseProcessor();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public createWithHttpInfo(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: Configuration): Observable<HttpInfo<BatchResponseSubscriberVidResponse>> {
        const requestContextPromise = this.requestFactory.create(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options);

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
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public create(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: Configuration): Observable<BatchResponseSubscriberVidResponse> {
        return this.createWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<BatchResponseSubscriberVidResponse>) => apiResponse.data));
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public createByEmailWithHttpInfo(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: Configuration): Observable<HttpInfo<BatchResponseSubscriberEmailResponse>> {
        const requestContextPromise = this.requestFactory.createByEmail(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createByEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public createByEmail(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: Configuration): Observable<BatchResponseSubscriberEmailResponse> {
        return this.createByEmailWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<BatchResponseSubscriberEmailResponse>) => apiResponse.data));
    }

}

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class ObservableBasicApi {
    private requestFactory: BasicApiRequestFactory;
    private responseProcessor: BasicApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicApiResponseProcessor();
    }

    /**
     * Deletes an existing Marketing Event with the specified id, if one exists.
     * Delete a marketing event
     * @param externalEventId The id of the marketing event to delete
     * @param externalAccountId The account id associated with the marketing event
     */
    public archiveWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(externalEventId, externalAccountId, _options);

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
     * Deletes an existing Marketing Event with the specified id, if one exists.
     * Delete a marketing event
     * @param externalEventId The id of the marketing event to delete
     * @param externalAccountId The account id associated with the marketing event
     */
    public archive(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(externalEventId, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param marketingEventCreateRequestParams The details of the marketing event to create
     */
    public createWithHttpInfo(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Observable<HttpInfo<MarketingEventDefaultResponse>> {
        const requestContextPromise = this.requestFactory.create(marketingEventCreateRequestParams, _options);

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
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param marketingEventCreateRequestParams The details of the marketing event to create
     */
    public create(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Observable<MarketingEventDefaultResponse> {
        return this.createWithHttpInfo(marketingEventCreateRequestParams, _options).pipe(map((apiResponse: HttpInfo<MarketingEventDefaultResponse>) => apiResponse.data));
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event to mark as cancelled
     * @param externalAccountId The account id associated with the marketing event
     */
    public doCancelWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<HttpInfo<MarketingEventDefaultResponse>> {
        const requestContextPromise = this.requestFactory.doCancel(externalEventId, externalAccountId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doCancelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event to mark as cancelled
     * @param externalAccountId The account id associated with the marketing event
     */
    public doCancel(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<MarketingEventDefaultResponse> {
        return this.doCancelWithHttpInfo(externalEventId, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<MarketingEventDefaultResponse>) => apiResponse.data));
    }

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param externalEventId The id of the marketing event to return
     * @param externalAccountId The account id associated with the marketing event
     */
    public getByIdWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<HttpInfo<MarketingEventPublicReadResponse>> {
        const requestContextPromise = this.requestFactory.getById(externalEventId, externalAccountId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param externalEventId The id of the marketing event to return
     * @param externalAccountId The account id associated with the marketing event
     */
    public getById(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<MarketingEventPublicReadResponse> {
        return this.getByIdWithHttpInfo(externalEventId, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<MarketingEventPublicReadResponse>) => apiResponse.data));
    }

    /**
     * Upsets a Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The id of the marketing event to upsert
     * @param marketingEventCreateRequestParams The details of the marketing event to upsert
     */
    public replaceWithHttpInfo(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Observable<HttpInfo<MarketingEventPublicDefaultResponse>> {
        const requestContextPromise = this.requestFactory.replace(externalEventId, marketingEventCreateRequestParams, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upsets a Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The id of the marketing event to upsert
     * @param marketingEventCreateRequestParams The details of the marketing event to upsert
     */
    public replace(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Observable<MarketingEventPublicDefaultResponse> {
        return this.replaceWithHttpInfo(externalEventId, marketingEventCreateRequestParams, _options).pipe(map((apiResponse: HttpInfo<MarketingEventPublicDefaultResponse>) => apiResponse.data));
    }

    /**
     * Updates an existing Marketing Event with the specified id, if one exists.
     * Update a marketing event
     * @param externalEventId The id of the marketing event to update
     * @param externalAccountId The account id associated with the marketing event
     * @param marketingEventUpdateRequestParams The details of the marketing event to update
     */
    public updateWithHttpInfo(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: Configuration): Observable<HttpInfo<MarketingEventPublicDefaultResponse>> {
        const requestContextPromise = this.requestFactory.update(externalEventId, externalAccountId, marketingEventUpdateRequestParams, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing Marketing Event with the specified id, if one exists.
     * Update a marketing event
     * @param externalEventId The id of the marketing event to update
     * @param externalAccountId The account id associated with the marketing event
     * @param marketingEventUpdateRequestParams The details of the marketing event to update
     */
    public update(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: Configuration): Observable<MarketingEventPublicDefaultResponse> {
        return this.updateWithHttpInfo(externalEventId, externalAccountId, marketingEventUpdateRequestParams, _options).pipe(map((apiResponse: HttpInfo<MarketingEventPublicDefaultResponse>) => apiResponse.data));
    }

}

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class ObservableBatchApi {
    private requestFactory: BatchApiRequestFactory;
    private responseProcessor: BatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApiResponseProcessor();
    }

    /**
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param batchInputMarketingEventExternalUniqueIdentifier The details of the marketing events to delete
     */
    public archiveBatchWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveBatch(batchInputMarketingEventExternalUniqueIdentifier, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param batchInputMarketingEventExternalUniqueIdentifier The details of the marketing events to delete
     */
    public archiveBatch(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Observable<void> {
        return this.archiveBatchWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Upset multiple Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param batchInputMarketingEventCreateRequestParams The details of the marketing events to upsert
     */
    public doUpsertWithHttpInfo(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Observable<HttpInfo<BatchResponseMarketingEventPublicDefaultResponse>> {
        const requestContextPromise = this.requestFactory.doUpsert(batchInputMarketingEventCreateRequestParams, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doUpsertWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upset multiple Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param batchInputMarketingEventCreateRequestParams The details of the marketing events to upsert
     */
    public doUpsert(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Observable<BatchResponseMarketingEventPublicDefaultResponse> {
        return this.doUpsertWithHttpInfo(batchInputMarketingEventCreateRequestParams, _options).pipe(map((apiResponse: HttpInfo<BatchResponseMarketingEventPublicDefaultResponse>) => apiResponse.data));
    }

}

import { MarketingEventsExternalApiRequestFactory, MarketingEventsExternalApiResponseProcessor} from "../apis/MarketingEventsExternalApi";
export class ObservableMarketingEventsExternalApi {
    private requestFactory: MarketingEventsExternalApiRequestFactory;
    private responseProcessor: MarketingEventsExternalApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MarketingEventsExternalApiRequestFactory,
        responseProcessor?: MarketingEventsExternalApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MarketingEventsExternalApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MarketingEventsExternalApiResponseProcessor();
    }

    /**
     * @param externalEventId 
     * @param externalAccountId 
     * @param marketingEventCompleteRequestParams 
     */
    public completeWithHttpInfo(externalEventId: string, externalAccountId: string, marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams, _options?: Configuration): Observable<HttpInfo<MarketingEventDefaultResponse>> {
        const requestContextPromise = this.requestFactory.complete(externalEventId, externalAccountId, marketingEventCompleteRequestParams, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.completeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param externalEventId 
     * @param externalAccountId 
     * @param marketingEventCompleteRequestParams 
     */
    public complete(externalEventId: string, externalAccountId: string, marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams, _options?: Configuration): Observable<MarketingEventDefaultResponse> {
        return this.completeWithHttpInfo(externalEventId, externalAccountId, marketingEventCompleteRequestParams, _options).pipe(map((apiResponse: HttpInfo<MarketingEventDefaultResponse>) => apiResponse.data));
    }

}

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class ObservableSearchApi {
    private requestFactory: SearchApiRequestFactory;
    private responseProcessor: SearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApiResponseProcessor();
    }

    /**
     * Search for marketing events that have an event id that starts with the query string
     * Search for marketing events
     * @param q The id of the marketing event in the external event application
     */
    public doSearchWithHttpInfo(q: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging>> {
        const requestContextPromise = this.requestFactory.doSearch(q, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for marketing events that have an event id that starts with the query string
     * Search for marketing events
     * @param q The id of the marketing event in the external event application
     */
    public doSearch(q: string, _options?: Configuration): Observable<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging> {
        return this.doSearchWithHttpInfo(q, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging>) => apiResponse.data));
    }

}

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class ObservableSettingsApi {
    private requestFactory: SettingsApiRequestFactory;
    private responseProcessor: SettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApiResponseProcessor();
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param appId The id of the application to update the settings for.
     * @param eventDetailSettingsUrl The new application settings
     */
    public createWithHttpInfo(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: Configuration): Observable<HttpInfo<EventDetailSettings>> {
        const requestContextPromise = this.requestFactory.create(appId, eventDetailSettingsUrl, _options);

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
     * Create or update the current settings for the application.
     * Update the application settings
     * @param appId The id of the application to update the settings for.
     * @param eventDetailSettingsUrl The new application settings
     */
    public create(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: Configuration): Observable<EventDetailSettings> {
        return this.createWithHttpInfo(appId, eventDetailSettingsUrl, _options).pipe(map((apiResponse: HttpInfo<EventDetailSettings>) => apiResponse.data));
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param appId The id of the application to retrieve the settings for.
     */
    public getAllWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<EventDetailSettings>> {
        const requestContextPromise = this.requestFactory.getAll(appId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param appId The id of the application to retrieve the settings for.
     */
    public getAll(appId: number, _options?: Configuration): Observable<EventDetailSettings> {
        return this.getAllWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<EventDetailSettings>) => apiResponse.data));
    }

}

import { SubscriberStateChangesApiRequestFactory, SubscriberStateChangesApiResponseProcessor} from "../apis/SubscriberStateChangesApi";
export class ObservableSubscriberStateChangesApi {
    private requestFactory: SubscriberStateChangesApiRequestFactory;
    private responseProcessor: SubscriberStateChangesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriberStateChangesApiRequestFactory,
        responseProcessor?: SubscriberStateChangesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriberStateChangesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriberStateChangesApiResponseProcessor();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
     * @param externalAccountId The account id associated with the marketing event
     * @param batchInputMarketingEventEmailSubscriber The details of the contacts to subscribe to the event
     */
    public doEmailUpsertByIdWithHttpInfo(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.doEmailUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doEmailUpsertByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
     * @param externalAccountId The account id associated with the marketing event
     * @param batchInputMarketingEventEmailSubscriber The details of the contacts to subscribe to the event
     */
    public doEmailUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Observable<void> {
        return this.doEmailUpsertByIdWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids. Note that the contact must already exist in HubSpot; a contact will not be create.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
     * @param externalAccountId The account id associated with the marketing event
     * @param batchInputMarketingEventSubscriber The details of the contacts to subscribe to the event
     */
    public doUpsertByIdWithHttpInfo(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.doUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doUpsertByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids. Note that the contact must already exist in HubSpot; a contact will not be create.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
     * @param externalAccountId The account id associated with the marketing event
     * @param batchInputMarketingEventSubscriber The details of the contacts to subscribe to the event
     */
    public doUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Observable<void> {
        return this.doUpsertByIdWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
