import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof BatchApiarchive
     */
    objectType: string
    /**
     * 
     * @type BatchInputPropertyName
     * @memberof BatchApiarchive
     */
    batchInputPropertyName: BatchInputPropertyName
}

export interface BatchApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof BatchApicreate
     */
    objectType: string
    /**
     * 
     * @type BatchInputPropertyCreate
     * @memberof BatchApicreate
     */
    batchInputPropertyCreate: BatchInputPropertyCreate
}

export interface BatchApiReadRequest {
    /**
     * 
     * @type string
     * @memberof BatchApiread
     */
    objectType: string
    /**
     * 
     * @type BatchReadInputPropertyName
     * @memberof BatchApiread
     */
    batchReadInputPropertyName: BatchReadInputPropertyName
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a provided list of properties. This method will return a 204 No Content response on success regardless of the initial state of the property (e.g. active, already archived, non-existent).
     * Archive a batch of properties
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectType, param.batchInputPropertyName,  options).toPromise();
    }

    /**
     * Archive a provided list of properties. This method will return a 204 No Content response on success regardless of the initial state of the property (e.g. active, already archived, non-existent).
     * Archive a batch of properties
     * @param param the request object
     */
    public archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectType, param.batchInputPropertyName,  options).toPromise();
    }

    /**
     * Create a batch of properties using the same rules as when creating an individual property.
     * Create a batch of properties
     * @param param the request object
     */
    public createWithHttpInfo(param: BatchApiCreateRequest, options?: Configuration): Promise<HttpInfo<BatchResponseProperty | BatchResponsePropertyWithErrors>> {
        return this.api.createWithHttpInfo(param.objectType, param.batchInputPropertyCreate,  options).toPromise();
    }

    /**
     * Create a batch of properties using the same rules as when creating an individual property.
     * Create a batch of properties
     * @param param the request object
     */
    public create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponseProperty | BatchResponsePropertyWithErrors> {
        return this.api.create(param.objectType, param.batchInputPropertyCreate,  options).toPromise();
    }

    /**
     * Read a provided list of properties.
     * Read a batch of properties
     * @param param the request object
     */
    public readWithHttpInfo(param: BatchApiReadRequest, options?: Configuration): Promise<HttpInfo<BatchResponseProperty | BatchResponsePropertyWithErrors>> {
        return this.api.readWithHttpInfo(param.objectType, param.batchReadInputPropertyName,  options).toPromise();
    }

    /**
     * Read a provided list of properties.
     * Read a batch of properties
     * @param param the request object
     */
    public read(param: BatchApiReadRequest, options?: Configuration): Promise<BatchResponseProperty | BatchResponsePropertyWithErrors> {
        return this.api.read(param.objectType, param.batchReadInputPropertyName,  options).toPromise();
    }

}

import { ObservableCoreApi } from "./ObservableAPI";
import { CoreApiRequestFactory, CoreApiResponseProcessor} from "../apis/CoreApi";

export interface CoreApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof CoreApiarchive
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof CoreApiarchive
     */
    propertyName: string
}

export interface CoreApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof CoreApicreate
     */
    objectType: string
    /**
     * 
     * @type PropertyCreate
     * @memberof CoreApicreate
     */
    propertyCreate: PropertyCreate
}

export interface CoreApiGetAllRequest {
    /**
     * 
     * @type string
     * @memberof CoreApigetAll
     */
    objectType: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof CoreApigetAll
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof CoreApigetAll
     */
    properties?: string
}

export interface CoreApiGetByNameRequest {
    /**
     * 
     * @type string
     * @memberof CoreApigetByName
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof CoreApigetByName
     */
    propertyName: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof CoreApigetByName
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof CoreApigetByName
     */
    properties?: string
}

export interface CoreApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof CoreApiupdate
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof CoreApiupdate
     */
    propertyName: string
    /**
     * 
     * @type PropertyUpdate
     * @memberof CoreApiupdate
     */
    propertyUpdate: PropertyUpdate
}

