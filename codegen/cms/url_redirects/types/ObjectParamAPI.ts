import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponseWithTotalUrlMappingForwardPaging } from '../models/CollectionResponseWithTotalUrlMappingForwardPaging';
import { UrlMapping } from '../models/UrlMapping';
import { UrlMappingCreateRequestBody } from '../models/UrlMappingCreateRequestBody';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * The ID of the target redirect.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    urlRedirectId: string
}

export interface BasicApiCmsUrlRedirectsV3Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsUrlRedirectsV3
     */
    after?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApicmsUrlRedirectsV3
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsUrlRedirectsV3
     */
    createdAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsUrlRedirectsV3
     */
    createdAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsUrlRedirectsV3
     */
    createdBefore?: Date
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicmsUrlRedirectsV3
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsUrlRedirectsV3
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsUrlRedirectsV3
     */
    updatedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsUrlRedirectsV3
     */
    updatedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsUrlRedirectsV3
     */
    updatedBefore?: Date
}

export interface BasicApiCmsUrlRedirectsV30Request {
    /**
     * 
     * @type UrlMappingCreateRequestBody
     * @memberof BasicApicmsUrlRedirectsV3_1
     */
    urlMappingCreateRequestBody: UrlMappingCreateRequestBody
}

export interface BasicApiGetByIdRequest {
    /**
     * The ID of the target redirect.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    urlRedirectId: string
}

export interface BasicApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    urlRedirectId: string
    /**
     * 
     * @type UrlMapping
     * @memberof BasicApiupdate
     */
    urlMapping: UrlMapping
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete one existing redirect, so it is no longer mapped.
     * Delete a redirect
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.urlRedirectId,  options).toPromise();
    }

    /**
     * Delete one existing redirect, so it is no longer mapped.
     * Delete a redirect
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.urlRedirectId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsUrlRedirectsV3WithHttpInfo(param: BasicApiCmsUrlRedirectsV3Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalUrlMappingForwardPaging>> {
        return this.api.cmsUrlRedirectsV3WithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsUrlRedirectsV3(param: BasicApiCmsUrlRedirectsV3Request = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalUrlMappingForwardPaging> {
        return this.api.cmsUrlRedirectsV3(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsUrlRedirectsV3_1WithHttpInfo(param: BasicApiCmsUrlRedirectsV30Request, options?: ConfigurationOptions): Promise<HttpInfo<UrlMapping>> {
        return this.api.cmsUrlRedirectsV3_1WithHttpInfo(param.urlMappingCreateRequestBody,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsUrlRedirectsV3_1(param: BasicApiCmsUrlRedirectsV30Request, options?: ConfigurationOptions): Promise<UrlMapping> {
        return this.api.cmsUrlRedirectsV3_1(param.urlMappingCreateRequestBody,  options).toPromise();
    }

    /**
     * Returns the details for a single existing URL redirect by ID.
     * Get details for a redirect
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<UrlMapping>> {
        return this.api.getByIdWithHttpInfo(param.urlRedirectId,  options).toPromise();
    }

    /**
     * Returns the details for a single existing URL redirect by ID.
     * Get details for a redirect
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<UrlMapping> {
        return this.api.getById(param.urlRedirectId,  options).toPromise();
    }

    /**
     * Updates the settings for an existing URL redirect.
     * Update a redirect
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<UrlMapping>> {
        return this.api.updateWithHttpInfo(param.urlRedirectId, param.urlMapping,  options).toPromise();
    }

    /**
     * Updates the settings for an existing URL redirect.
     * Update a redirect
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<UrlMapping> {
        return this.api.update(param.urlRedirectId, param.urlMapping,  options).toPromise();
    }

}
