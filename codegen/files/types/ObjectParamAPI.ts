import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

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

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiFilesV3FilesFileIdDownloadRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApifilesV3FilesFileIdDownload
     */
    fileId: string
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public filesV3FilesFileIdDownloadWithHttpInfo(param: BasicApiFilesV3FilesFileIdDownloadRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.filesV3FilesFileIdDownloadWithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filesV3FilesFileIdDownload(param: BasicApiFilesV3FilesFileIdDownloadRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.filesV3FilesFileIdDownload(param.fileId,  options).toPromise();
    }

}

import { ObservableFilesApi } from "./ObservableAPI";
import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";

export interface FilesApiDeleteRequest {
    /**
     * ID of file to GDPR delete
     * Defaults to: undefined
     * @type string
     * @memberof FilesApi_delete
     */
    fileId: string
}

export interface FilesApiArchiveRequest {
    /**
     * FileId to delete
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiarchive
     */
    fileId: string
}

export interface FilesApiCheckImportRequest {
    /**
     * Import by URL task ID
     * Defaults to: undefined
     * @type string
     * @memberof FilesApicheckImport
     */
    taskId: string
}

export interface FilesApiCreateRequest {
    /**
     * Folder creation options
     * @type FolderInput
     * @memberof FilesApicreate
     */
    folderInput: FolderInput
}

export interface FilesApiDoSearchRequest {
    /**
     * Offset search results by this value. The default offset is 0 and the maximum offset of items for a given search is 10,000.  Narrow your search down if you are reaching this limit.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApidoSearch
     */
    after?: string
    /**
     * Search files by access. If \&#39;true\&#39; will show only public files; if \&#39;false\&#39; will show only private files
     * Defaults to: undefined
     * @type boolean
     * @memberof FilesApidoSearch
     */
    allowsAnonymousAccess?: boolean
    /**
     * Search files updated before this timestamp. Time must be epoch time in milliseconds.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApidoSearch
     */
    before?: string
    /**
     * Search files by exact time of creation. Time must be epoch time in milliseconds.
     * Defaults to: undefined
     * @type Date
     * @memberof FilesApidoSearch
     */
    createdAt?: Date
    /**
     * Search files by greater than or equal to time of creation. Can be used with createdAtLte to create a range.
     * Defaults to: undefined
     * @type Date
     * @memberof FilesApidoSearch
     */
    createdAtGte?: Date
    /**
     * Search files by less than or equal to time of creation. Can be used with createdAtGte to create a range.
     * Defaults to: undefined
     * @type Date
     * @memberof FilesApidoSearch
     */
    createdAtLte?: Date
    /**
     * Search files by specified encoding.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApidoSearch
     */
    encoding?: string
    /**
     * Search files by exact expires time. Time must be epoch time in milliseconds.
     * Defaults to: undefined
     * @type Date
     * @memberof FilesApidoSearch
     */
    expiresAt?: Date
    /**
     * Search files by greater than or equal to expires time. Can be used with expiresAtLte to create a range.
     * Defaults to: undefined
     * @type Date
     * @memberof FilesApidoSearch
     */
    expiresAtGte?: Date
    /**
     * Search files by less than or equal to expires time. Can be used with expiresAtGte to create a range.
     * Defaults to: undefined
     * @type Date
     * @memberof FilesApidoSearch
     */
    expiresAtLte?: Date
    /**
     * Search files by given extension.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApidoSearch
     */
    extension?: string
    /**
     * Search files by specific md5 hash.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApidoSearch
     */
    fileMd5?: string
    /**
     * Search files by height of image or video.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    height?: number
    /**
     * Search files by greater than or equal to height of image or video. Can be used with heightLte to create a range.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    heightGte?: number
    /**
     * Search files by less than or equal to height of image or video. Can be used with heightGte to create a range.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    heightLte?: number
    /**
     * Search files by greater than or equal to ID. Can be used with idLte to create a range.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    idGte?: number
    /**
     * Search files by less than or equal to ID. Can be used with idGte to create a range.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    idLte?: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof FilesApidoSearch
     */
    ids?: Array<number>
    /**
     * If true shows files that have been marked to be used in new content. It false shows files that should not be used in new content.
     * Defaults to: undefined
     * @type boolean
     * @memberof FilesApidoSearch
     */
    isUsableInContent?: boolean
    /**
     * Number of items to return. Default limit is 10, maximum limit is 100.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    limit?: number
    /**
     * Search for files containing the given name.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApidoSearch
     */
    name?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof FilesApidoSearch
     */
    parentFolderIds?: Array<number>
    /**
     * Search files by path.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApidoSearch
     */
    path?: string
    /**
     * Desired file properties in the return object.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof FilesApidoSearch
     */
    properties?: Array<string>
    /**
     * Search files by exact file size in bytes.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    size?: number
    /**
     * Search files by greater than or equal to file size. Can be used with sizeLte to create a range.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    sizeGte?: number
    /**
     * Search files by less than or equal to file size. Can be used with sizeGte to create a range.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    sizeLte?: number
    /**
     * Sort files by a given field.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof FilesApidoSearch
     */
    sort?: Array<string>
    /**
     * Search files by file type.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApidoSearch
     */
    type?: string
    /**
     * Search files by exact time of latest updated. Time must be epoch time in milliseconds.
     * Defaults to: undefined
     * @type Date
     * @memberof FilesApidoSearch
     */
    updatedAt?: Date
    /**
     * Search files by greater than or equal to time of latest update. Can be used with updatedAtLte to create a range.
     * Defaults to: undefined
     * @type Date
     * @memberof FilesApidoSearch
     */
    updatedAtGte?: Date
    /**
     * Search files by less than or equal to time of latest update. Can be used with updatedAtGte to create a range.
     * Defaults to: undefined
     * @type Date
     * @memberof FilesApidoSearch
     */
    updatedAtLte?: Date
    /**
     * Search for given URL
     * Defaults to: undefined
     * @type string
     * @memberof FilesApidoSearch
     */
    url?: string
    /**
     * Search files by width of image or video.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    width?: number
    /**
     * Search files by greater than or equal to width of image or video. Can be used with widthLte to create a range.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    widthGte?: number
    /**
     * Search files by less than or equal to width of image or video. Can be used with widthGte to create a range.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApidoSearch
     */
    widthLte?: number
}

