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
var CollectionResponseWithTotalSimplePublicObjectForwardPaging_1 = require('../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging');
var PublicObjectSearchRequest_1 = require('../models/PublicObjectSearchRequest');
/**
 * no description
 */
var SearchApiRequestFactory = (function (_super) {
    __extends(SearchApiRequestFactory, _super);
    function SearchApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Filter, Sort, and Search CRM Objects
         * Filter, Sort, and Search CRM Objects
         * @param publicObjectSearchRequest
         */
        this.async = doSearch(publicObjectSearchRequest, PublicObjectSearchRequest_1.PublicObjectSearchRequest, _options ?  : Configuration);
    }
    SearchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'publicObjectSearchRequest' is not null or undefined
        if (publicObjectSearchRequest === null || publicObjectSearchRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter publicObjectSearchRequest was null or undefined when calling doSearch.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/companies/search';
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(publicObjectSearchRequest, "PublicObjectSearchRequest", ""), contentType);
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
    return SearchApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.SearchApiRequestFactory = SearchApiRequestFactory;
var SearchApiResponseProcessor = (function () {
    function SearchApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to doSearch
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = doSearch(response, http_1.ResponseContext);
    }
    SearchApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalSimplePublicObjectForwardPaging", ""), as = CollectionResponseWithTotalSimplePublicObjectForwardPaging_1.CollectionResponseWithTotalSimplePublicObjectForwardPaging;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalSimplePublicObjectForwardPaging", ""), as = CollectionResponseWithTotalSimplePublicObjectForwardPaging_1.CollectionResponseWithTotalSimplePublicObjectForwardPaging;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return SearchApiResponseProcessor;
})();
exports.SearchApiResponseProcessor = SearchApiResponseProcessor;
