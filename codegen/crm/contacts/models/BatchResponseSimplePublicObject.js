/**
 * Contacts
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var BatchResponseSimplePublicObject = (function () {
    function BatchResponseSimplePublicObject() {
    }
    BatchResponseSimplePublicObject.readonly = discriminator;
    return BatchResponseSimplePublicObject;
})();
exports.BatchResponseSimplePublicObject = BatchResponseSimplePublicObject;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "status",
        "baseName": "status",
        "type": "BatchResponseSimplePublicObjectStatusEnum",
        "format": ""
    },
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<SimplePublicObject>",
        "format": ""
    },
    {
        "name": "requestedAt",
        "baseName": "requestedAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "startedAt",
        "baseName": "startedAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "completedAt",
        "baseName": "completedAt",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "links",
        "baseName": "links",
        "type": "{ [key: string]: string; }",
        "format": ""
    }];
getAttributeTypeMap();
{
    return BatchResponseSimplePublicObject.attributeTypeMap;
}
constructor();
{
}
"PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE";
