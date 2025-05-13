import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponsePublicBusinessUnitNoPaging } from '../models/CollectionResponsePublicBusinessUnitNoPaging';
import { ObservableBusinessUnitApi } from './ObservableAPI';

import { BusinessUnitApiRequestFactory, BusinessUnitApiResponseProcessor} from "../apis/BusinessUnitApi";
export class PromiseBusinessUnitApi {
    private api: ObservableBusinessUnitApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessUnitApiRequestFactory,
        responseProcessor?: BusinessUnitApiResponseProcessor
    ) {
        this.api = new ObservableBusinessUnitApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
     * Get Business Units for a user
     * @param userId Identifier of user to retrieve.
     * @param [properties] The names of properties to optionally include in the response body. The only valid value is &#x60;logoMetadata&#x60;.
     * @param [name] The names of Business Units to retrieve. If empty or not provided, then all associated Business Units will be returned.
     */
    public getByUserIDWithHttpInfo(userId: string, properties?: Array<string>, name?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicBusinessUnitNoPaging>> {
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
        const result = this.api.getByUserIDWithHttpInfo(userId, properties, name, observableOptions);
        return result.toPromise();
    }

    /**
     * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
     * Get Business Units for a user
     * @param userId Identifier of user to retrieve.
     * @param [properties] The names of properties to optionally include in the response body. The only valid value is &#x60;logoMetadata&#x60;.
     * @param [name] The names of Business Units to retrieve. If empty or not provided, then all associated Business Units will be returned.
     */
    public getByUserID(userId: string, properties?: Array<string>, name?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicBusinessUnitNoPaging> {
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
        const result = this.api.getByUserID(userId, properties, name, observableOptions);
        return result.toPromise();
    }


}



