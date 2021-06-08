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
var BatchInputPropertyCreate_1 = require('../models/BatchInputPropertyCreate');
var BatchInputPropertyName_1 = require('../models/BatchInputPropertyName');
var BatchReadInputPropertyName_1 = require('../models/BatchReadInputPropertyName');
var BatchResponseProperty_1 = require('../models/BatchResponseProperty');
/**
 * no description
 */
var BatchApiRequestFactory = (function (_super) {
    __extends(BatchApiRequestFactory, _super);
    function BatchApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Archive a provided list of properties. This method will return a 204 No Content response on success regardless of the initial state of the property (e.g. active, already archived, non-existent).
         * Archive a batch of properties
         * @param objectType
         * @param batchInputPropertyName
         */
        this.async = archive(objectType, string, batchInputPropertyName, BatchInputPropertyName_1.BatchInputPropertyName, _options ?  : Configuration);
        /**
         * Create a batch of properties using the same rules as when creating an individual property.
         * Create a batch of properties
         * @param objectType
         * @param batchInputPropertyCreate
         */
        this.async = create(objectType, string, batchInputPropertyCreate, BatchInputPropertyCreate_1.BatchInputPropertyCreate, _options ?  : Configuration);
        /**
         * Read a provided list of properties.
         * Read a batch of properties
         * @param objectType
         * @param batchReadInputPropertyName
         */
        this.async = read(objectType, string, batchReadInputPropertyName, BatchReadInputPropertyName_1.BatchReadInputPropertyName, _options ?  : Configuration);
    }
    BatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new baseapi_1.RequiredError('Required parameter objectType was null or undefined when calling archive.');
        }
        // verify required parameter 'batchInputPropertyName' is not null or undefined
        if (batchInputPropertyName === null || batchInputPropertyName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputPropertyName was null or undefined when calling archive.');
        }
        // Path Params
        var localVarPath = '/crm/v3/properties/{objectType}/batch/archive'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputPropertyName, "BatchInputPropertyName", ""), contentType);
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
    BatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new baseapi_1.RequiredError('Required parameter objectType was null or undefined when calling create.');
        }
        // verify required parameter 'batchInputPropertyCreate' is not null or undefined
        if (batchInputPropertyCreate === null || batchInputPropertyCreate === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputPropertyCreate was null or undefined when calling create.');
        }
        // Path Params
        var localVarPath = '/crm/v3/properties/{objectType}/batch/create'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputPropertyCreate, "BatchInputPropertyCreate", ""), contentType);
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
    BatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new baseapi_1.RequiredError('Required parameter objectType was null or undefined when calling read.');
        }
        // verify required parameter 'batchReadInputPropertyName' is not null or undefined
        if (batchReadInputPropertyName === null || batchReadInputPropertyName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchReadInputPropertyName was null or undefined when calling read.');
        }
        // Path Params
        var localVarPath = '/crm/v3/properties/{objectType}/batch/read'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchReadInputPropertyName, "BatchReadInputPropertyName", ""), contentType);
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
    return BatchApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.BatchApiRequestFactory = BatchApiRequestFactory;
var BatchApiResponseProcessor = (function () {
    function BatchApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to archive
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = archive(response, http_1.ResponseContext);
    }
    BatchApiResponseProcessor.prototype.Promise = ;
    return BatchApiResponseProcessor;
})();
exports.BatchApiResponseProcessor = BatchApiResponseProcessor;
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
Promise < BatchResponseProperty_1.BatchResponseProperty > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("201", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseProperty", ""), as = BatchResponseProperty_1.BatchResponseProperty;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("207", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseProperty", ""), as = BatchResponseProperty_1.BatchResponseProperty;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseProperty", ""), as = BatchResponseProperty_1.BatchResponseProperty;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
read(response, http_1.ResponseContext);
Promise < BatchResponseProperty_1.BatchResponseProperty > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseProperty", ""), as = BatchResponseProperty_1.BatchResponseProperty;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("207", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseProperty", ""), as = BatchResponseProperty_1.BatchResponseProperty;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseProperty", ""), as = BatchResponseProperty_1.BatchResponseProperty;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
