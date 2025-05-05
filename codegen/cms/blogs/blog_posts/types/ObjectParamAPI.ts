import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * The ID of the blog post to delete.
     * @type string
     * @memberof BasicApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been deleted.
     * @type boolean
     * @memberof BasicApiarchive
     */
    archived?: boolean
}

export interface BasicApiCloneRequest {
    /**
     * The JSON representation of the ContentCloneRequest object.
     * @type ContentCloneRequestVNext
     * @memberof BasicApiclone
     */
    contentCloneRequestVNext: ContentCloneRequestVNext
}

export interface BasicApiCreateRequest {
    /**
     * The JSON representation of a new Blog Post.
     * @type BlogPost
     * @memberof BasicApicreate
     */
    blogPost: BlogPost
}

export interface BasicApiGetByIdRequest {
    /**
     * The ID of the blog post to retrieve.
     * @type string
     * @memberof BasicApigetById
     */
    objectId: string
    /**
     * Specifies whether to return deleted blog posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BasicApigetById
     */
    archived?: boolean
    /**
     * Specific properties to return.
     * @type string
     * @memberof BasicApigetById
     */
    property?: string
}

export interface BasicApiGetDraftByIdRequest {
    /**
     * The ID of the blog post to retrieve the draft of.
     * @type string
     * @memberof BasicApigetDraftById
     */
    objectId: string
}

export interface BasicApiGetPageRequest {
    /**
     * Only return blog posts created at exactly the specified time.
     * @type Date
     * @memberof BasicApigetPage
     */
    createdAt?: Date
    /**
     * Only return blog posts created after the specified time.
     * @type Date
     * @memberof BasicApigetPage
     */
    createdAfter?: Date
    /**
     * Only return blog posts created before the specified time.
     * @type Date
     * @memberof BasicApigetPage
     */
    createdBefore?: Date
    /**
     * Only return blog posts last updated at exactly the specified time.
     * @type Date
     * @memberof BasicApigetPage
     */
    updatedAt?: Date
    /**
     * Only return blog posts last updated after the specified time.
     * @type Date
     * @memberof BasicApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return blog posts last updated before the specified time.
     * @type Date
     * @memberof BasicApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;createdAt&#x60; (default), &#x60;name&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BasicApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 20.
     * @type number
     * @memberof BasicApigetPage
     */
    limit?: number
    /**
     * Specifies whether to return deleted blog posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BasicApigetPage
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof BasicApigetPage
     */
    property?: string
}

export interface BasicApiGetPreviousVersionRequest {
    /**
     * The ID of the blog post.
     * @type string
     * @memberof BasicApigetPreviousVersion
     */
    objectId: string
    /**
     * The ID of the version to retrieve.
     * @type string
     * @memberof BasicApigetPreviousVersion
     */
    revisionId: string
}

export interface BasicApiGetPreviousVersionsRequest {
    /**
     * The ID of the blog post to retrieve previous versions of.
     * @type string
     * @memberof BasicApigetPreviousVersions
     */
    objectId: string
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BasicApigetPreviousVersions
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof BasicApigetPreviousVersions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof BasicApigetPreviousVersions
     */
    limit?: number
}

export interface BasicApiPushLiveRequest {
    /**
     * The ID of the post to publish.
     * @type string
     * @memberof BasicApipushLive
     */
    objectId: string
}

export interface BasicApiResetDraftRequest {
    /**
     * The ID of the blog post to reset.
     * @type string
     * @memberof BasicApiresetDraft
     */
    objectId: string
}

export interface BasicApiRestorePreviousVersionRequest {
    /**
     * The ID of the blog post.
     * @type string
     * @memberof BasicApirestorePreviousVersion
     */
    objectId: string
    /**
     * The ID of the version to restore the blog post to.
     * @type string
     * @memberof BasicApirestorePreviousVersion
     */
    revisionId: string
}

export interface BasicApiRestorePreviousVersionToDraftRequest {
    /**
     * The ID of the blog post.
     * @type string
     * @memberof BasicApirestorePreviousVersionToDraft
     */
    objectId: string
    /**
     * The ID of the version to restore the blog post to.
     * @type number
     * @memberof BasicApirestorePreviousVersionToDraft
     */
    revisionId: number
}

