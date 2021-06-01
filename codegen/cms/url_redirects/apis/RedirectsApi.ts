// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CollectionResponseWithTotalUrlMapping } from '../models/CollectionResponseWithTotalUrlMapping';
import { UrlMapping } from '../models/UrlMapping';
import { UrlMappingCreateRequestBody } from '../models/UrlMappingCreateRequestBody';

/**
 * no description
 */
export class RedirectsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete one existing redirect, so it is no longer mapped.
     * Delete a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public async archive(urlRedirectId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'urlRedirectId' is not null or undefined
        if (urlRedirectId === null || urlRedirectId === undefined) {
            throw new RequiredError('Required parameter urlRedirectId was null or undefined when calling archive.');
        }


        // Path Params
        const localVarPath = '/cms/v3/url-redirects/{urlRedirectId}'
            .replace('{' + 'urlRedirectId' + '}', encodeURIComponent(String(urlRedirectId)));

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
     * Creates and configures a new URL redirect.
     * Create a redirect
     * @param urlMappingCreateRequestBody 
     */
    public async create(urlMappingCreateRequestBody?: UrlMappingCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/cms/v3/url-redirects/';

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
            ObjectSerializer.serialize(urlMappingCreateRequestBody, "UrlMappingCreateRequestBody", ""),
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
     * Returns the details for a single existing URL redirect by ID.
     * Get details for a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public async getById(urlRedirectId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'urlRedirectId' is not null or undefined
        if (urlRedirectId === null || urlRedirectId === undefined) {
            throw new RequiredError('Required parameter urlRedirectId was null or undefined when calling getById.');
        }


        // Path Params
        const localVarPath = '/cms/v3/url-redirects/{urlRedirectId}'
            .replace('{' + 'urlRedirectId' + '}', encodeURIComponent(String(urlRedirectId)));

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
     * Returns all existing URL redirects. Results can be limited and filtered by creation or updated date.
     * Get current redirects
     * @param createdAt Only return redirects created on exactly this date.
     * @param createdAfter Only return redirects created after this date.
     * @param createdBefore Only return redirects created before this date.
     * @param updatedAt Only return redirects last updated on exactly this date.
     * @param updatedAfter Only return redirects last updated after this date.
     * @param updatedBefore Only return redirects last updated before this date.
     * @param sort 
     * @param properties 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit Maximum number of result per page
     * @param archived Whether to return only results that have been archived.
     */
    public async getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, properties?: Array<string>, after?: string, before?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/cms/v3/url-redirects/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (createdAt !== undefined) {
            requestContext.setQueryParam("createdAt", ObjectSerializer.serialize(createdAt, "Date", "date-time"));
        }
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("createdAfter", ObjectSerializer.serialize(createdAfter, "Date", "date-time"));
        }
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("createdBefore", ObjectSerializer.serialize(createdBefore, "Date", "date-time"));
        }
        if (updatedAt !== undefined) {
            requestContext.setQueryParam("updatedAt", ObjectSerializer.serialize(updatedAt, "Date", "date-time"));
        }
        if (updatedAfter !== undefined) {
            requestContext.setQueryParam("updatedAfter", ObjectSerializer.serialize(updatedAfter, "Date", "date-time"));
        }
        if (updatedBefore !== undefined) {
            requestContext.setQueryParam("updatedBefore", ObjectSerializer.serialize(updatedBefore, "Date", "date-time"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer.serialize(properties, "Array<string>", ""));
        }
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
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
     * Updates the settings for an existing URL redirect.
     * Update a redirect
     * @param urlRedirectId 
     * @param urlMapping 
     */
    public async update(urlRedirectId: string, urlMapping?: UrlMapping, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'urlRedirectId' is not null or undefined
        if (urlRedirectId === null || urlRedirectId === undefined) {
            throw new RequiredError('Required parameter urlRedirectId was null or undefined when calling update.');
        }



        // Path Params
        const localVarPath = '/cms/v3/url-redirects/{urlRedirectId}'
            .replace('{' + 'urlRedirectId' + '}', encodeURIComponent(String(urlRedirectId)));

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
            ObjectSerializer.serialize(urlMapping, "UrlMapping", ""),
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

export class RedirectsApiResponseProcessor {

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
     * @params response Response returned by the server for a request to create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async create(response: ResponseContext): Promise<UrlMapping > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: UrlMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UrlMapping", ""
            ) as UrlMapping;
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
            const body: UrlMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UrlMapping", ""
            ) as UrlMapping;
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
     public async getById(response: ResponseContext): Promise<UrlMapping > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UrlMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UrlMapping", ""
            ) as UrlMapping;
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
            const body: UrlMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UrlMapping", ""
            ) as UrlMapping;
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
     public async getPage(response: ResponseContext): Promise<CollectionResponseWithTotalUrlMapping > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalUrlMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalUrlMapping", ""
            ) as CollectionResponseWithTotalUrlMapping;
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
            const body: CollectionResponseWithTotalUrlMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalUrlMapping", ""
            ) as CollectionResponseWithTotalUrlMapping;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to update
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async update(response: ResponseContext): Promise<UrlMapping > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UrlMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UrlMapping", ""
            ) as UrlMapping;
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
            const body: UrlMapping = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UrlMapping", ""
            ) as UrlMapping;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
