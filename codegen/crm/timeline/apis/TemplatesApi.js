var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TODO: better import syntax?
var baseapi_1 = require('./baseapi');
var http_1 = require('../http/http');
var ObjectSerializer_1 = require('../models/ObjectSerializer');
var exception_1 = require('./exception');
var CollectionResponseTimelineEventTemplate_1 = require('../models/CollectionResponseTimelineEventTemplate');
var TimelineEventTemplate_1 = require('../models/TimelineEventTemplate');
var TimelineEventTemplateCreateRequest_1 = require('../models/TimelineEventTemplateCreateRequest');
var TimelineEventTemplateUpdateRequest_1 = require('../models/TimelineEventTemplateUpdateRequest');
/**
 * no description
 */
var TemplatesApiRequestFactory = (function (_super) {
    __extends(TemplatesApiRequestFactory, _super);
    function TemplatesApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * This will delete the event template. All associated events will be removed from search results and the timeline UI.  This action can't be undone, so it's highly recommended that you stop using any associated events before deleting a template.
         * Deletes an event template for the app
         * @param eventTemplateId The event template ID.
         * @param appId The ID of the target app.
         */
        this.async = archive(eventTemplateId, string, appId, number, _options ?  : Configuration);
        /**
         * Event templates define the general structure for a custom timeline event. This includes formatted copy for its heading and details, as well as any custom property definitions. The event could be something like viewing a video, registering for a webinar, or filling out a survey. A single app can define multiple event templates.  Event templates will be created for contacts by default, but they can be created for companies, tickets, and deals as well.  Each event template contains its own set of tokens and `Markdown` templates. These tokens can be associated with any CRM object properties via the `objectPropertyName` field to fully build out CRM objects.  You must create an event template before you can create events.
         * Create an event template for your app
         * @param appId The ID of the target app.
         * @param timelineEventTemplateCreateRequest The new event template definition.
         */
        this.async = create(appId, number, timelineEventTemplateCreateRequest, TimelineEventTemplateCreateRequest_1.TimelineEventTemplateCreateRequest, _options ?  : Configuration);
        /**
         * Use this to list all event templates owned by your app.
         * List all event templates for your app
         * @param appId The ID of the target app.
         */
        this.async = getAll(appId, number, _options ?  : Configuration);
        /**
         * View the current state of a specific template and its tokens.
         * Gets a specific event template for your app
         * @param eventTemplateId The event template ID.
         * @param appId The ID of the target app.
         */
        this.async = getById(eventTemplateId, string, appId, number, _options ?  : Configuration);
        /**
         * Updates an existing template and its tokens. This is primarily used to update the headerTemplate/detailTemplate, and those changes will take effect for existing events.  You can also update or replace all the tokens in the template here instead of doing individual API calls on the `/tokens` endpoint.
         * Update an existing event template
         * @param eventTemplateId The event template ID.
         * @param appId The ID of the target app.
         * @param timelineEventTemplateUpdateRequest The updated event template definition.
         */
        this.async = update(eventTemplateId, string, appId, number, timelineEventTemplateUpdateRequest, TimelineEventTemplateUpdateRequest_1.TimelineEventTemplateUpdateRequest, _options ?  : Configuration);
    }
    TemplatesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter eventTemplateId was null or undefined when calling archive.');
        }
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling archive.');
        }
        // Path Params
        var localVarPath = '/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    TemplatesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling create.');
        }
        // verify required parameter 'timelineEventTemplateCreateRequest' is not null or undefined
        if (timelineEventTemplateCreateRequest === null || timelineEventTemplateCreateRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter timelineEventTemplateCreateRequest was null or undefined when calling create.');
        }
        // Path Params
        var localVarPath = '/crm/v3/timeline/{appId}/event-templates'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(timelineEventTemplateCreateRequest, "TimelineEventTemplateCreateRequest", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    TemplatesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling getAll.');
        }
        // Path Params
        var localVarPath = '/crm/v3/timeline/{appId}/event-templates'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    TemplatesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter eventTemplateId was null or undefined when calling getById.');
        }
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling getById.');
        }
        // Path Params
        var localVarPath = '/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    TemplatesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter eventTemplateId was null or undefined when calling update.');
        }
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling update.');
        }
        // verify required parameter 'timelineEventTemplateUpdateRequest' is not null or undefined
        if (timelineEventTemplateUpdateRequest === null || timelineEventTemplateUpdateRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter timelineEventTemplateUpdateRequest was null or undefined when calling update.');
        }
        // Path Params
        var localVarPath = '/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(timelineEventTemplateUpdateRequest, "TimelineEventTemplateUpdateRequest", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    return TemplatesApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.TemplatesApiRequestFactory = TemplatesApiRequestFactory;
var TemplatesApiResponseProcessor = (function () {
    function TemplatesApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to archive
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = archive(response, http_1.ResponseContext);
    }
    TemplatesApiResponseProcessor.prototype.Promise = ;
    return TemplatesApiResponseProcessor;
})();
exports.TemplatesApiResponseProcessor = TemplatesApiResponseProcessor;
void  > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("204", response.httpStatusCode); }
        return;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "void", ""), as = void ;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
create(response, http_1.ResponseContext);
Promise < TimelineEventTemplate_1.TimelineEventTemplate > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("201", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TimelineEventTemplate", ""), as = TimelineEventTemplate_1.TimelineEventTemplate;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TimelineEventTemplate", ""), as = TimelineEventTemplate_1.TimelineEventTemplate;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getAll(response, http_1.ResponseContext);
Promise < CollectionResponseTimelineEventTemplate_1.CollectionResponseTimelineEventTemplate > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseTimelineEventTemplate", ""), as = CollectionResponseTimelineEventTemplate_1.CollectionResponseTimelineEventTemplate;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseTimelineEventTemplate", ""), as = CollectionResponseTimelineEventTemplate_1.CollectionResponseTimelineEventTemplate;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getById(response, http_1.ResponseContext);
Promise < TimelineEventTemplate_1.TimelineEventTemplate > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TimelineEventTemplate", ""), as = TimelineEventTemplate_1.TimelineEventTemplate;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TimelineEventTemplate", ""), as = TimelineEventTemplate_1.TimelineEventTemplate;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
update(response, http_1.ResponseContext);
Promise < TimelineEventTemplate_1.TimelineEventTemplate > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TimelineEventTemplate", ""), as = TimelineEventTemplate_1.TimelineEventTemplate;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TimelineEventTemplate", ""), as = TimelineEventTemplate_1.TimelineEventTemplate;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
