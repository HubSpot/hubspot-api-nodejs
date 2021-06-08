/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot's Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
* Representation of an invoice in the external accounting system.
*/
var AccountingExtensionInvoice = (function () {
    function AccountingExtensionInvoice() {
    }
    AccountingExtensionInvoice.readonly = discriminator;
    return AccountingExtensionInvoice;
})();
exports.AccountingExtensionInvoice = AccountingExtensionInvoice;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "amountDue",
        "baseName": "amountDue",
        "type": "number",
        "format": ""
    },
    {
        "name": "balance",
        "baseName": "balance",
        "type": "number",
        "format": ""
    },
    {
        "name": "dueDate",
        "baseName": "dueDate",
        "type": "string",
        "format": "date"
    },
    {
        "name": "invoiceNumber",
        "baseName": "invoiceNumber",
        "type": "string",
        "format": ""
    },
    {
        "name": "customerId",
        "baseName": "customerId",
        "type": "string",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string",
        "format": ""
    },
    {
        "name": "invoiceLink",
        "baseName": "invoiceLink",
        "type": "string",
        "format": ""
    },
    {
        "name": "customerName",
        "baseName": "customerName",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "AccountingExtensionInvoiceStatusEnum",
        "format": ""
    }];
getAttributeTypeMap();
{
    return AccountingExtensionInvoice.attributeTypeMap;
}
constructor();
{
}
"CREATED" | "SENT" | "PAID" | "CLOSED" | "OVERDUE" | "VOIDED";
