import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { AssociationDefinition } from '../models/AssociationDefinition';
import { AssociationDefinitionEgg } from '../models/AssociationDefinitionEgg';
import { CollectionResponseObjectSchemaNoPaging } from '../models/CollectionResponseObjectSchemaNoPaging';
import { ObjectSchema } from '../models/ObjectSchema';
import { ObjectSchemaEgg } from '../models/ObjectSchemaEgg';
import { ObjectTypeDefinition } from '../models/ObjectTypeDefinition';
import { ObjectTypeDefinitionPatch } from '../models/ObjectTypeDefinitionPatch';

import { ObservableCoreApi } from "./ObservableAPI";
import { CoreApiRequestFactory, CoreApiResponseProcessor} from "../apis/CoreApi";

export interface CoreApiArchiveRequest {
    /**
     * Fully qualified name or object type ID of your schema.
     * Defaults to: undefined
     * @type string
     * @memberof CoreApiarchive
     */
    objectType: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: false
     * @type boolean
     * @memberof CoreApiarchive
     */
    archived?: boolean
}

export interface CoreApiArchiveAssociationRequest {
    /**
     * Fully qualified name or object type ID of your schema.
     * Defaults to: undefined
     * @type string
     * @memberof CoreApiarchiveAssociation
     */
    objectType: string
    /**
     * Unique ID of the association to remove.
     * Defaults to: undefined
     * @type string
     * @memberof CoreApiarchiveAssociation
     */
    associationIdentifier: string
}

export interface CoreApiCreateRequest {
    /**
     * Object schema definition, including properties and associations.
     * @type ObjectSchemaEgg
     * @memberof CoreApicreate
     */
    objectSchemaEgg: ObjectSchemaEgg
}

export interface CoreApiCreateAssociationRequest {
    /**
     * Fully qualified name or object type ID of your schema.
     * Defaults to: undefined
     * @type string
     * @memberof CoreApicreateAssociation
     */
    objectType: string
    /**
     * Attributes that define the association.
     * @type AssociationDefinitionEgg
     * @memberof CoreApicreateAssociation
     */
    associationDefinitionEgg: AssociationDefinitionEgg
}

export interface CoreApiGetAllRequest {
    /**
     * Whether to return only results that have been archived.
     * Defaults to: false
     * @type boolean
     * @memberof CoreApigetAll
     */
    archived?: boolean
}

export interface CoreApiGetByIdRequest {
    /**
     * Fully qualified name or object type ID of your schema.
     * Defaults to: undefined
     * @type string
     * @memberof CoreApigetById
     */
    objectType: string
}

export interface CoreApiUpdateRequest {
    /**
     * Fully qualified name or object type ID of your schema.
     * Defaults to: undefined
     * @type string
     * @memberof CoreApiupdate
     */
    objectType: string
    /**
     * Attributes to update in your schema.
     * @type ObjectTypeDefinitionPatch
     * @memberof CoreApiupdate
     */
    objectTypeDefinitionPatch: ObjectTypeDefinitionPatch
}

export class ObjectCoreApi {
    private api: ObservableCoreApi

    public constructor(configuration: Configuration, requestFactory?: CoreApiRequestFactory, responseProcessor?: CoreApiResponseProcessor) {
        this.api = new ObservableCoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a schema. Any existing records of this schema must be deleted **first**. Otherwise this call will fail.
     * Delete a schema
     * @param param the request object
     */
    public archiveWithHttpInfo(param: CoreApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectType, param.archived,  options).toPromise();
    }

    /**
     * Deletes a schema. Any existing records of this schema must be deleted **first**. Otherwise this call will fail.
     * Delete a schema
     * @param param the request object
     */
    public archive(param: CoreApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.objectType, param.archived,  options).toPromise();
    }

    /**
     * Removes an existing association from a schema.
     * Remove an association
     * @param param the request object
     */
    public archiveAssociationWithHttpInfo(param: CoreApiArchiveAssociationRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveAssociationWithHttpInfo(param.objectType, param.associationIdentifier,  options).toPromise();
    }

    /**
     * Removes an existing association from a schema.
     * Remove an association
     * @param param the request object
     */
    public archiveAssociation(param: CoreApiArchiveAssociationRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveAssociation(param.objectType, param.associationIdentifier,  options).toPromise();
    }

    /**
     * Define a new object schema, along with custom properties and associations. The entire object schema, including its object type ID, properties, and associations will be returned in the response.
     * Create a new schema
     * @param param the request object
     */
    public createWithHttpInfo(param: CoreApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ObjectSchema>> {
        return this.api.createWithHttpInfo(param.objectSchemaEgg,  options).toPromise();
    }

    /**
     * Define a new object schema, along with custom properties and associations. The entire object schema, including its object type ID, properties, and associations will be returned in the response.
     * Create a new schema
     * @param param the request object
     */
    public create(param: CoreApiCreateRequest, options?: ConfigurationOptions): Promise<ObjectSchema> {
        return this.api.create(param.objectSchemaEgg,  options).toPromise();
    }

    /**
     * Defines a new association between the primary schema\'s object type and other object types.
     * Create an association
     * @param param the request object
     */
    public createAssociationWithHttpInfo(param: CoreApiCreateAssociationRequest, options?: ConfigurationOptions): Promise<HttpInfo<AssociationDefinition>> {
        return this.api.createAssociationWithHttpInfo(param.objectType, param.associationDefinitionEgg,  options).toPromise();
    }

    /**
     * Defines a new association between the primary schema\'s object type and other object types.
     * Create an association
     * @param param the request object
     */
    public createAssociation(param: CoreApiCreateAssociationRequest, options?: ConfigurationOptions): Promise<AssociationDefinition> {
        return this.api.createAssociation(param.objectType, param.associationDefinitionEgg,  options).toPromise();
    }

    /**
     * Returns all object schemas that have been defined for your account.
     * Get all schemas
     * @param param the request object
     */
    public getAllWithHttpInfo(param: CoreApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseObjectSchemaNoPaging>> {
        return this.api.getAllWithHttpInfo(param.archived,  options).toPromise();
    }

    /**
     * Returns all object schemas that have been defined for your account.
     * Get all schemas
     * @param param the request object
     */
    public getAll(param: CoreApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseObjectSchemaNoPaging> {
        return this.api.getAll(param.archived,  options).toPromise();
    }

    /**
     * Returns an existing object schema.
     * Get an existing schema
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: CoreApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ObjectSchema>> {
        return this.api.getByIdWithHttpInfo(param.objectType,  options).toPromise();
    }

    /**
     * Returns an existing object schema.
     * Get an existing schema
     * @param param the request object
     */
    public getById(param: CoreApiGetByIdRequest, options?: ConfigurationOptions): Promise<ObjectSchema> {
        return this.api.getById(param.objectType,  options).toPromise();
    }

    /**
     * Update the details for an existing object schema.
     * Update a schema
     * @param param the request object
     */
    public updateWithHttpInfo(param: CoreApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ObjectTypeDefinition>> {
        return this.api.updateWithHttpInfo(param.objectType, param.objectTypeDefinitionPatch,  options).toPromise();
    }

    /**
     * Update the details for an existing object schema.
     * Update a schema
     * @param param the request object
     */
    public update(param: CoreApiUpdateRequest, options?: ConfigurationOptions): Promise<ObjectTypeDefinition> {
        return this.api.update(param.objectType, param.objectTypeDefinitionPatch,  options).toPromise();
    }

}
