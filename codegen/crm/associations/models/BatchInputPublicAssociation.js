/**
 * Associations
 * Associations define the relationships between objects in HubSpot. These endpoints allow you to create, read, and remove associations.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var BatchInputPublicAssociation = (function () {
    function BatchInputPublicAssociation() {
    }
    BatchInputPublicAssociation.readonly = discriminator;
    return BatchInputPublicAssociation;
})();
exports.BatchInputPublicAssociation = BatchInputPublicAssociation;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "inputs",
        "baseName": "inputs",
        "type": "Array<PublicAssociation>",
        "format": ""
    }];
getAttributeTypeMap();
{
    return BatchInputPublicAssociation.attributeTypeMap;
}
constructor();
{
}
