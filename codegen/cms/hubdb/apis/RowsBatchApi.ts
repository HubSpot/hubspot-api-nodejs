// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BatchInputHubDbTableRowV3BatchUpdateRequest } from '../models/BatchInputHubDbTableRowV3BatchUpdateRequest';
import { BatchInputHubDbTableRowV3Request } from '../models/BatchInputHubDbTableRowV3Request';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseHubDbTableRowV3 } from '../models/BatchResponseHubDbTableRowV3';
import { BatchResponseHubDbTableRowV3WithErrors } from '../models/BatchResponseHubDbTableRowV3WithErrors';

/**
 * no description
 */
export class RowsBatchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Clones rows in the `draft` version of the specified table, given a set of row ids. Maximum of 100 row ids per call.
     * Clone rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString The JSON array of row ids
     */
    public async cloneDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsBatchApi", "cloneDraftTableRows", "tableIdOrName");
        }


        // verify required parameter 'batchInputString' is not null or undefined
        if (batchInputString === null || batchInputString === undefined) {
            throw new RequiredError("RowsBatchApi", "cloneDraftTableRows", "batchInputString");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/clone'
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
            ObjectSerializer.serialize(batchInputString, "BatchInputString", ""),
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
     * Creates rows in the `draft` version of the specified table, given an array of row objects. Maximum of 100 row object per call. See the overview section for more details with an example.
     * Create rows in batch
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3Request JSON array of row objects
     */
    public async createDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3Request: BatchInputHubDbTableRowV3Request, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsBatchApi", "createDraftTableRows", "tableIdOrName");
        }


        // verify required parameter 'batchInputHubDbTableRowV3Request' is not null or undefined
        if (batchInputHubDbTableRowV3Request === null || batchInputHubDbTableRowV3Request === undefined) {
            throw new RequiredError("RowsBatchApi", "createDraftTableRows", "batchInputHubDbTableRowV3Request");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/create'
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
            ObjectSerializer.serialize(batchInputHubDbTableRowV3Request, "BatchInputHubDbTableRowV3Request", ""),
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
     * Permanently deletes rows from the `draft` version of the table, given a set of row ids. Maximum of 100 row ids per call.
     * Permanently deletes rows
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString JSON array of row ids.
     */
    public async purgeDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsBatchApi", "purgeDraftTableRows", "tableIdOrName");
        }


        // verify required parameter 'batchInputString' is not null or undefined
        if (batchInputString === null || batchInputString === undefined) {
            throw new RequiredError("RowsBatchApi", "purgeDraftTableRows", "batchInputString");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/purge'
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
            ObjectSerializer.serialize(batchInputString, "BatchInputString", ""),
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
     * Returns rows in the `draft` version of the specified table, given a set of row ids.
     * Get a set of rows from draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputString JSON array of row ids.
     */
    public async readDraftTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsBatchApi", "readDraftTableRows", "tableIdOrName");
        }


        // verify required parameter 'batchInputString' is not null or undefined
        if (batchInputString === null || batchInputString === undefined) {
            throw new RequiredError("RowsBatchApi", "readDraftTableRows", "batchInputString");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/read'
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
            ObjectSerializer.serialize(batchInputString, "BatchInputString", ""),
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
     * Returns rows in the `published` version of the specified table, given a set of row ids. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get a set of rows
     * @param tableIdOrName The ID or name of the table to query.
     * @param batchInputString The JSON array of row ids
     */
    public async readTableRows(tableIdOrName: string, batchInputString: BatchInputString, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsBatchApi", "readTableRows", "tableIdOrName");
        }


        // verify required parameter 'batchInputString' is not null or undefined
        if (batchInputString === null || batchInputString === undefined) {
            throw new RequiredError("RowsBatchApi", "readTableRows", "batchInputString");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/batch/read'
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
            ObjectSerializer.serialize(batchInputString, "BatchInputString", ""),
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
     * Replaces multiple rows as a batch in the `draft` version of the table, with a maximum of 100 rows per call. See the endpoint `PUT /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Replace rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3BatchUpdateRequest JSON array of row objects.
     */
    public async replaceDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsBatchApi", "replaceDraftTableRows", "tableIdOrName");
        }


        // verify required parameter 'batchInputHubDbTableRowV3BatchUpdateRequest' is not null or undefined
        if (batchInputHubDbTableRowV3BatchUpdateRequest === null || batchInputHubDbTableRowV3BatchUpdateRequest === undefined) {
            throw new RequiredError("RowsBatchApi", "replaceDraftTableRows", "batchInputHubDbTableRowV3BatchUpdateRequest");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/replace'
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
            ObjectSerializer.serialize(batchInputHubDbTableRowV3BatchUpdateRequest, "BatchInputHubDbTableRowV3BatchUpdateRequest", ""),
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
     * Updates multiple rows as a batch in the `draft` version of the table, with a maximum of 100 rows per call. See the endpoint `PATCH /tables/{tableIdOrName}/rows/{rowId}/draft` for details on updating a single row.
     * Update rows in batch in draft table
     * @param tableIdOrName The ID or name of the table
     * @param batchInputHubDbTableRowV3BatchUpdateRequest JSON array of row objects.
     */
    public async updateDraftTableRows(tableIdOrName: string, batchInputHubDbTableRowV3BatchUpdateRequest: BatchInputHubDbTableRowV3BatchUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError("RowsBatchApi", "updateDraftTableRows", "tableIdOrName");
        }


        // verify required parameter 'batchInputHubDbTableRowV3BatchUpdateRequest' is not null or undefined
        if (batchInputHubDbTableRowV3BatchUpdateRequest === null || batchInputHubDbTableRowV3BatchUpdateRequest === undefined) {
            throw new RequiredError("RowsBatchApi", "updateDraftTableRows", "batchInputHubDbTableRowV3BatchUpdateRequest");
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/rows/draft/batch/update'
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
            ObjectSerializer.serialize(batchInputHubDbTableRowV3BatchUpdateRequest, "BatchInputHubDbTableRowV3BatchUpdateRequest", ""),
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

export class RowsBatchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloneDraftTableRows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloneDraftTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseHubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3", ""
            ) as BatchResponseHubDbTableRowV3;
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
            const body: BatchResponseHubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3", ""
            ) as BatchResponseHubDbTableRowV3;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDraftTableRows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDraftTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BatchResponseHubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3", ""
            ) as BatchResponseHubDbTableRowV3;
            return body;
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseHubDbTableRowV3WithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3WithErrors", ""
            ) as BatchResponseHubDbTableRowV3WithErrors;
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
            const body: BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors", ""
            ) as BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to purgeDraftTableRows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async purgeDraftTableRows(response: ResponseContext): Promise<void > {
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
     public async readDraftTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseHubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3", ""
            ) as BatchResponseHubDbTableRowV3;
            return body;
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseHubDbTableRowV3WithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3WithErrors", ""
            ) as BatchResponseHubDbTableRowV3WithErrors;
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
            const body: BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors", ""
            ) as BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readTableRows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseHubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3", ""
            ) as BatchResponseHubDbTableRowV3;
            return body;
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseHubDbTableRowV3WithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3WithErrors", ""
            ) as BatchResponseHubDbTableRowV3WithErrors;
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
            const body: BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors", ""
            ) as BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceDraftTableRows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceDraftTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseHubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3", ""
            ) as BatchResponseHubDbTableRowV3;
            return body;
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseHubDbTableRowV3WithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3WithErrors", ""
            ) as BatchResponseHubDbTableRowV3WithErrors;
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
            const body: BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors", ""
            ) as BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDraftTableRows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDraftTableRows(response: ResponseContext): Promise<BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseHubDbTableRowV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3", ""
            ) as BatchResponseHubDbTableRowV3;
            return body;
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseHubDbTableRowV3WithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3WithErrors", ""
            ) as BatchResponseHubDbTableRowV3WithErrors;
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
            const body: BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors", ""
            ) as BatchResponseHubDbTableRowV3 | BatchResponseHubDbTableRowV3WithErrors;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
