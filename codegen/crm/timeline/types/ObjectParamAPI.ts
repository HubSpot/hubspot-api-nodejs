import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { BatchInputTimelineEvent } from '../models/BatchInputTimelineEvent';
import { BatchResponseTimelineEventResponse } from '../models/BatchResponseTimelineEventResponse';
import { BatchResponseTimelineEventResponseWithErrors } from '../models/BatchResponseTimelineEventResponseWithErrors';
import { CollectionResponseTimelineEventTemplateNoPaging } from '../models/CollectionResponseTimelineEventTemplateNoPaging';
import { TimelineEvent } from '../models/TimelineEvent';
import { TimelineEventResponse } from '../models/TimelineEventResponse';
import { TimelineEventTemplate } from '../models/TimelineEventTemplate';
import { TimelineEventTemplateCreateRequest } from '../models/TimelineEventTemplateCreateRequest';
import { TimelineEventTemplateToken } from '../models/TimelineEventTemplateToken';
import { TimelineEventTemplateTokenUpdateRequest } from '../models/TimelineEventTemplateTokenUpdateRequest';
import { TimelineEventTemplateUpdateRequest } from '../models/TimelineEventTemplateUpdateRequest';

import { ObservableAdvancedApi } from "./ObservableAPI";
import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";

export interface AdvancedApiCreateRequest {
    /**
     * 
     * @type TimelineEvent
     * @memberof AdvancedApicreate
     */
    timelineEvent: TimelineEvent
}

export interface AdvancedApiCreate0Request {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AdvancedApicreate_1
     */
    appId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApicreate_1
     */
    eventTemplateId: string
    /**
     * 
     * @type TimelineEventTemplateToken
     * @memberof AdvancedApicreate_1
     */
    timelineEventTemplateToken: TimelineEventTemplateToken
}

export class ObjectAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedApiRequestFactory, responseProcessor?: AdvancedApiResponseProcessor) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send a single instance of event data to a specified event type.
     * Send event data (single)
     * @param param the request object
     */
    public createWithHttpInfo(param: AdvancedApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TimelineEventResponse>> {
        return this.api.createWithHttpInfo(param.timelineEvent,  options).toPromise();
    }

    /**
     * Send a single instance of event data to a specified event type.
     * Send event data (single)
     * @param param the request object
     */
    public create(param: AdvancedApiCreateRequest, options?: ConfigurationOptions): Promise<TimelineEventResponse> {
        return this.api.create(param.timelineEvent,  options).toPromise();
    }

    /**
     * Update an existing event type template with new tokens.
     * Add tokens to an existing template
     * @param param the request object
     */
    public create_1WithHttpInfo(param: AdvancedApiCreate0Request, options?: ConfigurationOptions): Promise<HttpInfo<TimelineEventTemplateToken>> {
        return this.api.create_1WithHttpInfo(param.appId, param.eventTemplateId, param.timelineEventTemplateToken,  options).toPromise();
    }

    /**
     * Update an existing event type template with new tokens.
     * Add tokens to an existing template
     * @param param the request object
     */
    public create_1(param: AdvancedApiCreate0Request, options?: ConfigurationOptions): Promise<TimelineEventTemplateToken> {
        return this.api.create_1(param.appId, param.eventTemplateId, param.timelineEventTemplateToken,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiarchive
     */
    appId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    eventTemplateId: string
}

export interface BasicApiArchive0Request {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiarchive_1
     */
    appId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive_1
     */
    eventTemplateId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive_1
     */
    tokenName: string
}

export interface BasicApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicreate
     */
    appId: number
    /**
     * 
     * @type TimelineEventTemplateCreateRequest
     * @memberof BasicApicreate
     */
    timelineEventTemplateCreateRequest: TimelineEventTemplateCreateRequest
}

export interface BasicApiGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetAll
     */
    appId: number
}

export interface BasicApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    eventId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    eventTemplateId: string
}

export interface BasicApiGetById0Request {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetById_2
     */
    appId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById_2
     */
    eventTemplateId: string
}

