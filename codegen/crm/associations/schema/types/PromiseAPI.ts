import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';
import { ObservableTypesApi } from './ObservableAPI';

import { TypesApiRequestFactory, TypesApiResponseProcessor} from "../apis/TypesApi";
export class PromiseTypesApi {
    private api: ObservableTypesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TypesApiRequestFactory,
        responseProcessor?: TypesApiResponseProcessor
    ) {
        this.api = new ObservableTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all the valid association types available between two object types
     * List association types
     * @param fromObjectType
     * @param toObjectType
     */
    public getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionNoPaging>> {
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
        const result = this.api.getAllWithHttpInfo(fromObjectType, toObjectType, observableOptions);
        return result.toPromise();
    }

    /**
     * List all the valid association types available between two object types
     * List association types
     * @param fromObjectType
     * @param toObjectType
     */
    public getAll(fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicAssociationDefinitionNoPaging> {
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
        const result = this.api.getAll(fromObjectType, toObjectType, observableOptions);
        return result.toPromise();
    }


}



