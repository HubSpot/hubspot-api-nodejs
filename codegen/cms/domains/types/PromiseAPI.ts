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
     * @param archived Whether to return only results that have been archived.
     */
    public getById(domainId: string, archived?: boolean, _options?: Configuration): Promise<Domain> {
        const result = this.api.getById(domainId, archived, _options);
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
     * @param properties 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit Maximum number of results per page.
     * @param archived Whether to return only results that have been archived.
     */
    public getPage(createdAt?: number, createdAfter?: number, createdBefore?: number, updatedAt?: number, updatedAfter?: number, updatedBefore?: number, sort?: Array<string>, properties?: Array<string>, after?: string, before?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<CollectionResponseWithTotalDomain> {
        const result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, properties, after, before, limit, archived, _options);
        return result.toPromise();
    }


}



