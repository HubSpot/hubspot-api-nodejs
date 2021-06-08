/**
 * Transactional Email
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
* A JSON object containing anything you want to override.
*/
var PublicSingleSendEmail = (function () {
    function PublicSingleSendEmail() {
    }
    PublicSingleSendEmail.readonly = discriminator;
    return PublicSingleSendEmail;
})();
exports.PublicSingleSendEmail = PublicSingleSendEmail;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "from",
        "baseName": "from",
        "type": "string",
        "format": ""
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "string",
        "format": ""
    },
    {
        "name": "sendId",
        "baseName": "sendId",
        "type": "string",
        "format": ""
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "cc",
        "baseName": "cc",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "bcc",
        "baseName": "bcc",
        "type": "Array<string>",
        "format": ""
    }];
getAttributeTypeMap();
{
    return PublicSingleSendEmail.attributeTypeMap;
}
constructor();
{
}
