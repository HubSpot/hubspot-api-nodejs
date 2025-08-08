import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { ActionResponse } from '../models/ActionResponse';
import { AssetFileMetadata } from '../models/AssetFileMetadata';
import { FileExtractRequest } from '../models/FileExtractRequest';
import { TaskLocator } from '../models/TaskLocator';

import { ObservableContentApi } from "./ObservableAPI";
import { ContentApiRequestFactory, ContentApiResponseProcessor} from "../apis/ContentApi";

export interface ContentApiArchiveRequest {
    /**
     * The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * Defaults to: undefined
     * @type string
     * @memberof ContentApiarchive
     */
    environment: string
    /**
     * The file system location of the file.
     * Defaults to: undefined
     * @type string
     * @memberof ContentApiarchive
     */
    path: string
}

export interface ContentApiCreateRequest {
    /**
     * The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * Defaults to: undefined
     * @type string
     * @memberof ContentApicreate
     */
    environment: string
    /**
     * The file system location of the file.
     * Defaults to: undefined
     * @type string
     * @memberof ContentApicreate
     */
    path: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ContentApicreate
     */
    file?: HttpFile
}

export interface ContentApiCreateOrUpdateRequest {
    /**
     * The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * Defaults to: undefined
     * @type string
     * @memberof ContentApicreateOrUpdate
     */
    environment: string
    /**
     * The file system location of the file.
     * Defaults to: undefined
     * @type string
     * @memberof ContentApicreateOrUpdate
     */
    path: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ContentApicreateOrUpdate
     */
    file?: HttpFile
}

export interface ContentApiDownloadRequest {
    /**
     * The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * Defaults to: undefined
     * @type string
     * @memberof ContentApidownload
     */
    environment: string
    /**
     * The file system location of the file.
     * Defaults to: undefined
     * @type string
     * @memberof ContentApidownload
     */
    path: string
}

export class ObjectContentApi {
    private api: ObservableContentApi

    public constructor(configuration: Configuration, requestFactory?: ContentApiRequestFactory, responseProcessor?: ContentApiResponseProcessor) {
        this.api = new ObservableContentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes the file at the specified path in the specified environment.
     * Delete a file
     * @param param the request object
     */
    public archiveWithHttpInfo(param: ContentApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.environment, param.path,  options).toPromise();
    }

