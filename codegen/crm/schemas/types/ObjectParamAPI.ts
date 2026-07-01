import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { AssociationDefinition } from '../models/AssociationDefinition';
import { AssociationDefinitionEgg } from '../models/AssociationDefinitionEgg';
import { CollectionResponseObjectSchemaNoPaging } from '../models/CollectionResponseObjectSchemaNoPaging';
import { ObjectSchema } from '../models/ObjectSchema';
import { ObjectSchemaBatchReadRequest } from '../models/ObjectSchemaBatchReadRequest';
import { ObjectSchemaEgg } from '../models/ObjectSchemaEgg';
import { ObjectTypeDefinition } from '../models/ObjectTypeDefinition';
import { ObjectTypeDefinitionPatch } from '../models/ObjectTypeDefinitionPatch';

import { ObservableAdvancedApi } from "./ObservableAPI";
import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";

export interface AdvancedApiCreateAssociationRequest {
    /**
     * Fully qualified name or object type ID of your schema.
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApicreateAssociation
     */
    objectType: string
    /**
     * Attributes that define the association.
     * @type AssociationDefinitionEgg
     * @memberof AdvancedApicreateAssociation
     */
    associationDefinitionEgg: AssociationDefinitionEgg
}

export class ObjectAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedApiRequestFactory, responseProcessor?: AdvancedApiResponseProcessor) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new association between the specified object type and another object type. This operation requires the definition of the association attributes, such as the primary and target object type IDs.
     * Create an association for a specified object type.
     * @param param the request object
     */
    public createAssociationWithHttpInfo(param: AdvancedApiCreateAssociationRequest, options?: ConfigurationOptions): Promise<HttpInfo<AssociationDefinition>> {
        return this.api.createAssociationWithHttpInfo(param.objectType, param.associationDefinitionEgg,  options).toPromise();
    }

    /**
     * Create a new association between the specified object type and another object type. This operation requires the definition of the association attributes, such as the primary and target object type IDs.
     * Create an association for a specified object type.
     * @param param the request object
     */
    public createAssociation(param: AdvancedApiCreateAssociationRequest, options?: ConfigurationOptions): Promise<AssociationDefinition> {
        return this.api.createAssociation(param.objectType, param.associationDefinitionEgg,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * Fully qualified name or object type ID of your schema.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    objectType: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: false
     * @type boolean
     * @memberof BasicApiarchive
     */
    archived?: boolean
}

export interface BasicApiArchiveAssociationRequest {
    /**
     * Unique ID of the association to remove.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchiveAssociation
     */
    associationIdentifier: string
    /**
     * Fully qualified name or object type ID of your schema.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchiveAssociation
     */
    objectType: string
}

export interface BasicApiCreateRequest {
    /**
     * Object schema definition, including properties and associations.
     * @type ObjectSchemaEgg
     * @memberof BasicApicreate
     */
    objectSchemaEgg: ObjectSchemaEgg
}

export interface BasicApiGetAllRequest {
    /**
     * Whether to return only results that have been archived.
     * Defaults to: false
     * @type boolean
     * @memberof BasicApigetAll
     */
    archived?: boolean
    /**
     * 
     * Defaults to: true
     * @type boolean
     * @memberof BasicApigetAll
     */
    includeAssociationDefinitions?: boolean
    /**
     * 
     * Defaults to: true
     * @type boolean
     * @memberof BasicApigetAll
     */
    includeAuditMetadata?: boolean
    /**
     * 
     * Defaults to: true
     * @type boolean
     * @memberof BasicApigetAll
     */
    includePropertyDefinitions?: boolean
}

export interface BasicApiGetByIdRequest {
    /**
     * Fully qualified name or object type ID of your schema.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    objectType: string
    /**
     * 
     * Defaults to: true
     * @type boolean
     * @memberof BasicApigetById
     */
    includeAssociationDefinitions?: boolean
    /**
     * 
     * Defaults to: true
     * @type boolean
     * @memberof BasicApigetById
     */
    includeAuditMetadata?: boolean
    /**
     * 
     * Defaults to: true
     * @type boolean
     * @memberof BasicApigetById
     */
    includePropertyDefinitions?: boolean
}

export interface BasicApiUpdateRequest {
    /**
     * Fully qualified name or object type ID of your schema.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    objectType: string
    /**
     * Attributes to update in your schema.
     * @type ObjectTypeDefinitionPatch
     * @memberof BasicApiupdate
     */
    objectTypeDefinitionPatch: ObjectTypeDefinitionPatch
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove a custom object schema from the account using its object type ID or fully qualified name.
     * Delete the schema of a specified custom object.
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectType, param.archived,  options).toPromise();
    }

    /**
     * Remove a custom object schema from the account using its object type ID or fully qualified name.
     * Delete the schema of a specified custom object.
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.objectType, param.archived,  options).toPromise();
    }

    /**
     * Remove an association between two object types identified by the association identifier and object type. This operation is irreversible and will permanently delete the specified association.
     * Delete an existing association for a specified object type.
     * @param param the request object
     */
    public archiveAssociationWithHttpInfo(param: BasicApiArchiveAssociationRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveAssociationWithHttpInfo(param.associationIdentifier, param.objectType,  options).toPromise();
    }

    /**
     * Remove an association between two object types identified by the association identifier and object type. This operation is irreversible and will permanently delete the specified association.
     * Delete an existing association for a specified object type.
     * @param param the request object
     */
    public archiveAssociation(param: BasicApiArchiveAssociationRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveAssociation(param.associationIdentifier, param.objectType,  options).toPromise();
    }

    /**
     * Create a new custom object schema by defining its properties and associations.
     * Create a new custom object schema.
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ObjectSchema>> {
        return this.api.createWithHttpInfo(param.objectSchemaEgg,  options).toPromise();
    }

    /**
     * Create a new custom object schema by defining its properties and associations.
     * Create a new custom object schema.
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<ObjectSchema> {
        return this.api.create(param.objectSchemaEgg,  options).toPromise();
    }

    /**
     * Retrieve all custom object schemas, with options to include property definitions, association definitions, and audit metadata.
     * Retrieve all custom object schemas.
     * @param param the request object
     */
    public getAllWithHttpInfo(param: BasicApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseObjectSchemaNoPaging>> {
        return this.api.getAllWithHttpInfo(param.archived, param.includeAssociationDefinitions, param.includeAuditMetadata, param.includePropertyDefinitions,  options).toPromise();
    }

    /**
     * Retrieve all custom object schemas, with options to include property definitions, association definitions, and audit metadata.
     * Retrieve all custom object schemas.
     * @param param the request object
     */
    public getAll(param: BasicApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseObjectSchemaNoPaging> {
        return this.api.getAll(param.archived, param.includeAssociationDefinitions, param.includeAuditMetadata, param.includePropertyDefinitions,  options).toPromise();
    }

    /**
     * Retrieve details of a custom object schema, including its properties and associations, using the object type ID or fully qualified name.
     * Retrieve the schema of a specified custom object.
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ObjectSchema>> {
        return this.api.getByIdWithHttpInfo(param.objectType, param.includeAssociationDefinitions, param.includeAuditMetadata, param.includePropertyDefinitions,  options).toPromise();
    }

    /**
     * Retrieve details of a custom object schema, including its properties and associations, using the object type ID or fully qualified name.
     * Retrieve the schema of a specified custom object.
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<ObjectSchema> {
        return this.api.getById(param.objectType, param.includeAssociationDefinitions, param.includeAuditMetadata, param.includePropertyDefinitions,  options).toPromise();
    }

    /**
     * Update attributes of a custom object schema, such as properties and labels, using the object type ID or fully qualified name.
     * Update the schema of a specified custom object.
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ObjectTypeDefinition>> {
        return this.api.updateWithHttpInfo(param.objectType, param.objectTypeDefinitionPatch,  options).toPromise();
    }

    /**
     * Update attributes of a custom object schema, such as properties and labels, using the object type ID or fully qualified name.
     * Update the schema of a specified custom object.
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<ObjectTypeDefinition> {
        return this.api.update(param.objectType, param.objectTypeDefinitionPatch,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiCrmObjectSchemasV3SchemasBatchReadRequest {
    /**
     * 
     * @type ObjectSchemaBatchReadRequest
     * @memberof BatchApicrmObjectSchemasV3SchemasBatchRead
     */
    objectSchemaBatchReadRequest: ObjectSchemaBatchReadRequest
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve details of multiple custom object schemas by providing a batch request with specified inputs. This operation allows you to fetch schema information, including properties and associations, for multiple custom objects in a single API call.
     * Retrieve multiple custom object schemas in a batch request.
     * @param param the request object
     */
    public crmObjectSchemasV3SchemasBatchReadWithHttpInfo(param: BatchApiCrmObjectSchemasV3SchemasBatchReadRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseObjectSchemaNoPaging>> {
        return this.api.crmObjectSchemasV3SchemasBatchReadWithHttpInfo(param.objectSchemaBatchReadRequest,  options).toPromise();
    }

    /**
     * Retrieve details of multiple custom object schemas by providing a batch request with specified inputs. This operation allows you to fetch schema information, including properties and associations, for multiple custom objects in a single API call.
     * Retrieve multiple custom object schemas in a batch request.
     * @param param the request object
     */
    public crmObjectSchemasV3SchemasBatchRead(param: BatchApiCrmObjectSchemasV3SchemasBatchReadRequest, options?: ConfigurationOptions): Promise<CollectionResponseObjectSchemaNoPaging> {
        return this.api.crmObjectSchemasV3SchemasBatchRead(param.objectSchemaBatchReadRequest,  options).toPromise();
    }

}
