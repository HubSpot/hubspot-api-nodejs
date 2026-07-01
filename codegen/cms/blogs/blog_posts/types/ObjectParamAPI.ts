import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

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

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * The ID of the blog post to delete.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApiarchive
     */
    archived?: boolean
}

export interface BasicApiCloneRequest {
    /**
     * 
     * @type ContentCloneRequestVNext
     * @memberof BasicApiclone
     */
    contentCloneRequestVNext: ContentCloneRequestVNext
}

export interface BasicApiCreateRequest {
    /**
     * 
     * @type BlogPost
     * @memberof BasicApicreate
     */
    blogPost: BlogPost
}

export interface BasicApiGetByIdRequest {
    /**
     * The ID of the blog post to retrieve.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    objectId: string
    /**
     * Specifies whether to return deleted blog posts. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApigetById
     */
    archived?: boolean
    /**
     * Specific properties to return.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    property?: string
}

export interface BasicApiGetDraftByIdRequest {
    /**
     * The ID of the blog post to retrieve the draft of.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetDraftById
     */
    objectId: string
}

export interface BasicApiGetPageRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPage
     */
    after?: string
    /**
     * Specifies whether to return deleted blog posts. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApigetPage
     */
    archived?: boolean
    /**
     * Only return blog posts created after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    createdAfter?: Date
    /**
     * Only return blog posts created at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    createdAt?: Date
    /**
     * Only return blog posts created before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    createdBefore?: Date
    /**
     * The maximum number of results to return. Default is 20.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetPage
     */
    limit?: number
    /**
     * Specific properties to return from the posts
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPage
     */
    property?: string
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;createdAt&#x60; (default), &#x60;name&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    sort?: Array<string>
    /**
     * Only return blog posts last updated after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return blog posts last updated at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    updatedAt?: Date
    /**
     * Only return blog posts last updated before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    updatedBefore?: Date
}

export interface BasicApiPushLiveRequest {
    /**
     * The ID of the post to publish.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApipushLive
     */
    objectId: string
}

export interface BasicApiResetDraftRequest {
    /**
     * The ID of the blog post to reset.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiresetDraft
     */
    objectId: string
}

export interface BasicApiScheduleRequest {
    /**
     * 
     * @type ContentScheduleRequestVNext
     * @memberof BasicApischedule
     */
    contentScheduleRequestVNext: ContentScheduleRequestVNext
}

export interface BasicApiUpdateRequest {
    /**
     * The ID of the blog post to update.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    objectId: string
    /**
     * 
     * @type BlogPost
     * @memberof BasicApiupdate
     */
    blogPost: BlogPost
    /**
     * Specifies whether to update deleted blog posts. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApiupdate
     */
    archived?: boolean
}

