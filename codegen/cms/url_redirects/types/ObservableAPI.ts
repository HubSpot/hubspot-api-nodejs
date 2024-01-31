import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponseWithTotalUrlMappingForwardPaging } from '../models/CollectionResponseWithTotalUrlMappingForwardPaging';
import { UrlMapping } from '../models/UrlMapping';
import { UrlMappingCreateRequestBody } from '../models/UrlMappingCreateRequestBody';

import { RedirectsApiRequestFactory, RedirectsApiResponseProcessor} from "../apis/RedirectsApi";
export class ObservableRedirectsApi {
    private requestFactory: RedirectsApiRequestFactory;
    private responseProcessor: RedirectsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RedirectsApiRequestFactory,
        responseProcessor?: RedirectsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RedirectsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RedirectsApiResponseProcessor();
    }

    /**
     * Delete one existing redirect, so it is no longer mapped.
     * Delete a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public archiveWithHttpInfo(urlRedirectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(urlRedirectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete one existing redirect, so it is no longer mapped.
     * Delete a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public archive(urlRedirectId: string, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(urlRedirectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates and configures a new URL redirect.
     * Create a redirect
     * @param urlMappingCreateRequestBody 
     */
    public createWithHttpInfo(urlMappingCreateRequestBody: UrlMappingCreateRequestBody, _options?: Configuration): Observable<HttpInfo<UrlMapping>> {
        const requestContextPromise = this.requestFactory.create(urlMappingCreateRequestBody, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates and configures a new URL redirect.
     * Create a redirect
     * @param urlMappingCreateRequestBody 
     */
    public create(urlMappingCreateRequestBody: UrlMappingCreateRequestBody, _options?: Configuration): Observable<UrlMapping> {
        return this.createWithHttpInfo(urlMappingCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<UrlMapping>) => apiResponse.data));
    }

    /**
     * Returns the details for a single existing URL redirect by ID.
     * Get details for a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public getByIdWithHttpInfo(urlRedirectId: string, _options?: Configuration): Observable<HttpInfo<UrlMapping>> {
        const requestContextPromise = this.requestFactory.getById(urlRedirectId, _options);

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
     * Returns the details for a single existing URL redirect by ID.
     * Get details for a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    public getById(urlRedirectId: string, _options?: Configuration): Observable<UrlMapping> {
        return this.getByIdWithHttpInfo(urlRedirectId, _options).pipe(map((apiResponse: HttpInfo<UrlMapping>) => apiResponse.data));
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
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalUrlMappingForwardPaging>> {
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
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Observable<CollectionResponseWithTotalUrlMappingForwardPaging> {
        return this.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalUrlMappingForwardPaging>) => apiResponse.data));
    }

    /**
     * Updates the settings for an existing URL redirect.
     * Update a redirect
     * @param urlRedirectId 
     * @param urlMapping 
     */
    public updateWithHttpInfo(urlRedirectId: string, urlMapping: UrlMapping, _options?: Configuration): Observable<HttpInfo<UrlMapping>> {
        const requestContextPromise = this.requestFactory.update(urlRedirectId, urlMapping, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the settings for an existing URL redirect.
     * Update a redirect
     * @param urlRedirectId 
     * @param urlMapping 
     */
    public update(urlRedirectId: string, urlMapping: UrlMapping, _options?: Configuration): Observable<UrlMapping> {
        return this.updateWithHttpInfo(urlRedirectId, urlMapping, _options).pipe(map((apiResponse: HttpInfo<UrlMapping>) => apiResponse.data));
    }

}
