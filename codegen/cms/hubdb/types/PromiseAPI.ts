import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BatchInputHubDbTableRowV3 } from '../models/BatchInputHubDbTableRowV3';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseHubDbTableRowV3WithErrors } from '../models/BatchResponseHubDbTableRowV3WithErrors';
import { CollectionResponseWithTotalHubDbTableRowV3ForwardPaging } from '../models/CollectionResponseWithTotalHubDbTableRowV3ForwardPaging';
import { CollectionResponseWithTotalHubDbTableV3ForwardPaging } from '../models/CollectionResponseWithTotalHubDbTableV3ForwardPaging';
import { Column } from '../models/Column';
import { ColumnInput } from '../models/ColumnInput';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForeignId } from '../models/ForeignId';
import { ForwardPaging } from '../models/ForwardPaging';
import { HubDbTableCloneRequest } from '../models/HubDbTableCloneRequest';
import { HubDbTableRowV3 } from '../models/HubDbTableRowV3';
import { HubDbTableRowV3Input } from '../models/HubDbTableRowV3Input';
import { HubDbTableV3 } from '../models/HubDbTableV3';
import { HubDbTableV3Input } from '../models/HubDbTableV3Input';
import { HubDbTableV3LiveInput } from '../models/HubDbTableV3LiveInput';
import { ImportResult } from '../models/ImportResult';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Option } from '../models/Option';
import { SimpleUser } from '../models/SimpleUser';
import { StandardError } from '../models/StandardError';
import { ObservableRowsApi } from './ObservableAPI';

