// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CollectionResponseWithTotalHubDbTableRowV3ForwardPaging } from '../models/CollectionResponseWithTotalHubDbTableRowV3ForwardPaging';
import { HubDbTableRowV3 } from '../models/HubDbTableRowV3';
import { HubDbTableRowV3Request } from '../models/HubDbTableRowV3Request';

/**
 * no description
 */
export class RowsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Clones a single row in the `draft` version of the table.
     * Clone a row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     */
    public async cloneDraftTableRow(tableIdOrName: string, rowId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsApi", "cloneDraftTableRow", "tableIdOrName");
        }


        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError("RowsApi", "cloneDraftTableRow", "rowId");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft/clone'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)))
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Add a new row to a HubDB table. New rows will be added to the `draft` version of the table. Use `publish` endpoint to push these changes to published version.
     * Add a new row to a table
     * @param tableIdOrName The ID or name of the target table.
     * @param hubDbTableRowV3Request The row definition JSON, formatted as described above.
     */
    public async createTableRow(tableIdOrName: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsApi", "createTableRow", "tableIdOrName");
        }


        // verify required parameter 'hubDbTableRowV3Request' is not null or undefined
        if (hubDbTableRowV3Request === null || hubDbTableRowV3Request === undefined) {
            throw new RequiredError("RowsApi", "createTableRow", "hubDbTableRowV3Request");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(hubDbTableRowV3Request, "HubDbTableRowV3Request", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a single row by ID from a table's `draft` version.
     * Get a row from the draft table
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     */
    public async getDraftTableRowById(tableIdOrName: string, rowId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsApi", "getDraftTableRowById", "tableIdOrName");
        }


        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError("RowsApi", "getDraftTableRowById", "rowId");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)))
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a single row by ID from a table's `published` version. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     */
    public async getTableRow(tableIdOrName: string, rowId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsApi", "getTableRow", "tableIdOrName");
        }


        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError("RowsApi", "getTableRow", "rowId");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)))
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async getTableRows(tableIdOrName: string, sort?: Array<string>, after?: string, limit?: number, properties?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsApi", "getTableRows", "tableIdOrName");
        }






        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer.serialize(properties, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Permanently deletes a row from a table's `draft` version.
     * Permanently deletes a row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     */
    public async purgeDraftTableRow(tableIdOrName: string, rowId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsApi", "purgeDraftTableRow", "tableIdOrName");
        }


        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError("RowsApi", "purgeDraftTableRow", "rowId");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)))
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async readDraftTableRows(tableIdOrName: string, sort?: Array<string>, after?: string, limit?: number, properties?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsApi", "readDraftTableRows", "tableIdOrName");
        }






        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer.serialize(properties, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Replace a single row in the table's `draft` version. All the column values must be specified. If a column has a value in the target table and this request doesn't define that value, it will be deleted. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Replaces an existing row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param hubDbTableRowV3Request The JSON object of the row
     */
    public async replaceDraftTableRow(tableIdOrName: string, rowId: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsApi", "replaceDraftTableRow", "tableIdOrName");
        }


        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError("RowsApi", "replaceDraftTableRow", "rowId");
        }


        // verify required parameter 'hubDbTableRowV3Request' is not null or undefined
        if (hubDbTableRowV3Request === null || hubDbTableRowV3Request === undefined) {
            throw new RequiredError("RowsApi", "replaceDraftTableRow", "hubDbTableRowV3Request");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)))
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(hubDbTableRowV3Request, "HubDbTableRowV3Request", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sparse updates a single row in the table's `draft` version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Updates an existing row
     * @param tableIdOrName The ID or name of the table
     * @param rowId The ID of the row
     * @param hubDbTableRowV3Request The JSON object of the row with necessary fields that needs to be updated.
     */
    public async updateDraftTableRow(tableIdOrName: string, rowId: string, hubDbTableRowV3Request: HubDbTableRowV3Request, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsApi", "updateDraftTableRow", "tableIdOrName");
        }


        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError("RowsApi", "updateDraftTableRow", "rowId");
        }


        // verify required parameter 'hubDbTableRowV3Request' is not null or undefined
        if (hubDbTableRowV3Request === null || hubDbTableRowV3Request === undefined) {
            throw new RequiredError("RowsApi", "updateDraftTableRow", "hubDbTableRowV3Request");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)))
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(hubDbTableRowV3Request, "HubDbTableRowV3Request", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class RowsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloneDraftTableRow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloneDraftTableRow(response: ResponseContext): Promise<HubDbTableRowV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTableRow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTableRow(response: ResponseContext): Promise<HubDbTableRowV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDraftTableRowById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDraftTableRowById(response: ResponseContext): Promise<HubDbTableRowV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTableRow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTableRow(response: ResponseContext): Promise<HubDbTableRowV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTableRows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTableRows(response: ResponseContext): Promise<CollectionResponseWithTotalHubDbTableRowV3ForwardPaging > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalHubDbTableRowV3ForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging", ""
            ) as CollectionResponseWithTotalHubDbTableRowV3ForwardPaging;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CollectionResponseWithTotalHubDbTableRowV3ForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging", ""
            ) as CollectionResponseWithTotalHubDbTableRowV3ForwardPaging;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to purgeDraftTableRow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async purgeDraftTableRow(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readDraftTableRows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readDraftTableRows(response: ResponseContext): Promise<CollectionResponseWithTotalHubDbTableRowV3ForwardPaging > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalHubDbTableRowV3ForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging", ""
            ) as CollectionResponseWithTotalHubDbTableRowV3ForwardPaging;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CollectionResponseWithTotalHubDbTableRowV3ForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging", ""
            ) as CollectionResponseWithTotalHubDbTableRowV3ForwardPaging;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceDraftTableRow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceDraftTableRow(response: ResponseContext): Promise<HubDbTableRowV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDraftTableRow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDraftTableRow(response: ResponseContext): Promise<HubDbTableRowV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
