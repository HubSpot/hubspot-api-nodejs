import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AttendanceCounters } from '../models/AttendanceCounters';
import { BatchInputMarketingEventCreateRequestParams } from '../models/BatchInputMarketingEventCreateRequestParams';
import { BatchInputMarketingEventEmailSubscriber } from '../models/BatchInputMarketingEventEmailSubscriber';
import { BatchInputMarketingEventExternalUniqueIdentifier } from '../models/BatchInputMarketingEventExternalUniqueIdentifier';
import { BatchInputMarketingEventPublicObjectIdDeleteRequest } from '../models/BatchInputMarketingEventPublicObjectIdDeleteRequest';
import { BatchInputMarketingEventPublicUpdateRequestFullV2 } from '../models/BatchInputMarketingEventPublicUpdateRequestFullV2';
import { BatchInputMarketingEventSubscriber } from '../models/BatchInputMarketingEventSubscriber';
import { BatchResponseMarketingEventPublicDefaultResponse } from '../models/BatchResponseMarketingEventPublicDefaultResponse';
import { BatchResponseMarketingEventPublicDefaultResponseV2 } from '../models/BatchResponseMarketingEventPublicDefaultResponseV2';
import { BatchResponseMarketingEventPublicDefaultResponseV2WithErrors } from '../models/BatchResponseMarketingEventPublicDefaultResponseV2WithErrors';
import { BatchResponseSubscriberEmailResponse } from '../models/BatchResponseSubscriberEmailResponse';
import { BatchResponseSubscriberVidResponse } from '../models/BatchResponseSubscriberVidResponse';
import { CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging } from '../models/CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging';
import { CollectionResponseSearchPublicResponseWrapperNoPaging } from '../models/CollectionResponseSearchPublicResponseWrapperNoPaging';
import { CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging } from '../models/CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging';
import { CollectionResponseWithTotalParticipationBreakdownForwardPaging } from '../models/CollectionResponseWithTotalParticipationBreakdownForwardPaging';
import { CollectionResponseWithTotalPublicListNoPaging } from '../models/CollectionResponseWithTotalPublicListNoPaging';
import { EventDetailSettings } from '../models/EventDetailSettings';
import { EventDetailSettingsUrl } from '../models/EventDetailSettingsUrl';
import { MarketingEventCompleteRequestParams } from '../models/MarketingEventCompleteRequestParams';
import { MarketingEventCreateRequestParams } from '../models/MarketingEventCreateRequestParams';
import { MarketingEventDefaultResponse } from '../models/MarketingEventDefaultResponse';
import { MarketingEventPublicDefaultResponse } from '../models/MarketingEventPublicDefaultResponse';
import { MarketingEventPublicDefaultResponseV2 } from '../models/MarketingEventPublicDefaultResponseV2';
import { MarketingEventPublicReadResponse } from '../models/MarketingEventPublicReadResponse';
import { MarketingEventPublicReadResponseV2 } from '../models/MarketingEventPublicReadResponseV2';
import { MarketingEventPublicUpdateRequestV2 } from '../models/MarketingEventPublicUpdateRequestV2';
import { MarketingEventUpdateRequestParams } from '../models/MarketingEventUpdateRequestParams';

