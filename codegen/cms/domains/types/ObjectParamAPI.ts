import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CollectionResponseWithTotalDomain } from '../models/CollectionResponseWithTotalDomain';
import { Domain } from '../models/Domain';
import { DomainCdnConfig } from '../models/DomainCdnConfig';
import { DomainSetupInfo } from '../models/DomainSetupInfo';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';

import { ObservableDomainsApi } from "./ObservableAPI";
import { DomainsApiRequestFactory, DomainsApiResponseProcessor} from "../apis/DomainsApi";

export interface DomainsApiGetByIdRequest {
    /**
     * The unique ID of the domain.
     * @type string
     * @memberof DomainsApigetById
     */
    domainId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof DomainsApigetById
     */
    archived?: boolean
}

export interface DomainsApiGetPageRequest {
    /**
     * Only return domains created at this date.
     * @type number
     * @memberof DomainsApigetPage
     */
    createdAt?: number
    /**
     * Only return domains created after this date.
     * @type number
     * @memberof DomainsApigetPage
     */
    createdAfter?: number
    /**
     * Only return domains created before this date.
     * @type number
     * @memberof DomainsApigetPage
     */
    createdBefore?: number
    /**
     * Only return domains updated at this date.
     * @type number
     * @memberof DomainsApigetPage
     */
    updatedAt?: number
    /**
     * Only return domains updated after this date.
     * @type number
     * @memberof DomainsApigetPage
     */
    updatedAfter?: number
    /**
     * Only return domains updated before this date.
     * @type number
     * @memberof DomainsApigetPage
     */
    updatedBefore?: number
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof DomainsApigetPage
     */
    sort?: Array<string>
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof DomainsApigetPage
     */
    properties?: Array<string>
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof DomainsApigetPage
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof DomainsApigetPage
     */
    before?: string
    /**
     * Maximum number of results per page.
     * @type number
     * @memberof DomainsApigetPage
     */
    limit?: number
    /**
     * Whether to return only results that have been archived.
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
    public getById(param: DomainsApiGetByIdRequest, options?: Configuration): Promise<Domain> {
        return this.api.getById(param.domainId, param.archived,  options).toPromise();
    }

    /**
     * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
     * Get current domains
     * @param param the request object
     */
    public getPage(param: DomainsApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseWithTotalDomain> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.properties, param.after, param.before, param.limit, param.archived,  options).toPromise();
    }

}
