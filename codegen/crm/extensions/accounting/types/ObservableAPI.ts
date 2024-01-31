import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AccountingAppSettings } from '../models/AccountingAppSettings';
import { ActionResponse } from '../models/ActionResponse';
import { CreateUserAccountRequestExternal } from '../models/CreateUserAccountRequestExternal';
import { CustomerSearchResponseExternal } from '../models/CustomerSearchResponseExternal';
import { ExchangeRateResponse } from '../models/ExchangeRateResponse';
import { InvoiceCreatePaymentRequest } from '../models/InvoiceCreatePaymentRequest';
import { InvoicePdfResponse } from '../models/InvoicePdfResponse';
import { InvoiceReadResponse } from '../models/InvoiceReadResponse';
import { InvoiceSearchResponse } from '../models/InvoiceSearchResponse';
import { InvoiceUpdateRequest } from '../models/InvoiceUpdateRequest';
import { InvoiceUpdateResponse } from '../models/InvoiceUpdateResponse';
import { InvoicesResponseExternal } from '../models/InvoicesResponseExternal';
import { ProductSearchResponse } from '../models/ProductSearchResponse';
import { ResultIdAccountingResponse } from '../models/ResultIdAccountingResponse';
import { SyncContactsRequest } from '../models/SyncContactsRequest';
import { SyncProductsRequest } from '../models/SyncProductsRequest';
import { TaxSearchResponse } from '../models/TaxSearchResponse';
import { TermsResponse } from '../models/TermsResponse';

