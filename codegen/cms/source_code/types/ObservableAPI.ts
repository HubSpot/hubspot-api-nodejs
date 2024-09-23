import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ActionResponse } from '../models/ActionResponse';
import { AssetFileMetadata } from '../models/AssetFileMetadata';
import { FileExtractRequest } from '../models/FileExtractRequest';
import { TaskLocator } from '../models/TaskLocator';

import { ContentApiRequestFactory, ContentApiResponseProcessor} from "../apis/ContentApi";
export class ObservableContentApi {
    private requestFactory: ContentApiRequestFactory;
    private responseProcessor: ContentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContentApiRequestFactory,
        responseProcessor?: ContentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContentApiResponseProcessor();
    }

    /**
     * Deletes the file at the specified path in the specified environment.
     * Delete a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     */
    public archiveWithHttpInfo(environment: string, path: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(environment, path, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the file at the specified path in the specified environment.
     * Delete a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     */
    public archive(environment: string, path: string, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(environment, path, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param file 
     */
    public createWithHttpInfo(environment: string, path: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<AssetFileMetadata>> {
        const requestContextPromise = this.requestFactory.create(environment, path, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param file 
     */
    public create(environment: string, path: string, file?: HttpFile, _options?: Configuration): Observable<AssetFileMetadata> {
        return this.createWithHttpInfo(environment, path, file, _options).pipe(map((apiResponse: HttpInfo<AssetFileMetadata>) => apiResponse.data));
    }

    /**
     * Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     * Create or update a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param file 
     */
    public createOrUpdateWithHttpInfo(environment: string, path: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<AssetFileMetadata>> {
        const requestContextPromise = this.requestFactory.createOrUpdate(environment, path, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     * Create or update a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param file 
     */
    public createOrUpdate(environment: string, path: string, file?: HttpFile, _options?: Configuration): Observable<AssetFileMetadata> {
        return this.createOrUpdateWithHttpInfo(environment, path, file, _options).pipe(map((apiResponse: HttpInfo<AssetFileMetadata>) => apiResponse.data));
    }

    /**
     * Downloads the byte contents of the file at the specified path in the specified environment.
     * Download a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     */
    public downloadWithHttpInfo(environment: string, path: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.download(environment, path, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Downloads the byte contents of the file at the specified path in the specified environment.
     * Download a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     */
    public download(environment: string, path: string, _options?: Configuration): Observable<void> {
        return this.downloadWithHttpInfo(environment, path, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ExtractApiRequestFactory, ExtractApiResponseProcessor} from "../apis/ExtractApi";
export class ObservableExtractApi {
    private requestFactory: ExtractApiRequestFactory;
    private responseProcessor: ExtractApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExtractApiRequestFactory,
        responseProcessor?: ExtractApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExtractApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExtractApiResponseProcessor();
    }

    /**
     * Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.
     * Extract a zip file
     * @param fileExtractRequest 
     */
    public doAsyncWithHttpInfo(fileExtractRequest: FileExtractRequest, _options?: Configuration): Observable<HttpInfo<TaskLocator>> {
        const requestContextPromise = this.requestFactory.doAsync(fileExtractRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doAsyncWithHttpInfo(rsp)));
            }));
    }

    /**
     * Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.
     * Extract a zip file
     * @param fileExtractRequest 
     */
    public doAsync(fileExtractRequest: FileExtractRequest, _options?: Configuration): Observable<TaskLocator> {
        return this.doAsyncWithHttpInfo(fileExtractRequest, _options).pipe(map((apiResponse: HttpInfo<TaskLocator>) => apiResponse.data));
    }

    /**
     * Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.
     * Get extraction status
     * @param taskId The extraction task ID returned by the initial &#x60;extract/async&#x60; request.
     */
    public getAsyncStatusWithHttpInfo(taskId: number, _options?: Configuration): Observable<HttpInfo<ActionResponse>> {
        const requestContextPromise = this.requestFactory.getAsyncStatus(taskId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAsyncStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.
     * Get extraction status
     * @param taskId The extraction task ID returned by the initial &#x60;extract/async&#x60; request.
     */
    public getAsyncStatus(taskId: number, _options?: Configuration): Observable<ActionResponse> {
        return this.getAsyncStatusWithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<ActionResponse>) => apiResponse.data));
    }

}

import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi";
export class ObservableMetadataApi {
    private requestFactory: MetadataApiRequestFactory;
    private responseProcessor: MetadataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataApiRequestFactory,
        responseProcessor?: MetadataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MetadataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetadataApiResponseProcessor();
    }

    /**
     * Gets the metadata object for the file at the specified path in the specified environment.
     * Get the metadata for a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param properties 
     */
    public getWithHttpInfo(environment: string, path: string, properties?: string, _options?: Configuration): Observable<HttpInfo<AssetFileMetadata>> {
        const requestContextPromise = this.requestFactory.get(environment, path, properties, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the metadata object for the file at the specified path in the specified environment.
     * Get the metadata for a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     * @param properties 
     */
    public get(environment: string, path: string, properties?: string, _options?: Configuration): Observable<AssetFileMetadata> {
        return this.getWithHttpInfo(environment, path, properties, _options).pipe(map((apiResponse: HttpInfo<AssetFileMetadata>) => apiResponse.data));
    }

}

import { ValidationApiRequestFactory, ValidationApiResponseProcessor} from "../apis/ValidationApi";
export class ObservableValidationApi {
    private requestFactory: ValidationApiRequestFactory;
    private responseProcessor: ValidationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ValidationApiRequestFactory,
        responseProcessor?: ValidationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ValidationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ValidationApiResponseProcessor();
    }

    /**
     * Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
     * Validate the contents of a file
     * @param path The file system location of the file.
     * @param file 
     */
    public doValidateWithHttpInfo(path: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.doValidate(path, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doValidateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
     * Validate the contents of a file
     * @param path The file system location of the file.
     * @param file 
     */
    public doValidate(path: string, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.doValidateWithHttpInfo(path, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