import { AddEventAttendeesApiRequestFactory, AddEventAttendeesApiResponseProcessor} from "../apis/AddEventAttendeesApi";
export class ObservableAddEventAttendeesApi {
    private requestFactory: AddEventAttendeesApiRequestFactory;
    private responseProcessor: AddEventAttendeesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AddEventAttendeesApiRequestFactory,
        responseProcessor?: AddEventAttendeesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AddEventAttendeesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AddEventAttendeesApiResponseProcessor();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber 
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
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
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber 
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     */
    public recordByContactEmails(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: Configuration): Observable<BatchResponseSubscriberEmailResponse> {
        return this.recordByContactEmailsWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<BatchResponseSubscriberEmailResponse>) => apiResponse.data));
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event Object Id
     * @param objectId The internal id of the marketing event in HubSpot
     * @param subscriberState The attendance state value. It may be \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;
     * @param batchInputMarketingEventSubscriber 
     */
    public recordByContactIdWithHttpInfo(objectId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Observable<HttpInfo<BatchResponseSubscriberVidResponse>> {
        const requestContextPromise = this.requestFactory.recordByContactId(objectId, subscriberState, batchInputMarketingEventSubscriber, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.recordByContactIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event Object Id
     * @param objectId The internal id of the marketing event in HubSpot
     * @param subscriberState The attendance state value. It may be \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;
     * @param batchInputMarketingEventSubscriber 
     */
    public recordByContactId(objectId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Observable<BatchResponseSubscriberVidResponse> {
        return this.recordByContactIdWithHttpInfo(objectId, subscriberState, batchInputMarketingEventSubscriber, _options).pipe(map((apiResponse: HttpInfo<BatchResponseSubscriberVidResponse>) => apiResponse.data));
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber 
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
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
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber 
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     */
    public recordByContactIds(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: Configuration): Observable<BatchResponseSubscriberVidResponse> {
        return this.recordByContactIdsWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<BatchResponseSubscriberVidResponse>) => apiResponse.data));
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event Object Id
     * @param objectId The internal ID of the marketing event in HubSpot
     * @param subscriberState The attendance state value. It may be \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;
     * @param batchInputMarketingEventEmailSubscriber 
     */
    public recordByEmailWithHttpInfo(objectId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Observable<HttpInfo<BatchResponseSubscriberEmailResponse>> {
        const requestContextPromise = this.requestFactory.recordByEmail(objectId, subscriberState, batchInputMarketingEventEmailSubscriber, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.recordByEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event Object Id
     * @param objectId The internal ID of the marketing event in HubSpot
     * @param subscriberState The attendance state value. It may be \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;
     * @param batchInputMarketingEventEmailSubscriber 
     */
    public recordByEmail(objectId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Observable<BatchResponseSubscriberEmailResponse> {
        return this.recordByEmailWithHttpInfo(objectId, subscriberState, batchInputMarketingEventEmailSubscriber, _options).pipe(map((apiResponse: HttpInfo<BatchResponseSubscriberEmailResponse>) => apiResponse.data));
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
     * Deletes the existing Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app can be deleted.
     * Delete Marketing Event by External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
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
     * Deletes the existing Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app can be deleted.
     * Delete Marketing Event by External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     */
    public archive(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(externalEventId, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the existing Marketing Event with the specified objectId, if it exists.
     * Delete Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     */
    public archiveByObjectIdWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveByObjectId(objectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveByObjectIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the existing Marketing Event with the specified objectId, if it exists.
     * Delete Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     */
    public archiveByObjectId(objectId: string, _options?: Configuration): Observable<void> {
        return this.archiveByObjectIdWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
     * Returns all Marketing Events available on the portal, along with their properties, regardless of whether they were created manually or through the application.  The marketing events returned by this endpoint are sorted by objectId.
     * Get all marketing event
     * @param after The cursor indicating the position of the last retrieved item.
     * @param limit The limit for response size. The default value is 10, the max number is 100
     */
    public getAllWithHttpInfo(after?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging>> {
        const requestContextPromise = this.requestFactory.getAll(after, limit, _options);

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
     * Returns all Marketing Events available on the portal, along with their properties, regardless of whether they were created manually or through the application.  The marketing events returned by this endpoint are sorted by objectId.
     * Get all marketing event
     * @param after The cursor indicating the position of the last retrieved item.
     * @param limit The limit for response size. The default value is 10, the max number is 100
     */
    public getAll(after?: string, limit?: number, _options?: Configuration): Observable<CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging> {
        return this.getAllWithHttpInfo(after, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging>) => apiResponse.data));
    }

    /**
     * Returns the details of a Marketing Event with the specified objectId, if it exists.
     * Get Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     */
    public getByObjectIdWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<MarketingEventPublicReadResponseV2>> {
        const requestContextPromise = this.requestFactory.getByObjectId(objectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByObjectIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the details of a Marketing Event with the specified objectId, if it exists.
     * Get Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     */
    public getByObjectId(objectId: string, _options?: Configuration): Observable<MarketingEventPublicReadResponseV2> {
        return this.getByObjectIdWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<MarketingEventPublicReadResponseV2>) => apiResponse.data));
    }

    /**
     * Returns the details of a Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app making the request can be retrieved.
     * Get Marketing Event by External IDs
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
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
     * Returns the details of a Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app making the request can be retrieved.
     * Get Marketing Event by External IDs
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     */
    public getDetails(externalEventId: string, externalAccountId: string, _options?: Configuration): Observable<MarketingEventPublicReadResponse> {
        return this.getDetailsWithHttpInfo(externalEventId, externalAccountId, _options).pipe(map((apiResponse: HttpInfo<MarketingEventPublicReadResponse>) => apiResponse.data));
    }

    /**
     * Updates the details of an existing Marketing Event identified by its externalAccountId, externalEventId if it exists.  Only Marketing Events created by the same app can be updated.
     * Update Marketing Event by External IDs
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
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
     * Updates the details of an existing Marketing Event identified by its externalAccountId, externalEventId if it exists.  Only Marketing Events created by the same app can be updated.
     * Update Marketing Event by External IDs
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param marketingEventUpdateRequestParams 
     */
    public update(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: Configuration): Observable<MarketingEventPublicDefaultResponse> {
        return this.updateWithHttpInfo(externalEventId, externalAccountId, marketingEventUpdateRequestParams, _options).pipe(map((apiResponse: HttpInfo<MarketingEventPublicDefaultResponse>) => apiResponse.data));
    }

    /**
     * Updates the details of an existing Marketing Event identified by its objectId, if it exists.
     * Update Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     * @param marketingEventPublicUpdateRequestV2 
     */
    public updateByObjectIdWithHttpInfo(objectId: string, marketingEventPublicUpdateRequestV2: MarketingEventPublicUpdateRequestV2, _options?: Configuration): Observable<HttpInfo<MarketingEventPublicDefaultResponseV2>> {
        const requestContextPromise = this.requestFactory.updateByObjectId(objectId, marketingEventPublicUpdateRequestV2, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateByObjectIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the details of an existing Marketing Event identified by its objectId, if it exists.
     * Update Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     * @param marketingEventPublicUpdateRequestV2 
     */
    public updateByObjectId(objectId: string, marketingEventPublicUpdateRequestV2: MarketingEventPublicUpdateRequestV2, _options?: Configuration): Observable<MarketingEventPublicDefaultResponseV2> {
        return this.updateByObjectIdWithHttpInfo(objectId, marketingEventPublicUpdateRequestV2, _options).pipe(map((apiResponse: HttpInfo<MarketingEventPublicDefaultResponseV2>) => apiResponse.data));
    }

    /**
     * Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The id of the marketing event in the external event application
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
     * @param externalEventId The id of the marketing event in the external event application
     * @param marketingEventCreateRequestParams 
     */
    public upsert(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Observable<MarketingEventPublicDefaultResponse> {
        return this.upsertWithHttpInfo(externalEventId, marketingEventCreateRequestParams, _options).pipe(map((apiResponse: HttpInfo<MarketingEventPublicDefaultResponse>) => apiResponse.data));
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
     * Deletes multiple Marketing Events based on externalAccountId, externalEventId, and appId.  Only Marketing Events created by the same apps will be deleted; events from other apps cannot be removed by this endpoint. 
     * Delete Multiple Marketing Events by External Ids
     * @param batchInputMarketingEventExternalUniqueIdentifier 
     */
    public archiveWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(batchInputMarketingEventExternalUniqueIdentifier, _options);

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
     * Deletes multiple Marketing Events based on externalAccountId, externalEventId, and appId.  Only Marketing Events created by the same apps will be deleted; events from other apps cannot be removed by this endpoint. 
     * Delete Multiple Marketing Events by External Ids
     * @param batchInputMarketingEventExternalUniqueIdentifier 
     */
    public archive(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes multiple Marketing Events from the portal based on their objectId, if they exist.  Responses: 204: Returned if all specified Marketing Events were successfully deleted. 207: Returned if some objectIds did not correspond to any existing Marketing Events.
     * Delete Multiple Marketing Events by ObjectId
     * @param batchInputMarketingEventPublicObjectIdDeleteRequest 
     */
    public archiveByObjectIdWithHttpInfo(batchInputMarketingEventPublicObjectIdDeleteRequest: BatchInputMarketingEventPublicObjectIdDeleteRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveByObjectId(batchInputMarketingEventPublicObjectIdDeleteRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveByObjectIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes multiple Marketing Events from the portal based on their objectId, if they exist.  Responses: 204: Returned if all specified Marketing Events were successfully deleted. 207: Returned if some objectIds did not correspond to any existing Marketing Events.
     * Delete Multiple Marketing Events by ObjectId
     * @param batchInputMarketingEventPublicObjectIdDeleteRequest 
     */
    public archiveByObjectId(batchInputMarketingEventPublicObjectIdDeleteRequest: BatchInputMarketingEventPublicObjectIdDeleteRequest, _options?: Configuration): Observable<void> {
        return this.archiveByObjectIdWithHttpInfo(batchInputMarketingEventPublicObjectIdDeleteRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates multiple Marketing Events on the portal based on their objectId, if they exist.
     * Update Multiple Marketing Events by ObjectId
     * @param batchInputMarketingEventPublicUpdateRequestFullV2 
     */
    public updateByObjectIdWithHttpInfo(batchInputMarketingEventPublicUpdateRequestFullV2: BatchInputMarketingEventPublicUpdateRequestFullV2, _options?: Configuration): Observable<HttpInfo<BatchResponseMarketingEventPublicDefaultResponseV2WithErrors | BatchResponseMarketingEventPublicDefaultResponseV2>> {
        const requestContextPromise = this.requestFactory.updateByObjectId(batchInputMarketingEventPublicUpdateRequestFullV2, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateByObjectIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates multiple Marketing Events on the portal based on their objectId, if they exist.
     * Update Multiple Marketing Events by ObjectId
     * @param batchInputMarketingEventPublicUpdateRequestFullV2 
     */
    public updateByObjectId(batchInputMarketingEventPublicUpdateRequestFullV2: BatchInputMarketingEventPublicUpdateRequestFullV2, _options?: Configuration): Observable<BatchResponseMarketingEventPublicDefaultResponseV2WithErrors | BatchResponseMarketingEventPublicDefaultResponseV2> {
        return this.updateByObjectIdWithHttpInfo(batchInputMarketingEventPublicUpdateRequestFullV2, _options).pipe(map((apiResponse: HttpInfo<BatchResponseMarketingEventPublicDefaultResponseV2WithErrors | BatchResponseMarketingEventPublicDefaultResponseV2>) => apiResponse.data));
    }

    /**
     * Upserts multiple Marketing Events. If a Marketing Event with the specified ID already exists, it will be updated; otherwise, a new event will be created.  Only Marketing Events originally created by the same app can be updated.
     * Create or Update Multiple Marketing Events
     * @param batchInputMarketingEventCreateRequestParams 
     */
    public upsertWithHttpInfo(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Observable<HttpInfo<BatchResponseMarketingEventPublicDefaultResponse>> {
        const requestContextPromise = this.requestFactory.upsert(batchInputMarketingEventCreateRequestParams, _options);

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
     * Upserts multiple Marketing Events. If a Marketing Event with the specified ID already exists, it will be updated; otherwise, a new event will be created.  Only Marketing Events originally created by the same app can be updated.
     * Create or Update Multiple Marketing Events
     * @param batchInputMarketingEventCreateRequestParams 
     */
    public upsert(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Observable<BatchResponseMarketingEventPublicDefaultResponse> {
        return this.upsertWithHttpInfo(batchInputMarketingEventCreateRequestParams, _options).pipe(map((apiResponse: HttpInfo<BatchResponseMarketingEventPublicDefaultResponse>) => apiResponse.data));
    }

}

import { ChangePropertyApiRequestFactory, ChangePropertyApiResponseProcessor} from "../apis/ChangePropertyApi";
export class ObservableChangePropertyApi {
    private requestFactory: ChangePropertyApiRequestFactory;
    private responseProcessor: ChangePropertyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ChangePropertyApiRequestFactory,
        responseProcessor?: ChangePropertyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ChangePropertyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ChangePropertyApiResponseProcessor();
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
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
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
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

}

import { IdentifiersApiRequestFactory, IdentifiersApiResponseProcessor} from "../apis/IdentifiersApi";
export class ObservableIdentifiersApi {
    private requestFactory: IdentifiersApiRequestFactory;
    private responseProcessor: IdentifiersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentifiersApiRequestFactory,
        responseProcessor?: IdentifiersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new IdentifiersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IdentifiersApiResponseProcessor();
    }

    /**
     * Retrieves Marketing Events where the externalEventId matches the value provided in the request, limited to events created by the app making the request.  Marketing Events created by other apps will not be included in the results.
     * Find App-Specific Marketing Events by External Event Id
     * @param q The id of the marketing event in the external event application (externalEventId)
     */
    public doSearchWithHttpInfo(q: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseSearchPublicResponseWrapperNoPaging>> {
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
     * Retrieves Marketing Events where the externalEventId matches the value provided in the request, limited to events created by the app making the request.  Marketing Events created by other apps will not be included in the results.
     * Find App-Specific Marketing Events by External Event Id
     * @param q The id of the marketing event in the external event application (externalEventId)
     */
    public doSearch(q: string, _options?: Configuration): Observable<CollectionResponseSearchPublicResponseWrapperNoPaging> {
        return this.doSearchWithHttpInfo(q, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseSearchPublicResponseWrapperNoPaging>) => apiResponse.data));
    }

    /**
     * This endpoint searches the portal for all Marketing Events whose externalEventId matches the value provided in the request.  It retrieves the objectId and additional event details for each matching Marketing Event.  Since multiple Marketing Events can have the same externalEventId, the endpoint returns all matching results.  Note: Marketing Events become searchable by externalEventId a few minutes after creation.
     * Find Marketing Events by External Event Id
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public searchPortalEventsWithHttpInfo(externalEventId: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging>> {
        const requestContextPromise = this.requestFactory.searchPortalEvents(externalEventId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchPortalEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint searches the portal for all Marketing Events whose externalEventId matches the value provided in the request.  It retrieves the objectId and additional event details for each matching Marketing Event.  Since multiple Marketing Events can have the same externalEventId, the endpoint returns all matching results.  Note: Marketing Events become searchable by externalEventId a few minutes after creation.
     * Find Marketing Events by External Event Id
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public searchPortalEvents(externalEventId: string, _options?: Configuration): Observable<CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging> {
        return this.searchPortalEventsWithHttpInfo(externalEventId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging>) => apiResponse.data));
    }

}

import { ListAssociationsApiRequestFactory, ListAssociationsApiResponseProcessor} from "../apis/ListAssociationsApi";
export class ObservableListAssociationsApi {
    private requestFactory: ListAssociationsApiRequestFactory;
    private responseProcessor: ListAssociationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ListAssociationsApiRequestFactory,
        responseProcessor?: ListAssociationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ListAssociationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ListAssociationsApiResponseProcessor();
    }

    /**
     * Associates a list with a marketing event by external account id, external event id, and ILS list id
     * Associate a list with a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param listId The ILS ID of the list.
     */
    public associateByExternalAccountAndEventIdsWithHttpInfo(externalAccountId: string, externalEventId: string, listId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.associateByExternalAccountAndEventIds(externalAccountId, externalEventId, listId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.associateByExternalAccountAndEventIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Associates a list with a marketing event by external account id, external event id, and ILS list id
     * Associate a list with a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param listId The ILS ID of the list.
     */
    public associateByExternalAccountAndEventIds(externalAccountId: string, externalEventId: string, listId: string, _options?: Configuration): Observable<void> {
        return this.associateByExternalAccountAndEventIdsWithHttpInfo(externalAccountId, externalEventId, listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Associates a list with a marketing event by marketing event id and ILS list id
     * Associate a list with a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param listId The ILS ID of the list.
     */
    public associateByMarketingEventIdWithHttpInfo(marketingEventId: string, listId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.associateByMarketingEventId(marketingEventId, listId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.associateByMarketingEventIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Associates a list with a marketing event by marketing event id and ILS list id
     * Associate a list with a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param listId The ILS ID of the list.
     */
    public associateByMarketingEventId(marketingEventId: string, listId: string, _options?: Configuration): Observable<void> {
        return this.associateByMarketingEventIdWithHttpInfo(marketingEventId, listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Disassociates a list from a marketing event by external account id, external event id, and ILS list id
     * Disassociate a list from a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param listId The ILS ID of the list.
     */
    public disassociateByExternalAccountAndEventIdsWithHttpInfo(externalAccountId: string, externalEventId: string, listId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.disassociateByExternalAccountAndEventIds(externalAccountId, externalEventId, listId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disassociateByExternalAccountAndEventIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Disassociates a list from a marketing event by external account id, external event id, and ILS list id
     * Disassociate a list from a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param listId The ILS ID of the list.
     */
    public disassociateByExternalAccountAndEventIds(externalAccountId: string, externalEventId: string, listId: string, _options?: Configuration): Observable<void> {
        return this.disassociateByExternalAccountAndEventIdsWithHttpInfo(externalAccountId, externalEventId, listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Disassociates a list from a marketing event by marketing event id and ILS list id
     * Disassociate a list from a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param listId The ILS ID of the list.
     */
    public disassociateByMarketingEventIdWithHttpInfo(marketingEventId: string, listId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.disassociateByMarketingEventId(marketingEventId, listId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disassociateByMarketingEventIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Disassociates a list from a marketing event by marketing event id and ILS list id
     * Disassociate a list from a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param listId The ILS ID of the list.
     */
    public disassociateByMarketingEventId(marketingEventId: string, listId: string, _options?: Configuration): Observable<void> {
        return this.disassociateByMarketingEventIdWithHttpInfo(marketingEventId, listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets lists associated with a marketing event by external account id and external event id
     * Get lists associated with a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public getAllByExternalAccountAndEventIdsWithHttpInfo(externalAccountId: string, externalEventId: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalPublicListNoPaging>> {
        const requestContextPromise = this.requestFactory.getAllByExternalAccountAndEventIds(externalAccountId, externalEventId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllByExternalAccountAndEventIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets lists associated with a marketing event by external account id and external event id
     * Get lists associated with a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public getAllByExternalAccountAndEventIds(externalAccountId: string, externalEventId: string, _options?: Configuration): Observable<CollectionResponseWithTotalPublicListNoPaging> {
        return this.getAllByExternalAccountAndEventIdsWithHttpInfo(externalAccountId, externalEventId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalPublicListNoPaging>) => apiResponse.data));
    }

    /**
     * Gets lists associated with a marketing event by marketing event id
     * Get lists associated with a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public getAllByMarketingEventIdWithHttpInfo(marketingEventId: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalPublicListNoPaging>> {
        const requestContextPromise = this.requestFactory.getAllByMarketingEventId(marketingEventId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllByMarketingEventIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets lists associated with a marketing event by marketing event id
     * Get lists associated with a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public getAllByMarketingEventId(marketingEventId: string, _options?: Configuration): Observable<CollectionResponseWithTotalPublicListNoPaging> {
        return this.getAllByMarketingEventIdWithHttpInfo(marketingEventId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalPublicListNoPaging>) => apiResponse.data));
    }

}

import { RetrieveParticipantStateApiRequestFactory, RetrieveParticipantStateApiResponseProcessor} from "../apis/RetrieveParticipantStateApi";
export class ObservableRetrieveParticipantStateApi {
    private requestFactory: RetrieveParticipantStateApiRequestFactory;
    private responseProcessor: RetrieveParticipantStateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RetrieveParticipantStateApiRequestFactory,
        responseProcessor?: RetrieveParticipantStateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RetrieveParticipantStateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RetrieveParticipantStateApiResponseProcessor();
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
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
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
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param batchInputMarketingEventEmailSubscriber 
     */
    public upsertByContactEmail(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Observable<void> {
        return this.upsertByContactEmailWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
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
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param batchInputMarketingEventSubscriber 
     */
    public upsertByContactId(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Observable<void> {
        return this.upsertByContactIdWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
