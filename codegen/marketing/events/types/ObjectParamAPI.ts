import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableAttendanceSubscriberStateChangesApi } from "./ObservableAPI";
import { AttendanceSubscriberStateChangesApiRequestFactory, AttendanceSubscriberStateChangesApiResponseProcessor} from "../apis/AttendanceSubscriberStateChangesApi";

export interface AttendanceSubscriberStateChangesApiRecordByContactEmailsRequest {
    /**
     * The id of the marketing event
     * @type string
     * @memberof AttendanceSubscriberStateChangesApirecordByContactEmails
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @type string
     * @memberof AttendanceSubscriberStateChangesApirecordByContactEmails
     */
    subscriberState: string
    /**
     * 
     * @type BatchInputMarketingEventEmailSubscriber
     * @memberof AttendanceSubscriberStateChangesApirecordByContactEmails
     */
    batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof AttendanceSubscriberStateChangesApirecordByContactEmails
     */
    externalAccountId?: string
}

export interface AttendanceSubscriberStateChangesApiRecordByContactIdsRequest {
    /**
     * The id of the marketing event
     * @type string
     * @memberof AttendanceSubscriberStateChangesApirecordByContactIds
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @type string
     * @memberof AttendanceSubscriberStateChangesApirecordByContactIds
     */
    subscriberState: string
    /**
     * 
     * @type BatchInputMarketingEventSubscriber
     * @memberof AttendanceSubscriberStateChangesApirecordByContactIds
     */
    batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof AttendanceSubscriberStateChangesApirecordByContactIds
     */
    externalAccountId?: string
}

export class ObjectAttendanceSubscriberStateChangesApi {
    private api: ObservableAttendanceSubscriberStateChangesApi

