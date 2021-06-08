/**
 * Timeline events
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM objects like contacts, companies, tickets, or deals. You'll find multiple use cases for this API in the sections below.
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
