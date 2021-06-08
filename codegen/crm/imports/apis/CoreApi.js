var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TODO: better import syntax?
var baseapi_1 = require('./baseapi');
var http_1 = require('../http/http');
var FormData = require("form-data");
var ObjectSerializer_1 = require('../models/ObjectSerializer');
var exception_1 = require('./exception');
var util_1 = require('../util');
var ActionResponse_1 = require('../models/ActionResponse');
var CollectionResponsePublicImportResponse_1 = require('../models/CollectionResponsePublicImportResponse');
var PublicImportResponse_1 = require('../models/PublicImportResponse');
/**
 * no description
 */
var CoreApiRequestFactory = (function (_super) {
    __extends(CoreApiRequestFactory, _super);
    function CoreApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * This allows a developer to cancel an active import.
         * Cancel an active import
         * @param importId
         */
        this.async = cancel(importId, number, _options ?  : Configuration);
        /**
         * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
         * Start a new import
         * @param files A list of files containing the data to import
         * @param importRequest JSON formatted metadata about the import. This includes a name for the import and the column mappings for each file. See the overview tab for more on the required format.
         */
        this.async = create(files ?  : HttpFile, importRequest ?  : string, _options ?  : Configuration);
        /**
         * A complete summary of an import record, including any updates.
         * Get the information on any import
         * @param importId
         */
        this.async = getById(importId, number, _options ?  : Configuration);
        /**
         * Returns a paged list of active imports for this account.
         * Get active imports
         * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
         * @param before
         * @param limit The maximum number of results to display per page.
         */
        this.async = getPage(after ?  : string, before ?  : string, limit ?  : number, _options ?  : Configuration);
    }
    CoreApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'importId' is not null or undefined
        if (importId === null || importId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter importId was null or undefined when calling cancel.');
        }
        // Path Params
        var localVarPath = '/crm/v3/imports/{importId}/cancel'
            .replace('{' + 'importId' + '}', encodeURIComponent(String(importId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
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
    CoreApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/crm/v3/imports/';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        var localVarFormParams = new FormData();
        if (files !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('files', files.data, files.name);
        }
        if (importRequest !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('importRequest', importRequest, as, any);
        }
        requestContext.setBody(localVarFormParams);
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
    CoreApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'importId' is not null or undefined
        if (importId === null || importId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter importId was null or undefined when calling getById.');
        }
        // Path Params
        var localVarPath = '/crm/v3/imports/{importId}'
            .replace('{' + 'importId' + '}', encodeURIComponent(String(importId)));
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
    CoreApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/crm/v3/imports/';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "string", ""));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer_1.ObjectSerializer.serialize(before, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"));
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
    return CoreApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.CoreApiRequestFactory = CoreApiRequestFactory;
var CoreApiResponseProcessor = (function () {
    function CoreApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to cancel
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = cancel(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to create
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = create(response, http_1.ResponseContext);
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
    CoreApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "ActionResponse", ""), as = ActionResponse_1.ActionResponse;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "ActionResponse", ""), as = ActionResponse_1.ActionResponse;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    CoreApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_4 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "PublicImportResponse", ""), as = PublicImportResponse_1.PublicImportResponse;
            return body_4;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_5 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_5);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_6 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "PublicImportResponse", ""), as = PublicImportResponse_1.PublicImportResponse;
            return body_6;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    CoreApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_7 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "PublicImportResponse", ""), as = PublicImportResponse_1.PublicImportResponse;
            return body_7;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_8 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_8);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_9 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "PublicImportResponse", ""), as = PublicImportResponse_1.PublicImportResponse;
            return body_9;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    CoreApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_10 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponsePublicImportResponse", ""), as = CollectionResponsePublicImportResponse_1.CollectionResponsePublicImportResponse;
            return body_10;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_11 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_11);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_12 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponsePublicImportResponse", ""), as = CollectionResponsePublicImportResponse_1.CollectionResponsePublicImportResponse;
            return body_12;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return CoreApiResponseProcessor;
})();
exports.CoreApiResponseProcessor = CoreApiResponseProcessor;
