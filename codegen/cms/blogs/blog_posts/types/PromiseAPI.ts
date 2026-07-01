import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputBlogPost } from '../models/BatchInputBlogPost';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogPost } from '../models/BatchResponseBlogPost';
import { BatchResponseBlogPostWithErrors } from '../models/BatchResponseBlogPostWithErrors';
import { BlogPost } from '../models/BlogPost';
import { BlogPostLanguageCloneRequestVNext } from '../models/BlogPostLanguageCloneRequestVNext';
import { BlogPostVersion } from '../models/BlogPostVersion';
import { CollectionResponseWithTotalBlogPostForwardPaging } from '../models/CollectionResponseWithTotalBlogPostForwardPaging';
import { CollectionResponseWithTotalBlogPostVersion } from '../models/CollectionResponseWithTotalBlogPostVersion';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { ContentScheduleRequestVNext } from '../models/ContentScheduleRequestVNext';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a blog post by ID.
     * Delete a blog post
     * @param objectId The ID of the blog post to delete.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(objectId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a blog post by ID.
     * Delete a blog post
     * @param objectId The ID of the blog post to delete.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(objectId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Clone a blog post, making a copy of it in a new blog post.
     * Clone a blog post
     * @param contentCloneRequestVNext
     */
    public cloneWithHttpInfo(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cloneWithHttpInfo(contentCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Clone a blog post, making a copy of it in a new blog post.
     * Clone a blog post
     * @param contentCloneRequestVNext
     */
    public clone(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<BlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.clone(contentCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new blog post, specifying its content in the request body.
     * Create a new post
     * @param blogPost
     */
    public createWithHttpInfo(blogPost: BlogPost, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createWithHttpInfo(blogPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new blog post, specifying its content in the request body.
     * Create a new post
     * @param blogPost
     */
    public create(blogPost: BlogPost, _options?: PromiseConfigurationOptions): Promise<BlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create(blogPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a blog post by the post ID.
     * Retrieve a blog post
     * @param objectId The ID of the blog post to retrieve.
     * @param [archived] Specifies whether to return deleted blog posts. Defaults to &#x60;false&#x60;.
     * @param [property] Specific properties to return.
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByIdWithHttpInfo(objectId, archived, property, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a blog post by the post ID.
     * Retrieve a blog post
     * @param objectId The ID of the blog post to retrieve.
     * @param [archived] Specifies whether to return deleted blog posts. Defaults to &#x60;false&#x60;.
     * @param [property] Specific properties to return.
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: PromiseConfigurationOptions): Promise<BlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById(objectId, archived, property, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the full draft version of a blog post.
     * Retrieve the full draft version of the Blog Post
     * @param objectId The ID of the blog post to retrieve the draft of.
     */
    public getDraftByIdWithHttpInfo(objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getDraftByIdWithHttpInfo(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the full draft version of a blog post.
     * Retrieve the full draft version of the Blog Post
     * @param objectId The ID of the blog post to retrieve the draft of.
     */
    public getDraftById(objectId: string, _options?: PromiseConfigurationOptions): Promise<BlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getDraftById(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all blog posts, with paging and filtering options. This method would be useful for an integration that ingests posts and suggests edits.
     * Get all posts
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Specifies whether to return deleted blog posts. Defaults to &#x60;false&#x60;.
     * @param [createdAfter] Only return blog posts created after the specified time.
     * @param [createdAt] Only return blog posts created at exactly the specified time.
     * @param [createdBefore] Only return blog posts created before the specified time.
     * @param [limit] The maximum number of results to return. Default is 20.
     * @param [property] Specific properties to return from the posts
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;createdAt&#x60; (default), &#x60;name&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;.
     * @param [updatedAfter] Only return blog posts last updated after the specified time.
     * @param [updatedAt] Only return blog posts last updated at exactly the specified time.
     * @param [updatedBefore] Only return blog posts last updated before the specified time.
     */
    public getPageWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalBlogPostForwardPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPageWithHttpInfo(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all blog posts, with paging and filtering options. This method would be useful for an integration that ingests posts and suggests edits.
     * Get all posts
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Specifies whether to return deleted blog posts. Defaults to &#x60;false&#x60;.
     * @param [createdAfter] Only return blog posts created after the specified time.
     * @param [createdAt] Only return blog posts created at exactly the specified time.
     * @param [createdBefore] Only return blog posts created before the specified time.
     * @param [limit] The maximum number of results to return. Default is 20.
     * @param [property] Specific properties to return from the posts
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;createdAt&#x60; (default), &#x60;name&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;.
     * @param [updatedAfter] Only return blog posts last updated after the specified time.
     * @param [updatedAt] Only return blog posts last updated at exactly the specified time.
     * @param [updatedBefore] Only return blog posts last updated before the specified time.
     */
    public getPage(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalBlogPostForwardPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPage(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Publish the draft version of the blog post, sending its content to the live page.
     * Publish blog post draft
     * @param objectId The ID of the post to publish.
     */
    public pushLiveWithHttpInfo(objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.pushLiveWithHttpInfo(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Publish the draft version of the blog post, sending its content to the live page.
     * Publish blog post draft
     * @param objectId The ID of the post to publish.
     */
    public pushLive(objectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.pushLive(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Discard all drafted content, resetting the draft to contain the content in the currently published version.
     * Reset post draft to the live version
     * @param objectId The ID of the blog post to reset.
     */
    public resetDraftWithHttpInfo(objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.resetDraftWithHttpInfo(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Discard all drafted content, resetting the draft to contain the content in the currently published version.
     * Reset post draft to the live version
     * @param objectId The ID of the blog post to reset.
     */
    public resetDraft(objectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.resetDraft(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Schedule a blog post to be published at a specified time.
     * Schedule a post to be published
     * @param contentScheduleRequestVNext
     */
    public scheduleWithHttpInfo(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.scheduleWithHttpInfo(contentScheduleRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Schedule a blog post to be published at a specified time.
     * Schedule a post to be published
     * @param contentScheduleRequestVNext
     */
    public schedule(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.schedule(contentScheduleRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially updates a single blog post by ID. You only need to specify the values that you want to update.
     * Update a post
     * @param objectId The ID of the blog post to update.
     * @param blogPost
     * @param [archived] Specifies whether to update deleted blog posts. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, blogPost: BlogPost, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateWithHttpInfo(objectId, blogPost, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially updates a single blog post by ID. You only need to specify the values that you want to update.
     * Update a post
     * @param objectId The ID of the blog post to update.
     * @param blogPost
     * @param [archived] Specifies whether to update deleted blog posts. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, blogPost: BlogPost, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update(objectId, blogPost, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially updates the draft version of a single blog post by ID. You only need to specify the values that you want to update.
     * Update the draft of a post
     * @param objectId The ID of the blog post to update the draft of.
     * @param blogPost
     */
    public updateDraftWithHttpInfo(objectId: string, blogPost: BlogPost, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDraftWithHttpInfo(objectId, blogPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially updates the draft version of a single blog post by ID. You only need to specify the values that you want to update.
     * Update the draft of a post
     * @param objectId The ID of the blog post to update the draft of.
     * @param blogPost
     */
    public updateDraft(objectId: string, blogPost: BlogPost, _options?: PromiseConfigurationOptions): Promise<BlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateDraft(objectId, blogPost, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBatchApi } from './ObservableAPI';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class PromiseBatchApi {
    private api: ObservableBatchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a blog post by ID.  Note: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete a batch of blog posts
     * @param batchInputString
     */
    public archiveWithHttpInfo(batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a blog post by ID.  Note: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete a batch of blog posts
     * @param batchInputString
     */
    public archive(batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of blog posts, specifying their content in the request body.
     * Create a batch of blog posts
     * @param batchInputBlogPost
     */
    public createWithHttpInfo(batchInputBlogPost: BatchInputBlogPost, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createWithHttpInfo(batchInputBlogPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of blog posts, specifying their content in the request body.
     * Create a batch of blog posts
     * @param batchInputBlogPost
     */
    public create(batchInputBlogPost: BatchInputBlogPost, _options?: PromiseConfigurationOptions): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create(batchInputBlogPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a batch of blog posts by ID. identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param batchInputString
     * @param [archived] Specifies whether to return deleted blog posts Defaults to &#x60;false&#x60;.
     */
    public readWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.readWithHttpInfo(batchInputString, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a batch of blog posts by ID. identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param batchInputString
     * @param [archived] Specifies whether to return deleted blog posts Defaults to &#x60;false&#x60;.
     */
    public read(batchInputString: BatchInputString, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.read(batchInputString, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a batch of blog posts.
     * Update a batch of Blog Posts
     * @param batchInputJsonNode
     * @param [archived] Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateWithHttpInfo(batchInputJsonNode, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a batch of blog posts.
     * Update a batch of Blog Posts
     * @param batchInputJsonNode
     * @param [archived] Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public update(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update(batchInputJsonNode, archived, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMultiLanguageApi } from './ObservableAPI';

import { MultiLanguageApiRequestFactory, MultiLanguageApiResponseProcessor} from "../apis/MultiLanguageApi";
export class PromiseMultiLanguageApi {
    private api: ObservableMultiLanguageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MultiLanguageApiRequestFactory,
        responseProcessor?: MultiLanguageApiResponseProcessor
    ) {
        this.api = new ObservableMultiLanguageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attach a blog post to a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Attach post to a multi-language group
     * @param attachToLangPrimaryRequestVNext
     */
    public attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Attach a blog post to a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Attach post to a multi-language group
     * @param attachToLangPrimaryRequestVNext
     */
    public attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.attachToLangGroup(attachToLangPrimaryRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing blog post
     * Create a language variation
     * @param blogPostLanguageCloneRequestVNext
     */
    public createLangVariationWithHttpInfo(blogPostLanguageCloneRequestVNext: BlogPostLanguageCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createLangVariationWithHttpInfo(blogPostLanguageCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing blog post
     * Create a language variation
     * @param blogPostLanguageCloneRequestVNext
     */
    public createLangVariation(blogPostLanguageCloneRequestVNext: BlogPostLanguageCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<BlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createLangVariation(blogPostLanguageCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Detach a blog post from a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Detach post from a multi-language group
     * @param detachFromLangGroupRequestVNext
     */
    public detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Detach a blog post from a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Detach post from a multi-language group
     * @param detachFromLangGroupRequestVNext
     */
    public detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.detachFromLangGroup(detachFromLangGroupRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Set the primary language of a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content) to the language of the provided post (specified as an ID in the request body)
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext
     */
    public setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Set the primary language of a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content) to the language of the provided post (specified as an ID in the request body)
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext
     */
    public setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.setLangPrimary(setNewLanguagePrimaryRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each post in a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext
     */
    public updateLangsWithHttpInfo(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateLangsWithHttpInfo(updateLanguagesRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each post in a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext
     */
    public updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateLangs(updateLanguagesRequestVNext, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRevisionsApi } from './ObservableAPI';

import { RevisionsApiRequestFactory, RevisionsApiResponseProcessor} from "../apis/RevisionsApi";
export class PromiseRevisionsApi {
    private api: ObservableRevisionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RevisionsApiRequestFactory,
        responseProcessor?: RevisionsApiResponseProcessor
    ) {
        this.api = new ObservableRevisionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a previous version of a blog post.
     * Retrieve a previous version of a blog post
     * @param objectId The ID of the blog post.
     * @param revisionId The ID of the revision to retrieve
     */
    public getPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BlogPostVersion>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPreviousVersionWithHttpInfo(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a previous version of a blog post.
     * Retrieve a previous version of a blog post
     * @param objectId The ID of the blog post.
     * @param revisionId The ID of the revision to retrieve
     */
    public getPreviousVersion(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<BlogPostVersion> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPreviousVersion(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all the previous versions of a blog post.
     * Retrieves all previous versions of a post
     * @param objectId The ID of the blog post to retrieve previous versions of.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] A paging cursor token for retrieving previous pages.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getPreviousVersionsWithHttpInfo(objectId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalBlogPostVersion>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPreviousVersionsWithHttpInfo(objectId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all the previous versions of a blog post.
     * Retrieves all previous versions of a post
     * @param objectId The ID of the blog post to retrieve previous versions of.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] A paging cursor token for retrieving previous pages.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalBlogPostVersion> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPreviousVersions(objectId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores a blog post to one of its previous versions.
     * Restore a previous version
     * @param objectId The ID of the blog post to restore
     * @param revisionId The ID of the version to restore the blog post to.
     */
    public restorePreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.restorePreviousVersionWithHttpInfo(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores a blog post to one of its previous versions.
     * Restore a previous version
     * @param objectId The ID of the blog post to restore
     * @param revisionId The ID of the version to restore the blog post to.
     */
    public restorePreviousVersion(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<BlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.restorePreviousVersion(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a draft to a previous version
     * @param objectId The ID of the blog post.
     * @param revisionId The ID of the version to restore the blog post to.
     */
    public restorePreviousVersionToDraftWithHttpInfo(objectId: string, revisionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a draft to a previous version
     * @param objectId The ID of the blog post.
     * @param revisionId The ID of the version to restore the blog post to.
     */
    public restorePreviousVersionToDraft(objectId: string, revisionId: number, _options?: PromiseConfigurationOptions): Promise<BlogPost> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.restorePreviousVersionToDraft(objectId, revisionId, observableOptions);
        return result.toPromise();
    }


}



