import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
     * @param rowId 
     * @param tableIdOrName 
     * @param [name] 
     */
    public cloneDraftTableRowWithHttpInfo(rowId: string, tableIdOrName: string, name?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
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
        const result = this.api.cloneDraftTableRowWithHttpInfo(rowId, tableIdOrName, name, observableOptions);
        return result.toPromise();
    }

    /**
     * Clones a single row in the draft version of a table.
     * Clone a row
     * @param rowId 
     * @param tableIdOrName 
     * @param [name] 
     */
    public cloneDraftTableRow(rowId: string, tableIdOrName: string, name?: string, _options?: PromiseConfigurationOptions): Promise<HubDbTableRowV3> {
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
        const result = this.api.cloneDraftTableRow(rowId, tableIdOrName, name, observableOptions);
        return result.toPromise();
    }

    /**
     * Clones rows in the draft version of the specified table, given a set of row ids. Maximum of 100 row ids per call.
     * Clone rows in batch
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * Add a new row to a HubDB table. New rows will be added to the draft version of the table. Use the `/publish` endpoint to push these changes to published version.
     * Add a row to a table
     * @param tableIdOrName 
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
     * Add a row to a table
     * @param tableIdOrName 
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
     * @param rowId 
     * @param tableIdOrName 
     * @param [archived] Whether to return only results that have been archived.
     */
    public getDraftTableRowByIdWithHttpInfo(rowId: string, tableIdOrName: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
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
        const result = this.api.getDraftTableRowByIdWithHttpInfo(rowId, tableIdOrName, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a single row by ID from a table\'s draft version.
     * Get a row from the draft table
     * @param rowId 
     * @param tableIdOrName 
     * @param [archived] Whether to return only results that have been archived.
     */
    public getDraftTableRowById(rowId: string, tableIdOrName: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableRowV3> {
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
        const result = this.api.getDraftTableRowById(rowId, tableIdOrName, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a single row by ID from the published version of a table. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param rowId 
     * @param tableIdOrName 
     * @param [archived] Whether to return only results that have been archived.
     */
    public getTableRowWithHttpInfo(rowId: string, tableIdOrName: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
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
        const result = this.api.getTableRowWithHttpInfo(rowId, tableIdOrName, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a single row by ID from the published version of a table. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param rowId 
     * @param tableIdOrName 
     * @param [archived] Whether to return only results that have been archived.
     */
    public getTableRow(rowId: string, tableIdOrName: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableRowV3> {
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
        const result = this.api.getTableRow(rowId, tableIdOrName, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a set of rows in the published version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param tableIdOrName 
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [limit] The maximum number of results to display per page.
     * @param [offset] 
     * @param [properties] 
     * @param [sort] 
     */
    public getTableRowsWithHttpInfo(tableIdOrName: string, after?: string, archived?: boolean, limit?: number, offset?: number, properties?: Array<string>, sort?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>> {
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
        const result = this.api.getTableRowsWithHttpInfo(tableIdOrName, after, archived, limit, offset, properties, sort, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a set of rows in the published version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param tableIdOrName 
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [limit] The maximum number of results to display per page.
     * @param [offset] 
     * @param [properties] 
     * @param [sort] 
     */
    public getTableRows(tableIdOrName: string, after?: string, archived?: boolean, limit?: number, offset?: number, properties?: Array<string>, sort?: Array<string>, _options?: PromiseConfigurationOptions): Promise<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3> {
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
        const result = this.api.getTableRows(tableIdOrName, after, archived, limit, offset, properties, sort, observableOptions);
        return result.toPromise();
    }

    /**
     * Permanently deletes a row from a table\'s draft version.
     * Permanently deletes a row
     * @param rowId 
     * @param tableIdOrName 
     */
    public purgeDraftTableRowWithHttpInfo(rowId: string, tableIdOrName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.purgeDraftTableRowWithHttpInfo(rowId, tableIdOrName, observableOptions);
        return result.toPromise();
    }

    /**
     * Permanently deletes a row from a table\'s draft version.
     * Permanently deletes a row
     * @param rowId 
     * @param tableIdOrName 
     */
    public purgeDraftTableRow(rowId: string, tableIdOrName: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.purgeDraftTableRow(rowId, tableIdOrName, observableOptions);
        return result.toPromise();
    }

    /**
     * Permanently delete rows from the draft version of a table, given a set of row IDs. Maximum of 100 row IDs per call.
     * Delete rows
     * @param tableIdOrName 
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
     * Permanently delete rows from the draft version of a table, given a set of row IDs. Maximum of 100 row IDs per call.
     * Delete rows
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * Replace a single row in the draft version of a table. All column values must be specified. If a column has a value in the target table and this request doesn\'t define that value, it will be deleted. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Replace an existing row
     * @param rowId 
     * @param tableIdOrName 
     * @param hubDbTableRowV3Request
     */
    public replaceDraftTableRowWithHttpInfo(rowId: string, tableIdOrName: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
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
        const result = this.api.replaceDraftTableRowWithHttpInfo(rowId, tableIdOrName, hubDbTableRowV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace a single row in the draft version of a table. All column values must be specified. If a column has a value in the target table and this request doesn\'t define that value, it will be deleted. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Replace an existing row
     * @param rowId 
     * @param tableIdOrName 
     * @param hubDbTableRowV3Request
     */
    public replaceDraftTableRow(rowId: string, tableIdOrName: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<HubDbTableRowV3> {
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
        const result = this.api.replaceDraftTableRow(rowId, tableIdOrName, hubDbTableRowV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * Partially update a single row in the table\'s draft version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Update a row
     * @param rowId 
     * @param tableIdOrName 
     * @param hubDbTableRowV3Request
     */
    public updateDraftTableRowWithHttpInfo(rowId: string, tableIdOrName: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableRowV3>> {
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
        const result = this.api.updateDraftTableRowWithHttpInfo(rowId, tableIdOrName, hubDbTableRowV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a single row in the table\'s draft version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the \"Create a row\" endpoint for instructions on how to format the JSON row definitions.
     * Update a row
     * @param rowId 
     * @param tableIdOrName 
     * @param hubDbTableRowV3Request
     */
    public updateDraftTableRow(rowId: string, tableIdOrName: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: PromiseConfigurationOptions): Promise<HubDbTableRowV3> {
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
        const result = this.api.updateDraftTableRow(rowId, tableIdOrName, hubDbTableRowV3Request, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates multiple rows as a batch in the draft version of the table, with a maximum of 100 rows per call. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * @param tableIdOrName 
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
     * Create a table
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
     * Create a table
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
     * @param tableIdOrName 
     * @param [format] 
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
     * @param tableIdOrName 
     * @param [format] 
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
     * @param tableIdOrName 
     * @param [format] 
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
     * @param tableIdOrName 
     * @param [format] 
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
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [contentType] 
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [isGetLocalizedSchema] 
     * @param [limit] The maximum number of results to display per page.
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public getAllDraftTablesWithHttpInfo(after?: string, archived?: boolean, contentType?: string, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, isGetLocalizedSchema?: boolean, limit?: number, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalHubDbTableV3>> {
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
        const result = this.api.getAllDraftTablesWithHttpInfo(after, archived, contentType, createdAfter, createdAt, createdBefore, isGetLocalizedSchema, limit, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for each draft table defined in the specified account, including column definitions.
     * Return all draft tables
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [contentType] 
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [isGetLocalizedSchema] 
     * @param [limit] The maximum number of results to display per page.
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public getAllDraftTables(after?: string, archived?: boolean, contentType?: string, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, isGetLocalizedSchema?: boolean, limit?: number, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalHubDbTableV3> {
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
        const result = this.api.getAllDraftTables(after, archived, contentType, createdAfter, createdAt, createdBefore, isGetLocalizedSchema, limit, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for the published version of each table defined in an account, including column definitions.
     * Get all published tables
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [contentType] 
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [isGetLocalizedSchema] 
     * @param [limit] The maximum number of results to display per page.
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public getAllTablesWithHttpInfo(after?: string, archived?: boolean, contentType?: string, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, isGetLocalizedSchema?: boolean, limit?: number, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalHubDbTableV3>> {
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
        const result = this.api.getAllTablesWithHttpInfo(after, archived, contentType, createdAfter, createdAt, createdBefore, isGetLocalizedSchema, limit, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for the published version of each table defined in an account, including column definitions.
     * Get all published tables
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [contentType] 
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [isGetLocalizedSchema] 
     * @param [limit] The maximum number of results to display per page.
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public getAllTables(after?: string, archived?: boolean, contentType?: string, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, isGetLocalizedSchema?: boolean, limit?: number, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalHubDbTableV3> {
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
        const result = this.api.getAllTables(after, archived, contentType, createdAfter, createdAt, createdBefore, isGetLocalizedSchema, limit, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the details for the draft version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param tableIdOrName 
     * @param [archived] Whether to return only results that have been archived.
     * @param [includeForeignIds] 
     * @param [isGetLocalizedSchema] 
     */
    public getDraftTableDetailsByIdWithHttpInfo(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, isGetLocalizedSchema?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
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
        const result = this.api.getDraftTableDetailsByIdWithHttpInfo(tableIdOrName, archived, includeForeignIds, isGetLocalizedSchema, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the details for the draft version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param tableIdOrName 
     * @param [archived] Whether to return only results that have been archived.
     * @param [includeForeignIds] 
     * @param [isGetLocalizedSchema] 
     */
    public getDraftTableDetailsById(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, isGetLocalizedSchema?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableV3> {
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
        const result = this.api.getDraftTableDetailsById(tableIdOrName, archived, includeForeignIds, isGetLocalizedSchema, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for the published version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table.  **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access. To do so, you\'ll need to include the HubSpot account ID in a `portalId` query parameter.
     * Get details of a published table
     * @param tableIdOrName 
     * @param [archived] Whether to return only results that have been archived.
     * @param [includeForeignIds] 
     * @param [isGetLocalizedSchema] 
     */
    public getTableDetailsWithHttpInfo(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, isGetLocalizedSchema?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
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
        const result = this.api.getTableDetailsWithHttpInfo(tableIdOrName, archived, includeForeignIds, isGetLocalizedSchema, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for the published version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table.  **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access. To do so, you\'ll need to include the HubSpot account ID in a `portalId` query parameter.
     * Get details of a published table
     * @param tableIdOrName 
     * @param [archived] Whether to return only results that have been archived.
     * @param [includeForeignIds] 
     * @param [isGetLocalizedSchema] 
     */
    public getTableDetails(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, isGetLocalizedSchema?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableV3> {
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
        const result = this.api.getTableDetails(tableIdOrName, archived, includeForeignIds, isGetLocalizedSchema, observableOptions);
        return result.toPromise();
    }

    /**
     * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the draft version of the table. Use the `/publish` endpoint to push these changes to the published version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#importing-tables) to check the details and format of the JSON-formatted options for the import.
     * Import data into draft table
     * @param tableIdOrName 
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
     * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the draft version of the table. Use the `/publish` endpoint to push these changes to the published version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#importing-tables) to check the details and format of the JSON-formatted options for the import.
     * Import data into draft table
     * @param tableIdOrName 
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
     * @param tableIdOrName 
     * @param [includeForeignIds] 
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
     * @param tableIdOrName 
     * @param [includeForeignIds] 
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
     * Returns rows in the draft version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options.
     * Get rows from draft table
     * @param tableIdOrName 
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [limit] The maximum number of results to display per page.
     * @param [offset] 
     * @param [properties] 
     * @param [sort] 
     */
    public readDraftTableRowsWithHttpInfo(tableIdOrName: string, after?: string, archived?: boolean, limit?: number, offset?: number, properties?: Array<string>, sort?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3>> {
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
        const result = this.api.readDraftTableRowsWithHttpInfo(tableIdOrName, after, archived, limit, offset, properties, sort, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns rows in the draft version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options.
     * Get rows from draft table
     * @param tableIdOrName 
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [limit] The maximum number of results to display per page.
     * @param [offset] 
     * @param [properties] 
     * @param [sort] 
     */
    public readDraftTableRows(tableIdOrName: string, after?: string, archived?: boolean, limit?: number, offset?: number, properties?: Array<string>, sort?: Array<string>, _options?: PromiseConfigurationOptions): Promise<UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3> {
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
        const result = this.api.readDraftTableRows(tableIdOrName, after, archived, limit, offset, properties, sort, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version of a table
     * Delete a table version
     * @param tableIdOrName 
     * @param versionId 
     */
    public removeTableVersionWithHttpInfo(tableIdOrName: string, versionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.removeTableVersionWithHttpInfo(tableIdOrName, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific version of a table
     * Delete a table version
     * @param tableIdOrName 
     * @param versionId 
     */
    public removeTableVersion(tableIdOrName: string, versionId: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.removeTableVersion(tableIdOrName, versionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the data in the draft version of the table with values from the published version. Any unpublished changes in the draft will be lost after this call is made.
     * Reset a table draft
     * @param tableIdOrName 
     * @param [includeForeignIds] 
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
     * Reset a table draft
     * @param tableIdOrName 
     * @param [includeForeignIds] 
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
     * @param tableIdOrName 
     * @param [includeForeignIds] 
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
     * @param tableIdOrName 
     * @param [includeForeignIds] 
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
     * @param tableIdOrName 
     * @param hubDbTableV3Request
     * @param [archived] Whether to return only results that have been archived.
     * @param [includeForeignIds] 
     * @param [isGetLocalizedSchema] 
     */
    public updateDraftTableWithHttpInfo(tableIdOrName: string, hubDbTableV3Request: HubDbTableV3Request, archived?: boolean, includeForeignIds?: boolean, isGetLocalizedSchema?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<HubDbTableV3>> {
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
        const result = this.api.updateDraftTableWithHttpInfo(tableIdOrName, hubDbTableV3Request, archived, includeForeignIds, isGetLocalizedSchema, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table as well as restore an archived table. Tables updated using the endpoint will only modify the draft verion of the table. Use the `/publish` endpoint to push all the changes to the published version. To restore a table, include the query parameter `archived=true` and `\"archived\": false` in the json body. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
     * Update an existing table
     * @param tableIdOrName 
     * @param hubDbTableV3Request
     * @param [archived] Whether to return only results that have been archived.
     * @param [includeForeignIds] 
     * @param [isGetLocalizedSchema] 
     */
    public updateDraftTable(tableIdOrName: string, hubDbTableV3Request: HubDbTableV3Request, archived?: boolean, includeForeignIds?: boolean, isGetLocalizedSchema?: boolean, _options?: PromiseConfigurationOptions): Promise<HubDbTableV3> {
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
        const result = this.api.updateDraftTable(tableIdOrName, hubDbTableV3Request, archived, includeForeignIds, isGetLocalizedSchema, observableOptions);
        return result.toPromise();
    }


}



