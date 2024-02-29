import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchInputSimplePublicObjectInputForCreate } from '../models/BatchInputSimplePublicObjectInputForCreate';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
import { PublicGdprDeleteInput } from '../models/PublicGdprDeleteInput';
import { PublicMergeInput } from '../models/PublicMergeInput';
import { PublicObjectSearchRequest } from '../models/PublicObjectSearchRequest';
import { SimplePublicObject } from '../models/SimplePublicObject';
import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { SimplePublicObjectInputForCreate } from '../models/SimplePublicObjectInputForCreate';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';
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
    public archiveWithHttpInfo(objectType: string, objectId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(objectType, objectId, _options);
        return result.toPromise();
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
     * @param simplePublicObjectInputForCreate 
     */
    public createWithHttpInfo(objectType: string, simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: Configuration): Promise<HttpInfo<SimplePublicObject>> {
        const result = this.api.createWithHttpInfo(objectType, simplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }

    /**
     * Create a CRM object with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard objects is provided.
     * Create
     * @param objectType 
     * @param simplePublicObjectInputForCreate 
     */
    public create(objectType: string, simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.create(objectType, simplePublicObjectInputForCreate, _options);
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
    public getByIdWithHttpInfo(objectType: string, objectId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Promise<HttpInfo<SimplePublicObjectWithAssociations>> {
        const result = this.api.getByIdWithHttpInfo(objectType, objectId, properties, propertiesWithHistory, associations, archived, idProperty, _options);
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
    public getPageWithHttpInfo(objectType: string, limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>> {
        const result = this.api.getPageWithHttpInfo(objectType, limit, after, properties, propertiesWithHistory, associations, archived, _options);
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
    public updateWithHttpInfo(objectType: string, objectId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration): Promise<HttpInfo<SimplePublicObject>> {
        const result = this.api.updateWithHttpInfo(objectType, objectId, simplePublicObjectInput, idProperty, _options);
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
    public archiveWithHttpInfo(objectType: string, batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(objectType, batchInputSimplePublicObjectId, _options);
        return result.toPromise();
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
     * @param batchInputSimplePublicObjectInputForCreate 
     */
    public createWithHttpInfo(objectType: string, batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate, _options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        const result = this.api.createWithHttpInfo(objectType, batchInputSimplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }

    /**
     * Create a batch of objects
     * @param objectType 
     * @param batchInputSimplePublicObjectInputForCreate 
     */
    public create(objectType: string, batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.create(objectType, batchInputSimplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }

    /**
     * Read a batch of objects by internal ID, or unique property values
     * @param objectType 
     * @param batchReadInputSimplePublicObjectId 
     * @param archived Whether to return only results that have been archived.
     */
    public readWithHttpInfo(objectType: string, batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        const result = this.api.readWithHttpInfo(objectType, batchReadInputSimplePublicObjectId, archived, _options);
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
     * Update a batch of objects by internal ID, or unique property values
     * @param objectType 
     * @param batchInputSimplePublicObjectBatchInput 
     */
    public updateWithHttpInfo(objectType: string, batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        const result = this.api.updateWithHttpInfo(objectType, batchInputSimplePublicObjectBatchInput, _options);
        return result.toPromise();
    }

    /**
     * Update a batch of objects by internal ID, or unique property values
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
     * Permanently delete a contact and all associated content to follow GDPR. Use optional property \'idProperty\' set to \'email\' to identify contact by email address. If email address is not found, the email address will be added to a blocklist and prevent it from being used in the future.
     * GDPR DELETE
     * @param objectType 
     * @param publicGdprDeleteInput 
     */
    public purgeWithHttpInfo(objectType: string, publicGdprDeleteInput: PublicGdprDeleteInput, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.purgeWithHttpInfo(objectType, publicGdprDeleteInput, _options);
        return result.toPromise();
    }

    /**
     * Permanently delete a contact and all associated content to follow GDPR. Use optional property \'idProperty\' set to \'email\' to identify contact by email address. If email address is not found, the email address will be added to a blocklist and prevent it from being used in the future.
     * GDPR DELETE
     * @param objectType 
     * @param publicGdprDeleteInput 
     */
    public purge(objectType: string, publicGdprDeleteInput: PublicGdprDeleteInput, _options?: Configuration): Promise<void> {
        const result = this.api.purge(objectType, publicGdprDeleteInput, _options);
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
     * Merge two objects with same type
     * @param objectType 
     * @param publicMergeInput 
     */
    public mergeWithHttpInfo(objectType: string, publicMergeInput: PublicMergeInput, _options?: Configuration): Promise<HttpInfo<SimplePublicObject>> {
        const result = this.api.mergeWithHttpInfo(objectType, publicMergeInput, _options);
        return result.toPromise();
    }

    /**
     * Merge two objects with same type
     * @param objectType 
     * @param publicMergeInput 
     */
    public merge(objectType: string, publicMergeInput: PublicMergeInput, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.merge(objectType, publicMergeInput, _options);
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
    public doSearchWithHttpInfo(objectType: string, publicObjectSearchRequest: PublicObjectSearchRequest, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalSimplePublicObjectForwardPaging>> {
        const result = this.api.doSearchWithHttpInfo(objectType, publicObjectSearchRequest, _options);
        return result.toPromise();
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



