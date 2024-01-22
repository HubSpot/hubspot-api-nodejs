import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputBlogAuthor } from '../models/BatchInputBlogAuthor';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogAuthor } from '../models/BatchResponseBlogAuthor';
import { BatchResponseBlogAuthorWithErrors } from '../models/BatchResponseBlogAuthorWithErrors';
import { BlogAuthor } from '../models/BlogAuthor';
import { BlogAuthorCloneRequestVNext } from '../models/BlogAuthorCloneRequestVNext';
import { CollectionResponseWithTotalBlogAuthorForwardPaging } from '../models/CollectionResponseWithTotalBlogAuthorForwardPaging';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';

import { BlogAuthorsApiRequestFactory, BlogAuthorsApiResponseProcessor} from "../apis/BlogAuthorsApi";
export class ObservableBlogAuthorsApi {
    private requestFactory: BlogAuthorsApiRequestFactory;
    private responseProcessor: BlogAuthorsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BlogAuthorsApiRequestFactory,
        responseProcessor?: BlogAuthorsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BlogAuthorsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BlogAuthorsApiResponseProcessor();
    }

    /**
     * Delete the Blog Author object identified by the id in the path.
     * Delete a Blog Author
     * @param objectId The Blog Author id.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectId: string, archived?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(objectId, archived, _options);

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
     * Delete the Blog Author object identified by the id in the path.
     * Delete a Blog Author
     * @param objectId The Blog Author id.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(objectId, archived, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete the Blog Author objects identified in the request body.
     * Delete a batch of Blog Authors
     * @param batchInputString The JSON array of Blog Author ids.
     */
    public archiveBatchWithHttpInfo(batchInputString: BatchInputString, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveBatch(batchInputString, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete the Blog Author objects identified in the request body.
     * Delete a batch of Blog Authors
     * @param batchInputString The JSON array of Blog Author ids.
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Observable<void> {
        return this.archiveBatchWithHttpInfo(batchInputString, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Attach a Blog Author to a multi-language group.
     * Attach a Blog Author to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.attachToLangGroup(attachToLangPrimaryRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attachToLangGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Attach a Blog Author to a multi-language group.
     * Attach a Blog Author to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Observable<void> {
        return this.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a new Blog Author.
     * Create a new Blog Author
     * @param blogAuthor The JSON representation of a new Blog Author.
     */
    public createWithHttpInfo(blogAuthor: BlogAuthor, _options?: Configuration): Observable<HttpInfo<BlogAuthor>> {
        const requestContextPromise = this.requestFactory.create(blogAuthor, _options);

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
     * Create a new Blog Author.
     * Create a new Blog Author
     * @param blogAuthor The JSON representation of a new Blog Author.
     */
    public create(blogAuthor: BlogAuthor, _options?: Configuration): Observable<BlogAuthor> {
        return this.createWithHttpInfo(blogAuthor, _options).pipe(map((apiResponse: HttpInfo<BlogAuthor>) => apiResponse.data));
    }

    /**
     * Create the Blog Author objects detailed in the request body.
     * Create a batch of Blog Authors
     * @param batchInputBlogAuthor The JSON array of new Blog Authors to create.
     */
    public createBatchWithHttpInfo(batchInputBlogAuthor: BatchInputBlogAuthor, _options?: Configuration): Observable<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>> {
        const requestContextPromise = this.requestFactory.createBatch(batchInputBlogAuthor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create the Blog Author objects detailed in the request body.
     * Create a batch of Blog Authors
     * @param batchInputBlogAuthor The JSON array of new Blog Authors to create.
     */
    public createBatch(batchInputBlogAuthor: BatchInputBlogAuthor, _options?: Configuration): Observable<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors> {
        return this.createBatchWithHttpInfo(batchInputBlogAuthor, _options).pipe(map((apiResponse: HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>) => apiResponse.data));
    }

    /**
     * Create a new language variation from an existing Blog Author.
     * Create a new language variation
     * @param blogAuthorCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariationWithHttpInfo(blogAuthorCloneRequestVNext: BlogAuthorCloneRequestVNext, _options?: Configuration): Observable<HttpInfo<BlogAuthor>> {
        const requestContextPromise = this.requestFactory.createLangVariation(blogAuthorCloneRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLangVariationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new language variation from an existing Blog Author.
     * Create a new language variation
     * @param blogAuthorCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariation(blogAuthorCloneRequestVNext: BlogAuthorCloneRequestVNext, _options?: Configuration): Observable<BlogAuthor> {
        return this.createLangVariationWithHttpInfo(blogAuthorCloneRequestVNext, _options).pipe(map((apiResponse: HttpInfo<BlogAuthor>) => apiResponse.data));
    }

    /**
     * Detach a Blog Author from a multi-language group.
     * Detach a Blog Author from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.detachFromLangGroup(detachFromLangGroupRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detachFromLangGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Detach a Blog Author from a multi-language group.
     * Detach a Blog Author from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Observable<void> {
        return this.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve the Blog Author object identified by the id in the path.
     * Retrieve a Blog Author
     * @param objectId The Blog Author id.
     * @param archived Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<BlogAuthor>> {
        const requestContextPromise = this.requestFactory.getById(objectId, archived, property, _options);

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
     * Retrieve the Blog Author object identified by the id in the path.
     * Retrieve a Blog Author
     * @param objectId The Blog Author id.
     * @param archived Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<BlogAuthor> {
        return this.getByIdWithHttpInfo(objectId, archived, property, _options).pipe(map((apiResponse: HttpInfo<BlogAuthor>) => apiResponse.data));
    }

    /**
     * Get the list of blog authors. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Authors
     * @param createdAt Only return Blog Authors created at exactly the specified time.
     * @param createdAfter Only return Blog Authors created after the specified time.
     * @param createdBefore Only return Blog Authors created before the specified time.
     * @param updatedAt Only return Blog Authors last updated at exactly the specified time.
     * @param updatedAfter Only return Blog Authors last updated after the specified time.
     * @param updatedBefore Only return Blog Authors last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalBlogAuthorForwardPaging>> {
        const requestContextPromise = this.requestFactory.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);

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
     * Get the list of blog authors. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Authors
     * @param createdAt Only return Blog Authors created at exactly the specified time.
     * @param createdAfter Only return Blog Authors created after the specified time.
     * @param createdBefore Only return Blog Authors created before the specified time.
     * @param updatedAt Only return Blog Authors last updated at exactly the specified time.
     * @param updatedAfter Only return Blog Authors last updated after the specified time.
     * @param updatedBefore Only return Blog Authors last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<CollectionResponseWithTotalBlogAuthorForwardPaging> {
        return this.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalBlogAuthorForwardPaging>) => apiResponse.data));
    }

    /**
     * Retrieve the Blog Author objects identified in the request body.
     * Retrieve a batch of Blog Authors
     * @param batchInputString The JSON array of Blog Author ids.
     * @param archived Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     */
    public readBatchWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>> {
        const requestContextPromise = this.requestFactory.readBatch(batchInputString, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the Blog Author objects identified in the request body.
     * Retrieve a batch of Blog Authors
     * @param batchInputString The JSON array of Blog Author ids.
     * @param archived Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors> {
        return this.readBatchWithHttpInfo(batchInputString, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>) => apiResponse.data));
    }

    /**
     * Set a Blog Author as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setLangPrimary(setNewLanguagePrimaryRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setLangPrimaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set a Blog Author as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Observable<void> {
        return this.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Sparse updates a single Blog Author object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Author
     * @param objectId The Blog Author id.
     * @param blogAuthor The JSON representation of the updated Blog Author.
     * @param archived Specifies whether to update deleted Blog Authors. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, blogAuthor: BlogAuthor, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BlogAuthor>> {
        const requestContextPromise = this.requestFactory.update(objectId, blogAuthor, archived, _options);

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
     * Sparse updates a single Blog Author object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Author
     * @param objectId The Blog Author id.
     * @param blogAuthor The JSON representation of the updated Blog Author.
     * @param archived Specifies whether to update deleted Blog Authors. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, blogAuthor: BlogAuthor, archived?: boolean, _options?: Configuration): Observable<BlogAuthor> {
        return this.updateWithHttpInfo(objectId, blogAuthor, archived, _options).pipe(map((apiResponse: HttpInfo<BlogAuthor>) => apiResponse.data));
    }

    /**
     * Update the Blog Author objects identified in the request body.
     * Update a batch of Blog Authors
     * @param batchInputJsonNode A JSON array of the JSON representations of the updated Blog Authors.
     * @param archived Specifies whether to update deleted Blog Authors. Defaults to &#x60;false&#x60;.
     */
    public updateBatchWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>> {
        const requestContextPromise = this.requestFactory.updateBatch(batchInputJsonNode, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the Blog Author objects identified in the request body.
     * Update a batch of Blog Authors
     * @param batchInputJsonNode A JSON array of the JSON representations of the updated Blog Authors.
     * @param archived Specifies whether to update deleted Blog Authors. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors> {
        return this.updateBatchWithHttpInfo(batchInputJsonNode, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>) => apiResponse.data));
    }

    /**
     * Explicitly set new languages for each Blog Author in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangsWithHttpInfo(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateLangs(updateLanguagesRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLangsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Explicitly set new languages for each Blog Author in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Observable<void> {
        return this.updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
