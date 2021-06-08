/**
 * CRM cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var CardObjectTypeBody = (function () {
    function CardObjectTypeBody() {
    }
    CardObjectTypeBody.readonly = discriminator;
    return CardObjectTypeBody;
})();
exports.CardObjectTypeBody = CardObjectTypeBody;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "name",
        "baseName": "name",
        "type": "CardObjectTypeBodyNameEnum",
        "format": ""
    },
    {
        "name": "propertiesToSend",
        "baseName": "propertiesToSend",
        "type": "Array<string>",
        "format": ""
    }];
getAttributeTypeMap();
{
    return CardObjectTypeBody.attributeTypeMap;
}
constructor();
{
}
"contacts" | "deals" | "companies" | "tickets";
