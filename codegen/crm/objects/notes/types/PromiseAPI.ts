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
     * Move an Object identified by `{noteId}` to the recycling bin.
     * Archive
     * @param noteId 
     */
    public archiveWithHttpInfo(noteId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(noteId, _options);
        return result.toPromise();
    }

    /**
     * Move an Object identified by `{noteId}` to the recycling bin.
     * Archive
     * @param noteId 
     */
    public archive(noteId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(noteId, _options);
        return result.toPromise();
    }

    /**
     * Create a note with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard notes is provided.
     * Create
     * @param simplePublicObjectInputForCreate 
     */
    public createWithHttpInfo(simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: Configuration): Promise<HttpInfo<SimplePublicObject>> {
        const result = this.api.createWithHttpInfo(simplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }

    /**
     * Create a note with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard notes is provided.
     * Create
     * @param simplePublicObjectInputForCreate 
     */
    public create(simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.create(simplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }

    /**
     * Read an Object identified by `{noteId}`. `{noteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param noteId 
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param propertiesWithHistory A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public getByIdWithHttpInfo(noteId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Promise<HttpInfo<SimplePublicObjectWithAssociations>> {
        const result = this.api.getByIdWithHttpInfo(noteId, properties, propertiesWithHistory, associations, archived, idProperty, _options);
        return result.toPromise();
    }

    /**
     * Read an Object identified by `{noteId}`. `{noteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param noteId 
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param propertiesWithHistory A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public getById(noteId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        const result = this.api.getById(noteId, properties, propertiesWithHistory, associations, archived, idProperty, _options);
        return result.toPromise();
    }

    /**
     * Read a page of notes. Control what is returned via the `properties` query param.
     * List
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param propertiesWithHistory A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     */
    public getPageWithHttpInfo(limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>> {
        const result = this.api.getPageWithHttpInfo(limit, after, properties, propertiesWithHistory, associations, archived, _options);
        return result.toPromise();
    }

    /**
     * Read a page of notes. Control what is returned via the `properties` query param.
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
     * Perform a partial update of an Object identified by `{noteId}`. `{noteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param noteId 
     * @param simplePublicObjectInput 
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public updateWithHttpInfo(noteId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration): Promise<HttpInfo<SimplePublicObject>> {
        const result = this.api.updateWithHttpInfo(noteId, simplePublicObjectInput, idProperty, _options);
        return result.toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{noteId}`. `{noteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param noteId 
     * @param simplePublicObjectInput 
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public update(noteId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.update(noteId, simplePublicObjectInput, idProperty, _options);
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
     * Archive a batch of notes by ID
     * @param batchInputSimplePublicObjectId 
     */
    public archiveWithHttpInfo(batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(batchInputSimplePublicObjectId, _options);
        return result.toPromise();
    }

    /**
     * Archive a batch of notes by ID
     * @param batchInputSimplePublicObjectId 
     */
    public archive(batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: Configuration): Promise<void> {
        const result = this.api.archive(batchInputSimplePublicObjectId, _options);
        return result.toPromise();
    }

    /**
     * Create a batch of notes
     * @param batchInputSimplePublicObjectInputForCreate 
     */
    public createWithHttpInfo(batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate, _options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        const result = this.api.createWithHttpInfo(batchInputSimplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }

    /**
     * Create a batch of notes
     * @param batchInputSimplePublicObjectInputForCreate 
     */
    public create(batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.create(batchInputSimplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }

    /**
     * Read a batch of notes by internal ID, or unique property values
     * @param batchReadInputSimplePublicObjectId 
     * @param archived Whether to return only results that have been archived.
     */
    public readWithHttpInfo(batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        const result = this.api.readWithHttpInfo(batchReadInputSimplePublicObjectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Read a batch of notes by internal ID, or unique property values
     * @param batchReadInputSimplePublicObjectId 
     * @param archived Whether to return only results that have been archived.
     */
    public read(batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.read(batchReadInputSimplePublicObjectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Update a batch of notes
     * @param batchInputSimplePublicObjectBatchInput 
     */
    public updateWithHttpInfo(batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        const result = this.api.updateWithHttpInfo(batchInputSimplePublicObjectBatchInput, _options);
        return result.toPromise();
    }

    /**
     * Update a batch of notes
     * @param batchInputSimplePublicObjectBatchInput 
     */
    public update(batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.update(batchInputSimplePublicObjectBatchInput, _options);
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
     * @param publicGdprDeleteInput 
     */
    public purgeWithHttpInfo(publicGdprDeleteInput: PublicGdprDeleteInput, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.purgeWithHttpInfo(publicGdprDeleteInput, _options);
        return result.toPromise();
    }

    /**
     * Permanently delete a contact and all associated content to follow GDPR. Use optional property \'idProperty\' set to \'email\' to identify contact by email address. If email address is not found, the email address will be added to a blocklist and prevent it from being used in the future.
     * GDPR DELETE
     * @param publicGdprDeleteInput 
     */
    public purge(publicGdprDeleteInput: PublicGdprDeleteInput, _options?: Configuration): Promise<void> {
        const result = this.api.purge(publicGdprDeleteInput, _options);
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
     * Merge two notes with same type
     * @param publicMergeInput 
     */
    public mergeWithHttpInfo(publicMergeInput: PublicMergeInput, _options?: Configuration): Promise<HttpInfo<SimplePublicObject>> {
        const result = this.api.mergeWithHttpInfo(publicMergeInput, _options);
        return result.toPromise();
    }

    /**
     * Merge two notes with same type
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
    public doSearchWithHttpInfo(publicObjectSearchRequest: PublicObjectSearchRequest, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalSimplePublicObjectForwardPaging>> {
        const result = this.api.doSearchWithHttpInfo(publicObjectSearchRequest, _options);
        return result.toPromise();
    }

    /**
     * @param publicObjectSearchRequest 
     */
    public doSearch(publicObjectSearchRequest: PublicObjectSearchRequest, _options?: Configuration): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
        const result = this.api.doSearch(publicObjectSearchRequest, _options);
        return result.toPromise();
    }


}



