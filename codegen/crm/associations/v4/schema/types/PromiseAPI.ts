import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BatchInputPublicAssociationDefinitionConfigurationCreateRequest } from '../models/BatchInputPublicAssociationDefinitionConfigurationCreateRequest';
import { BatchInputPublicAssociationDefinitionConfigurationUpdateRequest } from '../models/BatchInputPublicAssociationDefinitionConfigurationUpdateRequest';
import { BatchInputPublicAssociationSpec } from '../models/BatchInputPublicAssociationSpec';
import { BatchResponsePublicAssociationDefinitionUserConfiguration } from '../models/BatchResponsePublicAssociationDefinitionUserConfiguration';
import { BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors } from '../models/BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors';
import { BatchResponseVoid } from '../models/BatchResponseVoid';
import { BatchResponseVoidWithErrors } from '../models/BatchResponseVoidWithErrors';
import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';
import { ObservableDefinitionConfigurationsApi } from './ObservableAPI';

import { DefinitionConfigurationsApiRequestFactory, DefinitionConfigurationsApiResponseProcessor} from "../apis/DefinitionConfigurationsApi";
export class PromiseDefinitionConfigurationsApi {
    private api: ObservableDefinitionConfigurationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefinitionConfigurationsApiRequestFactory,
        responseProcessor?: DefinitionConfigurationsApiResponseProcessor
    ) {
        this.api = new ObservableDefinitionConfigurationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch create user configurations between two object types
     * Create
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationDefinitionConfigurationCreateRequest 
     */
    public batchCreateWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationCreateRequest: BatchInputPublicAssociationDefinitionConfigurationCreateRequest, _options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration>> {
        const result = this.api.batchCreateWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Batch create user configurations between two object types
     * Create
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationDefinitionConfigurationCreateRequest 
     */
    public batchCreate(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationCreateRequest: BatchInputPublicAssociationDefinitionConfigurationCreateRequest, _options?: Configuration): Promise<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration> {
        const result = this.api.batchCreate(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Batch delete user configurations between two object types
     * Delete
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationSpec 
     */
    public batchRemoveWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationSpec: BatchInputPublicAssociationSpec, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.batchRemoveWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationSpec, _options);
        return result.toPromise();
    }

    /**
     * Batch delete user configurations between two object types
     * Delete
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationSpec 
     */
    public batchRemove(fromObjectType: string, toObjectType: string, batchInputPublicAssociationSpec: BatchInputPublicAssociationSpec, _options?: Configuration): Promise<void> {
        const result = this.api.batchRemove(fromObjectType, toObjectType, batchInputPublicAssociationSpec, _options);
        return result.toPromise();
    }

    /**
     * Batch update user configurations between two object types
     * Update
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationDefinitionConfigurationUpdateRequest 
     */
    public batchUpdateWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationUpdateRequest: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest, _options?: Configuration): Promise<HttpInfo<BatchResponseVoidWithErrors | BatchResponseVoid>> {
        const result = this.api.batchUpdateWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Batch update user configurations between two object types
     * Update
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationDefinitionConfigurationUpdateRequest 
     */
    public batchUpdate(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationUpdateRequest: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest, _options?: Configuration): Promise<BatchResponseVoidWithErrors | BatchResponseVoid> {
        const result = this.api.batchUpdate(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns all user configurations available on a given portal
     * Read All
     */
    public getAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
        const result = this.api.getAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns all user configurations available on a given portal
     * Read All
     */
    public getAll(_options?: Configuration): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        const result = this.api.getAll(_options);
        return result.toPromise();
    }

    /**
     * Returns user configurations on all association definitions between two object types
     * Read
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getAllBetweenTwoObjectTypesWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
        const result = this.api.getAllBetweenTwoObjectTypesWithHttpInfo(fromObjectType, toObjectType, _options);
        return result.toPromise();
    }

    /**
     * Returns user configurations on all association definitions between two object types
     * Read
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getAllBetweenTwoObjectTypes(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        const result = this.api.getAllBetweenTwoObjectTypes(fromObjectType, toObjectType, _options);
        return result.toPromise();
    }


}



import { ObservableDefinitionsApi } from './ObservableAPI';

import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";
export class PromiseDefinitionsApi {
    private api: ObservableDefinitionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefinitionsApiRequestFactory,
        responseProcessor?: DefinitionsApiResponseProcessor
    ) {
        this.api = new ObservableDefinitionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an association definition
     * Delete
     * @param fromObjectType 
     * @param toObjectType 
     * @param associationTypeId 
     */
    public archiveWithHttpInfo(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(fromObjectType, toObjectType, associationTypeId, _options);
        return result.toPromise();
    }

    /**
     * Deletes an association definition
     * Delete
     * @param fromObjectType 
     * @param toObjectType 
     * @param associationTypeId 
     */
    public archive(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(fromObjectType, toObjectType, associationTypeId, _options);
        return result.toPromise();
    }

    /**
     * Create a user defined association definition
     * Create
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionCreateRequest 
     */
    public createWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: Configuration): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        const result = this.api.createWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a user defined association definition
     * Create
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionCreateRequest 
     */
    public create(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        const result = this.api.create(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        const result = this.api.getAllWithHttpInfo(fromObjectType, toObjectType, _options);
        return result.toPromise();
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        const result = this.api.getAll(fromObjectType, toObjectType, _options);
        return result.toPromise();
    }

    /**
     * Update a user defined association definition
     * Update
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionUpdateRequest 
     */
    public updateWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a user defined association definition
     * Update
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionUpdateRequest 
     */
    public update(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.update(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, _options);
        return result.toPromise();
    }


}



