import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchInputTag } from '../models/BatchInputTag';
import { BatchResponseTag } from '../models/BatchResponseTag';
import { BatchResponseTagWithErrors } from '../models/BatchResponseTagWithErrors';
import { CollectionResponseWithTotalTagForwardPaging } from '../models/CollectionResponseWithTotalTagForwardPaging';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { Tag } from '../models/Tag';
import { TagCloneRequestVNext } from '../models/TagCloneRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { ObservableBlogTagsApi } from './ObservableAPI';

import { BlogTagsApiRequestFactory, BlogTagsApiResponseProcessor} from "../apis/BlogTagsApi";
export class PromiseBlogTagsApi {
    private api: ObservableBlogTagsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BlogTagsApiRequestFactory,
        responseProcessor?: BlogTagsApiResponseProcessor
    ) {
        this.api = new ObservableBlogTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Tag object identified by the id in the path.
     * Delete a Blog Tag
     * @param objectId The Blog Tag id.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectId: string, archived?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Delete the Blog Tag object identified by the id in the path.
     * Delete a Blog Tag
     * @param objectId The Blog Tag id.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Delete the Blog Tag objects identified in the request body.
     * Delete a batch of Blog Tags
     * @param batchInputString The JSON array of Blog Tag ids.
     */
    public archiveBatchWithHttpInfo(batchInputString: BatchInputString, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveBatchWithHttpInfo(batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Delete the Blog Tag objects identified in the request body.
     * Delete a batch of Blog Tags
     * @param batchInputString The JSON array of Blog Tag ids.
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Promise<void> {
        const result = this.api.archiveBatch(batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Attach a Blog Tag to a multi-language group.
     * Attach a Blog Tag to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Attach a Blog Tag to a multi-language group.
     * Attach a Blog Tag to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.attachToLangGroup(attachToLangPrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create a new Blog Tag.
     * Create a new Blog Tag
     * @param tag The JSON representation of a new Blog Tag.
     */
    public createWithHttpInfo(tag: Tag, _options?: Configuration): Promise<HttpInfo<Tag>> {
        const result = this.api.createWithHttpInfo(tag, _options);
        return result.toPromise();
    }

    /**
     * Create a new Blog Tag.
     * Create a new Blog Tag
     * @param tag The JSON representation of a new Blog Tag.
     */
    public create(tag: Tag, _options?: Configuration): Promise<Tag> {
        const result = this.api.create(tag, _options);
        return result.toPromise();
    }

    /**
     * Create the Blog Tag objects detailed in the request body.
     * Create a batch of Blog Tags
     * @param batchInputTag The JSON array of new Blog Tags to create.
     */
    public createBatchWithHttpInfo(batchInputTag: BatchInputTag, _options?: Configuration): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        const result = this.api.createBatchWithHttpInfo(batchInputTag, _options);
        return result.toPromise();
    }

    /**
     * Create the Blog Tag objects detailed in the request body.
     * Create a batch of Blog Tags
     * @param batchInputTag The JSON array of new Blog Tags to create.
     */
    public createBatch(batchInputTag: BatchInputTag, _options?: Configuration): Promise<BatchResponseTag | BatchResponseTagWithErrors> {
        const result = this.api.createBatch(batchInputTag, _options);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Tag
     * Create a new language variation
     * @param tagCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariationWithHttpInfo(tagCloneRequestVNext: TagCloneRequestVNext, _options?: Configuration): Promise<HttpInfo<Tag>> {
        const result = this.api.createLangVariationWithHttpInfo(tagCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Tag
     * Create a new language variation
     * @param tagCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariation(tagCloneRequestVNext: TagCloneRequestVNext, _options?: Configuration): Promise<Tag> {
        const result = this.api.createLangVariation(tagCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Detach a Blog Tag from a multi-language group.
     * Detach a Blog Tag from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Detach a Blog Tag from a multi-language group.
     * Detach a Blog Tag from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.detachFromLangGroup(detachFromLangGroupRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param objectId The Blog Tag id.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Promise<HttpInfo<Tag>> {
        const result = this.api.getByIdWithHttpInfo(objectId, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param objectId The Blog Tag id.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Promise<Tag> {
        const result = this.api.getById(objectId, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Get the list of blog tags. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Tags
     * @param createdAt Only return Blog Tags created at exactly the specified time.
     * @param createdAfter Only return Blog Tags created after the specified time.
     * @param createdBefore Only return Blog Tags created before the specified time.
     * @param updatedAt Only return Blog Tags last updated at exactly the specified time.
     * @param updatedAfter Only return Blog Tags last updated after the specified time.
     * @param updatedBefore Only return Blog Tags last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalTagForwardPaging>> {
        const result = this.api.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Get the list of blog tags. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Tags
     * @param createdAt Only return Blog Tags created at exactly the specified time.
     * @param createdAfter Only return Blog Tags created after the specified time.
     * @param createdBefore Only return Blog Tags created before the specified time.
     * @param updatedAt Only return Blog Tags last updated at exactly the specified time.
     * @param updatedAfter Only return Blog Tags last updated after the specified time.
     * @param updatedBefore Only return Blog Tags last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Promise<CollectionResponseWithTotalTagForwardPaging> {
        const result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Tag objects identified in the request body.
     * Retrieve a batch of Blog Tags
     * @param batchInputString The JSON array of Blog Tag ids.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public readBatchWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        const result = this.api.readBatchWithHttpInfo(batchInputString, archived, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Tag objects identified in the request body.
     * Retrieve a batch of Blog Tags
     * @param batchInputString The JSON array of Blog Tag ids.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<BatchResponseTag | BatchResponseTagWithErrors> {
        const result = this.api.readBatch(batchInputString, archived, _options);
        return result.toPromise();
    }

    /**
     * Set a Blog Tag as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Set a Blog Tag as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.setLangPrimary(setNewLanguagePrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Blog Tag object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Tag
     * @param objectId The Blog Tag id.
     * @param tag The JSON representation of the updated Blog Tag.
     * @param archived Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, tag: Tag, archived?: boolean, _options?: Configuration): Promise<HttpInfo<Tag>> {
        const result = this.api.updateWithHttpInfo(objectId, tag, archived, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Blog Tag object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Tag
     * @param objectId The Blog Tag id.
     * @param tag The JSON representation of the updated Blog Tag.
     * @param archived Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, tag: Tag, archived?: boolean, _options?: Configuration): Promise<Tag> {
        const result = this.api.update(objectId, tag, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Blog Tag objects identified in the request body.
     * Update a batch of Blog Tags
     * @param batchInputJsonNode A JSON array of the JSON representations of the updated Blog Tags.
     * @param archived Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public updateBatchWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        const result = this.api.updateBatchWithHttpInfo(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Blog Tag objects identified in the request body.
     * Update a batch of Blog Tags
     * @param batchInputJsonNode A JSON array of the JSON representations of the updated Blog Tags.
     * @param archived Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<BatchResponseTag | BatchResponseTagWithErrors> {
        const result = this.api.updateBatch(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Tag in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangsWithHttpInfo(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Tag in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.updateLangs(updateLanguagesRequestVNext, _options);
        return result.toPromise();
    }


}



