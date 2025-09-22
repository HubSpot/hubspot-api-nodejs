import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { BatchInputHubDbTableRowBatchCloneRequest } from '../models/BatchInputHubDbTableRowBatchCloneRequest';
import { BatchInputHubDbTableRowV3BatchUpdateRequest } from '../models/BatchInputHubDbTableRowV3BatchUpdateRequest';
import { BatchInputHubDbTableRowV3Request } from '../models/BatchInputHubDbTableRowV3Request';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseHubDbTableRowV3 } from '../models/BatchResponseHubDbTableRowV3';
import { BatchResponseHubDbTableRowV3WithErrors } from '../models/BatchResponseHubDbTableRowV3WithErrors';
import { CollectionResponseWithTotalHubDbTableV3ForwardPaging } from '../models/CollectionResponseWithTotalHubDbTableV3ForwardPaging';
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
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsApicloneDraftTableRow
     */
    tableIdOrName: string
    /**
     * The ID of the row
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
    name?: string
}

export interface RowsApiCreateTableRowRequest {
    /**
     * The ID or name of the target table.
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
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetDraftTableRowById
     */
    tableIdOrName: string
    /**
     * The ID of the row
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetDraftTableRowById
     */
    rowId: string
    /**
     *
     * Defaults to: undefined
     * @type boolean
     * @memberof RowsApigetDraftTableRowById
     */
    archived?: boolean
}

export interface RowsApiGetTableRowRequest {
    /**
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetTableRow
     */
    tableIdOrName: string
    /**
     * The ID of the row
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetTableRow
     */
    rowId: string
    /**
     *
     * Defaults to: undefined
     * @type boolean
     * @memberof RowsApigetTableRow
     */
    archived?: boolean
}

export interface RowsApiGetTableRowsRequest {
    /**
     * The ID or name of the table to query.
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetTableRows
     */
    tableIdOrName: string
    /**
     * Specifies the column names to sort the results by. See the above description for more details.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof RowsApigetTableRows
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof RowsApigetTableRows
     */
    after?: string
    /**
     * The maximum number of results to return. Default is &#x60;1000&#x60;.
     * Defaults to: undefined
     * @type number
     * @memberof RowsApigetTableRows
     */
    limit?: number
    /**
     * Specify the column names to get results containing only the required columns instead of all column details.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof RowsApigetTableRows
     */
    properties?: Array<string>
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
     * @type boolean
     * @memberof RowsApigetTableRows
     */
    archived?: boolean
}

export interface RowsApiPurgeDraftTableRowRequest {
    /**
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsApipurgeDraftTableRow
     */
    tableIdOrName: string
    /**
     * The ID of the row
     * Defaults to: undefined
     * @type string
     * @memberof RowsApipurgeDraftTableRow
     */
    rowId: string
}

export interface RowsApiReadDraftTableRowsRequest {
    /**
     * The ID or name of the table to query.
     * Defaults to: undefined
     * @type string
     * @memberof RowsApireadDraftTableRows
     */
    tableIdOrName: string
    /**
     * Specifies the column names to sort the results by.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof RowsApireadDraftTableRows
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof RowsApireadDraftTableRows
     */
    after?: string
    /**
     * The maximum number of results to return. Default is &#x60;1000&#x60;.
     * Defaults to: undefined
     * @type number
     * @memberof RowsApireadDraftTableRows
     */
    limit?: number
    /**
     * Specify the column names to get results containing only the required columns instead of all column details. If you want to include multiple columns in the result, use this query param as many times.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof RowsApireadDraftTableRows
     */
    properties?: Array<string>
    /**
     *
     * Defaults to: undefined
     * @type number
     * @memberof RowsApireadDraftTableRows
     */
    offset?: number
    /**
     *
     * Defaults to: undefined
     * @type boolean
     * @memberof RowsApireadDraftTableRows
     */
    archived?: boolean
}

export interface RowsApiReplaceDraftTableRowRequest {
    /**
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsApireplaceDraftTableRow
     */
    tableIdOrName: string
    /**
     * The ID of the row
     * Defaults to: undefined
     * @type string
     * @memberof RowsApireplaceDraftTableRow
     */
    rowId: string
    /**
     *
     * @type HubDbTableRowV3Request
     * @memberof RowsApireplaceDraftTableRow
     */
    hubDbTableRowV3Request: HubDbTableRowV3Request
}

