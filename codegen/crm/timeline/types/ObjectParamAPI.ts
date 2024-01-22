import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BatchInputTimelineEvent } from '../models/BatchInputTimelineEvent';
import { BatchResponseTimelineEventResponse } from '../models/BatchResponseTimelineEventResponse';
import { BatchResponseTimelineEventResponseWithErrors } from '../models/BatchResponseTimelineEventResponseWithErrors';
import { CollectionResponseTimelineEventTemplateNoPaging } from '../models/CollectionResponseTimelineEventTemplateNoPaging';
import { EventDetail } from '../models/EventDetail';
import { TimelineEvent } from '../models/TimelineEvent';
import { TimelineEventResponse } from '../models/TimelineEventResponse';
import { TimelineEventTemplate } from '../models/TimelineEventTemplate';
import { TimelineEventTemplateCreateRequest } from '../models/TimelineEventTemplateCreateRequest';
import { TimelineEventTemplateToken } from '../models/TimelineEventTemplateToken';
import { TimelineEventTemplateTokenUpdateRequest } from '../models/TimelineEventTemplateTokenUpdateRequest';
import { TimelineEventTemplateUpdateRequest } from '../models/TimelineEventTemplateUpdateRequest';

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiCreateRequest {
    /**
     * The timeline event definition.
     * @type TimelineEvent
     * @memberof EventsApicreate
     */
    timelineEvent: TimelineEvent
}

export interface EventsApiCreateBatchRequest {
    /**
     * The timeline event definition.
     * @type BatchInputTimelineEvent
     * @memberof EventsApicreateBatch
     */
    batchInputTimelineEvent: BatchInputTimelineEvent
}

export interface EventsApiGetByIdRequest {
    /**
     * The event template ID.
     * @type string
     * @memberof EventsApigetById
     */
    eventTemplateId: string
    /**
     * The event ID.
     * @type string
     * @memberof EventsApigetById
     */
    eventId: string
}

export interface EventsApiGetDetailByIdRequest {
    /**
     * The event template ID.
     * @type string
     * @memberof EventsApigetDetailById
     */
    eventTemplateId: string
    /**
     * The event ID.
     * @type string
     * @memberof EventsApigetDetailById
     */
    eventId: string
}

export interface EventsApiGetRenderByIdRequest {
    /**
     * The event template ID.
     * @type string
     * @memberof EventsApigetRenderById
     */
    eventTemplateId: string
    /**
     * The event ID.
     * @type string
     * @memberof EventsApigetRenderById
     */
    eventId: string
    /**
     * Set to \&#39;true\&#39;, we want to render the &#x60;detailTemplate&#x60; instead of the &#x60;headerTemplate&#x60;.
     * @type boolean
     * @memberof EventsApigetRenderById
     */
    detail?: boolean
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates an instance of a timeline event based on an event template. Once created, this event is immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Create a single event
     * @param param the request object
     */
    public createWithHttpInfo(param: EventsApiCreateRequest, options?: Configuration): Promise<HttpInfo<TimelineEventResponse>> {
        return this.api.createWithHttpInfo(param.timelineEvent,  options).toPromise();
    }

    /**
     * Creates an instance of a timeline event based on an event template. Once created, this event is immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Create a single event
     * @param param the request object
     */
    public create(param: EventsApiCreateRequest, options?: Configuration): Promise<TimelineEventResponse> {
        return this.api.create(param.timelineEvent,  options).toPromise();
    }

