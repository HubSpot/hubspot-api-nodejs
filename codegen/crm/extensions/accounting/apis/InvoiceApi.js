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
var InvoiceCreatePaymentRequest_1 = require('../models/InvoiceCreatePaymentRequest');
var InvoiceReadResponse_1 = require('../models/InvoiceReadResponse');
var InvoiceUpdateRequest_1 = require('../models/InvoiceUpdateRequest');
var InvoiceUpdateResponse_1 = require('../models/InvoiceUpdateResponse');
/**
 * no description
 */
var InvoiceApiRequestFactory = (function (_super) {
    __extends(InvoiceApiRequestFactory, _super);
    function InvoiceApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Records an payment against an invoice.
         * Records an invoice payment
         * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
         * @param invoiceCreatePaymentRequest The payment information
         * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
         */
        this.async = createPayment(invoiceId, string, invoiceCreatePaymentRequest, InvoiceCreatePaymentRequest_1.InvoiceCreatePaymentRequest, accountId ?  : string, _options ?  : Configuration);
        /**
         * Returns invoice data for an Accounting account from the specified ID
         * Get invoice data
         * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
         * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
         */
        this.async = getById(invoiceId, string, accountId, string, _options ?  : Configuration);
        /**
         * Updates an Invoice by the given ID.
         * Update an invoice
         * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
         * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
         * @param invoiceUpdateRequest The invoice data to update
         */
        this.async = update(invoiceId, string, accountId, string, invoiceUpdateRequest, InvoiceUpdateRequest_1.InvoiceUpdateRequest, _options ?  : Configuration);
    }
    InvoiceApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter invoiceId was null or undefined when calling createPayment.');
        }
        // verify required parameter 'invoiceCreatePaymentRequest' is not null or undefined
        if (invoiceCreatePaymentRequest === null || invoiceCreatePaymentRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter invoiceCreatePaymentRequest was null or undefined when calling createPayment.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/invoice/{invoiceId}/payment'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (accountId !== undefined) {
            requestContext.setQueryParam("accountId", ObjectSerializer_1.ObjectSerializer.serialize(accountId, "string", ""));
        }
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(invoiceCreatePaymentRequest, "InvoiceCreatePaymentRequest", ""), contentType);
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
    InvoiceApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter invoiceId was null or undefined when calling getById.');
        }
        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter accountId was null or undefined when calling getById.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/invoice/{invoiceId}'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (accountId !== undefined) {
            requestContext.setQueryParam("accountId", ObjectSerializer_1.ObjectSerializer.serialize(accountId, "string", ""));
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
    InvoiceApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter invoiceId was null or undefined when calling update.');
        }
        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter accountId was null or undefined when calling update.');
        }
        // verify required parameter 'invoiceUpdateRequest' is not null or undefined
        if (invoiceUpdateRequest === null || invoiceUpdateRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter invoiceUpdateRequest was null or undefined when calling update.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/invoice/{invoiceId}'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (accountId !== undefined) {
            requestContext.setQueryParam("accountId", ObjectSerializer_1.ObjectSerializer.serialize(accountId, "string", ""));
        }
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(invoiceUpdateRequest, "InvoiceUpdateRequest", ""), contentType);
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
    return InvoiceApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.InvoiceApiRequestFactory = InvoiceApiRequestFactory;
var InvoiceApiResponseProcessor = (function () {
    function InvoiceApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to createPayment
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = createPayment(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getById
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getById(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to update
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = update(response, http_1.ResponseContext);
    }
    InvoiceApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "InvoiceUpdateResponse", ""), as = InvoiceUpdateResponse_1.InvoiceUpdateResponse;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "InvoiceUpdateResponse", ""), as = InvoiceUpdateResponse_1.InvoiceUpdateResponse;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    InvoiceApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_4 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "InvoiceReadResponse", ""), as = InvoiceReadResponse_1.InvoiceReadResponse;
            return body_4;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_5 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_5);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_6 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "InvoiceReadResponse", ""), as = InvoiceReadResponse_1.InvoiceReadResponse;
            return body_6;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    InvoiceApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_7 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "InvoiceUpdateResponse", ""), as = InvoiceUpdateResponse_1.InvoiceUpdateResponse;
            return body_7;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_8 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_8);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_9 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "InvoiceUpdateResponse", ""), as = InvoiceUpdateResponse_1.InvoiceUpdateResponse;
            return body_9;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return InvoiceApiResponseProcessor;
})();
exports.InvoiceApiResponseProcessor = InvoiceApiResponseProcessor;
