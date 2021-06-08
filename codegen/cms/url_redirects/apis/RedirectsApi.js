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
var CollectionResponseWithTotalUrlMapping_1 = require('../models/CollectionResponseWithTotalUrlMapping');
var UrlMapping_1 = require('../models/UrlMapping');
var UrlMappingCreateRequestBody_1 = require('../models/UrlMappingCreateRequestBody');
/**
 * no description
 */
var RedirectsApiRequestFactory = (function (_super) {
    __extends(RedirectsApiRequestFactory, _super);
    function RedirectsApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Delete one existing redirect, so it is no longer mapped.
         * Delete a redirect
         * @param urlRedirectId The ID of the target redirect.
         */
        this.async = archive(urlRedirectId, string, _options ?  : Configuration);
        /**
         * Creates and configures a new URL redirect.
         * Create a redirect
         * @param urlMappingCreateRequestBody
         */
        this.async = create(urlMappingCreateRequestBody ?  : UrlMappingCreateRequestBody_1.UrlMappingCreateRequestBody, _options ?  : Configuration);
        /**
         * Returns the details for a single existing URL redirect by ID.
         * Get details for a redirect
         * @param urlRedirectId The ID of the target redirect.
         */
        this.async = getById(urlRedirectId, string, _options ?  : Configuration);
        /**
         * Returns all existing URL redirects. Results can be limited and filtered by creation or updated date.
         * Get current redirects
         * @param createdAt Only return redirects created on exactly this date.
         * @param createdAfter Only return redirects created after this date.
         * @param createdBefore Only return redirects created before this date.
         * @param updatedAt Only return redirects last updated on exactly this date.
         * @param updatedAfter Only return redirects last updated after this date.
         * @param updatedBefore Only return redirects last updated before this date.
         * @param sort
         * @param properties
         * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
         * @param before
         * @param limit Maximum number of result per page
         * @param archived Whether to return only results that have been archived.
         */
        this.async = getPage(createdAt ?  : Date, createdAfter ?  : Date, createdBefore ?  : Date, updatedAt ?  : Date, updatedAfter ?  : Date, updatedBefore ?  : Date, sort ?  : Array < string > , properties ?  : Array < string > , after ?  : string, before ?  : string, limit ?  : number, archived ?  : boolean, _options ?  : Configuration);
        /**
         * Updates the settings for an existing URL redirect.
         * Update a redirect
         * @param urlRedirectId
         * @param urlMapping
         */
        this.async = update(urlRedirectId, string, urlMapping ?  : UrlMapping_1.UrlMapping, _options ?  : Configuration);
    }
    RedirectsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'urlRedirectId' is not null or undefined
        if (urlRedirectId === null || urlRedirectId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter urlRedirectId was null or undefined when calling archive.');
        }
        // Path Params
        var localVarPath = '/cms/v3/url-redirects/{urlRedirectId}'
            .replace('{' + 'urlRedirectId' + '}', encodeURIComponent(String(urlRedirectId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    RedirectsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/cms/v3/url-redirects/';
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(urlMappingCreateRequestBody, "UrlMappingCreateRequestBody", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    RedirectsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'urlRedirectId' is not null or undefined
        if (urlRedirectId === null || urlRedirectId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter urlRedirectId was null or undefined when calling getById.');
        }
        // Path Params
        var localVarPath = '/cms/v3/url-redirects/{urlRedirectId}'
            .replace('{' + 'urlRedirectId' + '}', encodeURIComponent(String(urlRedirectId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    RedirectsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/cms/v3/url-redirects/';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (createdAt !== undefined) {
            requestContext.setQueryParam("createdAt", ObjectSerializer_1.ObjectSerializer.serialize(createdAt, "Date", "date-time"));
        }
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("createdAfter", ObjectSerializer_1.ObjectSerializer.serialize(createdAfter, "Date", "date-time"));
        }
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("createdBefore", ObjectSerializer_1.ObjectSerializer.serialize(createdBefore, "Date", "date-time"));
        }
        if (updatedAt !== undefined) {
            requestContext.setQueryParam("updatedAt", ObjectSerializer_1.ObjectSerializer.serialize(updatedAt, "Date", "date-time"));
        }
        if (updatedAfter !== undefined) {
            requestContext.setQueryParam("updatedAfter", ObjectSerializer_1.ObjectSerializer.serialize(updatedAfter, "Date", "date-time"));
        }
        if (updatedBefore !== undefined) {
            requestContext.setQueryParam("updatedBefore", ObjectSerializer_1.ObjectSerializer.serialize(updatedBefore, "Date", "date-time"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "Array<string>", ""));
        }
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer_1.ObjectSerializer.serialize(properties, "Array<string>", ""));
        }
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "string", ""));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer_1.ObjectSerializer.serialize(before, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer_1.ObjectSerializer.serialize(archived, "boolean", ""));
        }
        // Header Params
        // Form Params
        // Body Params
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    RedirectsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'urlRedirectId' is not null or undefined
        if (urlRedirectId === null || urlRedirectId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter urlRedirectId was null or undefined when calling update.');
        }
        // Path Params
        var localVarPath = '/cms/v3/url-redirects/{urlRedirectId}'
            .replace('{' + 'urlRedirectId' + '}', encodeURIComponent(String(urlRedirectId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(urlMapping, "UrlMapping", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    return RedirectsApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.RedirectsApiRequestFactory = RedirectsApiRequestFactory;
var RedirectsApiResponseProcessor = (function () {
    function RedirectsApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to archive
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = archive(response, http_1.ResponseContext);
    }
    RedirectsApiResponseProcessor.prototype.Promise = ;
    return RedirectsApiResponseProcessor;
})();
exports.RedirectsApiResponseProcessor = RedirectsApiResponseProcessor;
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
Promise < UrlMapping_1.UrlMapping > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("201", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "UrlMapping", ""), as = UrlMapping_1.UrlMapping;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "UrlMapping", ""), as = UrlMapping_1.UrlMapping;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getById(response, http_1.ResponseContext);
Promise < UrlMapping_1.UrlMapping > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "UrlMapping", ""), as = UrlMapping_1.UrlMapping;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "UrlMapping", ""), as = UrlMapping_1.UrlMapping;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getPage(response, http_1.ResponseContext);
Promise < CollectionResponseWithTotalUrlMapping_1.CollectionResponseWithTotalUrlMapping > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalUrlMapping", ""), as = CollectionResponseWithTotalUrlMapping_1.CollectionResponseWithTotalUrlMapping;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalUrlMapping", ""), as = CollectionResponseWithTotalUrlMapping_1.CollectionResponseWithTotalUrlMapping;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
update(response, http_1.ResponseContext);
Promise < UrlMapping_1.UrlMapping > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "UrlMapping", ""), as = UrlMapping_1.UrlMapping;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "UrlMapping", ""), as = UrlMapping_1.UrlMapping;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
