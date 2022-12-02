import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AssociatedId } from '../models/AssociatedId';
import { AssociationSpec } from '../models/AssociationSpec';
import { AssociationSpecWithLabel } from '../models/AssociationSpecWithLabel';
import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchInputSimplePublicObjectInput } from '../models/BatchInputSimplePublicObjectInput';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { CollectionResponseAssociatedId } from '../models/CollectionResponseAssociatedId';
import { CollectionResponseMultiAssociatedObjectWithLabelForwardPaging } from '../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { Filter } from '../models/Filter';
import { FilterGroup } from '../models/FilterGroup';
import { ForwardPaging } from '../models/ForwardPaging';
import { LabelsBetweenObjectPair } from '../models/LabelsBetweenObjectPair';
import { ModelError } from '../models/ModelError';
import { MultiAssociatedObjectWithLabel } from '../models/MultiAssociatedObjectWithLabel';
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

export interface AssociationsApiArchiveRequest {
    /**
     * 
     * @type number
     * @memberof AssociationsApiarchive
     */
    companyId: number
    /**
     * 
     * @type string
     * @memberof AssociationsApiarchive
     */
    toObjectType: string
    /**
     * 
     * @type number
     * @memberof AssociationsApiarchive
     */
    toObjectId: number
}

export interface AssociationsApiCreateRequest {
    /**
     * 
     * @type number
     * @memberof AssociationsApicreate
     */
    companyId: number
    /**
     * 
     * @type string
     * @memberof AssociationsApicreate
     */
    toObjectType: string
    /**
     * 
     * @type number
     * @memberof AssociationsApicreate
     */
    toObjectId: number
    /**
     * 
     * @type Array&lt;AssociationSpec&gt;
     * @memberof AssociationsApicreate
     */
    associationSpec: Array<AssociationSpec>
}

export interface AssociationsApiGetAllRequest {
    /**
     * 
     * @type number
     * @memberof AssociationsApigetAll
     */
    companyId: number
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

export class ObjectAssociationsApi {
    private api: ObservableAssociationsApi

    public constructor(configuration: Configuration, requestFactory?: AssociationsApiRequestFactory, responseProcessor?: AssociationsApiResponseProcessor) {
        this.api = new ObservableAssociationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <span style='display: flex; justify-content: space-between;'><span style='flex: 1'><span style='display: inline-block;'>deletes all associations between two records.<br />Auth Level: external ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) | [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=PublicObjectResource&defs=deleteAllAssociations) | <a href='#operations-Associations-delete-%2Fcrm%2Fv4%2Fcompanies%2F%7BobjectType%7D%2F%7BcompanyId%7D%2Fassociations%2F%7BtoObjectType%7D%2F%7BtoObjectId%7D'>Permalink</a> | [API Goggles](https://tools.hubteam.com/api/delete/api.hubapi.com%2Fcrm%2Fv4%2Fcompanies%2F%28%28%7BobjectType%7D%29%29%2F%28%28%7BcompanyId%7D%29%29%2Fassociations%2F%28%28%7BtoObjectType%7D%29%29%2F%28%28%7BtoObjectId%7D%29%29?showRequestDetails=true&body=&authType=external)</span></span><span style='padding-left: 12px'><a href='https://looker.hubspotcentral.net/dashboards/4566?DeployConfig=CrmPublicObjects-Service-web&Resource=PublicObjectResource&Method=deleteAllAssociations&API%20Version=v4&Timeframe=90%20days%20ago%20for%2090%20days'>**7,481,227** external calls in the last 90 days</a></span></span>
     * Delete
     * @param param the request object
     */
    public archive(param: AssociationsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.companyId, param.toObjectType, param.toObjectId,  options).toPromise();
    }

    /**
     * <span style='display: flex; justify-content: space-between;'><span style='flex: 1'><span style='display: inline-block;'>Set association labels between two records.<br />Auth Level: external ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) | [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=PublicObjectResource&defs=setAssociationLabels) | <a href='#operations-Associations-put-%2Fcrm%2Fv4%2Fcompanies%2F%7BobjectType%7D%2F%7BcompanyId%7D%2Fassociations%2F%7BtoObjectType%7D%2F%7BtoObjectId%7D'>Permalink</a> | [API Goggles](https://tools.hubteam.com/api/put/api.hubapi.com%2Fcrm%2Fv4%2Fcompanies%2F%28%28%7BobjectType%7D%29%29%2F%28%28%7BcompanyId%7D%29%29%2Fassociations%2F%28%28%7BtoObjectType%7D%29%29%2F%28%28%7BtoObjectId%7D%29%29?showRequestDetails=true&body=&authType=external)</span></span><span style='padding-left: 12px'><a href='https://looker.hubspotcentral.net/dashboards/4566?DeployConfig=CrmPublicObjects-Service-web&Resource=PublicObjectResource&Method=setAssociationLabels&API%20Version=v4&Timeframe=90%20days%20ago%20for%2090%20days'>**84,046,482** external calls in the last 90 days</a></span></span>
     * Create
     * @param param the request object
     */
    public create(param: AssociationsApiCreateRequest, options?: Configuration): Promise<LabelsBetweenObjectPair> {
        return this.api.create(param.companyId, param.toObjectType, param.toObjectId, param.associationSpec,  options).toPromise();
    }

