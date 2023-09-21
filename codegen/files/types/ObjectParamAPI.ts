import { HttpFile } from '../http/http';
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

import { ObservableFilesApi } from "./ObservableAPI";
import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";

export interface FilesApiArchiveRequest {
    /**
     * FileId to delete
     * @type string
     * @memberof FilesApiarchive
     */
    fileId: string
}

export interface FilesApiArchiveGDPRRequest {
    /**
     * ID of file to GDPR delete
     * @type string
     * @memberof FilesApiarchiveGDPR
     */
    fileId: string
}

export interface FilesApiCheckImportRequest {
    /**
     * Import by URL task ID
     * @type string
     * @memberof FilesApicheckImport
     */
    taskId: string
}

export interface FilesApiDoSearchRequest {
    /**
     * Desired file properties in the return object.
     * @type Array&lt;string&gt;
     * @memberof FilesApidoSearch
     */
    properties?: Array<string>
    /**
     * The maximum offset of items for a given search is 10000. Narrow your search down if you are reaching this limit.
     * @type string
     * @memberof FilesApidoSearch
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof FilesApidoSearch
     */
    before?: string
    /**
     * Number of items to return. Maximum limit is 100.
     * @type number
     * @memberof FilesApidoSearch
     */
    limit?: number
    /**
     * Sort files by a given field.
     * @type Array&lt;string&gt;
     * @memberof FilesApidoSearch
     */
    sort?: Array<string>
    /**
     * Search files by given ID.
     * @type string
     * @memberof FilesApidoSearch
     */
    id?: string
    /**
     * Search files by time of creation.
     * @type Date
     * @memberof FilesApidoSearch
     */
    createdAt?: Date
    /**
     * 
     * @type Date
     * @memberof FilesApidoSearch
     */
    createdAtLte?: Date
    /**
     * 
     * @type Date
     * @memberof FilesApidoSearch
     */
    createdAtGte?: Date
    /**
     * Search files by time of latest updated.
     * @type Date
     * @memberof FilesApidoSearch
     */
    updatedAt?: Date
    /**
     * 
     * @type Date
     * @memberof FilesApidoSearch
     */
    updatedAtLte?: Date
    /**
     * 
     * @type Date
     * @memberof FilesApidoSearch
     */
    updatedAtGte?: Date
    /**
     * Search for files containing the given name.
     * @type string
     * @memberof FilesApidoSearch
     */
    name?: string
    /**
     * Search files by path.
     * @type string
     * @memberof FilesApidoSearch
     */
    path?: string
    /**
     * Search files within given folderId.
     * @type number
     * @memberof FilesApidoSearch
     */
    parentFolderId?: number
    /**
     * Query by file size.
     * @type number
     * @memberof FilesApidoSearch
     */
    size?: number
    /**
     * Search files by height of image or video.
     * @type number
     * @memberof FilesApidoSearch
     */
    height?: number
    /**
     * Search files by width of image or video.
     * @type number
     * @memberof FilesApidoSearch
     */
    width?: number
    /**
     * Search files with specified encoding.
     * @type string
     * @memberof FilesApidoSearch
     */
    encoding?: string
    /**
     * Filter by provided file type.
     * @type string
     * @memberof FilesApidoSearch
     */
    type?: string
    /**
     * Search files by given extension.
     * @type string
     * @memberof FilesApidoSearch
     */
    extension?: string
    /**
     * Search for given URL
     * @type string
     * @memberof FilesApidoSearch
     */
    url?: string
    /**
     * If true shows files that have been marked to be used in new content. It false shows files that should not be used in new content.
     * @type boolean
     * @memberof FilesApidoSearch
     */
    isUsableInContent?: boolean
    /**
     * If &#39;true&#39; will show private files; if &#39;false&#39; will show public files
     * @type boolean
     * @memberof FilesApidoSearch
     */
    allowsAnonymousAccess?: boolean
}

export interface FilesApiGetByIdRequest {
    /**
     * ID of the desired file.
     * @type string
     * @memberof FilesApigetById
     */
    fileId: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof FilesApigetById
     */
    properties?: Array<string>
}

export interface FilesApiGetMetadataRequest {
    /**
     * 
     * @type string
     * @memberof FilesApigetMetadata
     */
    path: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof FilesApigetMetadata
     */
    properties?: Array<string>
}

