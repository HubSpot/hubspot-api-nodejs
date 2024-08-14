import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectBatchInputUpsert } from '../models/BatchInputSimplePublicObjectBatchInputUpsert';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchInputSimplePublicObjectInputForCreate } from '../models/BatchInputSimplePublicObjectInputForCreate';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
import { PublicObjectSearchRequest } from '../models/PublicObjectSearchRequest';
import { SimplePublicObject } from '../models/SimplePublicObject';
import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { SimplePublicObjectInputForCreate } from '../models/SimplePublicObjectInputForCreate';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof BasicApiarchive
     */
    leadsId: string
}

export interface BasicApiCreateRequest {
    /**
     * 
     * @type SimplePublicObjectInputForCreate
     * @memberof BasicApicreate
     */
    simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate
}

export interface BasicApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof BasicApigetById
     */
    leadsId: string
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
     * The name of a property whose values are unique for this object
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

export interface BasicApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof BasicApiupdate
     */
    leadsId: string
    /**
     * 
     * @type SimplePublicObjectInput
     * @memberof BasicApiupdate
     */
    simplePublicObjectInput: SimplePublicObjectInput
    /**
     * The name of a property whose values are unique for this object
     * @type string
     * @memberof BasicApiupdate
     */
    idProperty?: string
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Move an Object identified by `{leadsId}` to the recycling bin.
     * Archive
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.leadsId,  options).toPromise();
    }

    /**
     * Move an Object identified by `{leadsId}` to the recycling bin.
     * Archive
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.leadsId,  options).toPromise();
    }

    /**
     * Create a lead with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard leads is provided.
     * Create
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: Configuration): Promise<HttpInfo<SimplePublicObject>> {
        return this.api.createWithHttpInfo(param.simplePublicObjectInputForCreate,  options).toPromise();
    }

    /**
     * Create a lead with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard leads is provided.
     * Create
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.create(param.simplePublicObjectInputForCreate,  options).toPromise();
    }

    /**
     * Read an Object identified by `{leadsId}`. `{leadsId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<SimplePublicObjectWithAssociations>> {
        return this.api.getByIdWithHttpInfo(param.leadsId, param.properties, param.propertiesWithHistory, param.associations, param.archived, param.idProperty,  options).toPromise();
    }

    /**
     * Read an Object identified by `{leadsId}`. `{leadsId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        return this.api.getById(param.leadsId, param.properties, param.propertiesWithHistory, param.associations, param.archived, param.idProperty,  options).toPromise();
    }

    /**
     * Read a page of leads. Control what is returned via the `properties` query param.
     * List
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BasicApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.limit, param.after, param.properties, param.propertiesWithHistory, param.associations, param.archived,  options).toPromise();
    }

    /**
     * Read a page of leads. Control what is returned via the `properties` query param.
     * List
     * @param param the request object
     */
    public getPage(param: BasicApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
        return this.api.getPage(param.limit, param.after, param.properties, param.propertiesWithHistory, param.associations, param.archived,  options).toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{leadsId}`or optionally a unique property value as specified by the `idProperty` query param. `{leadsId}` refers to the internal object ID by default, and the `idProperty` query param refers to a property whose values are unique for the object. Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.
     * Update
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: Configuration): Promise<HttpInfo<SimplePublicObject>> {
        return this.api.updateWithHttpInfo(param.leadsId, param.simplePublicObjectInput, param.idProperty,  options).toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{leadsId}`or optionally a unique property value as specified by the `idProperty` query param. `{leadsId}` refers to the internal object ID by default, and the `idProperty` query param refers to a property whose values are unique for the object. Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.
     * Update
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.update(param.leadsId, param.simplePublicObjectInput, param.idProperty,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiArchiveRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectId
     * @memberof BatchApiarchive
     */
    batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId
}

export interface BatchApiCreateRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectInputForCreate
     * @memberof BatchApicreate
     */
    batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate
}

export interface BatchApiReadRequest {
    /**
     * 
     * @type BatchReadInputSimplePublicObjectId
     * @memberof BatchApiread
     */
    batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BatchApiread
     */
    archived?: boolean
}

export interface BatchApiUpdateRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectBatchInput
     * @memberof BatchApiupdate
     */
    batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput
}

export interface BatchApiUpsertRequest {
    /**
     * 
     * @type BatchInputSimplePublicObjectBatchInputUpsert
     * @memberof BatchApiupsert
     */
    batchInputSimplePublicObjectBatchInputUpsert: BatchInputSimplePublicObjectBatchInputUpsert
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a batch of leads by ID
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.batchInputSimplePublicObjectId,  options).toPromise();
    }

    /**
     * Archive a batch of leads by ID
     * @param param the request object
     */
    public archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.batchInputSimplePublicObjectId,  options).toPromise();
    }

    /**
     * Create a batch of leads
     * @param param the request object
     */
    public createWithHttpInfo(param: BatchApiCreateRequest, options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        return this.api.createWithHttpInfo(param.batchInputSimplePublicObjectInputForCreate,  options).toPromise();
    }

    /**
     * Create a batch of leads
     * @param param the request object
     */
    public create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.create(param.batchInputSimplePublicObjectInputForCreate,  options).toPromise();
    }

    /**
     * Read a batch of leads by internal ID, or unique property values
     * @param param the request object
     */
    public readWithHttpInfo(param: BatchApiReadRequest, options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        return this.api.readWithHttpInfo(param.batchReadInputSimplePublicObjectId, param.archived,  options).toPromise();
    }

    /**
     * Read a batch of leads by internal ID, or unique property values
     * @param param the request object
     */
    public read(param: BatchApiReadRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.read(param.batchReadInputSimplePublicObjectId, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of leads by internal ID, or unique property values
     * @param param the request object
     */
    public updateWithHttpInfo(param: BatchApiUpdateRequest, options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        return this.api.updateWithHttpInfo(param.batchInputSimplePublicObjectBatchInput,  options).toPromise();
    }

    /**
     * Update a batch of leads by internal ID, or unique property values
     * @param param the request object
     */
    public update(param: BatchApiUpdateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.update(param.batchInputSimplePublicObjectBatchInput,  options).toPromise();
    }

    /**
     * Create or update records identified by `{leadsId}` or optionally a unique property value as specified by the `idProperty` query param. `{leadsId}` refers to the internal object ID by default, and the `idProperty` query param refers to a property whose values are unique for the object.
     * Create or update a batch of leads by unique property values
     * @param param the request object
     */
    public upsertWithHttpInfo(param: BatchApiUpsertRequest, options?: Configuration): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        return this.api.upsertWithHttpInfo(param.batchInputSimplePublicObjectBatchInputUpsert,  options).toPromise();
    }

    /**
     * Create or update records identified by `{leadsId}` or optionally a unique property value as specified by the `idProperty` query param. `{leadsId}` refers to the internal object ID by default, and the `idProperty` query param refers to a property whose values are unique for the object.
     * Create or update a batch of leads by unique property values
     * @param param the request object
     */
    public upsert(param: BatchApiUpsertRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.upsert(param.batchInputSimplePublicObjectBatchInputUpsert,  options).toPromise();
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
    public doSearchWithHttpInfo(param: SearchApiDoSearchRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalSimplePublicObjectForwardPaging>> {
        return this.api.doSearchWithHttpInfo(param.publicObjectSearchRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public doSearch(param: SearchApiDoSearchRequest, options?: Configuration): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
        return this.api.doSearch(param.publicObjectSearchRequest,  options).toPromise();
    }

}
