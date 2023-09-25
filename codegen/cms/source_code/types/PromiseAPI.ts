import { HttpFile } from '../http/http';
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
    public archive(environment: string, path: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(environment, path, _options);
        return result.toPromise();
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param file The file to upload.
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
     * @param file The file to upload.
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
     * Extracts a zip file in the file system. The zip file will be extracted in-place and not be deleted automatically.
     * Extracts a zip file
     * @param path The file system location of the zip file.
     */
    public extractByPath(path: string, _options?: Configuration): Promise<void> {
        const result = this.api.extractByPath(path, _options);
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
    public get(environment: string, path: string, properties?: string, _options?: Configuration): Promise<AssetFileMetadata> {
        const result = this.api.get(environment, path, properties, _options);
        return result.toPromise();
    }


}



import { ObservableSourceCodeExtractApi } from './ObservableAPI';

import { SourceCodeExtractApiRequestFactory, SourceCodeExtractApiResponseProcessor} from "../apis/SourceCodeExtractApi";
export class PromiseSourceCodeExtractApi {
    private api: ObservableSourceCodeExtractApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SourceCodeExtractApiRequestFactory,
        responseProcessor?: SourceCodeExtractApiResponseProcessor
    ) {
        this.api = new ObservableSourceCodeExtractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param fileExtractRequest 
     */
    public doAsync(fileExtractRequest: FileExtractRequest, _options?: Configuration): Promise<TaskLocator> {
        const result = this.api.doAsync(fileExtractRequest, _options);
        return result.toPromise();
    }

    /**
     * @param taskId 
     */
    public getAsyncStatus(taskId: number, _options?: Configuration): Promise<ActionResponse> {
        const result = this.api.getAsyncStatus(taskId, _options);
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
     * @param file The file to validate.
     */
    public doValidate(path: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.doValidate(path, file, _options);
        return result.toPromise();
    }


}



