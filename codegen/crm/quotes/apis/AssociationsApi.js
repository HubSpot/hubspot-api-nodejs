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
var CollectionResponseAssociatedIdForwardPaging_1 = require('../models/CollectionResponseAssociatedIdForwardPaging');
/**
 * no description
 */
var AssociationsApiRequestFactory = (function (_super) {
    __extends(AssociationsApiRequestFactory, _super);
    function AssociationsApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * List associations of a quote by type
         * @param quoteId
         * @param toObjectType
         * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
         * @param limit The maximum number of results to display per page.
         */
        this.async = getAll(quoteId, string, toObjectType, string, after ?  : string, limit ?  : number, _options ?  : Configuration);
    }
    AssociationsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'quoteId' is not null or undefined
        if (quoteId === null || quoteId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter quoteId was null or undefined when calling getAll.');
        }
        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new baseapi_1.RequiredError('Required parameter toObjectType was null or undefined when calling getAll.');
        }
        // Path Params
        var localVarPath = '/crm/v3/objects/quotes/{quoteId}/associations/{toObjectType}'
            .replace('{' + 'quoteId' + '}', encodeURIComponent(String(quoteId)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "string", ""));
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
        return requestContext;
    };
    return AssociationsApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.AssociationsApiRequestFactory = AssociationsApiRequestFactory;
var AssociationsApiResponseProcessor = (function () {
    function AssociationsApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getAll
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getAll(response, http_1.ResponseContext);
    }
    AssociationsApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseAssociatedIdForwardPaging", ""), as = CollectionResponseAssociatedIdForwardPaging_1.CollectionResponseAssociatedIdForwardPaging;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseAssociatedIdForwardPaging", ""), as = CollectionResponseAssociatedIdForwardPaging_1.CollectionResponseAssociatedIdForwardPaging;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return AssociationsApiResponseProcessor;
})();
exports.AssociationsApiResponseProcessor = AssociationsApiResponseProcessor;
