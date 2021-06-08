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
var BatchInputCallbackCompletionBatchRequest_1 = require('../models/BatchInputCallbackCompletionBatchRequest');
var CallbackCompletionRequest_1 = require('../models/CallbackCompletionRequest');
/**
 * no description
 */
var CallbacksApiRequestFactory = (function (_super) {
    __extends(CallbacksApiRequestFactory, _super);
    function CallbacksApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Completes the given action callback.
         * Complete a callback
         * @param callbackId The ID of the target app.
         * @param callbackCompletionRequest The result of the completed action.
         */
        this.async = complete(callbackId, string, callbackCompletionRequest, CallbackCompletionRequest_1.CallbackCompletionRequest, _options ?  : Configuration);
        /**
         * Completes the given action callbacks.
         * Complete a batch of callbacks
         * @param batchInputCallbackCompletionBatchRequest The result of the completed action.
         */
        this.async = completeBatch(batchInputCallbackCompletionBatchRequest, BatchInputCallbackCompletionBatchRequest_1.BatchInputCallbackCompletionBatchRequest, _options ?  : Configuration);
    }
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'callbackId' is not null or undefined
        if (callbackId === null || callbackId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter callbackId was null or undefined when calling complete.');
        }
        // verify required parameter 'callbackCompletionRequest' is not null or undefined
        if (callbackCompletionRequest === null || callbackCompletionRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter callbackCompletionRequest was null or undefined when calling complete.');
        }
        // Path Params
        var localVarPath = '/automation/v4/actions/callbacks/{callbackId}/complete'
            .replace('{' + 'callbackId' + '}', encodeURIComponent(String(callbackId)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(callbackCompletionRequest, "CallbackCompletionRequest", ""), contentType);
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
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'batchInputCallbackCompletionBatchRequest' is not null or undefined
        if (batchInputCallbackCompletionBatchRequest === null || batchInputCallbackCompletionBatchRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputCallbackCompletionBatchRequest was null or undefined when calling completeBatch.');
        }
        // Path Params
        var localVarPath = '/automation/v4/actions/callbacks/complete';
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputCallbackCompletionBatchRequest, "BatchInputCallbackCompletionBatchRequest", ""), contentType);
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
    return CallbacksApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.CallbacksApiRequestFactory = CallbacksApiRequestFactory;
var CallbacksApiResponseProcessor = (function () {
    function CallbacksApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to complete
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = complete(response, http_1.ResponseContext);
    }
    CallbacksApiResponseProcessor.prototype.Promise = ;
    return CallbacksApiResponseProcessor;
})();
exports.CallbacksApiResponseProcessor = CallbacksApiResponseProcessor;
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
completeBatch(response, http_1.ResponseContext);
Promise < void  > {
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