    /**
     * Deletes the file at the specified path in the specified environment.
     * Delete a file
     * @param param the request object
     */
    public archive(param: ContentApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.environment, param.path,  options).toPromise();
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param param the request object
     */
    public createWithHttpInfo(param: ContentApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<AssetFileMetadata>> {
        return this.api.createWithHttpInfo(param.environment, param.path, param.file,  options).toPromise();
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param param the request object
     */
    public create(param: ContentApiCreateRequest, options?: ConfigurationOptions): Promise<AssetFileMetadata> {
        return this.api.create(param.environment, param.path, param.file,  options).toPromise();
    }

    /**
     * Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     * Create or update a file
     * @param param the request object
     */
    public createOrUpdateWithHttpInfo(param: ContentApiCreateOrUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<AssetFileMetadata>> {
        return this.api.createOrUpdateWithHttpInfo(param.environment, param.path, param.file,  options).toPromise();
    }

    /**
     * Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     * Create or update a file
     * @param param the request object
     */
    public createOrUpdate(param: ContentApiCreateOrUpdateRequest, options?: ConfigurationOptions): Promise<AssetFileMetadata> {
        return this.api.createOrUpdate(param.environment, param.path, param.file,  options).toPromise();
    }

    /**
     * Downloads the byte contents of the file at the specified path in the specified environment.
     * Download a file
     * @param param the request object
     */
    public downloadWithHttpInfo(param: ContentApiDownloadRequest, options?: ConfigurationOptions): Promise<HttpInfo<HttpFile>> {
        return this.api.downloadWithHttpInfo(param.environment, param.path,  options).toPromise();
    }

    /**
     * Downloads the byte contents of the file at the specified path in the specified environment.
     * Download a file
     * @param param the request object
     */
    public download(param: ContentApiDownloadRequest, options?: ConfigurationOptions): Promise<HttpFile> {
        return this.api.download(param.environment, param.path,  options).toPromise();
    }

}

import { ObservableExtractApi } from "./ObservableAPI";
import { ExtractApiRequestFactory, ExtractApiResponseProcessor} from "../apis/ExtractApi";

export interface ExtractApiDoAsyncRequest {
    /**
     * 
     * @type FileExtractRequest
     * @memberof ExtractApidoAsync
     */
    fileExtractRequest: FileExtractRequest
}

export interface ExtractApiGetAsyncStatusRequest {
    /**
     * The extraction task ID returned by the initial &#x60;extract/async&#x60; request.
     * Defaults to: undefined
     * @type number
     * @memberof ExtractApigetAsyncStatus
     */
    taskId: number
}

export class ObjectExtractApi {
    private api: ObservableExtractApi

    public constructor(configuration: Configuration, requestFactory?: ExtractApiRequestFactory, responseProcessor?: ExtractApiResponseProcessor) {
        this.api = new ObservableExtractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.
     * Extract a zip file
     * @param param the request object
     */
    public doAsyncWithHttpInfo(param: ExtractApiDoAsyncRequest, options?: ConfigurationOptions): Promise<HttpInfo<TaskLocator>> {
        return this.api.doAsyncWithHttpInfo(param.fileExtractRequest,  options).toPromise();
    }

    /**
     * Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.
     * Extract a zip file
     * @param param the request object
     */
    public doAsync(param: ExtractApiDoAsyncRequest, options?: ConfigurationOptions): Promise<TaskLocator> {
        return this.api.doAsync(param.fileExtractRequest,  options).toPromise();
    }

    /**
     * Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.
     * Get extraction status
     * @param param the request object
     */
    public getAsyncStatusWithHttpInfo(param: ExtractApiGetAsyncStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<ActionResponse>> {
        return this.api.getAsyncStatusWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.
     * Get extraction status
     * @param param the request object
     */
    public getAsyncStatus(param: ExtractApiGetAsyncStatusRequest, options?: ConfigurationOptions): Promise<ActionResponse> {
        return this.api.getAsyncStatus(param.taskId,  options).toPromise();
    }

}

import { ObservableMetadataApi } from "./ObservableAPI";
import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi";

export interface MetadataApiGetRequest {
    /**
     * The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * Defaults to: undefined
     * @type string
     * @memberof MetadataApiget
     */
    environment: string
    /**
     * The file system location of the file.
     * Defaults to: undefined
     * @type string
     * @memberof MetadataApiget
     */
    path: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MetadataApiget
     */
    properties?: string
}

export class ObjectMetadataApi {
    private api: ObservableMetadataApi

    public constructor(configuration: Configuration, requestFactory?: MetadataApiRequestFactory, responseProcessor?: MetadataApiResponseProcessor) {
        this.api = new ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the metadata object for the file at the specified path in the specified environment.
     * Get the metadata for a file
     * @param param the request object
     */
    public getWithHttpInfo(param: MetadataApiGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<AssetFileMetadata>> {
        return this.api.getWithHttpInfo(param.environment, param.path, param.properties,  options).toPromise();
    }

    /**
     * Gets the metadata object for the file at the specified path in the specified environment.
     * Get the metadata for a file
     * @param param the request object
     */
    public get(param: MetadataApiGetRequest, options?: ConfigurationOptions): Promise<AssetFileMetadata> {
        return this.api.get(param.environment, param.path, param.properties,  options).toPromise();
    }

}

import { ObservableValidationApi } from "./ObservableAPI";
import { ValidationApiRequestFactory, ValidationApiResponseProcessor} from "../apis/ValidationApi";

export interface ValidationApiDoValidateRequest {
    /**
     * The file system location of the file.
     * Defaults to: undefined
     * @type string
     * @memberof ValidationApidoValidate
     */
    path: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ValidationApidoValidate
     */
    file?: HttpFile
}

export class ObjectValidationApi {
    private api: ObservableValidationApi

    public constructor(configuration: Configuration, requestFactory?: ValidationApiRequestFactory, responseProcessor?: ValidationApiResponseProcessor) {
        this.api = new ObservableValidationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
     * Validate the contents of a file
     * @param param the request object
     */
    public doValidateWithHttpInfo(param: ValidationApiDoValidateRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.doValidateWithHttpInfo(param.path, param.file,  options).toPromise();
    }

    /**
     * Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
     * Validate the contents of a file
     * @param param the request object
     */
    public doValidate(param: ValidationApiDoValidateRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.doValidate(param.path, param.file,  options).toPromise();
    }

}
