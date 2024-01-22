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

import { ObservableCallbacksApi } from "./ObservableAPI";
import { CallbacksApiRequestFactory, CallbacksApiResponseProcessor} from "../apis/CallbacksApi";

export interface CallbacksApiCreateCustomerRequest {
    /**
     * The ID of the request that this response is for
     * @type string
     * @memberof CallbacksApicreateCustomer
     */
    requestId: string
    /**
     * The ID of the created customer.
     * @type ResultIdAccountingResponse
     * @memberof CallbacksApicreateCustomer
     */
    resultIdAccountingResponse: ResultIdAccountingResponse
}

export interface CallbacksApiCreateExchangeRateRequest {
    /**
     * The ID of the request that this response is for
     * @type string
     * @memberof CallbacksApicreateExchangeRate
     */
    requestId: string
    /**
     * The result of the exchange rate request.
     * @type ExchangeRateResponse
     * @memberof CallbacksApicreateExchangeRate
     */
    exchangeRateResponse: ExchangeRateResponse
}

export interface CallbacksApiCreateInvoiceRequest {
    /**
     * The ID of the request that this response is for
     * @type string
     * @memberof CallbacksApicreateInvoice
     */
    requestId: string
    /**
     * The ID of the created invoice.
     * @type ResultIdAccountingResponse
     * @memberof CallbacksApicreateInvoice
     */
    resultIdAccountingResponse: ResultIdAccountingResponse
}

export interface CallbacksApiCreateTermRequest {
    /**
     * The ID of the request that this response is for
     * @type string
     * @memberof CallbacksApicreateTerm
     */
    requestId: string
    /**
     * The result of the terms search
     * @type TermsResponse
     * @memberof CallbacksApicreateTerm
     */
    termsResponse: TermsResponse
}

export interface CallbacksApiDoCustomerSearchRequest {
    /**
     * The ID of the request that this response is for
     * @type string
     * @memberof CallbacksApidoCustomerSearch
     */
    requestId: string
    /**
     * The result of the customer search request.
     * @type CustomerSearchResponseExternal
     * @memberof CallbacksApidoCustomerSearch
     */
    customerSearchResponseExternal: CustomerSearchResponseExternal
}

export interface CallbacksApiDoInvoiceSearchRequest {
    /**
     * The ID of the request that this response is for
     * @type string
     * @memberof CallbacksApidoInvoiceSearch
     */
    requestId: string
    /**
     * The result of the invoice search request.
     * @type InvoiceSearchResponse
     * @memberof CallbacksApidoInvoiceSearch
     */
    invoiceSearchResponse: InvoiceSearchResponse
}

export interface CallbacksApiDoProductSearchRequest {
    /**
     * The ID of the request that this response is for
     * @type string
     * @memberof CallbacksApidoProductSearch
     */
    requestId: string
    /**
     * The result of the product search request.
     * @type ProductSearchResponse
     * @memberof CallbacksApidoProductSearch
     */
    productSearchResponse: ProductSearchResponse
}

export interface CallbacksApiDoTaxSearchRequest {
    /**
     * The ID of the request that this response is for
     * @type string
     * @memberof CallbacksApidoTaxSearch
     */
    requestId: string
    /**
     * The result of the taxes search request.
     * @type TaxSearchResponse
     * @memberof CallbacksApidoTaxSearch
     */
    taxSearchResponse: TaxSearchResponse
}

export interface CallbacksApiGetByIdRequest {
    /**
     * The ID of the request that this response is for
     * @type string
     * @memberof CallbacksApigetById
     */
    requestId: string
    /**
     * The result of the invoice request.
     * @type InvoicesResponseExternal
     * @memberof CallbacksApigetById
     */
    invoicesResponseExternal: InvoicesResponseExternal
}

export interface CallbacksApiInvoicePdfRequest {
    /**
     * The ID of the request that this response is for
     * @type string
     * @memberof CallbacksApiinvoicePdf
     */
    requestId: string
    /**
     * The bytes of the invoice PDF.
     * @type InvoicePdfResponse
     * @memberof CallbacksApiinvoicePdf
     */
    invoicePdfResponse: InvoicePdfResponse
}

