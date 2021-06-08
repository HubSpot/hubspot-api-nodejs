/**
 * CRM cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var IntegratorObjectResult = (function () {
    function IntegratorObjectResult() {
    }
    IntegratorObjectResult.readonly = discriminator;
    return IntegratorObjectResult;
})();
exports.IntegratorObjectResult = IntegratorObjectResult;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string",
        "format": ""
    },
    {
        "name": "linkUrl",
        "baseName": "linkUrl",
        "type": "string",
        "format": ""
    },
    {
        "name": "tokens",
        "baseName": "tokens",
        "type": "Array<ObjectToken>",
        "format": ""
    },
    {
        "name": "actions",
        "baseName": "actions",
        "type": "Array<ActionHookActionBody | IFrameActionBody>",
        "format": ""
    }];
getAttributeTypeMap();
{
    return IntegratorObjectResult.attributeTypeMap;
}
constructor();
{
}
