var ObservableAPI_1 = require('./ObservableAPI');
var PromiseCallbacksApi = (function () {
    function PromiseCallbacksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCallbacksApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Call this endpoint with the response to a customer creation request.
     * Endpoint for customer creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created customer.
     */
    PromiseCallbacksApi.prototype.createCustomer = function (requestId, resultIdAccountingResponse, _options) {
        var result = this.api.createCustomer(requestId, resultIdAccountingResponse, _options);
        return result.toPromise();
    };
    /**
     * Call this endpoint with the response to an exchange rate request.
     * Endpoint for exchange rate response
     * @param requestId The ID of the request that this response is for
     * @param exchangeRateResponse The result of the exchange rate request.
     */
    PromiseCallbacksApi.prototype.createExchangeRate = function (requestId, exchangeRateResponse, _options) {
        var result = this.api.createExchangeRate(requestId, exchangeRateResponse, _options);
        return result.toPromise();
    };
    /**
     * Call this endpoint with the response to a invoice creation request.
     * Endpoint for invoice creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created invoice.
     */
    PromiseCallbacksApi.prototype.createInvoice = function (requestId, resultIdAccountingResponse, _options) {
        var result = this.api.createInvoice(requestId, resultIdAccountingResponse, _options);
        return result.toPromise();
    };
    /**
     * Call this endpoint with the response to a terms search request.
     * Endpoint for terms search response
     * @param requestId The ID of the request that this response is for
     * @param termsResponse The result of the terms search
     */
    PromiseCallbacksApi.prototype.createTerm = function (requestId, termsResponse, _options) {
        var result = this.api.createTerm(requestId, termsResponse, _options);
        return result.toPromise();
    };
    /**
     * Call this endpoint with the response to a customer search request.
     * Endpoint for customer search response
     * @param requestId The ID of the request that this response is for
     * @param customerSearchResponseExternal The result of the customer search request.
     */
    PromiseCallbacksApi.prototype.doCustomerSearch = function (requestId, customerSearchResponseExternal, _options) {
        var result = this.api.doCustomerSearch(requestId, customerSearchResponseExternal, _options);
        return result.toPromise();
    };
    /**
     * Call this endpoint with the response to a invoice search request.
     * Endpoint for invoice search response
     * @param requestId The ID of the request that this response is for
     * @param invoiceSearchResponse The result of the invoice search request.
     */
    PromiseCallbacksApi.prototype.doInvoiceSearch = function (requestId, invoiceSearchResponse, _options) {
        var result = this.api.doInvoiceSearch(requestId, invoiceSearchResponse, _options);
        return result.toPromise();
    };
    /**
     * Call this endpoint with the response to a product search request.
     * Endpoint for product search response
     * @param requestId The ID of the request that this response is for
     * @param productSearchResponse The result of the product search request.
     */
    PromiseCallbacksApi.prototype.doProductSearch = function (requestId, productSearchResponse, _options) {
        var result = this.api.doProductSearch(requestId, productSearchResponse, _options);
        return result.toPromise();
    };
    /**
     * Call this endpoint with the response to a taxes search request.
     * Endpoint for taxes search response
     * @param requestId The ID of the request that this response is for
     * @param taxSearchResponse The result of the taxes search request.
     */
    PromiseCallbacksApi.prototype.doTaxSearch = function (requestId, taxSearchResponse, _options) {
        var result = this.api.doTaxSearch(requestId, taxSearchResponse, _options);
        return result.toPromise();
    };
    /**
     * Call this endpoint with the response to a invoice get-by-id request.
     * Endpoint for invoice get-by-id response
     * @param requestId The ID of the request that this response is for
     * @param invoicesResponseExternal The result of the invoice request.
     */
    PromiseCallbacksApi.prototype.getById = function (requestId, invoicesResponseExternal, _options) {
        var result = this.api.getById(requestId, invoicesResponseExternal, _options);
        return result.toPromise();
    };
    /**
     * Call this endpoint with the PDF content of a requested invoice.
     * Endpoint for PDF content of invoice
     * @param requestId The ID of the request that this response is for
     * @param invoicePdfResponse The bytes of the invoice PDF.
     */
    PromiseCallbacksApi.prototype.invoicePdf = function (requestId, invoicePdfResponse, _options) {
        var result = this.api.invoicePdf(requestId, invoicePdfResponse, _options);
        return result.toPromise();
    };
    return PromiseCallbacksApi;
})();
exports.PromiseCallbacksApi = PromiseCallbacksApi;
var ObservableAPI_2 = require('./ObservableAPI');
var PromiseInvoiceApi = (function () {
    function PromiseInvoiceApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableInvoiceApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Records an payment against an invoice.
     * Records an invoice payment
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param invoiceCreatePaymentRequest The payment information
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    PromiseInvoiceApi.prototype.createPayment = function (invoiceId, invoiceCreatePaymentRequest, accountId, _options) {
        var result = this.api.createPayment(invoiceId, invoiceCreatePaymentRequest, accountId, _options);
        return result.toPromise();
    };
    /**
     * Returns invoice data for an Accounting account from the specified ID
     * Get invoice data
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    PromiseInvoiceApi.prototype.getById = function (invoiceId, accountId, _options) {
        var result = this.api.getById(invoiceId, accountId, _options);
        return result.toPromise();
    };
    /**
     * Updates an Invoice by the given ID.
     * Update an invoice
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     * @param invoiceUpdateRequest The invoice data to update
     */
    PromiseInvoiceApi.prototype.update = function (invoiceId, accountId, invoiceUpdateRequest, _options) {
        var result = this.api.update(invoiceId, accountId, invoiceUpdateRequest, _options);
        return result.toPromise();
    };
    return PromiseInvoiceApi;
})();
exports.PromiseInvoiceApi = PromiseInvoiceApi;
var ObservableAPI_3 = require('./ObservableAPI');
var PromiseSettingsApi = (function () {
    function PromiseSettingsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Returns the URL settings for an accounting app with the specified ID.
     * Get URL settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     */
    PromiseSettingsApi.prototype.getById = function (appId, _options) {
        var result = this.api.getById(appId, _options);
        return result.toPromise();
    };
    /**
     * Add/Update the URL settings for an accounting app with the specified ID.  All URLs must use the `https` protocol.
     * Add/Update URL Settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param accountingAppSettings
     */
    PromiseSettingsApi.prototype.replace = function (appId, accountingAppSettings, _options) {
        var result = this.api.replace(appId, accountingAppSettings, _options);
        return result.toPromise();
    };
    return PromiseSettingsApi;
})();
exports.PromiseSettingsApi = PromiseSettingsApi;
var ObservableAPI_4 = require('./ObservableAPI');
var PromiseSyncApi = (function () {
    function PromiseSyncApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableSyncApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Imports contacts' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import contacts
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncContactsRequest
     */
    PromiseSyncApi.prototype.createContact = function (appId, syncContactsRequest, _options) {
        var result = this.api.createContact(appId, syncContactsRequest, _options);
        return result.toPromise();
    };
    /**
     * Imports products' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import products
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncProductsRequest
     */
    PromiseSyncApi.prototype.createProduct = function (appId, syncProductsRequest, _options) {
        var result = this.api.createProduct(appId, syncProductsRequest, _options);
        return result.toPromise();
    };
    return PromiseSyncApi;
})();
exports.PromiseSyncApi = PromiseSyncApi;
var ObservableAPI_5 = require('./ObservableAPI');
var PromiseUserAccountsApi = (function () {
    function PromiseUserAccountsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableUserAccountsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Deletes a user account from HubSpot, meaning that HubSpot will no longer send requests to the external accounting system for this user.
     * Delete user account
     * @param accountId The ID of the user account to delete.
     */
    PromiseUserAccountsApi.prototype.archive = function (accountId, _options) {
        var result = this.api.archive(accountId, _options);
        return result.toPromise();
    };
    /**
     * Creates an account which contains the information about the account in the external accounting system.  This *must* be called after a user connects their HubSpot account to the external accounting system, as there is no other way for HubSpot to obtain the external account details.
     * Create a user account
     * @param createUserAccountRequestExternal The external accounting system user account information.
     */
    PromiseUserAccountsApi.prototype.replace = function (createUserAccountRequestExternal, _options) {
        var result = this.api.replace(createUserAccountRequestExternal, _options);
        return result.toPromise();
    };
    return PromiseUserAccountsApi;
})();
exports.PromiseUserAccountsApi = PromiseUserAccountsApi;
