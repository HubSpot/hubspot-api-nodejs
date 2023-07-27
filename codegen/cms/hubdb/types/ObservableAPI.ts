import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BatchInputHubDbTableRowV3BatchUpdateRequest } from '../models/BatchInputHubDbTableRowV3BatchUpdateRequest';
import { BatchInputHubDbTableRowV3Request } from '../models/BatchInputHubDbTableRowV3Request';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseHubDbTableRowV3 } from '../models/BatchResponseHubDbTableRowV3';
import { BatchResponseHubDbTableRowV3WithErrors } from '../models/BatchResponseHubDbTableRowV3WithErrors';
import { CollectionResponseWithTotalHubDbTableRowV3ForwardPaging } from '../models/CollectionResponseWithTotalHubDbTableRowV3ForwardPaging';
import { CollectionResponseWithTotalHubDbTableV3ForwardPaging } from '../models/CollectionResponseWithTotalHubDbTableV3ForwardPaging';
import { HubDbTableCloneRequest } from '../models/HubDbTableCloneRequest';
import { HubDbTableRowV3 } from '../models/HubDbTableRowV3';
import { HubDbTableRowV3Request } from '../models/HubDbTableRowV3Request';
import { HubDbTableV3 } from '../models/HubDbTableV3';
import { HubDbTableV3Request } from '../models/HubDbTableV3Request';
import { ImportResult } from '../models/ImportResult';

import { RowsApiRequestFactory, RowsApiResponseProcessor} from "../apis/RowsApi";
export class ObservableRowsApi {
    private requestFactory: RowsApiRequestFactory;
    private responseProcessor: RowsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RowsApiRequestFactory,
        responseProcessor?: RowsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RowsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RowsApiResponseProcessor();
    }

    /**
     * Clones a single row in the `draft` version of the table.
     * Clone a row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     */
    public cloneDraftTableRow(tableIdOrName: string, rowId: string, _options?: Configuration): Observable<HubDbTableRowV3> {
        const requestContextPromise = this.requestFactory.cloneDraftTableRow(tableIdOrName, rowId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloneDraftTableRow(rsp)));
            }));
    }

    /**
     * Add a new row to a HubDB table. New rows will be added to the `draft` version of the table. Use `publish` endpoint to push these changes to published version.
     * Add a new row to a table
     * @param tableIdOrName The ID or name of the target table.
     * @param hubDbTableRowV3Request The row definition JSON, formatted as described above.
     */
    public createTableRow(tableIdOrName: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: Configuration): Observable<HubDbTableRowV3> {
        const requestContextPromise = this.requestFactory.createTableRow(tableIdOrName, hubDbTableRowV3Request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTableRow(rsp)));
            }));
    }

    /**
     * Get a single row by ID from a table's `draft` version.
     * Get a row from the draft table
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     */
    public getDraftTableRowById(tableIdOrName: string, rowId: string, _options?: Configuration): Observable<HubDbTableRowV3> {
        const requestContextPromise = this.requestFactory.getDraftTableRowById(tableIdOrName, rowId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDraftTableRowById(rsp)));
            }));
    }

    /**
     * Get a single row by ID from a table's `published` version. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     */
    public getTableRow(tableIdOrName: string, rowId: string, _options?: Configuration): Observable<HubDbTableRowV3> {
        const requestContextPromise = this.requestFactory.getTableRow(tableIdOrName, rowId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTableRow(rsp)));
            }));
    }

    /**
     * Returns a set of rows in the `published` version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get rows for a table
     * @param tableIdOrName The ID or name of the table to query.
     * @param sort Specifies the column names to sort the results by. See the above description for more details.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @param properties Specify the column names to get results containing only the required columns instead of all column details.
     */
    public getTableRows(tableIdOrName: string, sort?: Array<string>, after?: string, limit?: number, properties?: Array<string>, _options?: Configuration): Observable<CollectionResponseWithTotalHubDbTableRowV3ForwardPaging> {
        const requestContextPromise = this.requestFactory.getTableRows(tableIdOrName, sort, after, limit, properties, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTableRows(rsp)));
            }));
    }

    /**
     * Permanently deletes a row from a table's `draft` version.
     * Permanently deletes a row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     */
    public purgeDraftTableRow(tableIdOrName: string, rowId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.purgeDraftTableRow(tableIdOrName, rowId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.purgeDraftTableRow(rsp)));
            }));
    }

    /**
     * Returns rows in the `draft` version of the specified table. Row results can be filtered and sorted. Filtering and sorting options will be sent as query parameters to the API request. For example, by adding the query parameters `column1__gt=5&sort=-column1`, API returns the rows with values for column `column1` greater than 5 and in the descending order of `column1` values. Refer to the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#filtering-and-sorting-table-rows) for detailed filtering and sorting options.
     * Get rows from draft table
     * @param tableIdOrName The ID or name of the table to query.
     * @param sort Specifies the column names to sort the results by.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is &#x60;1000&#x60;.
     * @param properties Specify the column names to get results containing only the required columns instead of all column details. If you want to include multiple columns in the result, use this query param as many times. 
     */
    public readDraftTableRows(tableIdOrName: string, sort?: Array<string>, after?: string, limit?: number, properties?: Array<string>, _options?: Configuration): Observable<CollectionResponseWithTotalHubDbTableRowV3ForwardPaging> {
        const requestContextPromise = this.requestFactory.readDraftTableRows(tableIdOrName, sort, after, limit, properties, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readDraftTableRows(rsp)));
            }));
    }

    /**
     * Replace a single row in the table's `draft` version. All the column values must be specified. If a column has a value in the target table and this request doesn't define that value, it will be deleted. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Replaces an existing row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param hubDbTableRowV3Request The JSON object of the row
     */
    public replaceDraftTableRow(tableIdOrName: string, rowId: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: Configuration): Observable<HubDbTableRowV3> {
        const requestContextPromise = this.requestFactory.replaceDraftTableRow(tableIdOrName, rowId, hubDbTableRowV3Request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceDraftTableRow(rsp)));
            }));
    }

    /**
     * Sparse updates a single row in the table's `draft` version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Updates an existing row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param hubDbTableRowV3Request The JSON object of the row with necessary fields that needs to be updated.
     */
    public updateDraftTableRow(tableIdOrName: string, rowId: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: Configuration): Observable<HubDbTableRowV3> {
        const requestContextPromise = this.requestFactory.updateDraftTableRow(tableIdOrName, rowId, hubDbTableRowV3Request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDraftTableRow(rsp)));
            }));
    }

}

