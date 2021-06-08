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
var util_1 = require('../util');
var CollectionResponseWithTotalDomain_1 = require('../models/CollectionResponseWithTotalDomain');
var Domain_1 = require('../models/Domain');
/**
 * no description
 */
var DomainsApiRequestFactory = (function (_super) {
    __extends(DomainsApiRequestFactory, _super);
    function DomainsApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Returns a single domains with the id specified.
         * Get a single domain
         * @param domainId The unique ID of the domain.
         * @param archived Whether to return only results that have been archived.
         */
        this.async = getById(domainId, string, archived ?  : boolean, _options ?  : Configuration);
        /**
         * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
         * Get current domains
         * @param createdAt Only return domains created at this date.
         * @param createdAfter Only return domains created after this date.
         * @param createdBefore Only return domains created before this date.
         * @param updatedAt Only return domains updated at this date.
         * @param updatedAfter Only return domains updated after this date.
         * @param updatedBefore Only return domains updated before this date.
         * @param sort
         * @param properties
         * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
         * @param before
         * @param limit Maximum number of results per page.
         * @param archived Whether to return only results that have been archived.
         */
        this.async = getPage(createdAt ?  : number, createdAfter ?  : number, createdBefore ?  : number, updatedAt ?  : number, updatedAfter ?  : number, updatedBefore ?  : number, sort ?  : Array < string > , properties ?  : Array < string > , after ?  : string, before ?  : string, limit ?  : number, archived ?  : boolean, _options ?  : Configuration);
    }
    DomainsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'domainId' is not null or undefined
        if (domainId === null || domainId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter domainId was null or undefined when calling getById.');
        }
        // Path Params
        var localVarPath = '/cms/v3/domains/{domainId}'
            .replace('{' + 'domainId' + '}', encodeURIComponent(String(domainId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
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
    DomainsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/cms/v3/domains/';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (createdAt !== undefined) {
            requestContext.setQueryParam("createdAt", ObjectSerializer_1.ObjectSerializer.serialize(createdAt, "number", "int64"));
        }
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("createdAfter", ObjectSerializer_1.ObjectSerializer.serialize(createdAfter, "number", "int64"));
        }
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("createdBefore", ObjectSerializer_1.ObjectSerializer.serialize(createdBefore, "number", "int64"));
        }
        if (updatedAt !== undefined) {
            requestContext.setQueryParam("updatedAt", ObjectSerializer_1.ObjectSerializer.serialize(updatedAt, "number", "int64"));
        }
        if (updatedAfter !== undefined) {
            requestContext.setQueryParam("updatedAfter", ObjectSerializer_1.ObjectSerializer.serialize(updatedAfter, "number", "int64"));
        }
        if (updatedBefore !== undefined) {
            requestContext.setQueryParam("updatedBefore", ObjectSerializer_1.ObjectSerializer.serialize(updatedBefore, "number", "int64"));
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
    return DomainsApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.DomainsApiRequestFactory = DomainsApiRequestFactory;
var DomainsApiResponseProcessor = (function () {
    function DomainsApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getById
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getById(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getPage
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getPage(response, http_1.ResponseContext);
    }
    DomainsApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Domain", ""), as = Domain_1.Domain;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Domain", ""), as = Domain_1.Domain;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    DomainsApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_4 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalDomain", ""), as = CollectionResponseWithTotalDomain_1.CollectionResponseWithTotalDomain;
            return body_4;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_5 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_5);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_6 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalDomain", ""), as = CollectionResponseWithTotalDomain_1.CollectionResponseWithTotalDomain;
            return body_6;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return DomainsApiResponseProcessor;
})();
exports.DomainsApiResponseProcessor = DomainsApiResponseProcessor;
