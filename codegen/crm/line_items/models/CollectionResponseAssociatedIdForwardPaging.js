/**
 * Line Items
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var CollectionResponseAssociatedIdForwardPaging = (function () {
    function CollectionResponseAssociatedIdForwardPaging() {
    }
    CollectionResponseAssociatedIdForwardPaging.readonly = discriminator;
    return CollectionResponseAssociatedIdForwardPaging;
})();
exports.CollectionResponseAssociatedIdForwardPaging = CollectionResponseAssociatedIdForwardPaging;
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
        "type": "ForwardPaging",
        "format": ""
    }];
getAttributeTypeMap();
{
    return CollectionResponseAssociatedIdForwardPaging.attributeTypeMap;
}
constructor();
{
}
