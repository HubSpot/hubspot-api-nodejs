var ObservableAPI_1 = require('./ObservableAPI');
var PromiseRowsApi = (function () {
    function PromiseRowsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableRowsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Clones a single row in the `draft` version of the table.
     * Clone a row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    PromiseRowsApi.prototype.cloneDraftTableRow = function (rowId, tableIdOrName, _options) {
        var result = this.api.cloneDraftTableRow(rowId, tableIdOrName, _options);
        return result.toPromise();
    };
    /**
     * Add a new row to a HubDB table. New rows will be added to the `draft` version of the table. Use `push-live` endpoint to push these changes to live version and publish them.
     * Add a new row to a table
     * @param tableIdOrName The ID or name of the target table.
     * @param hubDbTableRowV3Input The row definition JSON, formatted as described above.
     */
    PromiseRowsApi.prototype.createTableRow = function (tableIdOrName, hubDbTableRowV3Input, _options) {
        var result = this.api.createTableRow(tableIdOrName, hubDbTableRowV3Input, _options);
        return result.toPromise();
    };
    /**
     * Get a single row by ID from a table's `draft` version.
     * Get a row from the draft table
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    PromiseRowsApi.prototype.getDraftTableRowById = function (rowId, tableIdOrName, _options) {
        var result = this.api.getDraftTableRowById(rowId, tableIdOrName, _options);
        return result.toPromise();
    };
    /**
     * Get a single row by ID from a table's `live` version. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    PromiseRowsApi.prototype.getTableRow = function (rowId, tableIdOrName, _options) {
        var result = this.api.getTableRow(rowId, tableIdOrName, _options);
        return result.toPromise();
    };
    /**
     * Returns a set of rows in the `live` version of the specified table. Row results can be filtered and sorted. Refer to the overview section for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param tableIdOrName The ID or name of the table to query.
     * @param properties Specify the column names to get results containing only the required columns instead of all column details.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @param sort Specifies the column names to sort the results by. See the above description for more details.
     */
    PromiseRowsApi.prototype.getTableRows = function (tableIdOrName, properties, after, limit, sort, _options) {
        var result = this.api.getTableRows(tableIdOrName, properties, after, limit, sort, _options);
        return result.toPromise();
    };
    /**
     * Permanently deletes a row from a table's `draft` version.
     * Permanently deletes a row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    PromiseRowsApi.prototype.purgeDraftTableRow = function (rowId, tableIdOrName, _options) {
        var result = this.api.purgeDraftTableRow(rowId, tableIdOrName, _options);
        return result.toPromise();
    };
    /**
     * Returns rows in the `draft` version of the specified table. Row results can be filtered and sorted using the options mentioned in the overview section.
     * Get rows from draft table
     * @param tableIdOrName The ID or name of the table to query.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param properties Specify the column names to get results containing only the required columns instead of all column details. If you want to include multiple columns in the result, use this query param as many times.
     * @param limit The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @param sort Specifies the column names to sort the results by.
     */
    PromiseRowsApi.prototype.readDraftTableRows = function (tableIdOrName, after, properties, limit, sort, _options) {
        var result = this.api.readDraftTableRows(tableIdOrName, after, properties, limit, sort, _options);
        return result.toPromise();
    };
    /**
     * Replace a single row in the table's `draft` version. All the column values must be specified. If a column has a value in the target table and this request doesn't define that value, it will be deleted. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Replaces an existing row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     * @param hubDbTableRowV3Input The JSON object of the row
     */
    PromiseRowsApi.prototype.replaceDraftTableRow = function (rowId, tableIdOrName, hubDbTableRowV3Input, _options) {
        var result = this.api.replaceDraftTableRow(rowId, tableIdOrName, hubDbTableRowV3Input, _options);
        return result.toPromise();
    };
    /**
     * Sparse updates a single row in the table's `draft` version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Updates an existing row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     * @param hubDbTableRowV3Input The JSON object of the row with necessary fields that needs to be updated.
     */
    PromiseRowsApi.prototype.updateDraftTableRow = function (rowId, tableIdOrName, hubDbTableRowV3Input, _options) {
        var result = this.api.updateDraftTableRow(rowId, tableIdOrName, hubDbTableRowV3Input, _options);
        return result.toPromise();
    };
    return PromiseRowsApi;
})();
exports.PromiseRowsApi = PromiseRowsApi;
var ObservableAPI_2 = require('./ObservableAPI');
var PromiseRowsBatchApi = (function () {
    function PromiseRowsBatchApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableRowsBatchApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Clones rows in the `draft` version of the specified table, given a set of row ids.
     * Clone rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString The JSON array of row ids
     */
    PromiseRowsBatchApi.prototype.batchCloneDraftTableRows = function (tableIdOrName, batchInputString, _options) {
        var result = this.api.batchCloneDraftTableRows(tableIdOrName, batchInputString, _options);
        return result.toPromise();
    };
    /**
     * Creates rows in the `draft` version of the specified table, given an array of row objects. See the overview section for more details with an example.
     * Create rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3 JSON array of row objects
     */
    PromiseRowsBatchApi.prototype.batchCreateDraftTableRows = function (tableIdOrName, batchInputHubDbTableRowV3, _options) {
        var result = this.api.batchCreateDraftTableRows(tableIdOrName, batchInputHubDbTableRowV3, _options);
        return result.toPromise();
    };
    /**
     * Permanently deletes rows from the `draft` version of the table, given a set of row ids.
     * Permanently deletes rows
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString JSON array of row ids.
     */
    PromiseRowsBatchApi.prototype.batchPurgeDraftTableRows = function (tableIdOrName, batchInputString, _options) {
        var result = this.api.batchPurgeDraftTableRows(tableIdOrName, batchInputString, _options);
        return result.toPromise();
    };
    /**
     * Returns rows in the `draft` version of the specified table, given a set of row ids.
     * Get a set of rows from draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString JSON array of row ids.
     */
    PromiseRowsBatchApi.prototype.batchReadDraftTableRows = function (tableIdOrName, batchInputString, _options) {
        var result = this.api.batchReadDraftTableRows(tableIdOrName, batchInputString, _options);
        return result.toPromise();
    };
    /**
     * Returns rows in the `live` version of the specified table, given a set of row ids. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get a set of rows
     * @param tableIdOrName The ID or name of the table to query.
     * @param batchInputString The JSON array of row ids
     */
    PromiseRowsBatchApi.prototype.batchReadTableRows = function (tableIdOrName, batchInputString, _options) {
        var result = this.api.batchReadTableRows(tableIdOrName, batchInputString, _options);
        return result.toPromise();
    };
    /**
     * Replaces multiple rows as a batch in the `draft` version of the table. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3 JSON array of row objects.
     */
    PromiseRowsBatchApi.prototype.batchReplaceDraftTableRows = function (tableIdOrName, batchInputHubDbTableRowV3, _options) {
        var result = this.api.batchReplaceDraftTableRows(tableIdOrName, batchInputHubDbTableRowV3, _options);
        return result.toPromise();
    };
    /**
     * Updates multiple rows as a batch in the `draft` version of the table. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputJsonNode JSON array of row objects.
     */
    PromiseRowsBatchApi.prototype.batchUpdateDraftTableRows = function (tableIdOrName, batchInputJsonNode, _options) {
        var result = this.api.batchUpdateDraftTableRows(tableIdOrName, batchInputJsonNode, _options);
        return result.toPromise();
    };
    return PromiseRowsBatchApi;
})();
exports.PromiseRowsBatchApi = PromiseRowsBatchApi;
var ObservableAPI_3 = require('./ObservableAPI');
var PromiseTablesApi = (function () {
    function PromiseTablesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableTablesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Archive (soft delete) an existing HubDB table. This archives both the live and draft versions.
     * Archive a table
     * @param tableIdOrName The ID or name of the table to archive.
     */
    PromiseTablesApi.prototype.archiveTable = function (tableIdOrName, _options) {
        var result = this.api.archiveTable(tableIdOrName, _options);
        return result.toPromise();
    };
    /**
     * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can be sent as JSON in the `body` parameter. This will create the cloned table as a `draft`.
     * Clone a table
     * @param tableIdOrName The ID or name of the table to clone.
     * @param hubDbTableCloneRequest JSON object with the properties newName and newLabel. You can set copyRows to false to clone the table with copying rows and default is true.
     */
    PromiseTablesApi.prototype.cloneDraftTable = function (tableIdOrName, hubDbTableCloneRequest, _options) {
        var result = this.api.cloneDraftTable(tableIdOrName, hubDbTableCloneRequest, _options);
        return result.toPromise();
    };
    /**
     * Creates a new draft HubDB table given a JSON schema. The table name and label should be unique for each account.
     * Create a new table
     * @param hubDbTableV3Input The JSON schema for the table being created.
     */
    PromiseTablesApi.prototype.createTable = function (hubDbTableV3Input, _options) {
        var result = this.api.createTable(hubDbTableV3Input, _options);
        return result.toPromise();
    };
    /**
     * Exports the `draft` version of a table to CSV / EXCEL format.
     * Export a draft table
     * @param tableIdOrName The ID or name of the table to export.
     * @param format The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    PromiseTablesApi.prototype.exportDraftTable = function (tableIdOrName, format, _options) {
        var result = this.api.exportDraftTable(tableIdOrName, format, _options);
        return result.toPromise();
    };
    /**
     * Exports the `live` version of a table to CSV / EXCEL format.
     * Export a published version of a table
     * @param tableIdOrName The ID or name of the table to export.
     * @param format The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    PromiseTablesApi.prototype.exportTable = function (tableIdOrName, format, _options) {
        var result = this.api.exportTable(tableIdOrName, format, _options);
        return result.toPromise();
    };
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
    PromiseTablesApi.prototype.getAllDraftTables = function (updatedAfter, updatedBefore, sort, createdAt, createdAfter, after, archived, createdBefore, updatedAt, limit, _options) {
        var result = this.api.getAllDraftTables(updatedAfter, updatedBefore, sort, createdAt, createdAfter, after, archived, createdBefore, updatedAt, limit, _options);
        return result.toPromise();
    };
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
    PromiseTablesApi.prototype.getAllTables = function (updatedAfter, updatedBefore, sort, createdAt, createdAfter, after, archived, createdBefore, updatedAt, limit, _options) {
        var result = this.api.getAllTables(updatedAfter, updatedBefore, sort, createdAt, createdAfter, after, archived, createdBefore, updatedAt, limit, _options);
        return result.toPromise();
    };
    /**
     * Get the details for the `draft` version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param tableIdOrName The ID or name of the table to return.
     * @param archived Set this to &#x60;true&#x60; to return an archived table. Defaults to &#x60;false&#x60;.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    PromiseTablesApi.prototype.getDraftTableDetailsById = function (tableIdOrName, archived, includeForeignIds, _options) {
        var result = this.api.getDraftTableDetailsById(tableIdOrName, archived, includeForeignIds, _options);
        return result.toPromise();
    };
    /**
     * Returns the details for the `live` version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get details for a live table
     * @param tableIdOrName The ID or name of the table to return.
     * @param archived Set this to &#x60;true&#x60; to return details for an archived table. Defaults to &#x60;false&#x60;.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    PromiseTablesApi.prototype.getTableDetails = function (tableIdOrName, archived, includeForeignIds, _options) {
        var result = this.api.getTableDetails(tableIdOrName, archived, includeForeignIds, _options);
        return result.toPromise();
    };
    /**
     * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the `draft` version of the table. Use `/push-live` endpoint to push these changes to `live` version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the overview section to check the details and format of the JSON-formatted options for the import.
     * Import data into draft table
     * @param tableIdOrName The ID of the destination table where data will be imported.
     * @param file The source CSV file to be imported.
     * @param config Configuration for the import in JSON format as described above.
     */
    PromiseTablesApi.prototype.importDraftTable = function (tableIdOrName, file, config, _options) {
        var result = this.api.importDraftTable(tableIdOrName, file, config, _options);
        return result.toPromise();
    };
    /**
     * Copies the data from draft to live version of the table and also publishes the live version. This will immediately push the data to the `live` version of the table and publishes the live version, meaning any website pages using data from the table will be updated.
     * Publish a table from draft
     * @param tableIdOrName The ID or name of the table to publish.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    PromiseTablesApi.prototype.publishDraftTable = function (tableIdOrName, includeForeignIds, _options) {
        var result = this.api.publishDraftTable(tableIdOrName, includeForeignIds, _options);
        return result.toPromise();
    };
    /**
     * Replaces the data in the `draft` version of the table with values from the `live` version. Any unpublished changes in the `draft` will be lost after this call is made.
     * Reset a draft table
     * @param tableIdOrName The ID or name of the table to reset.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    PromiseTablesApi.prototype.resetDraftTable = function (tableIdOrName, includeForeignIds, _options) {
        var result = this.api.resetDraftTable(tableIdOrName, includeForeignIds, _options);
        return result.toPromise();
    };
    /**
     * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table. Tables updated using the endpoint will only modify the `draft` verion of the table. Use `push-live` endpoint to push all the changes to the `live` version. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
     * Update an existing table
     * @param tableIdOrName The ID or name of the table to update.
     * @param hubDbTableV3Input The JSON schema for the table being updated.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    PromiseTablesApi.prototype.updateDraftTable = function (tableIdOrName, hubDbTableV3Input, includeForeignIds, _options) {
        var result = this.api.updateDraftTable(tableIdOrName, hubDbTableV3Input, includeForeignIds, _options);
        return result.toPromise();
    };
    /**
     * Use this endpoint to perform one of the following <ul><li> Publish a live version of a table (without copying table data from draft) </li><li>Un-publish a live version of a table (Leaving the data in the live version)</li><li>Restore an archived table</li></ul>  To publish a table, send `published` property in the JSON object with the value `true`. To unpublish a table, send `published` property in the JSON object with the value `false`.  To restore an archived table, send `archived` property in the JSON object with the value `false` along with the query parameter `archived=true`. When restoring an archived table, if an active table already exists with the same `name` or `label`, you will need to change the name of the archived table when restoring it using the `name` and `label` parameters with a new name and new label. When you restore a table, the table will be restored only in the `draft` version.  Examples:  Publish live version of a table:  ```     {       \"published\": true     } ``` Unpublish live version of a table: ```     {       \"published\": false     } ``` Restore a table: (send `archived=true` in query parameters) ```     {       \"archived\": false     } ``` Restore a table with a new name: (send `archived=true` in query parameters) ```     {       \"label\": \"New Table Name\",       \"name\": \"new_table_name\",       \"archived\": false     } ```
     * Publish or unpublish a live version of a table or restore an archived table
     * @param tableIdOrName The ID or name of the table to return.
     * @param hubDbTableV3LiveInput The JSON object as described.
     * @param archived Whether to return only results that have been archived.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    PromiseTablesApi.prototype.updateTable = function (tableIdOrName, hubDbTableV3LiveInput, archived, includeForeignIds, _options) {
        var result = this.api.updateTable(tableIdOrName, hubDbTableV3LiveInput, archived, includeForeignIds, _options);
        return result.toPromise();
    };
    return PromiseTablesApi;
})();
exports.PromiseTablesApi = PromiseTablesApi;
