// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectBatchInputForCreate } from '../models/BatchInputSimplePublicObjectBatchInputForCreate';
import { BatchInputSimplePublicObjectBatchInputUpsert } from '../models/BatchInputSimplePublicObjectBatchInputUpsert';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { BatchResponseSimplePublicUpsertObject } from '../models/BatchResponseSimplePublicUpsertObject';
import { BatchResponseSimplePublicUpsertObjectWithErrors } from '../models/BatchResponseSimplePublicUpsertObjectWithErrors';

/**
 * no description
 */
export class BatchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Archive a batch of taxes by ID
     * @param batchInputSimplePublicObjectId 
     */
    public async archive(batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchInputSimplePublicObjectId' is not null or undefined
        if (batchInputSimplePublicObjectId === null || batchInputSimplePublicObjectId === undefined) {
            throw new RequiredError("BatchApi", "archive", "batchInputSimplePublicObjectId");
        }


        // Path Params
        const localVarPath = '/crm/v3/objects/taxes/batch/archive';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputSimplePublicObjectId, "BatchInputSimplePublicObjectId", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a batch of taxes
     * @param batchInputSimplePublicObjectBatchInputForCreate 
     */
    public async create(batchInputSimplePublicObjectBatchInputForCreate: BatchInputSimplePublicObjectBatchInputForCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchInputSimplePublicObjectBatchInputForCreate' is not null or undefined
        if (batchInputSimplePublicObjectBatchInputForCreate === null || batchInputSimplePublicObjectBatchInputForCreate === undefined) {
            throw new RequiredError("BatchApi", "create", "batchInputSimplePublicObjectBatchInputForCreate");
        }


        // Path Params
        const localVarPath = '/crm/v3/objects/taxes/batch/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputSimplePublicObjectBatchInputForCreate, "BatchInputSimplePublicObjectBatchInputForCreate", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve records by record ID or include the `idProperty` parameter to retrieve records by a custom unique value property. 
     * Read a batch of taxes by internal ID, or unique property values
     * @param batchReadInputSimplePublicObjectId 
     * @param archived Whether to return only results that have been archived.
     */
    public async read(batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchReadInputSimplePublicObjectId' is not null or undefined
        if (batchReadInputSimplePublicObjectId === null || batchReadInputSimplePublicObjectId === undefined) {
            throw new RequiredError("BatchApi", "read", "batchReadInputSimplePublicObjectId");
        }



        // Path Params
        const localVarPath = '/crm/v3/objects/taxes/batch/read';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchReadInputSimplePublicObjectId, "BatchReadInputSimplePublicObjectId", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a batch of taxes by internal ID, or unique property values
     * @param batchInputSimplePublicObjectBatchInput 
     */
    public async update(batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchInputSimplePublicObjectBatchInput' is not null or undefined
        if (batchInputSimplePublicObjectBatchInput === null || batchInputSimplePublicObjectBatchInput === undefined) {
            throw new RequiredError("BatchApi", "update", "batchInputSimplePublicObjectBatchInput");
        }


        // Path Params
        const localVarPath = '/crm/v3/objects/taxes/batch/update';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputSimplePublicObjectBatchInput, "BatchInputSimplePublicObjectBatchInput", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create or update records identified by a unique property value as specified by the `idProperty` query param. `idProperty` query param refers to a property whose values are unique for the object.
     * Create or update a batch of taxes by unique property values
     * @param batchInputSimplePublicObjectBatchInputUpsert 
     */
    public async upsert(batchInputSimplePublicObjectBatchInputUpsert: BatchInputSimplePublicObjectBatchInputUpsert, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchInputSimplePublicObjectBatchInputUpsert' is not null or undefined
        if (batchInputSimplePublicObjectBatchInputUpsert === null || batchInputSimplePublicObjectBatchInputUpsert === undefined) {
            throw new RequiredError("BatchApi", "upsert", "batchInputSimplePublicObjectBatchInputUpsert");
        }


        // Path Params
        const localVarPath = '/crm/v3/objects/taxes/batch/upsert';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputSimplePublicObjectBatchInputUpsert, "BatchInputSimplePublicObjectBatchInputUpsert", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class BatchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BatchResponseSimplePublicObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicObject", ""
            ) as BatchResponseSimplePublicObject;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseSimplePublicObjectWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicObjectWithErrors", ""
            ) as BatchResponseSimplePublicObjectWithErrors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors", ""
            ) as BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to read
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseSimplePublicObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicObject", ""
            ) as BatchResponseSimplePublicObject;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseSimplePublicObjectWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicObjectWithErrors", ""
            ) as BatchResponseSimplePublicObjectWithErrors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors", ""
            ) as BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to update
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseSimplePublicObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicObject", ""
            ) as BatchResponseSimplePublicObject;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseSimplePublicObjectWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicObjectWithErrors", ""
            ) as BatchResponseSimplePublicObjectWithErrors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors", ""
            ) as BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsert
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async upsertWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseSimplePublicUpsertObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicUpsertObject", ""
            ) as BatchResponseSimplePublicUpsertObject;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseSimplePublicUpsertObjectWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicUpsertObjectWithErrors", ""
            ) as BatchResponseSimplePublicUpsertObjectWithErrors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject", ""
            ) as BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
