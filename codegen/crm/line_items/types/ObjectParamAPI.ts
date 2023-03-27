import { Configuration} from '../configuration'

import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchInputSimplePublicObjectInputForCreate } from '../models/BatchInputSimplePublicObjectInputForCreate';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
import { PublicMergeInput } from '../models/PublicMergeInput';
import { PublicObjectSearchRequest } from '../models/PublicObjectSearchRequest';
import { SimplePublicObject } from '../models/SimplePublicObject';
import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { SimplePublicObjectInputForCreate } from '../models/SimplePublicObjectInputForCreate';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiDeleteCrmV3ObjectsLineItemsLineItemIdRequest {
    /**
     * 
     * @type string
     * @memberof BasicApideleteCrmV3ObjectsLineItemsLineItemId
     */
    lineItemId: string
}

export interface BasicApiGetCrmV3ObjectsLineItemsRequest {
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof BasicApigetCrmV3ObjectsLineItems
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BasicApigetCrmV3ObjectsLineItems
     */
    after?: string
    /**
     * A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsLineItems
     */
    properties?: Array<string>
    /**
     * A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsLineItems
     */
    propertiesWithHistory?: Array<string>
    /**
     * A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsLineItems
     */
    associations?: Array<string>
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BasicApigetCrmV3ObjectsLineItems
     */
    archived?: boolean
}

export interface BasicApiGetCrmV3ObjectsLineItemsLineItemIdRequest {
    /**
     * 
     * @type string
     * @memberof BasicApigetCrmV3ObjectsLineItemsLineItemId
     */
    lineItemId: string
    /**
     * A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsLineItemsLineItemId
     */
    properties?: Array<string>
    /**
     * A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsLineItemsLineItemId
     */
    propertiesWithHistory?: Array<string>
    /**
     * A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsLineItemsLineItemId
     */
    associations?: Array<string>
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BasicApigetCrmV3ObjectsLineItemsLineItemId
     */
    archived?: boolean
    /**
     * The name of a property whose values are unique for this object type
     * @type string
     * @memberof BasicApigetCrmV3ObjectsLineItemsLineItemId
     */
    idProperty?: string
}

export interface BasicApiPatchCrmV3ObjectsLineItemsLineItemIdRequest {
    /**
     * 
     * @type string
     * @memberof BasicApipatchCrmV3ObjectsLineItemsLineItemId
     */
    lineItemId: string
    /**
     * 
     * @type SimplePublicObjectInput
     * @memberof BasicApipatchCrmV3ObjectsLineItemsLineItemId
     */
    simplePublicObjectInput: SimplePublicObjectInput
    /**
     * The name of a property whose values are unique for this object type
     * @type string
     * @memberof BasicApipatchCrmV3ObjectsLineItemsLineItemId
     */
    idProperty?: string
}

export interface BasicApiPostCrmV3ObjectsLineItemsRequest {
    /**
     * 
     * @type SimplePublicObjectInputForCreate
     * @memberof BasicApipostCrmV3ObjectsLineItems
     */
    simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Move an Object identified by `{lineItemId}` to the recycling bin.
     * Archive
     * @param param the request object
     */
    public deleteCrmV3ObjectsLineItemsLineItemId(param: BasicApiDeleteCrmV3ObjectsLineItemsLineItemIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCrmV3ObjectsLineItemsLineItemId(param.lineItemId,  options).toPromise();
    }