export interface FilesApiGetSignedUrlRequest {
    /**
     * ID of file.
     * @type string
     * @memberof FilesApigetSignedUrl
     */
    fileId: string
    /**
     * For image files. This will resize the image to the desired size before sharing. Does not affect the original file, just the file served by this signed URL.
     * @type &#39;thumb&#39; | &#39;icon&#39; | &#39;medium&#39; | &#39;preview&#39;
     * @memberof FilesApigetSignedUrl
     */
    size?: 'thumb' | 'icon' | 'medium' | 'preview'
    /**
     * How long in seconds the link will provide access to the file.
     * @type number
     * @memberof FilesApigetSignedUrl
     */
    expirationSeconds?: number
    /**
     * If size is provided, this will upscale the image to fit the size dimensions.
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
     * @type string
     * @memberof FilesApireplace
     */
    fileId: string
    /**
     * File data that will replace existing file in the file manager.
     * @type HttpFile
     * @memberof FilesApireplace
     */
    file?: HttpFile
    /**
     * Character set of given file data.
     * @type string
     * @memberof FilesApireplace
     */
    charsetHunch?: string
    /**
     * JSON String representing FileReplaceOptions
     * @type string
     * @memberof FilesApireplace
     */
    options?: string
}

export interface FilesApiUpdatePropertiesRequest {
    /**
     * ID of file to update
     * @type string
     * @memberof FilesApiupdateProperties
     */
    fileId: string
    /**
     * Options to update.
     * @type FileUpdateInput
     * @memberof FilesApiupdateProperties
     */
    fileUpdateInput: FileUpdateInput
}

