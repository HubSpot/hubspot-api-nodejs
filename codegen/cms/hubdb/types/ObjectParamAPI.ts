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

import { ObservableRowsApi } from "./ObservableAPI";
import { RowsApiRequestFactory, RowsApiResponseProcessor} from "../apis/RowsApi";

export interface RowsApiCloneDraftTableRowRequest {
    /**
     * The ID of the row
     * @type string
     * @memberof RowsApicloneDraftTableRow
     */
    rowId: string
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsApicloneDraftTableRow
     */
    tableIdOrName: string
}

export interface RowsApiCreateTableRowRequest {
    /**
     * The ID or name of the target table.
     * @type string
     * @memberof RowsApicreateTableRow
     */
    tableIdOrName: string
    /**
     * The row definition JSON, formatted as described above.
     * @type HubDbTableRowV3Input
     * @memberof RowsApicreateTableRow
     */
    hubDbTableRowV3Input: HubDbTableRowV3Input
}

export interface RowsApiGetDraftTableRowByIdRequest {
    /**
     * The ID of the row
     * @type string
     * @memberof RowsApigetDraftTableRowById
     */
    rowId: string
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsApigetDraftTableRowById
     */
    tableIdOrName: string
}

export interface RowsApiGetTableRowRequest {
    /**
     * The ID of the row
     * @type string
     * @memberof RowsApigetTableRow
     */
    rowId: string
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsApigetTableRow
     */
    tableIdOrName: string
}

export interface RowsApiGetTableRowsRequest {
    /**
     * The ID or name of the table to query.
     * @type string
     * @memberof RowsApigetTableRows
     */
    tableIdOrName: string
    /**
     * Specify the column names to get results containing only the required columns instead of all column details.
     * @type Array&lt;string&gt;
     * @memberof RowsApigetTableRows
     */
    properties?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof RowsApigetTableRows
     */
    after?: string
    /**
     * The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @type number
     * @memberof RowsApigetTableRows
     */
    limit?: number
    /**
     * Specifies the column names to sort the results by. See the above description for more details.
     * @type Array&lt;string&gt;
     * @memberof RowsApigetTableRows
     */
    sort?: Array<string>
}

export interface RowsApiPurgeDraftTableRowRequest {
    /**
     * The ID of the row
     * @type string
     * @memberof RowsApipurgeDraftTableRow
     */
    rowId: string
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsApipurgeDraftTableRow
     */
    tableIdOrName: string
}

export interface RowsApiReadDraftTableRowsRequest {
    /**
     * The ID or name of the table to query.
     * @type string
     * @memberof RowsApireadDraftTableRows
     */
    tableIdOrName: string
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof RowsApireadDraftTableRows
     */
    after?: string
    /**
     * Specify the column names to get results containing only the required columns instead of all column details. If you want to include multiple columns in the result, use this query param as many times. 
     * @type Array&lt;string&gt;
     * @memberof RowsApireadDraftTableRows
     */
    properties?: Array<string>
    /**
     * The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @type number
     * @memberof RowsApireadDraftTableRows
     */
    limit?: number
    /**
     * Specifies the column names to sort the results by.
     * @type Array&lt;string&gt;
     * @memberof RowsApireadDraftTableRows
     */
    sort?: Array<string>
}

export interface RowsApiReplaceDraftTableRowRequest {
    /**
     * The ID of the row
     * @type string
     * @memberof RowsApireplaceDraftTableRow
     */
    rowId: string
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsApireplaceDraftTableRow
     */
    tableIdOrName: string
    /**
     * The JSON object of the row
     * @type HubDbTableRowV3Input
     * @memberof RowsApireplaceDraftTableRow
     */
    hubDbTableRowV3Input: HubDbTableRowV3Input
}

