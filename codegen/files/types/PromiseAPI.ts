import { HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponseFile } from '../models/CollectionResponseFile';
import { CollectionResponseFolder } from '../models/CollectionResponseFolder';
import { FileActionResponse } from '../models/FileActionResponse';
import { FileStat } from '../models/FileStat';
import { FileUpdateInput } from '../models/FileUpdateInput';
import { Folder } from '../models/Folder';
import { FolderActionResponse } from '../models/FolderActionResponse';
import { FolderInput } from '../models/FolderInput';
import { FolderUpdateInput } from '../models/FolderUpdateInput';
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
     * Delete file by ID
     * Delete file
     * @param fileId FileId to delete
     */
    public archiveWithHttpInfo(fileId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(fileId, _options);
        return result.toPromise();
    }

    /**
     * Delete file by ID
     * Delete file
     * @param fileId FileId to delete
     */
    public archive(fileId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(fileId, _options);
        return result.toPromise();
    }

    /**
     * GDRP delete file
     * GDPR delete
     * @param fileId ID of file to GDPR delete
     */
    public archiveGDPRWithHttpInfo(fileId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveGDPRWithHttpInfo(fileId, _options);
        return result.toPromise();
    }

    /**
     * GDRP delete file
     * GDPR delete
     * @param fileId ID of file to GDPR delete
     */
    public archiveGDPR(fileId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archiveGDPR(fileId, _options);
        return result.toPromise();
    }

    /**
     * Check the status of requested import.
     * Check import status.
     * @param taskId Import by URL task ID
     */
    public checkImportWithHttpInfo(taskId: string, _options?: Configuration): Promise<HttpInfo<FileActionResponse>> {
        const result = this.api.checkImportWithHttpInfo(taskId, _options);
        return result.toPromise();
    }

    /**
     * Check the status of requested import.
     * Check import status.
     * @param taskId Import by URL task ID
     */
    public checkImport(taskId: string, _options?: Configuration): Promise<FileActionResponse> {
        const result = this.api.checkImport(taskId, _options);
        return result.toPromise();
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
     * @param createdAtLte 
     * @param createdAtGte 
     * @param updatedAt Search files by time of latest updated.
     * @param updatedAtLte 
     * @param updatedAtGte 
     * @param name Search for files containing the given name.
     * @param path Search files by path.
     * @param parentFolderId Search files within given folderId.
     * @param size Query by file size.
     * @param height Search files by height of image or video.
     * @param width Search files by width of image or video.
     * @param encoding Search files with specified encoding.
     * @param type Filter by provided file type.
     * @param extension Search files by given extension.
     * @param url Search for given URL
     * @param isUsableInContent If true shows files that have been marked to be used in new content. It false shows files that should not be used in new content.
     * @param allowsAnonymousAccess If \&#39;true\&#39; will show private files; if \&#39;false\&#39; will show public files
     */
    public doSearchWithHttpInfo(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, id?: string, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderId?: number, size?: number, height?: number, width?: number, encoding?: string, type?: string, extension?: string, url?: string, isUsableInContent?: boolean, allowsAnonymousAccess?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionResponseFile>> {
        const result = this.api.doSearchWithHttpInfo(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, size, height, width, encoding, type, extension, url, isUsableInContent, allowsAnonymousAccess, _options);
        return result.toPromise();
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
     * @param createdAtLte 
     * @param createdAtGte 
     * @param updatedAt Search files by time of latest updated.
     * @param updatedAtLte 
     * @param updatedAtGte 
     * @param name Search for files containing the given name.
     * @param path Search files by path.
     * @param parentFolderId Search files within given folderId.
     * @param size Query by file size.
     * @param height Search files by height of image or video.
     * @param width Search files by width of image or video.
     * @param encoding Search files with specified encoding.
     * @param type Filter by provided file type.
     * @param extension Search files by given extension.
     * @param url Search for given URL
     * @param isUsableInContent If true shows files that have been marked to be used in new content. It false shows files that should not be used in new content.
     * @param allowsAnonymousAccess If \&#39;true\&#39; will show private files; if \&#39;false\&#39; will show public files
     */
    public doSearch(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, id?: string, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderId?: number, size?: number, height?: number, width?: number, encoding?: string, type?: string, extension?: string, url?: string, isUsableInContent?: boolean, allowsAnonymousAccess?: boolean, _options?: Configuration): Promise<CollectionResponseFile> {
        const result = this.api.doSearch(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, size, height, width, encoding, type, extension, url, isUsableInContent, allowsAnonymousAccess, _options);
        return result.toPromise();
    }

    /**
     * Get file by ID.
     * Get file.
     * @param fileId ID of the desired file.
     * @param properties 
     */
    public getByIdWithHttpInfo(fileId: string, properties?: Array<string>, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.getByIdWithHttpInfo(fileId, properties, _options);
        return result.toPromise();
    }

    /**
     * Get file by ID.
     * Get file.
     * @param fileId ID of the desired file.
     * @param properties 
     */
    public getById(fileId: string, properties?: Array<string>, _options?: Configuration): Promise<any> {
        const result = this.api.getById(fileId, properties, _options);
        return result.toPromise();
    }

    /**
     * @param path 
     * @param properties 
     */
    public getMetadataWithHttpInfo(path: string, properties?: Array<string>, _options?: Configuration): Promise<HttpInfo<FileStat>> {
        const result = this.api.getMetadataWithHttpInfo(path, properties, _options);
        return result.toPromise();
    }

    /**
     * @param path 
     * @param properties 
     */
    public getMetadata(path: string, properties?: Array<string>, _options?: Configuration): Promise<FileStat> {
        const result = this.api.getMetadata(path, properties, _options);
        return result.toPromise();
    }

    /**
     * Generates signed URL that allows temporary access to a private file.
     * Get signed URL to access private file.
     * @param fileId ID of file.
     * @param size For image files. This will resize the image to the desired size before sharing. Does not affect the original file, just the file served by this signed URL.
     * @param expirationSeconds How long in seconds the link will provide access to the file.
     * @param upscale If size is provided, this will upscale the image to fit the size dimensions.
     */
    public getSignedUrlWithHttpInfo(fileId: string, size?: 'thumb' | 'icon' | 'medium' | 'preview', expirationSeconds?: number, upscale?: boolean, _options?: Configuration): Promise<HttpInfo<SignedUrl>> {
        const result = this.api.getSignedUrlWithHttpInfo(fileId, size, expirationSeconds, upscale, _options);
        return result.toPromise();
    }

    /**
     * Generates signed URL that allows temporary access to a private file.
     * Get signed URL to access private file.
     * @param fileId ID of file.
     * @param size For image files. This will resize the image to the desired size before sharing. Does not affect the original file, just the file served by this signed URL.
     * @param expirationSeconds How long in seconds the link will provide access to the file.
     * @param upscale If size is provided, this will upscale the image to fit the size dimensions.
     */
    public getSignedUrl(fileId: string, size?: 'thumb' | 'icon' | 'medium' | 'preview', expirationSeconds?: number, upscale?: boolean, _options?: Configuration): Promise<SignedUrl> {
        const result = this.api.getSignedUrl(fileId, size, expirationSeconds, upscale, _options);
        return result.toPromise();
    }

    /**
     * Asynchronously imports the file at the given URL into the file manager.
     * Import a file from a URL into the file manager.
     * @param importFromUrlInput 
     */
    public importFromUrlWithHttpInfo(importFromUrlInput: ImportFromUrlInput, _options?: Configuration): Promise<HttpInfo<ImportFromUrlTaskLocator>> {
        const result = this.api.importFromUrlWithHttpInfo(importFromUrlInput, _options);
        return result.toPromise();
    }

    /**
     * Asynchronously imports the file at the given URL into the file manager.
     * Import a file from a URL into the file manager.
     * @param importFromUrlInput 
     */
    public importFromUrl(importFromUrlInput: ImportFromUrlInput, _options?: Configuration): Promise<ImportFromUrlTaskLocator> {
        const result = this.api.importFromUrl(importFromUrlInput, _options);
        return result.toPromise();
    }

    /**
     * Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
     * Replace file.
     * @param fileId ID of the desired file.
     * @param file File data that will replace existing file in the file manager.
     * @param charsetHunch Character set of given file data.
     * @param options JSON String representing FileReplaceOptions
     */
    public replaceWithHttpInfo(fileId: string, file?: HttpFile, charsetHunch?: string, options?: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.replaceWithHttpInfo(fileId, file, charsetHunch, options, _options);
        return result.toPromise();
    }

    /**
     * Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
     * Replace file.
     * @param fileId ID of the desired file.
     * @param file File data that will replace existing file in the file manager.
     * @param charsetHunch Character set of given file data.
     * @param options JSON String representing FileReplaceOptions
     */
    public replace(fileId: string, file?: HttpFile, charsetHunch?: string, options?: string, _options?: Configuration): Promise<any> {
        const result = this.api.replace(fileId, file, charsetHunch, options, _options);
        return result.toPromise();
    }

    /**
     * Update properties of file by ID.
     * update file properties
     * @param fileId ID of file to update
     * @param fileUpdateInput Options to update.
     */
    public updatePropertiesWithHttpInfo(fileId: string, fileUpdateInput: FileUpdateInput, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updatePropertiesWithHttpInfo(fileId, fileUpdateInput, _options);
        return result.toPromise();
    }

    /**
     * Update properties of file by ID.
     * update file properties
     * @param fileId ID of file to update
     * @param fileUpdateInput Options to update.
     */
    public updateProperties(fileId: string, fileUpdateInput: FileUpdateInput, _options?: Configuration): Promise<any> {
        const result = this.api.updateProperties(fileId, fileUpdateInput, _options);
        return result.toPromise();
    }

    /**
     * Upload a single file with content specified in request body.
     * Upload file
     * @param file File to be uploaded.
     * @param folderId Either \\\&#39;folderId\\\&#39; or \\\&#39;folderPath\\\&#39; is required. folderId is the ID of the folder the file will be uploaded to.
     * @param folderPath Either \\\&#39;folderPath\\\&#39; or \\\&#39;folderId\\\&#39; is required. This field represents the destination folder path for the uploaded file. If a path doesn\\\&#39;t exist, the system will try to create one.
     * @param fileName Desired name for the uploaded file.
     * @param charsetHunch Character set of the uploaded file.
     * @param options JSON string representing FileUploadOptions.
     */
    public uploadWithHttpInfo(file?: HttpFile, folderId?: string, folderPath?: string, fileName?: string, charsetHunch?: string, options?: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.uploadWithHttpInfo(file, folderId, folderPath, fileName, charsetHunch, options, _options);
        return result.toPromise();
    }

    /**
     * Upload a single file with content specified in request body.
     * Upload file
     * @param file File to be uploaded.
     * @param folderId Either \\\&#39;folderId\\\&#39; or \\\&#39;folderPath\\\&#39; is required. folderId is the ID of the folder the file will be uploaded to.
     * @param folderPath Either \\\&#39;folderPath\\\&#39; or \\\&#39;folderId\\\&#39; is required. This field represents the destination folder path for the uploaded file. If a path doesn\\\&#39;t exist, the system will try to create one.
     * @param fileName Desired name for the uploaded file.
     * @param charsetHunch Character set of the uploaded file.
     * @param options JSON string representing FileUploadOptions.
     */
    public upload(file?: HttpFile, folderId?: string, folderPath?: string, fileName?: string, charsetHunch?: string, options?: string, _options?: Configuration): Promise<any> {
        const result = this.api.upload(file, folderId, folderPath, fileName, charsetHunch, options, _options);
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
     * Delete folder.
     * @param folderId ID of folder to delete.
     */
    public archiveWithHttpInfo(folderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(folderId, _options);
        return result.toPromise();
    }

    /**
     * Delete folder by ID.
     * Delete folder.
     * @param folderId ID of folder to delete.
     */
    public archive(folderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(folderId, _options);
        return result.toPromise();
    }

    /**
     * Delete folder by path.
     * Delete folder.
     * @param folderPath Path of folder to delete
     */
    public archiveByPathWithHttpInfo(folderPath: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveByPathWithHttpInfo(folderPath, _options);
        return result.toPromise();
    }

    /**
     * Delete folder by path.
     * Delete folder.
     * @param folderPath Path of folder to delete
     */
    public archiveByPath(folderPath: string, _options?: Configuration): Promise<void> {
        const result = this.api.archiveByPath(folderPath, _options);
        return result.toPromise();
    }

    /**
     * Check status of folder update. Folder updates happen asynchronously.
     * Check folder update status.
     * @param taskId TaskId of folder update
     */
    public checkUpdateStatusWithHttpInfo(taskId: string, _options?: Configuration): Promise<HttpInfo<FolderActionResponse>> {
        const result = this.api.checkUpdateStatusWithHttpInfo(taskId, _options);
        return result.toPromise();
    }

    /**
     * Check status of folder update. Folder updates happen asynchronously.
     * Check folder update status.
     * @param taskId TaskId of folder update
     */
    public checkUpdateStatus(taskId: string, _options?: Configuration): Promise<FolderActionResponse> {
        const result = this.api.checkUpdateStatus(taskId, _options);
        return result.toPromise();
    }

    /**
     * Creates a folder.
     * Create folder.
     * @param folderInput Folder creation options
     */
    public createWithHttpInfo(folderInput: FolderInput, _options?: Configuration): Promise<HttpInfo<Folder>> {
        const result = this.api.createWithHttpInfo(folderInput, _options);
        return result.toPromise();
    }

    /**
     * Creates a folder.
     * Create folder.
     * @param folderInput Folder creation options
     */
    public create(folderInput: FolderInput, _options?: Configuration): Promise<Folder> {
        const result = this.api.create(folderInput, _options);
        return result.toPromise();
    }

    /**
     * Search for folders. Does not contain hidden or archived folders.
     * Search folders
     * @param properties Properties that should be included in the returned folders.
     * @param after The maximum offset of items for a given search is 10000. Narrow your search down if you are reaching this limit.
     * @param before 
     * @param limit Limit of results to return. Max limit is 100.
     * @param sort Sort results by given property. For example -name sorts by name field descending, name sorts by name field ascending.
     * @param id Search folder by given ID.
     * @param createdAt Search for folders with the given creation timestamp.
     * @param createdAtLte 
     * @param createdAtGte 
     * @param updatedAt Search for folder at given update timestamp.
     * @param updatedAtLte 
     * @param updatedAtGte 
     * @param name Search for folders containing the specified name.
     * @param path Search for folders by path.
     * @param parentFolderId Search for folders with the given parent folderId.
     */
    public doSearchWithHttpInfo(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, id?: string, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderId?: number, _options?: Configuration): Promise<HttpInfo<CollectionResponseFolder>> {
        const result = this.api.doSearchWithHttpInfo(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, _options);
        return result.toPromise();
    }

    /**
     * Search for folders. Does not contain hidden or archived folders.
     * Search folders
     * @param properties Properties that should be included in the returned folders.
     * @param after The maximum offset of items for a given search is 10000. Narrow your search down if you are reaching this limit.
     * @param before 
     * @param limit Limit of results to return. Max limit is 100.
     * @param sort Sort results by given property. For example -name sorts by name field descending, name sorts by name field ascending.
     * @param id Search folder by given ID.
     * @param createdAt Search for folders with the given creation timestamp.
     * @param createdAtLte 
     * @param createdAtGte 
     * @param updatedAt Search for folder at given update timestamp.
     * @param updatedAtLte 
     * @param updatedAtGte 
     * @param name Search for folders containing the specified name.
     * @param path Search for folders by path.
     * @param parentFolderId Search for folders with the given parent folderId.
     */
    public doSearch(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, id?: string, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderId?: number, _options?: Configuration): Promise<CollectionResponseFolder> {
        const result = this.api.doSearch(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, _options);
        return result.toPromise();
    }

    /**
     * Get folder by ID
     * Get folder
     * @param folderId ID of desired folder
     * @param properties Properties to set on returned folder.
     */
    public getByIdWithHttpInfo(folderId: string, properties?: Array<string>, _options?: Configuration): Promise<HttpInfo<Folder>> {
        const result = this.api.getByIdWithHttpInfo(folderId, properties, _options);
        return result.toPromise();
    }

    /**
     * Get folder by ID
     * Get folder
     * @param folderId ID of desired folder
     * @param properties Properties to set on returned folder.
     */
    public getById(folderId: string, properties?: Array<string>, _options?: Configuration): Promise<Folder> {
        const result = this.api.getById(folderId, properties, _options);
        return result.toPromise();
    }

    /**
     * Get folder by path.
     * Get folder.
     * @param folderPath Path of desired folder.
     * @param properties Properties to set on returned folder.
     */
    public getByPathWithHttpInfo(folderPath: string, properties?: Array<string>, _options?: Configuration): Promise<HttpInfo<Folder>> {
        const result = this.api.getByPathWithHttpInfo(folderPath, properties, _options);
        return result.toPromise();
    }

    /**
     * Get folder by path.
     * Get folder.
     * @param folderPath Path of desired folder.
     * @param properties Properties to set on returned folder.
     */
    public getByPath(folderPath: string, properties?: Array<string>, _options?: Configuration): Promise<Folder> {
        const result = this.api.getByPath(folderPath, properties, _options);
        return result.toPromise();
    }

    /**
     * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder\'s children as well.
     * Update folder properties
     * @param folderUpdateInput Properties to change in the folder
     */
    public updatePropertiesWithHttpInfo(folderUpdateInput: FolderUpdateInput, _options?: Configuration): Promise<HttpInfo<FolderUpdateTaskLocator>> {
        const result = this.api.updatePropertiesWithHttpInfo(folderUpdateInput, _options);
        return result.toPromise();
    }

    /**
     * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder\'s children as well.
     * Update folder properties
     * @param folderUpdateInput Properties to change in the folder
     */
    public updateProperties(folderUpdateInput: FolderUpdateInput, _options?: Configuration): Promise<FolderUpdateTaskLocator> {
        const result = this.api.updateProperties(folderUpdateInput, _options);
        return result.toPromise();
    }


}



