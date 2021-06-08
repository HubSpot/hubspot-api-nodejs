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
var BatchReadInputPropertyName = (function () {
    function BatchReadInputPropertyName() {
    }
    BatchReadInputPropertyName.readonly = discriminator;
    return BatchReadInputPropertyName;
})();
exports.BatchReadInputPropertyName = BatchReadInputPropertyName;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "inputs",
        "baseName": "inputs",
        "type": "Array<PropertyName>",
        "format": ""
    },
    {
        "name": "archived",
        "baseName": "archived",
        "type": "boolean",
        "format": ""
    }];
getAttributeTypeMap();
{
    return BatchReadInputPropertyName.attributeTypeMap;
}
constructor();
{
}
