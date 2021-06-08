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
var Paging = (function () {
    function Paging() {
    }
    Paging.readonly = discriminator;
    return Paging;
})();
exports.Paging = Paging;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "next",
        "baseName": "next",
        "type": "NextPage",
        "format": ""
    }];
getAttributeTypeMap();
{
    return Paging.attributeTypeMap;
}
constructor();
{
}
