import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { BatchInputHubDbTableRowBatchCloneRequest } from '../models/BatchInputHubDbTableRowBatchCloneRequest';
import { BatchInputHubDbTableRowV3BatchUpdateRequest } from '../models/BatchInputHubDbTableRowV3BatchUpdateRequest';
import { BatchInputHubDbTableRowV3Request } from '../models/BatchInputHubDbTableRowV3Request';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseHubDbTableRowV3 } from '../models/BatchResponseHubDbTableRowV3';
import { BatchResponseHubDbTableRowV3WithErrors } from '../models/BatchResponseHubDbTableRowV3WithErrors';
import { CollectionResponseWithTotalHubDbTableV3 } from '../models/CollectionResponseWithTotalHubDbTableV3';
import { HubDbTableCloneRequest } from '../models/HubDbTableCloneRequest';
import { HubDbTableRowV3 } from '../models/HubDbTableRowV3';
import { HubDbTableRowV3Request } from '../models/HubDbTableRowV3Request';
import { HubDbTableV3 } from '../models/HubDbTableV3';
import { HubDbTableV3Request } from '../models/HubDbTableV3Request';
import { ImportResult } from '../models/ImportResult';
import { UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3 } from '../models/UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3';

import { ObservableRowsApi } from "./ObservableAPI";
import { RowsApiRequestFactory, RowsApiResponseProcessor} from "../apis/RowsApi";

export interface RowsApiCloneDraftTableRowRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApicloneDraftTableRow
     */
    rowId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApicloneDraftTableRow
     */
    tableIdOrName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApicloneDraftTableRow
     */
    name?: string
}

export interface RowsApiCloneDraftTableRowsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApicloneDraftTableRows
     */
    tableIdOrName: string
    /**
     * 
     * @type BatchInputHubDbTableRowBatchCloneRequest
     * @memberof RowsApicloneDraftTableRows
     */
    batchInputHubDbTableRowBatchCloneRequest: BatchInputHubDbTableRowBatchCloneRequest
}

export interface RowsApiCreateDraftTableRowsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApicreateDraftTableRows
     */
    tableIdOrName: string
    /**
     * 
     * @type BatchInputHubDbTableRowV3Request
     * @memberof RowsApicreateDraftTableRows
     */
    batchInputHubDbTableRowV3Request: BatchInputHubDbTableRowV3Request
}

export interface RowsApiCreateTableRowRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApicreateTableRow
     */
    tableIdOrName: string
    /**
     * 
     * @type HubDbTableRowV3Request
     * @memberof RowsApicreateTableRow
     */
    hubDbTableRowV3Request: HubDbTableRowV3Request
}

export interface RowsApiGetDraftTableRowByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetDraftTableRowById
     */
    rowId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetDraftTableRowById
     */
    tableIdOrName: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof RowsApigetDraftTableRowById
     */
    archived?: boolean
}

export interface RowsApiGetTableRowRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetTableRow
     */
    rowId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetTableRow
     */
    tableIdOrName: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof RowsApigetTableRow
     */
    archived?: boolean
}

export interface RowsApiGetTableRowsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetTableRows
     */
    tableIdOrName: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetTableRows
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof RowsApigetTableRows
     */
    archived?: boolean
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof RowsApigetTableRows
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RowsApigetTableRows
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof RowsApigetTableRows
     */
    properties?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof RowsApigetTableRows
     */
    sort?: Array<string>
}

export interface RowsApiPurgeDraftTableRowRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApipurgeDraftTableRow
     */
    rowId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApipurgeDraftTableRow
     */
    tableIdOrName: string
}

export interface RowsApiPurgeDraftTableRowsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApipurgeDraftTableRows
     */
    tableIdOrName: string
    /**
     * 
     * @type BatchInputString
     * @memberof RowsApipurgeDraftTableRows
     */
    batchInputString: BatchInputString
}

export interface RowsApiReadDraftTableRowsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApireadDraftTableRows
     */
    tableIdOrName: string
    /**
     * 
     * @type BatchInputString
     * @memberof RowsApireadDraftTableRows
     */
    batchInputString: BatchInputString
}

export interface RowsApiReadTableRowsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApireadTableRows
     */
    tableIdOrName: string
    /**
     * 
     * @type BatchInputString
     * @memberof RowsApireadTableRows
     */
    batchInputString: BatchInputString
}

export interface RowsApiReplaceDraftTableRowRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApireplaceDraftTableRow
     */
    rowId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApireplaceDraftTableRow
     */
    tableIdOrName: string
    /**
     * 
     * @type HubDbTableRowV3Request
     * @memberof RowsApireplaceDraftTableRow
     */
    hubDbTableRowV3Request: HubDbTableRowV3Request
}

export interface RowsApiReplaceDraftTableRowsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApireplaceDraftTableRows
     */
    tableIdOrName: string
    /**
     * 
     * @type BatchInputHubDbTableRowV3BatchUpdateRequest
     * @memberof RowsApireplaceDraftTableRows
     */
    batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest
}

export interface RowsApiUpdateDraftTableRowRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApiupdateDraftTableRow
     */
    rowId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApiupdateDraftTableRow
     */
    tableIdOrName: string
    /**
     * 
     * @type HubDbTableRowV3Request
     * @memberof RowsApiupdateDraftTableRow
     */
    hubDbTableRowV3Request: HubDbTableRowV3Request
}

export interface RowsApiUpdateDraftTableRowsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RowsApiupdateDraftTableRows
     */
    tableIdOrName: string
    /**
     * 
     * @type BatchInputHubDbTableRowV3BatchUpdateRequest
     * @memberof RowsApiupdateDraftTableRows
     */
    batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest
}

export class ObjectRowsApi {
    private api: ObservableRowsApi

