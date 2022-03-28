import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ActionResponse } from '../models/ActionResponse';
import { AssetFileMetadata } from '../models/AssetFileMetadata';
import { ErrorDetail } from '../models/ErrorDetail';
import { FileExtractRequest } from '../models/FileExtractRequest';
import { ModelError } from '../models/ModelError';
import { TaskLocator } from '../models/TaskLocator';

import { ObservableContentApi } from "./ObservableAPI";
import { ContentApiRequestFactory, ContentApiResponseProcessor} from "../apis/ContentApi";

export interface ContentApiArchiveRequest {
    /**
     * The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @type string
     * @memberof ContentApiarchive
     */
    environment: string
    /**
     * The file system location of the file.
     * @type string
     * @memberof ContentApiarchive
     */
    path: string
}

export interface ContentApiCreateRequest {
    /**
     * The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @type string
     * @memberof ContentApicreate
     */
    environment: string
    /**
     * The file system location of the file.
     * @type string
     * @memberof ContentApicreate
     */
    path: string
    /**
     * The file to upload.
     * @type HttpFile
     * @memberof ContentApicreate
     */
    file?: HttpFile
}

export interface ContentApiGetRequest {
    /**
     * The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @type string
     * @memberof ContentApiget
     */
    environment: string
    /**
     * The file system location of the file.
     * @type string
     * @memberof ContentApiget
     */
    path: string
}

export interface ContentApiReplaceRequest {
    /**
     * The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @type string
     * @memberof ContentApireplace
     */
    environment: string
    /**
     * The file system location of the file.
     * @type string
     * @memberof ContentApireplace
     */
    path: string
    /**
     * The file to upload.
     * @type HttpFile
     * @memberof ContentApireplace
     */
    file?: HttpFile
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
    public archive(param: ContentApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.environment, param.path,  options).toPromise();
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param param the request object
     */
    public create(param: ContentApiCreateRequest, options?: Configuration): Promise<AssetFileMetadata> {
        return this.api.create(param.environment, param.path, param.file,  options).toPromise();
    }

    /**
     * Downloads the byte contents of the file at the specified path in the specified environment.
     * Download a file
     * @param param the request object
     */
    public get(param: ContentApiGetRequest, options?: Configuration): Promise<void> {
        return this.api.get(param.environment, param.path,  options).toPromise();
    }

    /**
     * Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     * Create or update a file
     * @param param the request object
     */
    public replace(param: ContentApiReplaceRequest, options?: Configuration): Promise<AssetFileMetadata> {
        return this.api.replace(param.environment, param.path, param.file,  options).toPromise();
    }

}

import { ObservableExtractApi } from "./ObservableAPI";
import { ExtractApiRequestFactory, ExtractApiResponseProcessor} from "../apis/ExtractApi";

export interface ExtractApiExtractByPathRequest {
    /**
     * The file system location of the zip file.
     * @type string
     * @memberof ExtractApiextractByPath
     */
    path: string
}

export class ObjectExtractApi {
    private api: ObservableExtractApi

    public constructor(configuration: Configuration, requestFactory?: ExtractApiRequestFactory, responseProcessor?: ExtractApiResponseProcessor) {
        this.api = new ObservableExtractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Extracts a zip file in the file system. The zip file will be extracted in-place and not be deleted automatically.
     * Extracts a zip file
     * @param param the request object
     */
    public extractByPath(param: ExtractApiExtractByPathRequest, options?: Configuration): Promise<void> {
        return this.api.extractByPath(param.path,  options).toPromise();
    }

}

import { ObservableMetadataApi } from "./ObservableAPI";
import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi";

export interface MetadataApiGetRequest {
    /**
     * The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @type string
     * @memberof MetadataApiget
     */
    environment: string
    /**
     * The file system location of the file.
     * @type string
     * @memberof MetadataApiget
     */
    path: string
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
    public get(param: MetadataApiGetRequest, options?: Configuration): Promise<AssetFileMetadata> {
        return this.api.get(param.environment, param.path,  options).toPromise();
    }

}

import { ObservableSourceCodeExtractApi } from "./ObservableAPI";
import { SourceCodeExtractApiRequestFactory, SourceCodeExtractApiResponseProcessor} from "../apis/SourceCodeExtractApi";

export interface SourceCodeExtractApiDoAsyncRequest {
    /**
     * 
     * @type FileExtractRequest
     * @memberof SourceCodeExtractApidoAsync
     */
    fileExtractRequest: FileExtractRequest
}

export interface SourceCodeExtractApiGetAsyncStatusRequest {
    /**
     * 
     * @type number
     * @memberof SourceCodeExtractApigetAsyncStatus
     */
    taskId: number
}

export class ObjectSourceCodeExtractApi {
    private api: ObservableSourceCodeExtractApi

    public constructor(configuration: Configuration, requestFactory?: SourceCodeExtractApiRequestFactory, responseProcessor?: SourceCodeExtractApiResponseProcessor) {
        this.api = new ObservableSourceCodeExtractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public doAsync(param: SourceCodeExtractApiDoAsyncRequest, options?: Configuration): Promise<TaskLocator> {
        return this.api.doAsync(param.fileExtractRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAsyncStatus(param: SourceCodeExtractApiGetAsyncStatusRequest, options?: Configuration): Promise<ActionResponse> {
        return this.api.getAsyncStatus(param.taskId,  options).toPromise();
    }

}

import { ObservableValidationApi } from "./ObservableAPI";
import { ValidationApiRequestFactory, ValidationApiResponseProcessor} from "../apis/ValidationApi";

export interface ValidationApiDoValidateRequest {
    /**
     * The file system location of the file.
     * @type string
     * @memberof ValidationApidoValidate
     */
    path: string
    /**
     * The file to validate.
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
    public doValidate(param: ValidationApiDoValidateRequest, options?: Configuration): Promise<void> {
        return this.api.doValidate(param.path, param.file,  options).toPromise();
    }

}
