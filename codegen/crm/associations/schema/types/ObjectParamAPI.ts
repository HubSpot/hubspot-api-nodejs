import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';

import { ObservableTypesApi } from "./ObservableAPI";
import { TypesApiRequestFactory, TypesApiResponseProcessor} from "../apis/TypesApi";

export interface TypesApiGetAllRequest {
    /**
     * 
     * @type string
     * @memberof TypesApigetAll
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof TypesApigetAll
     */
    toObjectType: string
}

export class ObjectTypesApi {
    private api: ObservableTypesApi

    public constructor(configuration: Configuration, requestFactory?: TypesApiRequestFactory, responseProcessor?: TypesApiResponseProcessor) {
        this.api = new ObservableTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all the valid association types available between two object types
     * List association types
     * @param param the request object
     */
    public getAllWithHttpInfo(param: TypesApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionNoPaging>> {
        return this.api.getAllWithHttpInfo(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * List all the valid association types available between two object types
     * List association types
     * @param param the request object
     */
    public getAll(param: TypesApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePublicAssociationDefinitionNoPaging> {
        return this.api.getAll(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

}
