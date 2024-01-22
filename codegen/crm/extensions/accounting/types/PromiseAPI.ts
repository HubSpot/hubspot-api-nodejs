import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
import { ObservableCallbacksApi } from './ObservableAPI';

import { CallbacksApiRequestFactory, CallbacksApiResponseProcessor} from "../apis/CallbacksApi";
export class PromiseCallbacksApi {
    private api: ObservableCallbacksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CallbacksApiRequestFactory,
        responseProcessor?: CallbacksApiResponseProcessor
    ) {
        this.api = new ObservableCallbacksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Call this endpoint with the response to a customer creation request.
     * Endpoint for customer creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created customer.
     */
    public createCustomerWithHttpInfo(requestId: string, resultIdAccountingResponse: ResultIdAccountingResponse, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createCustomerWithHttpInfo(requestId, resultIdAccountingResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a customer creation request.
     * Endpoint for customer creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created customer.
     */
    public createCustomer(requestId: string, resultIdAccountingResponse: ResultIdAccountingResponse, _options?: Configuration): Promise<void> {
        const result = this.api.createCustomer(requestId, resultIdAccountingResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to an exchange rate request.
     * Endpoint for exchange rate response
     * @param requestId The ID of the request that this response is for
     * @param exchangeRateResponse The result of the exchange rate request.
     */
    public createExchangeRateWithHttpInfo(requestId: string, exchangeRateResponse: ExchangeRateResponse, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createExchangeRateWithHttpInfo(requestId, exchangeRateResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to an exchange rate request.
     * Endpoint for exchange rate response
     * @param requestId The ID of the request that this response is for
     * @param exchangeRateResponse The result of the exchange rate request.
     */
    public createExchangeRate(requestId: string, exchangeRateResponse: ExchangeRateResponse, _options?: Configuration): Promise<void> {
        const result = this.api.createExchangeRate(requestId, exchangeRateResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice creation request.
     * Endpoint for invoice creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created invoice.
     */
    public createInvoiceWithHttpInfo(requestId: string, resultIdAccountingResponse: ResultIdAccountingResponse, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createInvoiceWithHttpInfo(requestId, resultIdAccountingResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice creation request.
     * Endpoint for invoice creation response
     * @param requestId The ID of the request that this response is for
     * @param resultIdAccountingResponse The ID of the created invoice.
     */
    public createInvoice(requestId: string, resultIdAccountingResponse: ResultIdAccountingResponse, _options?: Configuration): Promise<void> {
        const result = this.api.createInvoice(requestId, resultIdAccountingResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a terms search request.
     * Endpoint for terms search response
     * @param requestId The ID of the request that this response is for
     * @param termsResponse The result of the terms search
     */
    public createTermWithHttpInfo(requestId: string, termsResponse: TermsResponse, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createTermWithHttpInfo(requestId, termsResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a terms search request.
     * Endpoint for terms search response
     * @param requestId The ID of the request that this response is for
     * @param termsResponse The result of the terms search
     */
    public createTerm(requestId: string, termsResponse: TermsResponse, _options?: Configuration): Promise<void> {
        const result = this.api.createTerm(requestId, termsResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a customer search request.
     * Endpoint for customer search response
     * @param requestId The ID of the request that this response is for
     * @param customerSearchResponseExternal The result of the customer search request.
     */
    public doCustomerSearchWithHttpInfo(requestId: string, customerSearchResponseExternal: CustomerSearchResponseExternal, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.doCustomerSearchWithHttpInfo(requestId, customerSearchResponseExternal, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a customer search request.
     * Endpoint for customer search response
     * @param requestId The ID of the request that this response is for
     * @param customerSearchResponseExternal The result of the customer search request.
     */
    public doCustomerSearch(requestId: string, customerSearchResponseExternal: CustomerSearchResponseExternal, _options?: Configuration): Promise<void> {
        const result = this.api.doCustomerSearch(requestId, customerSearchResponseExternal, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice search request.
     * Endpoint for invoice search response
     * @param requestId The ID of the request that this response is for
     * @param invoiceSearchResponse The result of the invoice search request.
     */
    public doInvoiceSearchWithHttpInfo(requestId: string, invoiceSearchResponse: InvoiceSearchResponse, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.doInvoiceSearchWithHttpInfo(requestId, invoiceSearchResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice search request.
     * Endpoint for invoice search response
     * @param requestId The ID of the request that this response is for
     * @param invoiceSearchResponse The result of the invoice search request.
     */
    public doInvoiceSearch(requestId: string, invoiceSearchResponse: InvoiceSearchResponse, _options?: Configuration): Promise<void> {
        const result = this.api.doInvoiceSearch(requestId, invoiceSearchResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a product search request.
     * Endpoint for product search response
     * @param requestId The ID of the request that this response is for
     * @param productSearchResponse The result of the product search request.
     */
    public doProductSearchWithHttpInfo(requestId: string, productSearchResponse: ProductSearchResponse, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.doProductSearchWithHttpInfo(requestId, productSearchResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a product search request.
     * Endpoint for product search response
     * @param requestId The ID of the request that this response is for
     * @param productSearchResponse The result of the product search request.
     */
    public doProductSearch(requestId: string, productSearchResponse: ProductSearchResponse, _options?: Configuration): Promise<void> {
        const result = this.api.doProductSearch(requestId, productSearchResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a taxes search request.
     * Endpoint for taxes search response
     * @param requestId The ID of the request that this response is for
     * @param taxSearchResponse The result of the taxes search request.
     */
    public doTaxSearchWithHttpInfo(requestId: string, taxSearchResponse: TaxSearchResponse, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.doTaxSearchWithHttpInfo(requestId, taxSearchResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a taxes search request.
     * Endpoint for taxes search response
     * @param requestId The ID of the request that this response is for
     * @param taxSearchResponse The result of the taxes search request.
     */
    public doTaxSearch(requestId: string, taxSearchResponse: TaxSearchResponse, _options?: Configuration): Promise<void> {
        const result = this.api.doTaxSearch(requestId, taxSearchResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice get-by-id request.
     * Endpoint for invoice get-by-id response
     * @param requestId The ID of the request that this response is for
     * @param invoicesResponseExternal The result of the invoice request.
     */
    public getByIdWithHttpInfo(requestId: string, invoicesResponseExternal: InvoicesResponseExternal, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getByIdWithHttpInfo(requestId, invoicesResponseExternal, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice get-by-id request.
     * Endpoint for invoice get-by-id response
     * @param requestId The ID of the request that this response is for
     * @param invoicesResponseExternal The result of the invoice request.
     */
    public getById(requestId: string, invoicesResponseExternal: InvoicesResponseExternal, _options?: Configuration): Promise<void> {
        const result = this.api.getById(requestId, invoicesResponseExternal, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the PDF content of a requested invoice.
     * Endpoint for PDF content of invoice
     * @param requestId The ID of the request that this response is for
     * @param invoicePdfResponse The bytes of the invoice PDF.
     */
    public invoicePdfWithHttpInfo(requestId: string, invoicePdfResponse: InvoicePdfResponse, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.invoicePdfWithHttpInfo(requestId, invoicePdfResponse, _options);
        return result.toPromise();
    }

    /**
     * Call this endpoint with the PDF content of a requested invoice.
     * Endpoint for PDF content of invoice
     * @param requestId The ID of the request that this response is for
     * @param invoicePdfResponse The bytes of the invoice PDF.
     */
    public invoicePdf(requestId: string, invoicePdfResponse: InvoicePdfResponse, _options?: Configuration): Promise<void> {
        const result = this.api.invoicePdf(requestId, invoicePdfResponse, _options);
        return result.toPromise();
    }


}



import { ObservableInvoiceApi } from './ObservableAPI';

import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor} from "../apis/InvoiceApi";
export class PromiseInvoiceApi {
    private api: ObservableInvoiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoiceApiRequestFactory,
        responseProcessor?: InvoiceApiResponseProcessor
    ) {
        this.api = new ObservableInvoiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Records an payment against an invoice.
     * Records an invoice payment
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param invoiceCreatePaymentRequest The payment information
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    public createPaymentWithHttpInfo(invoiceId: string, invoiceCreatePaymentRequest: InvoiceCreatePaymentRequest, accountId?: string, _options?: Configuration): Promise<HttpInfo<InvoiceUpdateResponse>> {
        const result = this.api.createPaymentWithHttpInfo(invoiceId, invoiceCreatePaymentRequest, accountId, _options);
        return result.toPromise();
    }

    /**
     * Records an payment against an invoice.
     * Records an invoice payment
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param invoiceCreatePaymentRequest The payment information
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    public createPayment(invoiceId: string, invoiceCreatePaymentRequest: InvoiceCreatePaymentRequest, accountId?: string, _options?: Configuration): Promise<InvoiceUpdateResponse> {
        const result = this.api.createPayment(invoiceId, invoiceCreatePaymentRequest, accountId, _options);
        return result.toPromise();
    }

    /**
     * Returns invoice data for an Accounting account from the specified ID
     * Get invoice data
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    public getByIdWithHttpInfo(invoiceId: string, accountId: string, _options?: Configuration): Promise<HttpInfo<InvoiceReadResponse>> {
        const result = this.api.getByIdWithHttpInfo(invoiceId, accountId, _options);
        return result.toPromise();
    }

    /**
     * Returns invoice data for an Accounting account from the specified ID
     * Get invoice data
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    public getById(invoiceId: string, accountId: string, _options?: Configuration): Promise<InvoiceReadResponse> {
        const result = this.api.getById(invoiceId, accountId, _options);
        return result.toPromise();
    }

    /**
     * Updates an Invoice by the given ID.
     * Update an invoice
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     * @param invoiceUpdateRequest The invoice data to update
     */
    public updateWithHttpInfo(invoiceId: string, accountId: string, invoiceUpdateRequest: InvoiceUpdateRequest, _options?: Configuration): Promise<HttpInfo<InvoiceUpdateResponse>> {
        const result = this.api.updateWithHttpInfo(invoiceId, accountId, invoiceUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates an Invoice by the given ID.
     * Update an invoice
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     * @param invoiceUpdateRequest The invoice data to update
     */
    public update(invoiceId: string, accountId: string, invoiceUpdateRequest: InvoiceUpdateRequest, _options?: Configuration): Promise<InvoiceUpdateResponse> {
        const result = this.api.update(invoiceId, accountId, invoiceUpdateRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSettingsApi } from './ObservableAPI';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class PromiseSettingsApi {
    private api: ObservableSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the URL settings for an accounting app with the specified ID.
     * Get URL settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     */
    public getByIdWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<AccountingAppSettings>> {
        const result = this.api.getByIdWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Returns the URL settings for an accounting app with the specified ID.
     * Get URL settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     */
    public getById(appId: number, _options?: Configuration): Promise<AccountingAppSettings> {
        const result = this.api.getById(appId, _options);
        return result.toPromise();
    }

    /**
     * Add/Update the URL settings for an accounting app with the specified ID.  All URLs must use the `https` protocol.
     * Add/Update URL Settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param accountingAppSettings 
     */
    public replaceWithHttpInfo(appId: number, accountingAppSettings: AccountingAppSettings, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.replaceWithHttpInfo(appId, accountingAppSettings, _options);
        return result.toPromise();
    }

    /**
     * Add/Update the URL settings for an accounting app with the specified ID.  All URLs must use the `https` protocol.
     * Add/Update URL Settings
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param accountingAppSettings 
     */
    public replace(appId: number, accountingAppSettings: AccountingAppSettings, _options?: Configuration): Promise<void> {
        const result = this.api.replace(appId, accountingAppSettings, _options);
        return result.toPromise();
    }


}



import { ObservableSyncApi } from './ObservableAPI';

import { SyncApiRequestFactory, SyncApiResponseProcessor} from "../apis/SyncApi";
export class PromiseSyncApi {
    private api: ObservableSyncApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SyncApiRequestFactory,
        responseProcessor?: SyncApiResponseProcessor
    ) {
        this.api = new ObservableSyncApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Imports contacts\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import contacts
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncContactsRequest 
     */
    public createContactWithHttpInfo(appId: number, syncContactsRequest: SyncContactsRequest, _options?: Configuration): Promise<HttpInfo<ActionResponse>> {
        const result = this.api.createContactWithHttpInfo(appId, syncContactsRequest, _options);
        return result.toPromise();
    }

    /**
     * Imports contacts\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import contacts
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncContactsRequest 
     */
    public createContact(appId: number, syncContactsRequest: SyncContactsRequest, _options?: Configuration): Promise<ActionResponse> {
        const result = this.api.createContact(appId, syncContactsRequest, _options);
        return result.toPromise();
    }

    /**
     * Imports products\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import products
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncProductsRequest 
     */
    public createProductWithHttpInfo(appId: number, syncProductsRequest: SyncProductsRequest, _options?: Configuration): Promise<HttpInfo<ActionResponse>> {
        const result = this.api.createProductWithHttpInfo(appId, syncProductsRequest, _options);
        return result.toPromise();
    }

    /**
     * Imports products\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import products
     * @param appId The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @param syncProductsRequest 
     */
    public createProduct(appId: number, syncProductsRequest: SyncProductsRequest, _options?: Configuration): Promise<ActionResponse> {
        const result = this.api.createProduct(appId, syncProductsRequest, _options);
        return result.toPromise();
    }


}



import { ObservableUserAccountsApi } from './ObservableAPI';

import { UserAccountsApiRequestFactory, UserAccountsApiResponseProcessor} from "../apis/UserAccountsApi";
export class PromiseUserAccountsApi {
    private api: ObservableUserAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserAccountsApiRequestFactory,
        responseProcessor?: UserAccountsApiResponseProcessor
    ) {
        this.api = new ObservableUserAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a user account from HubSpot, meaning that HubSpot will no longer send requests to the external accounting system for this user.
     * Delete user account
     * @param accountId The ID of the user account to delete.
     */
    public archiveWithHttpInfo(accountId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(accountId, _options);
        return result.toPromise();
    }

    /**
     * Deletes a user account from HubSpot, meaning that HubSpot will no longer send requests to the external accounting system for this user.
     * Delete user account
     * @param accountId The ID of the user account to delete.
     */
    public archive(accountId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(accountId, _options);
        return result.toPromise();
    }

    /**
     * Creates an account which contains the information about the account in the external accounting system.  This *must* be called after a user connects their HubSpot account to the external accounting system, as there is no other way for HubSpot to obtain the external account details.
     * Create a user account
     * @param createUserAccountRequestExternal The external accounting system user account information.
     */
    public replaceWithHttpInfo(createUserAccountRequestExternal: CreateUserAccountRequestExternal, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.replaceWithHttpInfo(createUserAccountRequestExternal, _options);
        return result.toPromise();
    }

    /**
     * Creates an account which contains the information about the account in the external accounting system.  This *must* be called after a user connects their HubSpot account to the external accounting system, as there is no other way for HubSpot to obtain the external account details.
     * Create a user account
     * @param createUserAccountRequestExternal The external accounting system user account information.
     */
    public replace(createUserAccountRequestExternal: CreateUserAccountRequestExternal, _options?: Configuration): Promise<void> {
        const result = this.api.replace(createUserAccountRequestExternal, _options);
        return result.toPromise();
    }


}