export class ObjectCallbacksApi {
    private api: ObservableCallbacksApi

    public constructor(configuration: Configuration, requestFactory?: CallbacksApiRequestFactory, responseProcessor?: CallbacksApiResponseProcessor) {
        this.api = new ObservableCallbacksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Call this endpoint with the response to a customer creation request.
     * Endpoint for customer creation response
     * @param param the request object
     */
    public createCustomerWithHttpInfo(param: CallbacksApiCreateCustomerRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createCustomerWithHttpInfo(param.requestId, param.resultIdAccountingResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a customer creation request.
     * Endpoint for customer creation response
     * @param param the request object
     */
    public createCustomer(param: CallbacksApiCreateCustomerRequest, options?: Configuration): Promise<void> {
        return this.api.createCustomer(param.requestId, param.resultIdAccountingResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to an exchange rate request.
     * Endpoint for exchange rate response
     * @param param the request object
     */
    public createExchangeRateWithHttpInfo(param: CallbacksApiCreateExchangeRateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createExchangeRateWithHttpInfo(param.requestId, param.exchangeRateResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to an exchange rate request.
     * Endpoint for exchange rate response
     * @param param the request object
     */
    public createExchangeRate(param: CallbacksApiCreateExchangeRateRequest, options?: Configuration): Promise<void> {
        return this.api.createExchangeRate(param.requestId, param.exchangeRateResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice creation request.
     * Endpoint for invoice creation response
     * @param param the request object
     */
    public createInvoiceWithHttpInfo(param: CallbacksApiCreateInvoiceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createInvoiceWithHttpInfo(param.requestId, param.resultIdAccountingResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice creation request.
     * Endpoint for invoice creation response
     * @param param the request object
     */
    public createInvoice(param: CallbacksApiCreateInvoiceRequest, options?: Configuration): Promise<void> {
        return this.api.createInvoice(param.requestId, param.resultIdAccountingResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a terms search request.
     * Endpoint for terms search response
     * @param param the request object
     */
    public createTermWithHttpInfo(param: CallbacksApiCreateTermRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createTermWithHttpInfo(param.requestId, param.termsResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a terms search request.
     * Endpoint for terms search response
     * @param param the request object
     */
    public createTerm(param: CallbacksApiCreateTermRequest, options?: Configuration): Promise<void> {
        return this.api.createTerm(param.requestId, param.termsResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a customer search request.
     * Endpoint for customer search response
     * @param param the request object
     */
    public doCustomerSearchWithHttpInfo(param: CallbacksApiDoCustomerSearchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.doCustomerSearchWithHttpInfo(param.requestId, param.customerSearchResponseExternal,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a customer search request.
     * Endpoint for customer search response
     * @param param the request object
     */
    public doCustomerSearch(param: CallbacksApiDoCustomerSearchRequest, options?: Configuration): Promise<void> {
        return this.api.doCustomerSearch(param.requestId, param.customerSearchResponseExternal,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice search request.
     * Endpoint for invoice search response
     * @param param the request object
     */
    public doInvoiceSearchWithHttpInfo(param: CallbacksApiDoInvoiceSearchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.doInvoiceSearchWithHttpInfo(param.requestId, param.invoiceSearchResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice search request.
     * Endpoint for invoice search response
     * @param param the request object
     */
    public doInvoiceSearch(param: CallbacksApiDoInvoiceSearchRequest, options?: Configuration): Promise<void> {
        return this.api.doInvoiceSearch(param.requestId, param.invoiceSearchResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a product search request.
     * Endpoint for product search response
     * @param param the request object
     */
    public doProductSearchWithHttpInfo(param: CallbacksApiDoProductSearchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.doProductSearchWithHttpInfo(param.requestId, param.productSearchResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a product search request.
     * Endpoint for product search response
     * @param param the request object
     */
    public doProductSearch(param: CallbacksApiDoProductSearchRequest, options?: Configuration): Promise<void> {
        return this.api.doProductSearch(param.requestId, param.productSearchResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a taxes search request.
     * Endpoint for taxes search response
     * @param param the request object
     */
    public doTaxSearchWithHttpInfo(param: CallbacksApiDoTaxSearchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.doTaxSearchWithHttpInfo(param.requestId, param.taxSearchResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a taxes search request.
     * Endpoint for taxes search response
     * @param param the request object
     */
    public doTaxSearch(param: CallbacksApiDoTaxSearchRequest, options?: Configuration): Promise<void> {
        return this.api.doTaxSearch(param.requestId, param.taxSearchResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice get-by-id request.
     * Endpoint for invoice get-by-id response
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: CallbacksApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getByIdWithHttpInfo(param.requestId, param.invoicesResponseExternal,  options).toPromise();
    }

    /**
     * Call this endpoint with the response to a invoice get-by-id request.
     * Endpoint for invoice get-by-id response
     * @param param the request object
     */
    public getById(param: CallbacksApiGetByIdRequest, options?: Configuration): Promise<void> {
        return this.api.getById(param.requestId, param.invoicesResponseExternal,  options).toPromise();
    }

    /**
     * Call this endpoint with the PDF content of a requested invoice.
     * Endpoint for PDF content of invoice
     * @param param the request object
     */
    public invoicePdfWithHttpInfo(param: CallbacksApiInvoicePdfRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.invoicePdfWithHttpInfo(param.requestId, param.invoicePdfResponse,  options).toPromise();
    }

    /**
     * Call this endpoint with the PDF content of a requested invoice.
     * Endpoint for PDF content of invoice
     * @param param the request object
     */
    public invoicePdf(param: CallbacksApiInvoicePdfRequest, options?: Configuration): Promise<void> {
        return this.api.invoicePdf(param.requestId, param.invoicePdfResponse,  options).toPromise();
    }

}

import { ObservableInvoiceApi } from "./ObservableAPI";
import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor} from "../apis/InvoiceApi";

export interface InvoiceApiCreatePaymentRequest {
    /**
     * The ID of the invoice. This is the invoice ID from the external accounting system.
     * @type string
     * @memberof InvoiceApicreatePayment
     */
    invoiceId: string
    /**
     * The payment information
     * @type InvoiceCreatePaymentRequest
     * @memberof InvoiceApicreatePayment
     */
    invoiceCreatePaymentRequest: InvoiceCreatePaymentRequest
    /**
     * The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     * @type string
     * @memberof InvoiceApicreatePayment
     */
    accountId?: string
}

export interface InvoiceApiGetByIdRequest {
    /**
     * The ID of the invoice. This is the invoice ID from the external accounting system.
     * @type string
     * @memberof InvoiceApigetById
     */
    invoiceId: string
    /**
     * The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     * @type string
     * @memberof InvoiceApigetById
     */
    accountId: string
}

export interface InvoiceApiUpdateRequest {
    /**
     * The ID of the invoice. This is the invoice ID from the external accounting system.
     * @type string
     * @memberof InvoiceApiupdate
     */
    invoiceId: string
    /**
     * The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     * @type string
     * @memberof InvoiceApiupdate
     */
    accountId: string
    /**
     * The invoice data to update
     * @type InvoiceUpdateRequest
     * @memberof InvoiceApiupdate
     */
    invoiceUpdateRequest: InvoiceUpdateRequest
}

export class ObjectInvoiceApi {
    private api: ObservableInvoiceApi

    public constructor(configuration: Configuration, requestFactory?: InvoiceApiRequestFactory, responseProcessor?: InvoiceApiResponseProcessor) {
        this.api = new ObservableInvoiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Records an payment against an invoice.
     * Records an invoice payment
     * @param param the request object
     */
    public createPaymentWithHttpInfo(param: InvoiceApiCreatePaymentRequest, options?: Configuration): Promise<HttpInfo<InvoiceUpdateResponse>> {
        return this.api.createPaymentWithHttpInfo(param.invoiceId, param.invoiceCreatePaymentRequest, param.accountId,  options).toPromise();
    }

    /**
     * Records an payment against an invoice.
     * Records an invoice payment
     * @param param the request object
     */
    public createPayment(param: InvoiceApiCreatePaymentRequest, options?: Configuration): Promise<InvoiceUpdateResponse> {
        return this.api.createPayment(param.invoiceId, param.invoiceCreatePaymentRequest, param.accountId,  options).toPromise();
    }

    /**
     * Returns invoice data for an Accounting account from the specified ID
     * Get invoice data
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: InvoiceApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<InvoiceReadResponse>> {
        return this.api.getByIdWithHttpInfo(param.invoiceId, param.accountId,  options).toPromise();
    }

    /**
     * Returns invoice data for an Accounting account from the specified ID
     * Get invoice data
     * @param param the request object
     */
    public getById(param: InvoiceApiGetByIdRequest, options?: Configuration): Promise<InvoiceReadResponse> {
        return this.api.getById(param.invoiceId, param.accountId,  options).toPromise();
    }

    /**
     * Updates an Invoice by the given ID.
     * Update an invoice
     * @param param the request object
     */
    public updateWithHttpInfo(param: InvoiceApiUpdateRequest, options?: Configuration): Promise<HttpInfo<InvoiceUpdateResponse>> {
        return this.api.updateWithHttpInfo(param.invoiceId, param.accountId, param.invoiceUpdateRequest,  options).toPromise();
    }

    /**
     * Updates an Invoice by the given ID.
     * Update an invoice
     * @param param the request object
     */
    public update(param: InvoiceApiUpdateRequest, options?: Configuration): Promise<InvoiceUpdateResponse> {
        return this.api.update(param.invoiceId, param.accountId, param.invoiceUpdateRequest,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiGetByIdRequest {
    /**
     * The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @type number
     * @memberof SettingsApigetById
     */
    appId: number
}

export interface SettingsApiReplaceRequest {
    /**
     * The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @type number
     * @memberof SettingsApireplace
     */
    appId: number
    /**
     * 
     * @type AccountingAppSettings
     * @memberof SettingsApireplace
     */
    accountingAppSettings: AccountingAppSettings
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the URL settings for an accounting app with the specified ID.
     * Get URL settings
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: SettingsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<AccountingAppSettings>> {
        return this.api.getByIdWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Returns the URL settings for an accounting app with the specified ID.
     * Get URL settings
     * @param param the request object
     */
    public getById(param: SettingsApiGetByIdRequest, options?: Configuration): Promise<AccountingAppSettings> {
        return this.api.getById(param.appId,  options).toPromise();
    }

    /**
     * Add/Update the URL settings for an accounting app with the specified ID.  All URLs must use the `https` protocol.
     * Add/Update URL Settings
     * @param param the request object
     */
    public replaceWithHttpInfo(param: SettingsApiReplaceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.replaceWithHttpInfo(param.appId, param.accountingAppSettings,  options).toPromise();
    }

    /**
     * Add/Update the URL settings for an accounting app with the specified ID.  All URLs must use the `https` protocol.
     * Add/Update URL Settings
     * @param param the request object
     */
    public replace(param: SettingsApiReplaceRequest, options?: Configuration): Promise<void> {
        return this.api.replace(param.appId, param.accountingAppSettings,  options).toPromise();
    }

}

import { ObservableSyncApi } from "./ObservableAPI";
import { SyncApiRequestFactory, SyncApiResponseProcessor} from "../apis/SyncApi";

export interface SyncApiCreateContactRequest {
    /**
     * The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @type number
     * @memberof SyncApicreateContact
     */
    appId: number
    /**
     * 
     * @type SyncContactsRequest
     * @memberof SyncApicreateContact
     */
    syncContactsRequest: SyncContactsRequest
}

export interface SyncApiCreateProductRequest {
    /**
     * The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
     * @type number
     * @memberof SyncApicreateProduct
     */
    appId: number
    /**
     * 
     * @type SyncProductsRequest
     * @memberof SyncApicreateProduct
     */
    syncProductsRequest: SyncProductsRequest
}

export class ObjectSyncApi {
    private api: ObservableSyncApi

    public constructor(configuration: Configuration, requestFactory?: SyncApiRequestFactory, responseProcessor?: SyncApiResponseProcessor) {
        this.api = new ObservableSyncApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Imports contacts\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import contacts
     * @param param the request object
     */
    public createContactWithHttpInfo(param: SyncApiCreateContactRequest, options?: Configuration): Promise<HttpInfo<ActionResponse>> {
        return this.api.createContactWithHttpInfo(param.appId, param.syncContactsRequest,  options).toPromise();
    }

    /**
     * Imports contacts\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import contacts
     * @param param the request object
     */
    public createContact(param: SyncApiCreateContactRequest, options?: Configuration): Promise<ActionResponse> {
        return this.api.createContact(param.appId, param.syncContactsRequest,  options).toPromise();
    }

    /**
     * Imports products\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import products
     * @param param the request object
     */
    public createProductWithHttpInfo(param: SyncApiCreateProductRequest, options?: Configuration): Promise<HttpInfo<ActionResponse>> {
        return this.api.createProductWithHttpInfo(param.appId, param.syncProductsRequest,  options).toPromise();
    }

    /**
     * Imports products\' properties from an external accounting system to HubSpot. Import details, including property mappings, must be configured previously in HubSpot infrastructure.
     * Import products
     * @param param the request object
     */
    public createProduct(param: SyncApiCreateProductRequest, options?: Configuration): Promise<ActionResponse> {
        return this.api.createProduct(param.appId, param.syncProductsRequest,  options).toPromise();
    }

}

import { ObservableUserAccountsApi } from "./ObservableAPI";
import { UserAccountsApiRequestFactory, UserAccountsApiResponseProcessor} from "../apis/UserAccountsApi";

export interface UserAccountsApiArchiveRequest {
    /**
     * The ID of the user account to delete.
     * @type string
     * @memberof UserAccountsApiarchive
     */
    accountId: string
}

export interface UserAccountsApiReplaceRequest {
    /**
     * The external accounting system user account information.
     * @type CreateUserAccountRequestExternal
     * @memberof UserAccountsApireplace
     */
    createUserAccountRequestExternal: CreateUserAccountRequestExternal
}

export class ObjectUserAccountsApi {
    private api: ObservableUserAccountsApi

    public constructor(configuration: Configuration, requestFactory?: UserAccountsApiRequestFactory, responseProcessor?: UserAccountsApiResponseProcessor) {
        this.api = new ObservableUserAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a user account from HubSpot, meaning that HubSpot will no longer send requests to the external accounting system for this user.
     * Delete user account
     * @param param the request object
     */
    public archiveWithHttpInfo(param: UserAccountsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.accountId,  options).toPromise();
    }

    /**
     * Deletes a user account from HubSpot, meaning that HubSpot will no longer send requests to the external accounting system for this user.
     * Delete user account
     * @param param the request object
     */
    public archive(param: UserAccountsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.accountId,  options).toPromise();
    }

    /**
     * Creates an account which contains the information about the account in the external accounting system.  This *must* be called after a user connects their HubSpot account to the external accounting system, as there is no other way for HubSpot to obtain the external account details.
     * Create a user account
     * @param param the request object
     */
    public replaceWithHttpInfo(param: UserAccountsApiReplaceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.replaceWithHttpInfo(param.createUserAccountRequestExternal,  options).toPromise();
    }

    /**
     * Creates an account which contains the information about the account in the external accounting system.  This *must* be called after a user connects their HubSpot account to the external accounting system, as there is no other way for HubSpot to obtain the external account details.
     * Create a user account
     * @param param the request object
     */
    public replace(param: UserAccountsApiReplaceRequest, options?: Configuration): Promise<void> {
        return this.api.replace(param.createUserAccountRequestExternal,  options).toPromise();
    }

}