export interface FilesApiGetByIdRequest {
    /**
     * ID of the desired file.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApigetById
     */
    fileId: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof FilesApigetById
     */
    properties?: Array<string>
}

export interface FilesApiGetMetadataRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FilesApigetMetadata
     */
    path: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof FilesApigetMetadata
     */
    properties?: Array<string>
}

export interface FilesApiGetSignedUrlRequest {
    /**
     * ID of file.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApigetSignedUrl
     */
    fileId: string
    /**
     * How long in seconds the link will provide access to the file.
     * Defaults to: undefined
     * @type number
     * @memberof FilesApigetSignedUrl
     */
    expirationSeconds?: number
    /**
     * For image files. This will resize the image to the desired size before sharing. Does not affect the original file, just the file served by this signed URL.
     * Defaults to: undefined
     * @type &#39;icon&#39; | &#39;medium&#39; | &#39;preview&#39; | &#39;thumb&#39;
     * @memberof FilesApigetSignedUrl
     */
    size?: 'icon' | 'medium' | 'preview' | 'thumb'
    /**
     * If size is provided, this will upscale the image to fit the size dimensions.
     * Defaults to: undefined
     * @type boolean
     * @memberof FilesApigetSignedUrl
     */
    upscale?: boolean
}

export interface FilesApiImportFromUrlRequest {
    /**
     * 
     * @type ImportFromUrlInput
     * @memberof FilesApiimportFromUrl
     */
    importFromUrlInput: ImportFromUrlInput
}

