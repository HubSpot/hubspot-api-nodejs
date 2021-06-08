var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TODO: better import syntax?
var baseapi_1 = require('./baseapi');
var http_1 = require('../http/http');
var ObjectSerializer_1 = require('../models/ObjectSerializer');
var exception_1 = require('./exception');
var util_1 = require('../util');
var BatchInputHubDbTableRowV3_1 = require('../models/BatchInputHubDbTableRowV3');
var BatchInputJsonNode_1 = require('../models/BatchInputJsonNode');
var BatchInputString_1 = require('../models/BatchInputString');
var BatchResponseHubDbTableRowV3WithErrors_1 = require('../models/BatchResponseHubDbTableRowV3WithErrors');
/**
 * no description
 */
var RowsBatchApiRequestFactory = (function (_super) {
    __extends(RowsBatchApiRequestFactory, _super);
    function RowsBatchApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Clones rows in the `draft` version of the specified table, given a set of row ids.
         * Clone rows in batch
         * @param tableIdOrName The ID or name of the table
         * @param batchInputString The JSON array of row ids
         */
        this.async = batchCloneDraftTableRows(tableIdOrName, string, batchInputString, BatchInputString_1.BatchInputString, _options ?  : Configuration);
        /**
         * Creates rows in the `draft` version of the specified table, given an array of row objects. See the overview section for more details with an example.
         * Create rows in batch
         * @param tableIdOrName The ID or name of the table
         * @param batchInputHubDbTableRowV3 JSON array of row objects
         */
        this.async = batchCreateDraftTableRows(tableIdOrName, string, batchInputHubDbTableRowV3, BatchInputHubDbTableRowV3_1.BatchInputHubDbTableRowV3, _options ?  : Configuration);
        /**
         * Permanently deletes rows from the `draft` version of the table, given a set of row ids.
         * Permanently deletes rows
         * @param tableIdOrName The ID or name of the table
         * @param batchInputString JSON array of row ids.
         */
        this.async = batchPurgeDraftTableRows(tableIdOrName, string, batchInputString, BatchInputString_1.BatchInputString, _options ?  : Configuration);
        /**
         * Returns rows in the `draft` version of the specified table, given a set of row ids.
         * Get a set of rows from draft table
         * @param tableIdOrName The ID or name of the table
         * @param batchInputString JSON array of row ids.
         */
        this.async = batchReadDraftTableRows(tableIdOrName, string, batchInputString, BatchInputString_1.BatchInputString, _options ?  : Configuration);
        /**
         * Returns rows in the `live` version of the specified table, given a set of row ids. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
         * Get a set of rows
         * @param tableIdOrName The ID or name of the table to query.
         * @param batchInputString The JSON array of row ids
         */
        this.async = batchReadTableRows(tableIdOrName, string, batchInputString, BatchInputString_1.BatchInputString, _options ?  : Configuration);
        /**
         * Replaces multiple rows as a batch in the `draft` version of the table. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
         * Replace rows in batch in draft table
         * @param tableIdOrName The ID or name of the table
         * @param batchInputHubDbTableRowV3 JSON array of row objects.
         */
        this.async = batchReplaceDraftTableRows(tableIdOrName, string, batchInputHubDbTableRowV3, BatchInputHubDbTableRowV3_1.BatchInputHubDbTableRowV3, _options ?  : Configuration);
        /**
         * Updates multiple rows as a batch in the `draft` version of the table. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
         * Update rows in batch in draft table
         * @param tableIdOrName The ID or name of the table
         * @param batchInputJsonNode JSON array of row objects.
         */
        this.async = batchUpdateDraftTableRows(tableIdOrName, string, batchInputJsonNode, BatchInputJsonNode_1.BatchInputJsonNode, _options ?  : Configuration);
    }
    RowsBatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling batchCloneDraftTableRows.');
        }
        // verify required parameter 'batchInputString' is not null or undefined
        if (batchInputString === null || batchInputString === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputString was null or undefined when calling batchCloneDraftTableRows.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/clone'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputString, "BatchInputString", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    RowsBatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling batchCreateDraftTableRows.');
        }
        // verify required parameter 'batchInputHubDbTableRowV3' is not null or undefined
        if (batchInputHubDbTableRowV3 === null || batchInputHubDbTableRowV3 === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputHubDbTableRowV3 was null or undefined when calling batchCreateDraftTableRows.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/create'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputHubDbTableRowV3, "BatchInputHubDbTableRowV3", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    RowsBatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling batchPurgeDraftTableRows.');
        }
        // verify required parameter 'batchInputString' is not null or undefined
        if (batchInputString === null || batchInputString === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputString was null or undefined when calling batchPurgeDraftTableRows.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/purge'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputString, "BatchInputString", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    RowsBatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling batchReadDraftTableRows.');
        }
        // verify required parameter 'batchInputString' is not null or undefined
        if (batchInputString === null || batchInputString === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputString was null or undefined when calling batchReadDraftTableRows.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/read'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputString, "BatchInputString", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    RowsBatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling batchReadTableRows.');
        }
        // verify required parameter 'batchInputString' is not null or undefined
        if (batchInputString === null || batchInputString === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputString was null or undefined when calling batchReadTableRows.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/batch/read'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputString, "BatchInputString", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    RowsBatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling batchReplaceDraftTableRows.');
        }
        // verify required parameter 'batchInputHubDbTableRowV3' is not null or undefined
        if (batchInputHubDbTableRowV3 === null || batchInputHubDbTableRowV3 === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputHubDbTableRowV3 was null or undefined when calling batchReplaceDraftTableRows.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/replace'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputHubDbTableRowV3, "BatchInputHubDbTableRowV3", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    RowsBatchApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling batchUpdateDraftTableRows.');
        }
        // verify required parameter 'batchInputJsonNode' is not null or undefined
        if (batchInputJsonNode === null || batchInputJsonNode === undefined) {
            throw new baseapi_1.RequiredError('Required parameter batchInputJsonNode was null or undefined when calling batchUpdateDraftTableRows.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/update'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(batchInputJsonNode, "BatchInputJsonNode", ""), contentType);
        requestContext.setBody(serializedBody);
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    return RowsBatchApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.RowsBatchApiRequestFactory = RowsBatchApiRequestFactory;
var RowsBatchApiResponseProcessor = (function () {
    function RowsBatchApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to batchCloneDraftTableRows
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = batchCloneDraftTableRows(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to batchCreateDraftTableRows
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = batchCreateDraftTableRows(response, http_1.ResponseContext);
    }
    RowsBatchApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "any", ""), as = any;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "any", ""), as = any;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    RowsBatchApiResponseProcessor.prototype.Promise = ;
    return RowsBatchApiResponseProcessor;
})();
exports.RowsBatchApiResponseProcessor = RowsBatchApiResponseProcessor;
 | any > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("201", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "any", ""), as = any;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("207", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseHubDbTableRowV3WithErrors", ""), as = BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseHubDbTableRowV3WithErrors | any", ""), as = BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors | any;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
