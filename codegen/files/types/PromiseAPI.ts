import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponseFile } from '../models/CollectionResponseFile';
import { CollectionResponseFolder } from '../models/CollectionResponseFolder';
import { FileActionResponse } from '../models/FileActionResponse';
import { FileStat } from '../models/FileStat';
import { FileUpdateInput } from '../models/FileUpdateInput';
import { Folder } from '../models/Folder';
import { FolderActionResponse } from '../models/FolderActionResponse';
import { FolderInput } from '../models/FolderInput';
import { FolderUpdateInput } from '../models/FolderUpdateInput';
import { FolderUpdateInputWithId } from '../models/FolderUpdateInputWithId';
import { FolderUpdateTaskLocator } from '../models/FolderUpdateTaskLocator';
import { ImportFromUrlInput } from '../models/ImportFromUrlInput';
import { ImportFromUrlTaskLocator } from '../models/ImportFromUrlTaskLocator';
import { SignedUrl } from '../models/SignedUrl';
import { ObservableFilesApi } from './ObservableAPI';

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class PromiseFilesApi {
    private api: ObservableFilesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a file in accordance with GDPR regulations.
     * GDPR-delete file
     * @param fileId ID of file to GDPR delete
     */
    public _deleteWithHttpInfo(fileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api._deleteWithHttpInfo(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a file in accordance with GDPR regulations.
     * GDPR-delete file
     * @param fileId ID of file to GDPR delete
     */
    public _delete(fileId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api._delete(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a file by ID
     * Delete file by ID
     * @param fileId FileId to delete
     */
    public archiveWithHttpInfo(fileId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a file by ID
     * Delete file by ID
     * @param fileId FileId to delete
     */
    public archive(fileId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(fileId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of requested import.
     * Check import status
     * @param taskId Import by URL task ID
     */
    public checkImportWithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileActionResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.checkImportWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check the status of requested import.
     * Check import status
     * @param taskId Import by URL task ID
     */
    public checkImport(taskId: string, _options?: PromiseConfigurationOptions): Promise<FileActionResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.checkImport(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Search through files in the file manager. Does not display hidden or archived files.
     * Search files
     * @param [properties] A list of file properties to return.
     * @param [after] Offset search results by this value. The default offset is 0 and the maximum offset of items for a given search is 10,000. Narrow your search down if you are reaching this limit.
     * @param [before] 
     * @param [limit] Number of items to return. Default limit is 10, maximum limit is 100.
     * @param [sort] Sort files by a given field.
     * @param [ids] Search by a list of file IDs.
     * @param [idLte] 
     * @param [idGte] 
     * @param [createdAt] Search files by time of creation.
     * @param [createdAtLte] Search files by less than or equal to time of creation. Can be used with &#x60;createdAtGte&#x60; to create a range.
     * @param [createdAtGte] Search files by greater than or equal to time of creation. Can be used with &#x60;createdAtLte&#x60; to create a range.
     * @param [updatedAt] Search files by time of latest updated.
     * @param [updatedAtLte] Search files by less than or equal to time of latest update. Can be used with &#x60;updatedAtGte&#x60; to create a range.
     * @param [updatedAtGte] Search files by greater than or equal to time of latest update. Can be used with &#x60;updatedAtLte&#x60; to create a range.
     * @param [name] Search for files containing the given name.
     * @param [path] Search files by path.
     * @param [parentFolderIds] Search files within given &#x60;folderId&#x60;.
     * @param [size] Search files by exact file size in bytes.
     * @param [sizeLte] Search files by less than or equal to file size. Can be used with &#x60;sizeGte&#x60; to create a range.
     * @param [sizeGte] Search files by greater than or equal to file size. Can be used with &#x60;sizeLte&#x60; to create a range.
     * @param [height] Search files by height of image or video.
     * @param [heightLte] Search files by less than or equal to height of image or video. Can be used with &#x60;heightGte&#x60; to create a range.
     * @param [heightGte] Search files by greater than or equal to height of image or video. Can be used with &#x60;heightLte&#x60; to create a range.
     * @param [width] Search files by width of image or video.
     * @param [widthLte] Search files by less than or equal to width of image or video. Can be used with &#x60;widthGte&#x60; to create a range.
     * @param [widthGte] Search files by greater than or equal to width of image or video. Can be used with &#x60;widthLte&#x60; to create a range.
     * @param [encoding] Search files by specified encoding.
     * @param [type] Filter by provided file type.
     * @param [extension] Search files by given extension.
     * @param [url] Search by file URL.
     * @param [isUsableInContent] If &#x60;true&#x60;, shows files that have been marked to be used in new content. If &#x60;false&#x60;, shows files that should not be used in new content.
     * @param [allowsAnonymousAccess] Search files by access. If &#x60;true&#x60;, will show only public files. If &#x60;false&#x60;, will show only private files.
     * @param [fileMd5] Search files by a specific md5 hash.
     * @param [expiresAt] Search files by exact expires time. Time must be epoch time in milliseconds.
     * @param [expiresAtLte] Search files by less than or equal to expires time. Can be used with &#x60;expiresAtGte&#x60; to create a range.
     * @param [expiresAtGte] Search files by greater than or equal to expires time. Can be used with &#x60;expiresAtLte&#x60; to create a range.
     */
    public doSearchWithHttpInfo(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, ids?: Array<number>, idLte?: number, idGte?: number, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderIds?: Array<number>, size?: number, sizeLte?: number, sizeGte?: number, height?: number, heightLte?: number, heightGte?: number, width?: number, widthLte?: number, widthGte?: number, encoding?: string, type?: string, extension?: string, url?: string, isUsableInContent?: boolean, allowsAnonymousAccess?: boolean, fileMd5?: string, expiresAt?: Date, expiresAtLte?: Date, expiresAtGte?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseFile>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.doSearchWithHttpInfo(properties, after, before, limit, sort, ids, idLte, idGte, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderIds, size, sizeLte, sizeGte, height, heightLte, heightGte, width, widthLte, widthGte, encoding, type, extension, url, isUsableInContent, allowsAnonymousAccess, fileMd5, expiresAt, expiresAtLte, expiresAtGte, observableOptions);
        return result.toPromise();
    }

    /**
     * Search through files in the file manager. Does not display hidden or archived files.
     * Search files
     * @param [properties] A list of file properties to return.
     * @param [after] Offset search results by this value. The default offset is 0 and the maximum offset of items for a given search is 10,000. Narrow your search down if you are reaching this limit.
     * @param [before] 
     * @param [limit] Number of items to return. Default limit is 10, maximum limit is 100.
     * @param [sort] Sort files by a given field.
     * @param [ids] Search by a list of file IDs.
     * @param [idLte] 
     * @param [idGte] 
     * @param [createdAt] Search files by time of creation.
     * @param [createdAtLte] Search files by less than or equal to time of creation. Can be used with &#x60;createdAtGte&#x60; to create a range.
     * @param [createdAtGte] Search files by greater than or equal to time of creation. Can be used with &#x60;createdAtLte&#x60; to create a range.
     * @param [updatedAt] Search files by time of latest updated.
     * @param [updatedAtLte] Search files by less than or equal to time of latest update. Can be used with &#x60;updatedAtGte&#x60; to create a range.
     * @param [updatedAtGte] Search files by greater than or equal to time of latest update. Can be used with &#x60;updatedAtLte&#x60; to create a range.
     * @param [name] Search for files containing the given name.
     * @param [path] Search files by path.
     * @param [parentFolderIds] Search files within given &#x60;folderId&#x60;.
     * @param [size] Search files by exact file size in bytes.
     * @param [sizeLte] Search files by less than or equal to file size. Can be used with &#x60;sizeGte&#x60; to create a range.
     * @param [sizeGte] Search files by greater than or equal to file size. Can be used with &#x60;sizeLte&#x60; to create a range.
     * @param [height] Search files by height of image or video.
     * @param [heightLte] Search files by less than or equal to height of image or video. Can be used with &#x60;heightGte&#x60; to create a range.
     * @param [heightGte] Search files by greater than or equal to height of image or video. Can be used with &#x60;heightLte&#x60; to create a range.
     * @param [width] Search files by width of image or video.
     * @param [widthLte] Search files by less than or equal to width of image or video. Can be used with &#x60;widthGte&#x60; to create a range.
     * @param [widthGte] Search files by greater than or equal to width of image or video. Can be used with &#x60;widthLte&#x60; to create a range.
     * @param [encoding] Search files by specified encoding.
     * @param [type] Filter by provided file type.
     * @param [extension] Search files by given extension.
     * @param [url] Search by file URL.
     * @param [isUsableInContent] If &#x60;true&#x60;, shows files that have been marked to be used in new content. If &#x60;false&#x60;, shows files that should not be used in new content.
     * @param [allowsAnonymousAccess] Search files by access. If &#x60;true&#x60;, will show only public files. If &#x60;false&#x60;, will show only private files.
     * @param [fileMd5] Search files by a specific md5 hash.
     * @param [expiresAt] Search files by exact expires time. Time must be epoch time in milliseconds.
     * @param [expiresAtLte] Search files by less than or equal to expires time. Can be used with &#x60;expiresAtGte&#x60; to create a range.
     * @param [expiresAtGte] Search files by greater than or equal to expires time. Can be used with &#x60;expiresAtLte&#x60; to create a range.
     */
    public doSearch(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, ids?: Array<number>, idLte?: number, idGte?: number, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderIds?: Array<number>, size?: number, sizeLte?: number, sizeGte?: number, height?: number, heightLte?: number, heightGte?: number, width?: number, widthLte?: number, widthGte?: number, encoding?: string, type?: string, extension?: string, url?: string, isUsableInContent?: boolean, allowsAnonymousAccess?: boolean, fileMd5?: string, expiresAt?: Date, expiresAtLte?: Date, expiresAtGte?: Date, _options?: PromiseConfigurationOptions): Promise<CollectionResponseFile> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.doSearch(properties, after, before, limit, sort, ids, idLte, idGte, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderIds, size, sizeLte, sizeGte, height, heightLte, heightGte, width, widthLte, widthGte, encoding, type, extension, url, isUsableInContent, allowsAnonymousAccess, fileMd5, expiresAt, expiresAtLte, expiresAtGte, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a file by its ID.
     * Retrieve file by ID
     * @param fileId ID of the desired file.
     * @param [properties] null
     */
    public getByIdWithHttpInfo(fileId: string, properties?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByIdWithHttpInfo(fileId, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a file by its ID.
     * Retrieve file by ID
     * @param fileId ID of the desired file.
     * @param [properties] null
     */
    public getById(fileId: string, properties?: Array<string>, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById(fileId, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a file by its path.
     * Retrieve file by path
     * @param path The path of the file. 
     * @param [properties] Properties to return in the response.
     */
    public getMetadataWithHttpInfo(path: string, properties?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileStat>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMetadataWithHttpInfo(path, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a file by its path.
     * Retrieve file by path
     * @param path The path of the file. 
     * @param [properties] Properties to return in the response.
     */
    public getMetadata(path: string, properties?: Array<string>, _options?: PromiseConfigurationOptions): Promise<FileStat> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMetadata(path, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates signed URL that allows temporary access to a private file.
     * Get signed URL to access private file
     * @param fileId ID of file.
     * @param [size] For image files. This will resize the image to the desired size before sharing. Does not affect the original file, just the file served by this signed URL.
     * @param [expirationSeconds] How long in seconds the link will provide access to the file.
     * @param [upscale] If size is provided, this will upscale the image to fit the size dimensions.
     */
    public getSignedUrlWithHttpInfo(fileId: string, size?: 'thumb' | 'icon' | 'medium' | 'preview', expirationSeconds?: number, upscale?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SignedUrl>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSignedUrlWithHttpInfo(fileId, size, expirationSeconds, upscale, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates signed URL that allows temporary access to a private file.
     * Get signed URL to access private file
     * @param fileId ID of file.
     * @param [size] For image files. This will resize the image to the desired size before sharing. Does not affect the original file, just the file served by this signed URL.
     * @param [expirationSeconds] How long in seconds the link will provide access to the file.
     * @param [upscale] If size is provided, this will upscale the image to fit the size dimensions.
     */
    public getSignedUrl(fileId: string, size?: 'thumb' | 'icon' | 'medium' | 'preview', expirationSeconds?: number, upscale?: boolean, _options?: PromiseConfigurationOptions): Promise<SignedUrl> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSignedUrl(fileId, size, expirationSeconds, upscale, observableOptions);
        return result.toPromise();
    }

    /**
     * Asynchronously imports the file at the given URL into the file manager.
     * Import file from URL
     * @param importFromUrlInput
     */
    public importFromUrlWithHttpInfo(importFromUrlInput: ImportFromUrlInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ImportFromUrlTaskLocator>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.importFromUrlWithHttpInfo(importFromUrlInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Asynchronously imports the file at the given URL into the file manager.
     * Import file from URL
     * @param importFromUrlInput
     */
    public importFromUrl(importFromUrlInput: ImportFromUrlInput, _options?: PromiseConfigurationOptions): Promise<ImportFromUrlTaskLocator> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.importFromUrl(importFromUrlInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
     * Replace file
     * @param fileId ID of the desired file.
     * @param [file] File data that will replace existing file in the file manager.
     * @param [charsetHunch] Character set of given file data.
     * @param [options] JSON string representing FileReplaceOptions. Includes options to set the access and expiresAt properties, which will automatically update when the file is replaced.
     */
    public replaceWithHttpInfo(fileId: string, file?: HttpFile, charsetHunch?: string, options?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.replaceWithHttpInfo(fileId, file, charsetHunch, options, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
     * Replace file
     * @param fileId ID of the desired file.
     * @param [file] File data that will replace existing file in the file manager.
     * @param [charsetHunch] Character set of given file data.
     * @param [options] JSON string representing FileReplaceOptions. Includes options to set the access and expiresAt properties, which will automatically update when the file is replaced.
     */
    public replace(fileId: string, file?: HttpFile, charsetHunch?: string, options?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.replace(fileId, file, charsetHunch, options, observableOptions);
        return result.toPromise();
    }

    /**
     * Update properties of file by ID.
     * Update file properties
     * @param fileId ID of file to update
     * @param fileUpdateInput
     */
    public updatePropertiesWithHttpInfo(fileId: string, fileUpdateInput: FileUpdateInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updatePropertiesWithHttpInfo(fileId, fileUpdateInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Update properties of file by ID.
     * Update file properties
     * @param fileId ID of file to update
     * @param fileUpdateInput
     */
    public updateProperties(fileId: string, fileUpdateInput: FileUpdateInput, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateProperties(fileId, fileUpdateInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload a single file with content specified in request body.
     * Upload file
     * @param [file] File to be uploaded.
     * @param [folderId] Either \\\&#39;folderId\\\&#39; or \\\&#39;folderPath\\\&#39; is required. folderId is the ID of the folder the file will be uploaded to.
     * @param [folderPath] Either \\\&#39;folderPath\\\&#39; or \\\&#39;folderId\\\&#39; is required. This field represents the destination folder path for the uploaded file. If a path doesn\\\&#39;t exist, the system will try to create one.
     * @param [fileName] Desired name for the uploaded file.
     * @param [charsetHunch] Character set of the uploaded file.
     * @param [options] JSON string representing FileUploadOptions.
     */
    public uploadWithHttpInfo(file?: HttpFile, folderId?: string, folderPath?: string, fileName?: string, charsetHunch?: string, options?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.uploadWithHttpInfo(file, folderId, folderPath, fileName, charsetHunch, options, observableOptions);
        return result.toPromise();
    }

    /**
     * Upload a single file with content specified in request body.
     * Upload file
     * @param [file] File to be uploaded.
     * @param [folderId] Either \\\&#39;folderId\\\&#39; or \\\&#39;folderPath\\\&#39; is required. folderId is the ID of the folder the file will be uploaded to.
     * @param [folderPath] Either \\\&#39;folderPath\\\&#39; or \\\&#39;folderId\\\&#39; is required. This field represents the destination folder path for the uploaded file. If a path doesn\\\&#39;t exist, the system will try to create one.
     * @param [fileName] Desired name for the uploaded file.
     * @param [charsetHunch] Character set of the uploaded file.
     * @param [options] JSON string representing FileUploadOptions.
     */
    public upload(file?: HttpFile, folderId?: string, folderPath?: string, fileName?: string, charsetHunch?: string, options?: string, _options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.upload(file, folderId, folderPath, fileName, charsetHunch, options, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFoldersApi } from './ObservableAPI';

import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";
export class PromiseFoldersApi {
    private api: ObservableFoldersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FoldersApiRequestFactory,
        responseProcessor?: FoldersApiResponseProcessor
    ) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete folder by ID.
     * Delete folder by ID
     * @param folderId ID of folder to delete.
     */
    public archiveWithHttpInfo(folderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete folder by ID.
     * Delete folder by ID
     * @param folderId ID of folder to delete.
     */
    public archive(folderId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a folder, identified by its path.
     * Delete folder by path
     * @param folderPath Path of folder to delete
     */
    public archiveByPathWithHttpInfo(folderPath: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveByPathWithHttpInfo(folderPath, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a folder, identified by its path.
     * Delete folder by path
     * @param folderPath Path of folder to delete
     */
    public archiveByPath(folderPath: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveByPath(folderPath, observableOptions);
        return result.toPromise();
    }

    /**
     * Check status of folder update. Folder updates happen asynchronously.
     * Check folder update status
     * @param taskId The ID of the folder update task.
     */
    public checkUpdateStatusWithHttpInfo(taskId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FolderActionResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.checkUpdateStatusWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Check status of folder update. Folder updates happen asynchronously.
     * Check folder update status
     * @param taskId The ID of the folder update task.
     */
    public checkUpdateStatus(taskId: string, _options?: PromiseConfigurationOptions): Promise<FolderActionResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.checkUpdateStatus(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a folder.
     * Create folder
     * @param folderInput Folder creation options
     */
    public createWithHttpInfo(folderInput: FolderInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createWithHttpInfo(folderInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a folder.
     * Create folder
     * @param folderInput Folder creation options
     */
    public create(folderInput: FolderInput, _options?: PromiseConfigurationOptions): Promise<Folder> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create(folderInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Search for folders. Does not contain hidden or archived folders.
     * Search folders
     * @param [properties] Properties that should be included in the returned folders.
     * @param [after] Offset search results by this value. The default offset is 0 and the maximum offset of items for a given search is 10,000. Narrow your search down if you are reaching this limit.
     * @param [before]
     * @param [limit] Number of items to return. Default limit is 10, maximum limit is 100.
     * @param [sort] Sort results by given property. For example -name sorts by name field descending, name sorts by name field ascending.
     * @param [ids] 
     * @param [idLte] 
     * @param [idGte] 
     * @param [createdAt] Search folders by exact time of creation. Time must be epoch time in milliseconds.
     * @param [createdAtLte] Search folders by less than or equal to time of creation. Can be used with createdAtGte to create a range.
     * @param [createdAtGte] Search folders by greater than or equal to time of creation. Can be used with createdAtLte to create a range.
     * @param [updatedAt] Search folders by exact time of latest updated. Time must be epoch time in milliseconds.
     * @param [updatedAtLte] Search folders by less than or equal to time of latest update. Can be used with updatedAtGte to create a range.
     * @param [updatedAtGte] Search folders by greater than or equal to time of latest update. Can be used with updatedAtLte to create a range.
     * @param [name] Search for folders containing the specified name.
     * @param [path] Search folders by path.
     * @param [parentFolderIds] Search folders with the given parent folderId.
     */
    public doSearchWithHttpInfo(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, ids?: Array<number>, idLte?: number, idGte?: number, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseFolder>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.doSearchWithHttpInfo(properties, after, before, limit, sort, ids, idLte, idGte, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Search for folders. Does not contain hidden or archived folders.
     * Search folders
     * @param [properties] Properties that should be included in the returned folders.
     * @param [after] Offset search results by this value. The default offset is 0 and the maximum offset of items for a given search is 10,000. Narrow your search down if you are reaching this limit.
     * @param [before]
     * @param [limit] Number of items to return. Default limit is 10, maximum limit is 100.
     * @param [sort] Sort results by given property. For example -name sorts by name field descending, name sorts by name field ascending.
     * @param [ids] 
     * @param [idLte] 
     * @param [idGte] 
     * @param [createdAt] Search folders by exact time of creation. Time must be epoch time in milliseconds.
     * @param [createdAtLte] Search folders by less than or equal to time of creation. Can be used with createdAtGte to create a range.
     * @param [createdAtGte] Search folders by greater than or equal to time of creation. Can be used with createdAtLte to create a range.
     * @param [updatedAt] Search folders by exact time of latest updated. Time must be epoch time in milliseconds.
     * @param [updatedAtLte] Search folders by less than or equal to time of latest update. Can be used with updatedAtGte to create a range.
     * @param [updatedAtGte] Search folders by greater than or equal to time of latest update. Can be used with updatedAtLte to create a range.
     * @param [name] Search for folders containing the specified name.
     * @param [path] Search folders by path.
     * @param [parentFolderIds] Search folders with the given parent folderId.
     */
    public doSearch(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, ids?: Array<number>, idLte?: number, idGte?: number, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderIds?: Array<number>, _options?: PromiseConfigurationOptions): Promise<CollectionResponseFolder> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.doSearch(properties, after, before, limit, sort, ids, idLte, idGte, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a folder by its ID.
     * Retrieve folder by ID
     * @param folderId ID of desired folder
     * @param [properties] Properties to set on returned folder.
     */
    public getByIdWithHttpInfo(folderId: string, properties?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByIdWithHttpInfo(folderId, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a folder by its ID.
     * Retrieve folder by ID
     * @param folderId ID of desired folder
     * @param [properties] Properties to set on returned folder.
     */
    public getById(folderId: string, properties?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Folder> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById(folderId, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a folder, identified by its path.
     * Retrieve folder by path
     * @param folderPath Path of desired folder.
     * @param [properties] Properties to set on returned folder.
     */
    public getByPathWithHttpInfo(folderPath: string, properties?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByPathWithHttpInfo(folderPath, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a folder, identified by its path.
     * Retrieve folder by path
     * @param folderPath Path of desired folder.
     * @param [properties] Properties to set on returned folder.
     */
    public getByPath(folderPath: string, properties?: Array<string>, _options?: PromiseConfigurationOptions): Promise<Folder> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByPath(folderPath, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a folder\'s properties, identified by folder ID.
     * Update folder properties by folder ID
     * @param folderId ID of folder to update
     * @param folderUpdateInput
     */
    public updatePropertiesWithHttpInfo(folderId: string, folderUpdateInput: FolderUpdateInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Folder>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updatePropertiesWithHttpInfo(folderId, folderUpdateInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a folder\'s properties, identified by folder ID.
     * Update folder properties by folder ID
     * @param folderId ID of folder to update
     * @param folderUpdateInput
     */
    public updateProperties(folderId: string, folderUpdateInput: FolderUpdateInput, _options?: PromiseConfigurationOptions): Promise<Folder> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateProperties(folderId, folderUpdateInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder\'s children as well.
     * Update folder properties
     * @param folderUpdateInputWithId
     */
    public updatePropertiesRecursivelyWithHttpInfo(folderUpdateInputWithId: FolderUpdateInputWithId, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FolderUpdateTaskLocator>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updatePropertiesRecursivelyWithHttpInfo(folderUpdateInputWithId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder\'s children as well.
     * Update folder properties
     * @param folderUpdateInputWithId
     */
    public updatePropertiesRecursively(folderUpdateInputWithId: FolderUpdateInputWithId, _options?: PromiseConfigurationOptions): Promise<FolderUpdateTaskLocator> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updatePropertiesRecursively(folderUpdateInputWithId, observableOptions);
        return result.toPromise();
    }


}



