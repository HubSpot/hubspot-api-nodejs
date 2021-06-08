function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./AccountingAppSettings'));
__export(require('./AccountingAppUrls'));
__export(require('./AccountingExtensionCustomer'));
__export(require('./AccountingExtensionInvoice'));
__export(require('./AccountingExtensionTerm'));
__export(require('./AccountingFeatures'));
__export(require('./ActionResponse'));
__export(require('./Address'));
__export(require('./CreateInvoiceFeature'));
__export(require('./CreateInvoiceSubFeatures'));
__export(require('./CreateUserAccountRequestExternal'));
__export(require('./CustomerSearchResponseExternal'));
__export(require('./ErrorDetail'));
__export(require('./ExchangeRateResponse'));
__export(require('./ImportInvoiceFeature'));
__export(require('./InvoiceCreatePaymentRequest'));
__export(require('./InvoicePdfResponse'));
__export(require('./InvoiceReadResponse'));
__export(require('./InvoiceSearchResponse'));
__export(require('./InvoiceUpdateRequest'));
__export(require('./InvoiceUpdateResponse'));
__export(require('./InvoicesResponseExternal'));
__export(require('./ModelError'));
__export(require('./ObjectSyncFeature'));
__export(require('./Product'));
__export(require('./ProductSearchResponse'));
__export(require('./ResultIdAccountingResponse'));
__export(require('./SyncContactsRequest'));
__export(require('./SyncProductsRequest'));
__export(require('./Tax'));
__export(require('./TaxSearchResponse'));
__export(require('./TaxType'));
__export(require('./TermsResponse'));
__export(require('./UnitPrice'));
__export(require('./UpdatedContact'));
__export(require('./UpdatedProduct'));
var AccountingAppSettings_2 = require('./AccountingAppSettings');
var AccountingAppUrls_2 = require('./AccountingAppUrls');
var AccountingExtensionCustomer_2 = require('./AccountingExtensionCustomer');
var AccountingExtensionInvoice_2 = require('./AccountingExtensionInvoice');
var AccountingExtensionTerm_2 = require('./AccountingExtensionTerm');
var AccountingFeatures_2 = require('./AccountingFeatures');
var ActionResponse_2 = require('./ActionResponse');
var Address_2 = require('./Address');
var CreateInvoiceFeature_2 = require('./CreateInvoiceFeature');
var CreateInvoiceSubFeatures_2 = require('./CreateInvoiceSubFeatures');
var CreateUserAccountRequestExternal_2 = require('./CreateUserAccountRequestExternal');
var CustomerSearchResponseExternal_2 = require('./CustomerSearchResponseExternal');
var ErrorDetail_2 = require('./ErrorDetail');
var ExchangeRateResponse_2 = require('./ExchangeRateResponse');
var ImportInvoiceFeature_2 = require('./ImportInvoiceFeature');
var InvoiceCreatePaymentRequest_2 = require('./InvoiceCreatePaymentRequest');
var InvoicePdfResponse_2 = require('./InvoicePdfResponse');
var InvoiceReadResponse_2 = require('./InvoiceReadResponse');
var InvoiceSearchResponse_2 = require('./InvoiceSearchResponse');
var InvoiceUpdateRequest_2 = require('./InvoiceUpdateRequest');
var InvoiceUpdateResponse_2 = require('./InvoiceUpdateResponse');
var InvoicesResponseExternal_2 = require('./InvoicesResponseExternal');
var ModelError_2 = require('./ModelError');
var ObjectSyncFeature_2 = require('./ObjectSyncFeature');
var Product_2 = require('./Product');
var ProductSearchResponse_2 = require('./ProductSearchResponse');
var ResultIdAccountingResponse_2 = require('./ResultIdAccountingResponse');
var SyncContactsRequest_2 = require('./SyncContactsRequest');
var SyncProductsRequest_2 = require('./SyncProductsRequest');
var Tax_2 = require('./Tax');
var TaxSearchResponse_2 = require('./TaxSearchResponse');
var TaxType_2 = require('./TaxType');
var TermsResponse_2 = require('./TermsResponse');
var UnitPrice_2 = require('./UnitPrice');
var UpdatedContact_2 = require('./UpdatedContact');
var UpdatedProduct_2 = require('./UpdatedProduct');
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0
};
var enumsMap = new Set([
    "AccountingExtensionInvoiceStatusEnum",
    "ActionResponseStatusEnum",
    "CustomerSearchResponseExternalResultEnum",
    "ExchangeRateResponseResultEnum",
    "InvoicePdfResponseResultEnum",
    "InvoiceReadResponseInvoiceStatusEnum",
    "InvoiceSearchResponseResultEnum",
    "InvoiceUpdateResponseInvoiceStatusEnum",
    "InvoicesResponseExternalResultEnum",
    "ProductSearchResponseResultEnum",
    "ResultIdAccountingResponseResultEnum",
    "TaxSearchResponseResultEnum",
    "TermsResponseResultEnum",
    "UpdatedContactSyncActionEnum",
    "UpdatedContactCustomerTypeEnum",
    "UpdatedProductSyncActionEnum",
]);
var typeMap = {
    "AccountingAppSettings": AccountingAppSettings_2.AccountingAppSettings,
    "AccountingAppUrls": AccountingAppUrls_2.AccountingAppUrls,
    "AccountingExtensionCustomer": AccountingExtensionCustomer_2.AccountingExtensionCustomer,
    "AccountingExtensionInvoice": AccountingExtensionInvoice_2.AccountingExtensionInvoice,
    "AccountingExtensionTerm": AccountingExtensionTerm_2.AccountingExtensionTerm,
    "AccountingFeatures": AccountingFeatures_2.AccountingFeatures,
    "ActionResponse": ActionResponse_2.ActionResponse,
    "Address": Address_2.Address,
    "CreateInvoiceFeature": CreateInvoiceFeature_2.CreateInvoiceFeature,
    "CreateInvoiceSubFeatures": CreateInvoiceSubFeatures_2.CreateInvoiceSubFeatures,
    "CreateUserAccountRequestExternal": CreateUserAccountRequestExternal_2.CreateUserAccountRequestExternal,
    "CustomerSearchResponseExternal": CustomerSearchResponseExternal_2.CustomerSearchResponseExternal,
    "ErrorDetail": ErrorDetail_2.ErrorDetail,
    "ExchangeRateResponse": ExchangeRateResponse_2.ExchangeRateResponse,
    "ImportInvoiceFeature": ImportInvoiceFeature_2.ImportInvoiceFeature,
    "InvoiceCreatePaymentRequest": InvoiceCreatePaymentRequest_2.InvoiceCreatePaymentRequest,
    "InvoicePdfResponse": InvoicePdfResponse_2.InvoicePdfResponse,
    "InvoiceReadResponse": InvoiceReadResponse_2.InvoiceReadResponse,
    "InvoiceSearchResponse": InvoiceSearchResponse_2.InvoiceSearchResponse,
    "InvoiceUpdateRequest": InvoiceUpdateRequest_2.InvoiceUpdateRequest,
    "InvoiceUpdateResponse": InvoiceUpdateResponse_2.InvoiceUpdateResponse,
    "InvoicesResponseExternal": InvoicesResponseExternal_2.InvoicesResponseExternal,
    "ModelError": ModelError_2.ModelError,
    "ObjectSyncFeature": ObjectSyncFeature_2.ObjectSyncFeature,
    "Product": Product_2.Product,
    "ProductSearchResponse": ProductSearchResponse_2.ProductSearchResponse,
    "ResultIdAccountingResponse": ResultIdAccountingResponse_2.ResultIdAccountingResponse,
    "SyncContactsRequest": SyncContactsRequest_2.SyncContactsRequest,
    "SyncProductsRequest": SyncProductsRequest_2.SyncProductsRequest,
    "Tax": Tax_2.Tax,
    "TaxSearchResponse": TaxSearchResponse_2.TaxSearchResponse,
    "TaxType": TaxType_2.TaxType,
    "TermsResponse": TermsResponse_2.TermsResponse,
    "UnitPrice": UnitPrice_2.UnitPrice,
    "UpdatedContact": UpdatedContact_2.UpdatedContact,
    "UpdatedProduct": UpdatedProduct_2.UpdatedProduct
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0; _i < normalMediaTypes.length; _i++) {
            var mediaType = normalMediaTypes[_i];
            if (supportedMediaTypes[mediaType])
                !;
             > selectedRank;
            {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
                !;
                ;
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
        !;
    };
    /**
     * Convert data to a string according the given media type
     */
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    /**
     * Parse data from a string according to the given media type
     */
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
})();
exports.ObjectSerializer = ObjectSerializer;
