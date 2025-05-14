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
     * Batch create user configurations between two object types
     * Create
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
     * Batch delete user configurations between two object types
     * Delete
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
     * Batch delete user configurations between two object types
     * Delete
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
     * Batch update user configurations between two object types
     * Update
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
     * Batch update user configurations between two object types
     * Update
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
     * Returns all user configurations available on a given portal
     * Read All
     */
    public getAllWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
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
        const result = this.api.getAllWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all user configurations available on a given portal
     * Read All
     */
    public getAll(_options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
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
        const result = this.api.getAll(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns user configurations on all association definitions between two object types
     * Read
     * @param fromObjectType
     * @param toObjectType
     */
    public getAllBetweenTwoObjectTypesWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
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
        const result = this.api.getAllBetweenTwoObjectTypesWithHttpInfo(fromObjectType, toObjectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns user configurations on all association definitions between two object types
     * Read
     * @param fromObjectType
     * @param toObjectType
     */
    public getAllBetweenTwoObjectTypes(fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
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
        const result = this.api.getAllBetweenTwoObjectTypes(fromObjectType, toObjectType, observableOptions);
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
     * Create a user defined association definition
     * Create
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
     * Create a user defined association definition
     * Create
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
     * Returns all association types between two object types
     * Read
     * @param fromObjectType
     * @param toObjectType
     */
    public getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
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
        const result = this.api.getAllWithHttpInfo(fromObjectType, toObjectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param fromObjectType
     * @param toObjectType
     */
    public getAll(fromObjectType: string, toObjectType: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
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
        const result = this.api.getAll(fromObjectType, toObjectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an association definition
     * Delete
     * @param fromObjectType
     * @param toObjectType
     * @param associationTypeId
     */
    public removeWithHttpInfo(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.removeWithHttpInfo(fromObjectType, toObjectType, associationTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an association definition
     * Delete
     * @param fromObjectType
     * @param toObjectType
     * @param associationTypeId
     */
    public remove(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.remove(fromObjectType, toObjectType, associationTypeId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a user defined association definition
     * Update
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
     * Update a user defined association definition
     * Update
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



