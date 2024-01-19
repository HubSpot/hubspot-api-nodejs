// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CollectionResponsePublicActionFunctionIdentifierNoPaging } from '../models/CollectionResponsePublicActionFunctionIdentifierNoPaging';
import { PublicActionFunction } from '../models/PublicActionFunction';
import { PublicActionFunctionIdentifier } from '../models/PublicActionFunctionIdentifier';

/**
 * no description
 */
export class FunctionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     */
    public async deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError("FunctionsApi", "deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType", "definitionId");
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError("FunctionsApi", "deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType", "functionType");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("FunctionsApi", "deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType", "appId");
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Archive a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param functionId 
     * @param appId 
     */
    public async deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError("FunctionsApi", "deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "definitionId");
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError("FunctionsApi", "deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "functionType");
        }


        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsApi", "deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "functionId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("FunctionsApi", "deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "appId");
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all functions for a given definition
     * @param definitionId 
     * @param appId 
     */
    public async getAutomationV4ActionsAppIdDefinitionIdFunctions(definitionId: string, appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError("FunctionsApi", "getAutomationV4ActionsAppIdDefinitionIdFunctions", "definitionId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("FunctionsApi", "getAutomationV4ActionsAppIdDefinitionIdFunctions", "appId");
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}/functions'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all functions by a type for a given definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     */
    public async getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError("FunctionsApi", "getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType", "definitionId");
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError("FunctionsApi", "getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType", "functionType");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("FunctionsApi", "getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType", "appId");
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a function for a given definition
     * @param definitionId 
     * @param functionType 
     * @param functionId 
     * @param appId 
     */
    public async getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError("FunctionsApi", "getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "definitionId");
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError("FunctionsApi", "getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "functionType");
        }


        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsApi", "getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "functionId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("FunctionsApi", "getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "appId");
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Insert a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     * @param body 
     */
    public async putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, body: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError("FunctionsApi", "putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType", "definitionId");
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError("FunctionsApi", "putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType", "functionType");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("FunctionsApi", "putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType", "appId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("FunctionsApi", "putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType", "body");
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Insert a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param functionId 
     * @param appId 
     * @param body 
     */
    public async putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, body: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError("FunctionsApi", "putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "definitionId");
        }


        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new RequiredError("FunctionsApi", "putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "functionType");
        }


        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new RequiredError("FunctionsApi", "putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "functionId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("FunctionsApi", "putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "appId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("FunctionsApi", "putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId", "body");
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

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class FunctionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getAutomationV4ActionsAppIdDefinitionIdFunctions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutomationV4ActionsAppIdDefinitionIdFunctions(response: ResponseContext): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponsePublicActionFunctionIdentifierNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicActionFunctionIdentifierNoPaging", ""
            ) as CollectionResponsePublicActionFunctionIdentifierNoPaging;
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
            const body: CollectionResponsePublicActionFunctionIdentifierNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicActionFunctionIdentifierNoPaging", ""
            ) as CollectionResponsePublicActionFunctionIdentifierNoPaging;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(response: ResponseContext): Promise<PublicActionFunction > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicActionFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionFunction", ""
            ) as PublicActionFunction;
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
            const body: PublicActionFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionFunction", ""
            ) as PublicActionFunction;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(response: ResponseContext): Promise<PublicActionFunction > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicActionFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionFunction", ""
            ) as PublicActionFunction;
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
            const body: PublicActionFunction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionFunction", ""
            ) as PublicActionFunction;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(response: ResponseContext): Promise<PublicActionFunctionIdentifier > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicActionFunctionIdentifier = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionFunctionIdentifier", ""
            ) as PublicActionFunctionIdentifier;
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
            const body: PublicActionFunctionIdentifier = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionFunctionIdentifier", ""
            ) as PublicActionFunctionIdentifier;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(response: ResponseContext): Promise<PublicActionFunctionIdentifier > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicActionFunctionIdentifier = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionFunctionIdentifier", ""
            ) as PublicActionFunctionIdentifier;
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
            const body: PublicActionFunctionIdentifier = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionFunctionIdentifier", ""
            ) as PublicActionFunctionIdentifier;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