    public constructor(configuration: Configuration, requestFactory?: RowsApiRequestFactory, responseProcessor?: RowsApiResponseProcessor) {
        this.api = new ObservableRowsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clones a single row in the draft version of a table.
     * Clone a row
     * @param param the request object
     */
    public cloneDraftTableRowWithHttpInfo(param: RowsApiCloneDraftTableRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        return this.api.cloneDraftTableRowWithHttpInfo(param.rowId, param.tableIdOrName, param.name,  options).toPromise();
    }

    /**
     * Clones a single row in the draft version of a table.
     * Clone a row
     * @param param the request object
     */
    public cloneDraftTableRow(param: RowsApiCloneDraftTableRowRequest, options?: ConfigurationOptions): Promise<HubDbTableRowV3> {
        return this.api.cloneDraftTableRow(param.rowId, param.tableIdOrName, param.name,  options).toPromise();
    }

    /**
     * Clones rows in the draft version of the specified table, given a set of row ids. Maximum of 100 row ids per call.
     * Clone rows in batch
     * @param param the request object
     */
    public cloneDraftTableRowsWithHttpInfo(param: RowsApiCloneDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3>> {
        return this.api.cloneDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputHubDbTableRowBatchCloneRequest,  options).toPromise();
    }

    /**
     * Clones rows in the draft version of the specified table, given a set of row ids. Maximum of 100 row ids per call.
     * Clone rows in batch
     * @param param the request object
     */
    public cloneDraftTableRows(param: RowsApiCloneDraftTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3> {
        return this.api.cloneDraftTableRows(param.tableIdOrName, param.batchInputHubDbTableRowBatchCloneRequest,  options).toPromise();
    }

    /**
     * Creates rows in the draft version of the specified table, given an array of row objects. Maximum of 100 row object per call. See the overview section for more details with an example.
     * Create rows in batch
     * @param param the request object
     */
    public createDraftTableRowsWithHttpInfo(param: RowsApiCreateDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        return this.api.createDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputHubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Creates rows in the draft version of the specified table, given an array of row objects. Maximum of 100 row object per call. See the overview section for more details with an example.
     * Create rows in batch
     * @param param the request object
     */
    public createDraftTableRows(param: RowsApiCreateDraftTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        return this.api.createDraftTableRows(param.tableIdOrName, param.batchInputHubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Add a new row to a HubDB table. New rows will be added to the draft version of the table. Use the `/publish` endpoint to push these changes to published version.
     * Add a row to a table
     * @param param the request object
     */
    public createTableRowWithHttpInfo(param: RowsApiCreateTableRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        return this.api.createTableRowWithHttpInfo(param.tableIdOrName, param.hubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Add a new row to a HubDB table. New rows will be added to the draft version of the table. Use the `/publish` endpoint to push these changes to published version.
     * Add a row to a table
     * @param param the request object
     */
    public createTableRow(param: RowsApiCreateTableRowRequest, options?: ConfigurationOptions): Promise<HubDbTableRowV3> {
        return this.api.createTableRow(param.tableIdOrName, param.hubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Get a single row by ID from a table\'s draft version.
     * Get a row from the draft table
     * @param param the request object
     */
    public getDraftTableRowByIdWithHttpInfo(param: RowsApiGetDraftTableRowByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        return this.api.getDraftTableRowByIdWithHttpInfo(param.rowId, param.tableIdOrName, param.archived,  options).toPromise();
    }

    /**
     * Get a single row by ID from a table\'s draft version.
     * Get a row from the draft table
     * @param param the request object
     */
    public getDraftTableRowById(param: RowsApiGetDraftTableRowByIdRequest, options?: ConfigurationOptions): Promise<HubDbTableRowV3> {
        return this.api.getDraftTableRowById(param.rowId, param.tableIdOrName, param.archived,  options).toPromise();
    }

    /**
     * Get a single row by ID from the published version of a table. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param param the request object
     */
    public getTableRowWithHttpInfo(param: RowsApiGetTableRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        return this.api.getTableRowWithHttpInfo(param.rowId, param.tableIdOrName, param.archived,  options).toPromise();
    }

    /**
     * Get a single row by ID from the published version of a table. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param param the request object
     */
    public getTableRow(param: RowsApiGetTableRowRequest, options?: ConfigurationOptions): Promise<HubDbTableRowV3> {
        return this.api.getTableRow(param.rowId, param.tableIdOrName, param.archived,  options).toPromise();
    }

    /**
     * Returns a set of rows in the published version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param param the request object
     */
    public getTableRowsWithHttpInfo(param: RowsApiGetTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>> {
        return this.api.getTableRowsWithHttpInfo(param.tableIdOrName, param.after, param.archived, param.limit, param.offset, param.properties, param.sort,  options).toPromise();
    }

    /**
     * Returns a set of rows in the published version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param param the request object
     */
    public getTableRows(param: RowsApiGetTableRowsRequest, options?: ConfigurationOptions): Promise<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3> {
        return this.api.getTableRows(param.tableIdOrName, param.after, param.archived, param.limit, param.offset, param.properties, param.sort,  options).toPromise();
    }

    /**
     * Permanently deletes a row from a table\'s draft version.
     * Permanently deletes a row
     * @param param the request object
     */
    public purgeDraftTableRowWithHttpInfo(param: RowsApiPurgeDraftTableRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.purgeDraftTableRowWithHttpInfo(param.rowId, param.tableIdOrName,  options).toPromise();
    }

    /**
     * Permanently deletes a row from a table\'s draft version.
     * Permanently deletes a row
     * @param param the request object
     */
    public purgeDraftTableRow(param: RowsApiPurgeDraftTableRowRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.purgeDraftTableRow(param.rowId, param.tableIdOrName,  options).toPromise();
    }

    /**
     * Permanently delete rows from the draft version of a table, given a set of row IDs. Maximum of 100 row IDs per call.
     * Delete rows
     * @param param the request object
     */
    public purgeDraftTableRowsWithHttpInfo(param: RowsApiPurgeDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.purgeDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Permanently delete rows from the draft version of a table, given a set of row IDs. Maximum of 100 row IDs per call.
     * Delete rows
     * @param param the request object
     */
    public purgeDraftTableRows(param: RowsApiPurgeDraftTableRowsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.purgeDraftTableRows(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table, given a set of row IDs.
     * Get a set of rows from draft table
     * @param param the request object
     */
    public readDraftTableRowsWithHttpInfo(param: RowsApiReadDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        return this.api.readDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table, given a set of row IDs.
     * Get a set of rows from draft table
     * @param param the request object
     */
    public readDraftTableRows(param: RowsApiReadDraftTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        return this.api.readDraftTableRows(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Returns rows in the published version of the specified table, given a set of row IDs. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get a set of rows
     * @param param the request object
     */
    public readTableRowsWithHttpInfo(param: RowsApiReadTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        return this.api.readTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Returns rows in the published version of the specified table, given a set of row IDs. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get a set of rows
     * @param param the request object
     */
    public readTableRows(param: RowsApiReadTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        return this.api.readTableRows(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Replace a single row in the draft version of a table. All column values must be specified. If a column has a value in the target table and this request doesn\'t define that value, it will be deleted. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Replace an existing row
     * @param param the request object
     */
    public replaceDraftTableRowWithHttpInfo(param: RowsApiReplaceDraftTableRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        return this.api.replaceDraftTableRowWithHttpInfo(param.rowId, param.tableIdOrName, param.hubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Replace a single row in the draft version of a table. All column values must be specified. If a column has a value in the target table and this request doesn\'t define that value, it will be deleted. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Replace an existing row
     * @param param the request object
     */
    public replaceDraftTableRow(param: RowsApiReplaceDraftTableRowRequest, options?: ConfigurationOptions): Promise<HubDbTableRowV3> {
        return this.api.replaceDraftTableRow(param.rowId, param.tableIdOrName, param.hubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Replaces multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param param the request object
     */
    public replaceDraftTableRowsWithHttpInfo(param: RowsApiReplaceDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        return this.api.replaceDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputHubDbTableRowV3BatchUpdateRequest,  options).toPromise();
    }

    /**
     * Replaces multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param param the request object
     */
    public replaceDraftTableRows(param: RowsApiReplaceDraftTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        return this.api.replaceDraftTableRows(param.tableIdOrName, param.batchInputHubDbTableRowV3BatchUpdateRequest,  options).toPromise();
    }

    /**
     * Partially update a single row in the table\'s draft version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Update a row
     * @param param the request object
     */
    public updateDraftTableRowWithHttpInfo(param: RowsApiUpdateDraftTableRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        return this.api.updateDraftTableRowWithHttpInfo(param.rowId, param.tableIdOrName, param.hubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Partially update a single row in the table\'s draft version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Update a row
     * @param param the request object
     */
    public updateDraftTableRow(param: RowsApiUpdateDraftTableRowRequest, options?: ConfigurationOptions): Promise<HubDbTableRowV3> {
        return this.api.updateDraftTableRow(param.rowId, param.tableIdOrName, param.hubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Updates multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param param the request object
     */
    public updateDraftTableRowsWithHttpInfo(param: RowsApiUpdateDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        return this.api.updateDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputHubDbTableRowV3BatchUpdateRequest,  options).toPromise();
    }

    /**
     * Updates multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param param the request object
     */
    public updateDraftTableRows(param: RowsApiUpdateDraftTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        return this.api.updateDraftTableRows(param.tableIdOrName, param.batchInputHubDbTableRowV3BatchUpdateRequest,  options).toPromise();
    }

}

import { ObservableTablesApi } from "./ObservableAPI";
import { TablesApiRequestFactory, TablesApiResponseProcessor} from "../apis/TablesApi";

export interface TablesApiArchiveTableRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiarchiveTable
     */
    tableIdOrName: string
}

export interface TablesApiCloneDraftTableRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApicloneDraftTable
     */
    tableIdOrName: string
    /**
     * 
     * @type HubDbTableCloneRequest
     * @memberof TablesApicloneDraftTable
     */
    hubDbTableCloneRequest: HubDbTableCloneRequest
}

export interface TablesApiCreateTableRequest {
    /**
     * 
     * @type HubDbTableV3Request
     * @memberof TablesApicreateTable
     */
    hubDbTableV3Request: HubDbTableV3Request
}

export interface TablesApiExportDraftTableRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiexportDraftTable
     */
    tableIdOrName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiexportDraftTable
     */
    format?: string
}

export interface TablesApiExportTableRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiexportTable
     */
    tableIdOrName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiexportTable
     */
    format?: string
}

export interface TablesApiGetAllDraftTablesRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetAllDraftTables
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetAllDraftTables
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetAllDraftTables
     */
    contentType?: string
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    createdAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    createdAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    createdBefore?: Date
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetAllDraftTables
     */
    isGetLocalizedSchema?: boolean
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof TablesApigetAllDraftTables
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TablesApigetAllDraftTables
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    updatedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    updatedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    updatedBefore?: Date
}

export interface TablesApiGetAllTablesRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetAllTables
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetAllTables
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetAllTables
     */
    contentType?: string
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    createdAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    createdAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    createdBefore?: Date
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetAllTables
     */
    isGetLocalizedSchema?: boolean
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof TablesApigetAllTables
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TablesApigetAllTables
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    updatedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    updatedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    updatedBefore?: Date
}

export interface TablesApiGetDraftTableDetailsByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetDraftTableDetailsById
     */
    tableIdOrName: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetDraftTableDetailsById
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetDraftTableDetailsById
     */
    includeForeignIds?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetDraftTableDetailsById
     */
    isGetLocalizedSchema?: boolean
}

export interface TablesApiGetTableDetailsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetTableDetails
     */
    tableIdOrName: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetTableDetails
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetTableDetails
     */
    includeForeignIds?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetTableDetails
     */
    isGetLocalizedSchema?: boolean
}

export interface TablesApiImportDraftTableRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiimportDraftTable
     */
    tableIdOrName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiimportDraftTable
     */
    config?: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof TablesApiimportDraftTable
     */
    file?: HttpFile
}

export interface TablesApiPublishDraftTableRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApipublishDraftTable
     */
    tableIdOrName: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApipublishDraftTable
     */
    includeForeignIds?: boolean
}

export interface TablesApiReadDraftTableRowsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApireadDraftTableRows
     */
    tableIdOrName: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApireadDraftTableRows
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApireadDraftTableRows
     */
    archived?: boolean
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof TablesApireadDraftTableRows
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TablesApireadDraftTableRows
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TablesApireadDraftTableRows
     */
    properties?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TablesApireadDraftTableRows
     */
    sort?: Array<string>
}

export interface TablesApiRemoveTableVersionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiremoveTableVersion
     */
    tableIdOrName: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TablesApiremoveTableVersion
     */
    versionId: number
}

export interface TablesApiResetDraftTableRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiresetDraftTable
     */
    tableIdOrName: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApiresetDraftTable
     */
    includeForeignIds?: boolean
}

export interface TablesApiUnpublishTableRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiunpublishTable
     */
    tableIdOrName: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApiunpublishTable
     */
    includeForeignIds?: boolean
}

export interface TablesApiUpdateDraftTableRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiupdateDraftTable
     */
    tableIdOrName: string
    /**
     * 
     * @type HubDbTableV3Request
     * @memberof TablesApiupdateDraftTable
     */
    hubDbTableV3Request: HubDbTableV3Request
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApiupdateDraftTable
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApiupdateDraftTable
     */
    includeForeignIds?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApiupdateDraftTable
     */
    isGetLocalizedSchema?: boolean
}

export class ObjectTablesApi {
    private api: ObservableTablesApi

    public constructor(configuration: Configuration, requestFactory?: TablesApiRequestFactory, responseProcessor?: TablesApiResponseProcessor) {
        this.api = new ObservableTablesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive (soft delete) an existing HubDB table. This archives both the published and draft versions.
     * Archive a table
     * @param param the request object
     */
    public archiveTableWithHttpInfo(param: TablesApiArchiveTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveTableWithHttpInfo(param.tableIdOrName,  options).toPromise();
    }

    /**
     * Archive (soft delete) an existing HubDB table. This archives both the published and draft versions.
     * Archive a table
     * @param param the request object
     */
    public archiveTable(param: TablesApiArchiveTableRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveTable(param.tableIdOrName,  options).toPromise();
    }

    /**
     * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can be sent as JSON in the request body. This will create the cloned table as a draft.
     * Clone a table
     * @param param the request object
     */
    public cloneDraftTableWithHttpInfo(param: TablesApiCloneDraftTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.cloneDraftTableWithHttpInfo(param.tableIdOrName, param.hubDbTableCloneRequest,  options).toPromise();
    }

    /**
     * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can be sent as JSON in the request body. This will create the cloned table as a draft.
     * Clone a table
     * @param param the request object
     */
    public cloneDraftTable(param: TablesApiCloneDraftTableRequest, options?: ConfigurationOptions): Promise<HubDbTableV3> {
        return this.api.cloneDraftTable(param.tableIdOrName, param.hubDbTableCloneRequest,  options).toPromise();
    }

    /**
     * Creates a new draft HubDB table given a JSON schema. The table name and label should be unique for each account.
     * Create a table
     * @param param the request object
     */
    public createTableWithHttpInfo(param: TablesApiCreateTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.createTableWithHttpInfo(param.hubDbTableV3Request,  options).toPromise();
    }

    /**
     * Creates a new draft HubDB table given a JSON schema. The table name and label should be unique for each account.
     * Create a table
     * @param param the request object
     */
    public createTable(param: TablesApiCreateTableRequest, options?: ConfigurationOptions): Promise<HubDbTableV3> {
        return this.api.createTable(param.hubDbTableV3Request,  options).toPromise();
    }

    /**
     * Exports the draft version of a table to CSV / EXCEL format.
     * Export a draft table
     * @param param the request object
     */
    public exportDraftTableWithHttpInfo(param: TablesApiExportDraftTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        return this.api.exportDraftTableWithHttpInfo(param.tableIdOrName, param.format,  options).toPromise();
    }

    /**
     * Exports the draft version of a table to CSV / EXCEL format.
     * Export a draft table
     * @param param the request object
     */
    public exportDraftTable(param: TablesApiExportDraftTableRequest, options?: ConfigurationOptions): Promise<HttpFile> {
        return this.api.exportDraftTable(param.tableIdOrName, param.format,  options).toPromise();
    }

    /**
     * Exports the published version of a table in a specified format.
     * Export a published version of a table
     * @param param the request object
     */
    public exportTableWithHttpInfo(param: TablesApiExportTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        return this.api.exportTableWithHttpInfo(param.tableIdOrName, param.format,  options).toPromise();
    }

    /**
     * Exports the published version of a table in a specified format.
     * Export a published version of a table
     * @param param the request object
     */
    public exportTable(param: TablesApiExportTableRequest, options?: ConfigurationOptions): Promise<HttpFile> {
        return this.api.exportTable(param.tableIdOrName, param.format,  options).toPromise();
    }

    /**
     * Returns the details for each draft table defined in the specified account, including column definitions.
     * Return all draft tables
     * @param param the request object
     */
    public getAllDraftTablesWithHttpInfo(param: TablesApiGetAllDraftTablesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalHubDbTableV3>> {
        return this.api.getAllDraftTablesWithHttpInfo(param.after, param.archived, param.contentType, param.createdAfter, param.createdAt, param.createdBefore, param.isGetLocalizedSchema, param.limit, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Returns the details for each draft table defined in the specified account, including column definitions.
     * Return all draft tables
     * @param param the request object
     */
    public getAllDraftTables(param: TablesApiGetAllDraftTablesRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalHubDbTableV3> {
        return this.api.getAllDraftTables(param.after, param.archived, param.contentType, param.createdAfter, param.createdAt, param.createdBefore, param.isGetLocalizedSchema, param.limit, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Returns the details for the published version of each table defined in an account, including column definitions.
     * Get all published tables
     * @param param the request object
     */
    public getAllTablesWithHttpInfo(param: TablesApiGetAllTablesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalHubDbTableV3>> {
        return this.api.getAllTablesWithHttpInfo(param.after, param.archived, param.contentType, param.createdAfter, param.createdAt, param.createdBefore, param.isGetLocalizedSchema, param.limit, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Returns the details for the published version of each table defined in an account, including column definitions.
     * Get all published tables
     * @param param the request object
     */
    public getAllTables(param: TablesApiGetAllTablesRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalHubDbTableV3> {
        return this.api.getAllTables(param.after, param.archived, param.contentType, param.createdAfter, param.createdAt, param.createdBefore, param.isGetLocalizedSchema, param.limit, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Get the details for the draft version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param param the request object
     */
    public getDraftTableDetailsByIdWithHttpInfo(param: TablesApiGetDraftTableDetailsByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.getDraftTableDetailsByIdWithHttpInfo(param.tableIdOrName, param.archived, param.includeForeignIds, param.isGetLocalizedSchema,  options).toPromise();
    }

    /**
     * Get the details for the draft version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param param the request object
     */
    public getDraftTableDetailsById(param: TablesApiGetDraftTableDetailsByIdRequest, options?: ConfigurationOptions): Promise<HubDbTableV3> {
        return this.api.getDraftTableDetailsById(param.tableIdOrName, param.archived, param.includeForeignIds, param.isGetLocalizedSchema,  options).toPromise();
    }

    /**
     * Returns the details for the published version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table.  **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access. To do so, you\'ll need to include the HubSpot account ID in a `portalId` query parameter.
     * Get details of a published table
     * @param param the request object
     */
    public getTableDetailsWithHttpInfo(param: TablesApiGetTableDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.getTableDetailsWithHttpInfo(param.tableIdOrName, param.archived, param.includeForeignIds, param.isGetLocalizedSchema,  options).toPromise();
    }

    /**
     * Returns the details for the published version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table.  **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access. To do so, you\'ll need to include the HubSpot account ID in a `portalId` query parameter.
     * Get details of a published table
     * @param param the request object
     */
    public getTableDetails(param: TablesApiGetTableDetailsRequest, options?: ConfigurationOptions): Promise<HubDbTableV3> {
        return this.api.getTableDetails(param.tableIdOrName, param.archived, param.includeForeignIds, param.isGetLocalizedSchema,  options).toPromise();
    }

    /**
     * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the draft version of the table. Use the `/publish` endpoint to push these changes to the published version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#importing-tables) to check the details and format of the JSON-formatted options for the import.
     * Import data into draft table
     * @param param the request object
     */
    public importDraftTableWithHttpInfo(param: TablesApiImportDraftTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<ImportResult>> {
        return this.api.importDraftTableWithHttpInfo(param.tableIdOrName, param.config, param.file,  options).toPromise();
    }

    /**
     * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the draft version of the table. Use the `/publish` endpoint to push these changes to the published version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#importing-tables) to check the details and format of the JSON-formatted options for the import.
     * Import data into draft table
     * @param param the request object
     */
    public importDraftTable(param: TablesApiImportDraftTableRequest, options?: ConfigurationOptions): Promise<ImportResult> {
        return this.api.importDraftTable(param.tableIdOrName, param.config, param.file,  options).toPromise();
    }

    /**
     * Publishes the table by copying the data and table schema changes from draft version to the published version, meaning any website pages using data from the table will be updated.
     * Publish a table from draft
     * @param param the request object
     */
    public publishDraftTableWithHttpInfo(param: TablesApiPublishDraftTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.publishDraftTableWithHttpInfo(param.tableIdOrName, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Publishes the table by copying the data and table schema changes from draft version to the published version, meaning any website pages using data from the table will be updated.
     * Publish a table from draft
     * @param param the request object
     */
    public publishDraftTable(param: TablesApiPublishDraftTableRequest, options?: ConfigurationOptions): Promise<HubDbTableV3> {
        return this.api.publishDraftTable(param.tableIdOrName, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options.
     * Get rows from draft table
     * @param param the request object
     */
    public readDraftTableRowsWithHttpInfo(param: TablesApiReadDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>> {
        return this.api.readDraftTableRowsWithHttpInfo(param.tableIdOrName, param.after, param.archived, param.limit, param.offset, param.properties, param.sort,  options).toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options.
     * Get rows from draft table
     * @param param the request object
     */
    public readDraftTableRows(param: TablesApiReadDraftTableRowsRequest, options?: ConfigurationOptions): Promise<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3> {
        return this.api.readDraftTableRows(param.tableIdOrName, param.after, param.archived, param.limit, param.offset, param.properties, param.sort,  options).toPromise();
    }

    /**
     * Delete a specific version of a table
     * Delete a table version
     * @param param the request object
     */
    public removeTableVersionWithHttpInfo(param: TablesApiRemoveTableVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeTableVersionWithHttpInfo(param.tableIdOrName, param.versionId,  options).toPromise();
    }

    /**
     * Delete a specific version of a table
     * Delete a table version
     * @param param the request object
     */
    public removeTableVersion(param: TablesApiRemoveTableVersionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeTableVersion(param.tableIdOrName, param.versionId,  options).toPromise();
    }

    /**
     * Replaces the data in the draft version of the table with values from the published version. Any unpublished changes in the draft will be lost after this call is made.
     * Reset a table draft
     * @param param the request object
     */
    public resetDraftTableWithHttpInfo(param: TablesApiResetDraftTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.resetDraftTableWithHttpInfo(param.tableIdOrName, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Replaces the data in the draft version of the table with values from the published version. Any unpublished changes in the draft will be lost after this call is made.
     * Reset a table draft
     * @param param the request object
     */
    public resetDraftTable(param: TablesApiResetDraftTableRequest, options?: ConfigurationOptions): Promise<HubDbTableV3> {
        return this.api.resetDraftTable(param.tableIdOrName, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Unpublishes the table, meaning any website pages using data from the table will not render any data.
     * Unpublish a table
     * @param param the request object
     */
    public unpublishTableWithHttpInfo(param: TablesApiUnpublishTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.unpublishTableWithHttpInfo(param.tableIdOrName, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Unpublishes the table, meaning any website pages using data from the table will not render any data.
     * Unpublish a table
     * @param param the request object
     */
    public unpublishTable(param: TablesApiUnpublishTableRequest, options?: ConfigurationOptions): Promise<HubDbTableV3> {
        return this.api.unpublishTable(param.tableIdOrName, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table as well as restore an archived table. Tables updated using the endpoint will only modify the draft verion of the table. Use the `/publish` endpoint to push all the changes to the published version. To restore a table, include the query parameter `archived=true` and `\"archived\": false` in the json body. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
     * Update an existing table
     * @param param the request object
     */
    public updateDraftTableWithHttpInfo(param: TablesApiUpdateDraftTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.updateDraftTableWithHttpInfo(param.tableIdOrName, param.hubDbTableV3Request, param.archived, param.includeForeignIds, param.isGetLocalizedSchema,  options).toPromise();
    }

    /**
     * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table as well as restore an archived table. Tables updated using the endpoint will only modify the draft verion of the table. Use the `/publish` endpoint to push all the changes to the published version. To restore a table, include the query parameter `archived=true` and `\"archived\": false` in the json body. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
     * Update an existing table
     * @param param the request object
     */
    public updateDraftTable(param: TablesApiUpdateDraftTableRequest, options?: ConfigurationOptions): Promise<HubDbTableV3> {
        return this.api.updateDraftTable(param.tableIdOrName, param.hubDbTableV3Request, param.archived, param.includeForeignIds, param.isGetLocalizedSchema,  options).toPromise();
    }

}
