var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TODO: better import syntax?
var baseapi_1 = require('./baseapi');
var http_1 = require('../http/http');
var FormData = require("form-data");
var ObjectSerializer_1 = require('../models/ObjectSerializer');
var exception_1 = require('./exception');
var CollectionResponseWithTotalHubDbTableV3ForwardPaging_1 = require('../models/CollectionResponseWithTotalHubDbTableV3ForwardPaging');
var HubDbTableCloneRequest_1 = require('../models/HubDbTableCloneRequest');
var HubDbTableV3_1 = require('../models/HubDbTableV3');
var HubDbTableV3Input_1 = require('../models/HubDbTableV3Input');
var HubDbTableV3LiveInput_1 = require('../models/HubDbTableV3LiveInput');
var ImportResult_1 = require('../models/ImportResult');
/**
 * no description
 */
var TablesApiRequestFactory = (function (_super) {
    __extends(TablesApiRequestFactory, _super);
    function TablesApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * Archive (soft delete) an existing HubDB table. This archives both the live and draft versions.
         * Archive a table
         * @param tableIdOrName The ID or name of the table to archive.
         */
        this.async = archiveTable(tableIdOrName, string, _options ?  : Configuration);
        /**
         * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can be sent as JSON in the `body` parameter. This will create the cloned table as a `draft`.
         * Clone a table
         * @param tableIdOrName The ID or name of the table to clone.
         * @param hubDbTableCloneRequest JSON object with the properties newName and newLabel. You can set copyRows to false to clone the table with copying rows and default is true.
         */
        this.async = cloneDraftTable(tableIdOrName, string, hubDbTableCloneRequest, HubDbTableCloneRequest_1.HubDbTableCloneRequest, _options ?  : Configuration);
        /**
         * Creates a new draft HubDB table given a JSON schema. The table name and label should be unique for each account.
         * Create a new table
         * @param hubDbTableV3Input The JSON schema for the table being created.
         */
        this.async = createTable(hubDbTableV3Input, HubDbTableV3Input_1.HubDbTableV3Input, _options ?  : Configuration);
        /**
         * Exports the `draft` version of a table to CSV / EXCEL format.
         * Export a draft table
         * @param tableIdOrName The ID or name of the table to export.
         * @param format The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
         */
        this.async = exportDraftTable(tableIdOrName, string, format ?  : string, _options ?  : Configuration);
        /**
         * Exports the `live` version of a table to CSV / EXCEL format.
         * Export a published version of a table
         * @param tableIdOrName The ID or name of the table to export.
         * @param format The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
         */
        this.async = exportTable(tableIdOrName, string, format ?  : string, _options ?  : Configuration);
        /**
         * Returns the details for each draft table defined in the specified account, including column definitions.
         * Return all draft tables
         * @param updatedAfter Only return tables last updated after the specified time.
         * @param updatedBefore Only return tables last updated before the specified time.
         * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
         * @param createdAt Only return tables created at exactly the specified time.
         * @param createdAfter Only return tables created after the specified time.
         * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
         * @param archived Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
         * @param createdBefore Only return tables created before the specified time.
         * @param updatedAt Only return tables last updated at exactly the specified time.
         * @param limit The maximum number of results to return. Default is 1000.
         */
        this.async = getAllDraftTables(updatedAfter ?  : Date, updatedBefore ?  : Date, sort ?  : Array < string > , createdAt ?  : Date, createdAfter ?  : Date, after ?  : string, archived ?  : boolean, createdBefore ?  : Date, updatedAt ?  : Date, limit ?  : number, _options ?  : Configuration);
        /**
         * Returns the details for the `live` version of each table defined in an account, including column definitions.
         * Get all live tables
         * @param updatedAfter Only return tables last updated after the specified time.
         * @param updatedBefore Only return tables last updated before the specified time.
         * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
         * @param createdAt Only return tables created at exactly the specified time.
         * @param createdAfter Only return tables created after the specified time.
         * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
         * @param archived Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
         * @param createdBefore Only return tables created before the specified time.
         * @param updatedAt Only return tables last updated at exactly the specified time.
         * @param limit The maximum number of results to return. Default is 1000.
         */
        this.async = getAllTables(updatedAfter ?  : Date, updatedBefore ?  : Date, sort ?  : Array < string > , createdAt ?  : Date, createdAfter ?  : Date, after ?  : string, archived ?  : boolean, createdBefore ?  : Date, updatedAt ?  : Date, limit ?  : number, _options ?  : Configuration);
        /**
         * Get the details for the `draft` version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
         * Get details for a draft table
         * @param tableIdOrName The ID or name of the table to return.
         * @param archived Set this to &#x60;true&#x60; to return an archived table. Defaults to &#x60;false&#x60;.
         * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
         */
        this.async = getDraftTableDetailsById(tableIdOrName, string, archived ?  : boolean, includeForeignIds ?  : boolean, _options ?  : Configuration);
        /**
         * Returns the details for the `live` version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
         * Get details for a live table
         * @param tableIdOrName The ID or name of the table to return.
         * @param archived Set this to &#x60;true&#x60; to return details for an archived table. Defaults to &#x60;false&#x60;.
         * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
         */
        this.async = getTableDetails(tableIdOrName, string, archived ?  : boolean, includeForeignIds ?  : boolean, _options ?  : Configuration);
        /**
         * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the `draft` version of the table. Use `/push-live` endpoint to push these changes to `live` version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the overview section to check the details and format of the JSON-formatted options for the import.
         * Import data into draft table
         * @param tableIdOrName The ID of the destination table where data will be imported.
         * @param file The source CSV file to be imported.
         * @param config Configuration for the import in JSON format as described above.
         */
        this.async = importDraftTable(tableIdOrName, string, file ?  : HttpFile, config ?  : string, _options ?  : Configuration);
        /**
         * Copies the data from draft to live version of the table and also publishes the live version. This will immediately push the data to the `live` version of the table and publishes the live version, meaning any website pages using data from the table will be updated.
         * Publish a table from draft
         * @param tableIdOrName The ID or name of the table to publish.
         * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the response.
         */
        this.async = publishDraftTable(tableIdOrName, string, includeForeignIds ?  : boolean, _options ?  : Configuration);
        /**
         * Replaces the data in the `draft` version of the table with values from the `live` version. Any unpublished changes in the `draft` will be lost after this call is made.
         * Reset a draft table
         * @param tableIdOrName The ID or name of the table to reset.
         * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the response.
         */
        this.async = resetDraftTable(tableIdOrName, string, includeForeignIds ?  : boolean, _options ?  : Configuration);
        /**
         * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table. Tables updated using the endpoint will only modify the `draft` verion of the table. Use `push-live` endpoint to push all the changes to the `live` version. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
         * Update an existing table
         * @param tableIdOrName The ID or name of the table to update.
         * @param hubDbTableV3Input The JSON schema for the table being updated.
         * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
         */
        this.async = updateDraftTable(tableIdOrName, string, hubDbTableV3Input, HubDbTableV3Input_1.HubDbTableV3Input, includeForeignIds ?  : boolean, _options ?  : Configuration);
        /**
         * Use this endpoint to perform one of the following <ul><li> Publish a live version of a table (without copying table data from draft) </li><li>Un-publish a live version of a table (Leaving the data in the live version)</li><li>Restore an archived table</li></ul>  To publish a table, send `published` property in the JSON object with the value `true`. To unpublish a table, send `published` property in the JSON object with the value `false`.  To restore an archived table, send `archived` property in the JSON object with the value `false` along with the query parameter `archived=true`. When restoring an archived table, if an active table already exists with the same `name` or `label`, you will need to change the name of the archived table when restoring it using the `name` and `label` parameters with a new name and new label. When you restore a table, the table will be restored only in the `draft` version.  Examples:  Publish live version of a table:  ```     {       \"published\": true     } ``` Unpublish live version of a table: ```     {       \"published\": false     } ``` Restore a table: (send `archived=true` in query parameters) ```     {       \"archived\": false     } ``` Restore a table with a new name: (send `archived=true` in query parameters) ```     {       \"label\": \"New Table Name\",       \"name\": \"new_table_name\",       \"archived\": false     } ```
         * Publish or unpublish a live version of a table or restore an archived table
         * @param tableIdOrName The ID or name of the table to return.
         * @param hubDbTableV3LiveInput The JSON object as described.
         * @param archived Whether to return only results that have been archived.
         * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
         */
        this.async = updateTable(tableIdOrName, string, hubDbTableV3LiveInput, HubDbTableV3LiveInput_1.HubDbTableV3LiveInput, archived ?  : boolean, includeForeignIds ?  : boolean, _options ?  : Configuration);
    }
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling archiveTable.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}'
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling cloneDraftTable.');
        }
        // verify required parameter 'hubDbTableCloneRequest' is not null or undefined
        if (hubDbTableCloneRequest === null || hubDbTableCloneRequest === undefined) {
            throw new baseapi_1.RequiredError('Required parameter hubDbTableCloneRequest was null or undefined when calling cloneDraftTable.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft/clone'
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(hubDbTableCloneRequest, "HubDbTableCloneRequest", ""), contentType);
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'hubDbTableV3Input' is not null or undefined
        if (hubDbTableV3Input === null || hubDbTableV3Input === undefined) {
            throw new baseapi_1.RequiredError('Required parameter hubDbTableV3Input was null or undefined when calling createTable.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables';
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
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(hubDbTableV3Input, "HubDbTableV3Input", ""), contentType);
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling exportDraftTable.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft/export'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (format !== undefined) {
            requestContext.setQueryParam("format", ObjectSerializer_1.ObjectSerializer.serialize(format, "string", ""));
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling exportTable.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/export'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (format !== undefined) {
            requestContext.setQueryParam("format", ObjectSerializer_1.ObjectSerializer.serialize(format, "string", ""));
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/draft';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (updatedAfter !== undefined) {
            requestContext.setQueryParam("updatedAfter", ObjectSerializer_1.ObjectSerializer.serialize(updatedAfter, "Date", "date-time"));
        }
        if (updatedBefore !== undefined) {
            requestContext.setQueryParam("updatedBefore", ObjectSerializer_1.ObjectSerializer.serialize(updatedBefore, "Date", "date-time"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "Array<string>", ""));
        }
        if (createdAt !== undefined) {
            requestContext.setQueryParam("createdAt", ObjectSerializer_1.ObjectSerializer.serialize(createdAt, "Date", "date-time"));
        }
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("createdAfter", ObjectSerializer_1.ObjectSerializer.serialize(createdAfter, "Date", "date-time"));
        }
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "string", ""));
        }
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer_1.ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("createdBefore", ObjectSerializer_1.ObjectSerializer.serialize(createdBefore, "Date", "date-time"));
        }
        if (updatedAt !== undefined) {
            requestContext.setQueryParam("updatedAt", ObjectSerializer_1.ObjectSerializer.serialize(updatedAt, "Date", "date-time"));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"));
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (updatedAfter !== undefined) {
            requestContext.setQueryParam("updatedAfter", ObjectSerializer_1.ObjectSerializer.serialize(updatedAfter, "Date", "date-time"));
        }
        if (updatedBefore !== undefined) {
            requestContext.setQueryParam("updatedBefore", ObjectSerializer_1.ObjectSerializer.serialize(updatedBefore, "Date", "date-time"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "Array<string>", ""));
        }
        if (createdAt !== undefined) {
            requestContext.setQueryParam("createdAt", ObjectSerializer_1.ObjectSerializer.serialize(createdAt, "Date", "date-time"));
        }
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("createdAfter", ObjectSerializer_1.ObjectSerializer.serialize(createdAfter, "Date", "date-time"));
        }
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer_1.ObjectSerializer.serialize(after, "string", ""));
        }
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer_1.ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("createdBefore", ObjectSerializer_1.ObjectSerializer.serialize(createdBefore, "Date", "date-time"));
        }
        if (updatedAt !== undefined) {
            requestContext.setQueryParam("updatedAt", ObjectSerializer_1.ObjectSerializer.serialize(updatedAt, "Date", "date-time"));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"));
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling getDraftTableDetailsById.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer_1.ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer_1.ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling getTableDetails.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer_1.ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer_1.ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling importDraftTable.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft/import'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        // Header Params
        // Form Params
        var localVarFormParams = new FormData();
        if (file !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('file', file.data, file.name);
        }
        if (config !== undefined) {
            // TODO: replace .append with .set
            localVarFormParams.append('config', config, as, any);
        }
        requestContext.setBody(localVarFormParams);
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling publishDraftTable.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft/push-live'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer_1.ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling resetDraftTable.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft/reset'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer_1.ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling updateDraftTable.');
        }
        // verify required parameter 'hubDbTableV3Input' is not null or undefined
        if (hubDbTableV3Input === null || hubDbTableV3Input === undefined) {
            throw new baseapi_1.RequiredError('Required parameter hubDbTableV3Input was null or undefined when calling updateDraftTable.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer_1.ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
        }
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(hubDbTableV3Input, "HubDbTableV3Input", ""), contentType);
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
    TablesApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new baseapi_1.RequiredError('Required parameter tableIdOrName was null or undefined when calling updateTable.');
        }
        // verify required parameter 'hubDbTableV3LiveInput' is not null or undefined
        if (hubDbTableV3LiveInput === null || hubDbTableV3LiveInput === undefined) {
            throw new baseapi_1.RequiredError('Required parameter hubDbTableV3LiveInput was null or undefined when calling updateTable.');
        }
        // Path Params
        var localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer_1.ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer_1.ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
        }
        // Header Params
        // Form Params
        // Body Params
        var contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        var serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(hubDbTableV3LiveInput, "HubDbTableV3LiveInput", ""), contentType);
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
    return TablesApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.TablesApiRequestFactory = TablesApiRequestFactory;
