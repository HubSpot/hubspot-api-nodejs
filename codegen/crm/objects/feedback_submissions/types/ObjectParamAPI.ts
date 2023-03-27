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

export interface BasicApiDeleteCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionIdRequest {
    /**
     * 
     * @type string
     * @memberof BasicApideleteCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId
     */
    feedbackSubmissionId: string
}

export interface BasicApiGetCrmV3ObjectsFeedbackSubmissionsRequest {
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissions
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissions
     */
    after?: string
    /**
     * A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissions
     */
    properties?: Array<string>
    /**
     * A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissions
     */
    propertiesWithHistory?: Array<string>
    /**
     * A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissions
     */
    associations?: Array<string>
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissions
     */
    archived?: boolean
}

export interface BasicApiGetCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionIdRequest {
    /**
     * 
     * @type string
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId
     */
    feedbackSubmissionId: string
    /**
     * A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId
     */
    properties?: Array<string>
    /**
     * A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId
     */
    propertiesWithHistory?: Array<string>
    /**
     * A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId
     */
    associations?: Array<string>
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId
     */
    archived?: boolean
    /**
     * The name of a property whose values are unique for this object type
     * @type string
     * @memberof BasicApigetCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId
     */
    idProperty?: string
}

export interface BasicApiPatchCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionIdRequest {
    /**
     * 
     * @type string
     * @memberof BasicApipatchCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId
     */
    feedbackSubmissionId: string
    /**
     * 
     * @type SimplePublicObjectInput
     * @memberof BasicApipatchCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId
     */
    simplePublicObjectInput: SimplePublicObjectInput
    /**
     * The name of a property whose values are unique for this object type
     * @type string
     * @memberof BasicApipatchCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId
     */
    idProperty?: string
}

export interface BasicApiPostCrmV3ObjectsFeedbackSubmissionsRequest {
    /**
     * 
     * @type SimplePublicObjectInputForCreate
     * @memberof BasicApipostCrmV3ObjectsFeedbackSubmissions
     */
    simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Move an Object identified by `{feedbackSubmissionId}` to the recycling bin.
     * Archive
     * @param param the request object
     */
    public deleteCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId(param: BasicApiDeleteCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId(param.feedbackSubmissionId,  options).toPromise();
    }

