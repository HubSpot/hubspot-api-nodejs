import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponseWithTotalDomain } from '../models/CollectionResponseWithTotalDomain';
import { Domain } from '../models/Domain';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiCmsV3DomainsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsV3Domains
     */
    after?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApicmsV3Domains
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsV3Domains
     */
    createdAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsV3Domains
     */
    createdAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsV3Domains
     */
    createdBefore?: Date
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicmsV3Domains
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsV3Domains
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsV3Domains
     */
    updatedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsV3Domains
     */
    updatedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsV3Domains
     */
    updatedBefore?: Date
}

export interface BasicApiGetByIdRequest {
    /**
     * The unique ID of the domain.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    domainId: string
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public cmsV3DomainsWithHttpInfo(param: BasicApiCmsV3DomainsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalDomain>> {
        return this.api.cmsV3DomainsWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsV3Domains(param: BasicApiCmsV3DomainsRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalDomain> {
        return this.api.cmsV3Domains(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Returns a single domains with the id specified.
     * Get a single domain
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Domain>> {
        return this.api.getByIdWithHttpInfo(param.domainId,  options).toPromise();
    }

    /**
     * Returns a single domains with the id specified.
     * Get a single domain
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<Domain> {
        return this.api.getById(param.domainId,  options).toPromise();
    }

}
