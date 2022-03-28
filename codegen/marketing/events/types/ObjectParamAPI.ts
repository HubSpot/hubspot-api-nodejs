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

export interface BasicApiCreateRequest {
    /**
     * The details of the marketing event to create
     * @type MarketingEventCreateRequestParams
     * @memberof BasicApicreate
     */
    marketingEventCreateRequestParams: MarketingEventCreateRequestParams
}

export interface BasicApiDoCancelRequest {
    /**
     * The id of the marketing event to mark as cancelled
     * @type string
     * @memberof BasicApidoCancel
     */
    externalEventId: string
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof BasicApidoCancel
     */
    externalAccountId: string
}

export interface BasicApiGetByIdRequest {
    /**
     * The id of the marketing event to return
     * @type string
     * @memberof BasicApigetById
     */
    externalEventId: string
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof BasicApigetById
     */
    externalAccountId: string
}

export interface BasicApiReplaceRequest {
    /**
     * The id of the marketing event to upsert
     * @type string
     * @memberof BasicApireplace
     */
    externalEventId: string
    /**
     * The details of the marketing event to upsert
     * @type MarketingEventCreateRequestParams
     * @memberof BasicApireplace
     */
    marketingEventCreateRequestParams: MarketingEventCreateRequestParams
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
     * The details of the marketing event to update
     * @type MarketingEventUpdateRequestParams
     * @memberof BasicApiupdate
     */
    marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams
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
    public archive(param: BasicApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.externalEventId, param.externalAccountId,  options).toPromise();
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
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param param the request object
     */
    public doCancel(param: BasicApiDoCancelRequest, options?: Configuration): Promise<MarketingEventDefaultResponse> {
        return this.api.doCancel(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Returns the details of the Marketing Event with the specified id, if one exists.
     * Get a marketing event
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: Configuration): Promise<MarketingEventPublicReadResponse> {
        return this.api.getById(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Upsets a Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param param the request object
     */
    public replace(param: BasicApiReplaceRequest, options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        return this.api.replace(param.externalEventId, param.marketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * Updates an existing Marketing Event with the specified id, if one exists.
     * Update a marketing event
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        return this.api.update(param.externalEventId, param.externalAccountId, param.marketingEventUpdateRequestParams,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiArchiveRequest {
    /**
     * The details of the marketing events to delete
     * @type BatchInputMarketingEventExternalUniqueIdentifier
     * @memberof BatchApiarchive
     */
    batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier
}

export interface BatchApiDoUpsertRequest {
    /**
     * The details of the marketing events to upsert
     * @type BatchInputMarketingEventCreateRequestParams
     * @memberof BatchApidoUpsert
     */
    batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bulk delete a number of marketing events in HubSpot
     * Delete multiple marketing events
     * @param param the request object
     */
    public archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.batchInputMarketingEventExternalUniqueIdentifier,  options).toPromise();
    }

    /**
     * Upset multiple Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
     * Create or update multiple marketing events
     * @param param the request object
     */
    public doUpsert(param: BatchApiDoUpsertRequest, options?: Configuration): Promise<BatchResponseMarketingEventPublicDefaultResponse> {
        return this.api.doUpsert(param.batchInputMarketingEventCreateRequestParams,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiDoSearchRequest {
    /**
     * The partial event id to search for
     * @type string
     * @memberof SearchApidoSearch
     */
    q: string
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search for marketing events that have an event id that starts with the query string
     * Search for marketing events
     * @param param the request object
     */
    public doSearch(param: SearchApiDoSearchRequest, options?: Configuration): Promise<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging> {
        return this.api.doSearch(param.q,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiCreateRequest {
    /**
     * The id of the application to update the settings for.
     * @type number
     * @memberof SettingsApicreate
     */
    appId: number
    /**
     * The new application settings
     * @type EventDetailSettingsUrl
     * @memberof SettingsApicreate
     */
    eventDetailSettingsUrl: EventDetailSettingsUrl
}

export interface SettingsApiGetAllRequest {
    /**
     * The id of the application to retrieve the settings for.
     * @type number
     * @memberof SettingsApigetAll
     */
    appId: number
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param param the request object
     */
    public create(param: SettingsApiCreateRequest, options?: Configuration): Promise<EventDetailSettings> {
        return this.api.create(param.appId, param.eventDetailSettingsUrl,  options).toPromise();
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param param the request object
     */
    public getAll(param: SettingsApiGetAllRequest, options?: Configuration): Promise<EventDetailSettings> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

}

import { ObservableSubscriberStateChangesApi } from "./ObservableAPI";
import { SubscriberStateChangesApiRequestFactory, SubscriberStateChangesApiResponseProcessor} from "../apis/SubscriberStateChangesApi";

export interface SubscriberStateChangesApiDoEmailUpsertByIdRequest {
    /**
     * The id of the marketing event
     * @type string
     * @memberof SubscriberStateChangesApidoEmailUpsertById
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event
     * @type string
     * @memberof SubscriberStateChangesApidoEmailUpsertById
     */
    subscriberState: string
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof SubscriberStateChangesApidoEmailUpsertById
     */
    externalAccountId: string
    /**
     * The details of the contacts to subscribe to the event
     * @type BatchInputMarketingEventEmailSubscriber
     * @memberof SubscriberStateChangesApidoEmailUpsertById
     */
    batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber
}

export interface SubscriberStateChangesApiDoUpsertByIdRequest {
    /**
     * The id of the marketing event
     * @type string
     * @memberof SubscriberStateChangesApidoUpsertById
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event
     * @type string
     * @memberof SubscriberStateChangesApidoUpsertById
     */
    subscriberState: string
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof SubscriberStateChangesApidoUpsertById
     */
    externalAccountId: string
    /**
     * The details of the contacts to subscribe to the event
     * @type BatchInputMarketingEventSubscriber
     * @memberof SubscriberStateChangesApidoUpsertById
     */
    batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber
}

export class ObjectSubscriberStateChangesApi {
    private api: ObservableSubscriberStateChangesApi

    public constructor(configuration: Configuration, requestFactory?: SubscriberStateChangesApiRequestFactory, responseProcessor?: SubscriberStateChangesApiResponseProcessor) {
        this.api = new ObservableSubscriberStateChangesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses.
     * Record
     * @param param the request object
     */
    public doEmailUpsertById(param: SubscriberStateChangesApiDoEmailUpsertByIdRequest, options?: Configuration): Promise<void> {
        return this.api.doEmailUpsertById(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventEmailSubscriber,  options).toPromise();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record
     * @param param the request object
     */
    public doUpsertById(param: SubscriberStateChangesApiDoUpsertByIdRequest, options?: Configuration): Promise<void> {
        return this.api.doUpsertById(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventSubscriber,  options).toPromise();
    }

}
