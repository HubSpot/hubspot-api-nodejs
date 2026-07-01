import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { ActionResponse } from '../models/ActionResponse';
import { AssetFileMetadata } from '../models/AssetFileMetadata';
import { FileExtractRequest } from '../models/FileExtractRequest';
import { TaskLocator } from '../models/TaskLocator';
import { ObservableAdvancedApi } from './ObservableAPI';

import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";
export class PromiseAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdvancedApiRequestFactory,
        responseProcessor?: AdvancedApiResponseProcessor
    ) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param environment 
     * @param path 
     * @param [file]
     */
    public createWithHttpInfo(environment: string, path: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AssetFileMetadata>> {
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
        const result = this.api.createWithHttpInfo(environment, path, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.
     * Create a file
     * @param environment 
     * @param path 
     * @param [file]
     */
    public create(environment: string, path: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<AssetFileMetadata> {
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
        const result = this.api.create(environment, path, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     * Create or update a file
     * @param environment 
     * @param path 
     * @param [file]
     */
    public createOrUpdateWithHttpInfo(environment: string, path: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AssetFileMetadata>> {
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
        const result = this.api.createOrUpdateWithHttpInfo(environment, path, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.
     * Create or update a file
     * @param environment 
     * @param path 
     * @param [file]
     */
    public createOrUpdate(environment: string, path: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<AssetFileMetadata> {
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
        const result = this.api.createOrUpdate(environment, path, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.
     * Extract a zip file
     * @param fileExtractRequest
     */
    public doAsyncWithHttpInfo(fileExtractRequest: FileExtractRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TaskLocator>> {
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
        const result = this.api.doAsyncWithHttpInfo(fileExtractRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.
     * Extract a zip file
     * @param fileExtractRequest
     */
    public doAsync(fileExtractRequest: FileExtractRequest, _options?: PromiseConfigurationOptions): Promise<TaskLocator> {
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
        const result = this.api.doAsync(fileExtractRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
     * Validate the contents of a file
     * @param environment
     * @param path 
     * @param [file]
     */
    public doValidateWithHttpInfo(environment: string, path: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.doValidateWithHttpInfo(environment, path, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.
     * Validate the contents of a file
     * @param environment
     * @param path 
     * @param [file]
     */
    public doValidate(environment: string, path: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.doValidate(environment, path, file, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.
     * Get extraction status
     * @param taskId 
     */
    public getAsyncStatusWithHttpInfo(taskId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ActionResponse>> {
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
        const result = this.api.getAsyncStatusWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.
     * Get extraction status
     * @param taskId 
     */
    public getAsyncStatus(taskId: number, _options?: PromiseConfigurationOptions): Promise<ActionResponse> {
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
        const result = this.api.getAsyncStatus(taskId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes the file at the specified path in the specified environment.
     * Delete a file
     * @param environment 
     * @param path 
     */
    public archiveWithHttpInfo(environment: string, path: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(environment, path, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the file at the specified path in the specified environment.
     * Delete a file
     * @param environment 
     * @param path 
     */
    public archive(environment: string, path: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(environment, path, observableOptions);
        return result.toPromise();
    }

    /**
     * Downloads the byte contents of the file at the specified path in the specified environment.
     * Download a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     */
    public downloadWithHttpInfo(environment: string, path: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.downloadWithHttpInfo(environment, path, observableOptions);
        return result.toPromise();
    }

    /**
     * Downloads the byte contents of the file at the specified path in the specified environment.
     * Download a file
     * @param environment The environment of the file (\&quot;draft\&quot; or \&quot;published\&quot;).
     * @param path The file system location of the file.
     */
    public download(environment: string, path: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.download(environment, path, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the metadata object for the file at the specified path in the specified environment.
     * Get the metadata for a file
     * @param environment 
     * @param path 
     * @param [properties] 
     */
    public getWithHttpInfo(environment: string, path: string, properties?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AssetFileMetadata>> {
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
        const result = this.api.getWithHttpInfo(environment, path, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets the metadata object for the file at the specified path in the specified environment.
     * Get the metadata for a file
     * @param environment 
     * @param path 
     * @param [properties] 
     */
    public get(environment: string, path: string, properties?: string, _options?: PromiseConfigurationOptions): Promise<AssetFileMetadata> {
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
        const result = this.api.get(environment, path, properties, observableOptions);
        return result.toPromise();
    }


}



