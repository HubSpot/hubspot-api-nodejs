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
var PublicPerformanceResponse_1 = require('../models/PublicPerformanceResponse');
/**
 * no description
 */
var DefaultApiRequestFactory = (function (_super) {
    __extends(DefaultApiRequestFactory, _super);
    function DefaultApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Returns time series data website performance data for the given domain and/or path.
         * View your website's performance.
         * @param domain The domain to search return data for.
         * @param path The url path of the domain to return data for.
         * @param pad Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
         * @param sum Specifies whether the time series data should be summated for the given period. Defaults to false.
         * @param period A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
         * @param interval The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
         * @param start A timestamp in milliseconds that indicates the start of the time period.
         * @param end A timestamp in milliseconds that indicates the end of the time period.
         */
        this.async = getPage(domain ?  : string, path ?  : string, pad ?  : boolean, sum ?  : boolean, period ?  : string, interval ?  : string, start ?  : number, end ?  : number, _options ?  : Configuration);
        /**
         * Returns uptime time series website performance data for the given domain.
         * View your website's uptime.
         * @param domain The domain to search return data for.
         * @param path
         * @param pad Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
         * @param sum Specifies whether the time series data should be summated for the given period. Defaults to false.
         * @param period A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
         * @param interval The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
         * @param start A timestamp in milliseconds that indicates the start of the time period.
         * @param end A timestamp in milliseconds that indicates the end of the time period.
         */
        this.async = getUptime(domain ?  : string, path ?  : string, pad ?  : boolean, sum ?  : boolean, period ?  : string, interval ?  : string, start ?  : number, end ?  : number, _options ?  : Configuration);
    }
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/cms/v3/performance/';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (domain !== undefined) {
            requestContext.setQueryParam("domain", ObjectSerializer_1.ObjectSerializer.serialize(domain, "string", ""));
        }
        if (path !== undefined) {
            requestContext.setQueryParam("path", ObjectSerializer_1.ObjectSerializer.serialize(path, "string", ""));
        }
        if (pad !== undefined) {
            requestContext.setQueryParam("pad", ObjectSerializer_1.ObjectSerializer.serialize(pad, "boolean", ""));
        }
        if (sum !== undefined) {
            requestContext.setQueryParam("sum", ObjectSerializer_1.ObjectSerializer.serialize(sum, "boolean", ""));
        }
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer_1.ObjectSerializer.serialize(period, "string", ""));
        }
        if (interval !== undefined) {
            requestContext.setQueryParam("interval", ObjectSerializer_1.ObjectSerializer.serialize(interval, "string", ""));
        }
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer_1.ObjectSerializer.serialize(start, "number", "int64"));
        }
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer_1.ObjectSerializer.serialize(end, "number", "int64"));
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
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/cms/v3/performance/uptime';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (domain !== undefined) {
            requestContext.setQueryParam("domain", ObjectSerializer_1.ObjectSerializer.serialize(domain, "string", ""));
        }
        if (path !== undefined) {
            requestContext.setQueryParam("path", ObjectSerializer_1.ObjectSerializer.serialize(path, "string", ""));
        }
        if (pad !== undefined) {
            requestContext.setQueryParam("pad", ObjectSerializer_1.ObjectSerializer.serialize(pad, "boolean", ""));
        }
        if (sum !== undefined) {
            requestContext.setQueryParam("sum", ObjectSerializer_1.ObjectSerializer.serialize(sum, "boolean", ""));
        }
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer_1.ObjectSerializer.serialize(period, "string", ""));
        }
        if (interval !== undefined) {
            requestContext.setQueryParam("interval", ObjectSerializer_1.ObjectSerializer.serialize(interval, "string", ""));
        }
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer_1.ObjectSerializer.serialize(start, "number", "int64"));
        }
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer_1.ObjectSerializer.serialize(end, "number", "int64"));
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
    return DefaultApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.DefaultApiRequestFactory = DefaultApiRequestFactory;
var DefaultApiResponseProcessor = (function () {
    function DefaultApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getPage
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getPage(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getUptime
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getUptime(response, http_1.ResponseContext);
    }
    DefaultApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "PublicPerformanceResponse", ""), as = PublicPerformanceResponse_1.PublicPerformanceResponse;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "PublicPerformanceResponse", ""), as = PublicPerformanceResponse_1.PublicPerformanceResponse;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    DefaultApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_4 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "PublicPerformanceResponse", ""), as = PublicPerformanceResponse_1.PublicPerformanceResponse;
            return body_4;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_5 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_5);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_6 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "PublicPerformanceResponse", ""), as = PublicPerformanceResponse_1.PublicPerformanceResponse;
            return body_6;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return DefaultApiResponseProcessor;
})();
exports.DefaultApiResponseProcessor = DefaultApiResponseProcessor;
