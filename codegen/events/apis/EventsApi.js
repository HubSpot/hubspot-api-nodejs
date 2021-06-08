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
var CollectionResponseExternalUnifiedEvent_1 = require('../models/CollectionResponseExternalUnifiedEvent');
/**
 * no description
 */
var EventsApiRequestFactory = (function (_super) {
    __extends(EventsApiRequestFactory, _super);
    function EventsApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Returns a collection of events matching a query.
         * @param occurredAfter The starting time as an ISO 8601 timestamp.
         * @param occurredBefore The ending time as an ISO 8601 timestamp.
         * @param objectType The type of object being selected. Valid values are hubspot named object types (e.g. &#x60;contact&#x60;).
         * @param objectId The id of the selected object. If not present, then the &#x60;objectProperty&#x60; parameter is required.
         * @param eventType Limits the response to the specified event type.  For example &#x60;&amp;eventType&#x3D;e_visited_page&#x60; returns only &#x60;e_visited_page&#x60; events.  If not present all event types are returned.
         * @param after An additional parameter that may be used to get the next &#x60;limit&#x60; set of results.
         * @param before
         * @param limit The maximum number of events to return, defaults to 20.
         * @param sort Selects the sort field and order. Defaults to ascending, prefix with &#x60;-&#x60; for descending order. &#x60;occurredAt&#x60; is the only field supported for sorting.
         */
        this.async = getPage(occurredAfter ?  : Date, occurredBefore ?  : Date, objectType ?  : string, objectId ?  : number, eventType ?  : string, after ?  : string, before ?  : string, limit ?  : number, sort ?  : Array < string > , _options ?  : Configuration);
    }
    EventsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/events/v3/events';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (occurredAfter !== undefined) {
            requestContext.setQueryParam("occurredAfter", ObjectSerializer_1.ObjectSerializer.serialize(occurredAfter, "Date", "date-time"));
        }
        if (occurredBefore !== undefined) {
            requestContext.setQueryParam("occurredBefore", ObjectSerializer_1.ObjectSerializer.serialize(occurredBefore, "Date", "date-time"));
        }
        if (objectType !== undefined) {
            requestContext.setQueryParam("objectType", ObjectSerializer_1.ObjectSerializer.serialize(objectType, "string", ""));
        }
        if (objectId !== undefined) {
            requestContext.setQueryParam("objectId", ObjectSerializer_1.ObjectSerializer.serialize(objectId, "number", "int64"));
        }
        if (eventType !== undefined) {
            requestContext.setQueryParam("eventType", ObjectSerializer_1.ObjectSerializer.serialize(eventType, "string", ""));
        }
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "string", ""));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer_1.ObjectSerializer.serialize(before, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "Array<string>", ""));
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
    return EventsApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.EventsApiRequestFactory = EventsApiRequestFactory;
var EventsApiResponseProcessor = (function () {
    function EventsApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getPage
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getPage(response, http_1.ResponseContext);
    }
    EventsApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseExternalUnifiedEvent", ""), as = CollectionResponseExternalUnifiedEvent_1.CollectionResponseExternalUnifiedEvent;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseExternalUnifiedEvent", ""), as = CollectionResponseExternalUnifiedEvent_1.CollectionResponseExternalUnifiedEvent;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return EventsApiResponseProcessor;
})();
exports.EventsApiResponseProcessor = EventsApiResponseProcessor;
