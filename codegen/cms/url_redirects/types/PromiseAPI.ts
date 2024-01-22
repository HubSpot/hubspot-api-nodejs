import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponseWithTotalUrlMappingForwardPaging } from '../models/CollectionResponseWithTotalUrlMappingForwardPaging';
import { UrlMapping } from '../models/UrlMapping';
import { UrlMappingCreateRequestBody } from '../models/UrlMappingCreateRequestBody';
import { ObservableRedirectsApi } from './ObservableAPI';

import { RedirectsApiRequestFactory, RedirectsApiResponseProcessor} from "../apis/RedirectsApi";
export class PromiseRedirectsApi {
    private api: ObservableRedirectsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RedirectsApiRequestFactory,
        responseProcessor?: RedirectsApiResponseProcessor
    ) {
        this.api = new ObservableRedirectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete one existing redirect, so it is no longer mapped.
     * Delete a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public archiveWithHttpInfo(urlRedirectId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(urlRedirectId, _options);
        return result.toPromise();
    }

    /**
     * Delete one existing redirect, so it is no longer mapped.
     * Delete a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public archive(urlRedirectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(urlRedirectId, _options);
        return result.toPromise();
    }

    /**
     * Creates and configures a new URL redirect.
     * Create a redirect
     * @param urlMappingCreateRequestBody 
     */
    public createWithHttpInfo(urlMappingCreateRequestBody: UrlMappingCreateRequestBody, _options?: Configuration): Promise<HttpInfo<UrlMapping>> {
        const result = this.api.createWithHttpInfo(urlMappingCreateRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Creates and configures a new URL redirect.
     * Create a redirect
     * @param urlMappingCreateRequestBody 
     */
    public create(urlMappingCreateRequestBody: UrlMappingCreateRequestBody, _options?: Configuration): Promise<UrlMapping> {
        const result = this.api.create(urlMappingCreateRequestBody, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for a single existing URL redirect by ID.
     * Get details for a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public getByIdWithHttpInfo(urlRedirectId: string, _options?: Configuration): Promise<HttpInfo<UrlMapping>> {
        const result = this.api.getByIdWithHttpInfo(urlRedirectId, _options);
        return result.toPromise();
    }

    /**
     * Returns the details for a single existing URL redirect by ID.
     * Get details for a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public getById(urlRedirectId: string, _options?: Configuration): Promise<UrlMapping> {
        const result = this.api.getById(urlRedirectId, _options);
        return result.toPromise();
    }

    /**
     * Returns all existing URL redirects. Results can be limited and filtered by creation or updated date.
     * Get current redirects
     * @param createdAt Only return redirects created on exactly this date.
     * @param createdAfter Only return redirects created after this date.
     * @param createdBefore Only return redirects created before this date.
     * @param updatedAt Only return redirects last updated on exactly this date.
     * @param updatedAfter Only return redirects last updated after this date.
     * @param updatedBefore Only return redirects last updated before this date.
     * @param sort 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit Maximum number of result per page
     * @param archived Whether to return only results that have been archived.
     */
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalUrlMappingForwardPaging>> {
        const result = this.api.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options);
        return result.toPromise();
    }

    /**
     * Returns all existing URL redirects. Results can be limited and filtered by creation or updated date.
     * Get current redirects
     * @param createdAt Only return redirects created on exactly this date.
     * @param createdAfter Only return redirects created after this date.
     * @param createdBefore Only return redirects created before this date.
     * @param updatedAt Only return redirects last updated on exactly this date.
     * @param updatedAfter Only return redirects last updated after this date.
     * @param updatedBefore Only return redirects last updated before this date.
     * @param sort 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit Maximum number of result per page
     * @param archived Whether to return only results that have been archived.
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<CollectionResponseWithTotalUrlMappingForwardPaging> {
        const result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options);
        return result.toPromise();
    }

    /**
     * Updates the settings for an existing URL redirect.
     * Update a redirect
     * @param urlRedirectId 
     * @param urlMapping 
     */
    public updateWithHttpInfo(urlRedirectId: string, urlMapping: UrlMapping, _options?: Configuration): Promise<HttpInfo<UrlMapping>> {
        const result = this.api.updateWithHttpInfo(urlRedirectId, urlMapping, _options);
        return result.toPromise();
    }

    /**
     * Updates the settings for an existing URL redirect.
     * Update a redirect
     * @param urlRedirectId 
     * @param urlMapping 
     */
    public update(urlRedirectId: string, urlMapping: UrlMapping, _options?: Configuration): Promise<UrlMapping> {
        const result = this.api.update(urlRedirectId, urlMapping, _options);
        return result.toPromise();
    }


}



