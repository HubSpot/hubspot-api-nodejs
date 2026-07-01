import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiCmsAuditLogsV3Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsAuditLogsV3
     */
    after?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsAuditLogsV3
     */
    before?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsAuditLogsV3
     */
    eventType?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicmsAuditLogsV3
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsAuditLogsV3
     */
    objectId?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsAuditLogsV3
     */
    objectType?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsAuditLogsV3
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsAuditLogsV3
     */
    userId?: Array<string>
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public cmsAuditLogsV3WithHttpInfo(param: BasicApiCmsAuditLogsV3Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAuditLog>> {
        return this.api.cmsAuditLogsV3WithHttpInfo(param.after, param.before, param.eventType, param.limit, param.objectId, param.objectType, param.sort, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsAuditLogsV3(param: BasicApiCmsAuditLogsV3Request = {}, options?: ConfigurationOptions): Promise<CollectionResponsePublicAuditLog> {
        return this.api.cmsAuditLogsV3(param.after, param.before, param.eventType, param.limit, param.objectId, param.objectType, param.sort, param.userId,  options).toPromise();
    }

}
