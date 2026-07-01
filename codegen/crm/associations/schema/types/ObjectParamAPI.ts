import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetAll
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetAll
     */
    toObjectType: string
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getAllWithHttpInfo(param: BasicApiGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionNoPaging>> {
        return this.api.getAllWithHttpInfo(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAll(param: BasicApiGetAllRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicAssociationDefinitionNoPaging> {
        return this.api.getAll(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

}
