import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponseWithTotalDomainForwardPaging } from '../models/CollectionResponseWithTotalDomainForwardPaging';
import { Domain } from '../models/Domain';
import { ObservableDomainsApi } from './ObservableAPI';

import { DomainsApiRequestFactory, DomainsApiResponseProcessor} from "../apis/DomainsApi";
export class PromiseDomainsApi {
    private api: ObservableDomainsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainsApiRequestFactory,
        responseProcessor?: DomainsApiResponseProcessor
    ) {
        this.api = new ObservableDomainsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a single domains with the id specified.
     * Get a single domain
     * @param domainId The unique ID of the domain.
     */
    public getByIdWithHttpInfo(domainId: string, _options?: Configuration): Promise<HttpInfo<Domain>> {
        const result = this.api.getByIdWithHttpInfo(domainId, _options);
        return result.toPromise();
    }

    /**
     * Returns a single domains with the id specified.
     * Get a single domain
     * @param domainId The unique ID of the domain.
     */
    public getById(domainId: string, _options?: Configuration): Promise<Domain> {
        const result = this.api.getById(domainId, _options);
        return result.toPromise();
    }

    /**
     * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
     * Get current domains
     * @param createdAt Only return domains created at this date.
     * @param createdAfter Only return domains created after this date.
     * @param createdBefore Only return domains created before this date.
     * @param updatedAt Only return domains updated at this date.
     * @param updatedAfter Only return domains updated after this date.
     * @param updatedBefore Only return domains updated before this date.
     * @param sort 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit Maximum number of results per page.
     * @param archived Whether to return only results that have been archived.
     */
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalDomainForwardPaging>> {
        const result = this.api.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options);
        return result.toPromise();
    }

    /**
     * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
     * Get current domains
     * @param createdAt Only return domains created at this date.
     * @param createdAfter Only return domains created after this date.
     * @param createdBefore Only return domains created before this date.
     * @param updatedAt Only return domains updated at this date.
     * @param updatedAfter Only return domains updated after this date.
     * @param updatedBefore Only return domains updated before this date.
     * @param sort 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit Maximum number of results per page.
     * @param archived Whether to return only results that have been archived.
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<CollectionResponseWithTotalDomainForwardPaging> {
        const result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options);
        return result.toPromise();
    }


}



