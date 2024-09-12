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
import { ObservableAttendanceSubscriberStateChangesApi } from './ObservableAPI';

import { AttendanceSubscriberStateChangesApiRequestFactory, AttendanceSubscriberStateChangesApiResponseProcessor} from "../apis/AttendanceSubscriberStateChangesApi";
export class PromiseAttendanceSubscriberStateChangesApi {
    private api: ObservableAttendanceSubscriberStateChangesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AttendanceSubscriberStateChangesApiRequestFactory,
        responseProcessor?: AttendanceSubscriberStateChangesApiResponseProcessor
    ) {
        this.api = new ObservableAttendanceSubscriberStateChangesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber 
     * @param externalAccountId The account id associated with the marketing event
     */
    public recordByContactEmailsWithHttpInfo(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: Configuration): Promise<HttpInfo<BatchResponseSubscriberEmailResponse>> {
        const result = this.api.recordByContactEmailsWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber 
     * @param externalAccountId The account id associated with the marketing event
     */
    public recordByContactEmails(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: Configuration): Promise<BatchResponseSubscriberEmailResponse> {
        const result = this.api.recordByContactEmails(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record a subscriber state by contact ids
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber 
     * @param externalAccountId The account id associated with the marketing event
     */
    public recordByContactIdsWithHttpInfo(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: Configuration): Promise<HttpInfo<BatchResponseSubscriberVidResponse>> {
        const result = this.api.recordByContactIdsWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record a subscriber state by contact ids
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber 
     * @param externalAccountId The account id associated with the marketing event
     */
    public recordByContactIds(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: Configuration): Promise<BatchResponseSubscriberVidResponse> {
        const result = this.api.recordByContactIds(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options);
        return result.toPromise();
    }


}



import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an existing Marketing Event with the specified id, if one exists.
     * Delete a marketing event
     * @param externalEventId The id of the marketing event to delete
     * @param externalAccountId The account id associated with the marketing event
     */
    public archiveWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Deletes an existing Marketing Event with the specified id, if one exists.
     * Delete a marketing event
     * @param externalEventId The id of the marketing event to delete
     * @param externalAccountId The account id associated with the marketing event
     */
    public archive(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param batchInputMarketingEventExternalUniqueIdentifier 
     */
    public batchArchiveWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.batchArchiveWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier, _options);
        return result.toPromise();
    }

    /**
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param batchInputMarketingEventExternalUniqueIdentifier 
     */
    public batchArchive(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Promise<void> {
        const result = this.api.batchArchive(batchInputMarketingEventExternalUniqueIdentifier, _options);
        return result.toPromise();
    }

    /**
     * Upsert multiple marketing events. If there is an existing Marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param batchInputMarketingEventCreateRequestParams 
     */
    public batchUpsertWithHttpInfo(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Promise<HttpInfo<BatchResponseMarketingEventPublicDefaultResponse>> {
        const result = this.api.batchUpsertWithHttpInfo(batchInputMarketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Upsert multiple marketing events. If there is an existing Marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param batchInputMarketingEventCreateRequestParams 
     */
    public batchUpsert(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Promise<BatchResponseMarketingEventPublicDefaultResponse> {
        const result = this.api.batchUpsert(batchInputMarketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event to mark as cancelled
     * @param externalAccountId The account id associated with the marketing event
     */
    public cancelWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        const result = this.api.cancelWithHttpInfo(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event to mark as cancelled
     * @param externalAccountId The account id associated with the marketing event
     */
    public cancel(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<MarketingEventDefaultResponse> {
        const result = this.api.cancel(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Mark a marketing event as completed
     * Mark a marketing event as completed
     * @param externalEventId The id of the marketing event in the external event application.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param marketingEventCompleteRequestParams 
     */
    public completeWithHttpInfo(externalEventId: string, externalAccountId: string, marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams, _options?: Configuration): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        const result = this.api.completeWithHttpInfo(externalEventId, externalAccountId, marketingEventCompleteRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Mark a marketing event as completed
     * Mark a marketing event as completed
     * @param externalEventId The id of the marketing event in the external event application.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param marketingEventCompleteRequestParams 
     */
    public complete(externalEventId: string, externalAccountId: string, marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams, _options?: Configuration): Promise<MarketingEventDefaultResponse> {
        const result = this.api.complete(externalEventId, externalAccountId, marketingEventCompleteRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param marketingEventCreateRequestParams 
     */
    public createWithHttpInfo(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        const result = this.api.createWithHttpInfo(marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param marketingEventCreateRequestParams 
     */
    public create(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<MarketingEventDefaultResponse> {
        const result = this.api.create(marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Search for marketing events that have an event id that starts with the query string
     * Search for marketing events
     * @param q The id of the marketing event in the external event application
     */
    public doSearchWithHttpInfo(q: string, _options?: Configuration): Promise<HttpInfo<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging>> {
        const result = this.api.doSearchWithHttpInfo(q, _options);
        return result.toPromise();
    }

    /**
     * Search for marketing events that have an event id that starts with the query string
     * Search for marketing events
     * @param q The id of the marketing event in the external event application
     */
    public doSearch(q: string, _options?: Configuration): Promise<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging> {
        const result = this.api.doSearch(q, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param externalEventId The id of the marketing event to return
     * @param externalAccountId The account id associated with the marketing event
     */
    public getDetailsWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<HttpInfo<MarketingEventPublicReadResponse>> {
        const result = this.api.getDetailsWithHttpInfo(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param externalEventId The id of the marketing event to return
     * @param externalAccountId The account id associated with the marketing event
     */
    public getDetails(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<MarketingEventPublicReadResponse> {
        const result = this.api.getDetails(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing Marketing Event with the specified id, if one exists.
     * Update a marketing event
     * @param externalEventId The id of the marketing event to update
     * @param externalAccountId The account id associated with the marketing event
     * @param marketingEventUpdateRequestParams 
     */
    public updateWithHttpInfo(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: Configuration): Promise<HttpInfo<MarketingEventPublicDefaultResponse>> {
        const result = this.api.updateWithHttpInfo(externalEventId, externalAccountId, marketingEventUpdateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing Marketing Event with the specified id, if one exists.
     * Update a marketing event
     * @param externalEventId The id of the marketing event to update
     * @param externalAccountId The account id associated with the marketing event
     * @param marketingEventUpdateRequestParams 
     */
    public update(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        const result = this.api.update(externalEventId, externalAccountId, marketingEventUpdateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The ID of the marketing event to upsert
     * @param marketingEventCreateRequestParams 
     */
    public upsertWithHttpInfo(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<HttpInfo<MarketingEventPublicDefaultResponse>> {
        const result = this.api.upsertWithHttpInfo(externalEventId, marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The ID of the marketing event to upsert
     * @param marketingEventCreateRequestParams 
     */
    public upsert(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        const result = this.api.upsert(externalEventId, marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }


}



import { ObservableParticipantStateApi } from './ObservableAPI';

import { ParticipantStateApiRequestFactory, ParticipantStateApiResponseProcessor} from "../apis/ParticipantStateApi";
export class PromiseParticipantStateApi {
    private api: ObservableParticipantStateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ParticipantStateApiRequestFactory,
        responseProcessor?: ParticipantStateApiResponseProcessor
    ) {
        this.api = new ObservableParticipantStateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read Contact\'s participations by identifier - email or internal id.
     * Read participations breakdown by Contact identifier
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param state The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param limit The limit for response size. The default value is 10, the max number is 100
     * @param after The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByContactIdWithHttpInfo(contactIdentifier: string, state?: string, limit?: number, after?: string, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        const result = this.api.getParticipationsBreakdownByContactIdWithHttpInfo(contactIdentifier, state, limit, after, _options);
        return result.toPromise();
    }

    /**
     * Read Contact\'s participations by identifier - email or internal id.
     * Read participations breakdown by Contact identifier
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param state The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param limit The limit for response size. The default value is 10, the max number is 100
     * @param after The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByContactId(contactIdentifier: string, state?: string, limit?: number, after?: string, _options?: Configuration): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        const result = this.api.getParticipationsBreakdownByContactId(contactIdentifier, state, limit, after, _options);
        return result.toPromise();
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
    public getParticipationsBreakdownByExternalEventIdWithHttpInfo(externalAccountId: string, externalEventId: string, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        const result = this.api.getParticipationsBreakdownByExternalEventIdWithHttpInfo(externalAccountId, externalEventId, contactIdentifier, state, limit, after, _options);
        return result.toPromise();
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
    public getParticipationsBreakdownByExternalEventId(externalAccountId: string, externalEventId: string, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: Configuration): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        const result = this.api.getParticipationsBreakdownByExternalEventId(externalAccountId, externalEventId, contactIdentifier, state, limit, after, _options);
        return result.toPromise();
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
    public getParticipationsBreakdownByMarketingEventIdWithHttpInfo(marketingEventId: number, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        const result = this.api.getParticipationsBreakdownByMarketingEventIdWithHttpInfo(marketingEventId, contactIdentifier, state, limit, after, _options);
        return result.toPromise();
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
    public getParticipationsBreakdownByMarketingEventId(marketingEventId: number, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: Configuration): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        const result = this.api.getParticipationsBreakdownByMarketingEventId(marketingEventId, contactIdentifier, state, limit, after, _options);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by externalAccountId and externalEventId pair.
     * Read participations counters by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public getParticipationsCountersByEventExternalIdWithHttpInfo(externalAccountId: string, externalEventId: string, _options?: Configuration): Promise<HttpInfo<AttendanceCounters>> {
        const result = this.api.getParticipationsCountersByEventExternalIdWithHttpInfo(externalAccountId, externalEventId, _options);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by externalAccountId and externalEventId pair.
     * Read participations counters by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public getParticipationsCountersByEventExternalId(externalAccountId: string, externalEventId: string, _options?: Configuration): Promise<AttendanceCounters> {
        const result = this.api.getParticipationsCountersByEventExternalId(externalAccountId, externalEventId, _options);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by internal identifier marketingEventId.
     * Read participations counters by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public getParticipationsCountersByMarketingEventIdWithHttpInfo(marketingEventId: number, _options?: Configuration): Promise<HttpInfo<AttendanceCounters>> {
        const result = this.api.getParticipationsCountersByMarketingEventIdWithHttpInfo(marketingEventId, _options);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by internal identifier marketingEventId.
     * Read participations counters by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public getParticipationsCountersByMarketingEventId(marketingEventId: number, _options?: Configuration): Promise<AttendanceCounters> {
        const result = this.api.getParticipationsCountersByMarketingEventId(marketingEventId, _options);
        return result.toPromise();
    }


}



import { ObservableSettingsApi } from './ObservableAPI';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class PromiseSettingsApi {
    private api: ObservableSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param appId The id of the application to retrieve the settings for.
     */
    public getAllWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<EventDetailSettings>> {
        const result = this.api.getAllWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param appId The id of the application to retrieve the settings for.
     */
    public getAll(appId: number, _options?: Configuration): Promise<EventDetailSettings> {
        const result = this.api.getAll(appId, _options);
        return result.toPromise();
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param appId The id of the application to update the settings for.
     * @param eventDetailSettingsUrl 
     */
    public updateWithHttpInfo(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: Configuration): Promise<HttpInfo<EventDetailSettings>> {
        const result = this.api.updateWithHttpInfo(appId, eventDetailSettingsUrl, _options);
        return result.toPromise();
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param appId The id of the application to update the settings for.
     * @param eventDetailSettingsUrl 
     */
    public update(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: Configuration): Promise<EventDetailSettings> {
        const result = this.api.update(appId, eventDetailSettingsUrl, _options);
        return result.toPromise();
    }


}



import { ObservableSubscriberStateChangesApi } from './ObservableAPI';

import { SubscriberStateChangesApiRequestFactory, SubscriberStateChangesApiResponseProcessor} from "../apis/SubscriberStateChangesApi";
export class PromiseSubscriberStateChangesApi {
    private api: ObservableSubscriberStateChangesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriberStateChangesApiRequestFactory,
        responseProcessor?: SubscriberStateChangesApiResponseProcessor
    ) {
        this.api = new ObservableSubscriberStateChangesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param externalEventId The ID of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The account ID associated with the marketing event
     * @param batchInputMarketingEventEmailSubscriber 
     */
    public upsertByContactEmailWithHttpInfo(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.upsertByContactEmailWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options);
        return result.toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param externalEventId The ID of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The account ID associated with the marketing event
     * @param batchInputMarketingEventEmailSubscriber 
     */
    public upsertByContactEmail(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Promise<void> {
        const result = this.api.upsertByContactEmail(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options);
        return result.toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param externalEventId The ID of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The account ID associated with the marketing event
     * @param batchInputMarketingEventSubscriber 
     */
    public upsertByContactIdWithHttpInfo(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.upsertByContactIdWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options);
        return result.toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param externalEventId The ID of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The account ID associated with the marketing event
     * @param batchInputMarketingEventSubscriber 
     */
    public upsertByContactId(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Promise<void> {
        const result = this.api.upsertByContactId(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options);
        return result.toPromise();
    }


}



