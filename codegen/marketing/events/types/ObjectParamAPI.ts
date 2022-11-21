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

import { ObservableAttendanceSubscriberStateChangesApi } from "./ObservableAPI";
import { AttendanceSubscriberStateChangesApiRequestFactory, AttendanceSubscriberStateChangesApiResponseProcessor} from "../apis/AttendanceSubscriberStateChangesApi";

export interface AttendanceSubscriberStateChangesApiCreateRequest {
    /**
     * The id of the marketing event
     * @type string
     * @memberof AttendanceSubscriberStateChangesApicreate
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event. For example: &#39;register&#39;, &#39;attend&#39; or &#39;cancel&#39;.
     * @type string
     * @memberof AttendanceSubscriberStateChangesApicreate
     */
    subscriberState: string
    /**
     * The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @type BatchInputMarketingEventSubscriber
     * @memberof AttendanceSubscriberStateChangesApicreate
     */
    batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof AttendanceSubscriberStateChangesApicreate
     */
    externalAccountId?: string
}

export interface AttendanceSubscriberStateChangesApiCreateByEmailRequest {
    /**
     * The id of the marketing event
     * @type string
     * @memberof AttendanceSubscriberStateChangesApicreateByEmail
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event. For example: &#39;register&#39;, &#39;attend&#39; or &#39;cancel&#39;.
     * @type string
     * @memberof AttendanceSubscriberStateChangesApicreateByEmail
     */
    subscriberState: string
    /**
     * The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @type BatchInputMarketingEventEmailSubscriber
     * @memberof AttendanceSubscriberStateChangesApicreateByEmail
     */
    batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber
    /**
     * The account id associated with the marketing event
     * @type string
     * @memberof AttendanceSubscriberStateChangesApicreateByEmail
     */
    externalAccountId?: string
}

export class ObjectAttendanceSubscriberStateChangesApi {
    private api: ObservableAttendanceSubscriberStateChangesApi

    public constructor(configuration: Configuration, requestFactory?: AttendanceSubscriberStateChangesApiRequestFactory, responseProcessor?: AttendanceSubscriberStateChangesApiResponseProcessor) {
        this.api = new ObservableAttendanceSubscriberStateChangesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record
     * @param param the request object
     */
    public create(param: AttendanceSubscriberStateChangesApiCreateRequest, options?: Configuration): Promise<BatchResponseSubscriberVidResponse> {
        return this.api.create(param.externalEventId, param.subscriberState, param.batchInputMarketingEventSubscriber, param.externalAccountId,  options).toPromise();
    }

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. If you set params 
     * Record
     * @param param the request object
     */
    public createByEmail(param: AttendanceSubscriberStateChangesApiCreateByEmailRequest, options?: Configuration): Promise<BatchResponseSubscriberEmailResponse> {
        return this.api.createByEmail(param.externalEventId, param.subscriberState, param.batchInputMarketingEventEmailSubscriber, param.externalAccountId,  options).toPromise();
    }

}

import { ObservableMarketingEventsExternalApi } from "./ObservableAPI";
import { MarketingEventsExternalApiRequestFactory, MarketingEventsExternalApiResponseProcessor} from "../apis/MarketingEventsExternalApi";

export interface MarketingEventsExternalApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApiarchive
     */
    externalEventId: string
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApiarchive
     */
    externalAccountId: string
}

export interface MarketingEventsExternalApiArchiveBatchRequest {
    /**
     * 
     * @type BatchInputMarketingEventExternalUniqueIdentifier
     * @memberof MarketingEventsExternalApiarchiveBatch
     */
    batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier
}

export interface MarketingEventsExternalApiCompleteRequest {
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApicomplete
     */
    externalEventId: string
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApicomplete
     */
    externalAccountId: string
    /**
     * 
     * @type MarketingEventCompleteRequestParams
     * @memberof MarketingEventsExternalApicomplete
     */
    marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams
}

export interface MarketingEventsExternalApiCreateRequest {
    /**
     * 
     * @type MarketingEventCreateRequestParams
     * @memberof MarketingEventsExternalApicreate
     */
    marketingEventCreateRequestParams: MarketingEventCreateRequestParams
}

export interface MarketingEventsExternalApiDoCancelRequest {
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApidoCancel
     */
    externalEventId: string
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApidoCancel
     */
    externalAccountId: string
}

export interface MarketingEventsExternalApiDoEmailUpsertByIdRequest {
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApidoEmailUpsertById
     */
    externalEventId: string
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApidoEmailUpsertById
     */
    subscriberState: string
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApidoEmailUpsertById
     */
    externalAccountId: string
    /**
     * 
     * @type BatchInputMarketingEventEmailSubscriber
     * @memberof MarketingEventsExternalApidoEmailUpsertById
     */
    batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber
}

export interface MarketingEventsExternalApiDoSearchRequest {
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApidoSearch
     */
    q: string
}

export interface MarketingEventsExternalApiDoUpsertRequest {
    /**
     * 
     * @type BatchInputMarketingEventCreateRequestParams
     * @memberof MarketingEventsExternalApidoUpsert
     */
    batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams
}

