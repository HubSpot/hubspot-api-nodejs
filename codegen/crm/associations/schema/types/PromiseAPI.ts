import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
    public getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionNoPaging>> {
        const result = this.api.getAllWithHttpInfo(fromObjectType, toObjectType, _options);
        return result.toPromise();
    }

    /**
     * List all the valid association types available between two object types
     * List association types
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<CollectionResponsePublicAssociationDefinitionNoPaging> {
        const result = this.api.getAll(fromObjectType, toObjectType, _options);
        return result.toPromise();
    }


}



