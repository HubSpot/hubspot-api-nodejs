import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Angle } from '../models/Angle';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BackgroundImage } from '../models/BackgroundImage';
import { BatchInputBlogPost } from '../models/BatchInputBlogPost';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogPost } from '../models/BatchResponseBlogPost';
import { BatchResponseBlogPostWithErrors } from '../models/BatchResponseBlogPostWithErrors';
import { BlogPost } from '../models/BlogPost';
import { CollectionResponseWithTotalBlogPostForwardPaging } from '../models/CollectionResponseWithTotalBlogPostForwardPaging';
import { CollectionResponseWithTotalVersionBlogPost } from '../models/CollectionResponseWithTotalVersionBlogPost';
import { ColorStop } from '../models/ColorStop';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { ContentLanguageCloneRequestVNext } from '../models/ContentLanguageCloneRequestVNext';
import { ContentLanguageVariation } from '../models/ContentLanguageVariation';
import { ContentScheduleRequestVNext } from '../models/ContentScheduleRequestVNext';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
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
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { SideOrCorner } from '../models/SideOrCorner';
import { StandardError } from '../models/StandardError';
import { Styles } from '../models/Styles';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { VersionBlogPost } from '../models/VersionBlogPost';
import { VersionUser } from '../models/VersionUser';
import { ObservableBlogPostsApi } from './ObservableAPI';

import { BlogPostsApiRequestFactory, BlogPostsApiResponseProcessor} from "../apis/BlogPostsApi";
export class PromiseBlogPostsApi {
    private api: ObservableBlogPostsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BlogPostsApiRequestFactory,
        responseProcessor?: BlogPostsApiResponseProcessor
    ) {
        this.api = new ObservableBlogPostsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Post object identified by the id in the path.
     * Delete a Blog Post
     * @param objectId The Blog Post id.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Delete the Blog Post objects identified in the request body. Note: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Blog Posts
     * @param batchInputString The JSON array of Blog Post ids.
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Promise<void> {
        const result = this.api.archiveBatch(batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Clone a Blog Post.
     * Clone a Blog Post
     * @param contentCloneRequestVNext The JSON representation of the ContentCloneRequest object.
     */
    public clone(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Promise<BlogPost> {
        const result = this.api.clone(contentCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create a new Blog Post.
     * Create a new Blog Post
     * @param blogPost The JSON representation of a new Blog Post.
     */
    public create(blogPost: BlogPost, _options?: Configuration): Promise<BlogPost> {
        const result = this.api.create(blogPost, _options);
        return result.toPromise();
    }

    /**
     * Create the Blog Post objects detailed in the request body.
     * Create a batch of Blog Posts
     * @param batchInputBlogPost The JSON array of new Blog Posts to create.
     */
    public createBatch(batchInputBlogPost: BatchInputBlogPost, _options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        const result = this.api.createBatch(batchInputBlogPost, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Post object identified by the id in the path.
     * Retrieve a Blog Post
     * @param objectId The Blog Post id.
     * @param archived Specifies whether to return deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public getById(objectId: string, archived?: boolean, _options?: Configuration): Promise<BlogPost> {
        const result = this.api.getById(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the full draft version of the Blog Post.
     * Retrieve the full draft version of the Blog Post
     * @param objectId The Blog Post id.
     */
    public getDraftById(objectId: string, _options?: Configuration): Promise<BlogPost> {
        const result = this.api.getDraftById(objectId, _options);
        return result.toPromise();
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
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<CollectionResponseWithTotalBlogPostForwardPaging> {
        const result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a previous version of a blog post.
     * Retrieves a previous version of a blog post
     * @param objectId The Blog Post id.
     * @param revisionId The Blog Post version id.
     */
    public getPreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Promise<VersionBlogPost> {
        const result = this.api.getPreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all the previous versions of a blog post.
     * Retrieves all the previous versions of a blog post
     * @param objectId The Blog Post id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Promise<CollectionResponseWithTotalVersionBlogPost> {
        const result = this.api.getPreviousVersions(objectId, after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Attach a Blog Post to a multi-language group.
     * Attach a Blog Post to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public postCmsV3BlogsPostsMultiLanguageAttachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.postCmsV3BlogsPostsMultiLanguageAttachToLangGroup(attachToLangPrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Post
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public postCmsV3BlogsPostsMultiLanguageCreateLanguageVariation(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: Configuration): Promise<BlogPost> {
        const result = this.api.postCmsV3BlogsPostsMultiLanguageCreateLanguageVariation(contentLanguageCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Detach a Blog Post from a multi-language group.
     * Detach a Blog Post from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public postCmsV3BlogsPostsMultiLanguageDetachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.postCmsV3BlogsPostsMultiLanguageDetachFromLangGroup(detachFromLangGroupRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Post in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public postCmsV3BlogsPostsMultiLanguageUpdateLanguages(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.postCmsV3BlogsPostsMultiLanguageUpdateLanguages(updateLanguagesRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Take any changes from the draft version of the Blog Post and apply them to the live version.
     * Push Blog Post draft edits live
     * @param objectId The id of the Blog Post for which it&#39;s draft will be pushed live.
     */
    public pushLive(objectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.pushLive(objectId, _options);
        return result.toPromise();
    }

    /**
     * Set a Blog Post as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public putCmsV3BlogsPostsMultiLanguageSetNewLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.putCmsV3BlogsPostsMultiLanguageSetNewLangPrimary(setNewLanguagePrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Post objects identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param batchInputString The JSON array of Blog Post ids.
     * @param archived Specifies whether to return deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        const result = this.api.readBatch(batchInputString, archived, _options);
        return result.toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Blog Post draft to the live version
     * @param objectId The id of the Blog Post for which it&#39;s draft will be reset.
     */
    public resetDraft(objectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.resetDraft(objectId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a blog post and restores it.
     * Restore a previous version of a blog post
     * @param objectId The Blog Post id.
     * @param revisionId The Blog Post version id to restore.
     */
    public restorePreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Promise<BlogPost> {
        const result = this.api.restorePreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a previous version of a blog post, to the draft version of the blog post
     * @param objectId The Blog Post id.
     * @param revisionId The Blog Post version id to restore.
     */
    public restorePreviousVersionToDraft(objectId: string, revisionId: number, _options?: Configuration): Promise<BlogPost> {
        const result = this.api.restorePreviousVersionToDraft(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Schedule a Blog Post to be Published.
     * Schedule a Blog Post to be Published
     * @param contentScheduleRequestVNext The JSON representation of the ContentScheduleRequestVNext object.
     */
    public schedule(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.schedule(contentScheduleRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post
     * @param objectId The Blog Post id.
     * @param blogPost The JSON representation of the updated Blog Post.
     * @param archived Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, blogPost: BlogPost, archived?: boolean, _options?: Configuration): Promise<BlogPost> {
        const result = this.api.update(objectId, blogPost, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Blog Post objects identified in the request body.
     * Update a batch of Blog Posts
     * @param batchInputJsonNode A JSON array of the JSON representations of the updated Blog Posts.
     * @param archived Specifies whether to update deleted Blog Posts. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<BatchResponseBlogPostWithErrors | BatchResponseBlogPost> {
        const result = this.api.updateBatch(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates the draft version of a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post draft
     * @param objectId The Blog Post id.
     * @param blogPost The JSON representation of the updated Blog Post to be applied to the draft.
     */
    public updateDraft(objectId: string, blogPost: BlogPost, _options?: Configuration): Promise<BlogPost> {
        const result = this.api.updateDraft(objectId, blogPost, _options);
        return result.toPromise();
    }


}



