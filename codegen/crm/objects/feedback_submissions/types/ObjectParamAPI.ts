import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AssociatedId } from '../models/AssociatedId';
import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchInputSimplePublicObjectInput } from '../models/BatchInputSimplePublicObjectInput';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { CollectionResponseAssociatedId } from '../models/CollectionResponseAssociatedId';
import { CollectionResponseAssociatedIdForwardPaging } from '../models/CollectionResponseAssociatedIdForwardPaging';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { Filter } from '../models/Filter';
import { FilterGroup } from '../models/FilterGroup';
import { ForwardPaging } from '../models/ForwardPaging';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PreviousPage } from '../models/PreviousPage';
import { PublicMergeInput } from '../models/PublicMergeInput';
import { PublicObjectSearchRequest } from '../models/PublicObjectSearchRequest';
import { SimplePublicObject } from '../models/SimplePublicObject';
import { SimplePublicObjectBatchInput } from '../models/SimplePublicObjectBatchInput';
import { SimplePublicObjectId } from '../models/SimplePublicObjectId';
import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';
import { StandardError } from '../models/StandardError';
import { ValueWithTimestamp } from '../models/ValueWithTimestamp';

import { ObservableAssociationsApi } from "./ObservableAPI";
import { AssociationsApiRequestFactory, AssociationsApiResponseProcessor} from "../apis/AssociationsApi";

export interface AssociationsApiGetAllRequest {
    /**
     * 
     * @type string
     * @memberof AssociationsApigetAll
     */
    feedbackSubmissionId: string
    /**
     * 
     * @type string
     * @memberof AssociationsApigetAll
     */
    toObjectType: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof AssociationsApigetAll
     */
    after?: string
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof AssociationsApigetAll
     */
    limit?: number
}

export interface AssociationsApiSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationTypeRequest {
    /**
     * 
     * @type string
     * @memberof AssociationsApisubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType
     */
    feedbackSubmissionId: string
    /**
     * 
     * @type string
     * @memberof AssociationsApisubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType
     */
    toObjectType: string
    /**
     * 
     * @type string
     * @memberof AssociationsApisubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType
     */
    toObjectId: string
    /**
     * 
     * @type string
     * @memberof AssociationsApisubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType
     */
    associationType: string
}

export interface AssociationsApiSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType0Request {
    /**
     * 
     * @type string
     * @memberof AssociationsApisubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType_1
     */
    feedbackSubmissionId: string
    /**
     * 
     * @type string
     * @memberof AssociationsApisubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType_1
     */
    toObjectType: string
    /**
     * 
     * @type string
     * @memberof AssociationsApisubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType_1
     */
    toObjectId: string
    /**
     * 
     * @type string
     * @memberof AssociationsApisubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType_1
     */
    associationType: string
}

export class ObjectAssociationsApi {
    private api: ObservableAssociationsApi