export interface MarketingEventsExternalApiDoUpsertByIdRequest {
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApidoUpsertById
     */
    externalEventId: string
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApidoUpsertById
     */
    subscriberState: string
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApidoUpsertById
     */
    externalAccountId: string
    /**
     * 
     * @type BatchInputMarketingEventSubscriber
     * @memberof MarketingEventsExternalApidoUpsertById
     */
    batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber
}

export interface MarketingEventsExternalApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApigetById
     */
    externalEventId: string
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApigetById
     */
    externalAccountId: string
}

export interface MarketingEventsExternalApiReplaceRequest {
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApireplace
     */
    externalEventId: string
    /**
     * 
     * @type MarketingEventCreateRequestParams
     * @memberof MarketingEventsExternalApireplace
     */
    marketingEventCreateRequestParams: MarketingEventCreateRequestParams
}

export interface MarketingEventsExternalApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApiupdate
     */
    externalEventId: string
    /**
     * 
     * @type string
     * @memberof MarketingEventsExternalApiupdate
     */
    externalAccountId: string
    /**
     * 
     * @type MarketingEventUpdateRequestParams
     * @memberof MarketingEventsExternalApiupdate
     */
    marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams
}

export class ObjectMarketingEventsExternalApi {
    private api: ObservableMarketingEventsExternalApi

    public constructor(configuration: Configuration, requestFactory?: MarketingEventsExternalApiRequestFactory, responseProcessor?: MarketingEventsExternalApiResponseProcessor) {
        this.api = new ObservableMarketingEventsExternalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public archive(param: MarketingEventsExternalApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archiveBatch(param: MarketingEventsExternalApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputMarketingEventExternalUniqueIdentifier,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public complete(param: MarketingEventsExternalApiCompleteRequest, options?: Configuration): Promise<MarketingEventDefaultResponse> {
        return this.api.complete(param.externalEventId, param.externalAccountId, param.marketingEventCompleteRequestParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public create(param: MarketingEventsExternalApiCreateRequest, options?: Configuration): Promise<MarketingEventDefaultResponse> {
        return this.api.create(param.marketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public doCancel(param: MarketingEventsExternalApiDoCancelRequest, options?: Configuration): Promise<MarketingEventDefaultResponse> {
        return this.api.doCancel(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public doEmailUpsertById(param: MarketingEventsExternalApiDoEmailUpsertByIdRequest, options?: Configuration): Promise<void> {
        return this.api.doEmailUpsertById(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventEmailSubscriber,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public doSearch(param: MarketingEventsExternalApiDoSearchRequest, options?: Configuration): Promise<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging> {
        return this.api.doSearch(param.q,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public doUpsert(param: MarketingEventsExternalApiDoUpsertRequest, options?: Configuration): Promise<BatchResponseMarketingEventPublicDefaultResponse> {
        return this.api.doUpsert(param.batchInputMarketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public doUpsertById(param: MarketingEventsExternalApiDoUpsertByIdRequest, options?: Configuration): Promise<void> {
        return this.api.doUpsertById(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventSubscriber,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getById(param: MarketingEventsExternalApiGetByIdRequest, options?: Configuration): Promise<MarketingEventPublicReadResponse> {
        return this.api.getById(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public replace(param: MarketingEventsExternalApiReplaceRequest, options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        return this.api.replace(param.externalEventId, param.marketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public update(param: MarketingEventsExternalApiUpdateRequest, options?: Configuration): Promise<MarketingEventPublicDefaultResponse> {
        return this.api.update(param.externalEventId, param.externalAccountId, param.marketingEventUpdateRequestParams,  options).toPromise();
    }

}

import { ObservableSettingsExternalApi } from "./ObservableAPI";
import { SettingsExternalApiRequestFactory, SettingsExternalApiResponseProcessor} from "../apis/SettingsExternalApi";

export interface SettingsExternalApiCreateRequest {
    /**
     * 
     * @type number
     * @memberof SettingsExternalApicreate
     */
    appId: number
    /**
     * 
     * @type EventDetailSettingsUrl
     * @memberof SettingsExternalApicreate
     */
    eventDetailSettingsUrl: EventDetailSettingsUrl
}

export interface SettingsExternalApiGetAllRequest {
    /**
     * 
     * @type number
     * @memberof SettingsExternalApigetAll
     */
    appId: number
}

export class ObjectSettingsExternalApi {
    private api: ObservableSettingsExternalApi

    public constructor(configuration: Configuration, requestFactory?: SettingsExternalApiRequestFactory, responseProcessor?: SettingsExternalApiResponseProcessor) {
        this.api = new ObservableSettingsExternalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public create(param: SettingsExternalApiCreateRequest, options?: Configuration): Promise<EventDetailSettings> {
        return this.api.create(param.appId, param.eventDetailSettingsUrl,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAll(param: SettingsExternalApiGetAllRequest, options?: Configuration): Promise<EventDetailSettings> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

}
