/**
 * Deals
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var BatchReadInputSimplePublicObjectId = (function () {
    function BatchReadInputSimplePublicObjectId() {
    }
    BatchReadInputSimplePublicObjectId.readonly = discriminator;
    return BatchReadInputSimplePublicObjectId;
})();
exports.BatchReadInputSimplePublicObjectId = BatchReadInputSimplePublicObjectId;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "properties",
        "baseName": "properties",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "idProperty",
        "baseName": "idProperty",
        "type": "string",
        "format": ""
    },
    {
        "name": "inputs",
        "baseName": "inputs",
        "type": "Array<SimplePublicObjectId>",
        "format": ""
    }];
getAttributeTypeMap();
{
    return BatchReadInputSimplePublicObjectId.attributeTypeMap;
}
constructor();
{
}
