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
/**
* A summary detailing which list contains the imported objects.
*/
var PublicObjectListRecord = (function () {
    function PublicObjectListRecord() {
    }
    PublicObjectListRecord.readonly = discriminator;
    return PublicObjectListRecord;
})();
exports.PublicObjectListRecord = PublicObjectListRecord;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "listId",
        "baseName": "listId",
        "type": "string",
        "format": ""
    },
    {
        "name": "objectType",
        "baseName": "objectType",
        "type": "string",
        "format": ""
    }];
getAttributeTypeMap();
{
    return PublicObjectListRecord.attributeTypeMap;
}
constructor();
{
}
