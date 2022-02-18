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
import { PublicGdprDeleteInput } from '../models/PublicGdprDeleteInput';
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
     * Remove an association between two objects
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param toObjectId 
     * @param associationType 
     */
    public archive(objectType: string, objectId: string, toObjectType: string, toObjectId: string, associationType: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectType, objectId, toObjectType, toObjectId, associationType, _options);
        return result.toPromise();
    }

    /**
     * Associate an object with another object
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param toObjectId 
     * @param associationType 
     */
    public create(objectType: string, objectId: string, toObjectType: string, toObjectId: string, associationType: string, _options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        const result = this.api.create(objectType, objectId, toObjectType, toObjectId, associationType, _options);
        return result.toPromise();
    }

    /**
     * List associations of an object by type
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public getAll(objectType: string, objectId: string, toObjectType: string, after?: string, limit?: number, _options?: Configuration): Promise<CollectionResponseAssociatedIdForwardPaging> {
        const result = this.api.getAll(objectType, objectId, toObjectType, after, limit, _options);
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
     * Move an Object identified by `{objectId}` to the recycling bin.
     * Archive
     * @param objectType 
     * @param objectId 
     */
    public archive(objectType: string, objectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectType, objectId, _options);
        return result.toPromise();
    }

    /**
     * Create a CRM object with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard objects is provided.
     * Create
     * @param objectType 
     * @param simplePublicObjectInput 
     */
    public create(objectType: string, simplePublicObjectInput: SimplePublicObjectInput, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.create(objectType, simplePublicObjectInput, _options);
        return result.toPromise();
    }

    /**
     * Read an Object identified by `{objectId}`. `{objectId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param objectType 
     * @param objectId 
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param propertiesWithHistory A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public getById(objectType: string, objectId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        const result = this.api.getById(objectType, objectId, properties, propertiesWithHistory, associations, archived, idProperty, _options);
        return result.toPromise();
    }

    /**
     * Read a page of objects. Control what is returned via the `properties` query param.
     * List
     * @param objectType 
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param propertiesWithHistory A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     */
    public getPage(objectType: string, limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: Configuration): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
        const result = this.api.getPage(objectType, limit, after, properties, propertiesWithHistory, associations, archived, _options);
        return result.toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{objectId}`. `{objectId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param objectType 
     * @param objectId 
     * @param simplePublicObjectInput 
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public update(objectType: string, objectId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.update(objectType, objectId, simplePublicObjectInput, idProperty, _options);
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
     * Archive a batch of objects by ID
     * @param objectType 
     * @param batchInputSimplePublicObjectId 
     */
    public archive(objectType: string, batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectType, batchInputSimplePublicObjectId, _options);
        return result.toPromise();
    }

    /**
     * Create a batch of objects
     * @param objectType 
     * @param batchInputSimplePublicObjectInput 
     */
    public create(objectType: string, batchInputSimplePublicObjectInput: BatchInputSimplePublicObjectInput, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.create(objectType, batchInputSimplePublicObjectInput, _options);
        return result.toPromise();
    }

    /**
     * Read a batch of objects by internal ID, or unique property values
     * @param objectType 
     * @param batchReadInputSimplePublicObjectId 
     * @param archived Whether to return only results that have been archived.
     */
    public read(objectType: string, batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.read(objectType, batchReadInputSimplePublicObjectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Update a batch of objects
     * @param objectType 
     * @param batchInputSimplePublicObjectBatchInput 
     */
    public update(objectType: string, batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.update(objectType, batchInputSimplePublicObjectBatchInput, _options);
        return result.toPromise();
    }


}



import { ObservableGDPRApi } from './ObservableAPI';

import { GDPRApiRequestFactory, GDPRApiResponseProcessor} from "../apis/GDPRApi";
export class PromiseGDPRApi {
    private api: ObservableGDPRApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GDPRApiRequestFactory,
        responseProcessor?: GDPRApiResponseProcessor
    ) {
        this.api = new ObservableGDPRApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Permanently delete a contact and all associated content to follow GDPR. Use optional property 'idProperty' set to 'email' to identify contact by email address. If email address is not found, the email address will be added to a blocklist and prevent it from being used in the future.
     * GDPR DELETE
     * @param objectType 
     * @param publicGdprDeleteInput 
     */
    public postCrmV3ObjectsObjectTypeGdprDelete(objectType: string, publicGdprDeleteInput: PublicGdprDeleteInput, _options?: Configuration): Promise<void> {
        const result = this.api.postCrmV3ObjectsObjectTypeGdprDelete(objectType, publicGdprDeleteInput, _options);
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
     * @param objectType 
     * @param publicObjectSearchRequest 
     */
    public doSearch(objectType: string, publicObjectSearchRequest: PublicObjectSearchRequest, _options?: Configuration): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
        const result = this.api.doSearch(objectType, publicObjectSearchRequest, _options);
        return result.toPromise();
    }


}



