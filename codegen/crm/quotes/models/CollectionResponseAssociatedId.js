/**
 * Quotes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var CollectionResponseAssociatedId = (function () {
    function CollectionResponseAssociatedId() {
    }
    CollectionResponseAssociatedId.readonly = discriminator;
    return CollectionResponseAssociatedId;
})();
exports.CollectionResponseAssociatedId = CollectionResponseAssociatedId;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<AssociatedId>",
        "format": ""
    },
    {
        "name": "paging",
        "baseName": "paging",
        "type": "Paging",
        "format": ""
    }];
getAttributeTypeMap();
{
    return CollectionResponseAssociatedId.attributeTypeMap;
}
constructor();
{
}