    public constructor(configuration: Configuration, requestFactory?: AttendanceSubscriberStateChangesApiRequestFactory, responseProcessor?: AttendanceSubscriberStateChangesApiResponseProcessor) {
        this.api = new ObservableAttendanceSubscriberStateChangesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param param the request object
     */
    public recordByContactEmailsWithHttpInfo(param: AttendanceSubscriberStateChangesApiRecordByContactEmailsRequest, options?: Configuration): Promise<HttpInfo<BatchResponseSubscriberEmailResponse>> {
        return this.api.recordByContactEmailsWithHttpInfo(param.externalEventId, param.subscriberState, param.batchInputMarketingEventEmailSubscriber, param.externalAccountId,  options).toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param param the request object
     */
    public recordByContactEmails(param: AttendanceSubscriberStateChangesApiRecordByContactEmailsRequest, options?: Configuration): Promise<BatchResponseSubscriberEmailResponse> {
        return this.api.recordByContactEmails(param.externalEventId, param.subscriberState, param.batchInputMarketingEventEmailSubscriber, param.externalAccountId,  options).toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record a subscriber state by contact ids
     * @param param the request object
     */
    public recordByContactIdsWithHttpInfo(param: AttendanceSubscriberStateChangesApiRecordByContactIdsRequest, options?: Configuration): Promise<HttpInfo<BatchResponseSubscriberVidResponse>> {
        return this.api.recordByContactIdsWithHttpInfo(param.externalEventId, param.subscriberState, param.batchInputMarketingEventSubscriber, param.externalAccountId,  options).toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record a subscriber state by contact ids
     * @param param the request object
     */
    public recordByContactIds(param: AttendanceSubscriberStateChangesApiRecordByContactIdsRequest, options?: Configuration): Promise<BatchResponseSubscriberVidResponse> {
        return this.api.recordByContactIds(param.externalEventId, param.subscriberState, param.batchInputMarketingEventSubscriber, param.externalAccountId,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * The id of the marketing event to delete
     * @type string
     * @memberof BasicApiarchive
     */
    externalEventId: string
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof BasicApiarchive
     */
    externalAccountId: string
}

export interface BasicApiBatchArchiveRequest {
    /**
     * 
     * @type BatchInputMarketingEventExternalUniqueIdentifier
     * @memberof BasicApibatchArchive
     */
    batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier
}

export interface BasicApiBatchUpsertRequest {
    /**
     * 
     * @type BatchInputMarketingEventCreateRequestParams
     * @memberof BasicApibatchUpsert
     */
    batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams
}

export interface BasicApiCancelRequest {
    /**
     * The id of the marketing event to mark as cancelled
     * @type string
     * @memberof BasicApicancel
     */
    externalEventId: string
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof BasicApicancel
     */
    externalAccountId: string
}

export interface BasicApiCompleteRequest {
    /**
     * The id of the marketing event in the external event application.
     * @type string
     * @memberof BasicApicomplete
     */
    externalEventId: string
    /**
     * The accountId that is associated with this marketing event in the external event application.
     * @type string
     * @memberof BasicApicomplete
     */
    externalAccountId: string
    /**
     * 
     * @type MarketingEventCompleteRequestParams
     * @memberof BasicApicomplete
     */
    marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams
}

export interface BasicApiCreateRequest {
    /**
     * 
     * @type MarketingEventCreateRequestParams
     * @memberof BasicApicreate
     */
    marketingEventCreateRequestParams: MarketingEventCreateRequestParams
}

export interface BasicApiDoSearchRequest {
    /**
     * The id of the marketing event in the external event application
     * @type string
     * @memberof BasicApidoSearch
     */
    q: string
}

export interface BasicApiGetDetailsRequest {
    /**
     * The id of the marketing event to return
     * @type string
     * @memberof BasicApigetDetails
     */
    externalEventId: string
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof BasicApigetDetails
     */
    externalAccountId: string
}

export interface BasicApiUpdateRequest {
    /**
     * The id of the marketing event to update
     * @type string
     * @memberof BasicApiupdate
     */
    externalEventId: string
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof BasicApiupdate
     */
    externalAccountId: string
    /**
     * 
     * @type MarketingEventUpdateRequestParams
     * @memberof BasicApiupdate
     */
    marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams
}

export interface BasicApiUpsertRequest {
    /**
     * The ID of the marketing event to upsert
     * @type string
     * @memberof BasicApiupsert
     */
    externalEventId: string
    /**
     * 
     * @type MarketingEventCreateRequestParams
     * @memberof BasicApiupsert
     */
    marketingEventCreateRequestParams: MarketingEventCreateRequestParams
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an existing Marketing Event with the specified id, if one exists.
     * Delete a marketing event
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Deletes an existing Marketing Event with the specified id, if one exists.
     * Delete a marketing event
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param param the request object
     */
    public batchArchiveWithHttpInfo(param: BasicApiBatchArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.batchArchiveWithHttpInfo(param.batchInputMarketingEventExternalUniqueIdentifier,  options).toPromise();
    }

    /**
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param param the request object
     */
    public batchArchive(param: BasicApiBatchArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.batchArchive(param.batchInputMarketingEventExternalUniqueIdentifier,  options).toPromise();
    }

    /**
     * Upsert multiple marketing events. If there is an existing Marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param param the request object
     */
    public batchUpsertWithHttpInfo(param: BasicApiBatchUpsertRequest, options?: Configuration): Promise<HttpInfo<BatchResponseMarketingEventPublicDefaultResponse>> {
        return this.api.batchUpsertWithHttpInfo(param.batchInputMarketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * Upsert multiple marketing events. If there is an existing Marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param param the request object
     */
    public batchUpsert(param: BasicApiBatchUpsertRequest, options?: Configuration): Promise<BatchResponseMarketingEventPublicDefaultResponse> {
        return this.api.batchUpsert(param.batchInputMarketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param param the request object
     */
    public cancelWithHttpInfo(param: BasicApiCancelRequest, options?: Configuration): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        return this.api.cancelWithHttpInfo(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param param the request object
     */
    public cancel(param: BasicApiCancelRequest, options?: Configuration): Promise<MarketingEventDefaultResponse> {
        return this.api.cancel(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Mark a marketing event as completed
     * Mark a marketing event as completed
     * @param param the request object
     */
    public completeWithHttpInfo(param: BasicApiCompleteRequest, options?: Configuration): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        return this.api.completeWithHttpInfo(param.externalEventId, param.externalAccountId, param.marketingEventCompleteRequestParams,  options).toPromise();
    }

    /**
     * Mark a marketing event as completed
     * Mark a marketing event as completed
     * @param param the request object
     */
    public complete(param: BasicApiCompleteRequest, options?: Configuration): Promise<MarketingEventDefaultResponse> {
        return this.api.complete(param.externalEventId, param.externalAccountId, param.marketingEventCompleteRequestParams,  options).toPromise();
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: Configuration): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        return this.api.createWithHttpInfo(param.marketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: Configuration): Promise<MarketingEventDefaultResponse> {
        return this.api.create(param.marketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * Search for marketing events that have an event id that starts with the query string
     * Search for marketing events
     * @param param the request object
     */
    public doSearchWithHttpInfo(param: BasicApiDoSearchRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging>> {
        return this.api.doSearchWithHttpInfo(param.q,  options).toPromise();
    }

    /**
     * Search for marketing events that have an event id that starts with the query string
     * Search for marketing events
     * @param param the request object
     */
    public doSearch(param: BasicApiDoSearchRequest, options?: Configuration): Promise<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging> {
        return this.api.doSearch(param.q,  options).toPromise();
    }

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param param the request object
     */
    public getDetailsWithHttpInfo(param: BasicApiGetDetailsRequest, options?: Configuration): Promise<HttpInfo<MarketingEventPublicReadResponse>> {
        return this.api.getDetailsWithHttpInfo(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param param the request object
     */
    public getDetails(param: BasicApiGetDetailsRequest, options?: Configuration): Promise<MarketingEventPublicReadResponse> {
        return this.api.getDetails(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Updates an existing Marketing Event with the specified id, if one exists.
     * Update a marketing event
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: Configuration): Promise<HttpInfo<MarketingEventPublicDefaultResponse>> {
        return this.api.updateWithHttpInfo(param.externalEventId, param.externalAccountId, param.marketingEventUpdateRequestParams,  options).toPromise();
    }

    /**
     * Updates an existing Marketing Event with the specified id, if one exists.
     * Update a marketing event
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        return this.api.update(param.externalEventId, param.externalAccountId, param.marketingEventUpdateRequestParams,  options).toPromise();
    }

    /**
     * Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param param the request object
     */
    public upsertWithHttpInfo(param: BasicApiUpsertRequest, options?: Configuration): Promise<HttpInfo<MarketingEventPublicDefaultResponse>> {
        return this.api.upsertWithHttpInfo(param.externalEventId, param.marketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param param the request object
     */
    public upsert(param: BasicApiUpsertRequest, options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        return this.api.upsert(param.externalEventId, param.marketingEventCreateRequestParams,  options).toPromise();
    }

}

import { ObservableParticipantStateApi } from "./ObservableAPI";
import { ParticipantStateApiRequestFactory, ParticipantStateApiResponseProcessor} from "../apis/ParticipantStateApi";

export interface ParticipantStateApiGetParticipationsBreakdownByContactIdRequest {
    /**
     * The identifier of the Contact. It may be email or internal id.
     * @type string
     * @memberof ParticipantStateApigetParticipationsBreakdownByContactId
     */
    contactIdentifier: string
    /**
     * The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @type string
     * @memberof ParticipantStateApigetParticipationsBreakdownByContactId
     */
    state?: string
    /**
     * The limit for response size. The default value is 10, the max number is 100
     * @type number
     * @memberof ParticipantStateApigetParticipationsBreakdownByContactId
     */
    limit?: number
    /**
     * The cursor indicating the position of the last retrieved item.
     * @type string
     * @memberof ParticipantStateApigetParticipationsBreakdownByContactId
     */
    after?: string
}

export interface ParticipantStateApiGetParticipationsBreakdownByExternalEventIdRequest {
    /**
     * The accountId that is associated with this marketing event in the external event application.
     * @type string
     * @memberof ParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    externalAccountId: string
    /**
     * The id of the marketing event in the external event application.
     * @type string
     * @memberof ParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    externalEventId: string
    /**
     * The identifier of the Contact. It may be email or internal id.
     * @type string
     * @memberof ParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    contactIdentifier?: string
    /**
     * The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @type string
     * @memberof ParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    state?: string
    /**
     * The limit for response size. The default value is 10, the max number is 100
     * @type number
     * @memberof ParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    limit?: number
    /**
     * The cursor indicating the position of the last retrieved item.
     * @type string
     * @memberof ParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    after?: string
}

export interface ParticipantStateApiGetParticipationsBreakdownByMarketingEventIdRequest {
    /**
     * The internal id of the marketing event in HubSpot.
     * @type number
     * @memberof ParticipantStateApigetParticipationsBreakdownByMarketingEventId
     */
    marketingEventId: number
    /**
     * The identifier of the Contact. It may be email or internal id.
     * @type string
     * @memberof ParticipantStateApigetParticipationsBreakdownByMarketingEventId
     */
    contactIdentifier?: string
    /**
     * The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @type string
     * @memberof ParticipantStateApigetParticipationsBreakdownByMarketingEventId
     */
    state?: string
    /**
     * The limit for response size. The default value is 10, the max number is 100
     * @type number
     * @memberof ParticipantStateApigetParticipationsBreakdownByMarketingEventId
     */
    limit?: number
    /**
     * The cursor indicating the position of the last retrieved item.
     * @type string
     * @memberof ParticipantStateApigetParticipationsBreakdownByMarketingEventId
     */
    after?: string
}

export interface ParticipantStateApiGetParticipationsCountersByEventExternalIdRequest {
    /**
     * The accountId that is associated with this marketing event in the external event application.
     * @type string
     * @memberof ParticipantStateApigetParticipationsCountersByEventExternalId
     */
    externalAccountId: string
    /**
     * The id of the marketing event in the external event application.
     * @type string
     * @memberof ParticipantStateApigetParticipationsCountersByEventExternalId
     */
    externalEventId: string
}

export interface ParticipantStateApiGetParticipationsCountersByMarketingEventIdRequest {
    /**
     * The internal id of the marketing event in HubSpot.
     * @type number
     * @memberof ParticipantStateApigetParticipationsCountersByMarketingEventId
     */
    marketingEventId: number
}

export class ObjectParticipantStateApi {
    private api: ObservableParticipantStateApi

    public constructor(configuration: Configuration, requestFactory?: ParticipantStateApiRequestFactory, responseProcessor?: ParticipantStateApiResponseProcessor) {
        this.api = new ObservableParticipantStateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read Contact\'s participations by identifier - email or internal id.
     * Read participations breakdown by Contact identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByContactIdWithHttpInfo(param: ParticipantStateApiGetParticipationsBreakdownByContactIdRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        return this.api.getParticipationsBreakdownByContactIdWithHttpInfo(param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Contact\'s participations by identifier - email or internal id.
     * Read participations breakdown by Contact identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByContactId(param: ParticipantStateApiGetParticipationsBreakdownByContactIdRequest, options?: Configuration): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        return this.api.getParticipationsBreakdownByContactId(param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by externalAccountId and externalEventId pair.
     * Read participations breakdown by Marketing Event external identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByExternalEventIdWithHttpInfo(param: ParticipantStateApiGetParticipationsBreakdownByExternalEventIdRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        return this.api.getParticipationsBreakdownByExternalEventIdWithHttpInfo(param.externalAccountId, param.externalEventId, param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by externalAccountId and externalEventId pair.
     * Read participations breakdown by Marketing Event external identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByExternalEventId(param: ParticipantStateApiGetParticipationsBreakdownByExternalEventIdRequest, options?: Configuration): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        return this.api.getParticipationsBreakdownByExternalEventId(param.externalAccountId, param.externalEventId, param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by internal identifier marketingEventId.
     * Read participations breakdown by Marketing Event internal identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByMarketingEventIdWithHttpInfo(param: ParticipantStateApiGetParticipationsBreakdownByMarketingEventIdRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        return this.api.getParticipationsBreakdownByMarketingEventIdWithHttpInfo(param.marketingEventId, param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by internal identifier marketingEventId.
     * Read participations breakdown by Marketing Event internal identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByMarketingEventId(param: ParticipantStateApiGetParticipationsBreakdownByMarketingEventIdRequest, options?: Configuration): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        return this.api.getParticipationsBreakdownByMarketingEventId(param.marketingEventId, param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by externalAccountId and externalEventId pair.
     * Read participations counters by Marketing Event external identifier
     * @param param the request object
     */
    public getParticipationsCountersByEventExternalIdWithHttpInfo(param: ParticipantStateApiGetParticipationsCountersByEventExternalIdRequest, options?: Configuration): Promise<HttpInfo<AttendanceCounters>> {
        return this.api.getParticipationsCountersByEventExternalIdWithHttpInfo(param.externalAccountId, param.externalEventId,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by externalAccountId and externalEventId pair.
     * Read participations counters by Marketing Event external identifier
     * @param param the request object
     */
    public getParticipationsCountersByEventExternalId(param: ParticipantStateApiGetParticipationsCountersByEventExternalIdRequest, options?: Configuration): Promise<AttendanceCounters> {
        return this.api.getParticipationsCountersByEventExternalId(param.externalAccountId, param.externalEventId,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by internal identifier marketingEventId.
     * Read participations counters by Marketing Event internal identifier
     * @param param the request object
     */
    public getParticipationsCountersByMarketingEventIdWithHttpInfo(param: ParticipantStateApiGetParticipationsCountersByMarketingEventIdRequest, options?: Configuration): Promise<HttpInfo<AttendanceCounters>> {
        return this.api.getParticipationsCountersByMarketingEventIdWithHttpInfo(param.marketingEventId,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by internal identifier marketingEventId.
     * Read participations counters by Marketing Event internal identifier
     * @param param the request object
     */
    public getParticipationsCountersByMarketingEventId(param: ParticipantStateApiGetParticipationsCountersByMarketingEventIdRequest, options?: Configuration): Promise<AttendanceCounters> {
        return this.api.getParticipationsCountersByMarketingEventId(param.marketingEventId,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiGetAllRequest {
    /**
     * The id of the application to retrieve the settings for.
     * @type number
     * @memberof SettingsApigetAll
     */
    appId: number
}

export interface SettingsApiUpdateRequest {
    /**
     * The id of the application to update the settings for.
     * @type number
     * @memberof SettingsApiupdate
     */
    appId: number
    /**
     * 
     * @type EventDetailSettingsUrl
     * @memberof SettingsApiupdate
     */
    eventDetailSettingsUrl: EventDetailSettingsUrl
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param param the request object
     */
    public getAllWithHttpInfo(param: SettingsApiGetAllRequest, options?: Configuration): Promise<HttpInfo<EventDetailSettings>> {
        return this.api.getAllWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param param the request object
     */
    public getAll(param: SettingsApiGetAllRequest, options?: Configuration): Promise<EventDetailSettings> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param param the request object
     */
    public updateWithHttpInfo(param: SettingsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<EventDetailSettings>> {
        return this.api.updateWithHttpInfo(param.appId, param.eventDetailSettingsUrl,  options).toPromise();
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param param the request object
     */
    public update(param: SettingsApiUpdateRequest, options?: Configuration): Promise<EventDetailSettings> {
        return this.api.update(param.appId, param.eventDetailSettingsUrl,  options).toPromise();
    }

}

import { ObservableSubscriberStateChangesApi } from "./ObservableAPI";
import { SubscriberStateChangesApiRequestFactory, SubscriberStateChangesApiResponseProcessor} from "../apis/SubscriberStateChangesApi";

export interface SubscriberStateChangesApiUpsertByContactEmailRequest {
    /**
     * The ID of the marketing event
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactEmail
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactEmail
     */
    subscriberState: string
    /**
     * The account ID associated with the marketing event
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactEmail
     */
    externalAccountId: string
    /**
     * 
     * @type BatchInputMarketingEventEmailSubscriber
     * @memberof SubscriberStateChangesApiupsertByContactEmail
     */
    batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber
}

export interface SubscriberStateChangesApiUpsertByContactIdRequest {
    /**
     * The ID of the marketing event
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactId
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactId
     */
    subscriberState: string
    /**
     * The account ID associated with the marketing event
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactId
     */
    externalAccountId: string
    /**
     * 
     * @type BatchInputMarketingEventSubscriber
     * @memberof SubscriberStateChangesApiupsertByContactId
     */
    batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber
}

export class ObjectSubscriberStateChangesApi {
    private api: ObservableSubscriberStateChangesApi

    public constructor(configuration: Configuration, requestFactory?: SubscriberStateChangesApiRequestFactory, responseProcessor?: SubscriberStateChangesApiResponseProcessor) {
        this.api = new ObservableSubscriberStateChangesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param param the request object
     */
    public upsertByContactEmailWithHttpInfo(param: SubscriberStateChangesApiUpsertByContactEmailRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.upsertByContactEmailWithHttpInfo(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventEmailSubscriber,  options).toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param param the request object
     */
    public upsertByContactEmail(param: SubscriberStateChangesApiUpsertByContactEmailRequest, options?: Configuration): Promise<void> {
        return this.api.upsertByContactEmail(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventEmailSubscriber,  options).toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param param the request object
     */
    public upsertByContactIdWithHttpInfo(param: SubscriberStateChangesApiUpsertByContactIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.upsertByContactIdWithHttpInfo(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventSubscriber,  options).toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param param the request object
     */
    public upsertByContactId(param: SubscriberStateChangesApiUpsertByContactIdRequest, options?: Configuration): Promise<void> {
        return this.api.upsertByContactId(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventSubscriber,  options).toPromise();
    }

}
