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
var SimplePublicObject = (function () {
    function SimplePublicObject() {
    }
    SimplePublicObject.readonly = discriminator;
    return SimplePublicObject;
})();
exports.SimplePublicObject = SimplePublicObject;
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
        "name": "properties",
        "baseName": "properties",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "archived",
        "baseName": "archived",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "archivedAt",
        "baseName": "archivedAt",
        "type": "Date",
        "format": "date-time"
    }];
getAttributeTypeMap();
{
    return SimplePublicObject.attributeTypeMap;
}
constructor();
{
}
