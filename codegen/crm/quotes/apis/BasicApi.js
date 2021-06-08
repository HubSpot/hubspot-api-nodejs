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
var CollectionResponseSimplePublicObjectWithAssociationsForwardPaging_1 = require('../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging');
var SimplePublicObjectWithAssociations_1 = require('../models/SimplePublicObjectWithAssociations');
/**
 * no description
 */
var BasicApiRequestFactory = (function (_super) {
    __extends(BasicApiRequestFactory, _super);
    function BasicApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Read an Object identified by `{quoteId}`. `{quoteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
         * Read
         * @param quoteId
         * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
         * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
         * @param archived Whether to return only results that have been archived.
         * @param idProperty The name of a property whose values are unique for this object type
         */
        this.async = getById(quoteId, string, properties ?  : Array < string > , associations ?  : Array < string > , archived ?  : boolean, idProperty ?  : string, _options ?  : Configuration);
        /**
         * Read a page of quotes. Control what is returned via the `properties` query param.
         * List
         * @param limit The maximum number of results to display per page.
         * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
         * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
         * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
         * @param archived Whether to return only results that have been archived.
         */
        this.async = getPage(limit ?  : number, after ?  : string, properties ?  : Array < string > , associations ?  : Array < string > , archived ?  : boolean, _options ?  : Configuration);
    }
    BasicApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'quoteId' is not null or undefined
        if (quoteId === null || quoteId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter quoteId was null or undefined when calling getById.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/quotes/{quoteId}'
            .replace('{' + 'quoteId' + '}', encodeURIComponent(String(quoteId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer_1.ObjectSerializer.serialize(properties, "Array<string>", ""));
        }
        if (associations !== undefined) {
            requestContext.setQueryParam("associations", ObjectSerializer_1.ObjectSerializer.serialize(associations, "Array<string>", ""));
        }
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer_1.ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (idProperty !== undefined) {
            requestContext.setQueryParam("idProperty", ObjectSerializer_1.ObjectSerializer.serialize(idProperty, "string", ""));
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
        return requestContext;
    };
    BasicApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/crm/v3/objects/quotes';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "string", ""));
        }
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer_1.ObjectSerializer.serialize(properties, "Array<string>", ""));
        }
        if (associations !== undefined) {
            requestContext.setQueryParam("associations", ObjectSerializer_1.ObjectSerializer.serialize(associations, "Array<string>", ""));
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
        return requestContext;
    };
    return BasicApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.BasicApiRequestFactory = BasicApiRequestFactory;
var BasicApiResponseProcessor = (function () {
    function BasicApiResponseProcessor() {
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
    BasicApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SimplePublicObjectWithAssociations", ""), as = SimplePublicObjectWithAssociations_1.SimplePublicObjectWithAssociations;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SimplePublicObjectWithAssociations", ""), as = SimplePublicObjectWithAssociations_1.SimplePublicObjectWithAssociations;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    BasicApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_4 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseSimplePublicObjectWithAssociationsForwardPaging", ""), as = CollectionResponseSimplePublicObjectWithAssociationsForwardPaging_1.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging;
            return body_4;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_5 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_5);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_6 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseSimplePublicObjectWithAssociationsForwardPaging", ""), as = CollectionResponseSimplePublicObjectWithAssociationsForwardPaging_1.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging;
            return body_6;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return BasicApiResponseProcessor;
})();
exports.BasicApiResponseProcessor = BasicApiResponseProcessor;