export interface FilesApiReplaceRequest {
    /**
     * ID of the desired file.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApireplace
     */
    fileId: string
    /**
     * Character set of given file data.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApireplace
     */
    charsetHunch?: string
    /**
     * File data that will replace existing file in the file manager.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof FilesApireplace
     */
    file?: HttpFile
    /**
     * JSON string representing FileReplaceOptions. Includes options to set the access and expiresAt properties, which will automatically update when the file is replaced.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApireplace
     */
    options?: string
}

export interface FilesApiUpdatePropertiesRequest {
    /**
     * ID of file to update
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupdateProperties
     */
    fileId: string
    /**
     * 
     * @type FileUpdateInput
     * @memberof FilesApiupdateProperties
     */
    fileUpdateInput: FileUpdateInput
}

export interface FilesApiUploadRequest {
    /**
     * Character set of the uploaded file.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupload
     */
    charsetHunch?: string
    /**
     * File to be uploaded.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof FilesApiupload
     */
    file?: HttpFile
    /**
     * Desired name for the uploaded file.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupload
     */
    fileName?: string
    /**
     * Either \\\&#39;folderId\\\&#39; or \\\&#39;folderPath\\\&#39; is required. folderId is the ID of the folder the file will be uploaded to.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupload
     */
    folderId?: string
    /**
     * Either \\\&#39;folderPath\\\&#39; or \\\&#39;folderId\\\&#39; is required. This field represents the destination folder path for the uploaded file. If a path doesn\\\&#39;t exist, the system will try to create one.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupload
     */
    folderPath?: string
    /**
     * JSON string representing FileUploadOptions.
     * Defaults to: undefined
     * @type string
     * @memberof FilesApiupload
     */
    options?: string
}

export class ObjectFilesApi {
    private api: ObservableFilesApi

