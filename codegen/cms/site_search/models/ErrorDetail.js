/**
 * CMS Site Search
 * Use these endpoints for searching content on your HubSpot hosted CMS website(s).
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var ErrorDetail = (function () {
    function ErrorDetail() {
    }
    ErrorDetail.readonly = discriminator;
    return ErrorDetail;
})();
exports.ErrorDetail = ErrorDetail;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "message",
        "baseName": "message",
        "type": "string",
        "format": ""
    },
    {
        "name": "_in",
        "baseName": "in",
        "type": "string",
        "format": ""
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "subCategory",
        "baseName": "subCategory",
        "type": "string",
        "format": ""
    },
    {
        "name": "context",
        "baseName": "context",
        "type": "{ [key: string]: Array<string>; }",
        "format": ""
    }];
getAttributeTypeMap();
{
    return ErrorDetail.attributeTypeMap;
}
constructor();
{
}
