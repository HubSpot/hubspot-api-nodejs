// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ActionResponse } from '../models/ActionResponse';
import { CollectionResponsePublicImportResponse } from '../models/CollectionResponsePublicImportResponse';
import { PublicImportResponse } from '../models/PublicImportResponse';

/**
 * no description
 */
export class CoreApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param importId 
     */
    public async cancel(importId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'importId' is not null or undefined
        if (importId === null || importId === undefined) {
            throw new RequiredError('Required parameter importId was null or undefined when calling cancel.');
        }


        // Path Params
        const localVarPath = '/crm/v3/imports/{importId}/cancel'
            .replace('{' + 'importId' + '}', encodeURIComponent(String(importId)));

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
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param files A list of files containing the data to import
     * @param importRequest JSON formatted metadata about the import. This includes a name for the import and the column mappings for each file. See the overview tab for more on the required format.
     */
    public async create(files?: HttpFile, importRequest?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/crm/v3/imports/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params
        let localVarFormParams = new FormData();

        if (files !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('files', files.data, files.name);
        }
        if (importRequest !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('importRequest', importRequest as any);
        }
        requestContext.setBody(localVarFormParams);

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
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param importId 
     */
    public async getById(importId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'importId' is not null or undefined
        if (importId === null || importId === undefined) {
            throw new RequiredError('Required parameter importId was null or undefined when calling getById.');
        }


        // Path Params
        const localVarPath = '/crm/v3/imports/{importId}'
            .replace('{' + 'importId' + '}', encodeURIComponent(String(importId)));

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
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to display per page.
     */
    public async getPage(after?: string, before?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/crm/v3/imports/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
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

}

export class CoreApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancel(response: ResponseContext): Promise<ActionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionResponse", ""
            ) as ActionResponse;
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
            const body: ActionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionResponse", ""
            ) as ActionResponse;
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
     public async create(response: ResponseContext): Promise<PublicImportResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicImportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicImportResponse", ""
            ) as PublicImportResponse;
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
            const body: PublicImportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicImportResponse", ""
            ) as PublicImportResponse;
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
     public async getById(response: ResponseContext): Promise<PublicImportResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicImportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicImportResponse", ""
            ) as PublicImportResponse;
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
            const body: PublicImportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicImportResponse", ""
            ) as PublicImportResponse;
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
     public async getPage(response: ResponseContext): Promise<CollectionResponsePublicImportResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponsePublicImportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicImportResponse", ""
            ) as CollectionResponsePublicImportResponse;
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
            const body: CollectionResponsePublicImportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicImportResponse", ""
            ) as CollectionResponsePublicImportResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
