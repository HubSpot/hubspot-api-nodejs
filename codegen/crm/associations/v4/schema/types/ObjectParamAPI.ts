import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BatchInputPublicAssociationDefinitionConfigurationCreateRequest } from '../models/BatchInputPublicAssociationDefinitionConfigurationCreateRequest';
import { BatchInputPublicAssociationDefinitionConfigurationUpdateRequest } from '../models/BatchInputPublicAssociationDefinitionConfigurationUpdateRequest';
import { BatchInputPublicAssociationSpec } from '../models/BatchInputPublicAssociationSpec';
import { BatchResponsePublicAssociationDefinitionConfigurationUpdateResult } from '../models/BatchResponsePublicAssociationDefinitionConfigurationUpdateResult';
import { BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors } from '../models/BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors';
import { BatchResponsePublicAssociationDefinitionUserConfiguration } from '../models/BatchResponsePublicAssociationDefinitionUserConfiguration';
import { BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors } from '../models/BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors';
import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';

import { ObservableDefinitionConfigurationsApi } from "./ObservableAPI";
import { DefinitionConfigurationsApiRequestFactory, DefinitionConfigurationsApiResponseProcessor} from "../apis/DefinitionConfigurationsApi";

export interface DefinitionConfigurationsApiBatchCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionConfigurationsApibatchCreate
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionConfigurationsApibatchCreate
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicAssociationDefinitionConfigurationCreateRequest
     * @memberof DefinitionConfigurationsApibatchCreate
     */
    batchInputPublicAssociationDefinitionConfigurationCreateRequest: BatchInputPublicAssociationDefinitionConfigurationCreateRequest
}

export interface DefinitionConfigurationsApiBatchRemoveRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionConfigurationsApibatchRemove
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionConfigurationsApibatchRemove
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicAssociationSpec
     * @memberof DefinitionConfigurationsApibatchRemove
     */
    batchInputPublicAssociationSpec: BatchInputPublicAssociationSpec
}

export interface DefinitionConfigurationsApiBatchUpdateRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionConfigurationsApibatchUpdate
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionConfigurationsApibatchUpdate
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicAssociationDefinitionConfigurationUpdateRequest
     * @memberof DefinitionConfigurationsApibatchUpdate
     */
    batchInputPublicAssociationDefinitionConfigurationUpdateRequest: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest
}

export interface DefinitionConfigurationsApiGetAllRequest {
}

export interface DefinitionConfigurationsApiGetAllBetweenTwoObjectTypesRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionConfigurationsApigetAllBetweenTwoObjectTypes
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionConfigurationsApigetAllBetweenTwoObjectTypes
     */
    toObjectType: string
}

export class ObjectDefinitionConfigurationsApi {
    private api: ObservableDefinitionConfigurationsApi

    public constructor(configuration: Configuration, requestFactory?: DefinitionConfigurationsApiRequestFactory, responseProcessor?: DefinitionConfigurationsApiResponseProcessor) {
        this.api = new ObservableDefinitionConfigurationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch create user configurations between two object types
     * Create
     * @param param the request object
     */
    public batchCreateWithHttpInfo(param: DefinitionConfigurationsApiBatchCreateRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration>> {
        return this.api.batchCreateWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationCreateRequest,  options).toPromise();
    }

    /**
     * Batch create user configurations between two object types
     * Create
     * @param param the request object
     */
    public batchCreate(param: DefinitionConfigurationsApiBatchCreateRequest, options?: Configuration): Promise<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration> {
        return this.api.batchCreate(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationCreateRequest,  options).toPromise();
    }

    /**
     * Batch delete user configurations between two object types
     * Delete
     * @param param the request object
     */
    public batchRemoveWithHttpInfo(param: DefinitionConfigurationsApiBatchRemoveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.batchRemoveWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationSpec,  options).toPromise();
    }

    /**
     * Batch delete user configurations between two object types
     * Delete
     * @param param the request object
     */
    public batchRemove(param: DefinitionConfigurationsApiBatchRemoveRequest, options?: Configuration): Promise<void> {
        return this.api.batchRemove(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationSpec,  options).toPromise();
    }

