// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BatchInputSubscriptionBatchUpdateRequest } from '../models/BatchInputSubscriptionBatchUpdateRequest';
import { BatchResponseSubscriptionResponse } from '../models/BatchResponseSubscriptionResponse';
import { BatchResponseSubscriptionResponseWithErrors } from '../models/BatchResponseSubscriptionResponseWithErrors';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionPatchRequest } from '../models/SubscriptionPatchRequest';
import { SubscriptionResponse } from '../models/SubscriptionResponse';

/**
 * no description
 */
export class SubscriptionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param subscriptionId 
     * @param appId 
     * @param appId2 
     */
    public async archive(subscriptionId: number, appId: number, appId2: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("SubscriptionsApi", "archive", "subscriptionId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("SubscriptionsApi", "archive", "appId");
        }


        // verify required parameter 'appId2' is not null or undefined
        if (appId2 === null || appId2 === undefined) {
            throw new RequiredError("SubscriptionsApi", "archive", "appId2");
        }


        // Path Params
        const localVarPath = '/webhooks/v3/{appId}/subscriptions/{subscriptionId}'
            .replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(subscriptionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId2)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
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
     * @param appId 
     * @param appId2 
     * @param subscriptionCreateRequest 
     */
    public async create(appId: number, appId2: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("SubscriptionsApi", "create", "appId");
        }


        // verify required parameter 'appId2' is not null or undefined
        if (appId2 === null || appId2 === undefined) {
            throw new RequiredError("SubscriptionsApi", "create", "appId2");
        }


        // verify required parameter 'subscriptionCreateRequest' is not null or undefined
        if (subscriptionCreateRequest === null || subscriptionCreateRequest === undefined) {
            throw new RequiredError("SubscriptionsApi", "create", "subscriptionCreateRequest");
        }


        // Path Params
        const localVarPath = '/webhooks/v3/{appId}/subscriptions'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId2)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(subscriptionCreateRequest, "SubscriptionCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
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
     * @param appId 
     * @param appId2 
     */
    public async getAll(appId: number, appId2: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("SubscriptionsApi", "getAll", "appId");
        }


        // verify required parameter 'appId2' is not null or undefined
        if (appId2 === null || appId2 === undefined) {
            throw new RequiredError("SubscriptionsApi", "getAll", "appId2");
        }


        // Path Params
        const localVarPath = '/webhooks/v3/{appId}/subscriptions'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId2)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
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
     * @param subscriptionId 
     * @param appId 
     * @param appId2 
     */
    public async getById(subscriptionId: number, appId: number, appId2: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("SubscriptionsApi", "getById", "subscriptionId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("SubscriptionsApi", "getById", "appId");
        }


        // verify required parameter 'appId2' is not null or undefined
        if (appId2 === null || appId2 === undefined) {
            throw new RequiredError("SubscriptionsApi", "getById", "appId2");
        }


        // Path Params
        const localVarPath = '/webhooks/v3/{appId}/subscriptions/{subscriptionId}'
            .replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(subscriptionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId2)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
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
     * @param subscriptionId 
     * @param appId 
     * @param appId2 
     * @param subscriptionPatchRequest 
     */
    public async update(subscriptionId: number, appId: number, appId2: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subscriptionId' is not null or undefined
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError("SubscriptionsApi", "update", "subscriptionId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("SubscriptionsApi", "update", "appId");
        }


        // verify required parameter 'appId2' is not null or undefined
        if (appId2 === null || appId2 === undefined) {
            throw new RequiredError("SubscriptionsApi", "update", "appId2");
        }


        // verify required parameter 'subscriptionPatchRequest' is not null or undefined
        if (subscriptionPatchRequest === null || subscriptionPatchRequest === undefined) {
            throw new RequiredError("SubscriptionsApi", "update", "subscriptionPatchRequest");
        }


        // Path Params
        const localVarPath = '/webhooks/v3/{appId}/subscriptions/{subscriptionId}'
            .replace('{' + 'subscriptionId' + '}', encodeURIComponent(String(subscriptionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId2)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(subscriptionPatchRequest, "SubscriptionPatchRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
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
     * @param appId 
     * @param appId2 
     * @param batchInputSubscriptionBatchUpdateRequest 
     */
    public async updateBatch(appId: number, appId2: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("SubscriptionsApi", "updateBatch", "appId");
        }


        // verify required parameter 'appId2' is not null or undefined
        if (appId2 === null || appId2 === undefined) {
            throw new RequiredError("SubscriptionsApi", "updateBatch", "appId2");
        }


        // verify required parameter 'batchInputSubscriptionBatchUpdateRequest' is not null or undefined
        if (batchInputSubscriptionBatchUpdateRequest === null || batchInputSubscriptionBatchUpdateRequest === undefined) {
            throw new RequiredError("SubscriptionsApi", "updateBatch", "batchInputSubscriptionBatchUpdateRequest");
        }


        // Path Params
        const localVarPath = '/webhooks/v3/{appId}/subscriptions/batch/update'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId2)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputSubscriptionBatchUpdateRequest, "BatchInputSubscriptionBatchUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
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

export class SubscriptionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archive(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, "An error occurred.", body, response.headers);
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
     * @params response Response returned by the server for a request to create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async create(response: ResponseContext): Promise<SubscriptionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAll(response: ResponseContext): Promise<SubscriptionListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubscriptionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionListResponse", ""
            ) as SubscriptionListResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionListResponse", ""
            ) as SubscriptionListResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getById(response: ResponseContext): Promise<SubscriptionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
            return body;
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
     public async update(response: ResponseContext): Promise<SubscriptionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionResponse", ""
            ) as SubscriptionResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBatch(response: ResponseContext): Promise<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseSubscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSubscriptionResponse", ""
            ) as BatchResponseSubscriptionResponse;
            return body;
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseSubscriptionResponseWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSubscriptionResponseWithErrors", ""
            ) as BatchResponseSubscriptionResponseWithErrors;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors", ""
            ) as BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