export interface BasicApiUpdateDraftRequest {
    /**
     * The ID of the blog post to update the draft of.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdateDraft
     */
    objectId: string
    /**
     * 
     * @type BlogPost
     * @memberof BasicApiupdateDraft
     */
    blogPost: BlogPost
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a blog post by ID.
     * Delete a blog post
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete a blog post by ID.
     * Delete a blog post
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Clone a blog post, making a copy of it in a new blog post.
     * Clone a blog post
     * @param param the request object
     */
    public cloneWithHttpInfo(param: BasicApiCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        return this.api.cloneWithHttpInfo(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Clone a blog post, making a copy of it in a new blog post.
     * Clone a blog post
     * @param param the request object
     */
    public clone(param: BasicApiCloneRequest, options?: ConfigurationOptions): Promise<BlogPost> {
        return this.api.clone(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new blog post, specifying its content in the request body.
     * Create a new post
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        return this.api.createWithHttpInfo(param.blogPost,  options).toPromise();
    }

    /**
     * Create a new blog post, specifying its content in the request body.
     * Create a new post
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<BlogPost> {
        return this.api.create(param.blogPost,  options).toPromise();
    }

    /**
     * Retrieve a blog post by the post ID.
     * Retrieve a blog post
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        return this.api.getByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve a blog post by the post ID.
     * Retrieve a blog post
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<BlogPost> {
        return this.api.getById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of a blog post.
     * Retrieve the full draft version of the Blog Post
     * @param param the request object
     */
    public getDraftByIdWithHttpInfo(param: BasicApiGetDraftByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        return this.api.getDraftByIdWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of a blog post.
     * Retrieve the full draft version of the Blog Post
     * @param param the request object
     */
    public getDraftById(param: BasicApiGetDraftByIdRequest, options?: ConfigurationOptions): Promise<BlogPost> {
        return this.api.getDraftById(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve all blog posts, with paging and filtering options. This method would be useful for an integration that ingests posts and suggests edits.
     * Get all posts
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BasicApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalBlogPostForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Retrieve all blog posts, with paging and filtering options. This method would be useful for an integration that ingests posts and suggests edits.
     * Get all posts
     * @param param the request object
     */
    public getPage(param: BasicApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalBlogPostForwardPaging> {
        return this.api.getPage(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Publish the draft version of the blog post, sending its content to the live page.
     * Publish blog post draft
     * @param param the request object
     */
    public pushLiveWithHttpInfo(param: BasicApiPushLiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.pushLiveWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Publish the draft version of the blog post, sending its content to the live page.
     * Publish blog post draft
     * @param param the request object
     */
    public pushLive(param: BasicApiPushLiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.pushLive(param.objectId,  options).toPromise();
    }

    /**
     * Discard all drafted content, resetting the draft to contain the content in the currently published version.
     * Reset post draft to the live version
     * @param param the request object
     */
    public resetDraftWithHttpInfo(param: BasicApiResetDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.resetDraftWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Discard all drafted content, resetting the draft to contain the content in the currently published version.
     * Reset post draft to the live version
     * @param param the request object
     */
    public resetDraft(param: BasicApiResetDraftRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.resetDraft(param.objectId,  options).toPromise();
    }

    /**
     * Schedule a blog post to be published at a specified time.
     * Schedule a post to be published
     * @param param the request object
     */
    public scheduleWithHttpInfo(param: BasicApiScheduleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.scheduleWithHttpInfo(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Schedule a blog post to be published at a specified time.
     * Schedule a post to be published
     * @param param the request object
     */
    public schedule(param: BasicApiScheduleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.schedule(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Partially updates a single blog post by ID. You only need to specify the values that you want to update.
     * Update a post
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        return this.api.updateWithHttpInfo(param.objectId, param.blogPost, param.archived,  options).toPromise();
    }

    /**
     * Partially updates a single blog post by ID. You only need to specify the values that you want to update.
     * Update a post
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<BlogPost> {
        return this.api.update(param.objectId, param.blogPost, param.archived,  options).toPromise();
    }

    /**
     * Partially updates the draft version of a single blog post by ID. You only need to specify the values that you want to update.
     * Update the draft of a post
     * @param param the request object
     */
    public updateDraftWithHttpInfo(param: BasicApiUpdateDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        return this.api.updateDraftWithHttpInfo(param.objectId, param.blogPost,  options).toPromise();
    }

    /**
     * Partially updates the draft version of a single blog post by ID. You only need to specify the values that you want to update.
     * Update the draft of a post
     * @param param the request object
     */
    public updateDraft(param: BasicApiUpdateDraftRequest, options?: ConfigurationOptions): Promise<BlogPost> {
        return this.api.updateDraft(param.objectId, param.blogPost,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiArchiveRequest {
    /**
     * 
     * @type BatchInputString
     * @memberof BatchApiarchive
     */
    batchInputString: BatchInputString
}

export interface BatchApiCreateRequest {
    /**
     * 
     * @type BatchInputBlogPost
     * @memberof BatchApicreate
     */
    batchInputBlogPost: BatchInputBlogPost
}

export interface BatchApiReadRequest {
    /**
     * 
     * @type BatchInputString
     * @memberof BatchApiread
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted blog posts Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BatchApiread
     */
    archived?: boolean
}

export interface BatchApiUpdateRequest {
    /**
     * 
     * @type BatchInputJsonNode
     * @memberof BatchApiupdate
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BatchApiupdate
     */
    archived?: boolean
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a blog post by ID.  Note: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete a batch of blog posts
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete a blog post by ID.  Note: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete a batch of blog posts
     * @param param the request object
     */
    public archive(param: BatchApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.batchInputString,  options).toPromise();
    }

    /**
     * Create a batch of blog posts, specifying their content in the request body.
     * Create a batch of blog posts
     * @param param the request object
     */
    public createWithHttpInfo(param: BatchApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        return this.api.createWithHttpInfo(param.batchInputBlogPost,  options).toPromise();
    }

    /**
     * Create a batch of blog posts, specifying their content in the request body.
     * Create a batch of blog posts
     * @param param the request object
     */
    public create(param: BatchApiCreateRequest, options?: ConfigurationOptions): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.api.create(param.batchInputBlogPost,  options).toPromise();
    }

    /**
     * Retrieve a batch of blog posts by ID. identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param param the request object
     */
    public readWithHttpInfo(param: BatchApiReadRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        return this.api.readWithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve a batch of blog posts by ID. identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param param the request object
     */
    public read(param: BatchApiReadRequest, options?: ConfigurationOptions): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.api.read(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of blog posts.
     * Update a batch of Blog Posts
     * @param param the request object
     */
    public updateWithHttpInfo(param: BatchApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        return this.api.updateWithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of blog posts.
     * Update a batch of Blog Posts
     * @param param the request object
     */
    public update(param: BatchApiUpdateRequest, options?: ConfigurationOptions): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.api.update(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

}

import { ObservableMultiLanguageApi } from "./ObservableAPI";
import { MultiLanguageApiRequestFactory, MultiLanguageApiResponseProcessor} from "../apis/MultiLanguageApi";

export interface MultiLanguageApiAttachToLangGroupRequest {
    /**
     * 
     * @type AttachToLangPrimaryRequestVNext
     * @memberof MultiLanguageApiattachToLangGroup
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface MultiLanguageApiCreateLangVariationRequest {
    /**
     * 
     * @type BlogPostLanguageCloneRequestVNext
     * @memberof MultiLanguageApicreateLangVariation
     */
    blogPostLanguageCloneRequestVNext: BlogPostLanguageCloneRequestVNext
}

export interface MultiLanguageApiDetachFromLangGroupRequest {
    /**
     * 
     * @type DetachFromLangGroupRequestVNext
     * @memberof MultiLanguageApidetachFromLangGroup
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface MultiLanguageApiSetLangPrimaryRequest {
    /**
     * 
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof MultiLanguageApisetLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
}

export interface MultiLanguageApiUpdateLangsRequest {
    /**
     * 
     * @type UpdateLanguagesRequestVNext
     * @memberof MultiLanguageApiupdateLangs
     */
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext
}

export class ObjectMultiLanguageApi {
    private api: ObservableMultiLanguageApi

    public constructor(configuration: Configuration, requestFactory?: MultiLanguageApiRequestFactory, responseProcessor?: MultiLanguageApiResponseProcessor) {
        this.api = new ObservableMultiLanguageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attach a blog post to a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Attach post to a multi-language group
     * @param param the request object
     */
    public attachToLangGroupWithHttpInfo(param: MultiLanguageApiAttachToLangGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.attachToLangGroupWithHttpInfo(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Attach a blog post to a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Attach post to a multi-language group
     * @param param the request object
     */
    public attachToLangGroup(param: MultiLanguageApiAttachToLangGroupRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.attachToLangGroup(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing blog post
     * Create a language variation
     * @param param the request object
     */
    public createLangVariationWithHttpInfo(param: MultiLanguageApiCreateLangVariationRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        return this.api.createLangVariationWithHttpInfo(param.blogPostLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing blog post
     * Create a language variation
     * @param param the request object
     */
    public createLangVariation(param: MultiLanguageApiCreateLangVariationRequest, options?: ConfigurationOptions): Promise<BlogPost> {
        return this.api.createLangVariation(param.blogPostLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Detach a blog post from a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Detach post from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroupWithHttpInfo(param: MultiLanguageApiDetachFromLangGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.detachFromLangGroupWithHttpInfo(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Detach a blog post from a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Detach post from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroup(param: MultiLanguageApiDetachFromLangGroupRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.detachFromLangGroup(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Set the primary language of a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content) to the language of the provided post (specified as an ID in the request body)
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimaryWithHttpInfo(param: MultiLanguageApiSetLangPrimaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.setLangPrimaryWithHttpInfo(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Set the primary language of a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content) to the language of the provided post (specified as an ID in the request body)
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimary(param: MultiLanguageApiSetLangPrimaryRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.setLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each post in a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangsWithHttpInfo(param: MultiLanguageApiUpdateLangsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateLangsWithHttpInfo(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each post in a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangs(param: MultiLanguageApiUpdateLangsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateLangs(param.updateLanguagesRequestVNext,  options).toPromise();
    }

}

import { ObservableRevisionsApi } from "./ObservableAPI";
import { RevisionsApiRequestFactory, RevisionsApiResponseProcessor} from "../apis/RevisionsApi";

export interface RevisionsApiGetPreviousVersionRequest {
    /**
     * The ID of the blog post.
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetPreviousVersion
     */
    objectId: string
    /**
     * The ID of the revision to retrieve
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetPreviousVersion
     */
    revisionId: string
}

export interface RevisionsApiGetPreviousVersionsRequest {
    /**
     * The ID of the blog post to retrieve previous versions of.
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetPreviousVersions
     */
    objectId: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetPreviousVersions
     */
    after?: string
    /**
     * A paging cursor token for retrieving previous pages.
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetPreviousVersions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * Defaults to: undefined
     * @type number
     * @memberof RevisionsApigetPreviousVersions
     */
    limit?: number
}

export interface RevisionsApiRestorePreviousVersionRequest {
    /**
     * The ID of the blog post to restore
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApirestorePreviousVersion
     */
    objectId: string
    /**
     * The ID of the version to restore the blog post to.
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApirestorePreviousVersion
     */
    revisionId: string
}

export interface RevisionsApiRestorePreviousVersionToDraftRequest {
    /**
     * The ID of the blog post.
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApirestorePreviousVersionToDraft
     */
    objectId: string
    /**
     * The ID of the version to restore the blog post to.
     * Defaults to: undefined
     * @type number
     * @memberof RevisionsApirestorePreviousVersionToDraft
     */
    revisionId: number
}

export class ObjectRevisionsApi {
    private api: ObservableRevisionsApi

    public constructor(configuration: Configuration, requestFactory?: RevisionsApiRequestFactory, responseProcessor?: RevisionsApiResponseProcessor) {
        this.api = new ObservableRevisionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a previous version of a blog post.
     * Retrieve a previous version of a blog post
     * @param param the request object
     */
    public getPreviousVersionWithHttpInfo(param: RevisionsApiGetPreviousVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogPostVersion>> {
        return this.api.getPreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieve a previous version of a blog post.
     * Retrieve a previous version of a blog post
     * @param param the request object
     */
    public getPreviousVersion(param: RevisionsApiGetPreviousVersionRequest, options?: ConfigurationOptions): Promise<BlogPostVersion> {
        return this.api.getPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieve all the previous versions of a blog post.
     * Retrieves all previous versions of a post
     * @param param the request object
     */
    public getPreviousVersionsWithHttpInfo(param: RevisionsApiGetPreviousVersionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalBlogPostVersion>> {
        return this.api.getPreviousVersionsWithHttpInfo(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Retrieve all the previous versions of a blog post.
     * Retrieves all previous versions of a post
     * @param param the request object
     */
    public getPreviousVersions(param: RevisionsApiGetPreviousVersionsRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalBlogPostVersion> {
        return this.api.getPreviousVersions(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Restores a blog post to one of its previous versions.
     * Restore a previous version
     * @param param the request object
     */
    public restorePreviousVersionWithHttpInfo(param: RevisionsApiRestorePreviousVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        return this.api.restorePreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Restores a blog post to one of its previous versions.
     * Restore a previous version
     * @param param the request object
     */
    public restorePreviousVersion(param: RevisionsApiRestorePreviousVersionRequest, options?: ConfigurationOptions): Promise<BlogPost> {
        return this.api.restorePreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a draft to a previous version
     * @param param the request object
     */
    public restorePreviousVersionToDraftWithHttpInfo(param: RevisionsApiRestorePreviousVersionToDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogPost>> {
        return this.api.restorePreviousVersionToDraftWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a draft to a previous version
     * @param param the request object
     */
    public restorePreviousVersionToDraft(param: RevisionsApiRestorePreviousVersionToDraftRequest, options?: ConfigurationOptions): Promise<BlogPost> {
        return this.api.restorePreviousVersionToDraft(param.objectId, param.revisionId,  options).toPromise();
    }

}
