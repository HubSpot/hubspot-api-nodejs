import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponsePublicBusinessUnitNoPaging } from '../models/CollectionResponsePublicBusinessUnitNoPaging';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiGetByUserIDRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetByUserID
     */
    userId: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApigetByUserID
     */
    name?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApigetByUserID
     */
    properties?: Array<string>
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the brands that a specific user can access.
     * Retrieve brands by associated user
     * @param param the request object
     */
    public getByUserIDWithHttpInfo(param: BasicApiGetByUserIDRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicBusinessUnitNoPaging>> {
        return this.api.getByUserIDWithHttpInfo(param.userId, param.name, param.properties,  options).toPromise();
    }

    /**
     * Retrieve the brands that a specific user can access.
     * Retrieve brands by associated user
     * @param param the request object
     */
    public getByUserID(param: BasicApiGetByUserIDRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicBusinessUnitNoPaging> {
        return this.api.getByUserID(param.userId, param.name, param.properties,  options).toPromise();
    }

}
