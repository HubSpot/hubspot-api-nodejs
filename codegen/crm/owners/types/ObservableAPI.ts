import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponsePublicOwnerForwardPaging } from '../models/CollectionResponsePublicOwnerForwardPaging';
import { PublicOwner } from '../models/PublicOwner';

import { OwnersApiRequestFactory, OwnersApiResponseProcessor} from "../apis/OwnersApi";
export class ObservableOwnersApi {
    private requestFactory: OwnersApiRequestFactory;
    private responseProcessor: OwnersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OwnersApiRequestFactory,
        responseProcessor?: OwnersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OwnersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OwnersApiResponseProcessor();
    }

    /**
     * Read an owner by given `id` or `userId`
     * @param ownerId 
     * @param idProperty 
     * @param archived Whether to return only results that have been archived.
     */
    public getByIdWithHttpInfo(ownerId: number, idProperty?: 'id' | 'userId', archived?: boolean, _options?: Configuration): Observable<HttpInfo<PublicOwner>> {
        const requestContextPromise = this.requestFactory.getById(ownerId, idProperty, archived, _options);

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
     * Read an owner by given `id` or `userId`
     * @param ownerId 
     * @param idProperty 
     * @param archived Whether to return only results that have been archived.
     */
    public getById(ownerId: number, idProperty?: 'id' | 'userId', archived?: boolean, _options?: Configuration): Observable<PublicOwner> {
        return this.getByIdWithHttpInfo(ownerId, idProperty, archived, _options).pipe(map((apiResponse: HttpInfo<PublicOwner>) => apiResponse.data));
    }

    /**
     * Get a page of owners
     * @param email Filter by email address (optional)
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     * @param archived Whether to return only results that have been archived.
     */
    public getPageWithHttpInfo(email?: string, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicOwnerForwardPaging>> {
        const requestContextPromise = this.requestFactory.getPage(email, after, limit, archived, _options);

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
     * Get a page of owners
     * @param email Filter by email address (optional)
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     * @param archived Whether to return only results that have been archived.
     */
    public getPage(email?: string, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Observable<CollectionResponsePublicOwnerForwardPaging> {
        return this.getPageWithHttpInfo(email, after, limit, archived, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicOwnerForwardPaging>) => apiResponse.data));
    }

}
