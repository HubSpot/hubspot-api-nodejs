import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BatchInputPropertyCreate } from '../models/BatchInputPropertyCreate';
import { BatchInputPropertyName } from '../models/BatchInputPropertyName';
import { BatchReadInputPropertyName } from '../models/BatchReadInputPropertyName';
import { BatchResponseProperty } from '../models/BatchResponseProperty';
import { CollectionResponseProperty } from '../models/CollectionResponseProperty';
import { CollectionResponsePropertyGroup } from '../models/CollectionResponsePropertyGroup';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Option } from '../models/Option';
import { OptionInput } from '../models/OptionInput';
import { Paging } from '../models/Paging';
import { Property } from '../models/Property';
import { PropertyCreate } from '../models/PropertyCreate';
import { PropertyGroup } from '../models/PropertyGroup';
import { PropertyGroupCreate } from '../models/PropertyGroupCreate';
import { PropertyGroupUpdate } from '../models/PropertyGroupUpdate';
import { PropertyModificationMetadata } from '../models/PropertyModificationMetadata';
import { PropertyName } from '../models/PropertyName';
import { PropertyUpdate } from '../models/PropertyUpdate';
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
     * Archive a provided list of properties. This method will return a 204 No Content response on success regardless of the initial state of the property (e.g. active, already archived, non-existent).
     * Archive a batch of properties
     * @param objectType 
     * @param batchInputPropertyName 
     */
    public archive(objectType: string, batchInputPropertyName: BatchInputPropertyName, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectType, batchInputPropertyName, _options);
        return result.toPromise();
    }

    /**
     * Create a batch of properties using the same rules as when creating an individual property.
     * Create a batch of properties
     * @param objectType 
     * @param batchInputPropertyCreate 
     */
    public create(objectType: string, batchInputPropertyCreate: BatchInputPropertyCreate, _options?: Configuration): Promise<BatchResponseProperty> {
        const result = this.api.create(objectType, batchInputPropertyCreate, _options);
        return result.toPromise();
    }

    /**
     * Read a provided list of properties.
     * Read a batch of properties
     * @param objectType 
     * @param batchReadInputPropertyName 
     */
    public read(objectType: string, batchReadInputPropertyName: BatchReadInputPropertyName, _options?: Configuration): Promise<BatchResponseProperty> {
        const result = this.api.read(objectType, batchReadInputPropertyName, _options);
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
    public archive(objectType: string, propertyName: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectType, propertyName, _options);
        return result.toPromise();
    }

    /**
     * Create and return a copy of a new property for the specified object type.
     * Create a property
     * @param objectType 
     * @param propertyCreate 
     */
    public create(objectType: string, propertyCreate: PropertyCreate, _options?: Configuration): Promise<Property> {
        const result = this.api.create(objectType, propertyCreate, _options);
        return result.toPromise();
    }

    /**
     * Read all existing properties for the specified object type and HubSpot account.
     * Read all properties
     * @param objectType 
     * @param archived Whether to return only results that have been archived.
     */
    public getAll(objectType: string, archived?: boolean, _options?: Configuration): Promise<CollectionResponseProperty> {
        const result = this.api.getAll(objectType, archived, _options);
        return result.toPromise();
    }

    /**
     * Read a property identified by {propertyName}.
     * Read a property
     * @param objectType 
     * @param propertyName 
     * @param archived Whether to return only results that have been archived.
     */
    public getByName(objectType: string, propertyName: string, archived?: boolean, _options?: Configuration): Promise<Property> {
        const result = this.api.getByName(objectType, propertyName, archived, _options);
        return result.toPromise();
    }

    /**
     * Perform a partial update of a property identified by {propertyName}. Provided fields will be overwritten.
     * Update a property
     * @param objectType 
     * @param propertyName 
     * @param propertyUpdate 
     */
    public update(objectType: string, propertyName: string, propertyUpdate: PropertyUpdate, _options?: Configuration): Promise<Property> {
        const result = this.api.update(objectType, propertyName, propertyUpdate, _options);
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
    public archive(objectType: string, groupName: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectType, groupName, _options);
        return result.toPromise();
    }

    /**
     * Create and return a copy of a new property group.
     * Create a property group
     * @param objectType 
     * @param propertyGroupCreate 
     */
    public create(objectType: string, propertyGroupCreate: PropertyGroupCreate, _options?: Configuration): Promise<PropertyGroup> {
        const result = this.api.create(objectType, propertyGroupCreate, _options);
        return result.toPromise();
    }

    /**
     * Read all existing property groups for the specified object type and HubSpot account.
     * Read all property groups
     * @param objectType 
     */
    public getAll(objectType: string, _options?: Configuration): Promise<CollectionResponsePropertyGroup> {
        const result = this.api.getAll(objectType, _options);
        return result.toPromise();
    }

    /**
     * Read a property group identified by {groupName}.
     * Read a property group
     * @param objectType 
     * @param groupName 
     */
    public getByName(objectType: string, groupName: string, _options?: Configuration): Promise<PropertyGroup> {
        const result = this.api.getByName(objectType, groupName, _options);
        return result.toPromise();
    }

    /**
     * Perform a partial update of a property group identified by {groupName}. Provided fields will be overwritten.
     * Update a property group
     * @param objectType 
     * @param groupName 
     * @param propertyGroupUpdate 
     */
    public update(objectType: string, groupName: string, propertyGroupUpdate: PropertyGroupUpdate, _options?: Configuration): Promise<PropertyGroup> {
        const result = this.api.update(objectType, groupName, propertyGroupUpdate, _options);
        return result.toPromise();
    }


}