    public constructor(configuration: Configuration, requestFactory?: FilesApiRequestFactory, responseProcessor?: FilesApiResponseProcessor) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a file in accordance with GDPR regulations.
     * GDPR-delete file
     * @param param the request object
     */
    public _deleteWithHttpInfo(param: FilesApiDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api._deleteWithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Delete a file in accordance with GDPR regulations.
     * GDPR-delete file
     * @param param the request object
     */
    public _delete(param: FilesApiDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api._delete(param.fileId,  options).toPromise();
    }

    /**
     * Delete a file by ID
     * Delete file by ID
     * @param param the request object
     */
    public archiveWithHttpInfo(param: FilesApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Delete a file by ID
     * Delete file by ID
     * @param param the request object
     */
    public archive(param: FilesApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.fileId,  options).toPromise();
    }

    /**
     * Check the status of requested import.
     * Check import status
     * @param param the request object
     */
    public checkImportWithHttpInfo(param: FilesApiCheckImportRequest, options?: ConfigurationOptions): Promise<HttpInfo<FileActionResponse>> {
        return this.api.checkImportWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Check the status of requested import.
     * Check import status
     * @param param the request object
     */
    public checkImport(param: FilesApiCheckImportRequest, options?: ConfigurationOptions): Promise<FileActionResponse> {
        return this.api.checkImport(param.taskId,  options).toPromise();
    }

    /**
     * Creates a folder.
     * Create folder
     * @param param the request object
     */
    public createWithHttpInfo(param: FilesApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.createWithHttpInfo(param.folderInput,  options).toPromise();
    }

    /**
     * Creates a folder.
     * Create folder
     * @param param the request object
     */
    public create(param: FilesApiCreateRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.create(param.folderInput,  options).toPromise();
    }

    /**
     * Search through files in the file manager. Does not display hidden or archived files.
     * Search files
     * @param param the request object
     */
    public doSearchWithHttpInfo(param: FilesApiDoSearchRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseFile>> {
        return this.api.doSearchWithHttpInfo(param.after, param.allowsAnonymousAccess, param.before, param.createdAt, param.createdAtGte, param.createdAtLte, param.encoding, param.expiresAt, param.expiresAtGte, param.expiresAtLte, param.extension, param.fileMd5, param.height, param.heightGte, param.heightLte, param.idGte, param.idLte, param.ids, param.isUsableInContent, param.limit, param.name, param.parentFolderIds, param.path, param.properties, param.size, param.sizeGte, param.sizeLte, param.sort, param.type, param.updatedAt, param.updatedAtGte, param.updatedAtLte, param.url, param.width, param.widthGte, param.widthLte,  options).toPromise();
    }

    /**
     * Search through files in the file manager. Does not display hidden or archived files.
     * Search files
     * @param param the request object
     */
    public doSearch(param: FilesApiDoSearchRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseFile> {
        return this.api.doSearch(param.after, param.allowsAnonymousAccess, param.before, param.createdAt, param.createdAtGte, param.createdAtLte, param.encoding, param.expiresAt, param.expiresAtGte, param.expiresAtLte, param.extension, param.fileMd5, param.height, param.heightGte, param.heightLte, param.idGte, param.idLte, param.ids, param.isUsableInContent, param.limit, param.name, param.parentFolderIds, param.path, param.properties, param.size, param.sizeGte, param.sizeLte, param.sort, param.type, param.updatedAt, param.updatedAtGte, param.updatedAtLte, param.url, param.width, param.widthGte, param.widthLte,  options).toPromise();
    }

    /**
     * Retrieve a file by its ID.
     * Retrieve file by ID
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: FilesApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getByIdWithHttpInfo(param.fileId, param.properties,  options).toPromise();
    }

    /**
     * Retrieve a file by its ID.
     * Retrieve file by ID
     * @param param the request object
     */
    public getById(param: FilesApiGetByIdRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.getById(param.fileId, param.properties,  options).toPromise();
    }

    /**
     * Retrieve a file by its path.
     * Retrieve file by path
     * @param param the request object
     */
    public getMetadataWithHttpInfo(param: FilesApiGetMetadataRequest, options?: ConfigurationOptions): Promise<HttpInfo<FileStat>> {
        return this.api.getMetadataWithHttpInfo(param.path, param.properties,  options).toPromise();
    }

    /**
     * Retrieve a file by its path.
     * Retrieve file by path
     * @param param the request object
     */
    public getMetadata(param: FilesApiGetMetadataRequest, options?: ConfigurationOptions): Promise<FileStat> {
        return this.api.getMetadata(param.path, param.properties,  options).toPromise();
    }

    /**
     * Generates signed URL that allows temporary access to a private file.
     * Get signed URL to access private file
     * @param param the request object
     */
    public getSignedUrlWithHttpInfo(param: FilesApiGetSignedUrlRequest, options?: ConfigurationOptions): Promise<HttpInfo<SignedUrl>> {
        return this.api.getSignedUrlWithHttpInfo(param.fileId, param.expirationSeconds, param.size, param.upscale,  options).toPromise();
    }

    /**
     * Generates signed URL that allows temporary access to a private file.
     * Get signed URL to access private file
     * @param param the request object
     */
    public getSignedUrl(param: FilesApiGetSignedUrlRequest, options?: ConfigurationOptions): Promise<SignedUrl> {
        return this.api.getSignedUrl(param.fileId, param.expirationSeconds, param.size, param.upscale,  options).toPromise();
    }

    /**
     * Asynchronously imports the file at the given URL into the file manager.
     * Import file from URL
     * @param param the request object
     */
    public importFromUrlWithHttpInfo(param: FilesApiImportFromUrlRequest, options?: ConfigurationOptions): Promise<HttpInfo<ImportFromUrlTaskLocator>> {
        return this.api.importFromUrlWithHttpInfo(param.importFromUrlInput,  options).toPromise();
    }

    /**
     * Asynchronously imports the file at the given URL into the file manager.
     * Import file from URL
     * @param param the request object
     */
    public importFromUrl(param: FilesApiImportFromUrlRequest, options?: ConfigurationOptions): Promise<ImportFromUrlTaskLocator> {
        return this.api.importFromUrl(param.importFromUrlInput,  options).toPromise();
    }

    /**
     * Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
     * Replace file
     * @param param the request object
     */
    public replaceWithHttpInfo(param: FilesApiReplaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.replaceWithHttpInfo(param.fileId, param.charsetHunch, param.file, param.options,  options).toPromise();
    }

    /**
     * Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
     * Replace file
     * @param param the request object
     */
    public replace(param: FilesApiReplaceRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.replace(param.fileId, param.charsetHunch, param.file, param.options,  options).toPromise();
    }

    /**
     * Update properties of file by ID.
     * Update file properties
     * @param param the request object
     */
    public updatePropertiesWithHttpInfo(param: FilesApiUpdatePropertiesRequest, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.updatePropertiesWithHttpInfo(param.fileId, param.fileUpdateInput,  options).toPromise();
    }

    /**
     * Update properties of file by ID.
     * Update file properties
     * @param param the request object
     */
    public updateProperties(param: FilesApiUpdatePropertiesRequest, options?: ConfigurationOptions): Promise<any> {
        return this.api.updateProperties(param.fileId, param.fileUpdateInput,  options).toPromise();
    }

    /**
     * Upload a single file with content specified in request body.
     * Upload file
     * @param param the request object
     */
    public uploadWithHttpInfo(param: FilesApiUploadRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.uploadWithHttpInfo(param.charsetHunch, param.file, param.fileName, param.folderId, param.folderPath, param.options,  options).toPromise();
    }

    /**
     * Upload a single file with content specified in request body.
     * Upload file
     * @param param the request object
     */
    public upload(param: FilesApiUploadRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.upload(param.charsetHunch, param.file, param.fileName, param.folderId, param.folderPath, param.options,  options).toPromise();
    }

}

import { ObservableFoldersApi } from "./ObservableAPI";
import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";

export interface FoldersApiArchiveRequest {
    /**
     * ID of folder to delete.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApiarchive
     */
    folderId: string
}

export interface FoldersApiArchiveByPathRequest {
    /**
     * Path of folder to delete
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApiarchiveByPath
     */
    folderPath: string
}

export interface FoldersApiCheckUpdateStatusRequest {
    /**
     * TaskId of folder update
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApicheckUpdateStatus
     */
    taskId: string
}

export interface FoldersApiDoSearchRequest {
    /**
     * Offset search results by this value. The default offset is 0 and the maximum offset of items for a given search is 10,000.  Narrow your search down if you are reaching this limit.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApidoSearch
     */
    after?: string
    /**
     * Search folders updated before this timestamp. Time must be epoch time in milliseconds.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApidoSearch
     */
    before?: string
    /**
     * Search folders by exact time of creation. Time must be epoch time in milliseconds.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApidoSearch
     */
    createdAt?: Date
    /**
     * Search folders by greater than or equal to time of creation. Can be used with createdAtLte to create a range.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApidoSearch
     */
    createdAtGte?: Date
    /**
     * Search folders by less than or equal to time of creation. Can be used with createdAtGte to create a range.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApidoSearch
     */
    createdAtLte?: Date
    /**
     * Search folders by greater than or equal to ID. Can be used with idLte to create a range.
     * Defaults to: undefined
     * @type number
     * @memberof FoldersApidoSearch
     */
    idGte?: number
    /**
     * Search folders by less than or equal to ID. Can be used with idGte to create a range.
     * Defaults to: undefined
     * @type number
     * @memberof FoldersApidoSearch
     */
    idLte?: number
    /**
     * Search folders by multiple IDs. Comma-separated list of folder IDs.
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof FoldersApidoSearch
     */
    ids?: Array<number>
    /**
     * Number of items to return. Default limit is 10, maximum limit is 100.
     * Defaults to: undefined
     * @type number
     * @memberof FoldersApidoSearch
     */
    limit?: number
    /**
     * Search for folders containing the specified name.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApidoSearch
     */
    name?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof FoldersApidoSearch
     */
    parentFolderIds?: Array<number>
    /**
     * Search folders by path.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApidoSearch
     */
    path?: string
    /**
     * Properties that should be included in the returned folders.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof FoldersApidoSearch
     */
    properties?: Array<string>
    /**
     * Sort results by given property. For example -name sorts by name field descending, name sorts by name field ascending.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof FoldersApidoSearch
     */
    sort?: Array<string>
    /**
     * Search folders by exact time of latest updated. Time must be epoch time in milliseconds.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApidoSearch
     */
    updatedAt?: Date
    /**
     * Search folders by greater than or equal to time of latest update. Can be used with updatedAtLte to create a range.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApidoSearch
     */
    updatedAtGte?: Date
    /**
     * Search folders by less than or equal to time of latest update. Can be used with updatedAtGte to create a range.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApidoSearch
     */
    updatedAtLte?: Date
}

export interface FoldersApiGetByIdRequest {
    /**
     * ID of desired folder
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApigetById
     */
    folderId: string
    /**
     * Properties to set on returned folder.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof FoldersApigetById
     */
    properties?: Array<string>
}

export interface FoldersApiGetByPathRequest {
    /**
     * Path of desired folder.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApigetByPath
     */
    folderPath: string
    /**
     * Properties to set on returned folder.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof FoldersApigetByPath
     */
    properties?: Array<string>
}

export interface FoldersApiUpdatePropertiesRequest {
    /**
     * ID of folder to update
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApiupdateProperties
     */
    folderId: string
    /**
     * 
     * @type FolderUpdateInput
     * @memberof FoldersApiupdateProperties
     */
    folderUpdateInput: FolderUpdateInput
}

export interface FoldersApiUpdatePropertiesRecursivelyRequest {
    /**
     * 
     * @type FolderUpdateInputWithId
     * @memberof FoldersApiupdatePropertiesRecursively
     */
    folderUpdateInputWithId: FolderUpdateInputWithId
}

export class ObjectFoldersApi {
    private api: ObservableFoldersApi

    public constructor(configuration: Configuration, requestFactory?: FoldersApiRequestFactory, responseProcessor?: FoldersApiResponseProcessor) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete folder by ID.
     * Delete folder by ID
     * @param param the request object
     */
    public archiveWithHttpInfo(param: FoldersApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.folderId,  options).toPromise();
    }

    /**
     * Delete folder by ID.
     * Delete folder by ID
     * @param param the request object
     */
    public archive(param: FoldersApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.folderId,  options).toPromise();
    }

    /**
     * Delete a folder, identified by its path.
     * Delete folder by path
     * @param param the request object
     */
    public archiveByPathWithHttpInfo(param: FoldersApiArchiveByPathRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveByPathWithHttpInfo(param.folderPath,  options).toPromise();
    }

    /**
     * Delete a folder, identified by its path.
     * Delete folder by path
     * @param param the request object
     */
    public archiveByPath(param: FoldersApiArchiveByPathRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveByPath(param.folderPath,  options).toPromise();
    }

    /**
     * Check status of folder update. Folder updates happen asynchronously.
     * Check folder update status
     * @param param the request object
     */
    public checkUpdateStatusWithHttpInfo(param: FoldersApiCheckUpdateStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<FolderActionResponse>> {
        return this.api.checkUpdateStatusWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Check status of folder update. Folder updates happen asynchronously.
     * Check folder update status
     * @param param the request object
     */
    public checkUpdateStatus(param: FoldersApiCheckUpdateStatusRequest, options?: ConfigurationOptions): Promise<FolderActionResponse> {
        return this.api.checkUpdateStatus(param.taskId,  options).toPromise();
    }

    /**
     * Search for folders. Does not contain hidden or archived folders.
     * Search folders
     * @param param the request object
     */
    public doSearchWithHttpInfo(param: FoldersApiDoSearchRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseFolder>> {
        return this.api.doSearchWithHttpInfo(param.after, param.before, param.createdAt, param.createdAtGte, param.createdAtLte, param.idGte, param.idLte, param.ids, param.limit, param.name, param.parentFolderIds, param.path, param.properties, param.sort, param.updatedAt, param.updatedAtGte, param.updatedAtLte,  options).toPromise();
    }

    /**
     * Search for folders. Does not contain hidden or archived folders.
     * Search folders
     * @param param the request object
     */
    public doSearch(param: FoldersApiDoSearchRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseFolder> {
        return this.api.doSearch(param.after, param.before, param.createdAt, param.createdAtGte, param.createdAtLte, param.idGte, param.idLte, param.ids, param.limit, param.name, param.parentFolderIds, param.path, param.properties, param.sort, param.updatedAt, param.updatedAtGte, param.updatedAtLte,  options).toPromise();
    }

    /**
     * Retrieve a folder by its ID.
     * Retrieve folder by ID
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: FoldersApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.getByIdWithHttpInfo(param.folderId, param.properties,  options).toPromise();
    }

    /**
     * Retrieve a folder by its ID.
     * Retrieve folder by ID
     * @param param the request object
     */
    public getById(param: FoldersApiGetByIdRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.getById(param.folderId, param.properties,  options).toPromise();
    }

    /**
     * Retrieve a folder, identified by its path.
     * Retrieve folder by path
     * @param param the request object
     */
    public getByPathWithHttpInfo(param: FoldersApiGetByPathRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.getByPathWithHttpInfo(param.folderPath, param.properties,  options).toPromise();
    }

    /**
     * Retrieve a folder, identified by its path.
     * Retrieve folder by path
     * @param param the request object
     */
    public getByPath(param: FoldersApiGetByPathRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.getByPath(param.folderPath, param.properties,  options).toPromise();
    }

    /**
     * Update a folder\'s properties, identified by folder ID.
     * Update folder properties by folder ID
     * @param param the request object
     */
    public updatePropertiesWithHttpInfo(param: FoldersApiUpdatePropertiesRequest, options?: ConfigurationOptions): Promise<HttpInfo<Folder>> {
        return this.api.updatePropertiesWithHttpInfo(param.folderId, param.folderUpdateInput,  options).toPromise();
    }

    /**
     * Update a folder\'s properties, identified by folder ID.
     * Update folder properties by folder ID
     * @param param the request object
     */
    public updateProperties(param: FoldersApiUpdatePropertiesRequest, options?: ConfigurationOptions): Promise<Folder> {
        return this.api.updateProperties(param.folderId, param.folderUpdateInput,  options).toPromise();
    }

    /**
     * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder\'s children as well.
     * Update folder properties
     * @param param the request object
     */
    public updatePropertiesRecursivelyWithHttpInfo(param: FoldersApiUpdatePropertiesRecursivelyRequest, options?: ConfigurationOptions): Promise<HttpInfo<FolderUpdateTaskLocator>> {
        return this.api.updatePropertiesRecursivelyWithHttpInfo(param.folderUpdateInputWithId,  options).toPromise();
    }

    /**
     * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder\'s children as well.
     * Update folder properties
     * @param param the request object
     */
    public updatePropertiesRecursively(param: FoldersApiUpdatePropertiesRecursivelyRequest, options?: ConfigurationOptions): Promise<FolderUpdateTaskLocator> {
        return this.api.updatePropertiesRecursively(param.folderUpdateInputWithId,  options).toPromise();
    }

}
