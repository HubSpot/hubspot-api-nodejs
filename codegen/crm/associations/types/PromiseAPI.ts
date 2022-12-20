import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AssociatedId } from '../models/AssociatedId';
import { BatchInputPublicAssociation } from '../models/BatchInputPublicAssociation';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponsePublicAssociation } from '../models/BatchResponsePublicAssociation';
import { BatchResponsePublicAssociationMulti } from '../models/BatchResponsePublicAssociationMulti';
import { CollectionResponsePublicAssociationDefiniton } from '../models/CollectionResponsePublicAssociationDefiniton';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PublicAssociation } from '../models/PublicAssociation';
import { PublicAssociationDefiniton } from '../models/PublicAssociationDefiniton';
import { PublicAssociationMulti } from '../models/PublicAssociationMulti';
import { PublicObjectId } from '../models/PublicObjectId';
import { StandardError } from '../models/StandardError';
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
     * Remove the associations between all pairs of objects identified in the request body.
     * Archive a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public archive(fromObjectType: string, toObjectType: string, batchInputPublicAssociation?: BatchInputPublicAssociation, _options?: Configuration): Promise<void> {
        const result = this.api.archive(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
        return result.toPromise();
    }

    /**
     * Associate all pairs of objects identified in the request body.
     * Create a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public create(fromObjectType: string, toObjectType: string, batchInputPublicAssociation?: BatchInputPublicAssociation, _options?: Configuration): Promise<BatchResponsePublicAssociation> {
        const result = this.api.create(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
        return result.toPromise();
    }

    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicObjectId 
     */
    public read(fromObjectType: string, toObjectType: string, batchInputPublicObjectId?: BatchInputPublicObjectId, _options?: Configuration): Promise<BatchResponsePublicAssociationMulti> {
        const result = this.api.read(fromObjectType, toObjectType, batchInputPublicObjectId, _options);
        return result.toPromise();
    }


}



import { ObservableTypesApi } from './ObservableAPI';

import { TypesApiRequestFactory, TypesApiResponseProcessor} from "../apis/TypesApi";
export class PromiseTypesApi {
    private api: ObservableTypesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TypesApiRequestFactory,
        responseProcessor?: TypesApiResponseProcessor
    ) {
        this.api = new ObservableTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all the valid association types available between two object types
     * List association types
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<CollectionResponsePublicAssociationDefiniton> {
        const result = this.api.getAll(fromObjectType, toObjectType, _options);
        return result.toPromise();
    }


}



