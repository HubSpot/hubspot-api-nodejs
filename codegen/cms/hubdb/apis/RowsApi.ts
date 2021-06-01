// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CollectionResponseWithTotalHubDbTableRowV3ForwardPaging } from '../models/CollectionResponseWithTotalHubDbTableRowV3ForwardPaging';
import { HubDbTableRowV3 } from '../models/HubDbTableRowV3';
import { HubDbTableRowV3Input } from '../models/HubDbTableRowV3Input';

/**
 * no description
 */
export class RowsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Clones a single row in the `draft` version of the table.
     * Clone a row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    public async cloneDraftTableRow(rowId: string, tableIdOrName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError('Required parameter rowId was null or undefined when calling cloneDraftTableRow.');
        }


        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling cloneDraftTableRow.');
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft/clone'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Add a new row to a HubDB table. New rows will be added to the `draft` version of the table. Use `push-live` endpoint to push these changes to live version and publish them.
     * Add a new row to a table
     * @param tableIdOrName The ID or name of the target table.
     * @param hubDbTableRowV3Input The row definition JSON, formatted as described above.
     */
    public async createTableRow(tableIdOrName: string, hubDbTableRowV3Input: HubDbTableRowV3Input, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling createTableRow.');
        }


        // verify required parameter 'hubDbTableRowV3Input' is not null or undefined
        if (hubDbTableRowV3Input === null || hubDbTableRowV3Input === undefined) {
            throw new RequiredError('Required parameter hubDbTableRowV3Input was null or undefined when calling createTableRow.');
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(hubDbTableRowV3Input, "HubDbTableRowV3Input", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a single row by ID from a table's `draft` version.
     * Get a row from the draft table
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    public async getDraftTableRowById(rowId: string, tableIdOrName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError('Required parameter rowId was null or undefined when calling getDraftTableRowById.');
        }


        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling getDraftTableRowById.');
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a single row by ID from a table's `live` version. **Note:** This endpoint can be accessed without any authentication, if the table is set to be allowed for public access.
     * Get a table row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    public async getTableRow(rowId: string, tableIdOrName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError('Required parameter rowId was null or undefined when calling getTableRow.');
        }


        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling getTableRow.');
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async getTableRows(tableIdOrName: string, properties?: Array<string>, after?: string, limit?: number, sort?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling getTableRows.');
        }






        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer.serialize(properties, "Array<string>", ""));
        }
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Permanently deletes a row from a table's `draft` version.
     * Permanently deletes a row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     */
    public async purgeDraftTableRow(rowId: string, tableIdOrName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError('Required parameter rowId was null or undefined when calling purgeDraftTableRow.');
        }


        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling purgeDraftTableRow.');
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async readDraftTableRows(tableIdOrName: string, after?: string, properties?: Array<string>, limit?: number, sort?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling readDraftTableRows.');
        }






        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer.serialize(properties, "Array<string>", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Replace a single row in the table's `draft` version. All the column values must be specified. If a column has a value in the target table and this request doesn't define that value, it will be deleted. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Replaces an existing row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     * @param hubDbTableRowV3Input The JSON object of the row
     */
    public async replaceDraftTableRow(rowId: string, tableIdOrName: string, hubDbTableRowV3Input: HubDbTableRowV3Input, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError('Required parameter rowId was null or undefined when calling replaceDraftTableRow.');
        }


        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling replaceDraftTableRow.');
        }


        // verify required parameter 'hubDbTableRowV3Input' is not null or undefined
        if (hubDbTableRowV3Input === null || hubDbTableRowV3Input === undefined) {
            throw new RequiredError('Required parameter hubDbTableRowV3Input was null or undefined when calling replaceDraftTableRow.');
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(hubDbTableRowV3Input, "HubDbTableRowV3Input", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sparse updates a single row in the table's `draft` version. All the column values need not be specified. Only the columns or fields that needs to be modified can be specified. See the `Create a row` endpoint for instructions on how to format the JSON row definitions.
     * Updates an existing row
     * @param rowId The ID of the row
     * @param tableIdOrName The ID or name of the table
     * @param hubDbTableRowV3Input The JSON object of the row with necessary fields that needs to be updated.
     */
    public async updateDraftTableRow(rowId: string, tableIdOrName: string, hubDbTableRowV3Input: HubDbTableRowV3Input, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'rowId' is not null or undefined
        if (rowId === null || rowId === undefined) {
            throw new RequiredError('Required parameter rowId was null or undefined when calling updateDraftTableRow.');
        }


        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling updateDraftTableRow.');
        }


        // verify required parameter 'hubDbTableRowV3Input' is not null or undefined
        if (hubDbTableRowV3Input === null || hubDbTableRowV3Input === undefined) {
            throw new RequiredError('Required parameter hubDbTableRowV3Input was null or undefined when calling updateDraftTableRow.');
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/{rowId}/draft'
            .replace('{' + 'rowId' + '}', encodeURIComponent(String(rowId)))
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(hubDbTableRowV3Input, "HubDbTableRowV3Input", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
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
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
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
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
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
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
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
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
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
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CollectionResponseWithTotalHubDbTableRowV3ForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging", ""
            ) as CollectionResponseWithTotalHubDbTableRowV3ForwardPaging;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
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
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
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
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CollectionResponseWithTotalHubDbTableRowV3ForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging", ""
            ) as CollectionResponseWithTotalHubDbTableRowV3ForwardPaging;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
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
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
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
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableRowV3", ""
            ) as HubDbTableRowV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