import { CallbacksApiRequestFactory, CallbacksApiResponseProcessor} from "../apis/CallbacksApi";
export class ObservableCallbacksApi {
    private requestFactory: CallbacksApiRequestFactory;
    private responseProcessor: CallbacksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CallbacksApiRequestFactory,
        responseProcessor?: CallbacksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CallbacksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CallbacksApiResponseProcessor();
    }

    /**
     * Call this endpoint with the response to a customer creation request.
     * Endpoint for customer creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created customer.
     */
    public createCustomerWithHttpInfo(requestId: string, resultIdAccountingResponse: ResultIdAccountingResponse, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createCustomer(requestId, resultIdAccountingResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Call this endpoint with the response to a customer creation request.
     * Endpoint for customer creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created customer.
     */
    public createCustomer(requestId: string, resultIdAccountingResponse: ResultIdAccountingResponse, _options?: Configuration): Observable<void> {
        return this.createCustomerWithHttpInfo(requestId, resultIdAccountingResponse, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Call this endpoint with the response to an exchange rate request.
     * Endpoint for exchange rate response
     * @param requestId The ID of the request that this response is for
     * @param exchangeRateResponse The result of the exchange rate request.
     */
    public createExchangeRateWithHttpInfo(requestId: string, exchangeRateResponse: ExchangeRateResponse, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createExchangeRate(requestId, exchangeRateResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createExchangeRateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Call this endpoint with the response to an exchange rate request.
     * Endpoint for exchange rate response
     * @param requestId The ID of the request that this response is for
     * @param exchangeRateResponse The result of the exchange rate request.
     */
    public createExchangeRate(requestId: string, exchangeRateResponse: ExchangeRateResponse, _options?: Configuration): Observable<void> {
        return this.createExchangeRateWithHttpInfo(requestId, exchangeRateResponse, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Call this endpoint with the response to a invoice creation request.
     * Endpoint for invoice creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created invoice.
     */
    public createInvoiceWithHttpInfo(requestId: string, resultIdAccountingResponse: ResultIdAccountingResponse, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createInvoice(requestId, resultIdAccountingResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Call this endpoint with the response to a invoice creation request.
     * Endpoint for invoice creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created invoice.
     */
    public createInvoice(requestId: string, resultIdAccountingResponse: ResultIdAccountingResponse, _options?: Configuration): Observable<void> {
        return this.createInvoiceWithHttpInfo(requestId, resultIdAccountingResponse, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Call this endpoint with the response to a terms search request.
     * Endpoint for terms search response
     * @param requestId The ID of the request that this response is for
     * @param termsResponse The result of the terms search
     */
    public createTermWithHttpInfo(requestId: string, termsResponse: TermsResponse, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createTerm(requestId, termsResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTermWithHttpInfo(rsp)));
            }));
    }

    /**
     * Call this endpoint with the response to a terms search request.
     * Endpoint for terms search response
     * @param requestId The ID of the request that this response is for
     * @param termsResponse The result of the terms search
     */
    public createTerm(requestId: string, termsResponse: TermsResponse, _options?: Configuration): Observable<void> {
        return this.createTermWithHttpInfo(requestId, termsResponse, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Call this endpoint with the response to a customer search request.
     * Endpoint for customer search response
     * @param requestId The ID of the request that this response is for
     * @param customerSearchResponseExternal The result of the customer search request.
     */
    public doCustomerSearchWithHttpInfo(requestId: string, customerSearchResponseExternal: CustomerSearchResponseExternal, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.doCustomerSearch(requestId, customerSearchResponseExternal, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doCustomerSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Call this endpoint with the response to a customer search request.
     * Endpoint for customer search response
     * @param requestId The ID of the request that this response is for
     * @param customerSearchResponseExternal The result of the customer search request.
     */
    public doCustomerSearch(requestId: string, customerSearchResponseExternal: CustomerSearchResponseExternal, _options?: Configuration): Observable<void> {
        return this.doCustomerSearchWithHttpInfo(requestId, customerSearchResponseExternal, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Call this endpoint with the response to a invoice search request.
     * Endpoint for invoice search response
     * @param requestId The ID of the request that this response is for
     * @param invoiceSearchResponse The result of the invoice search request.
     */
    public doInvoiceSearchWithHttpInfo(requestId: string, invoiceSearchResponse: InvoiceSearchResponse, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.doInvoiceSearch(requestId, invoiceSearchResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doInvoiceSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Call this endpoint with the response to a invoice search request.
     * Endpoint for invoice search response
     * @param requestId The ID of the request that this response is for
     * @param invoiceSearchResponse The result of the invoice search request.
     */
    public doInvoiceSearch(requestId: string, invoiceSearchResponse: InvoiceSearchResponse, _options?: Configuration): Observable<void> {
        return this.doInvoiceSearchWithHttpInfo(requestId, invoiceSearchResponse, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Call this endpoint with the response to a product search request.
     * Endpoint for product search response
     * @param requestId The ID of the request that this response is for
     * @param productSearchResponse The result of the product search request.
     */
    public doProductSearchWithHttpInfo(requestId: string, productSearchResponse: ProductSearchResponse, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.doProductSearch(requestId, productSearchResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doProductSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Call this endpoint with the response to a product search request.
     * Endpoint for product search response
     * @param requestId The ID of the request that this response is for
     * @param productSearchResponse The result of the product search request.
     */
    public doProductSearch(requestId: string, productSearchResponse: ProductSearchResponse, _options?: Configuration): Observable<void> {
        return this.doProductSearchWithHttpInfo(requestId, productSearchResponse, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Call this endpoint with the response to a taxes search request.
     * Endpoint for taxes search response
     * @param requestId The ID of the request that this response is for
     * @param taxSearchResponse The result of the taxes search request.
     */
    public doTaxSearchWithHttpInfo(requestId: string, taxSearchResponse: TaxSearchResponse, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.doTaxSearch(requestId, taxSearchResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doTaxSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Call this endpoint with the response to a taxes search request.
     * Endpoint for taxes search response
     * @param requestId The ID of the request that this response is for
     * @param taxSearchResponse The result of the taxes search request.
     */
    public doTaxSearch(requestId: string, taxSearchResponse: TaxSearchResponse, _options?: Configuration): Observable<void> {
        return this.doTaxSearchWithHttpInfo(requestId, taxSearchResponse, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Call this endpoint with the response to a invoice get-by-id request.
     * Endpoint for invoice get-by-id response
     * @param requestId The ID of the request that this response is for
     * @param invoicesResponseExternal The result of the invoice request.
     */
    public getByIdWithHttpInfo(requestId: string, invoicesResponseExternal: InvoicesResponseExternal, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getById(requestId, invoicesResponseExternal, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Call this endpoint with the response to a invoice get-by-id request.
     * Endpoint for invoice get-by-id response
     * @param requestId The ID of the request that this response is for
     * @param invoicesResponseExternal The result of the invoice request.
     */
    public getById(requestId: string, invoicesResponseExternal: InvoicesResponseExternal, _options?: Configuration): Observable<void> {
        return this.getByIdWithHttpInfo(requestId, invoicesResponseExternal, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Call this endpoint with the PDF content of a requested invoice.
     * Endpoint for PDF content of invoice
     * @param requestId The ID of the request that this response is for
     * @param invoicePdfResponse The bytes of the invoice PDF.
     */
    public invoicePdfWithHttpInfo(requestId: string, invoicePdfResponse: InvoicePdfResponse, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.invoicePdf(requestId, invoicePdfResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.invoicePdfWithHttpInfo(rsp)));
            }));
    }

    /**
     * Call this endpoint with the PDF content of a requested invoice.
     * Endpoint for PDF content of invoice
     * @param requestId The ID of the request that this response is for
     * @param invoicePdfResponse The bytes of the invoice PDF.
     */
    public invoicePdf(requestId: string, invoicePdfResponse: InvoicePdfResponse, _options?: Configuration): Observable<void> {
        return this.invoicePdfWithHttpInfo(requestId, invoicePdfResponse, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor} from "../apis/InvoiceApi";
export class ObservableInvoiceApi {
    private requestFactory: InvoiceApiRequestFactory;
    private responseProcessor: InvoiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoiceApiRequestFactory,
        responseProcessor?: InvoiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvoiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvoiceApiResponseProcessor();
    }

    /**
     * Records an payment against an invoice.
     * Records an invoice payment
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param invoiceCreatePaymentRequest The payment information
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    public createPaymentWithHttpInfo(invoiceId: string, invoiceCreatePaymentRequest: InvoiceCreatePaymentRequest, accountId?: string, _options?: Configuration): Observable<HttpInfo<InvoiceUpdateResponse>> {
        const requestContextPromise = this.requestFactory.createPayment(invoiceId, invoiceCreatePaymentRequest, accountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Records an payment against an invoice.
     * Records an invoice payment
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param invoiceCreatePaymentRequest The payment information
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    public createPayment(invoiceId: string, invoiceCreatePaymentRequest: InvoiceCreatePaymentRequest, accountId?: string, _options?: Configuration): Observable<InvoiceUpdateResponse> {
        return this.createPaymentWithHttpInfo(invoiceId, invoiceCreatePaymentRequest, accountId, _options).pipe(map((apiResponse: HttpInfo<InvoiceUpdateResponse>) => apiResponse.data));
    }

    /**
     * Returns invoice data for an Accounting account from the specified ID
     * Get invoice data
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    public getByIdWithHttpInfo(invoiceId: string, accountId: string, _options?: Configuration): Observable<HttpInfo<InvoiceReadResponse>> {
        const requestContextPromise = this.requestFactory.getById(invoiceId, accountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns invoice data for an Accounting account from the specified ID
     * Get invoice data
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    public getById(invoiceId: string, accountId: string, _options?: Configuration): Observable<InvoiceReadResponse> {
        return this.getByIdWithHttpInfo(invoiceId, accountId, _options).pipe(map((apiResponse: HttpInfo<InvoiceReadResponse>) => apiResponse.data));
    }

    /**
     * Updates an Invoice by the given ID.
     * Update an invoice
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     * @param invoiceUpdateRequest The invoice data to update
     */
    public updateWithHttpInfo(invoiceId: string, accountId: string, invoiceUpdateRequest: InvoiceUpdateRequest, _options?: Configuration): Observable<HttpInfo<InvoiceUpdateResponse>> {
        const requestContextPromise = this.requestFactory.update(invoiceId, accountId, invoiceUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an Invoice by the given ID.
     * Update an invoice
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     * @param invoiceUpdateRequest The invoice data to update
     */
    public update(invoiceId: string, accountId: string, invoiceUpdateRequest: InvoiceUpdateRequest, _options?: Configuration): Observable<InvoiceUpdateResponse> {
        return this.updateWithHttpInfo(invoiceId, accountId, invoiceUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<InvoiceUpdateResponse>) => apiResponse.data));
    }

}

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class ObservableSettingsApi {
    private requestFactory: SettingsApiRequestFactory;
    private responseProcessor: SettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApiResponseProcessor();
    }

    /**
     * Returns the URL settings for an accounting app with the specified ID.
     * Get URL settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     */
    public getByIdWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<AccountingAppSettings>> {
        const requestContextPromise = this.requestFactory.getById(appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the URL settings for an accounting app with the specified ID.
     * Get URL settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     */
    public getById(appId: number, _options?: Configuration): Observable<AccountingAppSettings> {
        return this.getByIdWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<AccountingAppSettings>) => apiResponse.data));
    }

    /**
     * Add/Update the URL settings for an accounting app with the specified ID.  All URLs must use the `https` protocol.
     * Add/Update URL Settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param accountingAppSettings 
     */
    public replaceWithHttpInfo(appId: number, accountingAppSettings: AccountingAppSettings, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.replace(appId, accountingAppSettings, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add/Update the URL settings for an accounting app with the specified ID.  All URLs must use the `https` protocol.
     * Add/Update URL Settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param accountingAppSettings 
     */
    public replace(appId: number, accountingAppSettings: AccountingAppSettings, _options?: Configuration): Observable<void> {
        return this.replaceWithHttpInfo(appId, accountingAppSettings, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { SyncApiRequestFactory, SyncApiResponseProcessor} from "../apis/SyncApi";
export class ObservableSyncApi {
    private requestFactory: SyncApiRequestFactory;
    private responseProcessor: SyncApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SyncApiRequestFactory,
        responseProcessor?: SyncApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SyncApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SyncApiResponseProcessor();
    }

    /**
     * Imports contacts\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import contacts
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncContactsRequest 
     */
    public createContactWithHttpInfo(appId: number, syncContactsRequest: SyncContactsRequest, _options?: Configuration): Observable<HttpInfo<ActionResponse>> {
        const requestContextPromise = this.requestFactory.createContact(appId, syncContactsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Imports contacts\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import contacts
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncContactsRequest 
     */
    public createContact(appId: number, syncContactsRequest: SyncContactsRequest, _options?: Configuration): Observable<ActionResponse> {
        return this.createContactWithHttpInfo(appId, syncContactsRequest, _options).pipe(map((apiResponse: HttpInfo<ActionResponse>) => apiResponse.data));
    }

    /**
     * Imports products\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import products
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncProductsRequest 
     */
    public createProductWithHttpInfo(appId: number, syncProductsRequest: SyncProductsRequest, _options?: Configuration): Observable<HttpInfo<ActionResponse>> {
        const requestContextPromise = this.requestFactory.createProduct(appId, syncProductsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Imports products\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import products
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncProductsRequest 
     */
    public createProduct(appId: number, syncProductsRequest: SyncProductsRequest, _options?: Configuration): Observable<ActionResponse> {
        return this.createProductWithHttpInfo(appId, syncProductsRequest, _options).pipe(map((apiResponse: HttpInfo<ActionResponse>) => apiResponse.data));
    }

}

import { UserAccountsApiRequestFactory, UserAccountsApiResponseProcessor} from "../apis/UserAccountsApi";
export class ObservableUserAccountsApi {
    private requestFactory: UserAccountsApiRequestFactory;
    private responseProcessor: UserAccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserAccountsApiRequestFactory,
        responseProcessor?: UserAccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserAccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserAccountsApiResponseProcessor();
    }

    /**
     * Deletes a user account from HubSpot, meaning that HubSpot will no longer send requests to the external accounting system for this user.
     * Delete user account
     * @param accountId The ID of the user account to delete.
     */
    public archiveWithHttpInfo(accountId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(accountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a user account from HubSpot, meaning that HubSpot will no longer send requests to the external accounting system for this user.
     * Delete user account
     * @param accountId The ID of the user account to delete.
     */
    public archive(accountId: string, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(accountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates an account which contains the information about the account in the external accounting system.  This *must* be called after a user connects their HubSpot account to the external accounting system, as there is no other way for HubSpot to obtain the external account details.
     * Create a user account
     * @param createUserAccountRequestExternal The external accounting system user account information.
     */
    public replaceWithHttpInfo(createUserAccountRequestExternal: CreateUserAccountRequestExternal, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.replace(createUserAccountRequestExternal, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an account which contains the information about the account in the external accounting system.  This *must* be called after a user connects their HubSpot account to the external accounting system, as there is no other way for HubSpot to obtain the external account details.
     * Create a user account
     * @param createUserAccountRequestExternal The external accounting system user account information.
     */
    public replace(createUserAccountRequestExternal: CreateUserAccountRequestExternal, _options?: Configuration): Observable<void> {
        return this.replaceWithHttpInfo(createUserAccountRequestExternal, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
