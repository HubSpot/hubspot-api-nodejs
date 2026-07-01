import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponseWithTotalUrlMappingForwardPaging } from '../models/CollectionResponseWithTotalUrlMappingForwardPaging';
import { UrlMapping } from '../models/UrlMapping';
import { UrlMappingCreateRequestBody } from '../models/UrlMappingCreateRequestBody';
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
     * Delete one existing redirect, so it is no longer mapped.
     * Delete a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public archiveWithHttpInfo(urlRedirectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(urlRedirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete one existing redirect, so it is no longer mapped.
     * Delete a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public archive(urlRedirectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(urlRedirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after]
     * @param [archived]
     * @param [createdAfter]
     * @param [createdAt]
     * @param [createdBefore]
     * @param [limit]
     * @param [sort]
     * @param [updatedAfter]
     * @param [updatedAt]
     * @param [updatedBefore]
     */
    public cmsUrlRedirectsV3WithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalUrlMappingForwardPaging>> {
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
        const result = this.api.cmsUrlRedirectsV3WithHttpInfo(after, archived, createdAfter, createdAt, createdBefore, limit, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after]
     * @param [archived]
     * @param [createdAfter]
     * @param [createdAt]
     * @param [createdBefore]
     * @param [limit]
     * @param [sort]
     * @param [updatedAfter]
     * @param [updatedAt]
     * @param [updatedBefore]
     */
    public cmsUrlRedirectsV3(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalUrlMappingForwardPaging> {
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
        const result = this.api.cmsUrlRedirectsV3(after, archived, createdAfter, createdAt, createdBefore, limit, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param urlMappingCreateRequestBody
     */
    public cmsUrlRedirectsV3_1WithHttpInfo(urlMappingCreateRequestBody: UrlMappingCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UrlMapping>> {
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
        const result = this.api.cmsUrlRedirectsV3_1WithHttpInfo(urlMappingCreateRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * @param urlMappingCreateRequestBody
     */
    public cmsUrlRedirectsV3_1(urlMappingCreateRequestBody: UrlMappingCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<UrlMapping> {
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
        const result = this.api.cmsUrlRedirectsV3_1(urlMappingCreateRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for a single existing URL redirect by ID.
     * Get details for a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public getByIdWithHttpInfo(urlRedirectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UrlMapping>> {
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
        const result = this.api.getByIdWithHttpInfo(urlRedirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details for a single existing URL redirect by ID.
     * Get details for a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public getById(urlRedirectId: string, _options?: PromiseConfigurationOptions): Promise<UrlMapping> {
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
        const result = this.api.getById(urlRedirectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the settings for an existing URL redirect.
     * Update a redirect
     * @param urlRedirectId 
     * @param urlMapping
     */
    public updateWithHttpInfo(urlRedirectId: string, urlMapping: UrlMapping, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UrlMapping>> {
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
        const result = this.api.updateWithHttpInfo(urlRedirectId, urlMapping, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the settings for an existing URL redirect.
     * Update a redirect
     * @param urlRedirectId 
     * @param urlMapping
     */
    public update(urlRedirectId: string, urlMapping: UrlMapping, _options?: PromiseConfigurationOptions): Promise<UrlMapping> {
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
        const result = this.api.update(urlRedirectId, urlMapping, observableOptions);
        return result.toPromise();
    }


}