    public constructor(configuration: Configuration, requestFactory?: AssociationsApiRequestFactory, responseProcessor?: AssociationsApiResponseProcessor) {
        this.api = new ObservableAssociationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List associations of a feedback submission by type
     * @param param the request object
     */
    public getAll(param: AssociationsApiGetAllRequest, options?: Configuration): Promise<CollectionResponseAssociatedIdForwardPaging> {
        return this.api.getAll(param.feedbackSubmissionId, param.toObjectType, param.after, param.limit,  options).toPromise();
    }

    /**
     * Associate a feedback submission with another object
     * @param param the request object
     */
    public submissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType(param: AssociationsApiSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationTypeRequest, options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        return this.api.submissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType(param.feedbackSubmissionId, param.toObjectType, param.toObjectId, param.associationType,  options).toPromise();
    }

    /**
     * Remove an association between two feedback submissions
     * @param param the request object
     */
    public submissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType_1(param: AssociationsApiSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType0Request, options?: Configuration): Promise<void> {
        return this.api.submissionsFeedbackSubmissionIdAssociationsToObjectTypeToObjectIdAssociationType_1(param.feedbackSubmissionId, param.toObjectType, param.toObjectId, param.associationType,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof BasicApigetById
     */
    feedbackSubmissionId: string
    /**
     * A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetById
     */
    properties?: Array<string>
    /**
     * A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetById
     */
    propertiesWithHistory?: Array<string>
    /**
     * A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetById
     */
    associations?: Array<string>
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BasicApigetById
     */
    archived?: boolean
    /**
     * The name of a property whose values are unique for this object type
     * @type string
     * @memberof BasicApigetById
     */
    idProperty?: string
}

export interface BasicApiGetPageRequest {
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof BasicApigetPage
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BasicApigetPage
     */
    after?: string
    /**
     * A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    properties?: Array<string>
    /**
     * A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    propertiesWithHistory?: Array<string>
    /**
     * A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    associations?: Array<string>
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BasicApigetPage
     */
    archived?: boolean
}

export interface BasicApiSubmissionsRequest {
    /**
     * 
     * @type SimplePublicObjectInput
     * @memberof BasicApisubmissions
     */
    simplePublicObjectInput: SimplePublicObjectInput
}

export interface BasicApiSubmissionsFeedbackSubmissionIdRequest {
    /**
     * 
     * @type string
     * @memberof BasicApisubmissionsFeedbackSubmissionId
     */
    feedbackSubmissionId: string
}

export interface BasicApiSubmissionsFeedbackSubmissionId0Request {
    /**
     * 
     * @type string
     * @memberof BasicApisubmissionsFeedbackSubmissionId_1
     */
    feedbackSubmissionId: string
    /**
     * 
     * @type SimplePublicObjectInput
     * @memberof BasicApisubmissionsFeedbackSubmissionId_1
     */
    simplePublicObjectInput: SimplePublicObjectInput
    /**
     * The name of a property whose values are unique for this object type
     * @type string
     * @memberof BasicApisubmissionsFeedbackSubmissionId_1
     */
    idProperty?: string
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read an Object identified by `{feedbackSubmissionId}`. `{feedbackSubmissionId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        return this.api.getById(param.feedbackSubmissionId, param.properties, param.propertiesWithHistory, param.associations, param.archived, param.idProperty,  options).toPromise();
    }

    /**
     * Read a page of feedback submissions. Control what is returned via the `properties` query param.
     * List
     * @param param the request object
     */
    public getPage(param: BasicApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
        return this.api.getPage(param.limit, param.after, param.properties, param.propertiesWithHistory, param.associations, param.archived,  options).toPromise();
    }

    /**
     * Create a feedback submission with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard feedback submissions is provided.
     * Create
     * @param param the request object
     */
    public submissions(param: BasicApiSubmissionsRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.submissions(param.simplePublicObjectInput,  options).toPromise();
    }

    /**
     * Move an Object identified by `{feedbackSubmissionId}` to the recycling bin.
     * Archive
     * @param param the request object
     */
    public submissionsFeedbackSubmissionId(param: BasicApiSubmissionsFeedbackSubmissionIdRequest, options?: Configuration): Promise<void> {
        return this.api.submissionsFeedbackSubmissionId(param.feedbackSubmissionId,  options).toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{feedbackSubmissionId}`. `{feedbackSubmissionId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param param the request object
     */
    public submissionsFeedbackSubmissionId_1(param: BasicApiSubmissionsFeedbackSubmissionId0Request, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.submissionsFeedbackSubmissionId_1(param.feedbackSubmissionId, param.simplePublicObjectInput, param.idProperty,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiReadBatchRequest {
    /**
     * 
     * @type BatchReadInputSimplePublicObjectId
     * @memberof BatchApireadBatch
     */
    batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BatchApireadBatch
     */
    archived?: boolean
}

export interface BatchApiSubmissionsBatchArchiveRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectId
     * @memberof BatchApisubmissionsBatchArchive
     */
    batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId
}

export interface BatchApiSubmissionsBatchCreateRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectInput
     * @memberof BatchApisubmissionsBatchCreate
     */
    batchInputSimplePublicObjectInput: BatchInputSimplePublicObjectInput
}

export interface BatchApiSubmissionsBatchUpdateRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectBatchInput
     * @memberof BatchApisubmissionsBatchUpdate
     */
    batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read a batch of feedback submissions by internal ID, or unique property values
     * @param param the request object
     */
    public readBatch(param: BatchApiReadBatchRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.readBatch(param.batchReadInputSimplePublicObjectId, param.archived,  options).toPromise();
    }

    /**
     * Archive a batch of feedback submissions by ID
     * @param param the request object
     */
    public submissionsBatchArchive(param: BatchApiSubmissionsBatchArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.submissionsBatchArchive(param.batchInputSimplePublicObjectId,  options).toPromise();
    }

    /**
     * Create a batch of feedback submissions
     * @param param the request object
     */
    public submissionsBatchCreate(param: BatchApiSubmissionsBatchCreateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.submissionsBatchCreate(param.batchInputSimplePublicObjectInput,  options).toPromise();
    }

    /**
     * Update a batch of feedback submissions
     * @param param the request object
     */
    public submissionsBatchUpdate(param: BatchApiSubmissionsBatchUpdateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.submissionsBatchUpdate(param.batchInputSimplePublicObjectBatchInput,  options).toPromise();
    }

}

import { ObservablePublicObjectApi } from "./ObservableAPI";
import { PublicObjectApiRequestFactory, PublicObjectApiResponseProcessor} from "../apis/PublicObjectApi";

export interface PublicObjectApiSubmissionsMergeRequest {
    /**
     * 
     * @type PublicMergeInput
     * @memberof PublicObjectApisubmissionsMerge
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
    public submissionsMerge(param: PublicObjectApiSubmissionsMergeRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.submissionsMerge(param.publicMergeInput,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiDoSearchRequest {
    /**
     * 
     * @type PublicObjectSearchRequest
     * @memberof SearchApidoSearch
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
    public doSearch(param: SearchApiDoSearchRequest, options?: Configuration): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
        return this.api.doSearch(param.publicObjectSearchRequest,  options).toPromise();
    }

}
