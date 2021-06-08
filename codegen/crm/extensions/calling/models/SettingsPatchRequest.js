/**
 * Calling Extensions API
 * Provides a way for apps to add custom calling options to a contact record. This works in conjunction with the [Calling SDK](#), which is used to build your phone/calling UI. The endpoints here allow your service to appear as an option to HubSpot users when they access the *Call* action on a contact record. Once accessed, your custom phone/calling UI will be displayed in an iframe at the specified URL with the specified dimensions on that record.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
* Settings update request
*/
var SettingsPatchRequest = (function () {
    function SettingsPatchRequest() {
    }
    SettingsPatchRequest.readonly = discriminator;
    return SettingsPatchRequest;
})();
exports.SettingsPatchRequest = SettingsPatchRequest;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": ""
    },
    {
        "name": "height",
        "baseName": "height",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "width",
        "baseName": "width",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "isReady",
        "baseName": "isReady",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "supportsCustomObjects",
        "baseName": "supportsCustomObjects",
        "type": "boolean",
        "format": ""
    }];
getAttributeTypeMap();
{
    return SettingsPatchRequest.attributeTypeMap;
}
constructor();
{
}
