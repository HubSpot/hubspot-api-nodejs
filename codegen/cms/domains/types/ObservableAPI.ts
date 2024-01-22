import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponseWithTotalDomainForwardPaging } from '../models/CollectionResponseWithTotalDomainForwardPaging';
import { Domain } from '../models/Domain';

import { DomainsApiRequestFactory, DomainsApiResponseProcessor} from "../apis/DomainsApi";
export class ObservableDomainsApi {
    private requestFactory: DomainsApiRequestFactory;
    private responseProcessor: DomainsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainsApiRequestFactory,
        responseProcessor?: DomainsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DomainsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DomainsApiResponseProcessor();
    }

    /**
     * Returns a single domains with the id specified.
     * Get a single domain
     * @param domainId The unique ID of the domain.
     */
    public getByIdWithHttpInfo(domainId: string, _options?: Configuration): Observable<HttpInfo<Domain>> {
        const requestContextPromise = this.requestFactory.getById(domainId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a single domains with the id specified.
     * Get a single domain
     * @param domainId The unique ID of the domain.
     */
    public getById(domainId: string, _options?: Configuration): Observable<Domain> {
        return this.getByIdWithHttpInfo(domainId, _options).pipe(map((apiResponse: HttpInfo<Domain>) => apiResponse.data));
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
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalDomainForwardPaging>> {
        const requestContextPromise = this.requestFactory.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
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
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Observable<CollectionResponseWithTotalDomainForwardPaging> {
        return this.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalDomainForwardPaging>) => apiResponse.data));
    }

}
