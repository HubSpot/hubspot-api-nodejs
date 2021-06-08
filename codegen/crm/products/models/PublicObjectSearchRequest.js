/**
 * Products
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var PublicObjectSearchRequest = (function () {
    function PublicObjectSearchRequest() {
    }
    PublicObjectSearchRequest.readonly = discriminator;
    return PublicObjectSearchRequest;
})();
exports.PublicObjectSearchRequest = PublicObjectSearchRequest;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "filterGroups",
        "baseName": "filterGroups",
        "type": "Array<FilterGroup>",
        "format": ""
    },
    {
        "name": "sorts",
        "baseName": "sorts",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "query",
        "baseName": "query",
        "type": "string",
        "format": ""
    },
    {
        "name": "properties",
        "baseName": "properties",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "limit",
        "baseName": "limit",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "after",
        "baseName": "after",
        "type": "number",
        "format": "int32"
    }];
getAttributeTypeMap();
{
    return PublicObjectSearchRequest.attributeTypeMap;
}
constructor();
{
}
