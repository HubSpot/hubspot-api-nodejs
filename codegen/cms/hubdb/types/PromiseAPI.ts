import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
     * Clones a single row in the draft version of a table.
     * Clone a row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param [name] 
     */
    public cloneDraftTableRowWithHttpInfo(tableIdOrName: string, rowId: string, name?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cloneDraftTableRowWithHttpInfo(tableIdOrName, rowId, name, observableOptions);
        return result.toPromise();
    }

    /**
     * Clones a single row in the draft version of a table.
     * Clone a row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param [name] 
     */
    public cloneDraftTableRow(tableIdOrName: string, rowId: string, name?: string, _options?: PromiseConfigurationOptions): Promise<HubDbTableRowV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cloneDraftTableRow(tableIdOrName, rowId, name, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a new row to a HubDB table. New rows will be added to the draft version of the table. Use the `/publish` endpoint to push these changes to published version.
     * Add a new row to a table
     * @param tableIdOrName The ID or name of the target table.
     * @param hubDbTableRowV3Request
     */
    public createTableRowWithHttpInfo(tableIdOrName: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createTableRowWithHttpInfo(tableIdOrName, hubDbTableRowV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a new row to a HubDB table. New rows will be added to the draft version of the table. Use the `/publish` endpoint to push these changes to published version.
     * Add a new row to a table
     * @param tableIdOrName The ID or name of the target table.
     * @param hubDbTableRowV3Request
     */
    public createTableRow(tableIdOrName: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<HubDbTableRowV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createTableRow(tableIdOrName, hubDbTableRowV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a single row by ID from a table\'s draft version.
     * Get a row from the draft table
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param [archived] 
     */
    public getDraftTableRowByIdWithHttpInfo(tableIdOrName: string, rowId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getDraftTableRowByIdWithHttpInfo(tableIdOrName, rowId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a single row by ID from a table\'s draft version.
     * Get a row from the draft table
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param [archived] 
     */
    public getDraftTableRowById(tableIdOrName: string, rowId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableRowV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getDraftTableRowById(tableIdOrName, rowId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a single row by ID from the published version of a table. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param [archived] 
     */
    public getTableRowWithHttpInfo(tableIdOrName: string, rowId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getTableRowWithHttpInfo(tableIdOrName, rowId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a single row by ID from the published version of a table. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param [archived] 
     */
    public getTableRow(tableIdOrName: string, rowId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableRowV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getTableRow(tableIdOrName, rowId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a set of rows in the published version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api-reference/cms-hubdb-v3/guide#filter-returned-rows) for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param tableIdOrName The ID or name of the table to query.
     * @param [sort] Specifies the column names to sort the results by. See the above description for more details.
     * @param [after] The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @param [properties] Specify the column names to get results containing only the required columns instead of all column details.
     * @param [offset] 
     * @param [archived] 
     */
    public getTableRowsWithHttpInfo(tableIdOrName: string, sort?: Array<string>, after?: string, limit?: number, properties?: Array<string>, offset?: number, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getTableRowsWithHttpInfo(tableIdOrName, sort, after, limit, properties, offset, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a set of rows in the published version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api-reference/cms-hubdb-v3/guide#filter-returned-rows) for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param tableIdOrName The ID or name of the table to query.
     * @param [sort] Specifies the column names to sort the results by. See the above description for more details.
     * @param [after] The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @param [properties] Specify the column names to get results containing only the required columns instead of all column details.
     * @param [offset] 
     * @param [archived] 
     */
    public getTableRows(tableIdOrName: string, sort?: Array<string>, after?: string, limit?: number, properties?: Array<string>, offset?: number, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getTableRows(tableIdOrName, sort, after, limit, properties, offset, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Permanently deletes a row from a table\'s draft version.
     * Permanently deletes a row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     */
    public purgeDraftTableRowWithHttpInfo(tableIdOrName: string, rowId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.purgeDraftTableRowWithHttpInfo(tableIdOrName, rowId, observableOptions);
        return result.toPromise();
    }

    /**
     * Permanently deletes a row from a table\'s draft version.
     * Permanently deletes a row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     */
    public purgeDraftTableRow(tableIdOrName: string, rowId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.purgeDraftTableRow(tableIdOrName, rowId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api-reference/cms-hubdb-v3/guide#filter-returned-rows) for detailed filtering and sorting options.
     * Get rows from draft table
     * @param tableIdOrName The ID or name of the table to query.
     * @param [sort] Specifies the column names to sort the results by.
     * @param [after] The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @param [properties] Specify the column names to get results containing only the required columns instead of all column details. If you want to include multiple columns in the result, use this query param as many times. 
     * @param [offset] 
     * @param [archived] 
     */
    public readDraftTableRowsWithHttpInfo(tableIdOrName: string, sort?: Array<string>, after?: string, limit?: number, properties?: Array<string>, offset?: number, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.readDraftTableRowsWithHttpInfo(tableIdOrName, sort, after, limit, properties, offset, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api-reference/cms-hubdb-v3/guide#filter-returned-rows) for detailed filtering and sorting options.
     * Get rows from draft table
     * @param tableIdOrName The ID or name of the table to query.
     * @param [sort] Specifies the column names to sort the results by.
     * @param [after] The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @param [properties] Specify the column names to get results containing only the required columns instead of all column details. If you want to include multiple columns in the result, use this query param as many times. 
     * @param [offset] 
     * @param [archived] 
     */
    public readDraftTableRows(tableIdOrName: string, sort?: Array<string>, after?: string, limit?: number, properties?: Array<string>, offset?: number, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.readDraftTableRows(tableIdOrName, sort, after, limit, properties, offset, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace a single row in the draft version of a table. All column values must be specified. If a column has a value in the target table and this request doesn\'t define that value, it will be deleted. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Replaces an existing row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param hubDbTableRowV3Request
     */
    public replaceDraftTableRowWithHttpInfo(tableIdOrName: string, rowId: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.replaceDraftTableRowWithHttpInfo(tableIdOrName, rowId, hubDbTableRowV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace a single row in the draft version of a table. All column values must be specified. If a column has a value in the target table and this request doesn\'t define that value, it will be deleted. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Replaces an existing row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param hubDbTableRowV3Request
     */
    public replaceDraftTableRow(tableIdOrName: string, rowId: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<HubDbTableRowV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.replaceDraftTableRow(tableIdOrName, rowId, hubDbTableRowV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Sparse updates a single row in the table\'s draft version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Updates an existing row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param hubDbTableRowV3Request
     */
    public updateDraftTableRowWithHttpInfo(tableIdOrName: string, rowId: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDraftTableRowWithHttpInfo(tableIdOrName, rowId, hubDbTableRowV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Sparse updates a single row in the table\'s draft version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Updates an existing row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param hubDbTableRowV3Request
     */
    public updateDraftTableRow(tableIdOrName: string, rowId: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<HubDbTableRowV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDraftTableRow(tableIdOrName, rowId, hubDbTableRowV3Request, observableOptions);
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
     * Clones rows in the draft version of the specified table, given a set of row ids. Maximum of 100 row ids per call.
     * Clone rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowBatchCloneRequest
     */
    public cloneDraftTableRowsWithHttpInfo(tableIdOrName: string, batchInputHubDbTableRowBatchCloneRequest: BatchInputHubDbTableRowBatchCloneRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cloneDraftTableRowsWithHttpInfo(tableIdOrName, batchInputHubDbTableRowBatchCloneRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Clones rows in the draft version of the specified table, given a set of row ids. Maximum of 100 row ids per call.
     * Clone rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowBatchCloneRequest
     */
    public cloneDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowBatchCloneRequest: BatchInputHubDbTableRowBatchCloneRequest, _options?: PromiseConfigurationOptions): Promise<BatchResponseHubDbTableRowV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cloneDraftTableRows(tableIdOrName, batchInputHubDbTableRowBatchCloneRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates rows in the draft version of the specified table, given an array of row objects. Maximum of 100 row object per call. See the overview section for more details with an example.
     * Create rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3Request
     */
    public createDraftTableRowsWithHttpInfo(tableIdOrName: string, batchInputHubDbTableRowV3Request: BatchInputHubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createDraftTableRowsWithHttpInfo(tableIdOrName, batchInputHubDbTableRowV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates rows in the draft version of the specified table, given an array of row objects. Maximum of 100 row object per call. See the overview section for more details with an example.
     * Create rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3Request
     */
    public createDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3Request: BatchInputHubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createDraftTableRows(tableIdOrName, batchInputHubDbTableRowV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Permanently deletes rows from the draft version of the table, given a set of row IDs. Maximum of 100 row IDs per call.
     * Permanently deletes rows
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString
     */
    public purgeDraftTableRowsWithHttpInfo(tableIdOrName: string, batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.purgeDraftTableRowsWithHttpInfo(tableIdOrName, batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Permanently deletes rows from the draft version of the table, given a set of row IDs. Maximum of 100 row IDs per call.
     * Permanently deletes rows
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString
     */
    public purgeDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.purgeDraftTableRows(tableIdOrName, batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table, given a set of row IDs.
     * Get a set of rows from draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString
     */
    public readDraftTableRowsWithHttpInfo(tableIdOrName: string, batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.readDraftTableRowsWithHttpInfo(tableIdOrName, batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table, given a set of row IDs.
     * Get a set of rows from draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString
     */
    public readDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.readDraftTableRows(tableIdOrName, batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns rows in the published version of the specified table, given a set of row IDs. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get a set of rows
     * @param tableIdOrName The ID or name of the table to query.
     * @param batchInputString
     */
    public readTableRowsWithHttpInfo(tableIdOrName: string, batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.readTableRowsWithHttpInfo(tableIdOrName, batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns rows in the published version of the specified table, given a set of row IDs. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get a set of rows
     * @param tableIdOrName The ID or name of the table to query.
     * @param batchInputString
     */
    public readTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.readTableRows(tableIdOrName, batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3BatchUpdateRequest
     */
    public replaceDraftTableRowsWithHttpInfo(tableIdOrName: string, batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.replaceDraftTableRowsWithHttpInfo(tableIdOrName, batchInputHubDbTableRowV3BatchUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3BatchUpdateRequest
     */
    public replaceDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest, _options?: PromiseConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.replaceDraftTableRows(tableIdOrName, batchInputHubDbTableRowV3BatchUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3BatchUpdateRequest
     */
    public updateDraftTableRowsWithHttpInfo(tableIdOrName: string, batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDraftTableRowsWithHttpInfo(tableIdOrName, batchInputHubDbTableRowV3BatchUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3BatchUpdateRequest
     */
    public updateDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest, _options?: PromiseConfigurationOptions): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDraftTableRows(tableIdOrName, batchInputHubDbTableRowV3BatchUpdateRequest, observableOptions);
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
     * Archive (soft delete) an existing HubDB table. This archives both the published and draft versions.
     * Archive a table
     * @param tableIdOrName The ID or name of the table to archive.
     */
    public archiveTableWithHttpInfo(tableIdOrName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveTableWithHttpInfo(tableIdOrName, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive (soft delete) an existing HubDB table. This archives both the published and draft versions.
     * Archive a table
     * @param tableIdOrName The ID or name of the table to archive.
     */
    public archiveTable(tableIdOrName: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveTable(tableIdOrName, observableOptions);
        return result.toPromise();
    }

    /**
     * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can be sent as JSON in the request body. This will create the cloned table as a draft.
     * Clone a table
     * @param tableIdOrName The ID or name of the table to clone.
     * @param hubDbTableCloneRequest
     */
    public cloneDraftTableWithHttpInfo(tableIdOrName: string, hubDbTableCloneRequest: HubDbTableCloneRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cloneDraftTableWithHttpInfo(tableIdOrName, hubDbTableCloneRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can be sent as JSON in the request body. This will create the cloned table as a draft.
     * Clone a table
     * @param tableIdOrName The ID or name of the table to clone.
     * @param hubDbTableCloneRequest
     */
    public cloneDraftTable(tableIdOrName: string, hubDbTableCloneRequest: HubDbTableCloneRequest, _options?: PromiseConfigurationOptions): Promise<HubDbTableV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cloneDraftTable(tableIdOrName, hubDbTableCloneRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new draft HubDB table given a JSON schema. The table name and label should be unique for each account.
     * Create a new table
     * @param hubDbTableV3Request
     */
    public createTableWithHttpInfo(hubDbTableV3Request: HubDbTableV3Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createTableWithHttpInfo(hubDbTableV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new draft HubDB table given a JSON schema. The table name and label should be unique for each account.
     * Create a new table
     * @param hubDbTableV3Request
     */
    public createTable(hubDbTableV3Request: HubDbTableV3Request, _options?: PromiseConfigurationOptions): Promise<HubDbTableV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createTable(hubDbTableV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Exports the draft version of a table to CSV / EXCEL format.
     * Export a draft table
     * @param tableIdOrName The ID or name of the table to export.
     * @param [format] The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    public exportDraftTableWithHttpInfo(tableIdOrName: string, format?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.exportDraftTableWithHttpInfo(tableIdOrName, format, observableOptions);
        return result.toPromise();
    }

    /**
     * Exports the draft version of a table to CSV / EXCEL format.
     * Export a draft table
     * @param tableIdOrName The ID or name of the table to export.
     * @param [format] The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    public exportDraftTable(tableIdOrName: string, format?: string, _options?: PromiseConfigurationOptions): Promise<HttpFile> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.exportDraftTable(tableIdOrName, format, observableOptions);
        return result.toPromise();
    }

    /**
     * Exports the published version of a table in a specified format.
     * Export a published version of a table
     * @param tableIdOrName The ID or name of the table to export.
     * @param [format] The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    public exportTableWithHttpInfo(tableIdOrName: string, format?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.exportTableWithHttpInfo(tableIdOrName, format, observableOptions);
        return result.toPromise();
    }

    /**
     * Exports the published version of a table in a specified format.
     * Export a published version of a table
     * @param tableIdOrName The ID or name of the table to export.
     * @param [format] The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    public exportTable(tableIdOrName: string, format?: string, _options?: PromiseConfigurationOptions): Promise<HttpFile> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.exportTable(tableIdOrName, format, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for each draft table defined in the specified account, including column definitions.
     * Return all draft tables
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [after] The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is 1000.
     * @param [createdAt] Only return tables created at exactly the specified time.
     * @param [createdAfter] Only return tables created after the specified time.
     * @param [createdBefore] Only return tables created before the specified time.
     * @param [updatedAt] Only return tables last updated at exactly the specified time.
     * @param [updatedAfter] Only return tables last updated after the specified time.
     * @param [updatedBefore] Only return tables last updated before the specified time.
     * @param [contentType] 
     * @param [archived] Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     */
    public getAllDraftTablesWithHttpInfo(sort?: Array<string>, after?: string, limit?: number, createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, contentType?: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalHubDbTableV3ForwardPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllDraftTablesWithHttpInfo(sort, after, limit, createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, contentType, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for each draft table defined in the specified account, including column definitions.
     * Return all draft tables
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [after] The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is 1000.
     * @param [createdAt] Only return tables created at exactly the specified time.
     * @param [createdAfter] Only return tables created after the specified time.
     * @param [createdBefore] Only return tables created before the specified time.
     * @param [updatedAt] Only return tables last updated at exactly the specified time.
     * @param [updatedAfter] Only return tables last updated after the specified time.
     * @param [updatedBefore] Only return tables last updated before the specified time.
     * @param [contentType] 
     * @param [archived] Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     */
    public getAllDraftTables(sort?: Array<string>, after?: string, limit?: number, createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, contentType?: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllDraftTables(sort, after, limit, createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, contentType, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for the published version of each table defined in an account, including column definitions.
     * Get all published tables
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [after] The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is 1000.
     * @param [createdAt] Only return tables created at exactly the specified time.
     * @param [createdAfter] Only return tables created after the specified time.
     * @param [createdBefore] Only return tables created before the specified time.
     * @param [updatedAt] Only return tables last updated at exactly the specified time.
     * @param [updatedAfter] Only return tables last updated after the specified time.
     * @param [updatedBefore] Only return tables last updated before the specified time.
     * @param [contentType] 
     * @param [archived] Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     */
    public getAllTablesWithHttpInfo(sort?: Array<string>, after?: string, limit?: number, createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, contentType?: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalHubDbTableV3ForwardPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllTablesWithHttpInfo(sort, after, limit, createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, contentType, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for the published version of each table defined in an account, including column definitions.
     * Get all published tables
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [after] The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is 1000.
     * @param [createdAt] Only return tables created at exactly the specified time.
     * @param [createdAfter] Only return tables created after the specified time.
     * @param [createdBefore] Only return tables created before the specified time.
     * @param [updatedAt] Only return tables last updated at exactly the specified time.
     * @param [updatedAfter] Only return tables last updated after the specified time.
     * @param [updatedBefore] Only return tables last updated before the specified time.
     * @param [contentType] 
     * @param [archived] Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     */
    public getAllTables(sort?: Array<string>, after?: string, limit?: number, createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, contentType?: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllTables(sort, after, limit, createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, contentType, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the details for the draft version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param tableIdOrName The ID or name of the table to return.
     * @param [isGetLocalizedSchema] 
     * @param [archived] Set this to &#x60;true&#x60; to return an archived table. Defaults to &#x60;false&#x60;.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public getDraftTableDetailsByIdWithHttpInfo(tableIdOrName: string, isGetLocalizedSchema?: boolean, archived?: boolean, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getDraftTableDetailsByIdWithHttpInfo(tableIdOrName, isGetLocalizedSchema, archived, includeForeignIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the details for the draft version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param tableIdOrName The ID or name of the table to return.
     * @param [isGetLocalizedSchema] 
     * @param [archived] Set this to &#x60;true&#x60; to return an archived table. Defaults to &#x60;false&#x60;.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public getDraftTableDetailsById(tableIdOrName: string, isGetLocalizedSchema?: boolean, archived?: boolean, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getDraftTableDetailsById(tableIdOrName, isGetLocalizedSchema, archived, includeForeignIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for the published version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table.  **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access. To do so, you\'ll need to include the HubSpot account ID in a `portalId` query parameter.
     * Get details of a published table
     * @param tableIdOrName The ID or name of the table to return.
     * @param [isGetLocalizedSchema] 
     * @param [archived] Set this to &#x60;true&#x60; to return details for an archived table. Defaults to &#x60;false&#x60;.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public getTableDetailsWithHttpInfo(tableIdOrName: string, isGetLocalizedSchema?: boolean, archived?: boolean, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getTableDetailsWithHttpInfo(tableIdOrName, isGetLocalizedSchema, archived, includeForeignIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for the published version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table.  **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access. To do so, you\'ll need to include the HubSpot account ID in a `portalId` query parameter.
     * Get details of a published table
     * @param tableIdOrName The ID or name of the table to return.
     * @param [isGetLocalizedSchema] 
     * @param [archived] Set this to &#x60;true&#x60; to return details for an archived table. Defaults to &#x60;false&#x60;.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public getTableDetails(tableIdOrName: string, isGetLocalizedSchema?: boolean, archived?: boolean, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getTableDetails(tableIdOrName, isGetLocalizedSchema, archived, includeForeignIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the draft version of the table. Use the `/publish` endpoint to push these changes to the published version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the [overview section](https://developers.hubspot.com/docs/api-reference/cms-hubdb-v3/guide#import-rows-from-csv) to check the details and format of the JSON-formatted options for the import.
     * Import data into draft table
     * @param tableIdOrName The ID of the destination table where data will be imported.
     * @param [config]
     * @param [file]
     */
    public importDraftTableWithHttpInfo(tableIdOrName: string, config?: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ImportResult>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.importDraftTableWithHttpInfo(tableIdOrName, config, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the draft version of the table. Use the `/publish` endpoint to push these changes to the published version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the [overview section](https://developers.hubspot.com/docs/api-reference/cms-hubdb-v3/guide#import-rows-from-csv) to check the details and format of the JSON-formatted options for the import.
     * Import data into draft table
     * @param tableIdOrName The ID of the destination table where data will be imported.
     * @param [config]
     * @param [file]
     */
    public importDraftTable(tableIdOrName: string, config?: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<ImportResult> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.importDraftTable(tableIdOrName, config, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Publishes the table by copying the data and table schema changes from draft version to the published version, meaning any website pages using data from the table will be updated.
     * Publish a table from draft
     * @param tableIdOrName The ID or name of the table to publish.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public publishDraftTableWithHttpInfo(tableIdOrName: string, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.publishDraftTableWithHttpInfo(tableIdOrName, includeForeignIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Publishes the table by copying the data and table schema changes from draft version to the published version, meaning any website pages using data from the table will be updated.
     * Publish a table from draft
     * @param tableIdOrName The ID or name of the table to publish.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public publishDraftTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.publishDraftTable(tableIdOrName, includeForeignIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the data in the draft version of the table with values from the published version. Any unpublished changes in the draft will be lost after this call is made.
     * Reset a draft table
     * @param tableIdOrName The ID or name of the table to reset.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public resetDraftTableWithHttpInfo(tableIdOrName: string, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.resetDraftTableWithHttpInfo(tableIdOrName, includeForeignIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the data in the draft version of the table with values from the published version. Any unpublished changes in the draft will be lost after this call is made.
     * Reset a draft table
     * @param tableIdOrName The ID or name of the table to reset.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public resetDraftTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.resetDraftTable(tableIdOrName, includeForeignIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Unpublishes the table, meaning any website pages using data from the table will not render any data.
     * Unpublish a table
     * @param tableIdOrName The ID or name of the table to publish.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public unpublishTableWithHttpInfo(tableIdOrName: string, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.unpublishTableWithHttpInfo(tableIdOrName, includeForeignIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Unpublishes the table, meaning any website pages using data from the table will not render any data.
     * Unpublish a table
     * @param tableIdOrName The ID or name of the table to publish.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public unpublishTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.unpublishTable(tableIdOrName, includeForeignIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table as well as restore an archived table. Tables updated using the endpoint will only modify the draft verion of the table. Use the `/publish` endpoint to push all the changes to the published version. To restore a table, include the query parameter `archived=true` and `\"archived\": false` in the json body. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
     * Update an existing table
     * @param tableIdOrName The ID or name of the table to update.
     * @param hubDbTableV3Request
     * @param [isGetLocalizedSchema] 
     * @param [archived] Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public updateDraftTableWithHttpInfo(tableIdOrName: string, hubDbTableV3Request: HubDbTableV3Request, isGetLocalizedSchema?: boolean, archived?: boolean, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDraftTableWithHttpInfo(tableIdOrName, hubDbTableV3Request, isGetLocalizedSchema, archived, includeForeignIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table as well as restore an archived table. Tables updated using the endpoint will only modify the draft verion of the table. Use the `/publish` endpoint to push all the changes to the published version. To restore a table, include the query parameter `archived=true` and `\"archived\": false` in the json body. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
     * Update an existing table
     * @param tableIdOrName The ID or name of the table to update.
     * @param hubDbTableV3Request
     * @param [isGetLocalizedSchema] 
     * @param [archived] Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     * @param [includeForeignIds] Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public updateDraftTable(tableIdOrName: string, hubDbTableV3Request: HubDbTableV3Request, isGetLocalizedSchema?: boolean, archived?: boolean, includeForeignIds?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableV3> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDraftTable(tableIdOrName, hubDbTableV3Request, isGetLocalizedSchema, archived, includeForeignIds, observableOptions);
        return result.toPromise();
    }


}



