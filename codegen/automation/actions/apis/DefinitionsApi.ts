// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CollectionResponsePublicActionDefinitionForwardPaging } from '../models/CollectionResponsePublicActionDefinitionForwardPaging';
import { PublicActionDefinition } from '../models/PublicActionDefinition';
import { PublicActionDefinitionEgg } from '../models/PublicActionDefinitionEgg';
import { PublicActionDefinitionPatch } from '../models/PublicActionDefinitionPatch';

/**
 * no description
 */
export class DefinitionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Archive an extension definition
     * @param definitionId 
     * @param appId 
     */
    public async archive(definitionId: string, appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError("DefinitionsApi", "archive", "definitionId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefinitionsApi", "archive", "appId");
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

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
     * Create a new extension definition
     * @param appId 
     * @param publicActionDefinitionEgg 
     */
    public async create(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefinitionsApi", "create", "appId");
        }


        // verify required parameter 'publicActionDefinitionEgg' is not null or undefined
        if (publicActionDefinitionEgg === null || publicActionDefinitionEgg === undefined) {
            throw new RequiredError("DefinitionsApi", "create", "publicActionDefinitionEgg");
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(publicActionDefinitionEgg, "PublicActionDefinitionEgg", ""),
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
     * Get extension definition by Id
     * @param definitionId 
     * @param appId 
     * @param archived Whether to return only results that have been archived.
     */
    public async getById(definitionId: string, appId: number, archived?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError("DefinitionsApi", "getById", "definitionId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefinitionsApi", "getById", "appId");
        }



        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
        }


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
     * Get paged extension definitions
     * @param appId 
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param archived Whether to return only results that have been archived.
     */
    public async getPage(appId: number, limit?: number, after?: string, archived?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefinitionsApi", "getPage", "appId");
        }





        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }

        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
        }


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
     * Patch an existing extension definition
     * @param definitionId 
     * @param appId 
     * @param publicActionDefinitionPatch 
     */
    public async update(definitionId: string, appId: number, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new RequiredError("DefinitionsApi", "update", "definitionId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("DefinitionsApi", "update", "appId");
        }


        // verify required parameter 'publicActionDefinitionPatch' is not null or undefined
        if (publicActionDefinitionPatch === null || publicActionDefinitionPatch === undefined) {
            throw new RequiredError("DefinitionsApi", "update", "publicActionDefinitionPatch");
        }


        // Path Params
        const localVarPath = '/automation/v4/actions/{appId}/{definitionId}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(publicActionDefinitionPatch, "PublicActionDefinitionPatch", ""),
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

export class DefinitionsApiResponseProcessor {

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
     public async createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PublicActionDefinition >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: PublicActionDefinition = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionDefinition", ""
            ) as PublicActionDefinition;
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
            const body: PublicActionDefinition = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionDefinition", ""
            ) as PublicActionDefinition;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
     public async getByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PublicActionDefinition >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicActionDefinition = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionDefinition", ""
            ) as PublicActionDefinition;
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
            const body: PublicActionDefinition = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionDefinition", ""
            ) as PublicActionDefinition;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponsePublicActionDefinitionForwardPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponsePublicActionDefinitionForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicActionDefinitionForwardPaging", ""
            ) as CollectionResponsePublicActionDefinitionForwardPaging;
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
            const body: CollectionResponsePublicActionDefinitionForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicActionDefinitionForwardPaging", ""
            ) as CollectionResponsePublicActionDefinitionForwardPaging;
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
     public async updateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PublicActionDefinition >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicActionDefinition = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionDefinition", ""
            ) as PublicActionDefinition;
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
            const body: PublicActionDefinition = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicActionDefinition", ""
            ) as PublicActionDefinition;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
