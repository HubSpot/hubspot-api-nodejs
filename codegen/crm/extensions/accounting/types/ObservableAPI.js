var rxjsStub_1 = require('../rxjsStub');
var rxjsStub_2 = require('../rxjsStub');
var CallbacksApi_1 = require("../apis/CallbacksApi");
var ObservableCallbacksApi = (function () {
    function ObservableCallbacksApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CallbacksApi_1.CallbacksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CallbacksApi_1.CallbacksApiResponseProcessor();
    }
    /**
     * Call this endpoint with the response to a customer creation request.
     * Endpoint for customer creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created customer.
     */
    ObservableCallbacksApi.prototype.createCustomer = function (requestId, resultIdAccountingResponse, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createCustomer(requestId, resultIdAccountingResponse, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createCustomer(rsp); }));
        }));
    };
    /**
     * Call this endpoint with the response to an exchange rate request.
     * Endpoint for exchange rate response
     * @param requestId The ID of the request that this response is for
     * @param exchangeRateResponse The result of the exchange rate request.
     */
    ObservableCallbacksApi.prototype.createExchangeRate = function (requestId, exchangeRateResponse, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createExchangeRate(requestId, exchangeRateResponse, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createExchangeRate(rsp); }));
        }));
    };
    /**
     * Call this endpoint with the response to a invoice creation request.
     * Endpoint for invoice creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created invoice.
     */
    ObservableCallbacksApi.prototype.createInvoice = function (requestId, resultIdAccountingResponse, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createInvoice(requestId, resultIdAccountingResponse, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createInvoice(rsp); }));
        }));
    };
    /**
     * Call this endpoint with the response to a terms search request.
     * Endpoint for terms search response
     * @param requestId The ID of the request that this response is for
     * @param termsResponse The result of the terms search
     */
    ObservableCallbacksApi.prototype.createTerm = function (requestId, termsResponse, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createTerm(requestId, termsResponse, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createTerm(rsp); }));
        }));
    };
    /**
     * Call this endpoint with the response to a customer search request.
     * Endpoint for customer search response
     * @param requestId The ID of the request that this response is for
     * @param customerSearchResponseExternal The result of the customer search request.
     */
    ObservableCallbacksApi.prototype.doCustomerSearch = function (requestId, customerSearchResponseExternal, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.doCustomerSearch(requestId, customerSearchResponseExternal, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.doCustomerSearch(rsp); }));
        }));
    };
    /**
     * Call this endpoint with the response to a invoice search request.
     * Endpoint for invoice search response
     * @param requestId The ID of the request that this response is for
     * @param invoiceSearchResponse The result of the invoice search request.
     */
    ObservableCallbacksApi.prototype.doInvoiceSearch = function (requestId, invoiceSearchResponse, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.doInvoiceSearch(requestId, invoiceSearchResponse, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.doInvoiceSearch(rsp); }));
        }));
    };
    /**
     * Call this endpoint with the response to a product search request.
     * Endpoint for product search response
     * @param requestId The ID of the request that this response is for
     * @param productSearchResponse The result of the product search request.
     */
    ObservableCallbacksApi.prototype.doProductSearch = function (requestId, productSearchResponse, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.doProductSearch(requestId, productSearchResponse, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.doProductSearch(rsp); }));
        }));
    };
    /**
     * Call this endpoint with the response to a taxes search request.
     * Endpoint for taxes search response
     * @param requestId The ID of the request that this response is for
     * @param taxSearchResponse The result of the taxes search request.
     */
    ObservableCallbacksApi.prototype.doTaxSearch = function (requestId, taxSearchResponse, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.doTaxSearch(requestId, taxSearchResponse, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.doTaxSearch(rsp); }));
        }));
    };
    /**
     * Call this endpoint with the response to a invoice get-by-id request.
     * Endpoint for invoice get-by-id response
     * @param requestId The ID of the request that this response is for
     * @param invoicesResponseExternal The result of the invoice request.
     */
    ObservableCallbacksApi.prototype.getById = function (requestId, invoicesResponseExternal, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getById(requestId, invoicesResponseExternal, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getById(rsp); }));
        }));
    };
    /**
     * Call this endpoint with the PDF content of a requested invoice.
     * Endpoint for PDF content of invoice
     * @param requestId The ID of the request that this response is for
     * @param invoicePdfResponse The bytes of the invoice PDF.
     */
    ObservableCallbacksApi.prototype.invoicePdf = function (requestId, invoicePdfResponse, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.invoicePdf(requestId, invoicePdfResponse, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.invoicePdf(rsp); }));
        }));
    };
    return ObservableCallbacksApi;
})();
exports.ObservableCallbacksApi = ObservableCallbacksApi;
var InvoiceApi_1 = require("../apis/InvoiceApi");
var ObservableInvoiceApi = (function () {
    function ObservableInvoiceApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvoiceApi_1.InvoiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvoiceApi_1.InvoiceApiResponseProcessor();
    }
    /**
     * Records an payment against an invoice.
     * Records an invoice payment
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param invoiceCreatePaymentRequest The payment information
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    ObservableInvoiceApi.prototype.createPayment = function (invoiceId, invoiceCreatePaymentRequest, accountId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createPayment(invoiceId, invoiceCreatePaymentRequest, accountId, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createPayment(rsp); }));
        }));
    };
    /**
     * Returns invoice data for an Accounting account from the specified ID
     * Get invoice data
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    ObservableInvoiceApi.prototype.getById = function (invoiceId, accountId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getById(invoiceId, accountId, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getById(rsp); }));
        }));
    };
    /**
     * Updates an Invoice by the given ID.
     * Update an invoice
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     * @param invoiceUpdateRequest The invoice data to update
     */
    ObservableInvoiceApi.prototype.update = function (invoiceId, accountId, invoiceUpdateRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.update(invoiceId, accountId, invoiceUpdateRequest, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.update(rsp); }));
        }));
    };
    return ObservableInvoiceApi;
})();
exports.ObservableInvoiceApi = ObservableInvoiceApi;
var SettingsApi_1 = require("../apis/SettingsApi");
var ObservableSettingsApi = (function () {
    function ObservableSettingsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApi_1.SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApi_1.SettingsApiResponseProcessor();
    }
    /**
     * Returns the URL settings for an accounting app with the specified ID.
     * Get URL settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     */
    ObservableSettingsApi.prototype.getById = function (appId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getById(appId, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getById(rsp); }));
        }));
    };
    /**
     * Add/Update the URL settings for an accounting app with the specified ID.  All URLs must use the `https` protocol.
     * Add/Update URL Settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param accountingAppSettings
     */
    ObservableSettingsApi.prototype.replace = function (appId, accountingAppSettings, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.replace(appId, accountingAppSettings, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.replace(rsp); }));
        }));
    };
    return ObservableSettingsApi;
})();
exports.ObservableSettingsApi = ObservableSettingsApi;
var SyncApi_1 = require("../apis/SyncApi");
var ObservableSyncApi = (function () {
    function ObservableSyncApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SyncApi_1.SyncApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SyncApi_1.SyncApiResponseProcessor();
    }
    /**
     * Imports contacts' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import contacts
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncContactsRequest
     */
    ObservableSyncApi.prototype.createContact = function (appId, syncContactsRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createContact(appId, syncContactsRequest, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createContact(rsp); }));
        }));
    };
    /**
     * Imports products' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import products
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncProductsRequest
     */
    ObservableSyncApi.prototype.createProduct = function (appId, syncProductsRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createProduct(appId, syncProductsRequest, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createProduct(rsp); }));
        }));
    };
    return ObservableSyncApi;
})();
exports.ObservableSyncApi = ObservableSyncApi;
var UserAccountsApi_1 = require("../apis/UserAccountsApi");
var ObservableUserAccountsApi = (function () {
    function ObservableUserAccountsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserAccountsApi_1.UserAccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserAccountsApi_1.UserAccountsApiResponseProcessor();
    }
    /**
     * Deletes a user account from HubSpot, meaning that HubSpot will no longer send requests to the external accounting system for this user.
     * Delete user account
     * @param accountId The ID of the user account to delete.
     */
    ObservableUserAccountsApi.prototype.archive = function (accountId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.archive(accountId, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.archive(rsp); }));
        }));
    };
    /**
     * Creates an account which contains the information about the account in the external accounting system.  This *must* be called after a user connects their HubSpot account to the external accounting system, as there is no other way for HubSpot to obtain the external account details.
     * Create a user account
     * @param createUserAccountRequestExternal The external accounting system user account information.
     */
    ObservableUserAccountsApi.prototype.replace = function (createUserAccountRequestExternal, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.replace(createUserAccountRequestExternal, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.replace(rsp); }));
        }));
    };
    return ObservableUserAccountsApi;
})();
exports.ObservableUserAccountsApi = ObservableUserAccountsApi;
