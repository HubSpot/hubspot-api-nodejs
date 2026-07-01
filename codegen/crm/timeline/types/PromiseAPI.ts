import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableAdvancedApi } from './ObservableAPI';

import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";
export class PromiseAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdvancedApiRequestFactory,
        responseProcessor?: AdvancedApiResponseProcessor
    ) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send a single instance of event data to a specified event type.
     * Send event data (single)
     * @param timelineEvent
     */
    public createWithHttpInfo(timelineEvent: TimelineEvent, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimelineEventResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createWithHttpInfo(timelineEvent, observableOptions);
        return result.toPromise();
    }

    /**
     * Send a single instance of event data to a specified event type.
     * Send event data (single)
     * @param timelineEvent
     */
    public create(timelineEvent: TimelineEvent, _options?: PromiseConfigurationOptions): Promise<TimelineEventResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create(timelineEvent, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing event type template with new tokens.
     * Add tokens to an existing template
     * @param appId 
     * @param eventTemplateId 
     * @param timelineEventTemplateToken
     */
    public create_1WithHttpInfo(appId: number, eventTemplateId: string, timelineEventTemplateToken: TimelineEventTemplateToken, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimelineEventTemplateToken>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create_1WithHttpInfo(appId, eventTemplateId, timelineEventTemplateToken, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing event type template with new tokens.
     * Add tokens to an existing template
     * @param appId 
     * @param eventTemplateId 
     * @param timelineEventTemplateToken
     */
    public create_1(appId: number, eventTemplateId: string, timelineEventTemplateToken: TimelineEventTemplateToken, _options?: PromiseConfigurationOptions): Promise<TimelineEventTemplateToken> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create_1(appId, eventTemplateId, timelineEventTemplateToken, observableOptions);
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
     * Delete an event type template by ID.
     * Delete an event template
     * @param appId 
     * @param eventTemplateId 
     */
    public archiveWithHttpInfo(appId: number, eventTemplateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(appId, eventTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an event type template by ID.
     * Delete an event template
     * @param appId 
     * @param eventTemplateId 
     */
    public archive(appId: number, eventTemplateId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(appId, eventTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing token from a specific event type template.
     * Delete a template token
     * @param appId 
     * @param eventTemplateId 
     * @param tokenName 
     */
    public archive_1WithHttpInfo(appId: number, eventTemplateId: string, tokenName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive_1WithHttpInfo(appId, eventTemplateId, tokenName, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing token from a specific event type template.
     * Delete a template token
     * @param appId 
     * @param eventTemplateId 
     * @param tokenName 
     */
    public archive_1(appId: number, eventTemplateId: string, tokenName: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive_1(appId, eventTemplateId, tokenName, observableOptions);
        return result.toPromise();
    }

    /**
     * Event templates define the general structure for a custom timeline event, and enable you to send event data to HubSpot. A template includes formatted copy for its heading and details, as well as any custom property definitions. A single app can include up to 750 event templates.<br/><Warning>the `v1` and `v3` timeline events APIs are only available for app partners with existing `v1`/`v3` timeline events defined in their public app. <ul><li>If your app doesn\'t include any timeline events yet, requests to this endpoint will fail. Instead, you can get started on [latest version of the developer platform](/apps/developer-platform/build-apps/overview). Note that you\'ll need to request approval before you can define app events for your app. Learn more in the [app events overview](/apps/developer-platform/add-features/app-events/overview).</li><li>If your app includes a `v1`/`v3` timeline event, learn how to [migrate it to the developer platform](/apps/developer-platform/add-features/app-events/create-and-manage-event-types#migrate-an-existing-timeline-event-type). You don\'t need to request approval before migrating existing event types.</li></ul>If you\'re not an app partner, you can send custom event data to HubSpot using the [custom events API](/api-reference/events-manage-event-definitions-v3/guide).</Warning>
     * Create an event template
     * @param appId 
     * @param timelineEventTemplateCreateRequest
     */
    public createWithHttpInfo(appId: number, timelineEventTemplateCreateRequest: TimelineEventTemplateCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimelineEventTemplate>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createWithHttpInfo(appId, timelineEventTemplateCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Event templates define the general structure for a custom timeline event, and enable you to send event data to HubSpot. A template includes formatted copy for its heading and details, as well as any custom property definitions. A single app can include up to 750 event templates.<br/><Warning>the `v1` and `v3` timeline events APIs are only available for app partners with existing `v1`/`v3` timeline events defined in their public app. <ul><li>If your app doesn\'t include any timeline events yet, requests to this endpoint will fail. Instead, you can get started on [latest version of the developer platform](/apps/developer-platform/build-apps/overview). Note that you\'ll need to request approval before you can define app events for your app. Learn more in the [app events overview](/apps/developer-platform/add-features/app-events/overview).</li><li>If your app includes a `v1`/`v3` timeline event, learn how to [migrate it to the developer platform](/apps/developer-platform/add-features/app-events/create-and-manage-event-types#migrate-an-existing-timeline-event-type). You don\'t need to request approval before migrating existing event types.</li></ul>If you\'re not an app partner, you can send custom event data to HubSpot using the [custom events API](/api-reference/events-manage-event-definitions-v3/guide).</Warning>
     * Create an event template
     * @param appId 
     * @param timelineEventTemplateCreateRequest
     */
    public create(appId: number, timelineEventTemplateCreateRequest: TimelineEventTemplateCreateRequest, _options?: PromiseConfigurationOptions): Promise<TimelineEventTemplate> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create(appId, timelineEventTemplateCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all templates defined for an app.
     * Get all event templates
     * @param appId 
     */
    public getAllWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseTimelineEventTemplateNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all templates defined for an app.
     * Get all event templates
     * @param appId 
     */
    public getAll(appId: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponseTimelineEventTemplateNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAll(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an event instance, specified by template ID and event ID.
     * Get an event instance
     * @param eventId 
     * @param eventTemplateId 
     */
    public getByIdWithHttpInfo(eventId: string, eventTemplateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimelineEventResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByIdWithHttpInfo(eventId, eventTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an event instance, specified by template ID and event ID.
     * Get an event instance
     * @param eventId 
     * @param eventTemplateId 
     */
    public getById(eventId: string, eventTemplateId: string, _options?: PromiseConfigurationOptions): Promise<TimelineEventResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById(eventId, eventTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an event type template by ID.
     * Get an event template
     * @param appId 
     * @param eventTemplateId 
     */
    public getById_2WithHttpInfo(appId: number, eventTemplateId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimelineEventTemplate>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById_2WithHttpInfo(appId, eventTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve an event type template by ID.
     * Get an event template
     * @param appId 
     * @param eventTemplateId 
     */
    public getById_2(appId: number, eventTemplateId: string, _options?: PromiseConfigurationOptions): Promise<TimelineEventTemplate> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById_2(appId, eventTemplateId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing event template, specified by ID.
     * Update an event template
     * @param appId 
     * @param eventTemplateId 
     * @param timelineEventTemplateUpdateRequest
     */
    public updateWithHttpInfo(appId: number, eventTemplateId: string, timelineEventTemplateUpdateRequest: TimelineEventTemplateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimelineEventTemplate>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateWithHttpInfo(appId, eventTemplateId, timelineEventTemplateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing event template, specified by ID.
     * Update an event template
     * @param appId 
     * @param eventTemplateId 
     * @param timelineEventTemplateUpdateRequest
     */
    public update(appId: number, eventTemplateId: string, timelineEventTemplateUpdateRequest: TimelineEventTemplateUpdateRequest, _options?: PromiseConfigurationOptions): Promise<TimelineEventTemplate> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update(appId, eventTemplateId, timelineEventTemplateUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an event type template token, specified by token name.
     * Update a template token
     * @param appId 
     * @param eventTemplateId 
     * @param tokenName 
     * @param timelineEventTemplateTokenUpdateRequest
     */
    public update_3WithHttpInfo(appId: number, eventTemplateId: string, tokenName: string, timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimelineEventTemplateToken>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update_3WithHttpInfo(appId, eventTemplateId, tokenName, timelineEventTemplateTokenUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an event type template token, specified by token name.
     * Update a template token
     * @param appId 
     * @param eventTemplateId 
     * @param tokenName 
     * @param timelineEventTemplateTokenUpdateRequest
     */
    public update_3(appId: number, eventTemplateId: string, tokenName: string, timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest, _options?: PromiseConfigurationOptions): Promise<TimelineEventTemplateToken> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update_3(appId, eventTemplateId, tokenName, timelineEventTemplateTokenUpdateRequest, observableOptions);
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
     * Batch create multiple instances of timeline events based on an event template. Once created, these event are immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Create multiple events
     * @param batchInputTimelineEvent
     */
    public createBatchWithHttpInfo(batchInputTimelineEvent: BatchInputTimelineEvent, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseTimelineEventResponse | BatchResponseTimelineEventResponseWithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createBatchWithHttpInfo(batchInputTimelineEvent, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch create multiple instances of timeline events based on an event template. Once created, these event are immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Create multiple events
     * @param batchInputTimelineEvent
     */
    public createBatch(batchInputTimelineEvent: BatchInputTimelineEvent, _options?: PromiseConfigurationOptions): Promise<BatchResponseTimelineEventResponse | BatchResponseTimelineEventResponseWithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createBatch(batchInputTimelineEvent, observableOptions);
        return result.toPromise();
    }


}



