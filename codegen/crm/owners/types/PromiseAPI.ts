import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponsePublicOwnerForwardPaging } from '../models/CollectionResponsePublicOwnerForwardPaging';
import { PublicOwner } from '../models/PublicOwner';
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
     * @param [email]
     * @param [limit]
     */
    public crmV3OwnersWithHttpInfo(after?: string, archived?: boolean, email?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicOwnerForwardPaging>> {
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
        const result = this.api.crmV3OwnersWithHttpInfo(after, archived, email, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after]
     * @param [archived]
     * @param [email]
     * @param [limit]
     */
    public crmV3Owners(after?: string, archived?: boolean, email?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicOwnerForwardPaging> {
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
        const result = this.api.crmV3Owners(after, archived, email, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific owner using either their \'id\' or \'userId\'.
     * Retrieve a specific owner by ID
     * @param ownerId 
     * @param [archived] Whether to return only results that have been archived.
     * @param [idProperty] 
     */
    public getByIdWithHttpInfo(ownerId: number, archived?: boolean, idProperty?: 'id' | 'userId', _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicOwner>> {
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
        const result = this.api.getByIdWithHttpInfo(ownerId, archived, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a specific owner using either their \'id\' or \'userId\'.
     * Retrieve a specific owner by ID
     * @param ownerId 
     * @param [archived] Whether to return only results that have been archived.
     * @param [idProperty] 
     */
    public getById(ownerId: number, archived?: boolean, idProperty?: 'id' | 'userId', _options?: PromiseConfigurationOptions): Promise<PublicOwner> {
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
        const result = this.api.getById(ownerId, archived, idProperty, observableOptions);
        return result.toPromise();
    }


}



