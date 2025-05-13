import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponsePublicBusinessUnitNoPaging } from '../models/CollectionResponsePublicBusinessUnitNoPaging';

import { ObservableBusinessUnitApi } from "./ObservableAPI";
import { BusinessUnitApiRequestFactory, BusinessUnitApiResponseProcessor} from "../apis/BusinessUnitApi";

export interface BusinessUnitApiGetByUserIDRequest {
    /**
     * Identifier of user to retrieve.
     * Defaults to: undefined
     * @type string
     * @memberof BusinessUnitApigetByUserID
     */
    userId: string
    /**
     * The names of properties to optionally include in the response body. The only valid value is &#x60;logoMetadata&#x60;.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BusinessUnitApigetByUserID
     */
    properties?: Array<string>
    /**
     * The names of Business Units to retrieve. If empty or not provided, then all associated Business Units will be returned.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BusinessUnitApigetByUserID
     */
    name?: Array<string>
}

export class ObjectBusinessUnitApi {
    private api: ObservableBusinessUnitApi

    public constructor(configuration: Configuration, requestFactory?: BusinessUnitApiRequestFactory, responseProcessor?: BusinessUnitApiResponseProcessor) {
        this.api = new ObservableBusinessUnitApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
     * Get Business Units for a user
     * @param param the request object
     */
    public getByUserIDWithHttpInfo(param: BusinessUnitApiGetByUserIDRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicBusinessUnitNoPaging>> {
        return this.api.getByUserIDWithHttpInfo(param.userId, param.properties, param.name,  options).toPromise();
    }

    /**
     * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
     * Get Business Units for a user
     * @param param the request object
     */
    public getByUserID(param: BusinessUnitApiGetByUserIDRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicBusinessUnitNoPaging> {
        return this.api.getByUserID(param.userId, param.properties, param.name,  options).toPromise();
    }

}
