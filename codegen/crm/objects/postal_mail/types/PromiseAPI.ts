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
     * Move an Object identified by `{postalMail}` to the recycling bin.
     * Archive
     * @param postalMail 
     */
    public deleteCrmV3ObjectsPostalMailPostalMail(postalMail: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCrmV3ObjectsPostalMailPostalMail(postalMail, _options);
        return result.toPromise();
    }

    /**
     * Read a page of postal mail. Control what is returned via the `properties` query param.
     * List
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param propertiesWithHistory A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     */
    public getCrmV3ObjectsPostalMail(limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: Configuration): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
        const result = this.api.getCrmV3ObjectsPostalMail(limit, after, properties, propertiesWithHistory, associations, archived, _options);
        return result.toPromise();
    }

    /**
     * Read an Object identified by `{postalMail}`. `{postalMail}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param postalMail 
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param propertiesWithHistory A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public getCrmV3ObjectsPostalMailPostalMail(postalMail: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Promise<SimplePublicObjectWithAssociations> {
        const result = this.api.getCrmV3ObjectsPostalMailPostalMail(postalMail, properties, propertiesWithHistory, associations, archived, idProperty, _options);
        return result.toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{postalMail}`. `{postalMail}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param postalMail 
     * @param simplePublicObjectInput 
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public patchCrmV3ObjectsPostalMailPostalMail(postalMail: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.patchCrmV3ObjectsPostalMailPostalMail(postalMail, simplePublicObjectInput, idProperty, _options);
        return result.toPromise();
    }

    /**
     * Create a postal mail with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard postal mail is provided.
     * Create
     * @param simplePublicObjectInputForCreate 
     */
    public postCrmV3ObjectsPostalMail(simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.postCrmV3ObjectsPostalMail(simplePublicObjectInputForCreate, _options);
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
     * Archive a batch of postal mail by ID
     * @param batchInputSimplePublicObjectId 
     */
    public postCrmV3ObjectsPostalMailBatchArchive(batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: Configuration): Promise<void> {
        const result = this.api.postCrmV3ObjectsPostalMailBatchArchive(batchInputSimplePublicObjectId, _options);
        return result.toPromise();
    }

    /**
     * Create a batch of postal mail
     * @param batchInputSimplePublicObjectInputForCreate 
     */
    public postCrmV3ObjectsPostalMailBatchCreate(batchInputSimplePublicObjectInputForCreate: BatchInputSimplePublicObjectInputForCreate, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.postCrmV3ObjectsPostalMailBatchCreate(batchInputSimplePublicObjectInputForCreate, _options);
        return result.toPromise();
    }

    /**
     * Read a batch of postal mail by internal ID, or unique property values
     * @param batchReadInputSimplePublicObjectId 
     * @param archived Whether to return only results that have been archived.
     */
    public postCrmV3ObjectsPostalMailBatchRead(batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.postCrmV3ObjectsPostalMailBatchRead(batchReadInputSimplePublicObjectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Update a batch of postal mail
     * @param batchInputSimplePublicObjectBatchInput 
     */
    public postCrmV3ObjectsPostalMailBatchUpdate(batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: Configuration): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const result = this.api.postCrmV3ObjectsPostalMailBatchUpdate(batchInputSimplePublicObjectBatchInput, _options);
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
     * Merge two postal mail with same type
     * @param publicMergeInput 
     */
    public postCrmV3ObjectsPostalMailMerge(publicMergeInput: PublicMergeInput, _options?: Configuration): Promise<SimplePublicObject> {
        const result = this.api.postCrmV3ObjectsPostalMailMerge(publicMergeInput, _options);
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
    public postCrmV3ObjectsPostalMailSearch(publicObjectSearchRequest: PublicObjectSearchRequest, _options?: Configuration): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
        const result = this.api.postCrmV3ObjectsPostalMailSearch(publicObjectSearchRequest, _options);
        return result.toPromise();
    }


}



