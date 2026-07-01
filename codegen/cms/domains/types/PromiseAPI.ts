import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponseWithTotalDomain } from '../models/CollectionResponseWithTotalDomain';
import { Domain } from '../models/Domain';
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
    public cmsV3DomainsWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalDomain>> {
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
        const result = this.api.cmsV3DomainsWithHttpInfo(after, archived, createdAfter, createdAt, createdBefore, limit, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
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
    public cmsV3Domains(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalDomain> {
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
        const result = this.api.cmsV3Domains(after, archived, createdAfter, createdAt, createdBefore, limit, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a single domains with the id specified.
     * Get a single domain
     * @param domainId The unique ID of the domain.
     */
    public getByIdWithHttpInfo(domainId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Domain>> {
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
        const result = this.api.getByIdWithHttpInfo(domainId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a single domains with the id specified.
     * Get a single domain
     * @param domainId The unique ID of the domain.
     */
    public getById(domainId: string, _options?: PromiseConfigurationOptions): Promise<Domain> {
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
        const result = this.api.getById(domainId, observableOptions);
        return result.toPromise();
    }


}



