/**
 * Custom Workflow Actions
 * Create custom workflow actions
 *
 * OpenAPI spec version: v4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var BatchInputCallbackCompletionBatchRequest = (function () {
    function BatchInputCallbackCompletionBatchRequest() {
    }
    BatchInputCallbackCompletionBatchRequest.readonly = discriminator;
    return BatchInputCallbackCompletionBatchRequest;
})();
exports.BatchInputCallbackCompletionBatchRequest = BatchInputCallbackCompletionBatchRequest;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "inputs",
        "baseName": "inputs",
        "type": "Array<CallbackCompletionBatchRequest>",
        "format": ""
    }];
getAttributeTypeMap();
{
    return BatchInputCallbackCompletionBatchRequest.attributeTypeMap;
}
constructor();
{
}
