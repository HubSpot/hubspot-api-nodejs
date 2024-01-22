import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputBlogPost } from '../models/BatchInputBlogPost';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogPost } from '../models/BatchResponseBlogPost';
import { BatchResponseBlogPostWithErrors } from '../models/BatchResponseBlogPostWithErrors';
import { BlogPost } from '../models/BlogPost';
import { BlogPostLanguageCloneRequestVNext } from '../models/BlogPostLanguageCloneRequestVNext';
import { CollectionResponseWithTotalBlogPostForwardPaging } from '../models/CollectionResponseWithTotalBlogPostForwardPaging';
import { CollectionResponseWithTotalVersionBlogPost } from '../models/CollectionResponseWithTotalVersionBlogPost';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { ContentScheduleRequestVNext } from '../models/ContentScheduleRequestVNext';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { VersionBlogPost } from '../models/VersionBlogPost';

import { BlogPostsApiRequestFactory, BlogPostsApiResponseProcessor} from "../apis/BlogPostsApi";
export class ObservableBlogPostsApi {
    private requestFactory: BlogPostsApiRequestFactory;
    private responseProcessor: BlogPostsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BlogPostsApiRequestFactory,
        responseProcessor?: BlogPostsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BlogPostsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BlogPostsApiResponseProcessor();
    }

    /**
     * Delete the Blog Post object identified by the id in the path.
     * Delete a Blog Post
     * @param objectId The Blog Post id.
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
     * Delete the Blog Post object identified by the id in the path.
     * Delete a Blog Post
     * @param objectId The Blog Post id.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(objectId, archived, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete the Blog Post objects identified in the request body. Note: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Blog Posts
     * @param batchInputString The JSON array of Blog Post ids.
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
     * Delete the Blog Post objects identified in the request body. Note: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Blog Posts
     * @param batchInputString The JSON array of Blog Post ids.
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Observable<void> {
        return this.archiveBatchWithHttpInfo(batchInputString, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Attach a Blog Post to a multi-language group.
     * Attach a Blog Post to a multi-language group
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
     * Attach a Blog Post to a multi-language group.
     * Attach a Blog Post to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Observable<void> {
        return this.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Clone a Blog Post.
     * Clone a Blog Post
     * @param contentCloneRequestVNext The JSON representation of the ContentCloneRequest object.
     */
    public cloneWithHttpInfo(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Observable<HttpInfo<BlogPost>> {
        const requestContextPromise = this.requestFactory.clone(contentCloneRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Clone a Blog Post.
     * Clone a Blog Post
     * @param contentCloneRequestVNext The JSON representation of the ContentCloneRequest object.
     */
    public clone(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Observable<BlogPost> {
        return this.cloneWithHttpInfo(contentCloneRequestVNext, _options).pipe(map((apiResponse: HttpInfo<BlogPost>) => apiResponse.data));
    }

    /**
     * Create a new Blog Post.
     * Create a new Blog Post
     * @param blogPost The JSON representation of a new Blog Post.
     */
    public createWithHttpInfo(blogPost: BlogPost, _options?: Configuration): Observable<HttpInfo<BlogPost>> {
        const requestContextPromise = this.requestFactory.create(blogPost, _options);

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
     * Create a new Blog Post.
     * Create a new Blog Post
     * @param blogPost The JSON representation of a new Blog Post.
     */
    public create(blogPost: BlogPost, _options?: Configuration): Observable<BlogPost> {
        return this.createWithHttpInfo(blogPost, _options).pipe(map((apiResponse: HttpInfo<BlogPost>) => apiResponse.data));
    }

    /**
     * Create the Blog Post objects detailed in the request body.
     * Create a batch of Blog Posts
     * @param batchInputBlogPost The JSON array of new Blog Posts to create.
     */
    public createBatchWithHttpInfo(batchInputBlogPost: BatchInputBlogPost, _options?: Configuration): Observable<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        const requestContextPromise = this.requestFactory.createBatch(batchInputBlogPost, _options);

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
     * Create the Blog Post objects detailed in the request body.
     * Create a batch of Blog Posts
     * @param batchInputBlogPost The JSON array of new Blog Posts to create.
     */
    public createBatch(batchInputBlogPost: BatchInputBlogPost, _options?: Configuration): Observable<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.createBatchWithHttpInfo(batchInputBlogPost, _options).pipe(map((apiResponse: HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>) => apiResponse.data));
    }

    /**
     * Create a new language variation from an existing Blog Post
     * Create a new language variation
     * @param blogPostLanguageCloneRequestVNext The JSON representation of the BlogPostLanguageCloneRequestVNext object.
     */
    public createLangVariationWithHttpInfo(blogPostLanguageCloneRequestVNext: BlogPostLanguageCloneRequestVNext, _options?: Configuration): Observable<HttpInfo<BlogPost>> {
        const requestContextPromise = this.requestFactory.createLangVariation(blogPostLanguageCloneRequestVNext, _options);

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
     * Create a new language variation from an existing Blog Post
     * Create a new language variation
     * @param blogPostLanguageCloneRequestVNext The JSON representation of the BlogPostLanguageCloneRequestVNext object.
     */
    public createLangVariation(blogPostLanguageCloneRequestVNext: BlogPostLanguageCloneRequestVNext, _options?: Configuration): Observable<BlogPost> {
        return this.createLangVariationWithHttpInfo(blogPostLanguageCloneRequestVNext, _options).pipe(map((apiResponse: HttpInfo<BlogPost>) => apiResponse.data));
    }

    /**
     * Detach a Blog Post from a multi-language group.
     * Detach a Blog Post from a multi-language group
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
     * Detach a Blog Post from a multi-language group.
     * Detach a Blog Post from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Observable<void> {
        return this.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve the Blog Post object identified by the id in the path.
     * Retrieve a Blog Post
     * @param objectId The Blog Post id.
     * @param archived Specifies whether to return deleted Blog Posts. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<BlogPost>> {
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
     * Retrieve the Blog Post object identified by the id in the path.
     * Retrieve a Blog Post
     * @param objectId The Blog Post id.
     * @param archived Specifies whether to return deleted Blog Posts. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<BlogPost> {
        return this.getByIdWithHttpInfo(objectId, archived, property, _options).pipe(map((apiResponse: HttpInfo<BlogPost>) => apiResponse.data));
    }

    /**
     * Retrieve the full draft version of the Blog Post.
     * Retrieve the full draft version of the Blog Post
     * @param objectId The Blog Post id.
     */
    public getDraftByIdWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<BlogPost>> {
        const requestContextPromise = this.requestFactory.getDraftById(objectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDraftByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the full draft version of the Blog Post.
     * Retrieve the full draft version of the Blog Post
     * @param objectId The Blog Post id.
     */
    public getDraftById(objectId: string, _options?: Configuration): Observable<BlogPost> {
        return this.getDraftByIdWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<BlogPost>) => apiResponse.data));
    }

    /**
     * Get the list of blog posts. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Posts
     * @param createdAt Only return Blog Posts created at exactly the specified time.
     * @param createdAfter Only return Blog Posts created after the specified time.
     * @param createdBefore Only return Blog Posts created before the specified time.
     * @param updatedAt Only return Blog Posts last updated at exactly the specified time.
     * @param updatedAfter Only return Blog Posts last updated after the specified time.
     * @param updatedBefore Only return Blog Posts last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 20.
     * @param archived Specifies whether to return deleted Blog Posts. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalBlogPostForwardPaging>> {
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
     * Get the list of blog posts. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Posts
     * @param createdAt Only return Blog Posts created at exactly the specified time.
     * @param createdAfter Only return Blog Posts created after the specified time.
     * @param createdBefore Only return Blog Posts created before the specified time.
     * @param updatedAt Only return Blog Posts last updated at exactly the specified time.
     * @param updatedAfter Only return Blog Posts last updated after the specified time.
     * @param updatedBefore Only return Blog Posts last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 20.
     * @param archived Specifies whether to return deleted Blog Posts. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<CollectionResponseWithTotalBlogPostForwardPaging> {
        return this.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalBlogPostForwardPaging>) => apiResponse.data));
    }

    /**
     * Retrieves a previous version of a blog post.
     * Retrieves a previous version of a blog post
     * @param objectId The Blog Post id.
     * @param revisionId The Blog Post version id.
     */
    public getPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Observable<HttpInfo<VersionBlogPost>> {
        const requestContextPromise = this.requestFactory.getPreviousVersion(objectId, revisionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPreviousVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a previous version of a blog post.
     * Retrieves a previous version of a blog post
     * @param objectId The Blog Post id.
     * @param revisionId The Blog Post version id.
     */
    public getPreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Observable<VersionBlogPost> {
        return this.getPreviousVersionWithHttpInfo(objectId, revisionId, _options).pipe(map((apiResponse: HttpInfo<VersionBlogPost>) => apiResponse.data));
    }

    /**
     * Retrieves all the previous versions of a blog post.
     * Retrieves all the previous versions of a blog post
     * @param objectId The Blog Post id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getPreviousVersionsWithHttpInfo(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalVersionBlogPost>> {
        const requestContextPromise = this.requestFactory.getPreviousVersions(objectId, after, before, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPreviousVersionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all the previous versions of a blog post.
     * Retrieves all the previous versions of a blog post
     * @param objectId The Blog Post id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<CollectionResponseWithTotalVersionBlogPost> {
        return this.getPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalVersionBlogPost>) => apiResponse.data));
    }

    /**
     * Take any changes from the draft version of the Blog Post and apply them to the live version.
     * Push Blog Post draft edits live
     * @param objectId The id of the Blog Post for which it\&#39;s draft will be pushed live.
     */
    public pushLiveWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pushLive(objectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pushLiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Take any changes from the draft version of the Blog Post and apply them to the live version.
     * Push Blog Post draft edits live
     * @param objectId The id of the Blog Post for which it\&#39;s draft will be pushed live.
     */
    public pushLive(objectId: string, _options?: Configuration): Observable<void> {
        return this.pushLiveWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve the Blog Post objects identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param batchInputString The JSON array of Blog Post ids.
     * @param archived Specifies whether to return deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public readBatchWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
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
     * Retrieve the Blog Post objects identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param batchInputString The JSON array of Blog Post ids.
     * @param archived Specifies whether to return deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.readBatchWithHttpInfo(batchInputString, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>) => apiResponse.data));
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Blog Post draft to the live version
     * @param objectId The id of the Blog Post for which it\&#39;s draft will be reset.
     */
    public resetDraftWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.resetDraft(objectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Blog Post draft to the live version
     * @param objectId The id of the Blog Post for which it\&#39;s draft will be reset.
     */
    public resetDraft(objectId: string, _options?: Configuration): Observable<void> {
        return this.resetDraftWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Takes a specified version of a blog post and restores it.
     * Restore a previous version of a blog post
     * @param objectId The Blog Post id.
     * @param revisionId The Blog Post version id to restore.
     */
    public restorePreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Observable<HttpInfo<BlogPost>> {
        const requestContextPromise = this.requestFactory.restorePreviousVersion(objectId, revisionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restorePreviousVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes a specified version of a blog post and restores it.
     * Restore a previous version of a blog post
     * @param objectId The Blog Post id.
     * @param revisionId The Blog Post version id to restore.
     */
    public restorePreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Observable<BlogPost> {
        return this.restorePreviousVersionWithHttpInfo(objectId, revisionId, _options).pipe(map((apiResponse: HttpInfo<BlogPost>) => apiResponse.data));
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a previous version of a blog post, to the draft version of the blog post
     * @param objectId The Blog Post id.
     * @param revisionId The Blog Post version id to restore.
     */
    public restorePreviousVersionToDraftWithHttpInfo(objectId: string, revisionId: number, _options?: Configuration): Observable<HttpInfo<BlogPost>> {
        const requestContextPromise = this.requestFactory.restorePreviousVersionToDraft(objectId, revisionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restorePreviousVersionToDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a previous version of a blog post, to the draft version of the blog post
     * @param objectId The Blog Post id.
     * @param revisionId The Blog Post version id to restore.
     */
    public restorePreviousVersionToDraft(objectId: string, revisionId: number, _options?: Configuration): Observable<BlogPost> {
        return this.restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, _options).pipe(map((apiResponse: HttpInfo<BlogPost>) => apiResponse.data));
    }

    /**
     * Schedule a Blog Post to be Published.
     * Schedule a Blog Post to be Published
     * @param contentScheduleRequestVNext The JSON representation of the ContentScheduleRequestVNext object.
     */
    public scheduleWithHttpInfo(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.schedule(contentScheduleRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.scheduleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Schedule a Blog Post to be Published.
     * Schedule a Blog Post to be Published
     * @param contentScheduleRequestVNext The JSON representation of the ContentScheduleRequestVNext object.
     */
    public schedule(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: Configuration): Observable<void> {
        return this.scheduleWithHttpInfo(contentScheduleRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set a Blog Post as the primary language of a multi-language group.
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
     * Set a Blog Post as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Observable<void> {
        return this.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Sparse updates a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post
     * @param objectId The Blog Post id.
     * @param blogPost The JSON representation of the updated Blog Post.
     * @param archived Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, blogPost: BlogPost, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BlogPost>> {
        const requestContextPromise = this.requestFactory.update(objectId, blogPost, archived, _options);

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
     * Sparse updates a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post
     * @param objectId The Blog Post id.
     * @param blogPost The JSON representation of the updated Blog Post.
     * @param archived Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, blogPost: BlogPost, archived?: boolean, _options?: Configuration): Observable<BlogPost> {
        return this.updateWithHttpInfo(objectId, blogPost, archived, _options).pipe(map((apiResponse: HttpInfo<BlogPost>) => apiResponse.data));
    }

    /**
     * Update the Blog Post objects identified in the request body.
     * Update a batch of Blog Posts
     * @param batchInputJsonNode A JSON array of the JSON representations of the updated Blog Posts.
     * @param archived Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public updateBatchWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
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
     * Update the Blog Post objects identified in the request body.
     * Update a batch of Blog Posts
     * @param batchInputJsonNode A JSON array of the JSON representations of the updated Blog Posts.
     * @param archived Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.updateBatchWithHttpInfo(batchInputJsonNode, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>) => apiResponse.data));
    }

    /**
     * Sparse updates the draft version of a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post draft
     * @param objectId The Blog Post id.
     * @param blogPost The JSON representation of the updated Blog Post to be applied to the draft.
     */
    public updateDraftWithHttpInfo(objectId: string, blogPost: BlogPost, _options?: Configuration): Observable<HttpInfo<BlogPost>> {
        const requestContextPromise = this.requestFactory.updateDraft(objectId, blogPost, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sparse updates the draft version of a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post draft
     * @param objectId The Blog Post id.
     * @param blogPost The JSON representation of the updated Blog Post to be applied to the draft.
     */
    public updateDraft(objectId: string, blogPost: BlogPost, _options?: Configuration): Observable<BlogPost> {
        return this.updateDraftWithHttpInfo(objectId, blogPost, _options).pipe(map((apiResponse: HttpInfo<BlogPost>) => apiResponse.data));
    }

    /**
     * Explicitly set new languages for each Blog Post in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
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
     * Explicitly set new languages for each Blog Post in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Observable<void> {
        return this.updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