import { RowsBatchApiRequestFactory, RowsBatchApiResponseProcessor} from "../apis/RowsBatchApi";
export class ObservableRowsBatchApi {
    private requestFactory: RowsBatchApiRequestFactory;
    private responseProcessor: RowsBatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RowsBatchApiRequestFactory,
        responseProcessor?: RowsBatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RowsBatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RowsBatchApiResponseProcessor();
    }

    /**
     * Clones rows in the `draft` version of the specified table, given a set of row ids. Maximum of 100 row ids per call.
     * Clone rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString The JSON array of row ids
     */
    public cloneDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3> {
        const requestContextPromise = this.requestFactory.cloneDraftTableRows(tableIdOrName, batchInputString, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloneDraftTableRows(rsp)));
            }));
    }

    /**
     * Creates rows in the `draft` version of the specified table, given an array of row objects. Maximum of 100 row object per call. See the overview section for more details with an example.
     * Create rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3Request JSON array of row objects
     */
    public createDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3Request: BatchInputHubDbTableRowV3Request, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        const requestContextPromise = this.requestFactory.createDraftTableRows(tableIdOrName, batchInputHubDbTableRowV3Request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDraftTableRows(rsp)));
            }));
    }

    /**
     * Permanently deletes rows from the `draft` version of the table, given a set of row ids. Maximum of 100 row ids per call.
     * Permanently deletes rows
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString JSON array of row ids.
     */
    public purgeDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.purgeDraftTableRows(tableIdOrName, batchInputString, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.purgeDraftTableRows(rsp)));
            }));
    }

    /**
     * Returns rows in the `draft` version of the specified table, given a set of row ids.
     * Get a set of rows from draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString JSON array of row ids.
     */
    public readDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        const requestContextPromise = this.requestFactory.readDraftTableRows(tableIdOrName, batchInputString, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readDraftTableRows(rsp)));
            }));
    }

    /**
     * Returns rows in the `published` version of the specified table, given a set of row ids. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get a set of rows
     * @param tableIdOrName The ID or name of the table to query.
     * @param batchInputString The JSON array of row ids
     */
    public readTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        const requestContextPromise = this.requestFactory.readTableRows(tableIdOrName, batchInputString, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readTableRows(rsp)));
            }));
    }

    /**
     * Replaces multiple rows as a batch in the `draft` version of the table, with a maximum of 100 rows per call. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3BatchUpdateRequest JSON array of row objects.
     */
    public replaceDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        const requestContextPromise = this.requestFactory.replaceDraftTableRows(tableIdOrName, batchInputHubDbTableRowV3BatchUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceDraftTableRows(rsp)));
            }));
    }

    /**
     * Updates multiple rows as a batch in the `draft` version of the table, with a maximum of 100 rows per call. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3BatchUpdateRequest JSON array of row objects.
     */
    public updateDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest, _options?: Configuration): Observable<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors> {
        const requestContextPromise = this.requestFactory.updateDraftTableRows(tableIdOrName, batchInputHubDbTableRowV3BatchUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDraftTableRows(rsp)));
            }));
    }

}

