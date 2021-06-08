/**
 * HubDB endpoints
 * HubDB is a relational data store that presents data as rows, columns, and cells in a table, much like a spreadsheet. HubDB tables can be added or modified [in the HubSpot CMS](https://knowledge.hubspot.com/cos-general/how-to-edit-hubdb-tables), but you can also use the API endpoints documented here. For more information on HubDB tables and using their data on a HubSpot site, see the [CMS developers site](https://designers.hubspot.com/docs/tools/hubdb). You can also see the [documentation for dynamic pages](https://designers.hubspot.com/docs/tutorials/how-to-build-dynamic-pages-with-hubdb) for more details about the `useForPages` field.  HubDB tables support `draft` and `live` versions and you can publish and unpublish the live version. This allows you to update data in the table, either for testing or to allow for a manual approval process, without affecting any live pages using the existing data. Draft data can be reviewed, pushed to live version, and published by a user working in HubSpot or published via the API. Draft data can also be discarded, allowing users to go back to the live version of the data without disrupting it. If a table is set to be `allowed for public access`, you can access the published version of the table and rows without any authentication by specifying the portal id via the query parameter `portalId`.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var ModelError = (function () {
    function ModelError() {
    }
    ModelError.readonly = discriminator;
    return ModelError;
})();
exports.ModelError = ModelError;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "message",
        "baseName": "message",
        "type": "string",
        "format": ""
    },
    {
        "name": "correlationId",
        "baseName": "correlationId",
        "type": "string",
        "format": "uuid"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "string",
        "format": ""
    },
    {
        "name": "subCategory",
        "baseName": "subCategory",
        "type": "string",
        "format": ""
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<ErrorDetail>",
        "format": ""
    },
    {
        "name": "context",
        "baseName": "context",
        "type": "{ [key: string]: Array<string>; }",
        "format": ""
    },
    {
        "name": "links",
        "baseName": "links",
        "type": "{ [key: string]: string; }",
        "format": ""
    }];
getAttributeTypeMap();
{
    return ModelError.attributeTypeMap;
}
constructor();
{
}
