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

import { ObservableBlogPostsApi } from "./ObservableAPI";
import { BlogPostsApiRequestFactory, BlogPostsApiResponseProcessor} from "../apis/BlogPostsApi";

export interface BlogPostsApiArchiveRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostsApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BlogPostsApiarchive
     */
    archived?: boolean
}

export interface BlogPostsApiArchiveBatchRequest {
    /**
     * The JSON array of Blog Post ids.
     * @type BatchInputString
     * @memberof BlogPostsApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface BlogPostsApiAttachToLangGroupRequest {
    /**
     * The JSON representation of the AttachToLangPrimaryRequest object.
     * @type AttachToLangPrimaryRequestVNext
     * @memberof BlogPostsApiattachToLangGroup
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface BlogPostsApiCloneRequest {
    /**
     * The JSON representation of the ContentCloneRequest object.
     * @type ContentCloneRequestVNext
     * @memberof BlogPostsApiclone
     */
    contentCloneRequestVNext: ContentCloneRequestVNext
}

export interface BlogPostsApiCreateRequest {
    /**
     * The JSON representation of a new Blog Post.
     * @type BlogPost
     * @memberof BlogPostsApicreate
     */
    blogPost: BlogPost
}

export interface BlogPostsApiCreateBatchRequest {
    /**
     * The JSON array of new Blog Posts to create.
     * @type BatchInputBlogPost
     * @memberof BlogPostsApicreateBatch
     */
    batchInputBlogPost: BatchInputBlogPost
}

export interface BlogPostsApiCreateLangVariationRequest {
    /**
     * The JSON representation of the BlogPostLanguageCloneRequestVNext object.
     * @type BlogPostLanguageCloneRequestVNext
     * @memberof BlogPostsApicreateLangVariation
     */
    blogPostLanguageCloneRequestVNext: BlogPostLanguageCloneRequestVNext
}

export interface BlogPostsApiDetachFromLangGroupRequest {
    /**
     * The JSON representation of the DetachFromLangGroupRequest object.
     * @type DetachFromLangGroupRequestVNext
     * @memberof BlogPostsApidetachFromLangGroup
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface BlogPostsApiGetByIdRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostsApigetById
     */
    objectId: string
    /**
     * Specifies whether to return deleted Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogPostsApigetById
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof BlogPostsApigetById
     */
    property?: string
}

export interface BlogPostsApiGetDraftByIdRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostsApigetDraftById
     */
    objectId: string
}

export interface BlogPostsApiGetPageRequest {
    /**
     * Only return Blog Posts created at exactly the specified time.
     * @type Date
     * @memberof BlogPostsApigetPage
     */
    createdAt?: Date
    /**
     * Only return Blog Posts created after the specified time.
     * @type Date
     * @memberof BlogPostsApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Blog Posts created before the specified time.
     * @type Date
     * @memberof BlogPostsApigetPage
     */
    createdBefore?: Date
    /**
     * Only return Blog Posts last updated at exactly the specified time.
     * @type Date
     * @memberof BlogPostsApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Blog Posts last updated after the specified time.
     * @type Date
     * @memberof BlogPostsApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Blog Posts last updated before the specified time.
     * @type Date
     * @memberof BlogPostsApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof BlogPostsApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BlogPostsApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 20.
     * @type number
     * @memberof BlogPostsApigetPage
     */
    limit?: number
    /**
     * Specifies whether to return deleted Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogPostsApigetPage
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof BlogPostsApigetPage
     */
    property?: string
}

export interface BlogPostsApiGetPreviousVersionRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostsApigetPreviousVersion
     */
    objectId: string
    /**
     * The Blog Post version id.
     * @type string
     * @memberof BlogPostsApigetPreviousVersion
     */
    revisionId: string
}

export interface BlogPostsApiGetPreviousVersionsRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostsApigetPreviousVersions
     */
    objectId: string
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BlogPostsApigetPreviousVersions
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof BlogPostsApigetPreviousVersions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof BlogPostsApigetPreviousVersions
     */
    limit?: number
}

