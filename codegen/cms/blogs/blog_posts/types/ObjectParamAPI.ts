import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Angle } from '../models/Angle';
import { BackgroundImage } from '../models/BackgroundImage';
import { BatchInputBlogPost } from '../models/BatchInputBlogPost';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogPostWithErrors } from '../models/BatchResponseBlogPostWithErrors';
import { BlogPost } from '../models/BlogPost';
import { CollectionResponseWithTotalBlogPostForwardPaging } from '../models/CollectionResponseWithTotalBlogPostForwardPaging';
import { CollectionResponseWithTotalVersionBlogPost } from '../models/CollectionResponseWithTotalVersionBlogPost';
import { ColorStop } from '../models/ColorStop';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { ContentScheduleRequestVNext } from '../models/ContentScheduleRequestVNext';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForwardPaging } from '../models/ForwardPaging';
import { Gradient } from '../models/Gradient';
import { LayoutSection } from '../models/LayoutSection';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PreviousPage } from '../models/PreviousPage';
import { RGBAColor } from '../models/RGBAColor';
import { RowMetaData } from '../models/RowMetaData';
import { SideOrCorner } from '../models/SideOrCorner';
import { StandardError } from '../models/StandardError';
import { Styles } from '../models/Styles';
import { VersionBlogPost } from '../models/VersionBlogPost';
import { VersionUser } from '../models/VersionUser';

import { ObservableBlogPostApi } from "./ObservableAPI";
import { BlogPostApiRequestFactory, BlogPostApiResponseProcessor} from "../apis/BlogPostApi";

export interface BlogPostApiArchiveRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BlogPostApiarchive
     */
    archived?: boolean
}

export interface BlogPostApiArchiveBatchRequest {
    /**
     * The JSON array of Blog Post ids.
     * @type BatchInputString
     * @memberof BlogPostApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface BlogPostApiCloneRequest {
    /**
     * The JSON representation of the ContentCloneRequest object.
     * @type ContentCloneRequestVNext
     * @memberof BlogPostApiclone
     */
    contentCloneRequestVNext: ContentCloneRequestVNext
}

export interface BlogPostApiCreateRequest {
    /**
     * The JSON representation of a new Blog Post.
     * @type BlogPost
     * @memberof BlogPostApicreate
     */
    blogPost: BlogPost
}

export interface BlogPostApiCreateBatchRequest {
    /**
     * The JSON array of new Blog Posts to create.
     * @type BatchInputBlogPost
     * @memberof BlogPostApicreateBatch
     */
    batchInputBlogPost: BatchInputBlogPost
}

export interface BlogPostApiGetByIdRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostApigetById
     */
    objectId: string
    /**
     * Specifies whether to return archived Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogPostApigetById
     */
    archived?: boolean
}

export interface BlogPostApiGetDraftByIdRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostApigetDraftById
     */
    objectId: string
}

export interface BlogPostApiGetPageRequest {
    /**
     * Only return Blog Posts created at exactly the specified time.
     * @type Date
     * @memberof BlogPostApigetPage
     */
    createdAt?: Date
    /**
     * Only return Blog Posts created after the specified time.
     * @type Date
     * @memberof BlogPostApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Blog Posts created before the specified time.
     * @type Date
     * @memberof BlogPostApigetPage
     */
    createdBefore?: Date
    /**
     * Only return Blog Posts last updated at exactly the specified time.
     * @type Date
     * @memberof BlogPostApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Blog Posts last updated after the specified time.
     * @type Date
     * @memberof BlogPostApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Blog Posts last updated before the specified time.
     * @type Date
     * @memberof BlogPostApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof BlogPostApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BlogPostApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof BlogPostApigetPage
     */
    limit?: number
    /**
     * Specifies whether to return archived Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogPostApigetPage
     */
    archived?: boolean
}

export interface BlogPostApiGetPreviousVersionRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostApigetPreviousVersion
     */
    objectId: string
    /**
     * The Blog Post version id.
     * @type string
     * @memberof BlogPostApigetPreviousVersion
     */
    revisionId: string
}

export interface BlogPostApiGetPreviousVersionsRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostApigetPreviousVersions
     */
    objectId: string
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BlogPostApigetPreviousVersions
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof BlogPostApigetPreviousVersions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof BlogPostApigetPreviousVersions
     */
    limit?: number
}

export interface BlogPostApiPushLiveRequest {
    /**
     * The id of the Blog Post for which it&#39;s draft will be pushed live.
     * @type string
     * @memberof BlogPostApipushLive
     */
    objectId: string
}

export interface BlogPostApiReadBatchRequest {
    /**
     * The JSON array of Blog Post ids.
     * @type BatchInputString
     * @memberof BlogPostApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return archived Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogPostApireadBatch
     */
    archived?: boolean
}

export interface BlogPostApiResetDraftRequest {
    /**
     * The id of the Blog Post for which it&#39;s draft will be reset.
     * @type string
     * @memberof BlogPostApiresetDraft
     */
    objectId: string
}

export interface BlogPostApiRestorePreviousVersionRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostApirestorePreviousVersion
     */
    objectId: string
    /**
     * The Blog Post version id to restore.
     * @type string
     * @memberof BlogPostApirestorePreviousVersion
     */
    revisionId: string
}

