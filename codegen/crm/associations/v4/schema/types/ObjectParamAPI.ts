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

import { ObservableLabelsApi } from "./ObservableAPI";
import { LabelsApiRequestFactory, LabelsApiResponseProcessor} from "../apis/LabelsApi";

export interface LabelsApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LabelsApicreate
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LabelsApicreate
     */
    toObjectType: string
    /**
     * 
     * @type PublicAssociationDefinitionCreateRequest
     * @memberof LabelsApicreate
     */
    publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest
}

export interface LabelsApiGetPageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LabelsApigetPage
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LabelsApigetPage
     */
    toObjectType: string
}

export interface LabelsApiRemoveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof LabelsApiremove
     */
    associationTypeId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LabelsApiremove
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LabelsApiremove
     */
    toObjectType: string
}

export interface LabelsApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LabelsApiupdate
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LabelsApiupdate
     */
    toObjectType: string
    /**
     * 
     * @type PublicAssociationDefinitionUpdateRequest
     * @memberof LabelsApiupdate
     */
    publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest
}

export class ObjectLabelsApi {
    private api: ObservableLabelsApi

    public constructor(configuration: Configuration, requestFactory?: LabelsApiRequestFactory, responseProcessor?: LabelsApiResponseProcessor) {
        this.api = new ObservableLabelsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new label that describes the relationship between two specified CRM object types. This can help in categorizing and managing associations more effectively.
     * Create association label
     * @param param the request object
     */
    public createWithHttpInfo(param: LabelsApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        return this.api.createWithHttpInfo(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionCreateRequest,  options).toPromise();
    }

    /**
     * Create a new label that describes the relationship between two specified CRM object types. This can help in categorizing and managing associations more effectively.
     * Create association label
     * @param param the request object
     */
    public create(param: LabelsApiCreateRequest, options?: ConfigurationOptions): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.api.create(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionCreateRequest,  options).toPromise();
    }

