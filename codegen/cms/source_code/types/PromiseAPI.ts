import { HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ActionResponse } from '../models/ActionResponse';
import { AssetFileMetadata } from '../models/AssetFileMetadata';
import { FileExtractRequest } from '../models/FileExtractRequest';
import { TaskLocator } from '../models/TaskLocator';
import { ObservableContentApi } from './ObservableAPI';

import { ContentApiRequestFactory, ContentApiResponseProcessor} from "../apis/ContentApi";
export class PromiseContentApi {
    private api: ObservableContentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContentApiRequestFactory,
        responseProcessor?: ContentApiResponseProcessor
    ) {
        this.api = new ObservableContentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes the file at the specified path in the specified environment.
     * Delete a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     */
    public archiveWithHttpInfo(environment: string, path: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(environment, path, _options);
        return result.toPromise();
    }

    /**
     * Deletes the file at the specified path in the specified environment.
     * Delete a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     */
    public archive(environment: string, path: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(environment, path, _options);
        return result.toPromise();
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param file 
     */
    public createWithHttpInfo(environment: string, path: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<AssetFileMetadata>> {
        const result = this.api.createWithHttpInfo(environment, path, file, _options);
        return result.toPromise();
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param file 
     */
    public create(environment: string, path: string, file?: HttpFile, _options?: Configuration): Promise<AssetFileMetadata> {
        const result = this.api.create(environment, path, file, _options);
        return result.toPromise();
    }

    /**
     * Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     * Create or update a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param file 
     */
    public createOrUpdateWithHttpInfo(environment: string, path: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<AssetFileMetadata>> {
        const result = this.api.createOrUpdateWithHttpInfo(environment, path, file, _options);
        return result.toPromise();
    }

    /**
     * Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     * Create or update a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param file 
     */
    public createOrUpdate(environment: string, path: string, file?: HttpFile, _options?: Configuration): Promise<AssetFileMetadata> {
        const result = this.api.createOrUpdate(environment, path, file, _options);
        return result.toPromise();
    }

    /**
     * Downloads the byte contents of the file at the specified path in the specified environment.
     * Download a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     */
    public downloadWithHttpInfo(environment: string, path: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.downloadWithHttpInfo(environment, path, _options);
        return result.toPromise();
    }

    /**
     * Downloads the byte contents of the file at the specified path in the specified environment.
     * Download a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     */
    public download(environment: string, path: string, _options?: Configuration): Promise<void> {
        const result = this.api.download(environment, path, _options);
        return result.toPromise();
    }


}



import { ObservableExtractApi } from './ObservableAPI';

import { ExtractApiRequestFactory, ExtractApiResponseProcessor} from "../apis/ExtractApi";
export class PromiseExtractApi {
    private api: ObservableExtractApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExtractApiRequestFactory,
        responseProcessor?: ExtractApiResponseProcessor
    ) {
        this.api = new ObservableExtractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.
     * Extract a zip file
     * @param fileExtractRequest 
     */
    public doAsyncWithHttpInfo(fileExtractRequest: FileExtractRequest, _options?: Configuration): Promise<HttpInfo<TaskLocator>> {
        const result = this.api.doAsyncWithHttpInfo(fileExtractRequest, _options);
        return result.toPromise();
    }

    /**
     * Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.
     * Extract a zip file
     * @param fileExtractRequest 
     */
    public doAsync(fileExtractRequest: FileExtractRequest, _options?: Configuration): Promise<TaskLocator> {
        const result = this.api.doAsync(fileExtractRequest, _options);
        return result.toPromise();
    }

    /**
     * Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.
     * Get extraction status
     * @param taskId The extraction task ID returned by the initial &#x60;extract/async&#x60; request.
     */
    public getAsyncStatusWithHttpInfo(taskId: number, _options?: Configuration): Promise<HttpInfo<ActionResponse>> {
        const result = this.api.getAsyncStatusWithHttpInfo(taskId, _options);
        return result.toPromise();
    }

    /**
     * Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.
     * Get extraction status
     * @param taskId The extraction task ID returned by the initial &#x60;extract/async&#x60; request.
     */
    public getAsyncStatus(taskId: number, _options?: Configuration): Promise<ActionResponse> {
        const result = this.api.getAsyncStatus(taskId, _options);
        return result.toPromise();
    }


}



import { ObservableMetadataApi } from './ObservableAPI';

import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi";
export class PromiseMetadataApi {
    private api: ObservableMetadataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataApiRequestFactory,
        responseProcessor?: MetadataApiResponseProcessor
    ) {
        this.api = new ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the metadata object for the file at the specified path in the specified environment.
     * Get the metadata for a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param properties 
     */
    public getWithHttpInfo(environment: string, path: string, properties?: string, _options?: Configuration): Promise<HttpInfo<AssetFileMetadata>> {
        const result = this.api.getWithHttpInfo(environment, path, properties, _options);
        return result.toPromise();
    }

    /**
     * Gets the metadata object for the file at the specified path in the specified environment.
     * Get the metadata for a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param properties 
     */
    public get(environment: string, path: string, properties?: string, _options?: Configuration): Promise<AssetFileMetadata> {
        const result = this.api.get(environment, path, properties, _options);
        return result.toPromise();
    }


}



import { ObservableValidationApi } from './ObservableAPI';

import { ValidationApiRequestFactory, ValidationApiResponseProcessor} from "../apis/ValidationApi";
export class PromiseValidationApi {
    private api: ObservableValidationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ValidationApiRequestFactory,
        responseProcessor?: ValidationApiResponseProcessor
    ) {
        this.api = new ObservableValidationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
     * Validate the contents of a file
     * @param path The file system location of the file.
     * @param file 
     */
    public doValidateWithHttpInfo(path: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.doValidateWithHttpInfo(path, file, _options);
        return result.toPromise();
    }

    /**
     * Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
     * Validate the contents of a file
     * @param path The file system location of the file.
     * @param file 
     */
    public doValidate(path: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.doValidate(path, file, _options);
        return result.toPromise();
    }


}



