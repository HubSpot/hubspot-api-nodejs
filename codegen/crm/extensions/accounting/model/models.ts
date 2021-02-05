export * from './accountingAppSettings';
export * from './accountingAppUrls';
export * from './accountingExtensionCustomer';
export * from './accountingExtensionInvoice';
export * from './accountingExtensionTerm';
export * from './accountingFeatures';
export * from './actionResponse';
export * from './address';
export * from './createInvoiceFeature';
export * from './createInvoiceSubFeatures';
export * from './createUserAccountRequestExternal';
export * from './customerSearchResponseExternal';
export * from './errorDetail';
export * from './exchangeRateResponse';
export * from './importInvoiceFeature';
export * from './invoiceCreatePaymentRequest';
export * from './invoicePdfResponse';
export * from './invoiceReadResponse';
export * from './invoiceSearchResponse';
export * from './invoiceUpdateRequest';
export * from './invoiceUpdateResponse';
export * from './invoicesResponseExternal';
export * from './modelError';
export * from './objectSyncFeature';
export * from './product';
export * from './productSearchResponse';
export * from './resultIdAccountingResponse';
export * from './syncContactsRequest';
export * from './syncProductsRequest';
export * from './tax';
export * from './taxSearchResponse';
export * from './taxType';
export * from './termsResponse';
export * from './unitPrice';
export * from './updatedContact';
export * from './updatedProduct';

import localVarRequest = require('request');

import { AccountingAppSettings } from './accountingAppSettings';
import { AccountingAppUrls } from './accountingAppUrls';
import { AccountingExtensionCustomer } from './accountingExtensionCustomer';
import { AccountingExtensionInvoice } from './accountingExtensionInvoice';
import { AccountingExtensionTerm } from './accountingExtensionTerm';
import { AccountingFeatures } from './accountingFeatures';
import { ActionResponse } from './actionResponse';
import { Address } from './address';
import { CreateInvoiceFeature } from './createInvoiceFeature';
import { CreateInvoiceSubFeatures } from './createInvoiceSubFeatures';
import { CreateUserAccountRequestExternal } from './createUserAccountRequestExternal';
import { CustomerSearchResponseExternal } from './customerSearchResponseExternal';
import { ErrorDetail } from './errorDetail';
import { ExchangeRateResponse } from './exchangeRateResponse';
import { ImportInvoiceFeature } from './importInvoiceFeature';
import { InvoiceCreatePaymentRequest } from './invoiceCreatePaymentRequest';
import { InvoicePdfResponse } from './invoicePdfResponse';
import { InvoiceReadResponse } from './invoiceReadResponse';
import { InvoiceSearchResponse } from './invoiceSearchResponse';
import { InvoiceUpdateRequest } from './invoiceUpdateRequest';
import { InvoiceUpdateResponse } from './invoiceUpdateResponse';
import { InvoicesResponseExternal } from './invoicesResponseExternal';
import { ModelError } from './modelError';
import { ObjectSyncFeature } from './objectSyncFeature';
import { Product } from './product';
import { ProductSearchResponse } from './productSearchResponse';
import { ResultIdAccountingResponse } from './resultIdAccountingResponse';
import { SyncContactsRequest } from './syncContactsRequest';
import { SyncProductsRequest } from './syncProductsRequest';
import { Tax } from './tax';
import { TaxSearchResponse } from './taxSearchResponse';
import { TaxType } from './taxType';
import { TermsResponse } from './termsResponse';
import { UnitPrice } from './unitPrice';
import { UpdatedContact } from './updatedContact';
import { UpdatedProduct } from './updatedProduct';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountingExtensionInvoice.StatusEnum": AccountingExtensionInvoice.StatusEnum,
        "ActionResponse.StatusEnum": ActionResponse.StatusEnum,
        "CustomerSearchResponseExternal.ResultEnum": CustomerSearchResponseExternal.ResultEnum,
        "ExchangeRateResponse.ResultEnum": ExchangeRateResponse.ResultEnum,
        "InvoicePdfResponse.ResultEnum": InvoicePdfResponse.ResultEnum,
        "InvoiceReadResponse.InvoiceStatusEnum": InvoiceReadResponse.InvoiceStatusEnum,
        "InvoiceSearchResponse.ResultEnum": InvoiceSearchResponse.ResultEnum,
        "InvoiceUpdateResponse.InvoiceStatusEnum": InvoiceUpdateResponse.InvoiceStatusEnum,
        "InvoicesResponseExternal.ResultEnum": InvoicesResponseExternal.ResultEnum,
        "ProductSearchResponse.ResultEnum": ProductSearchResponse.ResultEnum,
        "ResultIdAccountingResponse.ResultEnum": ResultIdAccountingResponse.ResultEnum,
        "TaxSearchResponse.ResultEnum": TaxSearchResponse.ResultEnum,
        "TermsResponse.ResultEnum": TermsResponse.ResultEnum,
        "UpdatedContact.SyncActionEnum": UpdatedContact.SyncActionEnum,
        "UpdatedContact.CustomerTypeEnum": UpdatedContact.CustomerTypeEnum,
        "UpdatedProduct.SyncActionEnum": UpdatedProduct.SyncActionEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountingAppSettings": AccountingAppSettings,
    "AccountingAppUrls": AccountingAppUrls,
    "AccountingExtensionCustomer": AccountingExtensionCustomer,
    "AccountingExtensionInvoice": AccountingExtensionInvoice,
    "AccountingExtensionTerm": AccountingExtensionTerm,
    "AccountingFeatures": AccountingFeatures,
    "ActionResponse": ActionResponse,
    "Address": Address,
    "CreateInvoiceFeature": CreateInvoiceFeature,
    "CreateInvoiceSubFeatures": CreateInvoiceSubFeatures,
    "CreateUserAccountRequestExternal": CreateUserAccountRequestExternal,
    "CustomerSearchResponseExternal": CustomerSearchResponseExternal,
    "ErrorDetail": ErrorDetail,
    "ExchangeRateResponse": ExchangeRateResponse,
    "ImportInvoiceFeature": ImportInvoiceFeature,
    "InvoiceCreatePaymentRequest": InvoiceCreatePaymentRequest,
    "InvoicePdfResponse": InvoicePdfResponse,
    "InvoiceReadResponse": InvoiceReadResponse,
    "InvoiceSearchResponse": InvoiceSearchResponse,
    "InvoiceUpdateRequest": InvoiceUpdateRequest,
    "InvoiceUpdateResponse": InvoiceUpdateResponse,
    "InvoicesResponseExternal": InvoicesResponseExternal,
    "ModelError": ModelError,
    "ObjectSyncFeature": ObjectSyncFeature,
    "Product": Product,
    "ProductSearchResponse": ProductSearchResponse,
    "ResultIdAccountingResponse": ResultIdAccountingResponse,
    "SyncContactsRequest": SyncContactsRequest,
    "SyncProductsRequest": SyncProductsRequest,
    "Tax": Tax,
    "TaxSearchResponse": TaxSearchResponse,
    "TaxType": TaxType,
    "TermsResponse": TermsResponse,
    "UnitPrice": UnitPrice,
    "UpdatedContact": UpdatedContact,
    "UpdatedProduct": UpdatedProduct,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
