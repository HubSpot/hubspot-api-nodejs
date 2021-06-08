var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// typings of url-parse are incorrect...
// @ts-ignore 
var URLParse = require("url-parse");
var rxjsStub_1 = require('../rxjsStub');
__export(require('./isomorphic-fetch'));
/**
 * Represents an HTTP method.
 */
(function (HttpMethod) {
    HttpMethod[HttpMethod["GET"] = "GET"] = "GET";
    HttpMethod[HttpMethod["HEAD"] = "HEAD"] = "HEAD";
    HttpMethod[HttpMethod["POST"] = "POST"] = "POST";
    HttpMethod[HttpMethod["PUT"] = "PUT"] = "PUT";
    HttpMethod[HttpMethod["DELETE"] = "DELETE"] = "DELETE";
    HttpMethod[HttpMethod["CONNECT"] = "CONNECT"] = "CONNECT";
    HttpMethod[HttpMethod["OPTIONS"] = "OPTIONS"] = "OPTIONS";
    HttpMethod[HttpMethod["TRACE"] = "TRACE"] = "TRACE";
    HttpMethod[HttpMethod["PATCH"] = "PATCH"] = "PATCH";
})(exports.HttpMethod || (exports.HttpMethod = {}));
var HttpMethod = exports.HttpMethod;
var HttpException = (function (_super) {
    __extends(HttpException, _super);
    function HttpException(msg) {
        _super.call(this, msg);
    }
    return HttpException;
})(Error);
exports.HttpException = HttpException;
/**
 * Represents an HTTP request context
 */
var RequestContext = (function () {
    /**
     * Creates the request context using a http method and request resource url
     *
     * @param url url of the requested resource
     * @param httpMethod http method
     */
    function RequestContext(url, httpMethod) {
        this.httpMethod = httpMethod;
        this.headers = {};
        this.body = undefined;
        this.url = new URLParse(url, true);
    }
    /*
     * Returns the url set in the constructor including the query string
     *
     */
    RequestContext.prototype.getUrl = function () {
        return this.url.toString();
    };
    /**
     * Replaces the url set in the constructor with this url.
     *
     */
    RequestContext.prototype.setUrl = function (url) {
        this.url = new URLParse(url, true);
    };
    /**
     * Sets the body of the http request either as a string or FormData
     *
     * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
     * request is discouraged.
     * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
     *
     * @param body the body of the request
     */
    RequestContext.prototype.setBody = function (body) {
        this.body = body;
    };
    RequestContext.prototype.getHttpMethod = function () {
        return this.httpMethod;
    };
    RequestContext.prototype.getHeaders = function () {
        return this.headers;
    };
    RequestContext.prototype.getBody = function () {
        return this.body;
    };
    RequestContext.prototype.setQueryParam = function (name, value) {
        var queryObj = this.url.query;
        queryObj[name] = value;
        this.url.set("query", queryObj);
    };
    /**
     * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
     *
     */
    RequestContext.prototype.addCookie = function (name, value) {
        if (!this.headers["Cookie"]) {
            this.headers["Cookie"] = "";
        }
        this.headers["Cookie"] += name + "=" + value + "; ";
    };
    RequestContext.prototype.setHeaderParam = function (key, value) {
        this.headers[key] = value;
    };
    return RequestContext;
})();
exports.RequestContext = RequestContext;
/**
 * Helper class to generate a `ResponseBody` from binary data
 */
var SelfDecodingBody = (function () {
    function SelfDecodingBody(dataSource) {
        this.dataSource = dataSource;
        this.async = text();
    }
    SelfDecodingBody.prototype.binary = function () {
        return this.dataSource;
    };
    SelfDecodingBody.prototype.Promise = function () {
        var data = await;
        this.dataSource;
        return data.toString();
    };
    return SelfDecodingBody;
})();
exports.SelfDecodingBody = SelfDecodingBody;
var ResponseContext = (function () {
    function ResponseContext(httpStatusCode, headers, body) {
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
        this.async = getBodyAsFile();
    }
    /**
     * Parse header value in the form `value; param1="value1"`
     *
     * E.g. for Content-Type or Content-Disposition
     * Parameter names are converted to lower case
     * The first parameter is returned with the key `""`
     */
    ResponseContext.prototype.getParsedHeader = function (headerName) {
        var result = {};
        if (!this.headers[headerName]) {
            return result;
        }
        var parameters = this.headers[headerName].split(";");
        for (var _i = 0; _i < parameters.length; _i++) {
            var parameter = parameters[_i];
            var _a = parameter.split("=", 2), key = _a[0], value = _a[1];
            key = key.toLowerCase().trim();
            if (value === undefined) {
                result[""] = key;
            }
            else {
                value = value.trim();
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                result[key] = value;
            }
        }
        return result;
    };
    ResponseContext.prototype.Promise = function () {
        var data = await;
        this.body.binary();
        var fileName = this.getParsedHeader("content-disposition")["filename"] || "";
        return { data: data, name: fileName };
    };
    return ResponseContext;
})();
exports.ResponseContext = ResponseContext;
function wrapHttpLibrary(promiseHttpLibrary) {
    return {
        send: function (request) {
            return rxjsStub_1.from(promiseHttpLibrary.send(request));
        }
    };
}
exports.wrapHttpLibrary = wrapHttpLibrary;
