import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CollectionResponseWithTotalUrlMapping } from '../models/CollectionResponseWithTotalUrlMapping';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { UrlMapping } from '../models/UrlMapping';
import { UrlMappingCreateRequestBody } from '../models/UrlMappingCreateRequestBody';

import { ObservableRedirectsApi } from "./ObservableAPI";
import { RedirectsApiRequestFactory, RedirectsApiResponseProcessor} from "../apis/RedirectsApi";

export interface RedirectsApiArchiveRequest {
    /**
     * The ID of the target redirect.
     * @type string
     * @memberof RedirectsApiarchive
     */
    urlRedirectId: string
}

export interface RedirectsApiCreateRequest {
    /**
     * 
     * @type UrlMappingCreateRequestBody
     * @memberof RedirectsApicreate
     */
    urlMappingCreateRequestBody?: UrlMappingCreateRequestBody
}

export interface RedirectsApiGetByIdRequest {
    /**
     * The ID of the target redirect.
     * @type string
     * @memberof RedirectsApigetById
     */
    urlRedirectId: string
}

export interface RedirectsApiGetPageRequest {
    /**
     * Only return redirects created on exactly this date.
     * @type Date
     * @memberof RedirectsApigetPage
     */
    createdAt?: Date
    /**
     * Only return redirects created after this date.
     * @type Date
     * @memberof RedirectsApigetPage
     */
    createdAfter?: Date
    /**
     * Only return redirects created before this date.
     * @type Date
     * @memberof RedirectsApigetPage
     */
    createdBefore?: Date
    /**
     * Only return redirects last updated on exactly this date.
     * @type Date
     * @memberof RedirectsApigetPage
     */
    updatedAt?: Date
    /**
     * Only return redirects last updated after this date.
     * @type Date
     * @memberof RedirectsApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return redirects last updated before this date.
     * @type Date
     * @memberof RedirectsApigetPage
     */
    updatedBefore?: Date
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof RedirectsApigetPage
     */
    sort?: Array<string>
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof RedirectsApigetPage
     */
    properties?: Array<string>
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof RedirectsApigetPage
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof RedirectsApigetPage
     */
    before?: string
    /**
     * Maximum number of result per page
     * @type number
     * @memberof RedirectsApigetPage
     */
    limit?: number
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof RedirectsApigetPage
     */
    archived?: boolean
}

export interface RedirectsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof RedirectsApiupdate
     */
    urlRedirectId: string
    /**
     * 
     * @type UrlMapping
     * @memberof RedirectsApiupdate
     */
    urlMapping?: UrlMapping
}

export class ObjectRedirectsApi {
    private api: ObservableRedirectsApi

    public constructor(configuration: Configuration, requestFactory?: RedirectsApiRequestFactory, responseProcessor?: RedirectsApiResponseProcessor) {
        this.api = new ObservableRedirectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete one existing redirect, so it is no longer mapped.
     * Delete a redirect
     * @param param the request object
     */
    public archive(param: RedirectsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.urlRedirectId,  options).toPromise();
    }

    /**
     * Creates and configures a new URL redirect.
     * Create a redirect
     * @param param the request object
     */
    public create(param: RedirectsApiCreateRequest = {}, options?: Configuration): Promise<UrlMapping> {
        return this.api.create(param.urlMappingCreateRequestBody,  options).toPromise();
    }

    /**
     * Returns the details for a single existing URL redirect by ID.
     * Get details for a redirect
     * @param param the request object
     */
    public getById(param: RedirectsApiGetByIdRequest, options?: Configuration): Promise<UrlMapping> {
        return this.api.getById(param.urlRedirectId,  options).toPromise();
    }

    /**
     * Returns all existing URL redirects. Results can be limited and filtered by creation or updated date.
     * Get current redirects
     * @param param the request object
     */
    public getPage(param: RedirectsApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseWithTotalUrlMapping> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.properties, param.after, param.before, param.limit, param.archived,  options).toPromise();
    }

    /**
     * Updates the settings for an existing URL redirect.
     * Update a redirect
     * @param param the request object
     */
    public update(param: RedirectsApiUpdateRequest, options?: Configuration): Promise<UrlMapping> {
        return this.api.update(param.urlRedirectId, param.urlMapping,  options).toPromise();
    }

}