import { TablesApiRequestFactory, TablesApiResponseProcessor} from "../apis/TablesApi";
export class ObservableTablesApi {
    private requestFactory: TablesApiRequestFactory;
    private responseProcessor: TablesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TablesApiRequestFactory,
        responseProcessor?: TablesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TablesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TablesApiResponseProcessor();
    }

    /**
     * Archive (soft delete) an existing HubDB table. This archives both the published and draft versions.
     * Archive a table
     * @param tableIdOrName The ID or name of the table to archive.
     */
    public archiveTable(tableIdOrName: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archiveTable(tableIdOrName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveTable(rsp)));
            }));
    }

    /**
     * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can be sent as JSON in the `body` parameter. This will create the cloned table as a `draft`.
     * Clone a table
     * @param tableIdOrName The ID or name of the table to clone.
     * @param hubDbTableCloneRequest JSON object with the properties newName and newLabel. You can set copyRows to false to clone the table with copying rows and default is true.
     */
    public cloneDraftTable(tableIdOrName: string, hubDbTableCloneRequest: HubDbTableCloneRequest, _options?: Configuration): Observable<HubDbTableV3> {
        const requestContextPromise = this.requestFactory.cloneDraftTable(tableIdOrName, hubDbTableCloneRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloneDraftTable(rsp)));
            }));
    }

    /**
     * Creates a new draft HubDB table given a JSON schema. The table name and label should be unique for each account.
     * Create a new table
     * @param hubDbTableV3Request The JSON schema for the table being created.
     */
    public createTable(hubDbTableV3Request: HubDbTableV3Request, _options?: Configuration): Observable<HubDbTableV3> {
        const requestContextPromise = this.requestFactory.createTable(hubDbTableV3Request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTable(rsp)));
            }));
    }

    /**
     * Exports the `draft` version of a table to CSV / EXCEL format.
     * Export a draft table
     * @param tableIdOrName The ID or name of the table to export.
     * @param format The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    public exportDraftTable(tableIdOrName: string, format?: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.exportDraftTable(tableIdOrName, format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportDraftTable(rsp)));
            }));
    }

    /**
     * Exports the `published` version of a table to CSV / EXCEL format.
     * Export a published version of a table
     * @param tableIdOrName The ID or name of the table to export.
     * @param format The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    public exportTable(tableIdOrName: string, format?: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.exportTable(tableIdOrName, format, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportTable(rsp)));
            }));
    }

    /**
     * Returns the details for each draft table defined in the specified account, including column definitions.
     * Return all draft tables
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 1000.
     * @param createdAt Only return tables created at exactly the specified time.
     * @param createdAfter Only return tables created after the specified time.
     * @param createdBefore Only return tables created before the specified time.
     * @param updatedAt Only return tables last updated at exactly the specified time.
     * @param updatedAfter Only return tables last updated after the specified time.
     * @param updatedBefore Only return tables last updated before the specified time.
     * @param archived Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     */
    public getAllDraftTables(sort?: Array<string>, after?: string, limit?: number, createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, archived?: boolean, _options?: Configuration): Observable<CollectionResponseWithTotalHubDbTableV3ForwardPaging> {
        const requestContextPromise = this.requestFactory.getAllDraftTables(sort, after, limit, createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllDraftTables(rsp)));
            }));
    }

    /**
     * Returns the details for the `published` version of each table defined in an account, including column definitions.
     * Get all published tables
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 1000.
     * @param createdAt Only return tables created at exactly the specified time.
     * @param createdAfter Only return tables created after the specified time.
     * @param createdBefore Only return tables created before the specified time.
     * @param updatedAt Only return tables last updated at exactly the specified time.
     * @param updatedAfter Only return tables last updated after the specified time.
     * @param updatedBefore Only return tables last updated before the specified time.
     * @param archived Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     */
    public getAllTables(sort?: Array<string>, after?: string, limit?: number, createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, archived?: boolean, _options?: Configuration): Observable<CollectionResponseWithTotalHubDbTableV3ForwardPaging> {
        const requestContextPromise = this.requestFactory.getAllTables(sort, after, limit, createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTables(rsp)));
            }));
    }

    /**
     * Get the details for the `draft` version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param tableIdOrName The ID or name of the table to return.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     * @param archived Set this to &#x60;true&#x60; to return an archived table. Defaults to &#x60;false&#x60;.
     */
    public getDraftTableDetailsById(tableIdOrName: string, includeForeignIds?: boolean, archived?: boolean, _options?: Configuration): Observable<HubDbTableV3> {
        const requestContextPromise = this.requestFactory.getDraftTableDetailsById(tableIdOrName, includeForeignIds, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDraftTableDetailsById(rsp)));
            }));
    }

    /**
     * Returns the details for the `published` version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table.  **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get details for a published table
     * @param tableIdOrName The ID or name of the table to return.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     * @param archived Set this to &#x60;true&#x60; to return details for an archived table. Defaults to &#x60;false&#x60;.
     */
    public getTableDetails(tableIdOrName: string, includeForeignIds?: boolean, archived?: boolean, _options?: Configuration): Observable<HubDbTableV3> {
        const requestContextPromise = this.requestFactory.getTableDetails(tableIdOrName, includeForeignIds, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTableDetails(rsp)));
            }));
    }

    /**
     * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the `draft` version of the table. Use `/publish` endpoint to push these changes to `published` version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the [overview section](https://developers.hubspot.com/docs/api/cms/hubdb#importing-tables) to check the details and format of the JSON-formatted options for the import.
     * Import data into draft table
     * @param tableIdOrName The ID of the destination table where data will be imported.
     * @param config Configuration for the import in JSON format as described above.
     * @param file The source CSV file to be imported.
     */
    public importDraftTable(tableIdOrName: string, config?: string, file?: HttpFile, _options?: Configuration): Observable<ImportResult> {
        const requestContextPromise = this.requestFactory.importDraftTable(tableIdOrName, config, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importDraftTable(rsp)));
            }));
    }

    /**
     * Publishes the table by copying the data and table schema changes from draft version to the published version, meaning any website pages using data from the table will be updated.
     * Publish a table from draft
     * @param tableIdOrName The ID or name of the table to publish.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public publishDraftTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: Configuration): Observable<HubDbTableV3> {
        const requestContextPromise = this.requestFactory.publishDraftTable(tableIdOrName, includeForeignIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publishDraftTable(rsp)));
            }));
    }

    /**
     * Replaces the data in the `draft` version of the table with values from the `published` version. Any unpublished changes in the `draft` will be lost after this call is made.
     * Reset a draft table
     * @param tableIdOrName The ID or name of the table to reset.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public resetDraftTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: Configuration): Observable<HubDbTableV3> {
        const requestContextPromise = this.requestFactory.resetDraftTable(tableIdOrName, includeForeignIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetDraftTable(rsp)));
            }));
    }

    /**
     * Unpublishes the table, meaning any website pages using data from the table will not render any data.
     * Unpublish a table
     * @param tableIdOrName The ID or name of the table to publish.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public unpublishTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: Configuration): Observable<HubDbTableV3> {
        const requestContextPromise = this.requestFactory.unpublishTable(tableIdOrName, includeForeignIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unpublishTable(rsp)));
            }));
    }

    /**
     * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table as well as restore an archived table. Tables updated using the endpoint will only modify the `draft` verion of the table. Use `publish` endpoint to push all the changes to the `published` version. To restore a table, include the query parameter `archived=true` and `\"archived\": false` in the json body. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
     * Update an existing table
     * @param tableIdOrName The ID or name of the table to update.
     * @param hubDbTableV3Request The JSON schema for the table being updated.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     * @param archived Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     */
    public updateDraftTable(tableIdOrName: string, hubDbTableV3Request: HubDbTableV3Request, includeForeignIds?: boolean, archived?: boolean, _options?: Configuration): Observable<HubDbTableV3> {
        const requestContextPromise = this.requestFactory.updateDraftTable(tableIdOrName, hubDbTableV3Request, includeForeignIds, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDraftTable(rsp)));
            }));
    }

}
