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
* A response that contains the PDF of an invoice
*/
var InvoicePdfResponse = (function () {
    function InvoicePdfResponse() {
    }
    InvoicePdfResponse.readonly = discriminator;
    return InvoicePdfResponse;
})();
exports.InvoicePdfResponse = InvoicePdfResponse;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "result",
        "baseName": "@result",
        "type": "InvoicePdfResponseResultEnum",
        "format": ""
    },
    {
        "name": "invoice",
        "baseName": "invoice",
        "type": "string",
        "format": "byte"
    }];
getAttributeTypeMap();
{
    return InvoicePdfResponse.attributeTypeMap;
}
constructor();
{
}
"OK" | "ERR";