    /**
     * Read a page of line items. Control what is returned via the `properties` query param.
     * List
     * @param param the request object
     */
    public getCrmV3ObjectsLineItems(param: BasicApiGetCrmV3ObjectsLineItemsRequest = {}, options?: Configuration): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
        return this.api.getCrmV3ObjectsLineItems(param.limit, param.after, param.properties, param.propertiesWithHistory, param.associations, param.archived,  options).toPromise();
    }

    /**
     * Read an Object identified by `{lineItemId}`. `{lineItemId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param param the request object
     */
    public getCrmV3ObjectsLineItemsLineItemId(param: BasicApiGetCrmV3ObjectsLineItemsLineItemIdRequest, options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        return this.api.getCrmV3ObjectsLineItemsLineItemId(param.lineItemId, param.properties, param.propertiesWithHistory, param.associations, param.archived, param.idProperty,  options).toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{lineItemId}`. `{lineItemId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param param the request object
     */
    public patchCrmV3ObjectsLineItemsLineItemId(param: BasicApiPatchCrmV3ObjectsLineItemsLineItemIdRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.patchCrmV3ObjectsLineItemsLineItemId(param.lineItemId, param.simplePublicObjectInput, param.idProperty,  options).toPromise();
    }

    /**
     * Create a line item with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard line items is provided.
     * Create
     * @param param the request object
     */
    public postCrmV3ObjectsLineItems(param: BasicApiPostCrmV3ObjectsLineItemsRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.postCrmV3ObjectsLineItems(param.simplePublicObjectInputForCreate,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiPostCrmV3ObjectsLineItemsBatchArchiveRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectId
     * @memberof BatchApipostCrmV3ObjectsLineItemsBatchArchive
     */
    batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId
}

export interface BatchApiPostCrmV3ObjectsLineItemsBatchCreateRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectInputForCreate
     * @memberof BatchApipostCrmV3ObjectsLineItemsBatchCreate
     */
    batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate
}

export interface BatchApiPostCrmV3ObjectsLineItemsBatchReadRequest {
    /**
     * 
     * @type BatchReadInputSimplePublicObjectId
     * @memberof BatchApipostCrmV3ObjectsLineItemsBatchRead
     */
    batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BatchApipostCrmV3ObjectsLineItemsBatchRead
     */
    archived?: boolean
}

export interface BatchApiPostCrmV3ObjectsLineItemsBatchUpdateRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectBatchInput
     * @memberof BatchApipostCrmV3ObjectsLineItemsBatchUpdate
     */
    batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a batch of line items by ID
     * @param param the request object
     */
    public postCrmV3ObjectsLineItemsBatchArchive(param: BatchApiPostCrmV3ObjectsLineItemsBatchArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.postCrmV3ObjectsLineItemsBatchArchive(param.batchInputSimplePublicObjectId,  options).toPromise();
    }

    /**
     * Create a batch of line items
     * @param param the request object
     */
    public postCrmV3ObjectsLineItemsBatchCreate(param: BatchApiPostCrmV3ObjectsLineItemsBatchCreateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.postCrmV3ObjectsLineItemsBatchCreate(param.batchInputSimplePublicObjectInputForCreate,  options).toPromise();
    }

    /**
     * Read a batch of line items by internal ID, or unique property values
     * @param param the request object
     */
    public postCrmV3ObjectsLineItemsBatchRead(param: BatchApiPostCrmV3ObjectsLineItemsBatchReadRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.postCrmV3ObjectsLineItemsBatchRead(param.batchReadInputSimplePublicObjectId, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of line items
     * @param param the request object
     */
    public postCrmV3ObjectsLineItemsBatchUpdate(param: BatchApiPostCrmV3ObjectsLineItemsBatchUpdateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.postCrmV3ObjectsLineItemsBatchUpdate(param.batchInputSimplePublicObjectBatchInput,  options).toPromise();
    }

}

import { ObservablePublicObjectApi } from "./ObservableAPI";
import { PublicObjectApiRequestFactory, PublicObjectApiResponseProcessor} from "../apis/PublicObjectApi";

export interface PublicObjectApiPostCrmV3ObjectsLineItemsMergeRequest {
    /**
     * 
     * @type PublicMergeInput
     * @memberof PublicObjectApipostCrmV3ObjectsLineItemsMerge
     */
    publicMergeInput: PublicMergeInput
}

export class ObjectPublicObjectApi {
    private api: ObservablePublicObjectApi

    public constructor(configuration: Configuration, requestFactory?: PublicObjectApiRequestFactory, responseProcessor?: PublicObjectApiResponseProcessor) {
        this.api = new ObservablePublicObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Merge two line items with same type
     * @param param the request object
     */
    public postCrmV3ObjectsLineItemsMerge(param: PublicObjectApiPostCrmV3ObjectsLineItemsMergeRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.postCrmV3ObjectsLineItemsMerge(param.publicMergeInput,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiPostCrmV3ObjectsLineItemsSearchRequest {
    /**
     * 
     * @type PublicObjectSearchRequest
     * @memberof SearchApipostCrmV3ObjectsLineItemsSearch
     */
    publicObjectSearchRequest: PublicObjectSearchRequest
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public postCrmV3ObjectsLineItemsSearch(param: SearchApiPostCrmV3ObjectsLineItemsSearchRequest, options?: Configuration): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
        return this.api.postCrmV3ObjectsLineItemsSearch(param.publicObjectSearchRequest,  options).toPromise();
    }

}
