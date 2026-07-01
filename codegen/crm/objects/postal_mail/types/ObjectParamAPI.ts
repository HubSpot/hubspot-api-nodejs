import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectBatchInputForCreate } from '../models/BatchInputSimplePublicObjectBatchInputForCreate';
import { BatchInputSimplePublicObjectBatchInputUpsert } from '../models/BatchInputSimplePublicObjectBatchInputUpsert';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { BatchResponseSimplePublicUpsertObject } from '../models/BatchResponseSimplePublicUpsertObject';
import { BatchResponseSimplePublicUpsertObjectWithErrors } from '../models/BatchResponseSimplePublicUpsertObjectWithErrors';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { CollectionResponseWithTotalSimplePublicObject } from '../models/CollectionResponseWithTotalSimplePublicObject';
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
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    postalMailId: string
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
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    postalMailId: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: false
     * @type boolean
     * @memberof BasicApigetById
     */
    archived?: boolean
    /**
     * A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApigetById
     */
    associations?: Array<string>
    /**
     * The name of a property whose values are unique for this object type
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    idProperty?: string
    /**
     * A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApigetById
     */
    properties?: Array<string>
    /**
     * A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApigetById
     */
    propertiesWithHistory?: Array<string>
}

export interface BasicApiGetPageRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPage
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: false
     * @type boolean
     * @memberof BasicApigetPage
     */
    archived?: boolean
    /**
     * A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    associations?: Array<string>
    /**
     * The maximum number of results to display per page.
     * Defaults to: 10
     * @type number
     * @memberof BasicApigetPage
     */
    limit?: number
    /**
     * A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    properties?: Array<string>
    /**
     * A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    propertiesWithHistory?: Array<string>
}

export interface BasicApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    postalMailId: string
    /**
     * 
     * @type SimplePublicObjectInput
     * @memberof BasicApiupdate
     */
    simplePublicObjectInput: SimplePublicObjectInput
    /**
     * The name of a property whose values are unique for this object type
     * Defaults to: undefined
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
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.postalMailId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.postalMailId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<SimplePublicObject>> {
        return this.api.createWithHttpInfo(param.simplePublicObjectInputForCreate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<SimplePublicObject> {
        return this.api.create(param.simplePublicObjectInputForCreate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<SimplePublicObjectWithAssociations>> {
        return this.api.getByIdWithHttpInfo(param.postalMailId, param.archived, param.associations, param.idProperty, param.properties, param.propertiesWithHistory,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<SimplePublicObjectWithAssociations> {
        return this.api.getById(param.postalMailId, param.archived, param.associations, param.idProperty, param.properties, param.propertiesWithHistory,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BasicApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.after, param.archived, param.associations, param.limit, param.properties, param.propertiesWithHistory,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPage(param: BasicApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
        return this.api.getPage(param.after, param.archived, param.associations, param.limit, param.properties, param.propertiesWithHistory,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<SimplePublicObject>> {
        return this.api.updateWithHttpInfo(param.postalMailId, param.simplePublicObjectInput, param.idProperty,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<SimplePublicObject> {
        return this.api.update(param.postalMailId, param.simplePublicObjectInput, param.idProperty,  options).toPromise();
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
     * @type BatchInputSimplePublicObjectBatchInputForCreate
     * @memberof BatchApicreate
     */
    batchInputSimplePublicObjectBatchInputForCreate: BatchInputSimplePublicObjectBatchInputForCreate
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
     * Defaults to: false
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
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.batchInputSimplePublicObjectId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archive(param: BatchApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.batchInputSimplePublicObjectId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createWithHttpInfo(param: BatchApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        return this.api.createWithHttpInfo(param.batchInputSimplePublicObjectBatchInputForCreate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public create(param: BatchApiCreateRequest, options?: ConfigurationOptions): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.create(param.batchInputSimplePublicObjectBatchInputForCreate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public readWithHttpInfo(param: BatchApiReadRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        return this.api.readWithHttpInfo(param.batchReadInputSimplePublicObjectId, param.archived,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public read(param: BatchApiReadRequest, options?: ConfigurationOptions): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.read(param.batchReadInputSimplePublicObjectId, param.archived,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateWithHttpInfo(param: BatchApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
        return this.api.updateWithHttpInfo(param.batchInputSimplePublicObjectBatchInput,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public update(param: BatchApiUpdateRequest, options?: ConfigurationOptions): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.update(param.batchInputSimplePublicObjectBatchInput,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public upsertWithHttpInfo(param: BatchApiUpsertRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject>> {
        return this.api.upsertWithHttpInfo(param.batchInputSimplePublicObjectBatchInputUpsert,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public upsert(param: BatchApiUpsertRequest, options?: ConfigurationOptions): Promise<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject> {
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
    public doSearchWithHttpInfo(param: SearchApiDoSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalSimplePublicObject>> {
        return this.api.doSearchWithHttpInfo(param.publicObjectSearchRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public doSearch(param: SearchApiDoSearchRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalSimplePublicObject> {
        return this.api.doSearch(param.publicObjectSearchRequest,  options).toPromise();
    }

}
