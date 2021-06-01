// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CollectionResponseFile } from '../models/CollectionResponseFile';
import { FileActionResponse } from '../models/FileActionResponse';
import { FileUpdateInput } from '../models/FileUpdateInput';
import { ImportFromUrlInput } from '../models/ImportFromUrlInput';
import { ImportFromUrlTaskLocator } from '../models/ImportFromUrlTaskLocator';
import { ModelFile } from '../models/ModelFile';
import { SignedUrl } from '../models/SignedUrl';

/**
 * no description
 */
export class FilesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete file by ID
     * Delete file
     * @param fileId File ID to delete
     */
    public async archive(fileId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fileId' is not null or undefined
        if (fileId === null || fileId === undefined) {
            throw new RequiredError('Required parameter fileId was null or undefined when calling archive.');
        }


        // Path Params
        const localVarPath = '/files/v3/files/{fileId}'
            .replace('{' + 'fileId' + '}', encodeURIComponent(String(fileId)));

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
     * GDRP delete file
     * GDPR delete
     * @param fileId ID of file to GDPR delete
     */
    public async archiveGDPR(fileId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fileId' is not null or undefined
        if (fileId === null || fileId === undefined) {
            throw new RequiredError('Required parameter fileId was null or undefined when calling archiveGDPR.');
        }


        // Path Params
        const localVarPath = '/files/v3/files/{fileId}/gdpr-delete'
            .replace('{' + 'fileId' + '}', encodeURIComponent(String(fileId)));

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
     * Check the status of requested import.
     * Check import status.
     * @param taskId Import by URL task ID
     */
    public async checkImport(taskId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'taskId' is not null or undefined
        if (taskId === null || taskId === undefined) {
            throw new RequiredError('Required parameter taskId was null or undefined when calling checkImport.');
        }


        // Path Params
        const localVarPath = '/files/v3/files/import-from-url/async/tasks/{taskId}/status'
            .replace('{' + 'taskId' + '}', encodeURIComponent(String(taskId)));

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
     * Search through files in the file manager. Does not display hidden or archived files.
     * Search files
     * @param properties Desired file properties in the return object.
     * @param after The maximum offset of items for a given search is 10000. Narrow your search down if you are reaching this limit.
     * @param before 
     * @param limit Number of items to return. Maximum limit is 100.
     * @param sort Sort files by a given field.
     * @param id Search files by given ID.
     * @param createdAt Search files by time of creation.
     * @param updatedAt Search files by time of latest updated.
     * @param name Search for files containing the given name.
     * @param path Search files by path.
     * @param parentFolderId Search files within given folder ID.
     * @param size Query by file size.
     * @param height Search files by height of image or video.
     * @param width Search files by width of image or video.
     * @param encoding Search files with specified encoding.
     * @param type Filter by provided file type.
     * @param extension Search files by given extension.
     * @param url Search for given URL
     * @param isUsableInContent If true shows files that have been marked to be used in new content. It false shows files that should not be used in new content.
     * @param allowsAnonymousAccess If &#39;true&#39; will show private files; if &#39;false&#39; will show public files
     */
    public async doSearch(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, id?: string, createdAt?: Date, updatedAt?: Date, name?: string, path?: string, parentFolderId?: number, size?: number, height?: number, width?: number, encoding?: string, type?: string, extension?: string, url?: string, isUsableInContent?: boolean, allowsAnonymousAccess?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





















        // Path Params
        const localVarPath = '/files/v3/files/search';

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
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }
        if (createdAt !== undefined) {
            requestContext.setQueryParam("createdAt", ObjectSerializer.serialize(createdAt, "Date", "date-time"));
        }
        if (updatedAt !== undefined) {
            requestContext.setQueryParam("updatedAt", ObjectSerializer.serialize(updatedAt, "Date", "date-time"));
        }
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }
        if (path !== undefined) {
            requestContext.setQueryParam("path", ObjectSerializer.serialize(path, "string", ""));
        }
        if (parentFolderId !== undefined) {
            requestContext.setQueryParam("parentFolderId", ObjectSerializer.serialize(parentFolderId, "number", "int64"));
        }
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int64"));
        }
        if (height !== undefined) {
            requestContext.setQueryParam("height", ObjectSerializer.serialize(height, "number", "int32"));
        }
        if (width !== undefined) {
            requestContext.setQueryParam("width", ObjectSerializer.serialize(width, "number", "int32"));
        }
        if (encoding !== undefined) {
            requestContext.setQueryParam("encoding", ObjectSerializer.serialize(encoding, "string", ""));
        }
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }
        if (extension !== undefined) {
            requestContext.setQueryParam("extension", ObjectSerializer.serialize(extension, "string", ""));
        }
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "string", ""));
        }
        if (isUsableInContent !== undefined) {
            requestContext.setQueryParam("isUsableInContent", ObjectSerializer.serialize(isUsableInContent, "boolean", ""));
        }
        if (allowsAnonymousAccess !== undefined) {
            requestContext.setQueryParam("allowsAnonymousAccess", ObjectSerializer.serialize(allowsAnonymousAccess, "boolean", ""));
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
     * Get file by ID.
     * Get file.
     * @param fileId Id of the desired file.
     * @param properties 
     */
    public async getById(fileId: string, properties?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fileId' is not null or undefined
        if (fileId === null || fileId === undefined) {
            throw new RequiredError('Required parameter fileId was null or undefined when calling getById.');
        }



        // Path Params
        const localVarPath = '/files/v3/files/{fileId}'
            .replace('{' + 'fileId' + '}', encodeURIComponent(String(fileId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer.serialize(properties, "Array<string>", ""));
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
     * Generates signed URL that allows temporary access to a private file.
     * Get signed URL to access private file.
     * @param fileId ID of file.
     * @param size For image files. This will resize the image to the desired size before sharing. Does not affect the original file, just the file served by this signed URL.
     * @param expirationSeconds How long in seconds the link will provide access to the file.
     * @param upscale If size is provided, this will upscale the image to fit the size dimensions.
     */
    public async getSignedUrl(fileId: string, size?: 'thumb' | 'icon' | 'medium' | 'preview', expirationSeconds?: number, upscale?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fileId' is not null or undefined
        if (fileId === null || fileId === undefined) {
            throw new RequiredError('Required parameter fileId was null or undefined when calling getSignedUrl.');
        }





        // Path Params
        const localVarPath = '/files/v3/files/{fileId}/signed-url'
            .replace('{' + 'fileId' + '}', encodeURIComponent(String(fileId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "'thumb' | 'icon' | 'medium' | 'preview'", ""));
        }
        if (expirationSeconds !== undefined) {
            requestContext.setQueryParam("expirationSeconds", ObjectSerializer.serialize(expirationSeconds, "number", "int64"));
        }
        if (upscale !== undefined) {
            requestContext.setQueryParam("upscale", ObjectSerializer.serialize(upscale, "boolean", ""));
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
     * Asynchronously imports the file at the given URL into the file manager.
     * Import a file from a URL into the file manager.
     * @param importFromUrlInput 
     */
    public async importFromUrl(importFromUrlInput: ImportFromUrlInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'importFromUrlInput' is not null or undefined
        if (importFromUrlInput === null || importFromUrlInput === undefined) {
            throw new RequiredError('Required parameter importFromUrlInput was null or undefined when calling importFromUrl.');
        }


        // Path Params
        const localVarPath = '/files/v3/files/import-from-url/async';

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
            ObjectSerializer.serialize(importFromUrlInput, "ImportFromUrlInput", ""),
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
     * Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
     * Replace file.
     * @param fileId Id of the desired file.
     * @param userAgent 
     * @param file File data that will replace existing file in the file manager.
     * @param charsetHunch Character set of given file data.
     * @param options JSON String representing FileReplaceOptions
     */
    public async replace(fileId: string, userAgent?: string, file?: HttpFile, charsetHunch?: string, options?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fileId' is not null or undefined
        if (fileId === null || fileId === undefined) {
            throw new RequiredError('Required parameter fileId was null or undefined when calling replace.');
        }






        // Path Params
        const localVarPath = '/files/v3/files/{fileId}'
            .replace('{' + 'fileId' + '}', encodeURIComponent(String(fileId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params
        requestContext.setHeaderParam("User-Agent", ObjectSerializer.serialize(userAgent, "string", ""));

        // Form Params
        let localVarFormParams = new FormData();

        if (file !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('file', file.data, file.name);
        }
        if (charsetHunch !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('charsetHunch', charsetHunch as any);
        }
        if (options !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('options', options as any);
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
     * Update properties of file by ID.
     * update file properties
     * @param fileId ID of file to update
     * @param fileUpdateInput Options to update.
     */
    public async updateProperties(fileId: string, fileUpdateInput: FileUpdateInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fileId' is not null or undefined
        if (fileId === null || fileId === undefined) {
            throw new RequiredError('Required parameter fileId was null or undefined when calling updateProperties.');
        }


        // verify required parameter 'fileUpdateInput' is not null or undefined
        if (fileUpdateInput === null || fileUpdateInput === undefined) {
            throw new RequiredError('Required parameter fileUpdateInput was null or undefined when calling updateProperties.');
        }


        // Path Params
        const localVarPath = '/files/v3/files/{fileId}'
            .replace('{' + 'fileId' + '}', encodeURIComponent(String(fileId)));

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
            ObjectSerializer.serialize(fileUpdateInput, "FileUpdateInput", ""),
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
     * Upload a single file with content specified in request body.
     * Upload file
     * @param userAgent 
     * @param file File to be uploaded.
     * @param folderId Either &#39;folderId&#39; or &#39;folderPath&#39; is required. folderId is the ID of the folder the file will be uploaded to.
     * @param folderPath Either &#39;folderPath&#39; or &#39;folderId&#39; is required. This field represents the destination folder path for the uploaded file. If a path doesn&#39;t exist, the system will try to create one.
     * @param fileName Desired name for the uploaded file.
     * @param charsetHunch Character set of the uploaded file.
     * @param options JSON string representing FileUploadOptions.
     */
    public async upload(userAgent?: string, file?: HttpFile, folderId?: string, folderPath?: string, fileName?: string, charsetHunch?: string, options?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/files/v3/files';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params
        requestContext.setHeaderParam("User-Agent", ObjectSerializer.serialize(userAgent, "string", ""));

        // Form Params
        let localVarFormParams = new FormData();

        if (file !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('file', file.data, file.name);
        }
        if (folderId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('folderId', folderId as any);
        }
        if (folderPath !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('folderPath', folderPath as any);
        }
        if (fileName !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('fileName', fileName as any);
        }
        if (charsetHunch !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('charsetHunch', charsetHunch as any);
        }
        if (options !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('options', options as any);
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

}

export class FilesApiResponseProcessor {

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
     * @params response Response returned by the server for a request to archiveGDPR
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveGDPR(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to checkImport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkImport(response: ResponseContext): Promise<FileActionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FileActionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FileActionResponse", ""
            ) as FileActionResponse;
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
            const body: FileActionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FileActionResponse", ""
            ) as FileActionResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to doSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async doSearch(response: ResponseContext): Promise<CollectionResponseFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseFile", ""
            ) as CollectionResponseFile;
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
            const body: CollectionResponseFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseFile", ""
            ) as CollectionResponseFile;
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
     public async getById(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSignedUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSignedUrl(response: ResponseContext): Promise<SignedUrl > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SignedUrl = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignedUrl", ""
            ) as SignedUrl;
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
            const body: SignedUrl = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignedUrl", ""
            ) as SignedUrl;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to importFromUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async importFromUrl(response: ResponseContext): Promise<ImportFromUrlTaskLocator > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: ImportFromUrlTaskLocator = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImportFromUrlTaskLocator", ""
            ) as ImportFromUrlTaskLocator;
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
            const body: ImportFromUrlTaskLocator = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImportFromUrlTaskLocator", ""
            ) as ImportFromUrlTaskLocator;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replace
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replace(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateProperties(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upload
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async upload(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
