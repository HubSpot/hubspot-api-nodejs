import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BatchInputMarketingEventCreateRequestParams } from '../models/BatchInputMarketingEventCreateRequestParams';
import { BatchInputMarketingEventEmailSubscriber } from '../models/BatchInputMarketingEventEmailSubscriber';
import { BatchInputMarketingEventExternalUniqueIdentifier } from '../models/BatchInputMarketingEventExternalUniqueIdentifier';
import { BatchInputMarketingEventSubscriber } from '../models/BatchInputMarketingEventSubscriber';
import { BatchResponseMarketingEventPublicDefaultResponse } from '../models/BatchResponseMarketingEventPublicDefaultResponse';
import { BatchResponseSubscriberEmailResponse } from '../models/BatchResponseSubscriberEmailResponse';
import { BatchResponseSubscriberVidResponse } from '../models/BatchResponseSubscriberVidResponse';
import { CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging } from '../models/CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { EventDetailSettings } from '../models/EventDetailSettings';
import { EventDetailSettingsUrl } from '../models/EventDetailSettingsUrl';
import { MarketingEventCompleteRequestParams } from '../models/MarketingEventCompleteRequestParams';
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
import { SubscriberEmailResponse } from '../models/SubscriberEmailResponse';
import { SubscriberVidResponse } from '../models/SubscriberVidResponse';
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
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: &#39;register&#39;, &#39;attend&#39; or &#39;cancel&#39;.
     * @param batchInputMarketingEventSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public create(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: Configuration): Promise<BatchResponseSubscriberVidResponse> {
        const result = this.api.create(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. If you set params 
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: &#39;register&#39;, &#39;attend&#39; or &#39;cancel&#39;.
     * @param batchInputMarketingEventEmailSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public createByEmail(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: Configuration): Promise<BatchResponseSubscriberEmailResponse> {
        const result = this.api.createByEmail(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, _options);
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
     */
    public archive(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * @param batchInputMarketingEventExternalUniqueIdentifier 
     */
    public archiveBatch(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Promise<void> {
        const result = this.api.archiveBatch(batchInputMarketingEventExternalUniqueIdentifier, _options);
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

    /**
     * @param marketingEventCreateRequestParams 
     */
    public create(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<MarketingEventDefaultResponse> {
        const result = this.api.create(marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * @param externalEventId 
     * @param externalAccountId 
     */
    public doCancel(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<MarketingEventDefaultResponse> {
        const result = this.api.doCancel(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * @param externalEventId 
     * @param subscriberState 
     * @param externalAccountId 
     * @param batchInputMarketingEventEmailSubscriber 
     */
    public doEmailUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Promise<void> {
        const result = this.api.doEmailUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, _options);
        return result.toPromise();
    }

    /**
     * @param q 
     */
    public doSearch(q: string, _options?: Configuration): Promise<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging> {
        const result = this.api.doSearch(q, _options);
        return result.toPromise();
    }

    /**
     * @param batchInputMarketingEventCreateRequestParams 
     */
    public doUpsert(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Promise<BatchResponseMarketingEventPublicDefaultResponse> {
        const result = this.api.doUpsert(batchInputMarketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * @param externalEventId 
     * @param subscriberState 
     * @param externalAccountId 
     * @param batchInputMarketingEventSubscriber 
     */
    public doUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Promise<void> {
        const result = this.api.doUpsertById(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, _options);
        return result.toPromise();
    }

    /**
     * @param externalEventId 
     * @param externalAccountId 
     */
    public getById(externalEventId: string, externalAccountId: string, _options?: Configuration): Promise<MarketingEventPublicReadResponse> {
        const result = this.api.getById(externalEventId, externalAccountId, _options);
        return result.toPromise();
    }

    /**
     * @param externalEventId 
     * @param marketingEventCreateRequestParams 
     */
    public replace(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        const result = this.api.replace(externalEventId, marketingEventCreateRequestParams, _options);
        return result.toPromise();
    }

    /**
     * @param externalEventId 
     * @param externalAccountId 
     * @param marketingEventUpdateRequestParams 
     */
    public update(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        const result = this.api.update(externalEventId, externalAccountId, marketingEventUpdateRequestParams, _options);
        return result.toPromise();
    }


}



import { ObservableSettingsExternalApi } from './ObservableAPI';

import { SettingsExternalApiRequestFactory, SettingsExternalApiResponseProcessor} from "../apis/SettingsExternalApi";
export class PromiseSettingsExternalApi {
    private api: ObservableSettingsExternalApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsExternalApiRequestFactory,
        responseProcessor?: SettingsExternalApiResponseProcessor
    ) {
        this.api = new ObservableSettingsExternalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param appId 
     * @param eventDetailSettingsUrl 
     */
    public create(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: Configuration): Promise<EventDetailSettings> {
        const result = this.api.create(appId, eventDetailSettingsUrl, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
     */
    public getAll(appId: number, _options?: Configuration): Promise<EventDetailSettings> {
        const result = this.api.getAll(appId, _options);
        return result.toPromise();
    }


}



