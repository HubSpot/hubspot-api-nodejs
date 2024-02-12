import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AssociationSpec } from '../models/AssociationSpec';
import { BatchInputPublicAssociationMultiArchive } from '../models/BatchInputPublicAssociationMultiArchive';
import { BatchInputPublicAssociationMultiPost } from '../models/BatchInputPublicAssociationMultiPost';
import { BatchInputPublicDefaultAssociationMultiPost } from '../models/BatchInputPublicDefaultAssociationMultiPost';
import { BatchInputPublicFetchAssociationsBatchRequest } from '../models/BatchInputPublicFetchAssociationsBatchRequest';
import { BatchResponseLabelsBetweenObjectPair } from '../models/BatchResponseLabelsBetweenObjectPair';
import { BatchResponseLabelsBetweenObjectPairWithErrors } from '../models/BatchResponseLabelsBetweenObjectPairWithErrors';
import { BatchResponsePublicAssociationMultiWithLabel } from '../models/BatchResponsePublicAssociationMultiWithLabel';
import { BatchResponsePublicAssociationMultiWithLabelWithErrors } from '../models/BatchResponsePublicAssociationMultiWithLabelWithErrors';
import { BatchResponsePublicDefaultAssociation } from '../models/BatchResponsePublicDefaultAssociation';
import { CollectionResponseMultiAssociatedObjectWithLabelForwardPaging } from '../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging';
import { LabelsBetweenObjectPair } from '../models/LabelsBetweenObjectPair';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class ObservableBasicApi {
    private requestFactory: BasicApiRequestFactory;
    private responseProcessor: BasicApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicApiResponseProcessor();
    }

    /**
     * deletes all associations between two records.
     * Delete
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param toObjectId 
     */
    public archiveWithHttpInfo(objectType: string, objectId: string, toObjectType: string, toObjectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(objectType, objectId, toObjectType, toObjectId, _options);

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
     * deletes all associations between two records.
     * Delete
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param toObjectId 
     */
    public archive(objectType: string, objectId: string, toObjectType: string, toObjectId: string, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(objectType, objectId, toObjectType, toObjectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set association labels between two records.
     * Create
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param toObjectId 
     * @param associationSpec 
     */
    public createWithHttpInfo(objectType: string, objectId: string, toObjectType: string, toObjectId: string, associationSpec: Array<AssociationSpec>, _options?: Configuration): Observable<HttpInfo<LabelsBetweenObjectPair>> {
        const requestContextPromise = this.requestFactory.create(objectType, objectId, toObjectType, toObjectId, associationSpec, _options);

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
     * Set association labels between two records.
     * Create
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param toObjectId 
     * @param associationSpec 
     */
    public create(objectType: string, objectId: string, toObjectType: string, toObjectId: string, associationSpec: Array<AssociationSpec>, _options?: Configuration): Observable<LabelsBetweenObjectPair> {
        return this.createWithHttpInfo(objectType, objectId, toObjectType, toObjectId, associationSpec, _options).pipe(map((apiResponse: HttpInfo<LabelsBetweenObjectPair>) => apiResponse.data));
    }

    /**
     * Create the default (most generic) association type between two object types
     * Create Default
     * @param fromObjectType 
     * @param fromObjectId 
     * @param toObjectType 
     * @param toObjectId 
     */
    public createDefaultWithHttpInfo(fromObjectType: string, fromObjectId: string, toObjectType: string, toObjectId: string, _options?: Configuration): Observable<HttpInfo<BatchResponsePublicDefaultAssociation>> {
        const requestContextPromise = this.requestFactory.createDefault(fromObjectType, fromObjectId, toObjectType, toObjectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDefaultWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create the default (most generic) association type between two object types
     * Create Default
     * @param fromObjectType 
     * @param fromObjectId 
     * @param toObjectType 
     * @param toObjectId 
     */
    public createDefault(fromObjectType: string, fromObjectId: string, toObjectType: string, toObjectId: string, _options?: Configuration): Observable<BatchResponsePublicDefaultAssociation> {
        return this.createDefaultWithHttpInfo(fromObjectType, fromObjectId, toObjectType, toObjectId, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePublicDefaultAssociation>) => apiResponse.data));
    }

    /**
     * List all associations of an object by object type. Limit 500 per call.
     * List
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public getPageWithHttpInfo(objectType: string, objectId: string, toObjectType: string, after?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging>> {
        const requestContextPromise = this.requestFactory.getPage(objectType, objectId, toObjectType, after, limit, _options);

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
     * List all associations of an object by object type. Limit 500 per call.
     * List
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public getPage(objectType: string, objectId: string, toObjectType: string, after?: string, limit?: number, _options?: Configuration): Observable<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging> {
        return this.getPageWithHttpInfo(objectType, objectId, toObjectType, after, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging>) => apiResponse.data));
    }

}

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class ObservableBatchApi {
    private requestFactory: BatchApiRequestFactory;
    private responseProcessor: BatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApiResponseProcessor();
    }

    /**
     * Batch delete associations for objects
     * Delete
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationMultiArchive 
     */
    public archiveWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiArchive: BatchInputPublicAssociationMultiArchive, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(fromObjectType, toObjectType, batchInputPublicAssociationMultiArchive, _options);

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
     * Batch delete associations for objects
     * Delete
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationMultiArchive 
     */
    public archive(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiArchive: BatchInputPublicAssociationMultiArchive, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationMultiArchive, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Batch delete specific association labels for objects. Deleting an unlabeled association will also delete all labeled associations between those two objects
     * Delete Specific Labels
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationMultiPost 
     */
    public archiveLabelsWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveLabels(fromObjectType, toObjectType, batchInputPublicAssociationMultiPost, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveLabelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch delete specific association labels for objects. Deleting an unlabeled association will also delete all labeled associations between those two objects
     * Delete Specific Labels
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationMultiPost 
     */
    public archiveLabels(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Observable<void> {
        return this.archiveLabelsWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationMultiPost, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Batch create associations for objects
     * Create
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationMultiPost 
     */
    public createWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Observable<HttpInfo<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair>> {
        const requestContextPromise = this.requestFactory.create(fromObjectType, toObjectType, batchInputPublicAssociationMultiPost, _options);

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
     * Batch create associations for objects
     * Create
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationMultiPost 
     */
    public create(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Observable<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair> {
        return this.createWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationMultiPost, _options).pipe(map((apiResponse: HttpInfo<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair>) => apiResponse.data));
    }

    /**
     * Create the default (most generic) association type between two object types
     *  Create Default Associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicDefaultAssociationMultiPost 
     */
    public createDefaultWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicDefaultAssociationMultiPost: BatchInputPublicDefaultAssociationMultiPost, _options?: Configuration): Observable<HttpInfo<BatchResponsePublicDefaultAssociation>> {
        const requestContextPromise = this.requestFactory.createDefault(fromObjectType, toObjectType, batchInputPublicDefaultAssociationMultiPost, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDefaultWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create the default (most generic) association type between two object types
     *  Create Default Associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicDefaultAssociationMultiPost 
     */
    public createDefault(fromObjectType: string, toObjectType: string, batchInputPublicDefaultAssociationMultiPost: BatchInputPublicDefaultAssociationMultiPost, _options?: Configuration): Observable<BatchResponsePublicDefaultAssociation> {
        return this.createDefaultWithHttpInfo(fromObjectType, toObjectType, batchInputPublicDefaultAssociationMultiPost, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePublicDefaultAssociation>) => apiResponse.data));
    }

    /**
     * Batch read associations for objects to specific object type. The \'after\' field in a returned paging object  can be added alongside the \'id\' to retrieve the next page of associations from that objectId. The \'link\' field is deprecated and should be ignored. 
     * Read
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicFetchAssociationsBatchRequest 
     */
    public getPageWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicFetchAssociationsBatchRequest: BatchInputPublicFetchAssociationsBatchRequest, _options?: Configuration): Observable<HttpInfo<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors>> {
        const requestContextPromise = this.requestFactory.getPage(fromObjectType, toObjectType, batchInputPublicFetchAssociationsBatchRequest, _options);

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
     * Batch read associations for objects to specific object type. The \'after\' field in a returned paging object  can be added alongside the \'id\' to retrieve the next page of associations from that objectId. The \'link\' field is deprecated and should be ignored. 
     * Read
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicFetchAssociationsBatchRequest 
     */
    public getPage(fromObjectType: string, toObjectType: string, batchInputPublicFetchAssociationsBatchRequest: BatchInputPublicFetchAssociationsBatchRequest, _options?: Configuration): Observable<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors> {
        return this.getPageWithHttpInfo(fromObjectType, toObjectType, batchInputPublicFetchAssociationsBatchRequest, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors>) => apiResponse.data));
    }

}
