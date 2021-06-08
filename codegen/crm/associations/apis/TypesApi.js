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
var CollectionResponsePublicAssociationDefiniton_1 = require('../models/CollectionResponsePublicAssociationDefiniton');
/**
 * no description
 */
var TypesApiRequestFactory = (function (_super) {
    __extends(TypesApiRequestFactory, _super);
    function TypesApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * List all the valid association types available between two object types
         * List association types
         * @param fromObjectType
         * @param toObjectType
         */
        this.async = getAll(fromObjectType, string, toObjectType, string, _options ?  : Configuration);
    }
    TypesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new baseapi_1.RequiredError('Required parameter fromObjectType was null or undefined when calling getAll.');
        }
        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new baseapi_1.RequiredError('Required parameter toObjectType was null or undefined when calling getAll.');
        }
        // Path Params
        var localVarPath = '/crm/v3/associations/{fromObjectType}/{toObjectType}/types'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));
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
    return TypesApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.TypesApiRequestFactory = TypesApiRequestFactory;
var TypesApiResponseProcessor = (function () {
    function TypesApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getAll
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getAll(response, http_1.ResponseContext);
    }
    TypesApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponsePublicAssociationDefiniton", ""), as = CollectionResponsePublicAssociationDefiniton_1.CollectionResponsePublicAssociationDefiniton;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponsePublicAssociationDefiniton", ""), as = CollectionResponsePublicAssociationDefiniton_1.CollectionResponsePublicAssociationDefiniton;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return TypesApiResponseProcessor;
})();
exports.TypesApiResponseProcessor = TypesApiResponseProcessor;