export interface RowsApiUpdateDraftTableRowRequest {
    /**
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsApiupdateDraftTableRow
     */
    tableIdOrName: string
    /**
     * The ID of the row
     * Defaults to: undefined
     * @type string
     * @memberof RowsApiupdateDraftTableRow
     */
    rowId: string
    /**
     *
     * @type HubDbTableRowV3Request
     * @memberof RowsApiupdateDraftTableRow
     */
    hubDbTableRowV3Request: HubDbTableRowV3Request
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
        return this.api.cloneDraftTableRowWithHttpInfo(param.tableIdOrName, param.rowId, param.name,  options).toPromise();
    }

    /**
     * Clones a single row in the draft version of a table.
     * Clone a row
     * @param param the request object
     */
    public cloneDraftTableRow(param: RowsApiCloneDraftTableRowRequest, options?: ConfigurationOptions): Promise<HubDbTableRowV3> {
        return this.api.cloneDraftTableRow(param.tableIdOrName, param.rowId, param.name,  options).toPromise();
    }

    /**
     * Add a new row to a HubDB table. New rows will be added to the draft version of the table. Use the `/publish` endpoint to push these changes to published version.
     * Add a new row to a table
     * @param param the request object
     */
    public createTableRowWithHttpInfo(param: RowsApiCreateTableRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        return this.api.createTableRowWithHttpInfo(param.tableIdOrName, param.hubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Add a new row to a HubDB table. New rows will be added to the draft version of the table. Use the `/publish` endpoint to push these changes to published version.
     * Add a new row to a table
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
        return this.api.getDraftTableRowByIdWithHttpInfo(param.tableIdOrName, param.rowId, param.archived,  options).toPromise();
    }

    /**
     * Get a single row by ID from a table\'s draft version.
     * Get a row from the draft table
     * @param param the request object
     */
    public getDraftTableRowById(param: RowsApiGetDraftTableRowByIdRequest, options?: ConfigurationOptions): Promise<HubDbTableRowV3> {
        return this.api.getDraftTableRowById(param.tableIdOrName, param.rowId, param.archived,  options).toPromise();
    }

    /**
     * Get a single row by ID from the published version of a table. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param param the request object
     */
    public getTableRowWithHttpInfo(param: RowsApiGetTableRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        return this.api.getTableRowWithHttpInfo(param.tableIdOrName, param.rowId, param.archived,  options).toPromise();
    }

    /**
     * Get a single row by ID from the published version of a table. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param param the request object
     */
    public getTableRow(param: RowsApiGetTableRowRequest, options?: ConfigurationOptions): Promise<HubDbTableRowV3> {
        return this.api.getTableRow(param.tableIdOrName, param.rowId, param.archived,  options).toPromise();
    }

    /**
     * Returns a set of rows in the published version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param param the request object
     */
    public getTableRowsWithHttpInfo(param: RowsApiGetTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>> {
        return this.api.getTableRowsWithHttpInfo(param.tableIdOrName, param.sort, param.after, param.limit, param.properties, param.offset, param.archived,  options).toPromise();
    }

    /**
     * Returns a set of rows in the published version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param param the request object
     */
    public getTableRows(param: RowsApiGetTableRowsRequest, options?: ConfigurationOptions): Promise<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3> {
        return this.api.getTableRows(param.tableIdOrName, param.sort, param.after, param.limit, param.properties, param.offset, param.archived,  options).toPromise();
    }

    /**
     * Permanently deletes a row from a table\'s draft version.
     * Permanently deletes a row
     * @param param the request object
     */
    public purgeDraftTableRowWithHttpInfo(param: RowsApiPurgeDraftTableRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.purgeDraftTableRowWithHttpInfo(param.tableIdOrName, param.rowId,  options).toPromise();
    }

    /**
     * Permanently deletes a row from a table\'s draft version.
     * Permanently deletes a row
     * @param param the request object
     */
    public purgeDraftTableRow(param: RowsApiPurgeDraftTableRowRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.purgeDraftTableRow(param.tableIdOrName, param.rowId,  options).toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options.
     * Get rows from draft table
     * @param param the request object
     */
    public readDraftTableRowsWithHttpInfo(param: RowsApiReadDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>> {
        return this.api.readDraftTableRowsWithHttpInfo(param.tableIdOrName, param.sort, param.after, param.limit, param.properties, param.offset, param.archived,  options).toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options.
     * Get rows from draft table
     * @param param the request object
     */
    public readDraftTableRows(param: RowsApiReadDraftTableRowsRequest, options?: ConfigurationOptions): Promise<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3> {
        return this.api.readDraftTableRows(param.tableIdOrName, param.sort, param.after, param.limit, param.properties, param.offset, param.archived,  options).toPromise();
    }

    /**
     * Replace a single row in the draft version of a table. All column values must be specified. If a column has a value in the target table and this request doesn\'t define that value, it will be deleted. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Replaces an existing row
     * @param param the request object
     */
    public replaceDraftTableRowWithHttpInfo(param: RowsApiReplaceDraftTableRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        return this.api.replaceDraftTableRowWithHttpInfo(param.tableIdOrName, param.rowId, param.hubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Replace a single row in the draft version of a table. All column values must be specified. If a column has a value in the target table and this request doesn\'t define that value, it will be deleted. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Replaces an existing row
     * @param param the request object
     */
    public replaceDraftTableRow(param: RowsApiReplaceDraftTableRowRequest, options?: ConfigurationOptions): Promise<HubDbTableRowV3> {
        return this.api.replaceDraftTableRow(param.tableIdOrName, param.rowId, param.hubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Sparse updates a single row in the table\'s draft version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Updates an existing row
     * @param param the request object
     */
    public updateDraftTableRowWithHttpInfo(param: RowsApiUpdateDraftTableRowRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        return this.api.updateDraftTableRowWithHttpInfo(param.tableIdOrName, param.rowId, param.hubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Sparse updates a single row in the table\'s draft version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Updates an existing row
     * @param param the request object
     */
    public updateDraftTableRow(param: RowsApiUpdateDraftTableRowRequest, options?: ConfigurationOptions): Promise<HubDbTableRowV3> {
        return this.api.updateDraftTableRow(param.tableIdOrName, param.rowId, param.hubDbTableRowV3Request,  options).toPromise();
    }

}

import { ObservableRowsBatchApi } from "./ObservableAPI";
import { RowsBatchApiRequestFactory, RowsBatchApiResponseProcessor} from "../apis/RowsBatchApi";

export interface RowsBatchApiCloneDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsBatchApicloneDraftTableRows
     */
    tableIdOrName: string
    /**
     *
     * @type BatchInputHubDbTableRowBatchCloneRequest
     * @memberof RowsBatchApicloneDraftTableRows
     */
    batchInputHubDbTableRowBatchCloneRequest: BatchInputHubDbTableRowBatchCloneRequest
}

export interface RowsBatchApiCreateDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsBatchApicreateDraftTableRows
     */
    tableIdOrName: string
    /**
     *
     * @type BatchInputHubDbTableRowV3Request
     * @memberof RowsBatchApicreateDraftTableRows
     */
    batchInputHubDbTableRowV3Request: BatchInputHubDbTableRowV3Request
}

export interface RowsBatchApiPurgeDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsBatchApipurgeDraftTableRows
     */
    tableIdOrName: string
    /**
     *
     * @type BatchInputString
     * @memberof RowsBatchApipurgeDraftTableRows
     */
    batchInputString: BatchInputString
}

export interface RowsBatchApiReadDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsBatchApireadDraftTableRows
     */
    tableIdOrName: string
    /**
     *
     * @type BatchInputString
     * @memberof RowsBatchApireadDraftTableRows
     */
    batchInputString: BatchInputString
}

export interface RowsBatchApiReadTableRowsRequest {
    /**
     * The ID or name of the table to query.
     * Defaults to: undefined
     * @type string
     * @memberof RowsBatchApireadTableRows
     */
    tableIdOrName: string
    /**
     *
     * @type BatchInputString
     * @memberof RowsBatchApireadTableRows
     */
    batchInputString: BatchInputString
}

export interface RowsBatchApiReplaceDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsBatchApireplaceDraftTableRows
     */
    tableIdOrName: string
    /**
     *
     * @type BatchInputHubDbTableRowV3BatchUpdateRequest
     * @memberof RowsBatchApireplaceDraftTableRows
     */
    batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest
}

export interface RowsBatchApiUpdateDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * Defaults to: undefined
     * @type string
     * @memberof RowsBatchApiupdateDraftTableRows
     */
    tableIdOrName: string
    /**
     *
     * @type BatchInputHubDbTableRowV3BatchUpdateRequest
     * @memberof RowsBatchApiupdateDraftTableRows
     */
    batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest
}

export class ObjectRowsBatchApi {
    private api: ObservableRowsBatchApi

    public constructor(configuration: Configuration, requestFactory?: RowsBatchApiRequestFactory, responseProcessor?: RowsBatchApiResponseProcessor) {
        this.api = new ObservableRowsBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clones rows in the draft version of the specified table, given a set of row ids. Maximum of 100 row ids per call.
     * Clone rows in batch
     * @param param the request object
     */
    public cloneDraftTableRowsWithHttpInfo(param: RowsBatchApiCloneDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3>> {
        return this.api.cloneDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputHubDbTableRowBatchCloneRequest,  options).toPromise();
    }

    /**
     * Clones rows in the draft version of the specified table, given a set of row ids. Maximum of 100 row ids per call.
     * Clone rows in batch
     * @param param the request object
     */
    public cloneDraftTableRows(param: RowsBatchApiCloneDraftTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3> {
        return this.api.cloneDraftTableRows(param.tableIdOrName, param.batchInputHubDbTableRowBatchCloneRequest,  options).toPromise();
    }

    /**
     * Creates rows in the draft version of the specified table, given an array of row objects. Maximum of 100 row object per call. See the overview section for more details with an example.
     * Create rows in batch
     * @param param the request object
     */
    public createDraftTableRowsWithHttpInfo(param: RowsBatchApiCreateDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        return this.api.createDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputHubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Creates rows in the draft version of the specified table, given an array of row objects. Maximum of 100 row object per call. See the overview section for more details with an example.
     * Create rows in batch
     * @param param the request object
     */
    public createDraftTableRows(param: RowsBatchApiCreateDraftTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        return this.api.createDraftTableRows(param.tableIdOrName, param.batchInputHubDbTableRowV3Request,  options).toPromise();
    }

    /**
     * Permanently deletes rows from the draft version of the table, given a set of row IDs. Maximum of 100 row IDs per call.
     * Permanently deletes rows
     * @param param the request object
     */
    public purgeDraftTableRowsWithHttpInfo(param: RowsBatchApiPurgeDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.purgeDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Permanently deletes rows from the draft version of the table, given a set of row IDs. Maximum of 100 row IDs per call.
     * Permanently deletes rows
     * @param param the request object
     */
    public purgeDraftTableRows(param: RowsBatchApiPurgeDraftTableRowsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.purgeDraftTableRows(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table, given a set of row IDs.
     * Get a set of rows from draft table
     * @param param the request object
     */
    public readDraftTableRowsWithHttpInfo(param: RowsBatchApiReadDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        return this.api.readDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table, given a set of row IDs.
     * Get a set of rows from draft table
     * @param param the request object
     */
    public readDraftTableRows(param: RowsBatchApiReadDraftTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        return this.api.readDraftTableRows(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Returns rows in the published version of the specified table, given a set of row IDs. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get a set of rows
     * @param param the request object
     */
    public readTableRowsWithHttpInfo(param: RowsBatchApiReadTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        return this.api.readTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Returns rows in the published version of the specified table, given a set of row IDs. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get a set of rows
     * @param param the request object
     */
    public readTableRows(param: RowsBatchApiReadTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        return this.api.readTableRows(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Replaces multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param param the request object
     */
    public replaceDraftTableRowsWithHttpInfo(param: RowsBatchApiReplaceDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        return this.api.replaceDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputHubDbTableRowV3BatchUpdateRequest,  options).toPromise();
    }

    /**
     * Replaces multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param param the request object
     */
    public replaceDraftTableRows(param: RowsBatchApiReplaceDraftTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        return this.api.replaceDraftTableRows(param.tableIdOrName, param.batchInputHubDbTableRowV3BatchUpdateRequest,  options).toPromise();
    }

    /**
     * Updates multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param param the request object
     */
    public updateDraftTableRowsWithHttpInfo(param: RowsBatchApiUpdateDraftTableRowsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        return this.api.updateDraftTableRowsWithHttpInfo(param.tableIdOrName, param.batchInputHubDbTableRowV3BatchUpdateRequest,  options).toPromise();
    }

    /**
     * Updates multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param param the request object
     */
    public updateDraftTableRows(param: RowsBatchApiUpdateDraftTableRowsRequest, options?: ConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        return this.api.updateDraftTableRows(param.tableIdOrName, param.batchInputHubDbTableRowV3BatchUpdateRequest,  options).toPromise();
    }

}

import { ObservableTablesApi } from "./ObservableAPI";
import { TablesApiRequestFactory, TablesApiResponseProcessor} from "../apis/TablesApi";

export interface TablesApiArchiveTableRequest {
    /**
     * The ID or name of the table to archive.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiarchiveTable
     */
    tableIdOrName: string
}

export interface TablesApiCloneDraftTableRequest {
    /**
     * The ID or name of the table to clone.
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
     * The ID or name of the table to export.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiexportDraftTable
     */
    tableIdOrName: string
    /**
     * The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiexportDraftTable
     */
    format?: string
}

export interface TablesApiExportTableRequest {
    /**
     * The ID or name of the table to export.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiexportTable
     */
    tableIdOrName: string
    /**
     * The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiexportTable
     */
    format?: string
}

export interface TablesApiGetAllDraftTablesRequest {
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TablesApigetAllDraftTables
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetAllDraftTables
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 1000.
     * Defaults to: undefined
     * @type number
     * @memberof TablesApigetAllDraftTables
     */
    limit?: number
    /**
     * Only return tables created at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    createdAt?: Date
    /**
     * Only return tables created after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    createdAfter?: Date
    /**
     * Only return tables created before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    createdBefore?: Date
    /**
     * Only return tables last updated at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    updatedAt?: Date
    /**
     * Only return tables last updated after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    updatedAfter?: Date
    /**
     * Only return tables last updated before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    updatedBefore?: Date
    /**
     *
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetAllDraftTables
     */
    contentType?: string
    /**
     * Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetAllDraftTables
     */
    archived?: boolean
    /**
     *
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetAllDraftTables
     */
    isGetLocalizedSchema?: boolean
}

export interface TablesApiGetAllTablesRequest {
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof TablesApigetAllTables
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetAllTables
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 1000.
     * Defaults to: undefined
     * @type number
     * @memberof TablesApigetAllTables
     */
    limit?: number
    /**
     * Only return tables created at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    createdAt?: Date
    /**
     * Only return tables created after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    createdAfter?: Date
    /**
     * Only return tables created before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    createdBefore?: Date
    /**
     * Only return tables last updated at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    updatedAt?: Date
    /**
     * Only return tables last updated after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    updatedAfter?: Date
    /**
     * Only return tables last updated before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof TablesApigetAllTables
     */
    updatedBefore?: Date
    /**
     *
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetAllTables
     */
    contentType?: string
    /**
     * Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetAllTables
     */
    archived?: boolean
    /**
     *
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetAllTables
     */
    isGetLocalizedSchema?: boolean
}

export interface TablesApiGetDraftTableDetailsByIdRequest {
    /**
     * The ID or name of the table to return.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetDraftTableDetailsById
     */
    tableIdOrName: string
    /**
     *
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetDraftTableDetailsById
     */
    isGetLocalizedSchema?: boolean
    /**
     * Set this to &#x60;true&#x60; to return an archived table. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetDraftTableDetailsById
     */
    archived?: boolean
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetDraftTableDetailsById
     */
    includeForeignIds?: boolean
}

export interface TablesApiGetTableDetailsRequest {
    /**
     * The ID or name of the table to return.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApigetTableDetails
     */
    tableIdOrName: string
    /**
     *
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetTableDetails
     */
    isGetLocalizedSchema?: boolean
    /**
     * Set this to &#x60;true&#x60; to return details for an archived table. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetTableDetails
     */
    archived?: boolean
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApigetTableDetails
     */
    includeForeignIds?: boolean
}

export interface TablesApiImportDraftTableRequest {
    /**
     * The ID of the destination table where data will be imported.
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
     * The ID or name of the table to publish.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApipublishDraftTable
     */
    tableIdOrName: string
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApipublishDraftTable
     */
    includeForeignIds?: boolean
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
     * The ID or name of the table to reset.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiresetDraftTable
     */
    tableIdOrName: string
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApiresetDraftTable
     */
    includeForeignIds?: boolean
}

export interface TablesApiUnpublishTableRequest {
    /**
     * The ID or name of the table to publish.
     * Defaults to: undefined
     * @type string
     * @memberof TablesApiunpublishTable
     */
    tableIdOrName: string
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApiunpublishTable
     */
    includeForeignIds?: boolean
}

export interface TablesApiUpdateDraftTableRequest {
    /**
     * The ID or name of the table to update.
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
     *
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApiupdateDraftTable
     */
    isGetLocalizedSchema?: boolean
    /**
     * Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApiupdateDraftTable
     */
    archived?: boolean
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     * Defaults to: undefined
     * @type boolean
     * @memberof TablesApiupdateDraftTable
     */
    includeForeignIds?: boolean
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
     * Create a new table
     * @param param the request object
     */
    public createTableWithHttpInfo(param: TablesApiCreateTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.createTableWithHttpInfo(param.hubDbTableV3Request,  options).toPromise();
    }

    /**
     * Creates a new draft HubDB table given a JSON schema. The table name and label should be unique for each account.
     * Create a new table
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
    public getAllDraftTablesWithHttpInfo(param: TablesApiGetAllDraftTablesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalHubDbTableV3ForwardPaging>> {
        return this.api.getAllDraftTablesWithHttpInfo(param.sort, param.after, param.limit, param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.contentType, param.archived, param.isGetLocalizedSchema,  options).toPromise();
    }

    /**
     * Returns the details for each draft table defined in the specified account, including column definitions.
     * Return all draft tables
     * @param param the request object
     */
    public getAllDraftTables(param: TablesApiGetAllDraftTablesRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging> {
        return this.api.getAllDraftTables(param.sort, param.after, param.limit, param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.contentType, param.archived, param.isGetLocalizedSchema,  options).toPromise();
    }

    /**
     * Returns the details for the published version of each table defined in an account, including column definitions.
     * Get all published tables
     * @param param the request object
     */
    public getAllTablesWithHttpInfo(param: TablesApiGetAllTablesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalHubDbTableV3ForwardPaging>> {
        return this.api.getAllTablesWithHttpInfo(param.sort, param.after, param.limit, param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.contentType, param.archived, param.isGetLocalizedSchema,  options).toPromise();
    }

    /**
     * Returns the details for the published version of each table defined in an account, including column definitions.
     * Get all published tables
     * @param param the request object
     */
    public getAllTables(param: TablesApiGetAllTablesRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging> {
        return this.api.getAllTables(param.sort, param.after, param.limit, param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.contentType, param.archived, param.isGetLocalizedSchema,  options).toPromise();
    }

    /**
     * Get the details for the draft version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param param the request object
     */
    public getDraftTableDetailsByIdWithHttpInfo(param: TablesApiGetDraftTableDetailsByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.getDraftTableDetailsByIdWithHttpInfo(param.tableIdOrName, param.isGetLocalizedSchema, param.archived, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Get the details for the draft version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param param the request object
     */
    public getDraftTableDetailsById(param: TablesApiGetDraftTableDetailsByIdRequest, options?: ConfigurationOptions): Promise<HubDbTableV3> {
        return this.api.getDraftTableDetailsById(param.tableIdOrName, param.isGetLocalizedSchema, param.archived, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Returns the details for the published version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table.  **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access. To do so, you\'ll need to include the HubSpot account ID in a `portalId` query parameter.
     * Get details of a published table
     * @param param the request object
     */
    public getTableDetailsWithHttpInfo(param: TablesApiGetTableDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.getTableDetailsWithHttpInfo(param.tableIdOrName, param.isGetLocalizedSchema, param.archived, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Returns the details for the published version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table.  **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access. To do so, you\'ll need to include the HubSpot account ID in a `portalId` query parameter.
     * Get details of a published table
     * @param param the request object
     */
    public getTableDetails(param: TablesApiGetTableDetailsRequest, options?: ConfigurationOptions): Promise<HubDbTableV3> {
        return this.api.getTableDetails(param.tableIdOrName, param.isGetLocalizedSchema, param.archived, param.includeForeignIds,  options).toPromise();
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
     * Reset a draft table
     * @param param the request object
     */
    public resetDraftTableWithHttpInfo(param: TablesApiResetDraftTableRequest, options?: ConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        return this.api.resetDraftTableWithHttpInfo(param.tableIdOrName, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Replaces the data in the draft version of the table with values from the published version. Any unpublished changes in the draft will be lost after this call is made.
     * Reset a draft table
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
        return this.api.updateDraftTableWithHttpInfo(param.tableIdOrName, param.hubDbTableV3Request, param.isGetLocalizedSchema, param.archived, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table as well as restore an archived table. Tables updated using the endpoint will only modify the draft verion of the table. Use the `/publish` endpoint to push all the changes to the published version. To restore a table, include the query parameter `archived=true` and `\"archived\": false` in the json body. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
     * Update an existing table
     * @param param the request object
     */
    public updateDraftTable(param: TablesApiUpdateDraftTableRequest, options?: ConfigurationOptions): Promise<HubDbTableV3> {
        return this.api.updateDraftTable(param.tableIdOrName, param.hubDbTableV3Request, param.isGetLocalizedSchema, param.archived, param.includeForeignIds,  options).toPromise();
    }

}