export interface RowsApiUpdateDraftTableRowRequest {
    /**
     * The ID of the row
     * @type string
     * @memberof RowsApiupdateDraftTableRow
     */
    rowId: string
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsApiupdateDraftTableRow
     */
    tableIdOrName: string
    /**
     * The JSON object of the row with necessary fields that needs to be updated.
     * @type HubDbTableRowV3Input
     * @memberof RowsApiupdateDraftTableRow
     */
    hubDbTableRowV3Input: HubDbTableRowV3Input
}

export class ObjectRowsApi {
    private api: ObservableRowsApi

    public constructor(configuration: Configuration, requestFactory?: RowsApiRequestFactory, responseProcessor?: RowsApiResponseProcessor) {
        this.api = new ObservableRowsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clones a single row in the `draft` version of the table.
     * Clone a row
     * @param param the request object
     */
    public cloneDraftTableRow(param: RowsApiCloneDraftTableRowRequest, options?: Configuration): Promise<HubDbTableRowV3> {
        return this.api.cloneDraftTableRow(param.rowId, param.tableIdOrName,  options).toPromise();
    }

    /**
     * Add a new row to a HubDB table. New rows will be added to the `draft` version of the table. Use `push-live` endpoint to push these changes to live version and publish them.
     * Add a new row to a table
     * @param param the request object
     */
    public createTableRow(param: RowsApiCreateTableRowRequest, options?: Configuration): Promise<HubDbTableRowV3> {
        return this.api.createTableRow(param.tableIdOrName, param.hubDbTableRowV3Input,  options).toPromise();
    }

    /**
     * Get a single row by ID from a table's `draft` version.
     * Get a row from the draft table
     * @param param the request object
     */
    public getDraftTableRowById(param: RowsApiGetDraftTableRowByIdRequest, options?: Configuration): Promise<HubDbTableRowV3> {
        return this.api.getDraftTableRowById(param.rowId, param.tableIdOrName,  options).toPromise();
    }

    /**
     * Get a single row by ID from a table's `live` version. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param param the request object
     */
    public getTableRow(param: RowsApiGetTableRowRequest, options?: Configuration): Promise<HubDbTableRowV3> {
        return this.api.getTableRow(param.rowId, param.tableIdOrName,  options).toPromise();
    }

    /**
     * Returns a set of rows in the `live` version of the specified table. Row results can be filtered and sorted. Refer to the overview section for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param param the request object
     */
    public getTableRows(param: RowsApiGetTableRowsRequest, options?: Configuration): Promise<CollectionResponseWithTotalHubDbTableRowV3ForwardPaging> {
        return this.api.getTableRows(param.tableIdOrName, param.properties, param.after, param.limit, param.sort,  options).toPromise();
    }

    /**
     * Permanently deletes a row from a table's `draft` version.
     * Permanently deletes a row
     * @param param the request object
     */
    public purgeDraftTableRow(param: RowsApiPurgeDraftTableRowRequest, options?: Configuration): Promise<void> {
        return this.api.purgeDraftTableRow(param.rowId, param.tableIdOrName,  options).toPromise();
    }

    /**
     * Returns rows in the `draft` version of the specified table. Row results can be filtered and sorted using the options mentioned in the overview section.
     * Get rows from draft table
     * @param param the request object
     */
    public readDraftTableRows(param: RowsApiReadDraftTableRowsRequest, options?: Configuration): Promise<CollectionResponseWithTotalHubDbTableRowV3ForwardPaging> {
        return this.api.readDraftTableRows(param.tableIdOrName, param.after, param.properties, param.limit, param.sort,  options).toPromise();
    }

    /**
     * Replace a single row in the table's `draft` version. All the column values must be specified. If a column has a value in the target table and this request doesn't define that value, it will be deleted. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Replaces an existing row
     * @param param the request object
     */
    public replaceDraftTableRow(param: RowsApiReplaceDraftTableRowRequest, options?: Configuration): Promise<HubDbTableRowV3> {
        return this.api.replaceDraftTableRow(param.rowId, param.tableIdOrName, param.hubDbTableRowV3Input,  options).toPromise();
    }

    /**
     * Sparse updates a single row in the table's `draft` version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Updates an existing row
     * @param param the request object
     */
    public updateDraftTableRow(param: RowsApiUpdateDraftTableRowRequest, options?: Configuration): Promise<HubDbTableRowV3> {
        return this.api.updateDraftTableRow(param.rowId, param.tableIdOrName, param.hubDbTableRowV3Input,  options).toPromise();
    }

}

import { ObservableRowsBatchApi } from "./ObservableAPI";
import { RowsBatchApiRequestFactory, RowsBatchApiResponseProcessor} from "../apis/RowsBatchApi";

export interface RowsBatchApiBatchCloneDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsBatchApibatchCloneDraftTableRows
     */
    tableIdOrName: string
    /**
     * The JSON array of row ids
     * @type BatchInputString
     * @memberof RowsBatchApibatchCloneDraftTableRows
     */
    batchInputString: BatchInputString
}

export interface RowsBatchApiBatchCreateDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsBatchApibatchCreateDraftTableRows
     */
    tableIdOrName: string
    /**
     * JSON array of row objects
     * @type BatchInputHubDbTableRowV3
     * @memberof RowsBatchApibatchCreateDraftTableRows
     */
    batchInputHubDbTableRowV3: BatchInputHubDbTableRowV3
}

export interface RowsBatchApiBatchPurgeDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsBatchApibatchPurgeDraftTableRows
     */
    tableIdOrName: string
    /**
     * JSON array of row ids.
     * @type BatchInputString
     * @memberof RowsBatchApibatchPurgeDraftTableRows
     */
    batchInputString: BatchInputString
}

export interface RowsBatchApiBatchReadDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsBatchApibatchReadDraftTableRows
     */
    tableIdOrName: string
    /**
     * JSON array of row ids.
     * @type BatchInputString
     * @memberof RowsBatchApibatchReadDraftTableRows
     */
    batchInputString: BatchInputString
}

export interface RowsBatchApiBatchReadTableRowsRequest {
    /**
     * The ID or name of the table to query.
     * @type string
     * @memberof RowsBatchApibatchReadTableRows
     */
    tableIdOrName: string
    /**
     * The JSON array of row ids
     * @type BatchInputString
     * @memberof RowsBatchApibatchReadTableRows
     */
    batchInputString: BatchInputString
}

export interface RowsBatchApiBatchReplaceDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsBatchApibatchReplaceDraftTableRows
     */
    tableIdOrName: string
    /**
     * JSON array of row objects.
     * @type BatchInputHubDbTableRowV3
     * @memberof RowsBatchApibatchReplaceDraftTableRows
     */
    batchInputHubDbTableRowV3: BatchInputHubDbTableRowV3
}

export interface RowsBatchApiBatchUpdateDraftTableRowsRequest {
    /**
     * The ID or name of the table
     * @type string
     * @memberof RowsBatchApibatchUpdateDraftTableRows
     */
    tableIdOrName: string
    /**
     * JSON array of row objects.
     * @type BatchInputJsonNode
     * @memberof RowsBatchApibatchUpdateDraftTableRows
     */
    batchInputJsonNode: BatchInputJsonNode
}

export class ObjectRowsBatchApi {
    private api: ObservableRowsBatchApi

