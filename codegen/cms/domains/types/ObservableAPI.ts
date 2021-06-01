import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponseWithTotalDomain } from '../models/CollectionResponseWithTotalDomain';
import { Domain } from '../models/Domain';
import { DomainCdnConfig } from '../models/DomainCdnConfig';
import { DomainSetupInfo } from '../models/DomainSetupInfo';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';

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
     * @param archived Whether to return only results that have been archived.
     */
    public getById(domainId: string, archived?: boolean, _options?: Configuration): Observable<Domain> {
        const requestContextPromise = this.requestFactory.getById(domainId, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getById(rsp)));
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
     * @param properties 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit Maximum number of results per page.
     * @param archived Whether to return only results that have been archived.
     */
    public getPage(createdAt?: number, createdAfter?: number, createdBefore?: number, updatedAt?: number, updatedAfter?: number, updatedBefore?: number, sort?: Array<string>, properties?: Array<string>, after?: string, before?: string, limit?: number, archived?: boolean, _options?: Configuration): Observable<CollectionResponseWithTotalDomain> {
        const requestContextPromise = this.requestFactory.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, properties, after, before, limit, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPage(rsp)));
            }));
    }
 
}
