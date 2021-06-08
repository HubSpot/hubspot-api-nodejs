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
var CollectionResponseWithTotalHubDbTableRowV3ForwardPaging_1 = require('../models/CollectionResponseWithTotalHubDbTableRowV3ForwardPaging');
var HubDbTableRowV3_1 = require('../models/HubDbTableRowV3');
var HubDbTableRowV3Input_1 = require('../models/HubDbTableRowV3Input');
/**
 * no description
 */
var RowsApiRequestFactory = (function (_super) {
    __extends(RowsApiRequestFactory, _super);
    function RowsApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Clones a single row in the `draft` version of the table.
         * Clone a row
         * @param rowId The ID of the row
         * @param tableIdOrName The ID or name of the table
         */
        this.async = cloneDraftTableRow(rowId, string, tableIdOrName, string, _options ?  : Configuration);
        /**
         * Add a new row to a HubDB table. New rows will be added to the `draft` version of the table. Use `push-live` endpoint to push these changes to live version and publish them.
         * Add a new row to a table
         * @param tableIdOrName The ID or name of the target table.
         * @param hubDbTableRowV3Input The row definition JSON, formatted as described above.
         */
        this.async = createTableRow(tableIdOrName, string, hubDbTableRowV3Input, HubDbTableRowV3Input_1.HubDbTableRowV3Input, _options ?  : Configuration);
        /**
         * Get a single row by ID from a table's `draft` version.
         * Get a row from the draft table
         * @param rowId The ID of the row
         * @param tableIdOrName The ID or name of the table
         */
        this.async = getDraftTableRowById(rowId, string, tableIdOrName, string, _options ?  : Configuration);
        /**
         * Get a single row by ID from a table's `live` version. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
         * Get a table row
         * @param rowId The ID of the row
         * @param tableIdOrName The ID or name of the table
         */
        this.async = getTableRow(rowId, string, tableIdOrName, string, _options ?  : Configuration);
        /**
         * Returns a set of rows in the `live` version of the specified table. Row results can be filtered and sorted. Refer to the overview section for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
         * Get rows for a table
         * @param tableIdOrName The ID or name of the table to query.
         * @param properties Specify the column names to get results containing only the required columns instead of all column details.
         * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
         * @param limit The maximum number of results to return. Default is &#x60;1000&#x60;.
         * @param sort Specifies the column names to sort the results by. See the above description for more details.
         */
        this.async = getTableRows(tableIdOrName, string, properties ?  : Array < string > , after ?  : string, limit ?  : number, sort ?  : Array < string > , _options ?  : Configuration);
        /**
         * Permanently deletes a row from a table's `draft` version.
         * Permanently deletes a row
         * @param rowId The ID of the row
         * @param tableIdOrName The ID or name of the table
         */
        this.async = purgeDraftTableRow(rowId, string, tableIdOrName, string, _options ?  : Configuration);
        /**
         * Returns rows in the `draft` version of the specified table. Row results can be filtered and sorted using the options mentioned in the overview section.
         * Get rows from draft table
         * @param tableIdOrName The ID or name of the table to query.
         * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
         * @param properties Specify the column names to get results containing only the required columns instead of all column details. If you want to include multiple columns in the result, use this query param as many times.
         * @param limit The maximum number of results to return. Default is &#x60;1000&#x60;.
         * @param sort Specifies the column names to sort the results by.
         */
        this.async = readDraftTableRows(tableIdOrName, string, after ?  : string, properties ?  : Array < string > , limit ?  : number, sort ?  : Array < string > , _options ?  : Configuration);
        /**
         * Replace a single row in the table's `draft` version. All the column values must be specified. If a column has a value in the target table and this request doesn't define that value, it will be deleted. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
         * Replaces an existing row
         * @param rowId The ID of the row
         * @param tableIdOrName The ID or name of the table
         * @param hubDbTableRowV3Input The JSON object of the row
         */
        this.async = replaceDraftTableRow(rowId, string, tableIdOrName, string, hubDbTableRowV3Input, HubDbTableRowV3Input_1.HubDbTableRowV3Input, _options ?  : Configuration);
        /**
         * Sparse updates a single row in the table's `draft` version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
         * Updates an existing row
         * @param rowId The ID of the row
         * @param tableIdOrName The ID or name of the table
         * @param hubDbTableRowV3Input The JSON object of the row with necessary fields that needs to be updated.
         */
        this.async = updateDraftTableRow(rowId, string, tableIdOrName, string, hubDbTableRowV3Input, HubDbTableRowV3Input_1.HubDbTableRowV3Input, _options ?  : Configuration);
    }
    RowsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter rowId was null or undefined when calling cloneDraftTableRow.');
        }
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling cloneDraftTableRow.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft/clone'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
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
    RowsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling createTableRow.');
        }
        // verify required parameter 'hubDbTableRowV3Input' is not null or undefined
        if (hubDbTableRowV3Input === null || hubDbTableRowV3Input === undefined) {
            throw new baseapi_1.RequiredError('Required parameter hubDbTableRowV3Input was null or undefined when calling createTableRow.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows'
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(hubDbTableRowV3Input, "HubDbTableRowV3Input", ""), contentType);
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
    RowsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter rowId was null or undefined when calling getDraftTableRowById.');
        }
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling getDraftTableRowById.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
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
    RowsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter rowId was null or undefined when calling getTableRow.');
        }
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling getTableRow.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
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
    RowsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling getTableRows.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer_1.ObjectSerializer.serialize(properties, "Array<string>", ""));
        }
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "Array<string>", ""));
        }
        // Header Params
        // Form Params
        // Body Params
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
    RowsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter rowId was null or undefined when calling purgeDraftTableRow.');
        }
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling purgeDraftTableRow.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
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
    RowsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling readDraftTableRows.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "string", ""));
        }
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer_1.ObjectSerializer.serialize(properties, "Array<string>", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "Array<string>", ""));
        }
        // Header Params
        // Form Params
        // Body Params
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
    RowsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter rowId was null or undefined when calling replaceDraftTableRow.');
        }
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling replaceDraftTableRow.');
        }
        // verify required parameter 'hubDbTableRowV3Input' is not null or undefined
        if (hubDbTableRowV3Input === null || hubDbTableRowV3Input === undefined) {
            throw new baseapi_1.RequiredError('Required parameter hubDbTableRowV3Input was null or undefined when calling replaceDraftTableRow.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(hubDbTableRowV3Input, "HubDbTableRowV3Input", ""), contentType);
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
    RowsApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter rowId was null or undefined when calling updateDraftTableRow.');
        }
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling updateDraftTableRow.');
        }
        // verify required parameter 'hubDbTableRowV3Input' is not null or undefined
        if (hubDbTableRowV3Input === null || hubDbTableRowV3Input === undefined) {
            throw new baseapi_1.RequiredError('Required parameter hubDbTableRowV3Input was null or undefined when calling updateDraftTableRow.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(hubDbTableRowV3Input, "HubDbTableRowV3Input", ""), contentType);
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
    return RowsApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.RowsApiRequestFactory = RowsApiRequestFactory;
var RowsApiResponseProcessor = (function () {
    function RowsApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to cloneDraftTableRow
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = cloneDraftTableRow(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to createTableRow
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = createTableRow(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getDraftTableRowById
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getDraftTableRowById(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getTableRow
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getTableRow(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getTableRows
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getTableRows(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to purgeDraftTableRow
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = purgeDraftTableRow(response, http_1.ResponseContext);
    }
    RowsApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    RowsApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("201", response.httpStatusCode)) {
            var body_4 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
            return body_4;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_5 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_5);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_6 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
            return body_6;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    RowsApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_7 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
            return body_7;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_8 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_8);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_9 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
            return body_9;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    RowsApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_10 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
            return body_10;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_11 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_11);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_12 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
            return body_12;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    RowsApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_13 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging", ""), as = CollectionResponseWithTotalHubDbTableRowV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableRowV3ForwardPaging;
            return body_13;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_14 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_14);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_15 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging", ""), as = CollectionResponseWithTotalHubDbTableRowV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableRowV3ForwardPaging;
            return body_15;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    RowsApiResponseProcessor.prototype.Promise = ;
    return RowsApiResponseProcessor;
})();
exports.RowsApiResponseProcessor = RowsApiResponseProcessor;
void  > {
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
readDraftTableRows(response, http_1.ResponseContext);
Promise < CollectionResponseWithTotalHubDbTableRowV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableRowV3ForwardPaging > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging", ""), as = CollectionResponseWithTotalHubDbTableRowV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableRowV3ForwardPaging;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging", ""), as = CollectionResponseWithTotalHubDbTableRowV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableRowV3ForwardPaging;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
replaceDraftTableRow(response, http_1.ResponseContext);
Promise < HubDbTableRowV3_1.HubDbTableRowV3 > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
updateDraftTableRow(response, http_1.ResponseContext);
Promise < HubDbTableRowV3_1.HubDbTableRowV3 > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableRowV3", ""), as = HubDbTableRowV3_1.HubDbTableRowV3;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
