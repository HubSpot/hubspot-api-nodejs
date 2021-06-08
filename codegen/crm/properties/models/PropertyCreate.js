/**
 * Properties
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var PropertyCreate = (function () {
    function PropertyCreate() {
    }
    PropertyCreate.readonly = discriminator;
    return PropertyCreate;
})();
exports.PropertyCreate = PropertyCreate;
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
        "name": "label",
        "baseName": "label",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "PropertyCreateTypeEnum",
        "format": ""
    },
    {
        "name": "fieldType",
        "baseName": "fieldType",
        "type": "PropertyCreateFieldTypeEnum",
        "format": ""
    },
    {
        "name": "groupName",
        "baseName": "groupName",
        "type": "string",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "Array<OptionInput>",
        "format": ""
    },
    {
        "name": "displayOrder",
        "baseName": "displayOrder",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "hasUniqueValue",
        "baseName": "hasUniqueValue",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "hidden",
        "baseName": "hidden",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "formField",
        "baseName": "formField",
        "type": "boolean",
        "format": ""
    }];
getAttributeTypeMap();
{
    return PropertyCreate.attributeTypeMap;
}
constructor();
{
}
"string" | "number" | "date" | "datetime" | "enumeration";
"textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox" | "booleancheckbox";
