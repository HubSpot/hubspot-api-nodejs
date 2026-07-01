import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableLabelsApi } from './ObservableAPI';

import { LabelsApiRequestFactory, LabelsApiResponseProcessor} from "../apis/LabelsApi";
export class PromiseLabelsApi {
    private api: ObservableLabelsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LabelsApiRequestFactory,
        responseProcessor?: LabelsApiResponseProcessor
    ) {
        this.api = new ObservableLabelsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new label that describes the relationship between two specified CRM object types. This can help in categorizing and managing associations more effectively.
     * Create association label
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionCreateRequest
     */
    public createWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new label that describes the relationship between two specified CRM object types. This can help in categorizing and managing associations more effectively.
     * Create association label
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionCreateRequest
     */
    public create(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: PromiseConfigurationOptions): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all labels that describe the relationships between two specified CRM object types. These labels provide context about the nature of the associations.
     * Retrieve association labels
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getPageWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPageWithHttpInfo(fromObjectType, toObjectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all labels that describe the relationships between two specified CRM object types. These labels provide context about the nature of the associations.
     * Retrieve association labels
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getPage(fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPage(fromObjectType, toObjectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a specific label from the association between two CRM object types.
     * Delete association label
     * @param associationTypeId 
     * @param fromObjectType 
     * @param toObjectType 
     */
    public removeWithHttpInfo(associationTypeId: number, fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.removeWithHttpInfo(associationTypeId, fromObjectType, toObjectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a specific label from the association between two CRM object types.
     * Delete association label
     * @param associationTypeId 
     * @param fromObjectType 
     * @param toObjectType 
     */
    public remove(associationTypeId: number, fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.remove(associationTypeId, fromObjectType, toObjectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing label that describes the relationship between two specified CRM object types. This allows for modifications to existing association labels to better reflect the nature of the relationship.
     * Update association label
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionUpdateRequest
     */
    public updateWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing label that describes the relationship between two specified CRM object types. This allows for modifications to existing association labels to better reflect the nature of the relationship.
     * Update association label
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionUpdateRequest
     */
    public update(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLimitsApi } from './ObservableAPI';

import { LimitsApiRequestFactory, LimitsApiResponseProcessor} from "../apis/LimitsApi";
export class PromiseLimitsApi {
    private api: ObservableLimitsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LimitsApiRequestFactory,
        responseProcessor?: LimitsApiResponseProcessor
    ) {
        this.api = new ObservableLimitsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch configure association limits between two object types.
     * Configure association limits
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationDefinitionConfigurationCreateRequest
     */
    public batchCreateWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationCreateRequest: BatchInputPublicAssociationDefinitionConfigurationCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.batchCreateWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch configure association limits between two object types.
     * Configure association limits
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationDefinitionConfigurationCreateRequest
     */
    public batchCreate(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationCreateRequest: BatchInputPublicAssociationDefinitionConfigurationCreateRequest, _options?: PromiseConfigurationOptions): Promise<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.batchCreate(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch delete limits that have been defined for association types between two object types.
     * Remove association limits
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationSpec
     */
    public batchRemoveWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationSpec: BatchInputPublicAssociationSpec, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.batchRemoveWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationSpec, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch delete limits that have been defined for association types between two object types.
     * Remove association limits
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationSpec
     */
    public batchRemove(fromObjectType: string, toObjectType: string, batchInputPublicAssociationSpec: BatchInputPublicAssociationSpec, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.batchRemove(fromObjectType, toObjectType, batchInputPublicAssociationSpec, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch update association limits that have been configured between two object types.
     * Update association limits
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationDefinitionConfigurationUpdateRequest
     */
    public batchUpdateWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationUpdateRequest: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.batchUpdateWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch update association limits that have been configured between two object types.
     * Update association limits
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationDefinitionConfigurationUpdateRequest
     */
    public batchUpdate(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationUpdateRequest: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest, _options?: PromiseConfigurationOptions): Promise<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.batchUpdate(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all configured association limits between objects, which include details about how different CRM object types are associated with each other.
     * Retrieve all association limits
     */
    public getPageWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPageWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all configured association limits between objects, which include details about how different CRM object types are associated with each other.
     * Retrieve all association limits
     */
    public getPage(_options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPage(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the configuration details for associations between two specified CRM object types. Use this endpoint to understand limits that have been set for specific association types.
     * Retrieve association limits
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getPageBetweenTwoObjectTypesWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPageBetweenTwoObjectTypesWithHttpInfo(fromObjectType, toObjectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the configuration details for associations between two specified CRM object types. Use this endpoint to understand limits that have been set for specific association types.
     * Retrieve association limits
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getPageBetweenTwoObjectTypes(fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPageBetweenTwoObjectTypes(fromObjectType, toObjectType, observableOptions);
        return result.toPromise();
    }


}



