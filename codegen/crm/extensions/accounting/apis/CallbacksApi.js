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
var CustomerSearchResponseExternal_1 = require('../models/CustomerSearchResponseExternal');
var ExchangeRateResponse_1 = require('../models/ExchangeRateResponse');
var InvoicePdfResponse_1 = require('../models/InvoicePdfResponse');
var InvoiceSearchResponse_1 = require('../models/InvoiceSearchResponse');
var InvoicesResponseExternal_1 = require('../models/InvoicesResponseExternal');
var ProductSearchResponse_1 = require('../models/ProductSearchResponse');
var ResultIdAccountingResponse_1 = require('../models/ResultIdAccountingResponse');
var TaxSearchResponse_1 = require('../models/TaxSearchResponse');
var TermsResponse_1 = require('../models/TermsResponse');
/**
 * no description
 */
var CallbacksApiRequestFactory = (function (_super) {
    __extends(CallbacksApiRequestFactory, _super);
    function CallbacksApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Call this endpoint with the response to a customer creation request.
         * Endpoint for customer creation response
         * @param requestId The ID of the request that this response is for
         * @param resultIdAccountingResponse The ID of the created customer.
         */
        this.async = createCustomer(requestId, string, resultIdAccountingResponse, ResultIdAccountingResponse_1.ResultIdAccountingResponse, _options ?  : Configuration);
        /**
         * Call this endpoint with the response to an exchange rate request.
         * Endpoint for exchange rate response
         * @param requestId The ID of the request that this response is for
         * @param exchangeRateResponse The result of the exchange rate request.
         */
        this.async = createExchangeRate(requestId, string, exchangeRateResponse, ExchangeRateResponse_1.ExchangeRateResponse, _options ?  : Configuration);
        /**
         * Call this endpoint with the response to a invoice creation request.
         * Endpoint for invoice creation response
         * @param requestId The ID of the request that this response is for
         * @param resultIdAccountingResponse The ID of the created invoice.
         */
        this.async = createInvoice(requestId, string, resultIdAccountingResponse, ResultIdAccountingResponse_1.ResultIdAccountingResponse, _options ?  : Configuration);
        /**
         * Call this endpoint with the response to a terms search request.
         * Endpoint for terms search response
         * @param requestId The ID of the request that this response is for
         * @param termsResponse The result of the terms search
         */
        this.async = createTerm(requestId, string, termsResponse, TermsResponse_1.TermsResponse, _options ?  : Configuration);
        /**
         * Call this endpoint with the response to a customer search request.
         * Endpoint for customer search response
         * @param requestId The ID of the request that this response is for
         * @param customerSearchResponseExternal The result of the customer search request.
         */
        this.async = doCustomerSearch(requestId, string, customerSearchResponseExternal, CustomerSearchResponseExternal_1.CustomerSearchResponseExternal, _options ?  : Configuration);
        /**
         * Call this endpoint with the response to a invoice search request.
         * Endpoint for invoice search response
         * @param requestId The ID of the request that this response is for
         * @param invoiceSearchResponse The result of the invoice search request.
         */
        this.async = doInvoiceSearch(requestId, string, invoiceSearchResponse, InvoiceSearchResponse_1.InvoiceSearchResponse, _options ?  : Configuration);
        /**
         * Call this endpoint with the response to a product search request.
         * Endpoint for product search response
         * @param requestId The ID of the request that this response is for
         * @param productSearchResponse The result of the product search request.
         */
        this.async = doProductSearch(requestId, string, productSearchResponse, ProductSearchResponse_1.ProductSearchResponse, _options ?  : Configuration);
        /**
         * Call this endpoint with the response to a taxes search request.
         * Endpoint for taxes search response
         * @param requestId The ID of the request that this response is for
         * @param taxSearchResponse The result of the taxes search request.
         */
        this.async = doTaxSearch(requestId, string, taxSearchResponse, TaxSearchResponse_1.TaxSearchResponse, _options ?  : Configuration);
        /**
         * Call this endpoint with the response to a invoice get-by-id request.
         * Endpoint for invoice get-by-id response
         * @param requestId The ID of the request that this response is for
         * @param invoicesResponseExternal The result of the invoice request.
         */
        this.async = getById(requestId, string, invoicesResponseExternal, InvoicesResponseExternal_1.InvoicesResponseExternal, _options ?  : Configuration);
        /**
         * Call this endpoint with the PDF content of a requested invoice.
         * Endpoint for PDF content of invoice
         * @param requestId The ID of the request that this response is for
         * @param invoicePdfResponse The bytes of the invoice PDF.
         */
        this.async = invoicePdf(requestId, string, invoicePdfResponse, InvoicePdfResponse_1.InvoicePdfResponse, _options ?  : Configuration);
    }
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter requestId was null or undefined when calling createCustomer.');
        }
        // verify required parameter 'resultIdAccountingResponse' is not null or undefined
        if (resultIdAccountingResponse === null || resultIdAccountingResponse === undefined) {
            throw new baseapi_1.RequiredError('Required parameter resultIdAccountingResponse was null or undefined when calling createCustomer.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/callback/customer-create/{requestId}'
            .replace('{' + 'requestId' + '}', encodeURIComponent(String(requestId)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(resultIdAccountingResponse, "ResultIdAccountingResponse", ""), contentType);
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
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter requestId was null or undefined when calling createExchangeRate.');
        }
        // verify required parameter 'exchangeRateResponse' is not null or undefined
        if (exchangeRateResponse === null || exchangeRateResponse === undefined) {
            throw new baseapi_1.RequiredError('Required parameter exchangeRateResponse was null or undefined when calling createExchangeRate.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/callback/exchange-rate/{requestId}'
            .replace('{' + 'requestId' + '}', encodeURIComponent(String(requestId)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(exchangeRateResponse, "ExchangeRateResponse", ""), contentType);
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
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter requestId was null or undefined when calling createInvoice.');
        }
        // verify required parameter 'resultIdAccountingResponse' is not null or undefined
        if (resultIdAccountingResponse === null || resultIdAccountingResponse === undefined) {
            throw new baseapi_1.RequiredError('Required parameter resultIdAccountingResponse was null or undefined when calling createInvoice.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/callback/invoice-create/{requestId}'
            .replace('{' + 'requestId' + '}', encodeURIComponent(String(requestId)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(resultIdAccountingResponse, "ResultIdAccountingResponse", ""), contentType);
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
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter requestId was null or undefined when calling createTerm.');
        }
        // verify required parameter 'termsResponse' is not null or undefined
        if (termsResponse === null || termsResponse === undefined) {
            throw new baseapi_1.RequiredError('Required parameter termsResponse was null or undefined when calling createTerm.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/callback/terms/{requestId}'
            .replace('{' + 'requestId' + '}', encodeURIComponent(String(requestId)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(termsResponse, "TermsResponse", ""), contentType);
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
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter requestId was null or undefined when calling doCustomerSearch.');
        }
        // verify required parameter 'customerSearchResponseExternal' is not null or undefined
        if (customerSearchResponseExternal === null || customerSearchResponseExternal === undefined) {
            throw new baseapi_1.RequiredError('Required parameter customerSearchResponseExternal was null or undefined when calling doCustomerSearch.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/callback/customer-search/{requestId}'
            .replace('{' + 'requestId' + '}', encodeURIComponent(String(requestId)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(customerSearchResponseExternal, "CustomerSearchResponseExternal", ""), contentType);
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
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter requestId was null or undefined when calling doInvoiceSearch.');
        }
        // verify required parameter 'invoiceSearchResponse' is not null or undefined
        if (invoiceSearchResponse === null || invoiceSearchResponse === undefined) {
            throw new baseapi_1.RequiredError('Required parameter invoiceSearchResponse was null or undefined when calling doInvoiceSearch.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/callback/invoice-search/{requestId}'
            .replace('{' + 'requestId' + '}', encodeURIComponent(String(requestId)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(invoiceSearchResponse, "InvoiceSearchResponse", ""), contentType);
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
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter requestId was null or undefined when calling doProductSearch.');
        }
        // verify required parameter 'productSearchResponse' is not null or undefined
        if (productSearchResponse === null || productSearchResponse === undefined) {
            throw new baseapi_1.RequiredError('Required parameter productSearchResponse was null or undefined when calling doProductSearch.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/callback/product-search/{requestId}'
            .replace('{' + 'requestId' + '}', encodeURIComponent(String(requestId)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(productSearchResponse, "ProductSearchResponse", ""), contentType);
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
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter requestId was null or undefined when calling doTaxSearch.');
        }
        // verify required parameter 'taxSearchResponse' is not null or undefined
        if (taxSearchResponse === null || taxSearchResponse === undefined) {
            throw new baseapi_1.RequiredError('Required parameter taxSearchResponse was null or undefined when calling doTaxSearch.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/callback/tax-search/{requestId}'
            .replace('{' + 'requestId' + '}', encodeURIComponent(String(requestId)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(taxSearchResponse, "TaxSearchResponse", ""), contentType);
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
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter requestId was null or undefined when calling getById.');
        }
        // verify required parameter 'invoicesResponseExternal' is not null or undefined
        if (invoicesResponseExternal === null || invoicesResponseExternal === undefined) {
            throw new baseapi_1.RequiredError('Required parameter invoicesResponseExternal was null or undefined when calling getById.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/callback/invoices/{requestId}'
            .replace('{' + 'requestId' + '}', encodeURIComponent(String(requestId)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(invoicesResponseExternal, "InvoicesResponseExternal", ""), contentType);
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
    CallbacksApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter requestId was null or undefined when calling invoicePdf.');
        }
        // verify required parameter 'invoicePdfResponse' is not null or undefined
        if (invoicePdfResponse === null || invoicePdfResponse === undefined) {
            throw new baseapi_1.RequiredError('Required parameter invoicePdfResponse was null or undefined when calling invoicePdf.');
        }
        // Path Params
        var localVarPath = '/crm/v3/extensions/accounting/callback/invoice-pdf/{requestId}'
            .replace('{' + 'requestId' + '}', encodeURIComponent(String(requestId)));
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(invoicePdfResponse, "InvoicePdfResponse", ""), contentType);
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
    return CallbacksApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.CallbacksApiRequestFactory = CallbacksApiRequestFactory;
var CallbacksApiResponseProcessor = (function () {
    function CallbacksApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to createCustomer
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = createCustomer(response, http_1.ResponseContext);
    }
    CallbacksApiResponseProcessor.prototype.Promise = ;
    return CallbacksApiResponseProcessor;
})();
exports.CallbacksApiResponseProcessor = CallbacksApiResponseProcessor;
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
createExchangeRate(response, http_1.ResponseContext);
Promise < void  > {
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
createInvoice(response, http_1.ResponseContext);
Promise < void  > {
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
createTerm(response, http_1.ResponseContext);
Promise < void  > {
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
doCustomerSearch(response, http_1.ResponseContext);
Promise < void  > {
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
doInvoiceSearch(response, http_1.ResponseContext);
Promise < void  > {
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
doProductSearch(response, http_1.ResponseContext);
Promise < void  > {
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
doTaxSearch(response, http_1.ResponseContext);
Promise < void  > {
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
Promise < void  > {
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
invoicePdf(response, http_1.ResponseContext);
Promise < void  > {
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
