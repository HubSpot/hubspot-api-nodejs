import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AttendanceCounters } from '../models/AttendanceCounters';
import { BatchInputMarketingEventCreateRequestParams } from '../models/BatchInputMarketingEventCreateRequestParams';
import { BatchInputMarketingEventEmailSubscriber } from '../models/BatchInputMarketingEventEmailSubscriber';
import { BatchInputMarketingEventExternalUniqueIdentifier } from '../models/BatchInputMarketingEventExternalUniqueIdentifier';
import { BatchInputMarketingEventSubscriber } from '../models/BatchInputMarketingEventSubscriber';
import { BatchResponseMarketingEventPublicDefaultResponse } from '../models/BatchResponseMarketingEventPublicDefaultResponse';
import { BatchResponseSubscriberEmailResponse } from '../models/BatchResponseSubscriberEmailResponse';
import { BatchResponseSubscriberVidResponse } from '../models/BatchResponseSubscriberVidResponse';
import { CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging } from '../models/CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging';
import { CollectionResponseWithTotalParticipationBreakdownForwardPaging } from '../models/CollectionResponseWithTotalParticipationBreakdownForwardPaging';
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
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber 
     * @param externalAccountId The account id associated with the marketing event
     */
    public recordByContactEmailsWithHttpInfo(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: Configuration): Observable<HttpInfo<BatchResponseSubscriberEmailResponse>> {
        const requestContextPromise = this.requestFactory.recordByContactEmails(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.recordByContactEmailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber 
     * @param externalAccountId The account id associated with the marketing event
     */
    public recordByContactEmails(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: Configuration): Observable<BatchResponseSubscriberEmailResponse> {
        return this.recordByContactEmailsWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<BatchResponseSubscriberEmailResponse>) => apiResponse.data));
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record a subscriber state by contact ids
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber 
     * @param externalAccountId The account id associated with the marketing event
     */
    public recordByContactIdsWithHttpInfo(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: Configuration): Observable<HttpInfo<BatchResponseSubscriberVidResponse>> {
        const requestContextPromise = this.requestFactory.recordByContactIds(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.recordByContactIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record a subscriber state by contact ids
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber 
     * @param externalAccountId The account id associated with the marketing event
     */
    public recordByContactIds(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: Configuration): Observable<BatchResponseSubscriberVidResponse> {
        return this.recordByContactIdsWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<BatchResponseSubscriberVidResponse>) => apiResponse.data));
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
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param batchInputMarketingEventExternalUniqueIdentifier 
     */
    public batchArchiveWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.batchArchive(batchInputMarketingEventExternalUniqueIdentifier, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchArchiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param batchInputMarketingEventExternalUniqueIdentifier 
     */
    public batchArchive(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Observable<void> {
        return this.batchArchiveWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Upsert multiple marketing events. If there is an existing Marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param batchInputMarketingEventCreateRequestParams 
     */
    public batchUpsertWithHttpInfo(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Observable<HttpInfo<BatchResponseMarketingEventPublicDefaultResponse>> {
        const requestContextPromise = this.requestFactory.batchUpsert(batchInputMarketingEventCreateRequestParams, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchUpsertWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upsert multiple marketing events. If there is an existing Marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param batchInputMarketingEventCreateRequestParams 
     */
    public batchUpsert(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Observable<BatchResponseMarketingEventPublicDefaultResponse> {
        return this.batchUpsertWithHttpInfo(batchInputMarketingEventCreateRequestParams, _options).pipe(map((apiResponse: HttpInfo<BatchResponseMarketingEventPublicDefaultResponse>) => apiResponse.data));
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event to mark as cancelled
     * @param externalAccountId The account id associated with the marketing event
     */
    public cancelWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<HttpInfo<MarketingEventDefaultResponse>> {
        const requestContextPromise = this.requestFactory.cancel(externalEventId, externalAccountId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event to mark as cancelled
     * @param externalAccountId The account id associated with the marketing event
     */
    public cancel(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<MarketingEventDefaultResponse> {
        return this.cancelWithHttpInfo(externalEventId, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<MarketingEventDefaultResponse>) => apiResponse.data));
    }

    /**
     * Mark a marketing event as completed
     * Mark a marketing event as completed
     * @param externalEventId The id of the marketing event in the external event application.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
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
     * Mark a marketing event as completed
     * Mark a marketing event as completed
     * @param externalEventId The id of the marketing event in the external event application.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param marketingEventCompleteRequestParams 
     */
    public complete(externalEventId: string, externalAccountId: string, marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams, _options?: Configuration): Observable<MarketingEventDefaultResponse> {
        return this.completeWithHttpInfo(externalEventId, externalAccountId, marketingEventCompleteRequestParams, _options).pipe(map((apiResponse: HttpInfo<MarketingEventDefaultResponse>) => apiResponse.data));
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param marketingEventCreateRequestParams 
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
     * @param marketingEventCreateRequestParams 
     */
    public create(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Observable<MarketingEventDefaultResponse> {
        return this.createWithHttpInfo(marketingEventCreateRequestParams, _options).pipe(map((apiResponse: HttpInfo<MarketingEventDefaultResponse>) => apiResponse.data));
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

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param externalEventId The id of the marketing event to return
     * @param externalAccountId The account id associated with the marketing event
     */
    public getDetailsWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<HttpInfo<MarketingEventPublicReadResponse>> {
        const requestContextPromise = this.requestFactory.getDetails(externalEventId, externalAccountId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param externalEventId The id of the marketing event to return
     * @param externalAccountId The account id associated with the marketing event
     */
    public getDetails(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<MarketingEventPublicReadResponse> {
        return this.getDetailsWithHttpInfo(externalEventId, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<MarketingEventPublicReadResponse>) => apiResponse.data));
    }

    /**
     * Updates an existing Marketing Event with the specified id, if one exists.
     * Update a marketing event
     * @param externalEventId The id of the marketing event to update
     * @param externalAccountId The account id associated with the marketing event
     * @param marketingEventUpdateRequestParams 
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
     * @param marketingEventUpdateRequestParams 
     */
    public update(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: Configuration): Observable<MarketingEventPublicDefaultResponse> {
        return this.updateWithHttpInfo(externalEventId, externalAccountId, marketingEventUpdateRequestParams, _options).pipe(map((apiResponse: HttpInfo<MarketingEventPublicDefaultResponse>) => apiResponse.data));
    }

    /**
     * Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The ID of the marketing event to upsert
     * @param marketingEventCreateRequestParams 
     */
    public upsertWithHttpInfo(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Observable<HttpInfo<MarketingEventPublicDefaultResponse>> {
        const requestContextPromise = this.requestFactory.upsert(externalEventId, marketingEventCreateRequestParams, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upsertWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The ID of the marketing event to upsert
     * @param marketingEventCreateRequestParams 
     */
    public upsert(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Observable<MarketingEventPublicDefaultResponse> {
        return this.upsertWithHttpInfo(externalEventId, marketingEventCreateRequestParams, _options).pipe(map((apiResponse: HttpInfo<MarketingEventPublicDefaultResponse>) => apiResponse.data));
    }

}

import { ParticipantStateApiRequestFactory, ParticipantStateApiResponseProcessor} from "../apis/ParticipantStateApi";
export class ObservableParticipantStateApi {
    private requestFactory: ParticipantStateApiRequestFactory;
    private responseProcessor: ParticipantStateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ParticipantStateApiRequestFactory,
        responseProcessor?: ParticipantStateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ParticipantStateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ParticipantStateApiResponseProcessor();
    }

    /**
     * Read Contact\'s participations by identifier - email or internal id.
     * Read participations breakdown by Contact identifier
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param state The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param limit The limit for response size. The default value is 10, the max number is 100
     * @param after The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByContactIdWithHttpInfo(contactIdentifier: string, state?: string, limit?: number, after?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        const requestContextPromise = this.requestFactory.getParticipationsBreakdownByContactId(contactIdentifier, state, limit, after, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getParticipationsBreakdownByContactIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Read Contact\'s participations by identifier - email or internal id.
     * Read participations breakdown by Contact identifier
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param state The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param limit The limit for response size. The default value is 10, the max number is 100
     * @param after The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByContactId(contactIdentifier: string, state?: string, limit?: number, after?: string, _options?: Configuration): Observable<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        return this.getParticipationsBreakdownByContactIdWithHttpInfo(contactIdentifier, state, limit, after, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>) => apiResponse.data));
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by externalAccountId and externalEventId pair.
     * Read participations breakdown by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param state The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param limit The limit for response size. The default value is 10, the max number is 100
     * @param after The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByExternalEventIdWithHttpInfo(externalAccountId: string, externalEventId: string, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        const requestContextPromise = this.requestFactory.getParticipationsBreakdownByExternalEventId(externalAccountId, externalEventId, contactIdentifier, state, limit, after, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getParticipationsBreakdownByExternalEventIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by externalAccountId and externalEventId pair.
     * Read participations breakdown by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param state The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param limit The limit for response size. The default value is 10, the max number is 100
     * @param after The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByExternalEventId(externalAccountId: string, externalEventId: string, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: Configuration): Observable<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        return this.getParticipationsBreakdownByExternalEventIdWithHttpInfo(externalAccountId, externalEventId, contactIdentifier, state, limit, after, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>) => apiResponse.data));
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by internal identifier marketingEventId.
     * Read participations breakdown by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param state The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param limit The limit for response size. The default value is 10, the max number is 100
     * @param after The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByMarketingEventIdWithHttpInfo(marketingEventId: number, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        const requestContextPromise = this.requestFactory.getParticipationsBreakdownByMarketingEventId(marketingEventId, contactIdentifier, state, limit, after, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getParticipationsBreakdownByMarketingEventIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by internal identifier marketingEventId.
     * Read participations breakdown by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param state The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param limit The limit for response size. The default value is 10, the max number is 100
     * @param after The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByMarketingEventId(marketingEventId: number, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: Configuration): Observable<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        return this.getParticipationsBreakdownByMarketingEventIdWithHttpInfo(marketingEventId, contactIdentifier, state, limit, after, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>) => apiResponse.data));
    }

    /**
     * Read Marketing event\'s participations counters by externalAccountId and externalEventId pair.
     * Read participations counters by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public getParticipationsCountersByEventExternalIdWithHttpInfo(externalAccountId: string, externalEventId: string, _options?: Configuration): Observable<HttpInfo<AttendanceCounters>> {
        const requestContextPromise = this.requestFactory.getParticipationsCountersByEventExternalId(externalAccountId, externalEventId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getParticipationsCountersByEventExternalIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Read Marketing event\'s participations counters by externalAccountId and externalEventId pair.
     * Read participations counters by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public getParticipationsCountersByEventExternalId(externalAccountId: string, externalEventId: string, _options?: Configuration): Observable<AttendanceCounters> {
        return this.getParticipationsCountersByEventExternalIdWithHttpInfo(externalAccountId, externalEventId, _options).pipe(map((apiResponse: HttpInfo<AttendanceCounters>) => apiResponse.data));
    }

    /**
     * Read Marketing event\'s participations counters by internal identifier marketingEventId.
     * Read participations counters by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public getParticipationsCountersByMarketingEventIdWithHttpInfo(marketingEventId: number, _options?: Configuration): Observable<HttpInfo<AttendanceCounters>> {
        const requestContextPromise = this.requestFactory.getParticipationsCountersByMarketingEventId(marketingEventId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getParticipationsCountersByMarketingEventIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Read Marketing event\'s participations counters by internal identifier marketingEventId.
     * Read participations counters by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public getParticipationsCountersByMarketingEventId(marketingEventId: number, _options?: Configuration): Observable<AttendanceCounters> {
        return this.getParticipationsCountersByMarketingEventIdWithHttpInfo(marketingEventId, _options).pipe(map((apiResponse: HttpInfo<AttendanceCounters>) => apiResponse.data));
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

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param appId The id of the application to update the settings for.
     * @param eventDetailSettingsUrl 
     */
    public updateWithHttpInfo(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: Configuration): Observable<HttpInfo<EventDetailSettings>> {
        const requestContextPromise = this.requestFactory.update(appId, eventDetailSettingsUrl, _options);

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
     * Create or update the current settings for the application.
     * Update the application settings
     * @param appId The id of the application to update the settings for.
     * @param eventDetailSettingsUrl 
     */
    public update(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: Configuration): Observable<EventDetailSettings> {
        return this.updateWithHttpInfo(appId, eventDetailSettingsUrl, _options).pipe(map((apiResponse: HttpInfo<EventDetailSettings>) => apiResponse.data));
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
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param externalEventId The ID of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The account ID associated with the marketing event
     * @param batchInputMarketingEventEmailSubscriber 
     */
    public upsertByContactEmailWithHttpInfo(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.upsertByContactEmail(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upsertByContactEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param externalEventId The ID of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The account ID associated with the marketing event
     * @param batchInputMarketingEventEmailSubscriber 
     */
    public upsertByContactEmail(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Observable<void> {
        return this.upsertByContactEmailWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param externalEventId The ID of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The account ID associated with the marketing event
     * @param batchInputMarketingEventSubscriber 
     */
    public upsertByContactIdWithHttpInfo(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.upsertByContactId(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upsertByContactIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param externalEventId The ID of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The account ID associated with the marketing event
     * @param batchInputMarketingEventSubscriber 
     */
    public upsertByContactId(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Observable<void> {
        return this.upsertByContactIdWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
