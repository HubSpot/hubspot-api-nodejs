import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { ActionResponse } from '../models/ActionResponse';
import { AssetFileMetadata } from '../models/AssetFileMetadata';
import { FileExtractRequest } from '../models/FileExtractRequest';
import { TaskLocator } from '../models/TaskLocator';

import { ObservableAdvancedApi } from "./ObservableAPI";
import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";

export interface AdvancedApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApicreate
     */
    environment: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApicreate
     */
    path: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof AdvancedApicreate
     */
    file?: HttpFile
}

export interface AdvancedApiCreateOrUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApicreateOrUpdate
     */
    environment: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApicreateOrUpdate
     */
    path: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof AdvancedApicreateOrUpdate
     */
    file?: HttpFile
}

export interface AdvancedApiDoAsyncRequest {
    /**
     * 
     * @type FileExtractRequest
     * @memberof AdvancedApidoAsync
     */
    fileExtractRequest: FileExtractRequest
}

export interface AdvancedApiDoValidateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApidoValidate
     */
    environment: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApidoValidate
     */
    path: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof AdvancedApidoValidate
     */
    file?: HttpFile
}

export interface AdvancedApiGetAsyncStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AdvancedApigetAsyncStatus
     */
    taskId: number
}

export class ObjectAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedApiRequestFactory, responseProcessor?: AdvancedApiResponseProcessor) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param param the request object
     */
    public createWithHttpInfo(param: AdvancedApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<AssetFileMetadata>> {
        return this.api.createWithHttpInfo(param.environment, param.path, param.file,  options).toPromise();
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param param the request object
     */
    public create(param: AdvancedApiCreateRequest, options?: ConfigurationOptions): Promise<AssetFileMetadata> {
        return this.api.create(param.environment, param.path, param.file,  options).toPromise();
    }

    /**
     * Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     * Create or update a file
     * @param param the request object
     */
    public createOrUpdateWithHttpInfo(param: AdvancedApiCreateOrUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<AssetFileMetadata>> {
        return this.api.createOrUpdateWithHttpInfo(param.environment, param.path, param.file,  options).toPromise();
    }

    /**
     * Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     * Create or update a file
     * @param param the request object
     */
    public createOrUpdate(param: AdvancedApiCreateOrUpdateRequest, options?: ConfigurationOptions): Promise<AssetFileMetadata> {
        return this.api.createOrUpdate(param.environment, param.path, param.file,  options).toPromise();
    }

    /**
     * Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.
     * Extract a zip file
     * @param param the request object
     */
    public doAsyncWithHttpInfo(param: AdvancedApiDoAsyncRequest, options?: ConfigurationOptions): Promise<HttpInfo<TaskLocator>> {
        return this.api.doAsyncWithHttpInfo(param.fileExtractRequest,  options).toPromise();
    }

    /**
     * Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.
     * Extract a zip file
     * @param param the request object
     */
    public doAsync(param: AdvancedApiDoAsyncRequest, options?: ConfigurationOptions): Promise<TaskLocator> {
        return this.api.doAsync(param.fileExtractRequest,  options).toPromise();
    }

    /**
     * Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
     * Validate the contents of a file
     * @param param the request object
     */
    public doValidateWithHttpInfo(param: AdvancedApiDoValidateRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.doValidateWithHttpInfo(param.environment, param.path, param.file,  options).toPromise();
    }

    /**
     * Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
     * Validate the contents of a file
     * @param param the request object
     */
    public doValidate(param: AdvancedApiDoValidateRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.doValidate(param.environment, param.path, param.file,  options).toPromise();
    }

    /**
     * Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.
     * Get extraction status
     * @param param the request object
     */
    public getAsyncStatusWithHttpInfo(param: AdvancedApiGetAsyncStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<ActionResponse>> {
        return this.api.getAsyncStatusWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.
     * Get extraction status
     * @param param the request object
     */
    public getAsyncStatus(param: AdvancedApiGetAsyncStatusRequest, options?: ConfigurationOptions): Promise<ActionResponse> {
        return this.api.getAsyncStatus(param.taskId,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    environment: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    path: string
}

export interface BasicApiDownloadRequest {
    /**
     * The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * Defaults to: undefined
     * @type string
     * @memberof BasicApidownload
     */
    environment: string
    /**
     * The file system location of the file.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApidownload
     */
    path: string
}

export interface BasicApiGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiget
     */
    environment: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiget
     */
    path: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiget
     */
    properties?: string
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes the file at the specified path in the specified environment.
     * Delete a file
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.environment, param.path,  options).toPromise();
    }

    /**
     * Deletes the file at the specified path in the specified environment.
     * Delete a file
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.environment, param.path,  options).toPromise();
    }

    /**
     * Downloads the byte contents of the file at the specified path in the specified environment.
     * Download a file
     * @param param the request object
     */
    public downloadWithHttpInfo(param: BasicApiDownloadRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.downloadWithHttpInfo(param.environment, param.path,  options).toPromise();
    }

    /**
     * Downloads the byte contents of the file at the specified path in the specified environment.
     * Download a file
     * @param param the request object
     */
    public download(param: BasicApiDownloadRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.download(param.environment, param.path,  options).toPromise();
    }

    /**
     * Gets the metadata object for the file at the specified path in the specified environment.
     * Get the metadata for a file
     * @param param the request object
     */
    public getWithHttpInfo(param: BasicApiGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<AssetFileMetadata>> {
        return this.api.getWithHttpInfo(param.environment, param.path, param.properties,  options).toPromise();
    }

    /**
     * Gets the metadata object for the file at the specified path in the specified environment.
     * Get the metadata for a file
     * @param param the request object
     */
    public get(param: BasicApiGetRequest, options?: ConfigurationOptions): Promise<AssetFileMetadata> {
        return this.api.get(param.environment, param.path, param.properties,  options).toPromise();
    }

}
