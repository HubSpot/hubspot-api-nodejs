import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public createWithHttpInfo(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: Configuration): Promise<HttpInfo<BatchResponseSubscriberVidResponse>> {
        const result = this.api.createWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public create(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: Configuration): Promise<BatchResponseSubscriberVidResponse> {
        const result = this.api.create(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public createByEmailWithHttpInfo(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: Configuration): Promise<HttpInfo<BatchResponseSubscriberEmailResponse>> {
        const result = this.api.createByEmailWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public createByEmail(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: Configuration): Promise<BatchResponseSubscriberEmailResponse> {
        const result = this.api.createByEmail(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options);
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
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param marketingEventCreateRequestParams The details of the marketing event to create
     */
    public createWithHttpInfo(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        const result = this.api.createWithHttpInfo(marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param marketingEventCreateRequestParams The details of the marketing event to create
     */
    public create(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<MarketingEventDefaultResponse> {
        const result = this.api.create(marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event to mark as cancelled
     * @param externalAccountId The account id associated with the marketing event
     */
    public doCancelWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        const result = this.api.doCancelWithHttpInfo(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event to mark as cancelled
     * @param externalAccountId The account id associated with the marketing event
     */
    public doCancel(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<MarketingEventDefaultResponse> {
        const result = this.api.doCancel(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param externalEventId The id of the marketing event to return
     * @param externalAccountId The account id associated with the marketing event
     */
    public getByIdWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<HttpInfo<MarketingEventPublicReadResponse>> {
        const result = this.api.getByIdWithHttpInfo(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param externalEventId The id of the marketing event to return
     * @param externalAccountId The account id associated with the marketing event
     */
    public getById(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<MarketingEventPublicReadResponse> {
        const result = this.api.getById(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Upsets a Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The id of the marketing event to upsert
     * @param marketingEventCreateRequestParams The details of the marketing event to upsert
     */
    public replaceWithHttpInfo(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<HttpInfo<MarketingEventPublicDefaultResponse>> {
        const result = this.api.replaceWithHttpInfo(externalEventId, marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Upsets a Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The id of the marketing event to upsert
     * @param marketingEventCreateRequestParams The details of the marketing event to upsert
     */
    public replace(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        const result = this.api.replace(externalEventId, marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing Marketing Event with the specified id, if one exists.
     * Update a marketing event
     * @param externalEventId The id of the marketing event to update
     * @param externalAccountId The account id associated with the marketing event
     * @param marketingEventUpdateRequestParams The details of the marketing event to update
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
     * @param marketingEventUpdateRequestParams The details of the marketing event to update
     */
    public update(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        const result = this.api.update(externalEventId, externalAccountId, marketingEventUpdateRequestParams, _options);
        return result.toPromise();
    }


}



import { ObservableBatchApi } from './ObservableAPI';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class PromiseBatchApi {
    private api: ObservableBatchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param batchInputMarketingEventExternalUniqueIdentifier The details of the marketing events to delete
     */
    public archiveBatchWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveBatchWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier, _options);
        return result.toPromise();
    }

    /**
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param batchInputMarketingEventExternalUniqueIdentifier The details of the marketing events to delete
     */
    public archiveBatch(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Promise<void> {
        const result = this.api.archiveBatch(batchInputMarketingEventExternalUniqueIdentifier, _options);
        return result.toPromise();
    }

    /**
     * Upset multiple Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param batchInputMarketingEventCreateRequestParams The details of the marketing events to upsert
     */
    public doUpsertWithHttpInfo(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Promise<HttpInfo<BatchResponseMarketingEventPublicDefaultResponse>> {
        const result = this.api.doUpsertWithHttpInfo(batchInputMarketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * Upset multiple Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param batchInputMarketingEventCreateRequestParams The details of the marketing events to upsert
     */
    public doUpsert(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Promise<BatchResponseMarketingEventPublicDefaultResponse> {
        const result = this.api.doUpsert(batchInputMarketingEventCreateRequestParams, _options);
        return result.toPromise();
    }


}



import { ObservableMarketingEventsExternalApi } from './ObservableAPI';

import { MarketingEventsExternalApiRequestFactory, MarketingEventsExternalApiResponseProcessor} from "../apis/MarketingEventsExternalApi";
export class PromiseMarketingEventsExternalApi {
    private api: ObservableMarketingEventsExternalApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MarketingEventsExternalApiRequestFactory,
        responseProcessor?: MarketingEventsExternalApiResponseProcessor
    ) {
        this.api = new ObservableMarketingEventsExternalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param externalEventId 
     * @param externalAccountId 
     * @param marketingEventCompleteRequestParams 
     */
    public completeWithHttpInfo(externalEventId: string, externalAccountId: string, marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams, _options?: Configuration): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        const result = this.api.completeWithHttpInfo(externalEventId, externalAccountId, marketingEventCompleteRequestParams, _options);
        return result.toPromise();
    }

    /**
     * @param externalEventId 
     * @param externalAccountId 
     * @param marketingEventCompleteRequestParams 
     */
    public complete(externalEventId: string, externalAccountId: string, marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams, _options?: Configuration): Promise<MarketingEventDefaultResponse> {
        const result = this.api.complete(externalEventId, externalAccountId, marketingEventCompleteRequestParams, _options);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
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
     * Create or update the current settings for the application.
     * Update the application settings
     * @param appId The id of the application to update the settings for.
     * @param eventDetailSettingsUrl The new application settings
     */
    public createWithHttpInfo(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: Configuration): Promise<HttpInfo<EventDetailSettings>> {
        const result = this.api.createWithHttpInfo(appId, eventDetailSettingsUrl, _options);
        return result.toPromise();
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param appId The id of the application to update the settings for.
     * @param eventDetailSettingsUrl The new application settings
     */
    public create(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: Configuration): Promise<EventDetailSettings> {
        const result = this.api.create(appId, eventDetailSettingsUrl, _options);
        return result.toPromise();
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
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
     * @param externalAccountId The account id associated with the marketing event
     * @param batchInputMarketingEventEmailSubscriber The details of the contacts to subscribe to the event
     */
    public doEmailUpsertByIdWithHttpInfo(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.doEmailUpsertByIdWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options);
        return result.toPromise();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
     * @param externalAccountId The account id associated with the marketing event
     * @param batchInputMarketingEventEmailSubscriber The details of the contacts to subscribe to the event
     */
    public doEmailUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Promise<void> {
        const result = this.api.doEmailUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options);
        return result.toPromise();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids. Note that the contact must already exist in HubSpot; a contact will not be create.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
     * @param externalAccountId The account id associated with the marketing event
     * @param batchInputMarketingEventSubscriber The details of the contacts to subscribe to the event
     */
    public doUpsertByIdWithHttpInfo(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.doUpsertByIdWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options);
        return result.toPromise();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids. Note that the contact must already exist in HubSpot; a contact will not be create.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
     * @param externalAccountId The account id associated with the marketing event
     * @param batchInputMarketingEventSubscriber The details of the contacts to subscribe to the event
     */
    public doUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Promise<void> {
        const result = this.api.doUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options);
        return result.toPromise();
    }


}



