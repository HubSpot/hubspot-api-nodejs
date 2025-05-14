import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

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
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionConfigurationsApibatchCreate
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
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
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionConfigurationsApibatchRemove
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
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
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionConfigurationsApibatchUpdate
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
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
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionConfigurationsApigetAllBetweenTwoObjectTypes
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
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
    public batchCreateWithHttpInfo(param: DefinitionConfigurationsApiBatchCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration>> {
        return this.api.batchCreateWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationCreateRequest,  options).toPromise();
    }

    /**
     * Batch create user configurations between two object types
     * Create
     * @param param the request object
     */
    public batchCreate(param: DefinitionConfigurationsApiBatchCreateRequest, options?: ConfigurationOptions): Promise<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration> {
        return this.api.batchCreate(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationCreateRequest,  options).toPromise();
    }

    /**
     * Batch delete user configurations between two object types
     * Delete
     * @param param the request object
     */
    public batchRemoveWithHttpInfo(param: DefinitionConfigurationsApiBatchRemoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.batchRemoveWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationSpec,  options).toPromise();
    }

    /**
     * Batch delete user configurations between two object types
     * Delete
     * @param param the request object
     */
    public batchRemove(param: DefinitionConfigurationsApiBatchRemoveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.batchRemove(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationSpec,  options).toPromise();
    }

    /**
     * Batch update user configurations between two object types
     * Update
     * @param param the request object
     */
    public batchUpdateWithHttpInfo(param: DefinitionConfigurationsApiBatchUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors>> {
        return this.api.batchUpdateWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationUpdateRequest,  options).toPromise();
    }

    /**
     * Batch update user configurations between two object types
     * Update
     * @param param the request object
     */
    public batchUpdate(param: DefinitionConfigurationsApiBatchUpdateRequest, options?: ConfigurationOptions): Promise<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors> {
        return this.api.batchUpdate(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationUpdateRequest,  options).toPromise();
    }

    /**
     * Returns all user configurations available on a given portal
     * Read All
     * @param param the request object
     */
    public getAllWithHttpInfo(param: DefinitionConfigurationsApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
        return this.api.getAllWithHttpInfo( options).toPromise();
    }

    /**
     * Returns all user configurations available on a given portal
     * Read All
     * @param param the request object
     */
    public getAll(param: DefinitionConfigurationsApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        return this.api.getAll( options).toPromise();
    }

    /**
     * Returns user configurations on all association definitions between two object types
     * Read
     * @param param the request object
     */
    public getAllBetweenTwoObjectTypesWithHttpInfo(param: DefinitionConfigurationsApiGetAllBetweenTwoObjectTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
        return this.api.getAllBetweenTwoObjectTypesWithHttpInfo(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Returns user configurations on all association definitions between two object types
     * Read
     * @param param the request object
     */
    public getAllBetweenTwoObjectTypes(param: DefinitionConfigurationsApiGetAllBetweenTwoObjectTypesRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        return this.api.getAllBetweenTwoObjectTypes(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

}

import { ObservableDefinitionsApi } from "./ObservableAPI";
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";

export interface DefinitionsApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApicreate
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
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
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApigetAll
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApigetAll
     */
    toObjectType: string
}

export interface DefinitionsApiRemoveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApiremove
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApiremove
     */
    toObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApiremove
     */
    associationTypeId: number
}

export interface DefinitionsApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApiupdate
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
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
    public createWithHttpInfo(param: DefinitionsApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        return this.api.createWithHttpInfo(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionCreateRequest,  options).toPromise();
    }

    /**
     * Create a user defined association definition
     * Create
     * @param param the request object
     */
    public create(param: DefinitionsApiCreateRequest, options?: ConfigurationOptions): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.api.create(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionCreateRequest,  options).toPromise();
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param param the request object
     */
    public getAllWithHttpInfo(param: DefinitionsApiGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        return this.api.getAllWithHttpInfo(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param param the request object
     */
    public getAll(param: DefinitionsApiGetAllRequest, options?: ConfigurationOptions): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.api.getAll(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Deletes an association definition
     * Delete
     * @param param the request object
     */
    public removeWithHttpInfo(param: DefinitionsApiRemoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeWithHttpInfo(param.fromObjectType, param.toObjectType, param.associationTypeId,  options).toPromise();
    }

    /**
     * Deletes an association definition
     * Delete
     * @param param the request object
     */
    public remove(param: DefinitionsApiRemoveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.remove(param.fromObjectType, param.toObjectType, param.associationTypeId,  options).toPromise();
    }

    /**
     * Update a user defined association definition
     * Update
     * @param param the request object
     */
    public updateWithHttpInfo(param: DefinitionsApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateWithHttpInfo(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionUpdateRequest,  options).toPromise();
    }

    /**
     * Update a user defined association definition
     * Update
     * @param param the request object
     */
    public update(param: DefinitionsApiUpdateRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.update(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionUpdateRequest,  options).toPromise();
    }

}