    /**
     * Creates multiple instances of timeline events based on an event template. Once created, these event are immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Creates multiple events
     * @param param the request object
     */
    public createBatchWithHttpInfo(param: EventsApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors>> {
        return this.api.createBatchWithHttpInfo(param.batchInputTimelineEvent,  options).toPromise();
    }

    /**
     * Creates multiple instances of timeline events based on an event template. Once created, these event are immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Creates multiple events
     * @param param the request object
     */
    public createBatch(param: EventsApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors> {
        return this.api.createBatch(param.batchInputTimelineEvent,  options).toPromise();
    }

    /**
     * This returns the previously created event. It contains all existing info for the event, but not necessarily the CRM object.
     * Gets the event
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: EventsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<TimelineEventResponse>> {
        return this.api.getByIdWithHttpInfo(param.eventTemplateId, param.eventId,  options).toPromise();
    }

    /**
     * This returns the previously created event. It contains all existing info for the event, but not necessarily the CRM object.
     * Gets the event
     * @param param the request object
     */
    public getById(param: EventsApiGetByIdRequest, options?: Configuration): Promise<TimelineEventResponse> {
        return this.api.getById(param.eventTemplateId, param.eventId,  options).toPromise();
    }

    /**
     * This will take the `detailTemplate` from the event template and return an object rendering the specified event. If the template references `extraData` that isn\'t found in the event, it will be ignored and we\'ll render without it.
     * Gets the detailTemplate as rendered
     * @param param the request object
     */
    public getDetailByIdWithHttpInfo(param: EventsApiGetDetailByIdRequest, options?: Configuration): Promise<HttpInfo<EventDetail>> {
        return this.api.getDetailByIdWithHttpInfo(param.eventTemplateId, param.eventId,  options).toPromise();
    }

    /**
     * This will take the `detailTemplate` from the event template and return an object rendering the specified event. If the template references `extraData` that isn\'t found in the event, it will be ignored and we\'ll render without it.
     * Gets the detailTemplate as rendered
     * @param param the request object
     */
    public getDetailById(param: EventsApiGetDetailByIdRequest, options?: Configuration): Promise<EventDetail> {
        return this.api.getDetailById(param.eventTemplateId, param.eventId,  options).toPromise();
    }

    /**
     * This will take either the `headerTemplate` or `detailTemplate` from the event template and render for the specified event as HTML. If the template references `extraData` that isn\'t found in the event, it will be ignored and we\'ll render without it.
     * Renders the header or detail as HTML
     * @param param the request object
     */
    public getRenderByIdWithHttpInfo(param: EventsApiGetRenderByIdRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.getRenderByIdWithHttpInfo(param.eventTemplateId, param.eventId, param.detail,  options).toPromise();
    }

    /**
     * This will take either the `headerTemplate` or `detailTemplate` from the event template and render for the specified event as HTML. If the template references `extraData` that isn\'t found in the event, it will be ignored and we\'ll render without it.
     * Renders the header or detail as HTML
     * @param param the request object
     */
    public getRenderById(param: EventsApiGetRenderByIdRequest, options?: Configuration): Promise<string> {
        return this.api.getRenderById(param.eventTemplateId, param.eventId, param.detail,  options).toPromise();
    }

}

import { ObservableTemplatesApi } from "./ObservableAPI";
import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor} from "../apis/TemplatesApi";

export interface TemplatesApiArchiveRequest {
    /**
     * The event template ID.
     * @type string
     * @memberof TemplatesApiarchive
     */
    eventTemplateId: string
    /**
     * The ID of the target app.
     * @type number
     * @memberof TemplatesApiarchive
     */
    appId: number
}

export interface TemplatesApiCreateRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof TemplatesApicreate
     */
    appId: number
    /**
     * The new event template definition.
     * @type TimelineEventTemplateCreateRequest
     * @memberof TemplatesApicreate
     */
    timelineEventTemplateCreateRequest: TimelineEventTemplateCreateRequest
}

export interface TemplatesApiGetAllRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof TemplatesApigetAll
     */
    appId: number
}

export interface TemplatesApiGetByIdRequest {
    /**
     * The event template ID.
     * @type string
     * @memberof TemplatesApigetById
     */
    eventTemplateId: string
    /**
     * The ID of the target app.
     * @type number
     * @memberof TemplatesApigetById
     */
    appId: number
}

export interface TemplatesApiUpdateRequest {
    /**
     * The event template ID.
     * @type string
     * @memberof TemplatesApiupdate
     */
    eventTemplateId: string
    /**
     * The ID of the target app.
     * @type number
     * @memberof TemplatesApiupdate
     */
    appId: number
    /**
     * The updated event template definition.
     * @type TimelineEventTemplateUpdateRequest
     * @memberof TemplatesApiupdate
     */
    timelineEventTemplateUpdateRequest: TimelineEventTemplateUpdateRequest
}

export class ObjectTemplatesApi {
    private api: ObservableTemplatesApi

    public constructor(configuration: Configuration, requestFactory?: TemplatesApiRequestFactory, responseProcessor?: TemplatesApiResponseProcessor) {
        this.api = new ObservableTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This will delete the event template. All associated events will be removed from search results and the timeline UI.  This action can\'t be undone, so it\'s highly recommended that you stop using any associated events before deleting a template.
     * Deletes an event template for the app
     * @param param the request object
     */
    public archiveWithHttpInfo(param: TemplatesApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.eventTemplateId, param.appId,  options).toPromise();
    }