export class ObjectCoreApi {
    private api: ObservableCoreApi

    public constructor(configuration: Configuration, requestFactory?: CoreApiRequestFactory, responseProcessor?: CoreApiResponseProcessor) {
        this.api = new ObservableCoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Move a property identified by {propertyName} to the recycling bin.
     * Archive a property
     * @param param the request object
     */
    public archiveWithHttpInfo(param: CoreApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectType, param.propertyName,  options).toPromise();
    }

    /**
     * Move a property identified by {propertyName} to the recycling bin.
     * Archive a property
     * @param param the request object
     */
    public archive(param: CoreApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectType, param.propertyName,  options).toPromise();
    }

    /**
     * Create and return a copy of a new property for the specified object type.
     * Create a property
     * @param param the request object
     */
    public createWithHttpInfo(param: CoreApiCreateRequest, options?: Configuration): Promise<HttpInfo<Property>> {
        return this.api.createWithHttpInfo(param.objectType, param.propertyCreate,  options).toPromise();
    }

    /**
     * Create and return a copy of a new property for the specified object type.
     * Create a property
     * @param param the request object
     */
    public create(param: CoreApiCreateRequest, options?: Configuration): Promise<Property> {
        return this.api.create(param.objectType, param.propertyCreate,  options).toPromise();
    }

    /**
     * Read all existing properties for the specified object type and HubSpot account.
     * Read all properties
     * @param param the request object
     */
    public getAllWithHttpInfo(param: CoreApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePropertyNoPaging>> {
        return this.api.getAllWithHttpInfo(param.objectType, param.archived, param.properties,  options).toPromise();
    }

    /**
     * Read all existing properties for the specified object type and HubSpot account.
     * Read all properties
     * @param param the request object
     */
    public getAll(param: CoreApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePropertyNoPaging> {
        return this.api.getAll(param.objectType, param.archived, param.properties,  options).toPromise();
    }

    /**
     * Read a property identified by {propertyName}.
     * Read a property
     * @param param the request object
     */
    public getByNameWithHttpInfo(param: CoreApiGetByNameRequest, options?: Configuration): Promise<HttpInfo<Property>> {
        return this.api.getByNameWithHttpInfo(param.objectType, param.propertyName, param.archived, param.properties,  options).toPromise();
    }

    /**
     * Read a property identified by {propertyName}.
     * Read a property
     * @param param the request object
     */
    public getByName(param: CoreApiGetByNameRequest, options?: Configuration): Promise<Property> {
        return this.api.getByName(param.objectType, param.propertyName, param.archived, param.properties,  options).toPromise();
    }

    /**
     * Perform a partial update of a property identified by {propertyName}. Provided fields will be overwritten.
     * Update a property
     * @param param the request object
     */
    public updateWithHttpInfo(param: CoreApiUpdateRequest, options?: Configuration): Promise<HttpInfo<Property>> {
        return this.api.updateWithHttpInfo(param.objectType, param.propertyName, param.propertyUpdate,  options).toPromise();
    }

    /**
     * Perform a partial update of a property identified by {propertyName}. Provided fields will be overwritten.
     * Update a property
     * @param param the request object
     */
    public update(param: CoreApiUpdateRequest, options?: Configuration): Promise<Property> {
        return this.api.update(param.objectType, param.propertyName, param.propertyUpdate,  options).toPromise();
    }

}

import { ObservableGroupsApi } from "./ObservableAPI";
import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";

export interface GroupsApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof GroupsApiarchive
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof GroupsApiarchive
     */
    groupName: string
}

export interface GroupsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof GroupsApicreate
     */
    objectType: string
    /**
     * 
     * @type PropertyGroupCreate
     * @memberof GroupsApicreate
     */
    propertyGroupCreate: PropertyGroupCreate
}

