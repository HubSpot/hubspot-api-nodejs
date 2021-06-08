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
var IntegratorCardPayloadResponse_1 = require('../models/IntegratorCardPayloadResponse');
/**
 * no description
 */
var SampleResponseApiRequestFactory = (function (_super) {
    __extends(SampleResponseApiRequestFactory, _super);
    function SampleResponseApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
         * Get sample card detail response
         */
        this.async = getCardsSampleResponse(_options ?  : Configuration);
    }
    SampleResponseApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/crm/v3/extensions/cards/sample-response';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        // Apply auth methods
        return requestContext;
    };
    return SampleResponseApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.SampleResponseApiRequestFactory = SampleResponseApiRequestFactory;
var SampleResponseApiResponseProcessor = (function () {
    function SampleResponseApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getCardsSampleResponse
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getCardsSampleResponse(response, http_1.ResponseContext);
    }
    SampleResponseApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "IntegratorCardPayloadResponse", ""), as = IntegratorCardPayloadResponse_1.IntegratorCardPayloadResponse;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "IntegratorCardPayloadResponse", ""), as = IntegratorCardPayloadResponse_1.IntegratorCardPayloadResponse;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return SampleResponseApiResponseProcessor;
})();
exports.SampleResponseApiResponseProcessor = SampleResponseApiResponseProcessor;