export interface BasicApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiupdate
     */
    appId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    eventTemplateId: string
    /**
     * 
     * @type TimelineEventTemplateUpdateRequest
     * @memberof BasicApiupdate
     */
    timelineEventTemplateUpdateRequest: TimelineEventTemplateUpdateRequest
}

export interface BasicApiUpdate0Request {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiupdate_3
     */
    appId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate_3
     */
    eventTemplateId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate_3
     */
    tokenName: string
    /**
     * 
     * @type TimelineEventTemplateTokenUpdateRequest
     * @memberof BasicApiupdate_3
     */
    timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an event type template by ID.
     * Delete an event template
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.appId, param.eventTemplateId,  options).toPromise();
    }

    /**
     * Delete an event type template by ID.
     * Delete an event template
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.appId, param.eventTemplateId,  options).toPromise();
    }

    /**
     * Delete an existing token from a specific event type template.
     * Delete a template token
     * @param param the request object
     */
    public archive_1WithHttpInfo(param: BasicApiArchive0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archive_1WithHttpInfo(param.appId, param.eventTemplateId, param.tokenName,  options).toPromise();
    }

    /**
     * Delete an existing token from a specific event type template.
     * Delete a template token
     * @param param the request object
     */
    public archive_1(param: BasicApiArchive0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive_1(param.appId, param.eventTemplateId, param.tokenName,  options).toPromise();
    }

    /**
     * Event templates define the general structure for a custom timeline event, and enable you to send event data to HubSpot. A template includes formatted copy for its heading and details, as well as any custom property definitions. A single app can include up to 750 event templates.<br/><Warning>the `v1` and `v3` timeline events APIs are only available for app partners with existing `v1`/`v3` timeline events defined in their public app. <ul><li>If your app doesn\'t include any timeline events yet, requests to this endpoint will fail. Instead, you can get started on [latest version of the developer platform](/apps/developer-platform/build-apps/overview). Note that you\'ll need to request approval before you can define app events for your app. Learn more in the [app events overview](/apps/developer-platform/add-features/app-events/overview).</li><li>If your app includes a `v1`/`v3` timeline event, learn how to [migrate it to the developer platform](/apps/developer-platform/add-features/app-events/create-and-manage-event-types#migrate-an-existing-timeline-event-type). You don\'t need to request approval before migrating existing event types.</li></ul>If you\'re not an app partner, you can send custom event data to HubSpot using the [custom events API](/api-reference/events-manage-event-definitions-v3/guide).</Warning>
     * Create an event template
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TimelineEventTemplate>> {
        return this.api.createWithHttpInfo(param.appId, param.timelineEventTemplateCreateRequest,  options).toPromise();
    }

    /**
     * Event templates define the general structure for a custom timeline event, and enable you to send event data to HubSpot. A template includes formatted copy for its heading and details, as well as any custom property definitions. A single app can include up to 750 event templates.<br/><Warning>the `v1` and `v3` timeline events APIs are only available for app partners with existing `v1`/`v3` timeline events defined in their public app. <ul><li>If your app doesn\'t include any timeline events yet, requests to this endpoint will fail. Instead, you can get started on [latest version of the developer platform](/apps/developer-platform/build-apps/overview). Note that you\'ll need to request approval before you can define app events for your app. Learn more in the [app events overview](/apps/developer-platform/add-features/app-events/overview).</li><li>If your app includes a `v1`/`v3` timeline event, learn how to [migrate it to the developer platform](/apps/developer-platform/add-features/app-events/create-and-manage-event-types#migrate-an-existing-timeline-event-type). You don\'t need to request approval before migrating existing event types.</li></ul>If you\'re not an app partner, you can send custom event data to HubSpot using the [custom events API](/api-reference/events-manage-event-definitions-v3/guide).</Warning>
     * Create an event template
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<TimelineEventTemplate> {
        return this.api.create(param.appId, param.timelineEventTemplateCreateRequest,  options).toPromise();
    }

    /**
     * Retrieve all templates defined for an app.
     * Get all event templates
     * @param param the request object
     */
    public getAllWithHttpInfo(param: BasicApiGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseTimelineEventTemplateNoPaging>> {
        return this.api.getAllWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve all templates defined for an app.
     * Get all event templates
     * @param param the request object
     */
    public getAll(param: BasicApiGetAllRequest, options?: ConfigurationOptions): Promise<CollectionResponseTimelineEventTemplateNoPaging> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

    /**
     * Retrieve an event instance, specified by template ID and event ID.
     * Get an event instance
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<TimelineEventResponse>> {
        return this.api.getByIdWithHttpInfo(param.eventId, param.eventTemplateId,  options).toPromise();
    }

    /**
     * Retrieve an event instance, specified by template ID and event ID.
     * Get an event instance
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<TimelineEventResponse> {
        return this.api.getById(param.eventId, param.eventTemplateId,  options).toPromise();
    }

    /**
     * Retrieve an event type template by ID.
     * Get an event template
     * @param param the request object
     */
    public getById_2WithHttpInfo(param: BasicApiGetById0Request, options?: ConfigurationOptions): Promise<HttpInfo<TimelineEventTemplate>> {
        return this.api.getById_2WithHttpInfo(param.appId, param.eventTemplateId,  options).toPromise();
    }

    /**
     * Retrieve an event type template by ID.
     * Get an event template
     * @param param the request object
     */
    public getById_2(param: BasicApiGetById0Request, options?: ConfigurationOptions): Promise<TimelineEventTemplate> {
        return this.api.getById_2(param.appId, param.eventTemplateId,  options).toPromise();
    }

    /**
     * Update an existing event template, specified by ID.
     * Update an event template
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<TimelineEventTemplate>> {
        return this.api.updateWithHttpInfo(param.appId, param.eventTemplateId, param.timelineEventTemplateUpdateRequest,  options).toPromise();
    }

    /**
     * Update an existing event template, specified by ID.
     * Update an event template
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<TimelineEventTemplate> {
        return this.api.update(param.appId, param.eventTemplateId, param.timelineEventTemplateUpdateRequest,  options).toPromise();
    }

    /**
     * Update an event type template token, specified by token name.
     * Update a template token
     * @param param the request object
     */
    public update_3WithHttpInfo(param: BasicApiUpdate0Request, options?: ConfigurationOptions): Promise<HttpInfo<TimelineEventTemplateToken>> {
        return this.api.update_3WithHttpInfo(param.appId, param.eventTemplateId, param.tokenName, param.timelineEventTemplateTokenUpdateRequest,  options).toPromise();
    }

    /**
     * Update an event type template token, specified by token name.
     * Update a template token
     * @param param the request object
     */
    public update_3(param: BasicApiUpdate0Request, options?: ConfigurationOptions): Promise<TimelineEventTemplateToken> {
        return this.api.update_3(param.appId, param.eventTemplateId, param.tokenName, param.timelineEventTemplateTokenUpdateRequest,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiCreateBatchRequest {
    /**
     * 
     * @type BatchInputTimelineEvent
     * @memberof BatchApicreateBatch
     */
    batchInputTimelineEvent: BatchInputTimelineEvent
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch create multiple instances of timeline events based on an event template. Once created, these event are immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Create multiple events
     * @param param the request object
     */
    public createBatchWithHttpInfo(param: BatchApiCreateBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseTimelineEventResponse | BatchResponseTimelineEventResponseWithErrors>> {
        return this.api.createBatchWithHttpInfo(param.batchInputTimelineEvent,  options).toPromise();
    }

    /**
     * Batch create multiple instances of timeline events based on an event template. Once created, these event are immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Create multiple events
     * @param param the request object
     */
    public createBatch(param: BatchApiCreateBatchRequest, options?: ConfigurationOptions): Promise<BatchResponseTimelineEventResponse | BatchResponseTimelineEventResponseWithErrors> {
        return this.api.createBatch(param.batchInputTimelineEvent,  options).toPromise();
    }

}
