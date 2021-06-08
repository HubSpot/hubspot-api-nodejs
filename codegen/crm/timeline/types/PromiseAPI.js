var ObservableAPI_1 = require('./ObservableAPI');
var PromiseEventsApi = (function () {
    function PromiseEventsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Creates an instance of a timeline event based on an event template. Once created, this event is immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don't exist.
     * Create a single event
     * @param timelineEvent The timeline event definition.
     */
    PromiseEventsApi.prototype.create = function (timelineEvent, _options) {
        var result = this.api.create(timelineEvent, _options);
        return result.toPromise();
    };
    /**
     * Creates multiple instances of timeline events based on an event template. Once created, these event are immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don't exist.
     * Creates multiple events
     * @param batchInputTimelineEvent The timeline event definition.
     */
    PromiseEventsApi.prototype.createBatch = function (batchInputTimelineEvent, _options) {
        var result = this.api.createBatch(batchInputTimelineEvent, _options);
        return result.toPromise();
    };
    /**
     * This returns the previously created event. It contains all existing info for the event, but not necessarily the CRM object.
     * Gets the event
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     */
    PromiseEventsApi.prototype.getById = function (eventTemplateId, eventId, _options) {
        var result = this.api.getById(eventTemplateId, eventId, _options);
        return result.toPromise();
    };
    /**
     * This will take the `detailTemplate` from the event template and return an object rendering the specified event. If the template references `extraData` that isn't found in the event, it will be ignored and we'll render without it.
     * Gets the detailTemplate as rendered
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     */
    PromiseEventsApi.prototype.getDetailById = function (eventTemplateId, eventId, _options) {
        var result = this.api.getDetailById(eventTemplateId, eventId, _options);
        return result.toPromise();
    };
    /**
     * This will take either the `headerTemplate` or `detailTemplate` from the event template and render for the specified event as HTML. If the template references `extraData` that isn't found in the event, it will be ignored and we'll render without it.
     * Renders the header or detail as HTML
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     * @param detail Set to &#39;true&#39;, we want to render the &#x60;detailTemplate&#x60; instead of the &#x60;headerTemplate&#x60;.
     */
    PromiseEventsApi.prototype.getRenderById = function (eventTemplateId, eventId, detail, _options) {
        var result = this.api.getRenderById(eventTemplateId, eventId, detail, _options);
        return result.toPromise();
    };
    return PromiseEventsApi;
})();
exports.PromiseEventsApi = PromiseEventsApi;
var ObservableAPI_2 = require('./ObservableAPI');
var PromiseTemplatesApi = (function () {
    function PromiseTemplatesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableTemplatesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * This will delete the event template. All associated events will be removed from search results and the timeline UI.  This action can't be undone, so it's highly recommended that you stop using any associated events before deleting a template.
     * Deletes an event template for the app
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     */
    PromiseTemplatesApi.prototype.archive = function (eventTemplateId, appId, _options) {
        var result = this.api.archive(eventTemplateId, appId, _options);
        return result.toPromise();
    };
    /**
     * Event templates define the general structure for a custom timeline event. This includes formatted copy for its heading and details, as well as any custom property definitions. The event could be something like viewing a video, registering for a webinar, or filling out a survey. A single app can define multiple event templates.  Event templates will be created for contacts by default, but they can be created for companies, tickets, and deals as well.  Each event template contains its own set of tokens and `Markdown` templates. These tokens can be associated with any CRM object properties via the `objectPropertyName` field to fully build out CRM objects.  You must create an event template before you can create events.
     * Create an event template for your app
     * @param appId The ID of the target app.
     * @param timelineEventTemplateCreateRequest The new event template definition.
     */
    PromiseTemplatesApi.prototype.create = function (appId, timelineEventTemplateCreateRequest, _options) {
        var result = this.api.create(appId, timelineEventTemplateCreateRequest, _options);
        return result.toPromise();
    };
    /**
     * Use this to list all event templates owned by your app.
     * List all event templates for your app
     * @param appId The ID of the target app.
     */
    PromiseTemplatesApi.prototype.getAll = function (appId, _options) {
        var result = this.api.getAll(appId, _options);
        return result.toPromise();
    };
    /**
     * View the current state of a specific template and its tokens.
     * Gets a specific event template for your app
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     */
    PromiseTemplatesApi.prototype.getById = function (eventTemplateId, appId, _options) {
        var result = this.api.getById(eventTemplateId, appId, _options);
        return result.toPromise();
    };
    /**
     * Updates an existing template and its tokens. This is primarily used to update the headerTemplate/detailTemplate, and those changes will take effect for existing events.  You can also update or replace all the tokens in the template here instead of doing individual API calls on the `/tokens` endpoint.
     * Update an existing event template
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     * @param timelineEventTemplateUpdateRequest The updated event template definition.
     */
    PromiseTemplatesApi.prototype.update = function (eventTemplateId, appId, timelineEventTemplateUpdateRequest, _options) {
        var result = this.api.update(eventTemplateId, appId, timelineEventTemplateUpdateRequest, _options);
        return result.toPromise();
    };
    return PromiseTemplatesApi;
})();
exports.PromiseTemplatesApi = PromiseTemplatesApi;
var ObservableAPI_3 = require('./ObservableAPI');
var PromiseTokensApi = (function () {
    function PromiseTokensApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableTokensApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * This will remove the token from an existing template. Existing events and CRM objects will still retain the token and its mapped object properties, but new ones will not.  The timeline will still display this property for older CRM objects if it's still referenced in the template `Markdown`. New events will not.  Any lists or reports referencing deleted tokens will no longer return new contacts, but old ones will still exist in the lists.
     * Removes a token from the event template
     * @param eventTemplateId The event template ID.
     * @param tokenName The token name.
     * @param appId The ID of the target app.
     */
    PromiseTokensApi.prototype.archive = function (eventTemplateId, tokenName, appId, _options) {
        var result = this.api.archive(eventTemplateId, tokenName, appId, _options);
        return result.toPromise();
    };
    /**
     * Once you've defined an event template, it's likely that you'll want to define tokens for it as well. You can do this on the event template itself or update individual tokens here.  Event type tokens allow you to attach custom data to events displayed in a timeline or used for list segmentation.  You can also use `objectPropertyName` to associate any CRM object properties. This will allow you to fully build out CRM objects.  Token names should be unique across the template.
     * Adds a token to an existing event template
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     * @param timelineEventTemplateToken The new token definition.
     */
    PromiseTokensApi.prototype.create = function (eventTemplateId, appId, timelineEventTemplateToken, _options) {
        var result = this.api.create(eventTemplateId, appId, timelineEventTemplateToken, _options);
        return result.toPromise();
    };
    /**
     * This will update the existing token on an event template. Name and type can't be changed on existing tokens.
     * Updates an existing token on an event template
     * @param eventTemplateId The event template ID.
     * @param tokenName The token name.
     * @param appId The ID of the target app.
     * @param timelineEventTemplateTokenUpdateRequest The updated token definition.
     */
    PromiseTokensApi.prototype.update = function (eventTemplateId, tokenName, appId, timelineEventTemplateTokenUpdateRequest, _options) {
        var result = this.api.update(eventTemplateId, tokenName, appId, timelineEventTemplateTokenUpdateRequest, _options);
        return result.toPromise();
    };
    return PromiseTokensApi;
})();
exports.PromiseTokensApi = PromiseTokensApi;
