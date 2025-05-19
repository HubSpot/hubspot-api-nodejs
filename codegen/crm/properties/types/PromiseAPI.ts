import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { BatchInputPropertyCreate } from '../models/BatchInputPropertyCreate';
import { BatchInputPropertyName } from '../models/BatchInputPropertyName';
import { BatchReadInputPropertyName } from '../models/BatchReadInputPropertyName';
import { BatchResponseProperty } from '../models/BatchResponseProperty';
import { BatchResponsePropertyWithErrors } from '../models/BatchResponsePropertyWithErrors';
import { CollectionResponsePropertyGroupNoPaging } from '../models/CollectionResponsePropertyGroupNoPaging';
import { CollectionResponsePropertyNoPaging } from '../models/CollectionResponsePropertyNoPaging';
import { Property } from '../models/Property';
import { PropertyCreate } from '../models/PropertyCreate';
import { PropertyGroup } from '../models/PropertyGroup';
import { PropertyGroupCreate } from '../models/PropertyGroupCreate';
import { PropertyGroupUpdate } from '../models/PropertyGroupUpdate';
import { PropertyUpdate } from '../models/PropertyUpdate';
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
     * Archive a provided list of properties. This method will return a 204 No Content response on success regardless of the initial state of the property (e.g. active, already archived, non-existent).
     * Archive a batch of properties
     * @param objectType
     * @param batchInputPropertyName
     */
    public archiveWithHttpInfo(objectType: string, batchInputPropertyName: BatchInputPropertyName, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(objectType, batchInputPropertyName, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a provided list of properties. This method will return a 204 No Content response on success regardless of the initial state of the property (e.g. active, already archived, non-existent).
     * Archive a batch of properties
     * @param objectType
     * @param batchInputPropertyName
     */
    public archive(objectType: string, batchInputPropertyName: BatchInputPropertyName, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(objectType, batchInputPropertyName, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of properties using the same rules as when creating an individual property.
     * Create a batch of properties
     * @param objectType
     * @param batchInputPropertyCreate
     */
    public createWithHttpInfo(objectType: string, batchInputPropertyCreate: BatchInputPropertyCreate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseProperty | BatchResponsePropertyWithErrors>> {
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
        const result = this.api.createWithHttpInfo(objectType, batchInputPropertyCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of properties using the same rules as when creating an individual property.
     * Create a batch of properties
     * @param objectType
     * @param batchInputPropertyCreate
     */
    public create(objectType: string, batchInputPropertyCreate: BatchInputPropertyCreate, _options?: PromiseConfigurationOptions): Promise<BatchResponseProperty | BatchResponsePropertyWithErrors> {
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
        const result = this.api.create(objectType, batchInputPropertyCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a provided list of properties.
     * Read a batch of properties
     * @param objectType
     * @param batchReadInputPropertyName
     */
    public readWithHttpInfo(objectType: string, batchReadInputPropertyName: BatchReadInputPropertyName, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseProperty | BatchResponsePropertyWithErrors>> {
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
        const result = this.api.readWithHttpInfo(objectType, batchReadInputPropertyName, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a provided list of properties.
     * Read a batch of properties
     * @param objectType
     * @param batchReadInputPropertyName
     */
    public read(objectType: string, batchReadInputPropertyName: BatchReadInputPropertyName, _options?: PromiseConfigurationOptions): Promise<BatchResponseProperty | BatchResponsePropertyWithErrors> {
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
        const result = this.api.read(objectType, batchReadInputPropertyName, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCoreApi } from './ObservableAPI';

import { CoreApiRequestFactory, CoreApiResponseProcessor} from "../apis/CoreApi";
export class PromiseCoreApi {
    private api: ObservableCoreApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CoreApiRequestFactory,
        responseProcessor?: CoreApiResponseProcessor
    ) {
        this.api = new ObservableCoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Move a property identified by {propertyName} to the recycling bin.
     * Archive a property
     * @param objectType
     * @param propertyName
     */
    public archiveWithHttpInfo(objectType: string, propertyName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(objectType, propertyName, observableOptions);
        return result.toPromise();
    }

    /**
     * Move a property identified by {propertyName} to the recycling bin.
     * Archive a property
     * @param objectType
     * @param propertyName
     */
    public archive(objectType: string, propertyName: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(objectType, propertyName, observableOptions);
        return result.toPromise();
    }

    /**
     * Create and return a copy of a new property for the specified object type.
     * Create a property
     * @param objectType
     * @param propertyCreate
     */
    public createWithHttpInfo(objectType: string, propertyCreate: PropertyCreate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Property>> {
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
        const result = this.api.createWithHttpInfo(objectType, propertyCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Create and return a copy of a new property for the specified object type.
     * Create a property
     * @param objectType
     * @param propertyCreate
     */
    public create(objectType: string, propertyCreate: PropertyCreate, _options?: PromiseConfigurationOptions): Promise<Property> {
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
        const result = this.api.create(objectType, propertyCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Read all existing properties for the specified object type and HubSpot account.
     * Read all properties
     * @param objectType
     * @param [archived] Whether to return only results that have been archived.
     * @param [properties]
     */
    public getAllWithHttpInfo(objectType: string, archived?: boolean, properties?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePropertyNoPaging>> {
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
        const result = this.api.getAllWithHttpInfo(objectType, archived, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Read all existing properties for the specified object type and HubSpot account.
     * Read all properties
     * @param objectType
     * @param [archived] Whether to return only results that have been archived.
     * @param [properties]
     */
    public getAll(objectType: string, archived?: boolean, properties?: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePropertyNoPaging> {
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
        const result = this.api.getAll(objectType, archived, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a property identified by {propertyName}.
     * Read a property
     * @param objectType
     * @param propertyName
     * @param [archived] Whether to return only results that have been archived.
     * @param [properties]
     */
    public getByNameWithHttpInfo(objectType: string, propertyName: string, archived?: boolean, properties?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Property>> {
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
        const result = this.api.getByNameWithHttpInfo(objectType, propertyName, archived, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a property identified by {propertyName}.
     * Read a property
     * @param objectType
     * @param propertyName
     * @param [archived] Whether to return only results that have been archived.
     * @param [properties]
     */
    public getByName(objectType: string, propertyName: string, archived?: boolean, properties?: string, _options?: PromiseConfigurationOptions): Promise<Property> {
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
        const result = this.api.getByName(objectType, propertyName, archived, properties, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a partial update of a property identified by {propertyName}. Provided fields will be overwritten.
     * Update a property
     * @param objectType
     * @param propertyName
     * @param propertyUpdate
     */
    public updateWithHttpInfo(objectType: string, propertyName: string, propertyUpdate: PropertyUpdate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Property>> {
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
        const result = this.api.updateWithHttpInfo(objectType, propertyName, propertyUpdate, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a partial update of a property identified by {propertyName}. Provided fields will be overwritten.
     * Update a property
     * @param objectType
     * @param propertyName
     * @param propertyUpdate
     */
    public update(objectType: string, propertyName: string, propertyUpdate: PropertyUpdate, _options?: PromiseConfigurationOptions): Promise<Property> {
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
        const result = this.api.update(objectType, propertyName, propertyUpdate, observableOptions);
        return result.toPromise();
    }


}



import { ObservableGroupsApi } from './ObservableAPI';

import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";
export class PromiseGroupsApi {
    private api: ObservableGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupsApiRequestFactory,
        responseProcessor?: GroupsApiResponseProcessor
    ) {
        this.api = new ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Move a property group identified by {groupName} to the recycling bin.
     * Archive a property group
     * @param objectType
     * @param groupName
     */
    public archiveWithHttpInfo(objectType: string, groupName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(objectType, groupName, observableOptions);
        return result.toPromise();
    }

    /**
     * Move a property group identified by {groupName} to the recycling bin.
     * Archive a property group
     * @param objectType
     * @param groupName
     */
    public archive(objectType: string, groupName: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(objectType, groupName, observableOptions);
        return result.toPromise();
    }

    /**
     * Create and return a copy of a new property group.
     * Create a property group
     * @param objectType
     * @param propertyGroupCreate
     */
    public createWithHttpInfo(objectType: string, propertyGroupCreate: PropertyGroupCreate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PropertyGroup>> {
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
        const result = this.api.createWithHttpInfo(objectType, propertyGroupCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Create and return a copy of a new property group.
     * Create a property group
     * @param objectType
     * @param propertyGroupCreate
     */
    public create(objectType: string, propertyGroupCreate: PropertyGroupCreate, _options?: PromiseConfigurationOptions): Promise<PropertyGroup> {
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
        const result = this.api.create(objectType, propertyGroupCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Read all existing property groups for the specified object type and HubSpot account.
     * Read all property groups
     * @param objectType
     */
    public getAllWithHttpInfo(objectType: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePropertyGroupNoPaging>> {
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
        const result = this.api.getAllWithHttpInfo(objectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Read all existing property groups for the specified object type and HubSpot account.
     * Read all property groups
     * @param objectType
     */
    public getAll(objectType: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePropertyGroupNoPaging> {
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
        const result = this.api.getAll(objectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a property group identified by {groupName}.
     * Read a property group
     * @param objectType
     * @param groupName
     */
    public getByNameWithHttpInfo(objectType: string, groupName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PropertyGroup>> {
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
        const result = this.api.getByNameWithHttpInfo(objectType, groupName, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a property group identified by {groupName}.
     * Read a property group
     * @param objectType
     * @param groupName
     */
    public getByName(objectType: string, groupName: string, _options?: PromiseConfigurationOptions): Promise<PropertyGroup> {
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
        const result = this.api.getByName(objectType, groupName, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a partial update of a property group identified by {groupName}. Provided fields will be overwritten.
     * Update a property group
     * @param objectType
     * @param groupName
     * @param propertyGroupUpdate
     */
    public updateWithHttpInfo(objectType: string, groupName: string, propertyGroupUpdate: PropertyGroupUpdate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PropertyGroup>> {
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
        const result = this.api.updateWithHttpInfo(objectType, groupName, propertyGroupUpdate, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a partial update of a property group identified by {groupName}. Provided fields will be overwritten.
     * Update a property group
     * @param objectType
     * @param groupName
     * @param propertyGroupUpdate
     */
    public update(objectType: string, groupName: string, propertyGroupUpdate: PropertyGroupUpdate, _options?: PromiseConfigurationOptions): Promise<PropertyGroup> {
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
        const result = this.api.update(objectType, groupName, propertyGroupUpdate, observableOptions);
        return result.toPromise();
    }


}