    /**
     * Retrieve all labels that describe the relationships between two specified CRM object types. These labels provide context about the nature of the associations.
     * Retrieve association labels
     * @param param the request object
     */
    public getPageWithHttpInfo(param: LabelsApiGetPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        return this.api.getPageWithHttpInfo(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Retrieve all labels that describe the relationships between two specified CRM object types. These labels provide context about the nature of the associations.
     * Retrieve association labels
     * @param param the request object
     */
    public getPage(param: LabelsApiGetPageRequest, options?: ConfigurationOptions): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.api.getPage(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Remove a specific label from the association between two CRM object types.
     * Delete association label
     * @param param the request object
     */
    public removeWithHttpInfo(param: LabelsApiRemoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeWithHttpInfo(param.associationTypeId, param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Remove a specific label from the association between two CRM object types.
     * Delete association label
     * @param param the request object
     */
    public remove(param: LabelsApiRemoveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.remove(param.associationTypeId, param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Update an existing label that describes the relationship between two specified CRM object types. This allows for modifications to existing association labels to better reflect the nature of the relationship.
     * Update association label
     * @param param the request object
     */
    public updateWithHttpInfo(param: LabelsApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateWithHttpInfo(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionUpdateRequest,  options).toPromise();
    }

    /**
     * Update an existing label that describes the relationship between two specified CRM object types. This allows for modifications to existing association labels to better reflect the nature of the relationship.
     * Update association label
     * @param param the request object
     */
    public update(param: LabelsApiUpdateRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.update(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionUpdateRequest,  options).toPromise();
    }

}

import { ObservableLimitsApi } from "./ObservableAPI";
import { LimitsApiRequestFactory, LimitsApiResponseProcessor} from "../apis/LimitsApi";

export interface LimitsApiBatchCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitsApibatchCreate
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitsApibatchCreate
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicAssociationDefinitionConfigurationCreateRequest
     * @memberof LimitsApibatchCreate
     */
    batchInputPublicAssociationDefinitionConfigurationCreateRequest: BatchInputPublicAssociationDefinitionConfigurationCreateRequest
}

export interface LimitsApiBatchRemoveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitsApibatchRemove
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitsApibatchRemove
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicAssociationSpec
     * @memberof LimitsApibatchRemove
     */
    batchInputPublicAssociationSpec: BatchInputPublicAssociationSpec
}

export interface LimitsApiBatchUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitsApibatchUpdate
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitsApibatchUpdate
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicAssociationDefinitionConfigurationUpdateRequest
     * @memberof LimitsApibatchUpdate
     */
    batchInputPublicAssociationDefinitionConfigurationUpdateRequest: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest
}

export interface LimitsApiGetPageRequest {
}

export interface LimitsApiGetPageBetweenTwoObjectTypesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitsApigetPageBetweenTwoObjectTypes
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof LimitsApigetPageBetweenTwoObjectTypes
     */
    toObjectType: string
}

export class ObjectLimitsApi {
    private api: ObservableLimitsApi

    public constructor(configuration: Configuration, requestFactory?: LimitsApiRequestFactory, responseProcessor?: LimitsApiResponseProcessor) {
        this.api = new ObservableLimitsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch configure association limits between two object types.
     * Configure association limits
     * @param param the request object
     */
    public batchCreateWithHttpInfo(param: LimitsApiBatchCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration>> {
        return this.api.batchCreateWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationCreateRequest,  options).toPromise();
    }

    /**
     * Batch configure association limits between two object types.
     * Configure association limits
     * @param param the request object
     */
    public batchCreate(param: LimitsApiBatchCreateRequest, options?: ConfigurationOptions): Promise<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration> {
        return this.api.batchCreate(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationCreateRequest,  options).toPromise();
    }

    /**
     * Batch delete limits that have been defined for association types between two object types.
     * Remove association limits
     * @param param the request object
     */
    public batchRemoveWithHttpInfo(param: LimitsApiBatchRemoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.batchRemoveWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationSpec,  options).toPromise();
    }

    /**
     * Batch delete limits that have been defined for association types between two object types.
     * Remove association limits
     * @param param the request object
     */
    public batchRemove(param: LimitsApiBatchRemoveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.batchRemove(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationSpec,  options).toPromise();
    }

    /**
     * Batch update association limits that have been configured between two object types.
     * Update association limits
     * @param param the request object
     */
    public batchUpdateWithHttpInfo(param: LimitsApiBatchUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors>> {
        return this.api.batchUpdateWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationUpdateRequest,  options).toPromise();
    }

    /**
     * Batch update association limits that have been configured between two object types.
     * Update association limits
     * @param param the request object
     */
    public batchUpdate(param: LimitsApiBatchUpdateRequest, options?: ConfigurationOptions): Promise<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors> {
        return this.api.batchUpdate(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationDefinitionConfigurationUpdateRequest,  options).toPromise();
    }

    /**
     * Retrieve all configured association limits between objects, which include details about how different CRM object types are associated with each other.
     * Retrieve all association limits
     * @param param the request object
     */
    public getPageWithHttpInfo(param: LimitsApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
        return this.api.getPageWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieve all configured association limits between objects, which include details about how different CRM object types are associated with each other.
     * Retrieve all association limits
     * @param param the request object
     */
    public getPage(param: LimitsApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        return this.api.getPage( options).toPromise();
    }

    /**
     * Retrieve the configuration details for associations between two specified CRM object types. Use this endpoint to understand limits that have been set for specific association types.
     * Retrieve association limits
     * @param param the request object
     */
    public getPageBetweenTwoObjectTypesWithHttpInfo(param: LimitsApiGetPageBetweenTwoObjectTypesRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
        return this.api.getPageBetweenTwoObjectTypesWithHttpInfo(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Retrieve the configuration details for associations between two specified CRM object types. Use this endpoint to understand limits that have been set for specific association types.
     * Retrieve association limits
     * @param param the request object
     */
    public getPageBetweenTwoObjectTypes(param: LimitsApiGetPageBetweenTwoObjectTypesRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        return this.api.getPageBetweenTwoObjectTypes(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

}
