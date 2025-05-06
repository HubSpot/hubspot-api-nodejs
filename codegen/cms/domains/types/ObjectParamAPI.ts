import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponseWithTotalDomainForwardPaging } from '../models/CollectionResponseWithTotalDomainForwardPaging';
import { Domain } from '../models/Domain';

import { ObservableDomainsApi } from "./ObservableAPI";
import { DomainsApiRequestFactory, DomainsApiResponseProcessor} from "../apis/DomainsApi";

export interface DomainsApiGetByIdRequest {
    /**
     * The unique ID of the domain.
     * Defaults to: undefined
     * @type string
     * @memberof DomainsApigetById
     */
    domainId: string
}

export interface DomainsApiGetPageRequest {
    /**
     * Only return domains created at this date.
     * Defaults to: undefined
     * @type Date
     * @memberof DomainsApigetPage
     */
    createdAt?: Date
    /**
     * Only return domains created after this date.
     * Defaults to: undefined
     * @type Date
     * @memberof DomainsApigetPage
     */
    createdAfter?: Date
    /**
     * Only return domains created before this date.
     * Defaults to: undefined
     * @type Date
     * @memberof DomainsApigetPage
     */
    createdBefore?: Date
    /**
     * Only return domains updated at this date.
     * Defaults to: undefined
     * @type Date
     * @memberof DomainsApigetPage
     */
    updatedAt?: Date
    /**
     * Only return domains updated after this date.
     * Defaults to: undefined
     * @type Date
     * @memberof DomainsApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return domains updated before this date.
     * Defaults to: undefined
     * @type Date
     * @memberof DomainsApigetPage
     */
    updatedBefore?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof DomainsApigetPage
     */
    sort?: Array<string>
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof DomainsApigetPage
     */
    after?: string
    /**
     * Maximum number of results per page.
     * Defaults to: undefined
     * @type number
     * @memberof DomainsApigetPage
     */
    limit?: number
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof DomainsApigetPage
     */
    archived?: boolean
}

export class ObjectDomainsApi {
    private api: ObservableDomainsApi

    public constructor(configuration: Configuration, requestFactory?: DomainsApiRequestFactory, responseProcessor?: DomainsApiResponseProcessor) {
        this.api = new ObservableDomainsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a single domains with the id specified.
     * Get a single domain
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: DomainsApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Domain>> {
        return this.api.getByIdWithHttpInfo(param.domainId,  options).toPromise();
    }

    /**
     * Returns a single domains with the id specified.
     * Get a single domain
     * @param param the request object
     */
    public getById(param: DomainsApiGetByIdRequest, options?: ConfigurationOptions): Promise<Domain> {
        return this.api.getById(param.domainId,  options).toPromise();
    }

    /**
     * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
     * Get current domains
     * @param param the request object
     */
    public getPageWithHttpInfo(param: DomainsApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalDomainForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived,  options).toPromise();
    }

    /**
     * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
     * Get current domains
     * @param param the request object
     */
    public getPage(param: DomainsApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalDomainForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived,  options).toPromise();
    }

}