    public constructor(configuration: Configuration, requestFactory?: RowsBatchApiRequestFactory, responseProcessor?: RowsBatchApiResponseProcessor) {
        this.api = new ObservableRowsBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clones rows in the `draft` version of the specified table, given a set of row ids.
     * Clone rows in batch
     * @param param the request object
     */
    public batchCloneDraftTableRows(param: RowsBatchApiBatchCloneDraftTableRowsRequest, options?: Configuration): Promise<any> {
        return this.api.batchCloneDraftTableRows(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Creates rows in the `draft` version of the specified table, given an array of row objects. See the overview section for more details with an example.
     * Create rows in batch
     * @param param the request object
     */
    public batchCreateDraftTableRows(param: RowsBatchApiBatchCreateDraftTableRowsRequest, options?: Configuration): Promise<BatchResponseHubDbTableRowV3WithErrors | any> {
        return this.api.batchCreateDraftTableRows(param.tableIdOrName, param.batchInputHubDbTableRowV3,  options).toPromise();
    }

    /**
     * Permanently deletes rows from the `draft` version of the table, given a set of row ids.
     * Permanently deletes rows
     * @param param the request object
     */
    public batchPurgeDraftTableRows(param: RowsBatchApiBatchPurgeDraftTableRowsRequest, options?: Configuration): Promise<void> {
        return this.api.batchPurgeDraftTableRows(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Returns rows in the `draft` version of the specified table, given a set of row ids.
     * Get a set of rows from draft table
     * @param param the request object
     */
    public batchReadDraftTableRows(param: RowsBatchApiBatchReadDraftTableRowsRequest, options?: Configuration): Promise<BatchResponseHubDbTableRowV3WithErrors | any> {
        return this.api.batchReadDraftTableRows(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Returns rows in the `live` version of the specified table, given a set of row ids. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get a set of rows
     * @param param the request object
     */
    public batchReadTableRows(param: RowsBatchApiBatchReadTableRowsRequest, options?: Configuration): Promise<BatchResponseHubDbTableRowV3WithErrors | any> {
        return this.api.batchReadTableRows(param.tableIdOrName, param.batchInputString,  options).toPromise();
    }

    /**
     * Replaces multiple rows as a batch in the `draft` version of the table. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param param the request object
     */
    public batchReplaceDraftTableRows(param: RowsBatchApiBatchReplaceDraftTableRowsRequest, options?: Configuration): Promise<BatchResponseHubDbTableRowV3WithErrors | any> {
        return this.api.batchReplaceDraftTableRows(param.tableIdOrName, param.batchInputHubDbTableRowV3,  options).toPromise();
    }

    /**
     * Updates multiple rows as a batch in the `draft` version of the table. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param param the request object
     */
    public batchUpdateDraftTableRows(param: RowsBatchApiBatchUpdateDraftTableRowsRequest, options?: Configuration): Promise<BatchResponseHubDbTableRowV3WithErrors | any> {
        return this.api.batchUpdateDraftTableRows(param.tableIdOrName, param.batchInputJsonNode,  options).toPromise();
    }

}

import { ObservableTablesApi } from "./ObservableAPI";
import { TablesApiRequestFactory, TablesApiResponseProcessor} from "../apis/TablesApi";

export interface TablesApiArchiveTableRequest {
    /**
     * The ID or name of the table to archive.
     * @type string
     * @memberof TablesApiarchiveTable
     */
    tableIdOrName: string
}

export interface TablesApiCloneDraftTableRequest {
    /**
     * The ID or name of the table to clone.
     * @type string
     * @memberof TablesApicloneDraftTable
     */
    tableIdOrName: string
    /**
     * JSON object with the properties newName and newLabel. You can set copyRows to false to clone the table with copying rows and default is true.
     * @type HubDbTableCloneRequest
     * @memberof TablesApicloneDraftTable
     */
    hubDbTableCloneRequest: HubDbTableCloneRequest
}

export interface TablesApiCreateTableRequest {
    /**
     * The JSON schema for the table being created.
     * @type HubDbTableV3Input
     * @memberof TablesApicreateTable
     */
    hubDbTableV3Input: HubDbTableV3Input
}

export interface TablesApiExportDraftTableRequest {
    /**
     * The ID or name of the table to export.
     * @type string
     * @memberof TablesApiexportDraftTable
     */
    tableIdOrName: string
    /**
     * The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     * @type string
     * @memberof TablesApiexportDraftTable
     */
    format?: string
}

export interface TablesApiExportTableRequest {
    /**
     * The ID or name of the table to export.
     * @type string
     * @memberof TablesApiexportTable
     */
    tableIdOrName: string
    /**
     * The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     * @type string
     * @memberof TablesApiexportTable
     */
    format?: string
}

export interface TablesApiGetAllDraftTablesRequest {
    /**
     * Only return tables last updated after the specified time.
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    updatedAfter?: Date
    /**
     * Only return tables last updated before the specified time.
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof TablesApigetAllDraftTables
     */
    sort?: Array<string>
    /**
     * Only return tables created at exactly the specified time.
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    createdAt?: Date
    /**
     * Only return tables created after the specified time.
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    createdAfter?: Date
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof TablesApigetAllDraftTables
     */
    after?: string
    /**
     * Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof TablesApigetAllDraftTables
     */
    archived?: boolean
    /**
     * Only return tables created before the specified time.
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    createdBefore?: Date
    /**
     * Only return tables last updated at exactly the specified time.
     * @type Date
     * @memberof TablesApigetAllDraftTables
     */
    updatedAt?: Date
    /**
     * The maximum number of results to return. Default is 1000.
     * @type number
     * @memberof TablesApigetAllDraftTables
     */
    limit?: number
}

export interface TablesApiGetAllTablesRequest {
    /**
     * Only return tables last updated after the specified time.
     * @type Date
     * @memberof TablesApigetAllTables
     */
    updatedAfter?: Date
    /**
     * Only return tables last updated before the specified time.
     * @type Date
     * @memberof TablesApigetAllTables
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof TablesApigetAllTables
     */
    sort?: Array<string>
    /**
     * Only return tables created at exactly the specified time.
     * @type Date
     * @memberof TablesApigetAllTables
     */
    createdAt?: Date
    /**
     * Only return tables created after the specified time.
     * @type Date
     * @memberof TablesApigetAllTables
     */
    createdAfter?: Date
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof TablesApigetAllTables
     */
    after?: string
    /**
     * Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof TablesApigetAllTables
     */
    archived?: boolean
    /**
     * Only return tables created before the specified time.
     * @type Date
     * @memberof TablesApigetAllTables
     */
    createdBefore?: Date
    /**
     * Only return tables last updated at exactly the specified time.
     * @type Date
     * @memberof TablesApigetAllTables
     */
    updatedAt?: Date
    /**
     * The maximum number of results to return. Default is 1000.
     * @type number
     * @memberof TablesApigetAllTables
     */
    limit?: number
}

export interface TablesApiGetDraftTableDetailsByIdRequest {
    /**
     * The ID or name of the table to return.
     * @type string
     * @memberof TablesApigetDraftTableDetailsById
     */
    tableIdOrName: string
    /**
     * Set this to &#x60;true&#x60; to return an archived table. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof TablesApigetDraftTableDetailsById
     */
    archived?: boolean
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     * @type boolean
     * @memberof TablesApigetDraftTableDetailsById
     */
    includeForeignIds?: boolean
}

export interface TablesApiGetTableDetailsRequest {
    /**
     * The ID or name of the table to return.
     * @type string
     * @memberof TablesApigetTableDetails
     */
    tableIdOrName: string
    /**
     * Set this to &#x60;true&#x60; to return details for an archived table. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof TablesApigetTableDetails
     */
    archived?: boolean
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     * @type boolean
     * @memberof TablesApigetTableDetails
     */
    includeForeignIds?: boolean
}

export interface TablesApiImportDraftTableRequest {
    /**
     * The ID of the destination table where data will be imported.
     * @type string
     * @memberof TablesApiimportDraftTable
     */
    tableIdOrName: string
    /**
     * The source CSV file to be imported.
     * @type HttpFile
     * @memberof TablesApiimportDraftTable
     */
    file?: HttpFile
    /**
     * Configuration for the import in JSON format as described above.
     * @type string
     * @memberof TablesApiimportDraftTable
     */
    config?: string
}

export interface TablesApiPublishDraftTableRequest {
    /**
     * The ID or name of the table to publish.
     * @type string
     * @memberof TablesApipublishDraftTable
     */
    tableIdOrName: string
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     * @type boolean
     * @memberof TablesApipublishDraftTable
     */
    includeForeignIds?: boolean
}

export interface TablesApiResetDraftTableRequest {
    /**
     * The ID or name of the table to reset.
     * @type string
     * @memberof TablesApiresetDraftTable
     */
    tableIdOrName: string
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     * @type boolean
     * @memberof TablesApiresetDraftTable
     */
    includeForeignIds?: boolean
}

export interface TablesApiUpdateDraftTableRequest {
    /**
     * The ID or name of the table to update.
     * @type string
     * @memberof TablesApiupdateDraftTable
     */
    tableIdOrName: string
    /**
     * The JSON schema for the table being updated.
     * @type HubDbTableV3Input
     * @memberof TablesApiupdateDraftTable
     */
    hubDbTableV3Input: HubDbTableV3Input
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     * @type boolean
     * @memberof TablesApiupdateDraftTable
     */
    includeForeignIds?: boolean
}

export interface TablesApiUpdateTableRequest {
    /**
     * The ID or name of the table to return.
     * @type string
     * @memberof TablesApiupdateTable
     */
    tableIdOrName: string
    /**
     * The JSON object as described.
     * @type HubDbTableV3LiveInput
     * @memberof TablesApiupdateTable
     */
    hubDbTableV3LiveInput: HubDbTableV3LiveInput
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof TablesApiupdateTable
     */
    archived?: boolean
    /**
     * Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     * @type boolean
     * @memberof TablesApiupdateTable
     */
    includeForeignIds?: boolean
}

export class ObjectTablesApi {
    private api: ObservableTablesApi

    public constructor(configuration: Configuration, requestFactory?: TablesApiRequestFactory, responseProcessor?: TablesApiResponseProcessor) {
        this.api = new ObservableTablesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive (soft delete) an existing HubDB table. This archives both the live and draft versions.
     * Archive a table
     * @param param the request object
     */
    public archiveTable(param: TablesApiArchiveTableRequest, options?: Configuration): Promise<void> {
        return this.api.archiveTable(param.tableIdOrName,  options).toPromise();
    }

    /**
     * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can be sent as JSON in the `body` parameter. This will create the cloned table as a `draft`.
     * Clone a table
     * @param param the request object
     */
    public cloneDraftTable(param: TablesApiCloneDraftTableRequest, options?: Configuration): Promise<HubDbTableV3> {
        return this.api.cloneDraftTable(param.tableIdOrName, param.hubDbTableCloneRequest,  options).toPromise();
    }

    /**
     * Creates a new draft HubDB table given a JSON schema. The table name and label should be unique for each account.
     * Create a new table
     * @param param the request object
     */
    public createTable(param: TablesApiCreateTableRequest, options?: Configuration): Promise<HubDbTableV3> {
        return this.api.createTable(param.hubDbTableV3Input,  options).toPromise();
    }

    /**
     * Exports the `draft` version of a table to CSV / EXCEL format.
     * Export a draft table
     * @param param the request object
     */
    public exportDraftTable(param: TablesApiExportDraftTableRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.exportDraftTable(param.tableIdOrName, param.format,  options).toPromise();
    }

    /**
     * Exports the `live` version of a table to CSV / EXCEL format.
     * Export a published version of a table
     * @param param the request object
     */
    public exportTable(param: TablesApiExportTableRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.exportTable(param.tableIdOrName, param.format,  options).toPromise();
    }

    /**
     * Returns the details for each draft table defined in the specified account, including column definitions.
     * Return all draft tables
     * @param param the request object
     */
    public getAllDraftTables(param: TablesApiGetAllDraftTablesRequest, options?: Configuration): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging> {
        return this.api.getAllDraftTables(param.updatedAfter, param.updatedBefore, param.sort, param.createdAt, param.createdAfter, param.after, param.archived, param.createdBefore, param.updatedAt, param.limit,  options).toPromise();
    }

    /**
     * Returns the details for the `live` version of each table defined in an account, including column definitions.
     * Get all live tables
     * @param param the request object
     */
    public getAllTables(param: TablesApiGetAllTablesRequest, options?: Configuration): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging> {
        return this.api.getAllTables(param.updatedAfter, param.updatedBefore, param.sort, param.createdAt, param.createdAfter, param.after, param.archived, param.createdBefore, param.updatedAt, param.limit,  options).toPromise();
    }

    /**
     * Get the details for the `draft` version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param param the request object
     */
    public getDraftTableDetailsById(param: TablesApiGetDraftTableDetailsByIdRequest, options?: Configuration): Promise<HubDbTableV3> {
        return this.api.getDraftTableDetailsById(param.tableIdOrName, param.archived, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Returns the details for the `live` version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get details for a live table
     * @param param the request object
     */
    public getTableDetails(param: TablesApiGetTableDetailsRequest, options?: Configuration): Promise<HubDbTableV3> {
        return this.api.getTableDetails(param.tableIdOrName, param.archived, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the `draft` version of the table. Use `/push-live` endpoint to push these changes to `live` version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the overview section to check the details and format of the JSON-formatted options for the import.
     * Import data into draft table
     * @param param the request object
     */
    public importDraftTable(param: TablesApiImportDraftTableRequest, options?: Configuration): Promise<ImportResult> {
        return this.api.importDraftTable(param.tableIdOrName, param.file, param.config,  options).toPromise();
    }

    /**
     * Copies the data from draft to live version of the table and also publishes the live version. This will immediately push the data to the `live` version of the table and publishes the live version, meaning any website pages using data from the table will be updated.
     * Publish a table from draft
     * @param param the request object
     */
    public publishDraftTable(param: TablesApiPublishDraftTableRequest, options?: Configuration): Promise<HubDbTableV3> {
        return this.api.publishDraftTable(param.tableIdOrName, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Replaces the data in the `draft` version of the table with values from the `live` version. Any unpublished changes in the `draft` will be lost after this call is made.
     * Reset a draft table
     * @param param the request object
     */
    public resetDraftTable(param: TablesApiResetDraftTableRequest, options?: Configuration): Promise<HubDbTableV3> {
        return this.api.resetDraftTable(param.tableIdOrName, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table. Tables updated using the endpoint will only modify the `draft` verion of the table. Use `push-live` endpoint to push all the changes to the `live` version. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
     * Update an existing table
     * @param param the request object
     */
    public updateDraftTable(param: TablesApiUpdateDraftTableRequest, options?: Configuration): Promise<HubDbTableV3> {
        return this.api.updateDraftTable(param.tableIdOrName, param.hubDbTableV3Input, param.includeForeignIds,  options).toPromise();
    }

    /**
     * Use this endpoint to perform one of the following <ul><li> Publish a live version of a table (without copying table data from draft) </li><li>Un-publish a live version of a table (Leaving the data in the live version)</li><li>Restore an archived table</li></ul>  To publish a table, send `published` property in the JSON object with the value `true`. To unpublish a table, send `published` property in the JSON object with the value `false`.  To restore an archived table, send `archived` property in the JSON object with the value `false` along with the query parameter `archived=true`. When restoring an archived table, if an active table already exists with the same `name` or `label`, you will need to change the name of the archived table when restoring it using the `name` and `label` parameters with a new name and new label. When you restore a table, the table will be restored only in the `draft` version.  Examples:  Publish live version of a table:  ```     {       \"published\": true     } ``` Unpublish live version of a table: ```     {       \"published\": false     } ``` Restore a table: (send `archived=true` in query parameters) ```     {       \"archived\": false     } ``` Restore a table with a new name: (send `archived=true` in query parameters) ```     {       \"label\": \"New Table Name\",       \"name\": \"new_table_name\",       \"archived\": false     } ```
     * Publish or unpublish a live version of a table or restore an archived table
     * @param param the request object
     */
    public updateTable(param: TablesApiUpdateTableRequest, options?: Configuration): Promise<HubDbTableV3> {
        return this.api.updateTable(param.tableIdOrName, param.hubDbTableV3LiveInput, param.archived, param.includeForeignIds,  options).toPromise();
    }

}
