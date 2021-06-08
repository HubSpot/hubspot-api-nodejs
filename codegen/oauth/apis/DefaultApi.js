var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TODO: better import syntax?
var baseapi_1 = require('./baseapi');
var http_1 = require('../http/http');
var FormData = require("form-data");
var ObjectSerializer_1 = require('../models/ObjectSerializer');
var exception_1 = require('./exception');
var AccessTokenInfoResponse_1 = require('../models/AccessTokenInfoResponse');
var RefreshTokenInfoResponse_1 = require('../models/RefreshTokenInfoResponse');
var TokenResponseIF_1 = require('../models/TokenResponseIF');
/**
 * no description
 */
var DefaultApiRequestFactory = (function (_super) {
    __extends(DefaultApiRequestFactory, _super);
    function DefaultApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * @param token
         */
        this.async = archiveRefreshToken(token, string, _options ?  : Configuration);
        /**
         * @param grantType
         * @param code
         * @param redirectUri
         * @param clientId
         * @param clientSecret
         * @param refreshToken
         */
        this.async = createToken(grantType ?  : string, code ?  : string, redirectUri ?  : string, clientId ?  : string, clientSecret ?  : string, refreshToken ?  : string, _options ?  : Configuration);
        /**
         * @param token
         */
        this.async = getAccessToken(token, string, _options ?  : Configuration);
        /**
         * @param token
         */
        this.async = getRefreshToken(token, string, _options ?  : Configuration);
    }
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new baseapi_1.RequiredError('Required parameter token was null or undefined when calling archiveRefreshToken.');
        }
        // Path Params
        var localVarPath = '/oauth/v1/refresh-tokens/{token}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        // Apply auth methods
        return requestContext;
    };
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/oauth/v1/token';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        var localVarFormParams = new FormData();
        if (grantType !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('grant_type', grantType, as, any);
        }
        if (code !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('code', code, as, any);
        }
        if (redirectUri !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('redirect_uri', redirectUri, as, any);
        }
        if (clientId !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('client_id', clientId, as, any);
        }
        if (clientSecret !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('client_secret', clientSecret, as, any);
        }
        if (refreshToken !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('refresh_token', refreshToken, as, any);
        }
        requestContext.setBody(localVarFormParams);
        // Body Params
        // Apply auth methods
        return requestContext;
    };
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new baseapi_1.RequiredError('Required parameter token was null or undefined when calling getAccessToken.');
        }
        // Path Params
        var localVarPath = '/oauth/v1/access-tokens/{token}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));
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
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new baseapi_1.RequiredError('Required parameter token was null or undefined when calling getRefreshToken.');
        }
        // Path Params
        var localVarPath = '/oauth/v1/refresh-tokens/{token}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));
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
    return DefaultApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.DefaultApiRequestFactory = DefaultApiRequestFactory;
var DefaultApiResponseProcessor = (function () {
    function DefaultApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to archiveRefreshToken
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = archiveRefreshToken(response, http_1.ResponseContext);
    }
    DefaultApiResponseProcessor.prototype.Promise = ;
    return DefaultApiResponseProcessor;
})();
exports.DefaultApiResponseProcessor = DefaultApiResponseProcessor;
void  > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        return;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
createToken(response, http_1.ResponseContext);
Promise < TokenResponseIF_1.TokenResponseIF > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TokenResponseIF", ""), as = TokenResponseIF_1.TokenResponseIF;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "TokenResponseIF", ""), as = TokenResponseIF_1.TokenResponseIF;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getAccessToken(response, http_1.ResponseContext);
Promise < AccessTokenInfoResponse_1.AccessTokenInfoResponse > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "AccessTokenInfoResponse", ""), as = AccessTokenInfoResponse_1.AccessTokenInfoResponse;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "AccessTokenInfoResponse", ""), as = AccessTokenInfoResponse_1.AccessTokenInfoResponse;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getRefreshToken(response, http_1.ResponseContext);
Promise < RefreshTokenInfoResponse_1.RefreshTokenInfoResponse > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "RefreshTokenInfoResponse", ""), as = RefreshTokenInfoResponse_1.RefreshTokenInfoResponse;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "RefreshTokenInfoResponse", ""), as = RefreshTokenInfoResponse_1.RefreshTokenInfoResponse;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
