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
var CollectionResponseSmtpApiTokenView_1 = require('../models/CollectionResponseSmtpApiTokenView');
var EmailSendStatusView_1 = require('../models/EmailSendStatusView');
var PublicSingleSendRequestEgg_1 = require('../models/PublicSingleSendRequestEgg');
var SmtpApiTokenRequestEgg_1 = require('../models/SmtpApiTokenRequestEgg');
var SmtpApiTokenView_1 = require('../models/SmtpApiTokenView');
/**
 * no description
 */
var DefaultApiRequestFactory = (function (_super) {
    __extends(DefaultApiRequestFactory, _super);
    function DefaultApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Delete a single token by ID.
         * Delete a single token by ID.
         * @param tokenId Identifier generated when a token is created.
         */
        this.async = archiveToken(tokenId, string, _options ?  : Configuration);
        /**
         * Create a SMTP API token.
         * Create a SMTP API token.
         * @param smtpApiTokenRequestEgg A request object that includes the campaign name tied to the token and whether contacts should be created for recipients of emails.
         */
        this.async = createToken(smtpApiTokenRequestEgg ?  : SmtpApiTokenRequestEgg_1.SmtpApiTokenRequestEgg, _options ?  : Configuration);
        /**
         * Query a single token by ID.
         * Query a single token by ID.
         * @param tokenId Identifier generated when a token is created.
         */
        this.async = getTokenById(tokenId, string, _options ?  : Configuration);
        /**
         * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
         * Query SMTP API tokens by campaign name or an emailCampaignId.
         * @param campaignName A name for the campaign tied to the SMTP API token.
         * @param emailCampaignId Identifier assigned to the campaign provided during the token creation.
         * @param after Starting point to get the next set of results.
         * @param limit Maximum number of tokens to return.
         */
        this.async = getTokensPage(campaignName ?  : string, emailCampaignId ?  : string, after ?  : string, limit ?  : number, _options ?  : Configuration);
        /**
         * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
         * Reset the password of an existing token.
         * @param tokenId Identifier generated when a token is created.
         */
        this.async = resetPassword(tokenId, string, _options ?  : Configuration);
        /**
         * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
         * Send a single transactional email asynchronously.
         * @param publicSingleSendRequestEgg A request object describing the email to send.
         */
        this.async = sendEmail(publicSingleSendRequestEgg ?  : PublicSingleSendRequestEgg_1.PublicSingleSendRequestEgg, _options ?  : Configuration);
    }
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tokenId' is not null or undefined
        if (tokenId === null || tokenId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tokenId was null or undefined when calling archiveToken.');
        }
        // Path Params
        var localVarPath = '/marketing/v3/transactional/smtp-tokens/{tokenId}'
            .replace('{' + 'tokenId' + '}', encodeURIComponent(String(tokenId)));
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
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/marketing/v3/transactional/smtp-tokens';
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(smtpApiTokenRequestEgg, "SmtpApiTokenRequestEgg", ""), contentType);
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
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tokenId' is not null or undefined
        if (tokenId === null || tokenId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tokenId was null or undefined when calling getTokenById.');
        }
        // Path Params
        var localVarPath = '/marketing/v3/transactional/smtp-tokens/{tokenId}'
            .replace('{' + 'tokenId' + '}', encodeURIComponent(String(tokenId)));
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
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/marketing/v3/transactional/smtp-tokens';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (campaignName !== undefined) {
            requestContext.setQueryParam("campaignName", ObjectSerializer_1.ObjectSerializer.serialize(campaignName, "string", ""));
        }
        if (emailCampaignId !== undefined) {
            requestContext.setQueryParam("emailCampaignId", ObjectSerializer_1.ObjectSerializer.serialize(emailCampaignId, "string", ""));
        }
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
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tokenId' is not null or undefined
        if (tokenId === null || tokenId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tokenId was null or undefined when calling resetPassword.');
        }
        // Path Params
        var localVarPath = '/marketing/v3/transactional/smtp-tokens/{tokenId}/password-reset'
            .replace('{' + 'tokenId' + '}', encodeURIComponent(String(tokenId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
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
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/marketing/v3/transactional/single-email/send';
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(publicSingleSendRequestEgg, "PublicSingleSendRequestEgg", ""), contentType);
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
    return DefaultApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.DefaultApiRequestFactory = DefaultApiRequestFactory;
var DefaultApiResponseProcessor = (function () {
    function DefaultApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to archiveToken
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = archiveToken(response, http_1.ResponseContext);
    }
    DefaultApiResponseProcessor.prototype.Promise = ;
    return DefaultApiResponseProcessor;
})();
exports.DefaultApiResponseProcessor = DefaultApiResponseProcessor;
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
createToken(response, http_1.ResponseContext);
Promise < SmtpApiTokenView_1.SmtpApiTokenView > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("201", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SmtpApiTokenView", ""), as = SmtpApiTokenView_1.SmtpApiTokenView;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SmtpApiTokenView", ""), as = SmtpApiTokenView_1.SmtpApiTokenView;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getTokenById(response, http_1.ResponseContext);
Promise < SmtpApiTokenView_1.SmtpApiTokenView > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SmtpApiTokenView", ""), as = SmtpApiTokenView_1.SmtpApiTokenView;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SmtpApiTokenView", ""), as = SmtpApiTokenView_1.SmtpApiTokenView;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getTokensPage(response, http_1.ResponseContext);
Promise < CollectionResponseSmtpApiTokenView_1.CollectionResponseSmtpApiTokenView > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseSmtpApiTokenView", ""), as = CollectionResponseSmtpApiTokenView_1.CollectionResponseSmtpApiTokenView;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseSmtpApiTokenView", ""), as = CollectionResponseSmtpApiTokenView_1.CollectionResponseSmtpApiTokenView;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
resetPassword(response, http_1.ResponseContext);
Promise < SmtpApiTokenView_1.SmtpApiTokenView > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SmtpApiTokenView", ""), as = SmtpApiTokenView_1.SmtpApiTokenView;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "SmtpApiTokenView", ""), as = SmtpApiTokenView_1.SmtpApiTokenView;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
sendEmail(response, http_1.ResponseContext);
Promise < EmailSendStatusView_1.EmailSendStatusView > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "EmailSendStatusView", ""), as = EmailSendStatusView_1.EmailSendStatusView;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "EmailSendStatusView", ""), as = EmailSendStatusView_1.EmailSendStatusView;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