    /**
     * <span style='display: flex; justify-content: space-between;'><span style='flex: 1'><span style='display: inline-block;'>List all associations of a company by object type. Limit 1000 per call.<br />Auth Level: external ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) | [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=PublicObjectResource&defs=getAllAssociationsForObject) | <a href='#operations-Associations-get-%2Fcrm%2Fv4%2Fcompanies%2F%7BobjectType%7D%2F%7BcompanyId%7D%2Fassociations%2F%7BtoObjectType%7D'>Permalink</a> | [API Goggles](https://tools.hubteam.com/api/get/api.hubapi.com%2Fcrm%2Fv4%2Fcompanies%2F%28%28%7BobjectType%7D%29%29%2F%28%28%7BcompanyId%7D%29%29%2Fassociations%2F%28%28%7BtoObjectType%7D%29%29?showRequestDetails=true&body=&authType=external)</span></span><span style='padding-left: 12px'><a href='https://looker.hubspotcentral.net/dashboards/4566?DeployConfig=CrmPublicObjects-Service-web&Resource=PublicObjectResource&Method=getAllAssociationsForObject&API%20Version=v4&Timeframe=90%20days%20ago%20for%2090%20days'>**101,011,935** external calls in the last 90 days</a></span></span>
     * List
     * @param param the request object
     */
    public getAll(param: AssociationsApiGetAllRequest, options?: Configuration): Promise<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging> {
        return this.api.getAll(param.companyId, param.toObjectType, param.after, param.limit,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof BasicApiarchive
     */
    companyId: string
}

export interface BasicApiCreateRequest {
    /**
     * 
     * @type SimplePublicObjectInput
     * @memberof BasicApicreate
     */
    simplePublicObjectInput: SimplePublicObjectInput
}

export interface BasicApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof BasicApigetById
     */
    companyId: string
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

export interface BasicApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof BasicApiupdate
     */
    companyId: string
    /**
     * 
     * @type SimplePublicObjectInput
     * @memberof BasicApiupdate
     */
    simplePublicObjectInput: SimplePublicObjectInput
    /**
     * The name of a property whose values are unique for this object type
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
     * Move an Object identified by `{companyId}` to the recycling bin.
     * Archive
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.companyId,  options).toPromise();
    }

    /**
     * Create a company with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard companies is provided.
     * Create
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.create(param.simplePublicObjectInput,  options).toPromise();
    }

    /**
     * Read an Object identified by `{companyId}`. `{companyId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        return this.api.getById(param.companyId, param.properties, param.propertiesWithHistory, param.associations, param.archived, param.idProperty,  options).toPromise();
    }

    /**
     * Read a page of companies. Control what is returned via the `properties` query param.
     * List
     * @param param the request object
     */
    public getPage(param: BasicApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
        return this.api.getPage(param.limit, param.after, param.properties, param.propertiesWithHistory, param.associations, param.archived,  options).toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{companyId}`. `{companyId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.update(param.companyId, param.simplePublicObjectInput, param.idProperty,  options).toPromise();
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
     * @type BatchInputSimplePublicObjectInput
     * @memberof BatchApicreate
     */
    batchInputSimplePublicObjectInput: BatchInputSimplePublicObjectInput
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

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a batch of companies by ID
     * @param param the request object
     */
    public archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.batchInputSimplePublicObjectId,  options).toPromise();
    }

    /**
     * Create a batch of companies
     * @param param the request object
     */
    public create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.create(param.batchInputSimplePublicObjectInput,  options).toPromise();
    }

    /**
     * Read a batch of companies by internal ID, or unique property values
     * @param param the request object
     */
    public read(param: BatchApiReadRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.read(param.batchReadInputSimplePublicObjectId, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of companies
     * @param param the request object
     */
    public update(param: BatchApiUpdateRequest, options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        return this.api.update(param.batchInputSimplePublicObjectBatchInput,  options).toPromise();
    }

}

import { ObservablePublicObjectApi } from "./ObservableAPI";
import { PublicObjectApiRequestFactory, PublicObjectApiResponseProcessor} from "../apis/PublicObjectApi";

export interface PublicObjectApiMergeRequest {
    /**
     * 
     * @type PublicMergeInput
     * @memberof PublicObjectApimerge
     */
    publicMergeInput: PublicMergeInput
}

export class ObjectPublicObjectApi {
    private api: ObservablePublicObjectApi

    public constructor(configuration: Configuration, requestFactory?: PublicObjectApiRequestFactory, responseProcessor?: PublicObjectApiResponseProcessor) {
        this.api = new ObservablePublicObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Merge two companies with same type
     * @param param the request object
     */
    public merge(param: PublicObjectApiMergeRequest, options?: Configuration): Promise<SimplePublicObject> {
        return this.api.merge(param.publicMergeInput,  options).toPromise();
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