    /**
     * This will delete the event template. All associated events will be removed from search results and the timeline UI.  This action can\'t be undone, so it\'s highly recommended that you stop using any associated events before deleting a template.
     * Deletes an event template for the app
     * @param param the request object
     */
    public archive(param: TemplatesApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.eventTemplateId, param.appId,  options).toPromise();
    }

    /**
     * Event templates define the general structure for a custom timeline event. This includes formatted copy for its heading and details, as well as any custom property definitions. The event could be something like viewing a video, registering for a webinar, or filling out a survey. A single app can define multiple event templates.  Event templates will be created for contacts by default, but they can be created for companies, tickets, and deals as well.  Each event template contains its own set of tokens and `Markdown` templates. These tokens can be associated with any CRM object properties via the `objectPropertyName` field to fully build out CRM objects.  You must create an event template before you can create events.
     * Create an event template for your app
     * @param param the request object
     */
    public createWithHttpInfo(param: TemplatesApiCreateRequest, options?: Configuration): Promise<HttpInfo<TimelineEventTemplate>> {
        return this.api.createWithHttpInfo(param.appId, param.timelineEventTemplateCreateRequest,  options).toPromise();
    }

    /**
     * Event templates define the general structure for a custom timeline event. This includes formatted copy for its heading and details, as well as any custom property definitions. The event could be something like viewing a video, registering for a webinar, or filling out a survey. A single app can define multiple event templates.  Event templates will be created for contacts by default, but they can be created for companies, tickets, and deals as well.  Each event template contains its own set of tokens and `Markdown` templates. These tokens can be associated with any CRM object properties via the `objectPropertyName` field to fully build out CRM objects.  You must create an event template before you can create events.
     * Create an event template for your app
     * @param param the request object
     */
    public create(param: TemplatesApiCreateRequest, options?: Configuration): Promise<TimelineEventTemplate> {
        return this.api.create(param.appId, param.timelineEventTemplateCreateRequest,  options).toPromise();
    }

    /**
     * Use this to list all event templates owned by your app.
     * List all event templates for your app
     * @param param the request object
     */
    public getAllWithHttpInfo(param: TemplatesApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseTimelineEventTemplateNoPaging>> {
        return this.api.getAllWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Use this to list all event templates owned by your app.
     * List all event templates for your app
     * @param param the request object
     */
    public getAll(param: TemplatesApiGetAllRequest, options?: Configuration): Promise<CollectionResponseTimelineEventTemplateNoPaging> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

    /**
     * View the current state of a specific template and its tokens.
     * Gets a specific event template for your app
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: TemplatesApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<TimelineEventTemplate>> {
        return this.api.getByIdWithHttpInfo(param.eventTemplateId, param.appId,  options).toPromise();
    }

    /**
     * View the current state of a specific template and its tokens.
     * Gets a specific event template for your app
     * @param param the request object
     */
    public getById(param: TemplatesApiGetByIdRequest, options?: Configuration): Promise<TimelineEventTemplate> {
        return this.api.getById(param.eventTemplateId, param.appId,  options).toPromise();
    }

    /**
     * Updates an existing template and its tokens. This is primarily used to update the headerTemplate/detailTemplate, and those changes will take effect for existing events.  You can also update or replace all the tokens in the template here instead of doing individual API calls on the `/tokens` endpoint.
     * Update an existing event template
     * @param param the request object
     */
    public updateWithHttpInfo(param: TemplatesApiUpdateRequest, options?: Configuration): Promise<HttpInfo<TimelineEventTemplate>> {
        return this.api.updateWithHttpInfo(param.eventTemplateId, param.appId, param.timelineEventTemplateUpdateRequest,  options).toPromise();
    }

    /**
     * Updates an existing template and its tokens. This is primarily used to update the headerTemplate/detailTemplate, and those changes will take effect for existing events.  You can also update or replace all the tokens in the template here instead of doing individual API calls on the `/tokens` endpoint.
     * Update an existing event template
     * @param param the request object
     */
    public update(param: TemplatesApiUpdateRequest, options?: Configuration): Promise<TimelineEventTemplate> {
        return this.api.update(param.eventTemplateId, param.appId, param.timelineEventTemplateUpdateRequest,  options).toPromise();
    }

}

import { ObservableTokensApi } from "./ObservableAPI";
import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi";

export interface TokensApiArchiveRequest {
    /**
     * The event template ID.
     * @type string
     * @memberof TokensApiarchive
     */
    eventTemplateId: string
    /**
     * The token name.
     * @type string
     * @memberof TokensApiarchive
     */
    tokenName: string
    /**
     * The ID of the target app.
     * @type number
     * @memberof TokensApiarchive
     */
    appId: number
}

export interface TokensApiCreateRequest {
    /**
     * The event template ID.
     * @type string
     * @memberof TokensApicreate
     */
    eventTemplateId: string
    /**
     * The ID of the target app.
     * @type number
     * @memberof TokensApicreate
     */
    appId: number
    /**
     * The new token definition.
     * @type TimelineEventTemplateToken
     * @memberof TokensApicreate
     */
    timelineEventTemplateToken: TimelineEventTemplateToken
}

export interface TokensApiUpdateRequest {
    /**
     * The event template ID.
     * @type string
     * @memberof TokensApiupdate
     */
    eventTemplateId: string
    /**
     * The token name.
     * @type string
     * @memberof TokensApiupdate
     */
    tokenName: string
    /**
     * The ID of the target app.
     * @type number
     * @memberof TokensApiupdate
     */
    appId: number
    /**
     * The updated token definition.
     * @type TimelineEventTemplateTokenUpdateRequest
     * @memberof TokensApiupdate
     */
    timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest
}

export class ObjectTokensApi {
    private api: ObservableTokensApi

    public constructor(configuration: Configuration, requestFactory?: TokensApiRequestFactory, responseProcessor?: TokensApiResponseProcessor) {
        this.api = new ObservableTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This will remove the token from an existing template. Existing events and CRM objects will still retain the token and its mapped object properties, but new ones will not.  The timeline will still display this property for older CRM objects if it\'s still referenced in the template `Markdown`. New events will not.  Any lists or reports referencing deleted tokens will no longer return new contacts, but old ones will still exist in the lists.
     * Removes a token from the event template
     * @param param the request object
     */
    public archiveWithHttpInfo(param: TokensApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.eventTemplateId, param.tokenName, param.appId,  options).toPromise();
    }

    /**
     * This will remove the token from an existing template. Existing events and CRM objects will still retain the token and its mapped object properties, but new ones will not.  The timeline will still display this property for older CRM objects if it\'s still referenced in the template `Markdown`. New events will not.  Any lists or reports referencing deleted tokens will no longer return new contacts, but old ones will still exist in the lists.
     * Removes a token from the event template
     * @param param the request object
     */
    public archive(param: TokensApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.eventTemplateId, param.tokenName, param.appId,  options).toPromise();
    }

    /**
     * Once you\'ve defined an event template, it\'s likely that you\'ll want to define tokens for it as well. You can do this on the event template itself or update individual tokens here.  Event type tokens allow you to attach custom data to events displayed in a timeline or used for list segmentation.  You can also use `objectPropertyName` to associate any CRM object properties. This will allow you to fully build out CRM objects.  Token names should be unique across the template.
     * Adds a token to an existing event template
     * @param param the request object
     */
    public createWithHttpInfo(param: TokensApiCreateRequest, options?: Configuration): Promise<HttpInfo<TimelineEventTemplateToken>> {
        return this.api.createWithHttpInfo(param.eventTemplateId, param.appId, param.timelineEventTemplateToken,  options).toPromise();
    }

    /**
     * Once you\'ve defined an event template, it\'s likely that you\'ll want to define tokens for it as well. You can do this on the event template itself or update individual tokens here.  Event type tokens allow you to attach custom data to events displayed in a timeline or used for list segmentation.  You can also use `objectPropertyName` to associate any CRM object properties. This will allow you to fully build out CRM objects.  Token names should be unique across the template.
     * Adds a token to an existing event template
     * @param param the request object
     */
    public create(param: TokensApiCreateRequest, options?: Configuration): Promise<TimelineEventTemplateToken> {
        return this.api.create(param.eventTemplateId, param.appId, param.timelineEventTemplateToken,  options).toPromise();
    }

    /**
     * This will update the existing token on an event template. Name and type can\'t be changed on existing tokens.
     * Updates an existing token on an event template
     * @param param the request object
     */
    public updateWithHttpInfo(param: TokensApiUpdateRequest, options?: Configuration): Promise<HttpInfo<TimelineEventTemplateToken>> {
        return this.api.updateWithHttpInfo(param.eventTemplateId, param.tokenName, param.appId, param.timelineEventTemplateTokenUpdateRequest,  options).toPromise();
    }

    /**
     * This will update the existing token on an event template. Name and type can\'t be changed on existing tokens.
     * Updates an existing token on an event template
     * @param param the request object
     */
    public update(param: TokensApiUpdateRequest, options?: Configuration): Promise<TimelineEventTemplateToken> {
        return this.api.update(param.eventTemplateId, param.tokenName, param.appId, param.timelineEventTemplateTokenUpdateRequest,  options).toPromise();
    }

}
