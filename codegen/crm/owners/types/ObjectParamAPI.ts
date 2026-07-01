import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponsePublicOwnerForwardPaging } from '../models/CollectionResponsePublicOwnerForwardPaging';
import { PublicOwner } from '../models/PublicOwner';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiCrmV3OwnersRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3Owners
     */
    after?: string
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof BasicApicrmV3Owners
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3Owners
     */
    email?: string
    /**
     * 
     * Defaults to: 100
     * @type number
     * @memberof BasicApicrmV3Owners
     */
    limit?: number
}

export interface BasicApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetById
     */
    ownerId: number
    /**
     * Whether to return only results that have been archived.
     * Defaults to: false
     * @type boolean
     * @memberof BasicApigetById
     */
    archived?: boolean
    /**
     * 
     * Defaults to: &#39;id&#39;
     * @type &#39;id&#39; | &#39;userId&#39;
     * @memberof BasicApigetById
     */
    idProperty?: 'id' | 'userId'
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public crmV3OwnersWithHttpInfo(param: BasicApiCrmV3OwnersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicOwnerForwardPaging>> {
        return this.api.crmV3OwnersWithHttpInfo(param.after, param.archived, param.email, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public crmV3Owners(param: BasicApiCrmV3OwnersRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponsePublicOwnerForwardPaging> {
        return this.api.crmV3Owners(param.after, param.archived, param.email, param.limit,  options).toPromise();
    }

    /**
     * Retrieve details of a specific owner using either their \'id\' or \'userId\'.
     * Retrieve a specific owner by ID
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicOwner>> {
        return this.api.getByIdWithHttpInfo(param.ownerId, param.archived, param.idProperty,  options).toPromise();
    }

    /**
     * Retrieve details of a specific owner using either their \'id\' or \'userId\'.
     * Retrieve a specific owner by ID
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicOwner> {
        return this.api.getById(param.ownerId, param.archived, param.idProperty,  options).toPromise();
    }

}
