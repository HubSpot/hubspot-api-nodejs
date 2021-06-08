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
var ActionResponse_1 = require('../models/ActionResponse');
var SyncContactsRequest_1 = require('../models/SyncContactsRequest');
var SyncProductsRequest_1 = require('../models/SyncProductsRequest');
/**
 * no description
 */
var SyncApiRequestFactory = (function (_super) {
    __extends(SyncApiRequestFactory, _super);
    function SyncApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Imports contacts' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
         * Import contacts
         * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
         * @param syncContactsRequest
         */
        this.async = createContact(appId, number, syncContactsRequest, SyncContactsRequest_1.SyncContactsRequest, _options ?  : Configuration);
        /**
         * Imports products' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
         * Import products
         * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
         * @param syncProductsRequest
         */
        this.async = createProduct(appId, number, syncProductsRequest, SyncProductsRequest_1.SyncProductsRequest, _options ?  : Configuration);
    }
    SyncApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling createContact.');
        }
        // verify required parameter 'syncContactsRequest' is not null or undefined
        if (syncContactsRequest === null || syncContactsRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter syncContactsRequest was null or undefined when calling createContact.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/sync/{appId}/contacts'
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(syncContactsRequest, "SyncContactsRequest", ""), contentType);
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
    SyncApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling createProduct.');
        }
        // verify required parameter 'syncProductsRequest' is not null or undefined
        if (syncProductsRequest === null || syncProductsRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter syncProductsRequest was null or undefined when calling createProduct.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/sync/{appId}/products'
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(syncProductsRequest, "SyncProductsRequest", ""), contentType);
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
    return SyncApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.SyncApiRequestFactory = SyncApiRequestFactory;
var SyncApiResponseProcessor = (function () {
    function SyncApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to createContact
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = createContact(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to createProduct
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = createProduct(response, http_1.ResponseContext);
    }
    SyncApiResponseProcessor.prototype.Promise = function () {
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
    SyncApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_4 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "ActionResponse", ""), as = ActionResponse_1.ActionResponse;
            return body_4;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_5 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_5);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_6 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "ActionResponse", ""), as = ActionResponse_1.ActionResponse;
            return body_6;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return SyncApiResponseProcessor;
})();
exports.SyncApiResponseProcessor = SyncApiResponseProcessor;