batchPurgeDraftTableRows(response, http_1.ResponseContext);
Promise < void  > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("204", response.httpStatusCode); }
        return;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "void", ""), as = void ;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
batchReadDraftTableRows(response, http_1.ResponseContext);
Promise < BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors | any > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "any", ""), as = any;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("207", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseHubDbTableRowV3WithErrors", ""), as = BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseHubDbTableRowV3WithErrors | any", ""), as = BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors | any;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
batchReadTableRows(response, http_1.ResponseContext);
Promise < BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors | any > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "any", ""), as = any;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("207", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseHubDbTableRowV3WithErrors", ""), as = BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseHubDbTableRowV3WithErrors | any", ""), as = BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors | any;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
batchReplaceDraftTableRows(response, http_1.ResponseContext);
Promise < BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors | any > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "any", ""), as = any;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("207", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseHubDbTableRowV3WithErrors", ""), as = BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseHubDbTableRowV3WithErrors | any", ""), as = BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors | any;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
batchUpdateDraftTableRows(response, http_1.ResponseContext);
Promise < BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors | any > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "any", ""), as = any;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("207", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseHubDbTableRowV3WithErrors", ""), as = BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "BatchResponseHubDbTableRowV3WithErrors | any", ""), as = BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors | any;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
