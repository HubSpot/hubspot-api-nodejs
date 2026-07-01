import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponsePublicBusinessUnitNoPaging } from '../models/CollectionResponsePublicBusinessUnitNoPaging';
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
     * Retrieve the brands that a specific user can access.
     * Retrieve brands by associated user
     * @param userId 
     * @param [name] 
     * @param [properties] 
     */
    public getByUserIDWithHttpInfo(userId: string, name?: Array<string>, properties?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicBusinessUnitNoPaging>> {
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
        const result = this.api.getByUserIDWithHttpInfo(userId, name, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the brands that a specific user can access.
     * Retrieve brands by associated user
     * @param userId 
     * @param [name] 
     * @param [properties] 
     */
    public getByUserID(userId: string, name?: Array<string>, properties?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicBusinessUnitNoPaging> {
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
        const result = this.api.getByUserID(userId, name, properties, observableOptions);
        return result.toPromise();
    }


}



