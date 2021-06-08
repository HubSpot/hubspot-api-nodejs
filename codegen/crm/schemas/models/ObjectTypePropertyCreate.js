/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object's type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
* Defines a property to create.
*/
var ObjectTypePropertyCreate = (function () {
    function ObjectTypePropertyCreate() {
    }
    ObjectTypePropertyCreate.readonly = discriminator;
    return ObjectTypePropertyCreate;
})();
exports.ObjectTypePropertyCreate = ObjectTypePropertyCreate;
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
        "name": "type",
        "baseName": "type",
        "type": "ObjectTypePropertyCreateTypeEnum",
        "format": ""
    },
    {
        "name": "fieldType",
        "baseName": "fieldType",
        "type": "string",
        "format": ""
    }];
getAttributeTypeMap();
{
    return ObjectTypePropertyCreate.attributeTypeMap;
}
constructor();
{
}
"string" | "number" | "date" | "datetime" | "enumeration" | "bool";
