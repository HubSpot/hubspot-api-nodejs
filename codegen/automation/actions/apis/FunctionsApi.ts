// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ActionFunction } from '../models/ActionFunction';
import { ActionFunctionIdentifier } from '../models/ActionFunctionIdentifier';
import { CollectionResponseActionFunctionIdentifierNoPaging } from '../models/CollectionResponseActionFunctionIdentifierNoPaging';

/**
 * no description
 */
export class FunctionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
     * Delete a custom action function
     * @param definitionId The ID of the custom workflow action
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId 
     */
    public async archive(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError('Required parameter definitionId was null or undefined when calling archive.');
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError('Required parameter functionType was null or undefined when calling archive.');
        }


        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError('Required parameter functionId was null or undefined when calling archive.');
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling archive.');
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'functionId' + '}', encodeURIComponent(String(functionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
     * Delete a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     */
    public async archiveByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError('Required parameter definitionId was null or undefined when calling archiveByFunctionType.');
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError('Required parameter functionType was null or undefined when calling archiveByFunctionType.');
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling archiveByFunctionType.');
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates or replaces a function for a custom workflow action.
     * Create or replace a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId 
     * @param body The function source code. Must be valid JavaScript code.
     */
    public async createOrReplace(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, body: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError('Required parameter definitionId was null or undefined when calling createOrReplace.');
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError('Required parameter functionType was null or undefined when calling createOrReplace.');
        }


        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError('Required parameter functionId was null or undefined when calling createOrReplace.');
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling createOrReplace.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createOrReplace.');
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'functionId' + '}', encodeURIComponent(String(functionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "text/plain"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates or replaces a function for a custom workflow action.
     * Create or replace a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     * @param body The function source code. Must be valid JavaScript code.
     */
    public async createOrReplaceByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, body: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError('Required parameter definitionId was null or undefined when calling createOrReplaceByFunctionType.');
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError('Required parameter functionType was null or undefined when calling createOrReplaceByFunctionType.');
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling createOrReplaceByFunctionType.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createOrReplaceByFunctionType.');
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "text/plain"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the given function for a custom workflow action.
     * Get a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     */
    public async getByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError('Required parameter definitionId was null or undefined when calling getByFunctionType.');
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError('Required parameter functionType was null or undefined when calling getByFunctionType.');
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling getByFunctionType.');
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the given function for a custom workflow action.
     * Get a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId 
     */
    public async getById(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError('Required parameter definitionId was null or undefined when calling getById.');
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError('Required parameter functionType was null or undefined when calling getById.');
        }


        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError('Required parameter functionId was null or undefined when calling getById.');
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling getById.');
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'functionId' + '}', encodeURIComponent(String(functionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a list of all functions that are associated with the given custom workflow action.
     * Get all custom action functions
     * @param definitionId The ID of the custom workflow action.
     * @param appId 
     */
    public async getPage(definitionId: string, appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError('Required parameter definitionId was null or undefined when calling getPage.');
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling getPage.');
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}/functions'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class FunctionsApiResponseProcessor {

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
     * @params response Response returned by the server for a request to archiveByFunctionType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveByFunctionType(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to createOrReplace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createOrReplace(response: ResponseContext): Promise<ActionFunctionIdentifier > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionFunctionIdentifier = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionFunctionIdentifier", ""
            ) as ActionFunctionIdentifier;
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
            const body: ActionFunctionIdentifier = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionFunctionIdentifier", ""
            ) as ActionFunctionIdentifier;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOrReplaceByFunctionType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createOrReplaceByFunctionType(response: ResponseContext): Promise<ActionFunctionIdentifier > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionFunctionIdentifier = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionFunctionIdentifier", ""
            ) as ActionFunctionIdentifier;
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
            const body: ActionFunctionIdentifier = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionFunctionIdentifier", ""
            ) as ActionFunctionIdentifier;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getByFunctionType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByFunctionType(response: ResponseContext): Promise<ActionFunction > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionFunction", ""
            ) as ActionFunction;
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
            const body: ActionFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionFunction", ""
            ) as ActionFunction;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getById(response: ResponseContext): Promise<ActionFunction > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionFunction", ""
            ) as ActionFunction;
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
            const body: ActionFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionFunction", ""
            ) as ActionFunction;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPage(response: ResponseContext): Promise<CollectionResponseActionFunctionIdentifierNoPaging > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseActionFunctionIdentifierNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseActionFunctionIdentifierNoPaging", ""
            ) as CollectionResponseActionFunctionIdentifierNoPaging;
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
            const body: CollectionResponseActionFunctionIdentifierNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseActionFunctionIdentifierNoPaging", ""
            ) as CollectionResponseActionFunctionIdentifierNoPaging;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