    /**
     * Batch update user configurations between two object types
     * Update
     * @param param the request object
     */
    public batchUpdateWithHttpInfo(param: DefinitionConfigurationsApiBatchUpdateRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors>> {
        return this.api.batchUpdateWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationUpdateRequest,  options).toPromise();
    }

    /**
     * Batch update user configurations between two object types
     * Update
     * @param param the request object
     */
    public batchUpdate(param: DefinitionConfigurationsApiBatchUpdateRequest, options?: Configuration): Promise<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors> {
        return this.api.batchUpdate(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationUpdateRequest,  options).toPromise();
    }

    /**
     * Returns all user configurations available on a given portal
     * Read All
     * @param param the request object
     */
    public getAllWithHttpInfo(param: DefinitionConfigurationsApiGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
        return this.api.getAllWithHttpInfo( options).toPromise();
    }

    /**
     * Returns all user configurations available on a given portal
     * Read All
     * @param param the request object
     */
    public getAll(param: DefinitionConfigurationsApiGetAllRequest = {}, options?: Configuration): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        return this.api.getAll( options).toPromise();
    }

    /**
     * Returns user configurations on all association definitions between two object types
     * Read
     * @param param the request object
     */
    public getAllBetweenTwoObjectTypesWithHttpInfo(param: DefinitionConfigurationsApiGetAllBetweenTwoObjectTypesRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
        return this.api.getAllBetweenTwoObjectTypesWithHttpInfo(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Returns user configurations on all association definitions between two object types
     * Read
     * @param param the request object
     */
    public getAllBetweenTwoObjectTypes(param: DefinitionConfigurationsApiGetAllBetweenTwoObjectTypesRequest, options?: Configuration): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        return this.api.getAllBetweenTwoObjectTypes(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

}

import { ObservableDefinitionsApi } from "./ObservableAPI";
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";

export interface DefinitionsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApicreate
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApicreate
     */
    toObjectType: string
    /**
     * 
     * @type PublicAssociationDefinitionCreateRequest
     * @memberof DefinitionsApicreate
     */
    publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest
}

export interface DefinitionsApiGetAllRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApigetAll
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApigetAll
     */
    toObjectType: string
}

export interface DefinitionsApiRemoveRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApiremove
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApiremove
     */
    toObjectType: string
    /**
     * 
     * @type number
     * @memberof DefinitionsApiremove
     */
    associationTypeId: number
}

export interface DefinitionsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApiupdate
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApiupdate
     */
    toObjectType: string
    /**
     * 
     * @type PublicAssociationDefinitionUpdateRequest
     * @memberof DefinitionsApiupdate
     */
    publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest
}

export class ObjectDefinitionsApi {
    private api: ObservableDefinitionsApi

    public constructor(configuration: Configuration, requestFactory?: DefinitionsApiRequestFactory, responseProcessor?: DefinitionsApiResponseProcessor) {
        this.api = new ObservableDefinitionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a user defined association definition
     * Create
     * @param param the request object
     */
    public createWithHttpInfo(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        return this.api.createWithHttpInfo(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionCreateRequest,  options).toPromise();
    }

    /**
     * Create a user defined association definition
     * Create
     * @param param the request object
     */
    public create(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.api.create(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionCreateRequest,  options).toPromise();
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param param the request object
     */
    public getAllWithHttpInfo(param: DefinitionsApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        return this.api.getAllWithHttpInfo(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param param the request object
     */
    public getAll(param: DefinitionsApiGetAllRequest, options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.api.getAll(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Deletes an association definition
     * Delete
     * @param param the request object
     */
    public removeWithHttpInfo(param: DefinitionsApiRemoveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeWithHttpInfo(param.fromObjectType, param.toObjectType, param.associationTypeId,  options).toPromise();
    }

    /**
     * Deletes an association definition
     * Delete
     * @param param the request object
     */
    public remove(param: DefinitionsApiRemoveRequest, options?: Configuration): Promise<void> {
        return this.api.remove(param.fromObjectType, param.toObjectType, param.associationTypeId,  options).toPromise();
    }

    /**
     * Update a user defined association definition
     * Update
     * @param param the request object
     */
    public updateWithHttpInfo(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateWithHttpInfo(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionUpdateRequest,  options).toPromise();
    }

    /**
     * Update a user defined association definition
     * Update
     * @param param the request object
     */
    public update(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.update(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionUpdateRequest,  options).toPromise();
    }

}
