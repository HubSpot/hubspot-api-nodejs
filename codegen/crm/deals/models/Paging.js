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
var Paging = (function () {
    function Paging() {
    }
    Paging.readonly = discriminator;
    return Paging;
})();
exports.Paging = Paging;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "next",
        "baseName": "next",
        "type": "NextPage",
        "format": ""
    },
    {
        "name": "prev",
        "baseName": "prev",
        "type": "PreviousPage",
        "format": ""
    }];
getAttributeTypeMap();
{
    return Paging.attributeTypeMap;
}
constructor();
{
}
