import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchInputTag } from '../models/BatchInputTag';
import { BatchResponseTagWithErrors } from '../models/BatchResponseTagWithErrors';
import { CollectionResponseWithTotalTagForwardPaging } from '../models/CollectionResponseWithTotalTagForwardPaging';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForwardPaging } from '../models/ForwardPaging';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { StandardError } from '../models/StandardError';
import { Tag } from '../models/Tag';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
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
     * Delete the Blog Tag objects identified in the request body. Note: This is not the same as the in-app `archive` function.
     * Archive a batch of Blog Tags
     * @param batchInputString The JSON array of Blog Tag ids.
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Promise<void> {
        const result = this.api.archiveBatch(batchInputString, _options);
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
    public createBatch(batchInputTag: BatchInputTag, _options?: Configuration): Promise<BatchResponseTagWithErrors | any> {
        const result = this.api.createBatch(batchInputTag, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param objectId The Blog Tag id.
     * @param archived Specifies whether to return archived Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public getById(objectId: string, archived?: boolean, _options?: Configuration): Promise<Tag> {
        const result = this.api.getById(objectId, archived, _options);
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
     * @param archived Specifies whether to return archived Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<CollectionResponseWithTotalTagForwardPaging> {
        const result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Tag objects identified in the request body.
     * Retrieve a batch of Blog Tags
     * @param batchInputString The JSON array of Blog Tag ids.
     * @param archived Specifies whether to return archived Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<BatchResponseTagWithErrors | any> {
        const result = this.api.readBatch(batchInputString, archived, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Blog Tag object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Tag
     * @param objectId The Blog Tag id.
     * @param tag The JSON representation of the updated Blog Tag.
     * @param archived Specifies whether to update archived Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, tag: Tag, archived?: boolean, _options?: Configuration): Promise<Tag> {
        const result = this.api.update(objectId, tag, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Blog Tag objects identified in the request body.
     * Update a batch of Blog Tags
     * @param batchInputJsonNode A JSON array of the JSON representations of the updated Blog Tags.
     * @param archived Specifies whether to update archived Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<BatchResponseTagWithErrors | any> {
        const result = this.api.updateBatch(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }


}