import { RowsApiRequestFactory, RowsApiResponseProcessor} from "../apis/RowsApi";
export class PromiseRowsApi {
    private api: ObservableRowsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RowsApiRequestFactory,
        responseProcessor?: RowsApiResponseProcessor
    ) {
        this.api = new ObservableRowsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clones a single row in the `draft` version of the table.
     * Clone a row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    public cloneDraftTableRow(rowId: string, tableIdOrName: string, _options?: Configuration): Promise<HubDbTableRowV3> {
        const result = this.api.cloneDraftTableRow(rowId, tableIdOrName, _options);
        return result.toPromise();
    }

    /**
     * Add a new row to a HubDB table. New rows will be added to the `draft` version of the table. Use `push-live` endpoint to push these changes to live version and publish them.
     * Add a new row to a table
     * @param tableIdOrName The ID or name of the target table.
     * @param hubDbTableRowV3Input The row definition JSON, formatted as described above.
     */
    public createTableRow(tableIdOrName: string, hubDbTableRowV3Input: HubDbTableRowV3Input, _options?: Configuration): Promise<HubDbTableRowV3> {
        const result = this.api.createTableRow(tableIdOrName, hubDbTableRowV3Input, _options);
        return result.toPromise();
    }

    /**
     * Get a single row by ID from a table's `draft` version.
     * Get a row from the draft table
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    public getDraftTableRowById(rowId: string, tableIdOrName: string, _options?: Configuration): Promise<HubDbTableRowV3> {
        const result = this.api.getDraftTableRowById(rowId, tableIdOrName, _options);
        return result.toPromise();
    }

    /**
     * Get a single row by ID from a table's `live` version. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    public getTableRow(rowId: string, tableIdOrName: string, _options?: Configuration): Promise<HubDbTableRowV3> {
        const result = this.api.getTableRow(rowId, tableIdOrName, _options);
        return result.toPromise();
    }

    /**
     * Returns a set of rows in the `live` version of the specified table. Row results can be filtered and sorted. Refer to the overview section for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param tableIdOrName The ID or name of the table to query.
     * @param properties Specify the column names to get results containing only the required columns instead of all column details.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @param sort Specifies the column names to sort the results by. See the above description for more details.
     */
    public getTableRows(tableIdOrName: string, properties?: Array<string>, after?: string, limit?: number, sort?: Array<string>, _options?: Configuration): Promise<CollectionResponseWithTotalHubDbTableRowV3ForwardPaging> {
        const result = this.api.getTableRows(tableIdOrName, properties, after, limit, sort, _options);
        return result.toPromise();
    }

    /**
     * Permanently deletes a row from a table's `draft` version.
     * Permanently deletes a row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    public purgeDraftTableRow(rowId: string, tableIdOrName: string, _options?: Configuration): Promise<void> {
        const result = this.api.purgeDraftTableRow(rowId, tableIdOrName, _options);
        return result.toPromise();
    }

    /**
     * Returns rows in the `draft` version of the specified table. Row results can be filtered and sorted using the options mentioned in the overview section.
     * Get rows from draft table
     * @param tableIdOrName The ID or name of the table to query.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param properties Specify the column names to get results containing only the required columns instead of all column details. If you want to include multiple columns in the result, use this query param as many times. 
     * @param limit The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @param sort Specifies the column names to sort the results by.
     */
    public readDraftTableRows(tableIdOrName: string, after?: string, properties?: Array<string>, limit?: number, sort?: Array<string>, _options?: Configuration): Promise<CollectionResponseWithTotalHubDbTableRowV3ForwardPaging> {
        const result = this.api.readDraftTableRows(tableIdOrName, after, properties, limit, sort, _options);
        return result.toPromise();
    }

    /**
     * Replace a single row in the table's `draft` version. All the column values must be specified. If a column has a value in the target table and this request doesn't define that value, it will be deleted. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Replaces an existing row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     * @param hubDbTableRowV3Input The JSON object of the row
     */
    public replaceDraftTableRow(rowId: string, tableIdOrName: string, hubDbTableRowV3Input: HubDbTableRowV3Input, _options?: Configuration): Promise<HubDbTableRowV3> {
        const result = this.api.replaceDraftTableRow(rowId, tableIdOrName, hubDbTableRowV3Input, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single row in the table's `draft` version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Updates an existing row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     * @param hubDbTableRowV3Input The JSON object of the row with necessary fields that needs to be updated.
     */
    public updateDraftTableRow(rowId: string, tableIdOrName: string, hubDbTableRowV3Input: HubDbTableRowV3Input, _options?: Configuration): Promise<HubDbTableRowV3> {
        const result = this.api.updateDraftTableRow(rowId, tableIdOrName, hubDbTableRowV3Input, _options);
        return result.toPromise();
    }


}



import { ObservableRowsBatchApi } from './ObservableAPI';

import { RowsBatchApiRequestFactory, RowsBatchApiResponseProcessor} from "../apis/RowsBatchApi";
export class PromiseRowsBatchApi {
    private api: ObservableRowsBatchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RowsBatchApiRequestFactory,
        responseProcessor?: RowsBatchApiResponseProcessor
    ) {
        this.api = new ObservableRowsBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clones rows in the `draft` version of the specified table, given a set of row ids.
     * Clone rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString The JSON array of row ids
     */
    public batchCloneDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<any> {
        const result = this.api.batchCloneDraftTableRows(tableIdOrName, batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Creates rows in the `draft` version of the specified table, given an array of row objects. See the overview section for more details with an example.
     * Create rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3 JSON array of row objects
     */
    public batchCreateDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3: BatchInputHubDbTableRowV3, _options?: Configuration): Promise<BatchResponseHubDbTableRowV3WithErrors | any> {
        const result = this.api.batchCreateDraftTableRows(tableIdOrName, batchInputHubDbTableRowV3, _options);
        return result.toPromise();
    }

    /**
     * Permanently deletes rows from the `draft` version of the table, given a set of row ids.
     * Permanently deletes rows
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString JSON array of row ids.
     */
    public batchPurgeDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<void> {
        const result = this.api.batchPurgeDraftTableRows(tableIdOrName, batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Returns rows in the `draft` version of the specified table, given a set of row ids.
     * Get a set of rows from draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString JSON array of row ids.
     */
    public batchReadDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<BatchResponseHubDbTableRowV3WithErrors | any> {
        const result = this.api.batchReadDraftTableRows(tableIdOrName, batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Returns rows in the `live` version of the specified table, given a set of row ids. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get a set of rows
     * @param tableIdOrName The ID or name of the table to query.
     * @param batchInputString The JSON array of row ids
     */
    public batchReadTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<BatchResponseHubDbTableRowV3WithErrors | any> {
        const result = this.api.batchReadTableRows(tableIdOrName, batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Replaces multiple rows as a batch in the `draft` version of the table. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3 JSON array of row objects.
     */
    public batchReplaceDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3: BatchInputHubDbTableRowV3, _options?: Configuration): Promise<BatchResponseHubDbTableRowV3WithErrors | any> {
        const result = this.api.batchReplaceDraftTableRows(tableIdOrName, batchInputHubDbTableRowV3, _options);
        return result.toPromise();
    }

    /**
     * Updates multiple rows as a batch in the `draft` version of the table. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputJsonNode JSON array of row objects.
     */
    public batchUpdateDraftTableRows(tableIdOrName: string, batchInputJsonNode: BatchInputJsonNode, _options?: Configuration): Promise<BatchResponseHubDbTableRowV3WithErrors | any> {
        const result = this.api.batchUpdateDraftTableRows(tableIdOrName, batchInputJsonNode, _options);
        return result.toPromise();
    }


}



import { ObservableTablesApi } from './ObservableAPI';

import { TablesApiRequestFactory, TablesApiResponseProcessor} from "../apis/TablesApi";
export class PromiseTablesApi {
    private api: ObservableTablesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TablesApiRequestFactory,
        responseProcessor?: TablesApiResponseProcessor
    ) {
        this.api = new ObservableTablesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive (soft delete) an existing HubDB table. This archives both the live and draft versions.
     * Archive a table
     * @param tableIdOrName The ID or name of the table to archive.
     */
    public archiveTable(tableIdOrName: string, _options?: Configuration): Promise<void> {
        const result = this.api.archiveTable(tableIdOrName, _options);
        return result.toPromise();
    }

    /**
     * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can be sent as JSON in the `body` parameter. This will create the cloned table as a `draft`.
     * Clone a table
     * @param tableIdOrName The ID or name of the table to clone.
     * @param hubDbTableCloneRequest JSON object with the properties newName and newLabel. You can set copyRows to false to clone the table with copying rows and default is true.
     */
    public cloneDraftTable(tableIdOrName: string, hubDbTableCloneRequest: HubDbTableCloneRequest, _options?: Configuration): Promise<HubDbTableV3> {
        const result = this.api.cloneDraftTable(tableIdOrName, hubDbTableCloneRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new draft HubDB table given a JSON schema. The table name and label should be unique for each account.
     * Create a new table
     * @param hubDbTableV3Input The JSON schema for the table being created.
     */
    public createTable(hubDbTableV3Input: HubDbTableV3Input, _options?: Configuration): Promise<HubDbTableV3> {
        const result = this.api.createTable(hubDbTableV3Input, _options);
        return result.toPromise();
    }

    /**
     * Exports the `draft` version of a table to CSV / EXCEL format.
     * Export a draft table
     * @param tableIdOrName The ID or name of the table to export.
     * @param format The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    public exportDraftTable(tableIdOrName: string, format?: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.exportDraftTable(tableIdOrName, format, _options);
        return result.toPromise();
    }

    /**
     * Exports the `live` version of a table to CSV / EXCEL format.
     * Export a published version of a table
     * @param tableIdOrName The ID or name of the table to export.
     * @param format The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    public exportTable(tableIdOrName: string, format?: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.exportTable(tableIdOrName, format, _options);
        return result.toPromise();
    }

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
    public getAllDraftTables(updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, createdAt?: Date, createdAfter?: Date, after?: string, archived?: boolean, createdBefore?: Date, updatedAt?: Date, limit?: number, _options?: Configuration): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging> {
        const result = this.api.getAllDraftTables(updatedAfter, updatedBefore, sort, createdAt, createdAfter, after, archived, createdBefore, updatedAt, limit, _options);
        return result.toPromise();
    }

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
    public getAllTables(updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, createdAt?: Date, createdAfter?: Date, after?: string, archived?: boolean, createdBefore?: Date, updatedAt?: Date, limit?: number, _options?: Configuration): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging> {
        const result = this.api.getAllTables(updatedAfter, updatedBefore, sort, createdAt, createdAfter, after, archived, createdBefore, updatedAt, limit, _options);
        return result.toPromise();
    }

    /**
     * Get the details for the `draft` version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param tableIdOrName The ID or name of the table to return.
     * @param archived Set this to &#x60;true&#x60; to return an archived table. Defaults to &#x60;false&#x60;.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public getDraftTableDetailsById(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration): Promise<HubDbTableV3> {
        const result = this.api.getDraftTableDetailsById(tableIdOrName, archived, includeForeignIds, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for the `live` version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get details for a live table
     * @param tableIdOrName The ID or name of the table to return.
     * @param archived Set this to &#x60;true&#x60; to return details for an archived table. Defaults to &#x60;false&#x60;.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public getTableDetails(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration): Promise<HubDbTableV3> {
        const result = this.api.getTableDetails(tableIdOrName, archived, includeForeignIds, _options);
        return result.toPromise();
    }

    /**
     * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the `draft` version of the table. Use `/push-live` endpoint to push these changes to `live` version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the overview section to check the details and format of the JSON-formatted options for the import.
     * Import data into draft table
     * @param tableIdOrName The ID of the destination table where data will be imported.
     * @param file The source CSV file to be imported.
     * @param config Configuration for the import in JSON format as described above.
     */
    public importDraftTable(tableIdOrName: string, file?: HttpFile, config?: string, _options?: Configuration): Promise<ImportResult> {
        const result = this.api.importDraftTable(tableIdOrName, file, config, _options);
        return result.toPromise();
    }

    /**
     * Copies the data from draft to live version of the table and also publishes the live version. This will immediately push the data to the `live` version of the table and publishes the live version, meaning any website pages using data from the table will be updated.
     * Publish a table from draft
     * @param tableIdOrName The ID or name of the table to publish.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public publishDraftTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: Configuration): Promise<HubDbTableV3> {
        const result = this.api.publishDraftTable(tableIdOrName, includeForeignIds, _options);
        return result.toPromise();
    }

    /**
     * Replaces the data in the `draft` version of the table with values from the `live` version. Any unpublished changes in the `draft` will be lost after this call is made.
     * Reset a draft table
     * @param tableIdOrName The ID or name of the table to reset.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public resetDraftTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: Configuration): Promise<HubDbTableV3> {
        const result = this.api.resetDraftTable(tableIdOrName, includeForeignIds, _options);
        return result.toPromise();
    }

    /**
     * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table. Tables updated using the endpoint will only modify the `draft` verion of the table. Use `push-live` endpoint to push all the changes to the `live` version. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
     * Update an existing table
     * @param tableIdOrName The ID or name of the table to update.
     * @param hubDbTableV3Input The JSON schema for the table being updated.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public updateDraftTable(tableIdOrName: string, hubDbTableV3Input: HubDbTableV3Input, includeForeignIds?: boolean, _options?: Configuration): Promise<HubDbTableV3> {
        const result = this.api.updateDraftTable(tableIdOrName, hubDbTableV3Input, includeForeignIds, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to perform one of the following <ul><li> Publish a live version of a table (without copying table data from draft) </li><li>Un-publish a live version of a table (Leaving the data in the live version)</li><li>Restore an archived table</li></ul>  To publish a table, send `published` property in the JSON object with the value `true`. To unpublish a table, send `published` property in the JSON object with the value `false`.  To restore an archived table, send `archived` property in the JSON object with the value `false` along with the query parameter `archived=true`. When restoring an archived table, if an active table already exists with the same `name` or `label`, you will need to change the name of the archived table when restoring it using the `name` and `label` parameters with a new name and new label. When you restore a table, the table will be restored only in the `draft` version.  Examples:  Publish live version of a table:  ```     {       \"published\": true     } ``` Unpublish live version of a table: ```     {       \"published\": false     } ``` Restore a table: (send `archived=true` in query parameters) ```     {       \"archived\": false     } ``` Restore a table with a new name: (send `archived=true` in query parameters) ```     {       \"label\": \"New Table Name\",       \"name\": \"new_table_name\",       \"archived\": false     } ```
     * Publish or unpublish a live version of a table or restore an archived table
     * @param tableIdOrName The ID or name of the table to return.
     * @param hubDbTableV3LiveInput The JSON object as described.
     * @param archived Whether to return only results that have been archived.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public updateTable(tableIdOrName: string, hubDbTableV3LiveInput: HubDbTableV3LiveInput, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration): Promise<HubDbTableV3> {
        const result = this.api.updateTable(tableIdOrName, hubDbTableV3LiveInput, archived, includeForeignIds, _options);
        return result.toPromise();
    }


}



