// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CollectionResponseFolder } from '../models/CollectionResponseFolder';
import { Folder } from '../models/Folder';
import { FolderActionResponse } from '../models/FolderActionResponse';
import { FolderInput } from '../models/FolderInput';
import { FolderUpdateInput } from '../models/FolderUpdateInput';
import { FolderUpdateInputWithId } from '../models/FolderUpdateInputWithId';
import { FolderUpdateTaskLocator } from '../models/FolderUpdateTaskLocator';

/**
 * no description
 */
export class FoldersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete folder by ID.
     * Delete folder by ID
     * @param folderId ID of folder to delete.
     */
    public async archive(folderId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'folderId' is not null or undefined
        if (folderId === null || folderId === undefined) {
            throw new RequiredError("FoldersApi", "archive", "folderId");
        }


        // Path Params
        const localVarPath = '/files/v3/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Delete a folder, identified by its path.
     * Delete folder by path
     * @param folderPath Path of folder to delete
     */
    public async archiveByPath(folderPath: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'folderPath' is not null or undefined
        if (folderPath === null || folderPath === undefined) {
            throw new RequiredError("FoldersApi", "archiveByPath", "folderPath");
        }


        // Path Params
        const localVarPath = '/files/v3/folders/{folderPath}'
            .replace('{' + 'folderPath' + '}', encodeURIComponent(String(folderPath)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Check status of folder update. Folder updates happen asynchronously.
     * Check folder update status
     * @param taskId The ID of the folder update task.
     */
    public async checkUpdateStatus(taskId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'taskId' is not null or undefined
        if (taskId === null || taskId === undefined) {
            throw new RequiredError("FoldersApi", "checkUpdateStatus", "taskId");
        }


        // Path Params
        const localVarPath = '/files/v3/folders/update/async/tasks/{taskId}/status'
            .replace('{' + 'taskId' + '}', encodeURIComponent(String(taskId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Creates a folder.
     * Create folder
     * @param folderInput Folder creation options
     */
    public async create(folderInput: FolderInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'folderInput' is not null or undefined
        if (folderInput === null || folderInput === undefined) {
            throw new RequiredError("FoldersApi", "create", "folderInput");
        }


        // Path Params
        const localVarPath = '/files/v3/folders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(folderInput, "FolderInput", ""),
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
     * Search for folders. Does not contain hidden or archived folders.
     * Search folders
     * @param properties Properties that should be included in the returned folders.
     * @param after Offset search results by this value. The default offset is 0 and the maximum offset of items for a given search is 10,000. Narrow your search down if you are reaching this limit.
     * @param before 
     * @param limit Number of items to return. Default limit is 10, maximum limit is 100.
     * @param sort Sort results by given property. For example -name sorts by name field descending, name sorts by name field ascending.
     * @param ids 
     * @param idLte 
     * @param idGte 
     * @param createdAt Search folders by exact time of creation. Time must be epoch time in milliseconds.
     * @param createdAtLte Search folders by less than or equal to time of creation. Can be used with createdAtGte to create a range.
     * @param createdAtGte Search folders by greater than or equal to time of creation. Can be used with createdAtLte to create a range.
     * @param updatedAt Search folders by exact time of latest updated. Time must be epoch time in milliseconds.
     * @param updatedAtLte Search folders by less than or equal to time of latest update. Can be used with updatedAtGte to create a range.
     * @param updatedAtGte Search folders by greater than or equal to time of latest update. Can be used with updatedAtLte to create a range.
     * @param name Search for folders containing the specified name.
     * @param path Search folders by path.
     * @param parentFolderIds Search folders with the given parent folderId.
     */
    public async doSearch(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, ids?: Array<number>, idLte?: number, idGte?: number, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderIds?: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


















        // Path Params
        const localVarPath = '/files/v3/folders/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (properties !== undefined) {
            const serializedParams = ObjectSerializer.serialize(properties, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("properties", serializedParam);
            }
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }

        // Query Params
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (sort !== undefined) {
            const serializedParams = ObjectSerializer.serialize(sort, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("sort", serializedParam);
            }
        }

        // Query Params
        if (ids !== undefined) {
            const serializedParams = ObjectSerializer.serialize(ids, "Array<number>", "int64");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("ids", serializedParam);
            }
        }

        // Query Params
        if (idLte !== undefined) {
            requestContext.setQueryParam("idLte", ObjectSerializer.serialize(idLte, "number", "int64"));
        }

        // Query Params
        if (idGte !== undefined) {
            requestContext.setQueryParam("idGte", ObjectSerializer.serialize(idGte, "number", "int64"));
        }

        // Query Params
        if (createdAt !== undefined) {
            requestContext.setQueryParam("createdAt", ObjectSerializer.serialize(createdAt, "Date", "date-time"));
        }

        // Query Params
        if (createdAtLte !== undefined) {
            requestContext.setQueryParam("createdAtLte", ObjectSerializer.serialize(createdAtLte, "Date", "date-time"));
        }

        // Query Params
        if (createdAtGte !== undefined) {
            requestContext.setQueryParam("createdAtGte", ObjectSerializer.serialize(createdAtGte, "Date", "date-time"));
        }

        // Query Params
        if (updatedAt !== undefined) {
            requestContext.setQueryParam("updatedAt", ObjectSerializer.serialize(updatedAt, "Date", "date-time"));
        }

        // Query Params
        if (updatedAtLte !== undefined) {
            requestContext.setQueryParam("updatedAtLte", ObjectSerializer.serialize(updatedAtLte, "Date", "date-time"));
        }

        // Query Params
        if (updatedAtGte !== undefined) {
            requestContext.setQueryParam("updatedAtGte", ObjectSerializer.serialize(updatedAtGte, "Date", "date-time"));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (path !== undefined) {
            requestContext.setQueryParam("path", ObjectSerializer.serialize(path, "string", ""));
        }

        // Query Params
        if (parentFolderIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(parentFolderIds, "Array<number>", "int64");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("parentFolderIds", serializedParam);
            }
        }


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
     * Retrieve a folder by its ID.
     * Retrieve folder by ID
     * @param folderId ID of desired folder
     * @param properties Properties to set on returned folder.
     */
    public async getById(folderId: string, properties?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'folderId' is not null or undefined
        if (folderId === null || folderId === undefined) {
            throw new RequiredError("FoldersApi", "getById", "folderId");
        }



        // Path Params
        const localVarPath = '/files/v3/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (properties !== undefined) {
            const serializedParams = ObjectSerializer.serialize(properties, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("properties", serializedParam);
            }
        }


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
     * Retrieve a folder, identified by its path.
     * Retrieve folder by path
     * @param folderPath Path of desired folder.
     * @param properties Properties to set on returned folder.
     */
    public async getByPath(folderPath: string, properties?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'folderPath' is not null or undefined
        if (folderPath === null || folderPath === undefined) {
            throw new RequiredError("FoldersApi", "getByPath", "folderPath");
        }



        // Path Params
        const localVarPath = '/files/v3/folders/{folderPath}'
            .replace('{' + 'folderPath' + '}', encodeURIComponent(String(folderPath)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (properties !== undefined) {
            const serializedParams = ObjectSerializer.serialize(properties, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("properties", serializedParam);
            }
        }


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
     * Update a folder\'s properties, identified by folder ID.
     * Update folder properties by folder ID
     * @param folderId ID of folder to update
     * @param folderUpdateInput 
     */
    public async updateProperties(folderId: string, folderUpdateInput: FolderUpdateInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'folderId' is not null or undefined
        if (folderId === null || folderId === undefined) {
            throw new RequiredError("FoldersApi", "updateProperties", "folderId");
        }


        // verify required parameter 'folderUpdateInput' is not null or undefined
        if (folderUpdateInput === null || folderUpdateInput === undefined) {
            throw new RequiredError("FoldersApi", "updateProperties", "folderUpdateInput");
        }


        // Path Params
        const localVarPath = '/files/v3/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(folderUpdateInput, "FolderUpdateInput", ""),
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
     * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder\'s children as well.
     * Update folder properties
     * @param folderUpdateInputWithId 
     */
    public async updatePropertiesRecursively(folderUpdateInputWithId: FolderUpdateInputWithId, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'folderUpdateInputWithId' is not null or undefined
        if (folderUpdateInputWithId === null || folderUpdateInputWithId === undefined) {
            throw new RequiredError("FoldersApi", "updatePropertiesRecursively", "folderUpdateInputWithId");
        }


        // Path Params
        const localVarPath = '/files/v3/folders/update/async';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(folderUpdateInputWithId, "FolderUpdateInputWithId", ""),
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

export class FoldersApiResponseProcessor {

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
     * @params response Response returned by the server for a request to archiveByPath
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveByPathWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to checkUpdateStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkUpdateStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FolderActionResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FolderActionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FolderActionResponse", ""
            ) as FolderActionResponse;
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
            const body: FolderActionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FolderActionResponse", ""
            ) as FolderActionResponse;
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
     public async createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Folder >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Folder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Folder", ""
            ) as Folder;
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
            const body: Folder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Folder", ""
            ) as Folder;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to doSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async doSearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseFolder >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseFolder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseFolder", ""
            ) as CollectionResponseFolder;
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
            const body: CollectionResponseFolder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseFolder", ""
            ) as CollectionResponseFolder;
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
     public async getByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Folder >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Folder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Folder", ""
            ) as Folder;
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
            const body: Folder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Folder", ""
            ) as Folder;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getByPath
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByPathWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Folder >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Folder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Folder", ""
            ) as Folder;
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
            const body: Folder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Folder", ""
            ) as Folder;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePropertiesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Folder >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Folder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Folder", ""
            ) as Folder;
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
            const body: Folder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Folder", ""
            ) as Folder;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePropertiesRecursively
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePropertiesRecursivelyWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FolderUpdateTaskLocator >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: FolderUpdateTaskLocator = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FolderUpdateTaskLocator", ""
            ) as FolderUpdateTaskLocator;
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
            const body: FolderUpdateTaskLocator = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FolderUpdateTaskLocator", ""
            ) as FolderUpdateTaskLocator;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
