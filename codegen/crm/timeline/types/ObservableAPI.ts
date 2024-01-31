import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * Creates an instance of a timeline event based on an event template. Once created, this event is immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Create a single event
     * @param timelineEvent The timeline event definition.
     */
    public createWithHttpInfo(timelineEvent: TimelineEvent, _options?: Configuration): Observable<HttpInfo<TimelineEventResponse>> {
        const requestContextPromise = this.requestFactory.create(timelineEvent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an instance of a timeline event based on an event template. Once created, this event is immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Create a single event
     * @param timelineEvent The timeline event definition.
     */
    public create(timelineEvent: TimelineEvent, _options?: Configuration): Observable<TimelineEventResponse> {
        return this.createWithHttpInfo(timelineEvent, _options).pipe(map((apiResponse: HttpInfo<TimelineEventResponse>) => apiResponse.data));
    }

    /**
     * Creates multiple instances of timeline events based on an event template. Once created, these event are immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Creates multiple events
     * @param batchInputTimelineEvent The timeline event definition.
     */
    public createBatchWithHttpInfo(batchInputTimelineEvent: BatchInputTimelineEvent, _options?: Configuration): Observable<HttpInfo<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors>> {
        const requestContextPromise = this.requestFactory.createBatch(batchInputTimelineEvent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates multiple instances of timeline events based on an event template. Once created, these event are immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Creates multiple events
     * @param batchInputTimelineEvent The timeline event definition.
     */
    public createBatch(batchInputTimelineEvent: BatchInputTimelineEvent, _options?: Configuration): Observable<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors> {
        return this.createBatchWithHttpInfo(batchInputTimelineEvent, _options).pipe(map((apiResponse: HttpInfo<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors>) => apiResponse.data));
    }

    /**
     * This returns the previously created event. It contains all existing info for the event, but not necessarily the CRM object.
     * Gets the event
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     */
    public getByIdWithHttpInfo(eventTemplateId: string, eventId: string, _options?: Configuration): Observable<HttpInfo<TimelineEventResponse>> {
        const requestContextPromise = this.requestFactory.getById(eventTemplateId, eventId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This returns the previously created event. It contains all existing info for the event, but not necessarily the CRM object.
     * Gets the event
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     */
    public getById(eventTemplateId: string, eventId: string, _options?: Configuration): Observable<TimelineEventResponse> {
        return this.getByIdWithHttpInfo(eventTemplateId, eventId, _options).pipe(map((apiResponse: HttpInfo<TimelineEventResponse>) => apiResponse.data));
    }

    /**
     * This will take the `detailTemplate` from the event template and return an object rendering the specified event. If the template references `extraData` that isn\'t found in the event, it will be ignored and we\'ll render without it.
     * Gets the detailTemplate as rendered
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     */
    public getDetailByIdWithHttpInfo(eventTemplateId: string, eventId: string, _options?: Configuration): Observable<HttpInfo<EventDetail>> {
        const requestContextPromise = this.requestFactory.getDetailById(eventTemplateId, eventId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDetailByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This will take the `detailTemplate` from the event template and return an object rendering the specified event. If the template references `extraData` that isn\'t found in the event, it will be ignored and we\'ll render without it.
     * Gets the detailTemplate as rendered
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     */
    public getDetailById(eventTemplateId: string, eventId: string, _options?: Configuration): Observable<EventDetail> {
        return this.getDetailByIdWithHttpInfo(eventTemplateId, eventId, _options).pipe(map((apiResponse: HttpInfo<EventDetail>) => apiResponse.data));
    }

    /**
     * This will take either the `headerTemplate` or `detailTemplate` from the event template and render for the specified event as HTML. If the template references `extraData` that isn\'t found in the event, it will be ignored and we\'ll render without it.
     * Renders the header or detail as HTML
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     * @param detail Set to \&#39;true\&#39;, we want to render the &#x60;detailTemplate&#x60; instead of the &#x60;headerTemplate&#x60;.
     */
    public getRenderByIdWithHttpInfo(eventTemplateId: string, eventId: string, detail?: boolean, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.getRenderById(eventTemplateId, eventId, detail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRenderByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This will take either the `headerTemplate` or `detailTemplate` from the event template and render for the specified event as HTML. If the template references `extraData` that isn\'t found in the event, it will be ignored and we\'ll render without it.
     * Renders the header or detail as HTML
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     * @param detail Set to \&#39;true\&#39;, we want to render the &#x60;detailTemplate&#x60; instead of the &#x60;headerTemplate&#x60;.
     */
    public getRenderById(eventTemplateId: string, eventId: string, detail?: boolean, _options?: Configuration): Observable<string> {
        return this.getRenderByIdWithHttpInfo(eventTemplateId, eventId, detail, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor} from "../apis/TemplatesApi";
export class ObservableTemplatesApi {
    private requestFactory: TemplatesApiRequestFactory;
    private responseProcessor: TemplatesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplatesApiRequestFactory,
        responseProcessor?: TemplatesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TemplatesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TemplatesApiResponseProcessor();
    }

    /**
     * This will delete the event template. All associated events will be removed from search results and the timeline UI.  This action can\'t be undone, so it\'s highly recommended that you stop using any associated events before deleting a template.
     * Deletes an event template for the app
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     */
    public archiveWithHttpInfo(eventTemplateId: string, appId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(eventTemplateId, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * This will delete the event template. All associated events will be removed from search results and the timeline UI.  This action can\'t be undone, so it\'s highly recommended that you stop using any associated events before deleting a template.
     * Deletes an event template for the app
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     */
    public archive(eventTemplateId: string, appId: number, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(eventTemplateId, appId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Event templates define the general structure for a custom timeline event. This includes formatted copy for its heading and details, as well as any custom property definitions. The event could be something like viewing a video, registering for a webinar, or filling out a survey. A single app can define multiple event templates.  Event templates will be created for contacts by default, but they can be created for companies, tickets, and deals as well.  Each event template contains its own set of tokens and `Markdown` templates. These tokens can be associated with any CRM object properties via the `objectPropertyName` field to fully build out CRM objects.  You must create an event template before you can create events.
     * Create an event template for your app
     * @param appId The ID of the target app.
     * @param timelineEventTemplateCreateRequest The new event template definition.
     */
    public createWithHttpInfo(appId: number, timelineEventTemplateCreateRequest: TimelineEventTemplateCreateRequest, _options?: Configuration): Observable<HttpInfo<TimelineEventTemplate>> {
        const requestContextPromise = this.requestFactory.create(appId, timelineEventTemplateCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Event templates define the general structure for a custom timeline event. This includes formatted copy for its heading and details, as well as any custom property definitions. The event could be something like viewing a video, registering for a webinar, or filling out a survey. A single app can define multiple event templates.  Event templates will be created for contacts by default, but they can be created for companies, tickets, and deals as well.  Each event template contains its own set of tokens and `Markdown` templates. These tokens can be associated with any CRM object properties via the `objectPropertyName` field to fully build out CRM objects.  You must create an event template before you can create events.
     * Create an event template for your app
     * @param appId The ID of the target app.
     * @param timelineEventTemplateCreateRequest The new event template definition.
     */
    public create(appId: number, timelineEventTemplateCreateRequest: TimelineEventTemplateCreateRequest, _options?: Configuration): Observable<TimelineEventTemplate> {
        return this.createWithHttpInfo(appId, timelineEventTemplateCreateRequest, _options).pipe(map((apiResponse: HttpInfo<TimelineEventTemplate>) => apiResponse.data));
    }

    /**
     * Use this to list all event templates owned by your app.
     * List all event templates for your app
     * @param appId The ID of the target app.
     */
    public getAllWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<CollectionResponseTimelineEventTemplateNoPaging>> {
        const requestContextPromise = this.requestFactory.getAll(appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this to list all event templates owned by your app.
     * List all event templates for your app
     * @param appId The ID of the target app.
     */
    public getAll(appId: number, _options?: Configuration): Observable<CollectionResponseTimelineEventTemplateNoPaging> {
        return this.getAllWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseTimelineEventTemplateNoPaging>) => apiResponse.data));
    }

    /**
     * View the current state of a specific template and its tokens.
     * Gets a specific event template for your app
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     */
    public getByIdWithHttpInfo(eventTemplateId: string, appId: number, _options?: Configuration): Observable<HttpInfo<TimelineEventTemplate>> {
        const requestContextPromise = this.requestFactory.getById(eventTemplateId, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * View the current state of a specific template and its tokens.
     * Gets a specific event template for your app
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     */
    public getById(eventTemplateId: string, appId: number, _options?: Configuration): Observable<TimelineEventTemplate> {
        return this.getByIdWithHttpInfo(eventTemplateId, appId, _options).pipe(map((apiResponse: HttpInfo<TimelineEventTemplate>) => apiResponse.data));
    }

    /**
     * Updates an existing template and its tokens. This is primarily used to update the headerTemplate/detailTemplate, and those changes will take effect for existing events.  You can also update or replace all the tokens in the template here instead of doing individual API calls on the `/tokens` endpoint.
     * Update an existing event template
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     * @param timelineEventTemplateUpdateRequest The updated event template definition.
     */
    public updateWithHttpInfo(eventTemplateId: string, appId: number, timelineEventTemplateUpdateRequest: TimelineEventTemplateUpdateRequest, _options?: Configuration): Observable<HttpInfo<TimelineEventTemplate>> {
        const requestContextPromise = this.requestFactory.update(eventTemplateId, appId, timelineEventTemplateUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing template and its tokens. This is primarily used to update the headerTemplate/detailTemplate, and those changes will take effect for existing events.  You can also update or replace all the tokens in the template here instead of doing individual API calls on the `/tokens` endpoint.
     * Update an existing event template
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     * @param timelineEventTemplateUpdateRequest The updated event template definition.
     */
    public update(eventTemplateId: string, appId: number, timelineEventTemplateUpdateRequest: TimelineEventTemplateUpdateRequest, _options?: Configuration): Observable<TimelineEventTemplate> {
        return this.updateWithHttpInfo(eventTemplateId, appId, timelineEventTemplateUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<TimelineEventTemplate>) => apiResponse.data));
    }

}

import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi";
export class ObservableTokensApi {
    private requestFactory: TokensApiRequestFactory;
    private responseProcessor: TokensApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TokensApiRequestFactory,
        responseProcessor?: TokensApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TokensApiResponseProcessor();
    }

    /**
     * This will remove the token from an existing template. Existing events and CRM objects will still retain the token and its mapped object properties, but new ones will not.  The timeline will still display this property for older CRM objects if it\'s still referenced in the template `Markdown`. New events will not.  Any lists or reports referencing deleted tokens will no longer return new contacts, but old ones will still exist in the lists.
     * Removes a token from the event template
     * @param eventTemplateId The event template ID.
     * @param tokenName The token name.
     * @param appId The ID of the target app.
     */
    public archiveWithHttpInfo(eventTemplateId: string, tokenName: string, appId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(eventTemplateId, tokenName, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * This will remove the token from an existing template. Existing events and CRM objects will still retain the token and its mapped object properties, but new ones will not.  The timeline will still display this property for older CRM objects if it\'s still referenced in the template `Markdown`. New events will not.  Any lists or reports referencing deleted tokens will no longer return new contacts, but old ones will still exist in the lists.
     * Removes a token from the event template
     * @param eventTemplateId The event template ID.
     * @param tokenName The token name.
     * @param appId The ID of the target app.
     */
    public archive(eventTemplateId: string, tokenName: string, appId: number, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(eventTemplateId, tokenName, appId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Once you\'ve defined an event template, it\'s likely that you\'ll want to define tokens for it as well. You can do this on the event template itself or update individual tokens here.  Event type tokens allow you to attach custom data to events displayed in a timeline or used for list segmentation.  You can also use `objectPropertyName` to associate any CRM object properties. This will allow you to fully build out CRM objects.  Token names should be unique across the template.
     * Adds a token to an existing event template
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     * @param timelineEventTemplateToken The new token definition.
     */
    public createWithHttpInfo(eventTemplateId: string, appId: number, timelineEventTemplateToken: TimelineEventTemplateToken, _options?: Configuration): Observable<HttpInfo<TimelineEventTemplateToken>> {
        const requestContextPromise = this.requestFactory.create(eventTemplateId, appId, timelineEventTemplateToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Once you\'ve defined an event template, it\'s likely that you\'ll want to define tokens for it as well. You can do this on the event template itself or update individual tokens here.  Event type tokens allow you to attach custom data to events displayed in a timeline or used for list segmentation.  You can also use `objectPropertyName` to associate any CRM object properties. This will allow you to fully build out CRM objects.  Token names should be unique across the template.
     * Adds a token to an existing event template
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     * @param timelineEventTemplateToken The new token definition.
     */
    public create(eventTemplateId: string, appId: number, timelineEventTemplateToken: TimelineEventTemplateToken, _options?: Configuration): Observable<TimelineEventTemplateToken> {
        return this.createWithHttpInfo(eventTemplateId, appId, timelineEventTemplateToken, _options).pipe(map((apiResponse: HttpInfo<TimelineEventTemplateToken>) => apiResponse.data));
    }

    /**
     * This will update the existing token on an event template. Name and type can\'t be changed on existing tokens.
     * Updates an existing token on an event template
     * @param eventTemplateId The event template ID.
     * @param tokenName The token name.
     * @param appId The ID of the target app.
     * @param timelineEventTemplateTokenUpdateRequest The updated token definition.
     */
    public updateWithHttpInfo(eventTemplateId: string, tokenName: string, appId: number, timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest, _options?: Configuration): Observable<HttpInfo<TimelineEventTemplateToken>> {
        const requestContextPromise = this.requestFactory.update(eventTemplateId, tokenName, appId, timelineEventTemplateTokenUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * This will update the existing token on an event template. Name and type can\'t be changed on existing tokens.
     * Updates an existing token on an event template
     * @param eventTemplateId The event template ID.
     * @param tokenName The token name.
     * @param appId The ID of the target app.
     * @param timelineEventTemplateTokenUpdateRequest The updated token definition.
     */
    public update(eventTemplateId: string, tokenName: string, appId: number, timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest, _options?: Configuration): Observable<TimelineEventTemplateToken> {
        return this.updateWithHttpInfo(eventTemplateId, tokenName, appId, timelineEventTemplateTokenUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<TimelineEventTemplateToken>) => apiResponse.data));
    }

}
