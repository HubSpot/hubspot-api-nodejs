/**
 * CRM Owners
 * HubSpot uses **owners** to assign CRM objects to specific people in your organization. The endpoints described here are used to get a list of the owners that are available for an account. To assign an owner to an object, set the hubspot_owner_id property using the appropriate CRM object update or create a request.  If teams are available for your HubSpot tier, these endpoints will also indicate which team an owner belongs to. Team membership can be one of PRIMARY (default), SECONDARY, or CHILD.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var NextPage = (function () {
    function NextPage() {
    }
    NextPage.readonly = discriminator;
    return NextPage;
})();
exports.NextPage = NextPage;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "after",
        "baseName": "after",
        "type": "string",
        "format": ""
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "string",
        "format": ""
    }];
getAttributeTypeMap();
{
    return NextPage.attributeTypeMap;
}
constructor();
{
}