export interface BlogPostsApiPushLiveRequest {
    /**
     * The id of the Blog Post for which it\&#39;s draft will be pushed live.
     * @type string
     * @memberof BlogPostsApipushLive
     */
    objectId: string
}

export interface BlogPostsApiReadBatchRequest {
    /**
     * The JSON array of Blog Post ids.
     * @type BatchInputString
     * @memberof BlogPostsApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogPostsApireadBatch
     */
    archived?: boolean
}

export interface BlogPostsApiResetDraftRequest {
    /**
     * The id of the Blog Post for which it\&#39;s draft will be reset.
     * @type string
     * @memberof BlogPostsApiresetDraft
     */
    objectId: string
}

export interface BlogPostsApiRestorePreviousVersionRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostsApirestorePreviousVersion
     */
    objectId: string
    /**
     * The Blog Post version id to restore.
     * @type string
     * @memberof BlogPostsApirestorePreviousVersion
     */
    revisionId: string
}

export interface BlogPostsApiRestorePreviousVersionToDraftRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostsApirestorePreviousVersionToDraft
     */
    objectId: string
    /**
     * The Blog Post version id to restore.
     * @type number
     * @memberof BlogPostsApirestorePreviousVersionToDraft
     */
    revisionId: number
}

export interface BlogPostsApiScheduleRequest {
    /**
     * The JSON representation of the ContentScheduleRequestVNext object.
     * @type ContentScheduleRequestVNext
     * @memberof BlogPostsApischedule
     */
    contentScheduleRequestVNext: ContentScheduleRequestVNext
}

export interface BlogPostsApiSetLangPrimaryRequest {
    /**
     * The JSON representation of the SetNewLanguagePrimaryRequest object.
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof BlogPostsApisetLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
}

export interface BlogPostsApiUpdateRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostsApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Post.
     * @type BlogPost
     * @memberof BlogPostsApiupdate
     */
    blogPost: BlogPost
    /**
     * Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogPostsApiupdate
     */
    archived?: boolean
}

export interface BlogPostsApiUpdateBatchRequest {
    /**
     * A JSON array of the JSON representations of the updated Blog Posts.
     * @type BatchInputJsonNode
     * @memberof BlogPostsApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogPostsApiupdateBatch
     */
    archived?: boolean
}

export interface BlogPostsApiUpdateDraftRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostsApiupdateDraft
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Post to be applied to the draft.
     * @type BlogPost
     * @memberof BlogPostsApiupdateDraft
     */
    blogPost: BlogPost
}

export interface BlogPostsApiUpdateLangsRequest {
    /**
     * The JSON representation of the SetNewLanguagePrimaryRequest object.
     * @type UpdateLanguagesRequestVNext
     * @memberof BlogPostsApiupdateLangs
     */
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext
}

export class ObjectBlogPostsApi {
    private api: ObservableBlogPostsApi