export interface FilesApiUploadRequest {
    /**
     * File to be uploaded.
     * @type HttpFile
     * @memberof FilesApiupload
     */
    file?: HttpFile
    /**
     * Either &#39;folderId&#39; or &#39;folderPath&#39; is required. folderId is the ID of the folder the file will be uploaded to.
     * @type string
     * @memberof FilesApiupload
     */
    folderId?: string
    /**
     * Either &#39;folderPath&#39; or &#39;folderId&#39; is required. This field represents the destination folder path for the uploaded file. If a path doesn&#39;t exist, the system will try to create one.
     * @type string
     * @memberof FilesApiupload
     */
    folderPath?: string
    /**
     * Desired name for the uploaded file.
     * @type string
     * @memberof FilesApiupload
     */
    fileName?: string
    /**
     * Character set of the uploaded file.
     * @type string
     * @memberof FilesApiupload
     */
    charsetHunch?: string
    /**
     * JSON string representing FileUploadOptions.
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
     * Delete file by ID
     * Delete file
     * @param param the request object
     */
    public archive(param: FilesApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.fileId,  options).toPromise();
    }

    /**
     * GDRP delete file
     * GDPR delete
     * @param param the request object
     */
    public archiveGDPR(param: FilesApiArchiveGDPRRequest, options?: Configuration): Promise<void> {
        return this.api.archiveGDPR(param.fileId,  options).toPromise();
    }

    /**
     * Check the status of requested import.
     * Check import status.
     * @param param the request object
     */
    public checkImport(param: FilesApiCheckImportRequest, options?: Configuration): Promise<FileActionResponse> {
        return this.api.checkImport(param.taskId,  options).toPromise();
    }

    /**
     * Search through files in the file manager. Does not display hidden or archived files.
     * Search files
     * @param param the request object
     */
    public doSearch(param: FilesApiDoSearchRequest = {}, options?: Configuration): Promise<CollectionResponseFile> {
        return this.api.doSearch(param.properties, param.after, param.before, param.limit, param.sort, param.id, param.createdAt, param.createdAtLte, param.createdAtGte, param.updatedAt, param.updatedAtLte, param.updatedAtGte, param.name, param.path, param.parentFolderId, param.size, param.height, param.width, param.encoding, param.type, param.extension, param.url, param.isUsableInContent, param.allowsAnonymousAccess,  options).toPromise();
    }

    /**
     * Get file by ID.
     * Get file.
     * @param param the request object
     */
    public getById(param: FilesApiGetByIdRequest, options?: Configuration): Promise<any> {
        return this.api.getById(param.fileId, param.properties,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getMetadata(param: FilesApiGetMetadataRequest, options?: Configuration): Promise<FileStat> {
        return this.api.getMetadata(param.path, param.properties,  options).toPromise();
    }

    /**
     * Generates signed URL that allows temporary access to a private file.
     * Get signed URL to access private file.
     * @param param the request object
     */
    public getSignedUrl(param: FilesApiGetSignedUrlRequest, options?: Configuration): Promise<SignedUrl> {
        return this.api.getSignedUrl(param.fileId, param.size, param.expirationSeconds, param.upscale,  options).toPromise();
    }

    /**
     * Asynchronously imports the file at the given URL into the file manager.
     * Import a file from a URL into the file manager.
     * @param param the request object
     */
    public importFromUrl(param: FilesApiImportFromUrlRequest, options?: Configuration): Promise<ImportFromUrlTaskLocator> {
        return this.api.importFromUrl(param.importFromUrlInput,  options).toPromise();
    }

    /**
     * Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
     * Replace file.
     * @param param the request object
     */
    public replace(param: FilesApiReplaceRequest, options?: Configuration): Promise<any> {
        return this.api.replace(param.fileId, param.file, param.charsetHunch, param.options,  options).toPromise();
    }

    /**
     * Update properties of file by ID.
     * update file properties
     * @param param the request object
     */
    public updateProperties(param: FilesApiUpdatePropertiesRequest, options?: Configuration): Promise<any> {
        return this.api.updateProperties(param.fileId, param.fileUpdateInput,  options).toPromise();
    }

    /**
     * Upload a single file with content specified in request body.
     * Upload file
     * @param param the request object
     */
    public upload(param: FilesApiUploadRequest = {}, options?: Configuration): Promise<any> {
        return this.api.upload(param.file, param.folderId, param.folderPath, param.fileName, param.charsetHunch, param.options,  options).toPromise();
    }

}

import { ObservableFoldersApi } from "./ObservableAPI";
import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";

export interface FoldersApiArchiveRequest {
    /**
     * ID of folder to delete.
     * @type string
     * @memberof FoldersApiarchive
     */
    folderId: string
}

export interface FoldersApiArchiveByPathRequest {
    /**
     * Path of folder to delete
     * @type string
     * @memberof FoldersApiarchiveByPath
     */
    folderPath: string
}

export interface FoldersApiCheckUpdateStatusRequest {
    /**
     * TaskId of folder update
     * @type string
     * @memberof FoldersApicheckUpdateStatus
     */
    taskId: string
}

export interface FoldersApiCreateRequest {
    /**
     * Folder creation options
     * @type FolderInput
     * @memberof FoldersApicreate
     */
    folderInput: FolderInput
}

export interface FoldersApiDoSearchRequest {
    /**
     * Properties that should be included in the returned folders.
     * @type Array&lt;string&gt;
     * @memberof FoldersApidoSearch
     */
    properties?: Array<string>
    /**
     * The maximum offset of items for a given search is 10000. Narrow your search down if you are reaching this limit.
     * @type string
     * @memberof FoldersApidoSearch
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof FoldersApidoSearch
     */
    before?: string
    /**
     * Limit of results to return. Max limit is 100.
     * @type number
     * @memberof FoldersApidoSearch
     */
    limit?: number
    /**
     * Sort results by given property. For example -name sorts by name field descending, name sorts by name field ascending.
     * @type Array&lt;string&gt;
     * @memberof FoldersApidoSearch
     */
    sort?: Array<string>
    /**
     * Search folder by given ID.
     * @type string
     * @memberof FoldersApidoSearch
     */
    id?: string
    /**
     * Search for folders with the given creation timestamp.
     * @type Date
     * @memberof FoldersApidoSearch
     */
    createdAt?: Date
    /**
     * 
     * @type Date
     * @memberof FoldersApidoSearch
     */
    createdAtLte?: Date
    /**
     * 
     * @type Date
     * @memberof FoldersApidoSearch
     */
    createdAtGte?: Date
    /**
     * Search for folder at given update timestamp.
     * @type Date
     * @memberof FoldersApidoSearch
     */
    updatedAt?: Date
    /**
     * 
     * @type Date
     * @memberof FoldersApidoSearch
     */
    updatedAtLte?: Date
    /**
     * 
     * @type Date
     * @memberof FoldersApidoSearch
     */
    updatedAtGte?: Date
    /**
     * Search for folders containing the specified name.
     * @type string
     * @memberof FoldersApidoSearch
     */
    name?: string
    /**
     * Search for folders by path.
     * @type string
     * @memberof FoldersApidoSearch
     */
    path?: string
    /**
     * Search for folders with the given parent folderId.
     * @type number
     * @memberof FoldersApidoSearch
     */
    parentFolderId?: number
}

export interface FoldersApiGetByIdRequest {
    /**
     * ID of desired folder
     * @type string
     * @memberof FoldersApigetById
     */
    folderId: string
    /**
     * Properties to set on returned folder.
     * @type Array&lt;string&gt;
     * @memberof FoldersApigetById
     */
    properties?: Array<string>
}

export interface FoldersApiGetByPathRequest {
    /**
     * Path of desired folder.
     * @type string
     * @memberof FoldersApigetByPath
     */
    folderPath: string
    /**
     * Properties to set on returned folder.
     * @type Array&lt;string&gt;
     * @memberof FoldersApigetByPath
     */
    properties?: Array<string>
}

export interface FoldersApiUpdatePropertiesRequest {
    /**
     * Properties to change in the folder
     * @type FolderUpdateInput
     * @memberof FoldersApiupdateProperties
     */
    folderUpdateInput: FolderUpdateInput
}

export class ObjectFoldersApi {
    private api: ObservableFoldersApi

    public constructor(configuration: Configuration, requestFactory?: FoldersApiRequestFactory, responseProcessor?: FoldersApiResponseProcessor) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete folder by ID.
     * Delete folder.
     * @param param the request object
     */
    public archive(param: FoldersApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.folderId,  options).toPromise();
    }

    /**
     * Delete folder by path.
     * Delete folder.
     * @param param the request object
     */
    public archiveByPath(param: FoldersApiArchiveByPathRequest, options?: Configuration): Promise<void> {
        return this.api.archiveByPath(param.folderPath,  options).toPromise();
    }

    /**
     * Check status of folder update. Folder updates happen asynchronously.
     * Check folder update status.
     * @param param the request object
     */
    public checkUpdateStatus(param: FoldersApiCheckUpdateStatusRequest, options?: Configuration): Promise<FolderActionResponse> {
        return this.api.checkUpdateStatus(param.taskId,  options).toPromise();
    }

    /**
     * Creates a folder.
     * Create folder.
     * @param param the request object
     */
    public create(param: FoldersApiCreateRequest, options?: Configuration): Promise<Folder> {
        return this.api.create(param.folderInput,  options).toPromise();
    }

    /**
     * Search for folders. Does not contain hidden or archived folders.
     * Search folders
     * @param param the request object
     */
    public doSearch(param: FoldersApiDoSearchRequest = {}, options?: Configuration): Promise<CollectionResponseFolder> {
        return this.api.doSearch(param.properties, param.after, param.before, param.limit, param.sort, param.id, param.createdAt, param.createdAtLte, param.createdAtGte, param.updatedAt, param.updatedAtLte, param.updatedAtGte, param.name, param.path, param.parentFolderId,  options).toPromise();
    }

    /**
     * Get folder by ID
     * Get folder
     * @param param the request object
     */
    public getById(param: FoldersApiGetByIdRequest, options?: Configuration): Promise<Folder> {
        return this.api.getById(param.folderId, param.properties,  options).toPromise();
    }

    /**
     * Get folder by path.
     * Get folder.
     * @param param the request object
     */
    public getByPath(param: FoldersApiGetByPathRequest, options?: Configuration): Promise<Folder> {
        return this.api.getByPath(param.folderPath, param.properties,  options).toPromise();
    }

    /**
     * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder's children as well.
     * Update folder properties
     * @param param the request object
     */
    public updateProperties(param: FoldersApiUpdatePropertiesRequest, options?: Configuration): Promise<FolderUpdateTaskLocator> {
        return this.api.updateProperties(param.folderUpdateInput,  options).toPromise();
    }

}
