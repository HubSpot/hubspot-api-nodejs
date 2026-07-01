import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { AssociationDefinition } from '../models/AssociationDefinition';
import { AssociationDefinitionEgg } from '../models/AssociationDefinitionEgg';
import { CollectionResponseObjectSchemaNoPaging } from '../models/CollectionResponseObjectSchemaNoPaging';
import { ObjectSchema } from '../models/ObjectSchema';
import { ObjectSchemaBatchReadRequest } from '../models/ObjectSchemaBatchReadRequest';
import { ObjectSchemaEgg } from '../models/ObjectSchemaEgg';
import { ObjectTypeDefinition } from '../models/ObjectTypeDefinition';
import { ObjectTypeDefinitionPatch } from '../models/ObjectTypeDefinitionPatch';
import { ObservableAdvancedApi } from './ObservableAPI';

import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";
export class PromiseAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdvancedApiRequestFactory,
        responseProcessor?: AdvancedApiResponseProcessor
    ) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new association between the specified object type and another object type. This operation requires the definition of the association attributes, such as the primary and target object type IDs.
     * Create an association for a specified object type.
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationDefinitionEgg Attributes that define the association.
     */
    public createAssociationWithHttpInfo(objectType: string, associationDefinitionEgg: AssociationDefinitionEgg, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AssociationDefinition>> {
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
        const result = this.api.createAssociationWithHttpInfo(objectType, associationDefinitionEgg, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new association between the specified object type and another object type. This operation requires the definition of the association attributes, such as the primary and target object type IDs.
     * Create an association for a specified object type.
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationDefinitionEgg Attributes that define the association.
     */
    public createAssociation(objectType: string, associationDefinitionEgg: AssociationDefinitionEgg, _options?: PromiseConfigurationOptions): Promise<AssociationDefinition> {
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
        const result = this.api.createAssociation(objectType, associationDefinitionEgg, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove a custom object schema from the account using its object type ID or fully qualified name.
     * Delete the schema of a specified custom object.
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectType: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(objectType, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a custom object schema from the account using its object type ID or fully qualified name.
     * Delete the schema of a specified custom object.
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archive(objectType: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(objectType, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove an association between two object types identified by the association identifier and object type. This operation is irreversible and will permanently delete the specified association.
     * Delete an existing association for a specified object type.
     * @param associationIdentifier Unique ID of the association to remove.
     * @param objectType Fully qualified name or object type ID of your schema.
     */
    public archiveAssociationWithHttpInfo(associationIdentifier: string, objectType: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveAssociationWithHttpInfo(associationIdentifier, objectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove an association between two object types identified by the association identifier and object type. This operation is irreversible and will permanently delete the specified association.
     * Delete an existing association for a specified object type.
     * @param associationIdentifier Unique ID of the association to remove.
     * @param objectType Fully qualified name or object type ID of your schema.
     */
    public archiveAssociation(associationIdentifier: string, objectType: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archiveAssociation(associationIdentifier, objectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new custom object schema by defining its properties and associations.
     * Create a new custom object schema.
     * @param objectSchemaEgg Object schema definition, including properties and associations.
     */
    public createWithHttpInfo(objectSchemaEgg: ObjectSchemaEgg, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectSchema>> {
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
        const result = this.api.createWithHttpInfo(objectSchemaEgg, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new custom object schema by defining its properties and associations.
     * Create a new custom object schema.
     * @param objectSchemaEgg Object schema definition, including properties and associations.
     */
    public create(objectSchemaEgg: ObjectSchemaEgg, _options?: PromiseConfigurationOptions): Promise<ObjectSchema> {
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
        const result = this.api.create(objectSchemaEgg, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all custom object schemas, with options to include property definitions, association definitions, and audit metadata.
     * Retrieve all custom object schemas.
     * @param [archived] Whether to return only results that have been archived.
     * @param [includeAssociationDefinitions] 
     * @param [includeAuditMetadata] 
     * @param [includePropertyDefinitions] 
     */
    public getAllWithHttpInfo(archived?: boolean, includeAssociationDefinitions?: boolean, includeAuditMetadata?: boolean, includePropertyDefinitions?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseObjectSchemaNoPaging>> {
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
        const result = this.api.getAllWithHttpInfo(archived, includeAssociationDefinitions, includeAuditMetadata, includePropertyDefinitions, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all custom object schemas, with options to include property definitions, association definitions, and audit metadata.
     * Retrieve all custom object schemas.
     * @param [archived] Whether to return only results that have been archived.
     * @param [includeAssociationDefinitions] 
     * @param [includeAuditMetadata] 
     * @param [includePropertyDefinitions] 
     */
    public getAll(archived?: boolean, includeAssociationDefinitions?: boolean, includeAuditMetadata?: boolean, includePropertyDefinitions?: boolean, _options?: PromiseConfigurationOptions): Promise<CollectionResponseObjectSchemaNoPaging> {
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
        const result = this.api.getAll(archived, includeAssociationDefinitions, includeAuditMetadata, includePropertyDefinitions, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a custom object schema, including its properties and associations, using the object type ID or fully qualified name.
     * Retrieve the schema of a specified custom object.
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param [includeAssociationDefinitions] 
     * @param [includeAuditMetadata] 
     * @param [includePropertyDefinitions] 
     */
    public getByIdWithHttpInfo(objectType: string, includeAssociationDefinitions?: boolean, includeAuditMetadata?: boolean, includePropertyDefinitions?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectSchema>> {
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
        const result = this.api.getByIdWithHttpInfo(objectType, includeAssociationDefinitions, includeAuditMetadata, includePropertyDefinitions, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of a custom object schema, including its properties and associations, using the object type ID or fully qualified name.
     * Retrieve the schema of a specified custom object.
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param [includeAssociationDefinitions] 
     * @param [includeAuditMetadata] 
     * @param [includePropertyDefinitions] 
     */
    public getById(objectType: string, includeAssociationDefinitions?: boolean, includeAuditMetadata?: boolean, includePropertyDefinitions?: boolean, _options?: PromiseConfigurationOptions): Promise<ObjectSchema> {
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
        const result = this.api.getById(objectType, includeAssociationDefinitions, includeAuditMetadata, includePropertyDefinitions, observableOptions);
        return result.toPromise();
    }

    /**
     * Update attributes of a custom object schema, such as properties and labels, using the object type ID or fully qualified name.
     * Update the schema of a specified custom object.
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param objectTypeDefinitionPatch Attributes to update in your schema.
     */
    public updateWithHttpInfo(objectType: string, objectTypeDefinitionPatch: ObjectTypeDefinitionPatch, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectTypeDefinition>> {
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
        const result = this.api.updateWithHttpInfo(objectType, objectTypeDefinitionPatch, observableOptions);
        return result.toPromise();
    }

    /**
     * Update attributes of a custom object schema, such as properties and labels, using the object type ID or fully qualified name.
     * Update the schema of a specified custom object.
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param objectTypeDefinitionPatch Attributes to update in your schema.
     */
    public update(objectType: string, objectTypeDefinitionPatch: ObjectTypeDefinitionPatch, _options?: PromiseConfigurationOptions): Promise<ObjectTypeDefinition> {
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
        const result = this.api.update(objectType, objectTypeDefinitionPatch, observableOptions);
        return result.toPromise();
    }


}



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
     * Retrieve details of multiple custom object schemas by providing a batch request with specified inputs. This operation allows you to fetch schema information, including properties and associations, for multiple custom objects in a single API call.
     * Retrieve multiple custom object schemas in a batch request.
     * @param objectSchemaBatchReadRequest
     */
    public crmObjectSchemasV3SchemasBatchReadWithHttpInfo(objectSchemaBatchReadRequest: ObjectSchemaBatchReadRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseObjectSchemaNoPaging>> {
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
        const result = this.api.crmObjectSchemasV3SchemasBatchReadWithHttpInfo(objectSchemaBatchReadRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve details of multiple custom object schemas by providing a batch request with specified inputs. This operation allows you to fetch schema information, including properties and associations, for multiple custom objects in a single API call.
     * Retrieve multiple custom object schemas in a batch request.
     * @param objectSchemaBatchReadRequest
     */
    public crmObjectSchemasV3SchemasBatchRead(objectSchemaBatchReadRequest: ObjectSchemaBatchReadRequest, _options?: PromiseConfigurationOptions): Promise<CollectionResponseObjectSchemaNoPaging> {
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
        const result = this.api.crmObjectSchemasV3SchemasBatchRead(objectSchemaBatchReadRequest, observableOptions);
        return result.toPromise();
    }


}