var TablesApiResponseProcessor = (function () {
    function TablesApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to archiveTable
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = archiveTable(response, http_1.ResponseContext);
    }
    TablesApiResponseProcessor.prototype.Promise = ;
    return TablesApiResponseProcessor;
})();
exports.TablesApiResponseProcessor = TablesApiResponseProcessor;
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
cloneDraftTable(response, http_1.ResponseContext);
Promise < HubDbTableV3_1.HubDbTableV3 > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
createTable(response, http_1.ResponseContext);
Promise < HubDbTableV3_1.HubDbTableV3 > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("201", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
exportDraftTable(response, http_1.ResponseContext);
Promise < HttpFile > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = await, response, getBodyAsFile = (), as = any, as = HttpFile;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", "binary"), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HttpFile", "binary"), as = HttpFile;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
exportTable(response, http_1.ResponseContext);
Promise < HttpFile > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = await, response, getBodyAsFile = (), as = any, as = HttpFile;
        return body;
    },
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("0", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", "binary"), as = Error;
        throw new exception_1.ApiException(0, body);
    },
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if: function (response, httpStatusCode) {
        if (httpStatusCode === void 0) { httpStatusCode =  >= 200 && response.httpStatusCode <= 299; }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HttpFile", "binary"), as = HttpFile;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getAllDraftTables(response, http_1.ResponseContext);
Promise < CollectionResponseWithTotalHubDbTableV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableV3ForwardPaging > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalHubDbTableV3ForwardPaging", ""), as = CollectionResponseWithTotalHubDbTableV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableV3ForwardPaging;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalHubDbTableV3ForwardPaging", ""), as = CollectionResponseWithTotalHubDbTableV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableV3ForwardPaging;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getAllTables(response, http_1.ResponseContext);
Promise < CollectionResponseWithTotalHubDbTableV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableV3ForwardPaging > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalHubDbTableV3ForwardPaging", ""), as = CollectionResponseWithTotalHubDbTableV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableV3ForwardPaging;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "CollectionResponseWithTotalHubDbTableV3ForwardPaging", ""), as = CollectionResponseWithTotalHubDbTableV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableV3ForwardPaging;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getDraftTableDetailsById(response, http_1.ResponseContext);
Promise < HubDbTableV3_1.HubDbTableV3 > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
getTableDetails(response, http_1.ResponseContext);
Promise < HubDbTableV3_1.HubDbTableV3 > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
importDraftTable(response, http_1.ResponseContext);
Promise < ImportResult_1.ImportResult > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "ImportResult", ""), as = ImportResult_1.ImportResult;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "ImportResult", ""), as = ImportResult_1.ImportResult;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
publishDraftTable(response, http_1.ResponseContext);
Promise < HubDbTableV3_1.HubDbTableV3 > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
resetDraftTable(response, http_1.ResponseContext);
Promise < HubDbTableV3_1.HubDbTableV3 > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
updateDraftTable(response, http_1.ResponseContext);
Promise < HubDbTableV3_1.HubDbTableV3 > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
async;
updateTable(response, http_1.ResponseContext);
Promise < HubDbTableV3_1.HubDbTableV3 > {
    const: contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]),
    if: function (isCodeInRange) {
        if (isCodeInRange === void 0) { isCodeInRange = ("200", response.httpStatusCode); }
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
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
        var body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "HubDbTableV3", ""), as = HubDbTableV3_1.HubDbTableV3;
        return body;
    },
    let: body = response.body || "",
    throw: new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"")
};
