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
var IdentificationTokenGenerationRequest_1 = require('../models/IdentificationTokenGenerationRequest');
var IdentificationTokenResponse_1 = require('../models/IdentificationTokenResponse');
/**
 * no description
 */
var GenerateApiRequestFactory = (function (_super) {
    __extends(GenerateApiRequestFactory, _super);
    function GenerateApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
         * Generate a token
         * @param identificationTokenGenerationRequest
         */
        this.async = generateToken(identificationTokenGenerationRequest, IdentificationTokenGenerationRequest_1.IdentificationTokenGenerationRequest, _options ?  : Configuration);
    }
    GenerateApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'identificationTokenGenerationRequest' is not null or undefined
        if (identificationTokenGenerationRequest === null || identificationTokenGenerationRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter identificationTokenGenerationRequest was null or undefined when calling generateToken.');
        }
        // Path Params
        var localVarPath = '/conversations/v3/visitor-identification/tokens/create';
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(identificationTokenGenerationRequest, "IdentificationTokenGenerationRequest", ""), contentType);
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
    return GenerateApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.GenerateApiRequestFactory = GenerateApiRequestFactory;
var GenerateApiResponseProcessor = (function () {
    function GenerateApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to generateToken
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = generateToken(response, http_1.ResponseContext);
    }
    GenerateApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "IdentificationTokenResponse", ""), as = IdentificationTokenResponse_1.IdentificationTokenResponse;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "IdentificationTokenResponse", ""), as = IdentificationTokenResponse_1.IdentificationTokenResponse;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return GenerateApiResponseProcessor;
})();
exports.GenerateApiResponseProcessor = GenerateApiResponseProcessor;
