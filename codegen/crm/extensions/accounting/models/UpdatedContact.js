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
* A request to import external accounting contact properties in HubSpot
*/
var UpdatedContact = (function () {
    function UpdatedContact() {
    }
    UpdatedContact.readonly = discriminator;
    return UpdatedContact;
})();
exports.UpdatedContact = UpdatedContact;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "syncAction",
        "baseName": "syncAction",
        "type": "UpdatedContactSyncActionEnum",
        "format": ""
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "customerType",
        "baseName": "customerType",
        "type": "UpdatedContactCustomerTypeEnum",
        "format": ""
    }];
getAttributeTypeMap();
{
    return UpdatedContact.attributeTypeMap;
}
constructor();
{
}
"CREATE" | "UPDATE" | "DELETE";
"CONTACT" | "COMPANY";
