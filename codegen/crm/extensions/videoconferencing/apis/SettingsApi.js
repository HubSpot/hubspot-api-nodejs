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
var ExternalSettings_1 = require('../models/ExternalSettings');
/**
 * no description
 */
var SettingsApiRequestFactory = (function (_super) {
    __extends(SettingsApiRequestFactory, _super);
    function SettingsApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Deletes the settings for a video conference application with the specified ID.
         * Delete settings
         * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
         */
        this.async = archive(appId, number, _options ?  : Configuration);
        /**
         * Return the settings for a video conference application with the specified ID.
         * Get settings
         * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
         */
        this.async = getById(appId, number, _options ?  : Configuration);
        /**
         * Updates the settings for a video conference application with the specified ID.
         * Update settings
         * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
         * @param externalSettings
         */
        this.async = replace(appId, number, externalSettings, ExternalSettings_1.ExternalSettings, _options ?  : Configuration);
    }
    SettingsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling archive.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/videoconferencing/settings/{appId}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
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
        return requestContext;
    };
    SettingsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling getById.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/videoconferencing/settings/{appId}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
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
        return requestContext;
    };
    SettingsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter appId was null or undefined when calling replace.');
        }
        // verify required parameter 'externalSettings' is not null or undefined
        if (externalSettings === null || externalSettings === undefined) {
            throw new baseapi_1.RequiredError('Required parameter externalSettings was null or undefined when calling replace.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/videoconferencing/settings/{appId}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(externalSettings, "ExternalSettings", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    return SettingsApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.SettingsApiRequestFactory = SettingsApiRequestFactory;
var SettingsApiResponseProcessor = (function () {
    function SettingsApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to archive
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = archive(response, http_1.ResponseContext);
    }
    SettingsApiResponseProcessor.prototype.Promise = ;
    return SettingsApiResponseProcessor;
})();
exports.SettingsApiResponseProcessor = SettingsApiResponseProcessor;
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
getById(response, http_1.ResponseContext);
Promise < ExternalSettings_1.ExternalSettings > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "ExternalSettings", ""), as = ExternalSettings_1.ExternalSettings;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "ExternalSettings", ""), as = ExternalSettings_1.ExternalSettings;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
replace(response, http_1.ResponseContext);
Promise < ExternalSettings_1.ExternalSettings > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "ExternalSettings", ""), as = ExternalSettings_1.ExternalSettings;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "ExternalSettings", ""), as = ExternalSettings_1.ExternalSettings;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