export interface BlogPostApiRestorePreviousVersionToDraftRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostApirestorePreviousVersionToDraft
     */
    objectId: string
    /**
     * The Blog Post version id to restore.
     * @type number
     * @memberof BlogPostApirestorePreviousVersionToDraft
     */
    revisionId: number
}

export interface BlogPostApiScheduleRequest {
    /**
     * The JSON representation of the ContentCloneRequestVNext object.
     * @type ContentScheduleRequestVNext
     * @memberof BlogPostApischedule
     */
    contentScheduleRequestVNext: ContentScheduleRequestVNext
}

export interface BlogPostApiUpdateRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Post.
     * @type BlogPost
     * @memberof BlogPostApiupdate
     */
    blogPost: BlogPost
    /**
     * Specifies whether to update archived Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogPostApiupdate
     */
    archived?: boolean
}

export interface BlogPostApiUpdateBatchRequest {
    /**
     * 
     * @type BatchInputJsonNode
     * @memberof BlogPostApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BlogPostApiupdateBatch
     */
    archived?: boolean
}

export interface BlogPostApiUpdateDraftRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof BlogPostApiupdateDraft
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Post to be applied to the draft.
     * @type BlogPost
     * @memberof BlogPostApiupdateDraft
     */
    blogPost: BlogPost
}

export class ObjectBlogPostApi {
    private api: ObservableBlogPostApi

    public constructor(configuration: Configuration, requestFactory?: BlogPostApiRequestFactory, responseProcessor?: BlogPostApiResponseProcessor) {
        this.api = new ObservableBlogPostApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Post object identified by the id in the path.
     * Delete a Blog Post
     * @param param the request object
     */
    public archive(param: BlogPostApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Post objects identified in the request body. Note: This is not the same as the in-app `archive` function. To perform an in-app `archive` send an normal update with the `archived` field set to true.
     * Archive a batch of Blog Posts
     * @param param the request object
     */
    public archiveBatch(param: BlogPostApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Clone a Blog.
     * Clone a Blog Post
     * @param param the request object
     */
    public clone(param: BlogPostApiCloneRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.clone(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new Blog Post.
     * Create a new Blog Post
     * @param param the request object
     */
    public create(param: BlogPostApiCreateRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.create(param.blogPost,  options).toPromise();
    }

    /**
     * Create the Blog Post objects detailed in the request body.
     * Create a batch of Blog Posts
     * @param param the request object
     */
    public createBatch(param: BlogPostApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | any> {
        return this.api.createBatch(param.batchInputBlogPost,  options).toPromise();
    }

    /**
     * Retrieve the Blog Post object identified by the id in the path.
     * Retrieve a Blog Post
     * @param param the request object
     */
    public getById(param: BlogPostApiGetByIdRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.getById(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of the Blog Post.
     * Retrieve the full draft version of the Blog Post
     * @param param the request object
     */
    public getDraftById(param: BlogPostApiGetDraftByIdRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.getDraftById(param.objectId,  options).toPromise();
    }

    /**
     * Get the list of blog posts. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Posts
     * @param param the request object
     */
    public getPage(param: BlogPostApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalBlogPostForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived,  options).toPromise();
    }

    /**
     * Retrieves a previous version of a blog post.
     * Retrieves a previous version of a blog post
     * @param param the request object
     */
    public getPreviousVersion(param: BlogPostApiGetPreviousVersionRequest, options?: Configuration): Promise<VersionBlogPost> {
        return this.api.getPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a blog post.
     * Retrieves all the previous versions of a blog post
     * @param param the request object
     */
    public getPreviousVersions(param: BlogPostApiGetPreviousVersionsRequest, options?: Configuration): Promise<CollectionResponseWithTotalVersionBlogPost> {
        return this.api.getPreviousVersions(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the Blog Post and apply them to the live version.
     * Push Blog Post draft edits live
     * @param param the request object
     */
    public pushLive(param: BlogPostApiPushLiveRequest, options?: Configuration): Promise<void> {
        return this.api.pushLive(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the Blog Post objects identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param param the request object
     */
    public readBatch(param: BlogPostApiReadBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | any> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Blog Post draft to the live version
     * @param param the request object
     */
    public resetDraft(param: BlogPostApiResetDraftRequest, options?: Configuration): Promise<void> {
        return this.api.resetDraft(param.objectId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post and restores it.
     * Restore a previous version of a blog post
     * @param param the request object
     */
    public restorePreviousVersion(param: BlogPostApiRestorePreviousVersionRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.restorePreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a previous version of a blog post, to the draft version of the blog post
     * @param param the request object
     */
    public restorePreviousVersionToDraft(param: BlogPostApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.restorePreviousVersionToDraft(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Schedule a Blog Post to be Published.
     * Schedule a Blog Post to be Published
     * @param param the request object
     */
    public schedule(param: BlogPostApiScheduleRequest, options?: Configuration): Promise<void> {
        return this.api.schedule(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post
     * @param param the request object
     */
    public update(param: BlogPostApiUpdateRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.update(param.objectId, param.blogPost, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Post objects identified in the request body.
     * Update a batch of Blog Posts
     * @param param the request object
     */
    public updateBatch(param: BlogPostApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | any> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates the draft version of a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post draft
     * @param param the request object
     */
    public updateDraft(param: BlogPostApiUpdateDraftRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.updateDraft(param.objectId, param.blogPost,  options).toPromise();
    }

}
