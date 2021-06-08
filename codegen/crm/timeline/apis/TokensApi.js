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
var TimelineEventTemplateToken_1 = require('../models/TimelineEventTemplateToken');
var TimelineEventTemplateTokenUpdateRequest_1 = require('../models/TimelineEventTemplateTokenUpdateRequest');
/**
 * no description
 */
var TokensApiRequestFactory = (function (_super) {
    __extends(TokensApiRequestFactory, _super);
    function TokensApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * This will remove the token from an existing template. Existing events and CRM objects will still retain the token and its mapped object properties, but new ones will not.  The timeline will still display this property for older CRM objects if it's still referenced in the template `Markdown`. New events will not.  Any lists or reports referencing deleted tokens will no longer return new contacts, but old ones will still exist in the lists.
         * Removes a token from the event template
         * @param eventTemplateId The event template ID.
         * @param tokenName The token name.
         * @param appId The ID of the target app.
         */
        this.async = archive(eventTemplateId, string, tokenName, string, appId, number, _options ?  : Configuration);
        /**
         * Once you've defined an event template, it's likely that you'll want to define tokens for it as well. You can do this on the event template itself or update individual tokens here.  Event type tokens allow you to attach custom data to events displayed in a timeline or used for list segmentation.  You can also use `objectPropertyName` to associate any CRM object properties. This will allow you to fully build out CRM objects.  Token names should be unique across the template.
         * Adds a token to an existing event template
         * @param eventTemplateId The event template ID.
         * @param appId The ID of the target app.
         * @param timelineEventTemplateToken The new token definition.
         */
        this.async = create(eventTemplateId, string, appId, number, timelineEventTemplateToken, TimelineEventTemplateToken_1.TimelineEventTemplateToken, _options ?  : Configuration);
        /**
         * This will update the existing token on an event template. Name and type can't be changed on existing tokens.
         * Updates an existing token on an event template
         * @param eventTemplateId The event template ID.
         * @param tokenName The token name.
         * @param appId The ID of the target app.
         * @param timelineEventTemplateTokenUpdateRequest The updated token definition.
         */
        this.async = update(eventTemplateId, string, tokenName, string, appId, number, timelineEventTemplateTokenUpdateRequest, TimelineEventTemplateTokenUpdateRequest_1.TimelineEventTemplateTokenUpdateRequest, _options ?  : Configuration);
    }
    TokensApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter eventTemplateId was null or undefined when calling archive.');
        }
        // verify required parameter 'tokenName' is not null or undefined
        if (tokenName === null || tokenName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tokenName was null or undefined when calling archive.');
        }
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling archive.');
        }
        // Path Params
        var localVarPath = '/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}/tokens/{tokenName}'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
            .replace('{' + 'tokenName' + '}', encodeURIComponent(String(tokenName)))
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
    TokensApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter eventTemplateId was null or undefined when calling create.');
        }
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling create.');
        }
        // verify required parameter 'timelineEventTemplateToken' is not null or undefined
        if (timelineEventTemplateToken === null || timelineEventTemplateToken === undefined) {
            throw new baseapi_1.RequiredError('Required parameter timelineEventTemplateToken was null or undefined when calling create.');
        }
        // Path Params
        var localVarPath = '/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}/tokens'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(timelineEventTemplateToken, "TimelineEventTemplateToken", ""), contentType);
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
    TokensApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter eventTemplateId was null or undefined when calling update.');
        }
        // verify required parameter 'tokenName' is not null or undefined
        if (tokenName === null || tokenName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tokenName was null or undefined when calling update.');
        }
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling update.');
        }
        // verify required parameter 'timelineEventTemplateTokenUpdateRequest' is not null or undefined
        if (timelineEventTemplateTokenUpdateRequest === null || timelineEventTemplateTokenUpdateRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter timelineEventTemplateTokenUpdateRequest was null or undefined when calling update.');
        }
        // Path Params
        var localVarPath = '/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}/tokens/{tokenName}'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
            .replace('{' + 'tokenName' + '}', encodeURIComponent(String(tokenName)))
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(timelineEventTemplateTokenUpdateRequest, "TimelineEventTemplateTokenUpdateRequest", ""), contentType);
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
    return TokensApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.TokensApiRequestFactory = TokensApiRequestFactory;
var TokensApiResponseProcessor = (function () {
    function TokensApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to archive
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = archive(response, http_1.ResponseContext);
    }
    TokensApiResponseProcessor.prototype.Promise = ;
    return TokensApiResponseProcessor;
})();
exports.TokensApiResponseProcessor = TokensApiResponseProcessor;
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
Promise < TimelineEventTemplateToken_1.TimelineEventTemplateToken > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TimelineEventTemplateToken", ""), as = TimelineEventTemplateToken_1.TimelineEventTemplateToken;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TimelineEventTemplateToken", ""), as = TimelineEventTemplateToken_1.TimelineEventTemplateToken;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
update(response, http_1.ResponseContext);
Promise < TimelineEventTemplateToken_1.TimelineEventTemplateToken > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TimelineEventTemplateToken", ""), as = TimelineEventTemplateToken_1.TimelineEventTemplateToken;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TimelineEventTemplateToken", ""), as = TimelineEventTemplateToken_1.TimelineEventTemplateToken;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
