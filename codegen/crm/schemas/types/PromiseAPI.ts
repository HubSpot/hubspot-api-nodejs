import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AssociationDefinition } from '../models/AssociationDefinition';
import { AssociationDefinitionEgg } from '../models/AssociationDefinitionEgg';
import { CollectionResponseObjectSchemaNoPaging } from '../models/CollectionResponseObjectSchemaNoPaging';
import { ObjectSchema } from '../models/ObjectSchema';
import { ObjectSchemaEgg } from '../models/ObjectSchemaEgg';
import { ObjectTypeDefinition } from '../models/ObjectTypeDefinition';
import { ObjectTypeDefinitionPatch } from '../models/ObjectTypeDefinitionPatch';
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
     * Deletes a schema. Any existing records of this schema must be deleted **first**. Otherwise this call will fail.
     * Delete a schema
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectType: string, archived?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(objectType, archived, _options);
        return result.toPromise();
    }

    /**
     * Deletes a schema. Any existing records of this schema must be deleted **first**. Otherwise this call will fail.
     * Delete a schema
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectType: string, archived?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectType, archived, _options);
        return result.toPromise();
    }

    /**
     * Removes an existing association from a schema.
     * Remove an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationIdentifier Unique ID of the association to remove.
     */
    public archiveAssociationWithHttpInfo(objectType: string, associationIdentifier: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveAssociationWithHttpInfo(objectType, associationIdentifier, _options);
        return result.toPromise();
    }

    /**
     * Removes an existing association from a schema.
     * Remove an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationIdentifier Unique ID of the association to remove.
     */
    public archiveAssociation(objectType: string, associationIdentifier: string, _options?: Configuration): Promise<void> {
        const result = this.api.archiveAssociation(objectType, associationIdentifier, _options);
        return result.toPromise();
    }

    /**
     * Define a new object schema, along with custom properties and associations. The entire object schema, including its object type ID, properties, and associations will be returned in the response.
     * Create a new schema
     * @param objectSchemaEgg Object schema definition, including properties and associations.
     */
    public createWithHttpInfo(objectSchemaEgg: ObjectSchemaEgg, _options?: Configuration): Promise<HttpInfo<ObjectSchema>> {
        const result = this.api.createWithHttpInfo(objectSchemaEgg, _options);
        return result.toPromise();
    }

    /**
     * Define a new object schema, along with custom properties and associations. The entire object schema, including its object type ID, properties, and associations will be returned in the response.
     * Create a new schema
     * @param objectSchemaEgg Object schema definition, including properties and associations.
     */
    public create(objectSchemaEgg: ObjectSchemaEgg, _options?: Configuration): Promise<ObjectSchema> {
        const result = this.api.create(objectSchemaEgg, _options);
        return result.toPromise();
    }

    /**
     * Defines a new association between the primary schema\'s object type and other object types.
     * Create an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationDefinitionEgg Attributes that define the association.
     */
    public createAssociationWithHttpInfo(objectType: string, associationDefinitionEgg: AssociationDefinitionEgg, _options?: Configuration): Promise<HttpInfo<AssociationDefinition>> {
        const result = this.api.createAssociationWithHttpInfo(objectType, associationDefinitionEgg, _options);
        return result.toPromise();
    }

    /**
     * Defines a new association between the primary schema\'s object type and other object types.
     * Create an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationDefinitionEgg Attributes that define the association.
     */
    public createAssociation(objectType: string, associationDefinitionEgg: AssociationDefinitionEgg, _options?: Configuration): Promise<AssociationDefinition> {
        const result = this.api.createAssociation(objectType, associationDefinitionEgg, _options);
        return result.toPromise();
    }

    /**
     * Returns all object schemas that have been defined for your account.
     * Get all schemas
     * @param archived Whether to return only results that have been archived.
     */
    public getAllWithHttpInfo(archived?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionResponseObjectSchemaNoPaging>> {
        const result = this.api.getAllWithHttpInfo(archived, _options);
        return result.toPromise();
    }

    /**
     * Returns all object schemas that have been defined for your account.
     * Get all schemas
     * @param archived Whether to return only results that have been archived.
     */
    public getAll(archived?: boolean, _options?: Configuration): Promise<CollectionResponseObjectSchemaNoPaging> {
        const result = this.api.getAll(archived, _options);
        return result.toPromise();
    }

    /**
     * Returns an existing object schema.
     * Get an existing schema
     * @param objectType Fully qualified name or object type ID of your schema.
     */
    public getByIdWithHttpInfo(objectType: string, _options?: Configuration): Promise<HttpInfo<ObjectSchema>> {
        const result = this.api.getByIdWithHttpInfo(objectType, _options);
        return result.toPromise();
    }

    /**
     * Returns an existing object schema.
     * Get an existing schema
     * @param objectType Fully qualified name or object type ID of your schema.
     */
    public getById(objectType: string, _options?: Configuration): Promise<ObjectSchema> {
        const result = this.api.getById(objectType, _options);
        return result.toPromise();
    }

    /**
     * Update the details for an existing object schema.
     * Update a schema
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param objectTypeDefinitionPatch Attributes to update in your schema.
     */
    public updateWithHttpInfo(objectType: string, objectTypeDefinitionPatch: ObjectTypeDefinitionPatch, _options?: Configuration): Promise<HttpInfo<ObjectTypeDefinition>> {
        const result = this.api.updateWithHttpInfo(objectType, objectTypeDefinitionPatch, _options);
        return result.toPromise();
    }

    /**
     * Update the details for an existing object schema.
     * Update a schema
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param objectTypeDefinitionPatch Attributes to update in your schema.
     */
    public update(objectType: string, objectTypeDefinitionPatch: ObjectTypeDefinitionPatch, _options?: Configuration): Promise<ObjectTypeDefinition> {
        const result = this.api.update(objectType, objectTypeDefinitionPatch, _options);
        return result.toPromise();
    }


}



import { ObservablePublicObjectSchemasApi } from './ObservableAPI';

import { PublicObjectSchemasApiRequestFactory, PublicObjectSchemasApiResponseProcessor} from "../apis/PublicObjectSchemasApi";
export class PromisePublicObjectSchemasApi {
    private api: ObservablePublicObjectSchemasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicObjectSchemasApiRequestFactory,
        responseProcessor?: PublicObjectSchemasApiResponseProcessor
    ) {
        this.api = new ObservablePublicObjectSchemasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param objectType 
     */
    public purgeWithHttpInfo(objectType: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.purgeWithHttpInfo(objectType, _options);
        return result.toPromise();
    }

    /**
     * @param objectType 
     */
    public purge(objectType: string, _options?: Configuration): Promise<void> {
        const result = this.api.purge(objectType, _options);
        return result.toPromise();
    }


}



