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
import { ObservableAssociationsApi } from './ObservableAPI';

import { AssociationsApiRequestFactory, AssociationsApiResponseProcessor} from "../apis/AssociationsApi";
export class PromiseAssociationsApi {
    private api: ObservableAssociationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssociationsApiRequestFactory,
        responseProcessor?: AssociationsApiResponseProcessor
    ) {
        this.api = new ObservableAssociationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove an association between two tickets
     * @param ticketId 
     * @param toObjectType 
     * @param toObjectId 
     * @param associationType 
     */
    public archive(ticketId: string, toObjectType: string, toObjectId: string, associationType: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(ticketId, toObjectType, toObjectId, associationType, _options);
        return result.toPromise();
    }

    /**
     * Associate a ticket with another object
     * @param ticketId 
     * @param toObjectType 
     * @param toObjectId 
     * @param associationType 
     */
    public create(ticketId: string, toObjectType: string, toObjectId: string, associationType: string, _options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        const result = this.api.create(ticketId, toObjectType, toObjectId, associationType, _options);
        return result.toPromise();
    }

    /**
     * List associations of a ticket by type
     * @param ticketId 
     * @param toObjectType 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public getAll(ticketId: string, toObjectType: string, after?: string, limit?: number, _options?: Configuration): Promise<CollectionResponseAssociatedIdForwardPaging> {
        const result = this.api.getAll(ticketId, toObjectType, after, limit, _options);
        return result.toPromise();
    }


}



import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Move an Object identified by `{ticketId}` to the recycling bin.
     * Archive
     * @param ticketId 
     */
    public archive(ticketId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(ticketId, _options);
        return result.toPromise();
    }

    /**
     * Create a ticket with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard tickets is provided.
     * Create
     * @param simplePublicObjectInput 
     */
    public create(simplePublicObjectInput: SimplePublicObjectInput, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.create(simplePublicObjectInput, _options);
        return result.toPromise();
    }

    /**
     * Read an Object identified by `{ticketId}`. `{ticketId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param ticketId 
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param propertiesWithHistory A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public getById(ticketId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        const result = this.api.getById(ticketId, properties, propertiesWithHistory, associations, archived, idProperty, _options);
        return result.toPromise();
    }

    /**
     * Read a page of tickets. Control what is returned via the `properties` query param.
     * List
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param propertiesWithHistory A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     */
    public getPage(limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: Configuration): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
        const result = this.api.getPage(limit, after, properties, propertiesWithHistory, associations, archived, _options);
        return result.toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{ticketId}`. `{ticketId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param ticketId 
     * @param simplePublicObjectInput 
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public update(ticketId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.update(ticketId, simplePublicObjectInput, idProperty, _options);
        return result.toPromise();
    }


}



import { ObservableBatchApi } from './ObservableAPI';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class PromiseBatchApi {
    private api: ObservableBatchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a batch of tickets by ID
     * @param batchInputSimplePublicObjectId 
     */
    public archive(batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: Configuration): Promise<void> {
        const result = this.api.archive(batchInputSimplePublicObjectId, _options);
        return result.toPromise();
    }

    /**
     * Create a batch of tickets
     * @param batchInputSimplePublicObjectInput 
     */
    public create(batchInputSimplePublicObjectInput: BatchInputSimplePublicObjectInput, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.create(batchInputSimplePublicObjectInput, _options);
        return result.toPromise();
    }

    /**
     * Read a batch of tickets by internal ID, or unique property values
     * @param batchReadInputSimplePublicObjectId 
     * @param archived Whether to return only results that have been archived.
     */
    public read(batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.read(batchReadInputSimplePublicObjectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Update a batch of tickets
     * @param batchInputSimplePublicObjectBatchInput 
     */
    public update(batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.update(batchInputSimplePublicObjectBatchInput, _options);
        return result.toPromise();
    }


}



import { ObservablePublicObjectApi } from './ObservableAPI';

import { PublicObjectApiRequestFactory, PublicObjectApiResponseProcessor} from "../apis/PublicObjectApi";
export class PromisePublicObjectApi {
    private api: ObservablePublicObjectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicObjectApiRequestFactory,
        responseProcessor?: PublicObjectApiResponseProcessor
    ) {
        this.api = new ObservablePublicObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Merge two tickets with same type
     * @param publicMergeInput 
     */
    public merge(publicMergeInput: PublicMergeInput, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.merge(publicMergeInput, _options);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param publicObjectSearchRequest 
     */
    public doSearch(publicObjectSearchRequest: PublicObjectSearchRequest, _options?: Configuration): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
        const result = this.api.doSearch(publicObjectSearchRequest, _options);
        return result.toPromise();
    }


}



