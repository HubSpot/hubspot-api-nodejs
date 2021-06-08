/**
 * CRM Pipelines
 * Pipelines represent distinct stages in a workflow, like closing a deal or servicing a support ticket. These endpoints provide access to read and modify pipelines in HubSpot. Pipelines support `deals` and `tickets` object types.  ## Pipeline ID validation  When calling endpoints that take pipelineId as a parameter, that ID must correspond to an existing, un-archived pipeline. Otherwise the request will fail with a `404 Not Found` response.
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
