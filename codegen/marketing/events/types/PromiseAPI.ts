import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BatchInputMarketingEventCreateRequestParams } from '../models/BatchInputMarketingEventCreateRequestParams';
import { BatchInputMarketingEventEmailSubscriber } from '../models/BatchInputMarketingEventEmailSubscriber';
import { BatchInputMarketingEventExternalUniqueIdentifier } from '../models/BatchInputMarketingEventExternalUniqueIdentifier';
import { BatchInputMarketingEventSubscriber } from '../models/BatchInputMarketingEventSubscriber';
import { BatchResponseMarketingEventPublicDefaultResponse } from '../models/BatchResponseMarketingEventPublicDefaultResponse';
import { CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging } from '../models/CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { EventDetailSettings } from '../models/EventDetailSettings';
import { EventDetailSettingsUrl } from '../models/EventDetailSettingsUrl';
import { MarketingEventCreateRequestParams } from '../models/MarketingEventCreateRequestParams';
import { MarketingEventDefaultResponse } from '../models/MarketingEventDefaultResponse';
import { MarketingEventEmailSubscriber } from '../models/MarketingEventEmailSubscriber';
import { MarketingEventExternalUniqueIdentifier } from '../models/MarketingEventExternalUniqueIdentifier';
import { MarketingEventPublicDefaultResponse } from '../models/MarketingEventPublicDefaultResponse';
import { MarketingEventPublicReadResponse } from '../models/MarketingEventPublicReadResponse';
import { MarketingEventSubscriber } from '../models/MarketingEventSubscriber';
import { MarketingEventUpdateRequestParams } from '../models/MarketingEventUpdateRequestParams';
import { ModelError } from '../models/ModelError';
import { PropertyValue } from '../models/PropertyValue';
import { StandardError } from '../models/StandardError';
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
    public archive(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(externalEventId, externalAccountId, _options);
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
    public archive(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Promise<void> {
        const result = this.api.archive(batchInputMarketingEventExternalUniqueIdentifier, _options);
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
     * @param q The partial event id to search for
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
    public create(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: Configuration): Promise<EventDetailSettings> {
        const result = this.api.create(appId, eventDetailSettingsUrl, _options);
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
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses.
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
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
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