export interface BasicApiScheduleRequest {
    /**
     * The JSON representation of the ContentScheduleRequestVNext object.
     * @type ContentScheduleRequestVNext
     * @memberof BasicApischedule
     */
    contentScheduleRequestVNext: ContentScheduleRequestVNext
}

export interface BasicApiUpdateRequest {
    /**
     * The ID of the blog post to update.
     * @type string
     * @memberof BasicApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Post.
     * @type BlogPost
     * @memberof BasicApiupdate
     */
    blogPost: BlogPost
    /**
     * Specifies whether to update deleted blog posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BasicApiupdate
     */
    archived?: boolean
}

export interface BasicApiUpdateDraftRequest {
    /**
     * The ID of the blog post to update the draft of.
     * @type string
     * @memberof BasicApiupdateDraft
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Post to be applied to the draft.
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
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete a blog post by ID.
     * Delete a blog post
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Clone a blog post, making a copy of it in a new blog post.
     * Clone a blog post
     * @param param the request object
     */
    public cloneWithHttpInfo(param: BasicApiCloneRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.cloneWithHttpInfo(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Clone a blog post, making a copy of it in a new blog post.
     * Clone a blog post
     * @param param the request object
     */
    public clone(param: BasicApiCloneRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.clone(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new blog post, specifying its content in the request body.
     * Create a new post
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.createWithHttpInfo(param.blogPost,  options).toPromise();
    }

    /**
     * Create a new blog post, specifying its content in the request body.
     * Create a new post
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.create(param.blogPost,  options).toPromise();
    }

    /**
     * Retrieve a blog post by the post ID.
     * Retrieve a blog post
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.getByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve a blog post by the post ID.
     * Retrieve a blog post
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.getById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of a blog post.
     * Retrieve the full draft version of the Blog Post
     * @param param the request object
     */
    public getDraftByIdWithHttpInfo(param: BasicApiGetDraftByIdRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.getDraftByIdWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of a blog post.
     * Retrieve the full draft version of the Blog Post
     * @param param the request object
     */
    public getDraftById(param: BasicApiGetDraftByIdRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.getDraftById(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve all blog posts, with paging and filtering options. This method would be useful for an integration that ingests posts and suggests edits.
     * Get all posts
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BasicApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalBlogPostForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve all blog posts, with paging and filtering options. This method would be useful for an integration that ingests posts and suggests edits.
     * Get all posts
     * @param param the request object
     */
    public getPage(param: BasicApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseWithTotalBlogPostForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve a previous version of a blog post.
     * Retrieve a previous version of a blog post
     * @param param the request object
     */
    public getPreviousVersionWithHttpInfo(param: BasicApiGetPreviousVersionRequest, options?: Configuration): Promise<HttpInfo<VersionBlogPost>> {
        return this.api.getPreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieve a previous version of a blog post.
     * Retrieve a previous version of a blog post
     * @param param the request object
     */
    public getPreviousVersion(param: BasicApiGetPreviousVersionRequest, options?: Configuration): Promise<VersionBlogPost> {
        return this.api.getPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieve all the previous versions of a blog post.
     * Retrieves all previous versions of a post
     * @param param the request object
     */
    public getPreviousVersionsWithHttpInfo(param: BasicApiGetPreviousVersionsRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionBlogPost>> {
        return this.api.getPreviousVersionsWithHttpInfo(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Retrieve all the previous versions of a blog post.
     * Retrieves all previous versions of a post
     * @param param the request object
     */
    public getPreviousVersions(param: BasicApiGetPreviousVersionsRequest, options?: Configuration): Promise<CollectionResponseWithTotalVersionBlogPost> {
        return this.api.getPreviousVersions(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Publish the draft version of the blog post, sending its content to the live page.
     * Publish blog post draft
     * @param param the request object
     */
    public pushLiveWithHttpInfo(param: BasicApiPushLiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pushLiveWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Publish the draft version of the blog post, sending its content to the live page.
     * Publish blog post draft
     * @param param the request object
     */
    public pushLive(param: BasicApiPushLiveRequest, options?: Configuration): Promise<void> {
        return this.api.pushLive(param.objectId,  options).toPromise();
    }

    /**
     * Discard all drafted content, resetting the draft to contain the content in the currently published version.
     * Reset post draft to the live version
     * @param param the request object
     */
    public resetDraftWithHttpInfo(param: BasicApiResetDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.resetDraftWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Discard all drafted content, resetting the draft to contain the content in the currently published version.
     * Reset post draft to the live version
     * @param param the request object
     */
    public resetDraft(param: BasicApiResetDraftRequest, options?: Configuration): Promise<void> {
        return this.api.resetDraft(param.objectId,  options).toPromise();
    }

    /**
     * Restores a blog post to one of its previous versions.
     * Restore a previous version
     * @param param the request object
     */
    public restorePreviousVersionWithHttpInfo(param: BasicApiRestorePreviousVersionRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.restorePreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Restores a blog post to one of its previous versions.
     * Restore a previous version
     * @param param the request object
     */
    public restorePreviousVersion(param: BasicApiRestorePreviousVersionRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.restorePreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a draft to a previous version
     * @param param the request object
     */
    public restorePreviousVersionToDraftWithHttpInfo(param: BasicApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.restorePreviousVersionToDraftWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a draft to a previous version
     * @param param the request object
     */
    public restorePreviousVersionToDraft(param: BasicApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.restorePreviousVersionToDraft(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Schedule a blog post to be published at a specified time.
     * Schedule a post to be published
     * @param param the request object
     */
    public scheduleWithHttpInfo(param: BasicApiScheduleRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.scheduleWithHttpInfo(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Schedule a blog post to be published at a specified time.
     * Schedule a post to be published
     * @param param the request object
     */
    public schedule(param: BasicApiScheduleRequest, options?: Configuration): Promise<void> {
        return this.api.schedule(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Partially updates a single blog post by ID. You only need to specify the values that you want to update.
     * Update a post
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.updateWithHttpInfo(param.objectId, param.blogPost, param.archived,  options).toPromise();
    }

    /**
     * Partially updates a single blog post by ID. You only need to specify the values that you want to update.
     * Update a post
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.update(param.objectId, param.blogPost, param.archived,  options).toPromise();
    }

    /**
     * Partially updates the draft version of a single blog post by ID. You only need to specify the values that you want to update.
     * Update the draft of a post
     * @param param the request object
     */
    public updateDraftWithHttpInfo(param: BasicApiUpdateDraftRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.updateDraftWithHttpInfo(param.objectId, param.blogPost,  options).toPromise();
    }

    /**
     * Partially updates the draft version of a single blog post by ID. You only need to specify the values that you want to update.
     * Update the draft of a post
     * @param param the request object
     */
    public updateDraft(param: BasicApiUpdateDraftRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.updateDraft(param.objectId, param.blogPost,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiArchiveRequest {
    /**
     * The JSON array of Blog Post ids.
     * @type BatchInputString
     * @memberof BatchApiarchive
     */
    batchInputString: BatchInputString
}

export interface BatchApiCreateRequest {
    /**
     * The JSON array of new Blog Posts to create.
     * @type BatchInputBlogPost
     * @memberof BatchApicreate
     */
    batchInputBlogPost: BatchInputBlogPost
}

export interface BatchApiReadRequest {
    /**
     * The JSON array of Blog Post ids.
     * @type BatchInputString
     * @memberof BatchApiread
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted blog posts Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BatchApiread
     */
    archived?: boolean
}

export interface BatchApiUpdateRequest {
    /**
     * A JSON array of the JSON representations of the updated Blog Posts.
     * @type BatchInputJsonNode
     * @memberof BatchApiupdate
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
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
    public archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete a blog post by ID.  Note: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete a batch of blog posts
     * @param param the request object
     */
    public archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.batchInputString,  options).toPromise();
    }

    /**
     * Create a batch of blog posts, specifying their content in the request body.
     * Create a batch of blog posts
     * @param param the request object
     */
    public createWithHttpInfo(param: BatchApiCreateRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        return this.api.createWithHttpInfo(param.batchInputBlogPost,  options).toPromise();
    }

    /**
     * Create a batch of blog posts, specifying their content in the request body.
     * Create a batch of blog posts
     * @param param the request object
     */
    public create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.api.create(param.batchInputBlogPost,  options).toPromise();
    }

    /**
     * Retrieve a batch of blog posts by ID. identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param param the request object
     */
    public readWithHttpInfo(param: BatchApiReadRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        return this.api.readWithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve a batch of blog posts by ID. identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param param the request object
     */
    public read(param: BatchApiReadRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.api.read(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of blog posts.
     * Update a batch of Blog Posts
     * @param param the request object
     */
    public updateWithHttpInfo(param: BatchApiUpdateRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        return this.api.updateWithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of blog posts.
     * Update a batch of Blog Posts
     * @param param the request object
     */
    public update(param: BatchApiUpdateRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.api.update(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

}

import { ObservableMultiLanguageApi } from "./ObservableAPI";
import { MultiLanguageApiRequestFactory, MultiLanguageApiResponseProcessor} from "../apis/MultiLanguageApi";

export interface MultiLanguageApiAttachToLangGroupRequest {
    /**
     * The JSON representation of the AttachToLangPrimaryRequest object.
     * @type AttachToLangPrimaryRequestVNext
     * @memberof MultiLanguageApiattachToLangGroup
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface MultiLanguageApiCreateLangVariationRequest {
    /**
     * The JSON representation of the BlogPostLanguageCloneRequestVNext object.
     * @type BlogPostLanguageCloneRequestVNext
     * @memberof MultiLanguageApicreateLangVariation
     */
    blogPostLanguageCloneRequestVNext: BlogPostLanguageCloneRequestVNext
}

export interface MultiLanguageApiDetachFromLangGroupRequest {
    /**
     * The JSON representation of the DetachFromLangGroupRequest object.
     * @type DetachFromLangGroupRequestVNext
     * @memberof MultiLanguageApidetachFromLangGroup
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface MultiLanguageApiSetLangPrimaryRequest {
    /**
     * The JSON representation of the SetNewLanguagePrimaryRequest object.
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof MultiLanguageApisetLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
}

export interface MultiLanguageApiUpdateLangsRequest {
    /**
     * The JSON representation of the SetNewLanguagePrimaryRequest object.
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
    public attachToLangGroupWithHttpInfo(param: MultiLanguageApiAttachToLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.attachToLangGroupWithHttpInfo(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Attach a blog post to a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Attach post to a multi-language group
     * @param param the request object
     */
    public attachToLangGroup(param: MultiLanguageApiAttachToLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.attachToLangGroup(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing blog post
     * Create a language variation
     * @param param the request object
     */
    public createLangVariationWithHttpInfo(param: MultiLanguageApiCreateLangVariationRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.createLangVariationWithHttpInfo(param.blogPostLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing blog post
     * Create a language variation
     * @param param the request object
     */
    public createLangVariation(param: MultiLanguageApiCreateLangVariationRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.createLangVariation(param.blogPostLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Detach a blog post from a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Detach post from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroupWithHttpInfo(param: MultiLanguageApiDetachFromLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.detachFromLangGroupWithHttpInfo(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Detach a blog post from a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Detach post from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroup(param: MultiLanguageApiDetachFromLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.detachFromLangGroup(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Set the primary language of a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content) to the language of the provided post (specified as an ID in the request body)
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimaryWithHttpInfo(param: MultiLanguageApiSetLangPrimaryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setLangPrimaryWithHttpInfo(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Set the primary language of a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content) to the language of the provided post (specified as an ID in the request body)
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimary(param: MultiLanguageApiSetLangPrimaryRequest, options?: Configuration): Promise<void> {
        return this.api.setLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each post in a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangsWithHttpInfo(param: MultiLanguageApiUpdateLangsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateLangsWithHttpInfo(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each post in a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangs(param: MultiLanguageApiUpdateLangsRequest, options?: Configuration): Promise<void> {
        return this.api.updateLangs(param.updateLanguagesRequestVNext,  options).toPromise();
    }

}