export interface GroupsApiGetAllRequest {
    /**
     * 
     * @type string
     * @memberof GroupsApigetAll
     */
    objectType: string
}

export interface GroupsApiGetByNameRequest {
    /**
     * 
     * @type string
     * @memberof GroupsApigetByName
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof GroupsApigetByName
     */
    groupName: string
}

export interface GroupsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof GroupsApiupdate
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof GroupsApiupdate
     */
    groupName: string
    /**
     * 
     * @type PropertyGroupUpdate
     * @memberof GroupsApiupdate
     */
    propertyGroupUpdate: PropertyGroupUpdate
}

export class ObjectGroupsApi {
    private api: ObservableGroupsApi

    public constructor(configuration: Configuration, requestFactory?: GroupsApiRequestFactory, responseProcessor?: GroupsApiResponseProcessor) {
        this.api = new ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Move a property group identified by {groupName} to the recycling bin.
     * Archive a property group
     * @param param the request object
     */
    public archiveWithHttpInfo(param: GroupsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectType, param.groupName,  options).toPromise();
    }

    /**
     * Move a property group identified by {groupName} to the recycling bin.
     * Archive a property group
     * @param param the request object
     */
    public archive(param: GroupsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectType, param.groupName,  options).toPromise();
    }

    /**
     * Create and return a copy of a new property group.
     * Create a property group
     * @param param the request object
     */
    public createWithHttpInfo(param: GroupsApiCreateRequest, options?: Configuration): Promise<HttpInfo<PropertyGroup>> {
        return this.api.createWithHttpInfo(param.objectType, param.propertyGroupCreate,  options).toPromise();
    }

    /**
     * Create and return a copy of a new property group.
     * Create a property group
     * @param param the request object
     */
    public create(param: GroupsApiCreateRequest, options?: Configuration): Promise<PropertyGroup> {
        return this.api.create(param.objectType, param.propertyGroupCreate,  options).toPromise();
    }

    /**
     * Read all existing property groups for the specified object type and HubSpot account.
     * Read all property groups
     * @param param the request object
     */
    public getAllWithHttpInfo(param: GroupsApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePropertyGroupNoPaging>> {
        return this.api.getAllWithHttpInfo(param.objectType,  options).toPromise();
    }

    /**
     * Read all existing property groups for the specified object type and HubSpot account.
     * Read all property groups
     * @param param the request object
     */
    public getAll(param: GroupsApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePropertyGroupNoPaging> {
        return this.api.getAll(param.objectType,  options).toPromise();
    }

    /**
     * Read a property group identified by {groupName}.
     * Read a property group
     * @param param the request object
     */
    public getByNameWithHttpInfo(param: GroupsApiGetByNameRequest, options?: Configuration): Promise<HttpInfo<PropertyGroup>> {
        return this.api.getByNameWithHttpInfo(param.objectType, param.groupName,  options).toPromise();
    }

    /**
     * Read a property group identified by {groupName}.
     * Read a property group
     * @param param the request object
     */
    public getByName(param: GroupsApiGetByNameRequest, options?: Configuration): Promise<PropertyGroup> {
        return this.api.getByName(param.objectType, param.groupName,  options).toPromise();
    }

    /**
     * Perform a partial update of a property group identified by {groupName}. Provided fields will be overwritten.
     * Update a property group
     * @param param the request object
     */
    public updateWithHttpInfo(param: GroupsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<PropertyGroup>> {
        return this.api.updateWithHttpInfo(param.objectType, param.groupName, param.propertyGroupUpdate,  options).toPromise();
    }

    /**
     * Perform a partial update of a property group identified by {groupName}. Provided fields will be overwritten.
     * Update a property group
     * @param param the request object
     */
    public update(param: GroupsApiUpdateRequest, options?: Configuration): Promise<PropertyGroup> {
        return this.api.update(param.objectType, param.groupName, param.propertyGroupUpdate,  options).toPromise();
    }

}
