/**
 * CRM Imports
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var ImportRowCore = (function () {
    function ImportRowCore() {
    }
    ImportRowCore.readonly = discriminator;
    return ImportRowCore;
})();
exports.ImportRowCore = ImportRowCore;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "fileId",
        "baseName": "fileId",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "pageName",
        "baseName": "pageName",
        "type": "string",
        "format": ""
    },
    {
        "name": "lineNumber",
        "baseName": "lineNumber",
        "type": "number",
        "format": "int32"
    }];
getAttributeTypeMap();
{
    return ImportRowCore.attributeTypeMap;
}
constructor();
{
}