    public constructor(configuration: Configuration, requestFactory?: BlogPostsApiRequestFactory, responseProcessor?: BlogPostsApiResponseProcessor) {
        this.api = new ObservableBlogPostsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Post object identified by the id in the path.
     * Delete a Blog Post
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BlogPostsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Post object identified by the id in the path.
     * Delete a Blog Post
     * @param param the request object
     */
    public archive(param: BlogPostsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Post objects identified in the request body. Note: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Blog Posts
     * @param param the request object
     */
    public archiveBatchWithHttpInfo(param: BlogPostsApiArchiveBatchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveBatchWithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete the Blog Post objects identified in the request body. Note: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Blog Posts
     * @param param the request object
     */
    public archiveBatch(param: BlogPostsApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Attach a Blog Post to a multi-language group.
     * Attach a Blog Post to a multi-language group
     * @param param the request object
     */
    public attachToLangGroupWithHttpInfo(param: BlogPostsApiAttachToLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.attachToLangGroupWithHttpInfo(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Attach a Blog Post to a multi-language group.
     * Attach a Blog Post to a multi-language group
     * @param param the request object
     */
    public attachToLangGroup(param: BlogPostsApiAttachToLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.attachToLangGroup(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Clone a Blog Post.
     * Clone a Blog Post
     * @param param the request object
     */
    public cloneWithHttpInfo(param: BlogPostsApiCloneRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.cloneWithHttpInfo(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Clone a Blog Post.
     * Clone a Blog Post
     * @param param the request object
     */
    public clone(param: BlogPostsApiCloneRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.clone(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new Blog Post.
     * Create a new Blog Post
     * @param param the request object
     */
    public createWithHttpInfo(param: BlogPostsApiCreateRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.createWithHttpInfo(param.blogPost,  options).toPromise();
    }

    /**
     * Create a new Blog Post.
     * Create a new Blog Post
     * @param param the request object
     */
    public create(param: BlogPostsApiCreateRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.create(param.blogPost,  options).toPromise();
    }

    /**
     * Create the Blog Post objects detailed in the request body.
     * Create a batch of Blog Posts
     * @param param the request object
     */
    public createBatchWithHttpInfo(param: BlogPostsApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        return this.api.createBatchWithHttpInfo(param.batchInputBlogPost,  options).toPromise();
    }

    /**
     * Create the Blog Post objects detailed in the request body.
     * Create a batch of Blog Posts
     * @param param the request object
     */
    public createBatch(param: BlogPostsApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.api.createBatch(param.batchInputBlogPost,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Post
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariationWithHttpInfo(param: BlogPostsApiCreateLangVariationRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.createLangVariationWithHttpInfo(param.blogPostLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Post
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariation(param: BlogPostsApiCreateLangVariationRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.createLangVariation(param.blogPostLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Detach a Blog Post from a multi-language group.
     * Detach a Blog Post from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroupWithHttpInfo(param: BlogPostsApiDetachFromLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.detachFromLangGroupWithHttpInfo(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Detach a Blog Post from a multi-language group.
     * Detach a Blog Post from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroup(param: BlogPostsApiDetachFromLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.detachFromLangGroup(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Retrieve the Blog Post object identified by the id in the path.
     * Retrieve a Blog Post
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BlogPostsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.getByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the Blog Post object identified by the id in the path.
     * Retrieve a Blog Post
     * @param param the request object
     */
    public getById(param: BlogPostsApiGetByIdRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.getById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of the Blog Post.
     * Retrieve the full draft version of the Blog Post
     * @param param the request object
     */
    public getDraftByIdWithHttpInfo(param: BlogPostsApiGetDraftByIdRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.getDraftByIdWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of the Blog Post.
     * Retrieve the full draft version of the Blog Post
     * @param param the request object
     */
    public getDraftById(param: BlogPostsApiGetDraftByIdRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.getDraftById(param.objectId,  options).toPromise();
    }

    /**
     * Get the list of blog posts. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Posts
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BlogPostsApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalBlogPostForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Get the list of blog posts. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Posts
     * @param param the request object
     */
    public getPage(param: BlogPostsApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseWithTotalBlogPostForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieves a previous version of a blog post.
     * Retrieves a previous version of a blog post
     * @param param the request object
     */
    public getPreviousVersionWithHttpInfo(param: BlogPostsApiGetPreviousVersionRequest, options?: Configuration): Promise<HttpInfo<VersionBlogPost>> {
        return this.api.getPreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves a previous version of a blog post.
     * Retrieves a previous version of a blog post
     * @param param the request object
     */
    public getPreviousVersion(param: BlogPostsApiGetPreviousVersionRequest, options?: Configuration): Promise<VersionBlogPost> {
        return this.api.getPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a blog post.
     * Retrieves all the previous versions of a blog post
     * @param param the request object
     */
    public getPreviousVersionsWithHttpInfo(param: BlogPostsApiGetPreviousVersionsRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionBlogPost>> {
        return this.api.getPreviousVersionsWithHttpInfo(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a blog post.
     * Retrieves all the previous versions of a blog post
     * @param param the request object
     */
    public getPreviousVersions(param: BlogPostsApiGetPreviousVersionsRequest, options?: Configuration): Promise<CollectionResponseWithTotalVersionBlogPost> {
        return this.api.getPreviousVersions(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the Blog Post and apply them to the live version.
     * Push Blog Post draft edits live
     * @param param the request object
     */
    public pushLiveWithHttpInfo(param: BlogPostsApiPushLiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pushLiveWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the Blog Post and apply them to the live version.
     * Push Blog Post draft edits live
     * @param param the request object
     */
    public pushLive(param: BlogPostsApiPushLiveRequest, options?: Configuration): Promise<void> {
        return this.api.pushLive(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the Blog Post objects identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param param the request object
     */
    public readBatchWithHttpInfo(param: BlogPostsApiReadBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        return this.api.readBatchWithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve the Blog Post objects identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param param the request object
     */
    public readBatch(param: BlogPostsApiReadBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Blog Post draft to the live version
     * @param param the request object
     */
    public resetDraftWithHttpInfo(param: BlogPostsApiResetDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.resetDraftWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Blog Post draft to the live version
     * @param param the request object
     */
    public resetDraft(param: BlogPostsApiResetDraftRequest, options?: Configuration): Promise<void> {
        return this.api.resetDraft(param.objectId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post and restores it.
     * Restore a previous version of a blog post
     * @param param the request object
     */
    public restorePreviousVersionWithHttpInfo(param: BlogPostsApiRestorePreviousVersionRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.restorePreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post and restores it.
     * Restore a previous version of a blog post
     * @param param the request object
     */
    public restorePreviousVersion(param: BlogPostsApiRestorePreviousVersionRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.restorePreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a previous version of a blog post, to the draft version of the blog post
     * @param param the request object
     */
    public restorePreviousVersionToDraftWithHttpInfo(param: BlogPostsApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.restorePreviousVersionToDraftWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a previous version of a blog post, to the draft version of the blog post
     * @param param the request object
     */
    public restorePreviousVersionToDraft(param: BlogPostsApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.restorePreviousVersionToDraft(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Schedule a Blog Post to be Published.
     * Schedule a Blog Post to be Published
     * @param param the request object
     */
    public scheduleWithHttpInfo(param: BlogPostsApiScheduleRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.scheduleWithHttpInfo(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Schedule a Blog Post to be Published.
     * Schedule a Blog Post to be Published
     * @param param the request object
     */
    public schedule(param: BlogPostsApiScheduleRequest, options?: Configuration): Promise<void> {
        return this.api.schedule(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Set a Blog Post as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimaryWithHttpInfo(param: BlogPostsApiSetLangPrimaryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setLangPrimaryWithHttpInfo(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Set a Blog Post as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimary(param: BlogPostsApiSetLangPrimaryRequest, options?: Configuration): Promise<void> {
        return this.api.setLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post
     * @param param the request object
     */
    public updateWithHttpInfo(param: BlogPostsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.updateWithHttpInfo(param.objectId, param.blogPost, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post
     * @param param the request object
     */
    public update(param: BlogPostsApiUpdateRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.update(param.objectId, param.blogPost, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Post objects identified in the request body.
     * Update a batch of Blog Posts
     * @param param the request object
     */
    public updateBatchWithHttpInfo(param: BlogPostsApiUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogPostWithErrors | BatchResponseBlogPost>> {
        return this.api.updateBatchWithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Post objects identified in the request body.
     * Update a batch of Blog Posts
     * @param param the request object
     */
    public updateBatch(param: BlogPostsApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates the draft version of a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post draft
     * @param param the request object
     */
    public updateDraftWithHttpInfo(param: BlogPostsApiUpdateDraftRequest, options?: Configuration): Promise<HttpInfo<BlogPost>> {
        return this.api.updateDraftWithHttpInfo(param.objectId, param.blogPost,  options).toPromise();
    }

    /**
     * Sparse updates the draft version of a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post draft
     * @param param the request object
     */
    public updateDraft(param: BlogPostsApiUpdateDraftRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.updateDraft(param.objectId, param.blogPost,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Post in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangsWithHttpInfo(param: BlogPostsApiUpdateLangsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateLangsWithHttpInfo(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Post in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangs(param: BlogPostsApiUpdateLangsRequest, options?: Configuration): Promise<void> {
        return this.api.updateLangs(param.updateLanguagesRequestVNext,  options).toPromise();
    }

}