    /**
     * Read a page of feedback submissions. Control what is returned via the `properties` query param.
     * List
     * @param param the request object
     */
    public getCrmV3ObjectsFeedbackSubmissions(param: BasicApiGetCrmV3ObjectsFeedbackSubmissionsRequest = {}, options?: Configuration): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
        return this.api.getCrmV3ObjectsFeedbackSubmissions(param.limit, param.after, param.properties, param.propertiesWithHistory, param.associations, param.archived,  options).toPromise();
    }

    /**
     * Read an Object identified by `{feedbackSubmissionId}`. `{feedbackSubmissionId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param param the request object
     */
    public getCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId(param: BasicApiGetCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionIdRequest, options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        return this.api.getCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId(param.feedbackSubmissionId, param.properties, param.propertiesWithHistory, param.associations, param.archived, param.idProperty,  options).toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{feedbackSubmissionId}`. `{feedbackSubmissionId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param param the request object
     */
    public patchCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId(param: BasicApiPatchCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionIdRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.patchCrmV3ObjectsFeedbackSubmissionsFeedbackSubmissionId(param.feedbackSubmissionId, param.simplePublicObjectInput, param.idProperty,  options).toPromise();
    }

    /**
     * Create a feedback submission with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard feedback submissions is provided.
     * Create
     * @param param the request object
     */
    public postCrmV3ObjectsFeedbackSubmissions(param: BasicApiPostCrmV3ObjectsFeedbackSubmissionsRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.postCrmV3ObjectsFeedbackSubmissions(param.simplePublicObjectInputForCreate,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiPostCrmV3ObjectsFeedbackSubmissionsBatchArchiveRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectId
     * @memberof BatchApipostCrmV3ObjectsFeedbackSubmissionsBatchArchive
     */
    batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId
}

export interface BatchApiPostCrmV3ObjectsFeedbackSubmissionsBatchCreateRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectInputForCreate
     * @memberof BatchApipostCrmV3ObjectsFeedbackSubmissionsBatchCreate
     */
    batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate
}

export interface BatchApiPostCrmV3ObjectsFeedbackSubmissionsBatchReadRequest {
    /**
     * 
     * @type BatchReadInputSimplePublicObjectId
     * @memberof BatchApipostCrmV3ObjectsFeedbackSubmissionsBatchRead
     */
    batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BatchApipostCrmV3ObjectsFeedbackSubmissionsBatchRead
     */
    archived?: boolean
}

export interface BatchApiPostCrmV3ObjectsFeedbackSubmissionsBatchUpdateRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectBatchInput
     * @memberof BatchApipostCrmV3ObjectsFeedbackSubmissionsBatchUpdate
     */
    batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a batch of feedback submissions by ID
     * @param param the request object
     */
    public postCrmV3ObjectsFeedbackSubmissionsBatchArchive(param: BatchApiPostCrmV3ObjectsFeedbackSubmissionsBatchArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.postCrmV3ObjectsFeedbackSubmissionsBatchArchive(param.batchInputSimplePublicObjectId,  options).toPromise();
    }

    /**
     * Create a batch of feedback submissions
     * @param param the request object
     */
    public postCrmV3ObjectsFeedbackSubmissionsBatchCreate(param: BatchApiPostCrmV3ObjectsFeedbackSubmissionsBatchCreateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.postCrmV3ObjectsFeedbackSubmissionsBatchCreate(param.batchInputSimplePublicObjectInputForCreate,  options).toPromise();
    }

    /**
     * Read a batch of feedback submissions by internal ID, or unique property values
     * @param param the request object
     */
    public postCrmV3ObjectsFeedbackSubmissionsBatchRead(param: BatchApiPostCrmV3ObjectsFeedbackSubmissionsBatchReadRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.postCrmV3ObjectsFeedbackSubmissionsBatchRead(param.batchReadInputSimplePublicObjectId, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of feedback submissions
     * @param param the request object
     */
    public postCrmV3ObjectsFeedbackSubmissionsBatchUpdate(param: BatchApiPostCrmV3ObjectsFeedbackSubmissionsBatchUpdateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.postCrmV3ObjectsFeedbackSubmissionsBatchUpdate(param.batchInputSimplePublicObjectBatchInput,  options).toPromise();
    }

}

import { ObservablePublicObjectApi } from "./ObservableAPI";
import { PublicObjectApiRequestFactory, PublicObjectApiResponseProcessor} from "../apis/PublicObjectApi";

export interface PublicObjectApiPostCrmV3ObjectsFeedbackSubmissionsMergeRequest {
    /**
     * 
     * @type PublicMergeInput
     * @memberof PublicObjectApipostCrmV3ObjectsFeedbackSubmissionsMerge
     */
    publicMergeInput: PublicMergeInput
}

export class ObjectPublicObjectApi {
    private api: ObservablePublicObjectApi

    public constructor(configuration: Configuration, requestFactory?: PublicObjectApiRequestFactory, responseProcessor?: PublicObjectApiResponseProcessor) {
        this.api = new ObservablePublicObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Merge two feedback submissions with same type
     * @param param the request object
     */
    public postCrmV3ObjectsFeedbackSubmissionsMerge(param: PublicObjectApiPostCrmV3ObjectsFeedbackSubmissionsMergeRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.postCrmV3ObjectsFeedbackSubmissionsMerge(param.publicMergeInput,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiPostCrmV3ObjectsFeedbackSubmissionsSearchRequest {
    /**
     * 
     * @type PublicObjectSearchRequest
     * @memberof SearchApipostCrmV3ObjectsFeedbackSubmissionsSearch
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
    public postCrmV3ObjectsFeedbackSubmissionsSearch(param: SearchApiPostCrmV3ObjectsFeedbackSubmissionsSearchRequest, options?: Configuration): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
        return this.api.postCrmV3ObjectsFeedbackSubmissionsSearch(param.publicObjectSearchRequest,  options).toPromise();
    }

}
