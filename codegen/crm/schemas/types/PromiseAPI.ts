import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
     * Deletes a schema. Any existing records of this schema must be deleted **first**. Otherwise this call will fail.
     * Delete a schema
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
     * Removes an existing association from a schema.
     * Remove an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationIdentifier Unique ID of the association to remove.
     */
    public archiveAssociationWithHttpInfo(objectType: string, associationIdentifier: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveAssociationWithHttpInfo(objectType, associationIdentifier, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes an existing association from a schema.
     * Remove an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationIdentifier Unique ID of the association to remove.
     */
    public archiveAssociation(objectType: string, associationIdentifier: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archiveAssociation(objectType, associationIdentifier, observableOptions);
        return result.toPromise();
    }

    /**
     * Define a new object schema, along with custom properties and associations. The entire object schema, including its object type ID, properties, and associations will be returned in the response.
     * Create a new schema
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
     * Define a new object schema, along with custom properties and associations. The entire object schema, including its object type ID, properties, and associations will be returned in the response.
     * Create a new schema
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
     * Defines a new association between the primary schema\'s object type and other object types.
     * Create an association
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
     * Defines a new association between the primary schema\'s object type and other object types.
     * Create an association
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

    /**
     * Returns all object schemas that have been defined for your account.
     * Get all schemas
     * @param [archived] Whether to return only results that have been archived.
     */
    public getAllWithHttpInfo(archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseObjectSchemaNoPaging>> {
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
        const result = this.api.getAllWithHttpInfo(archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all object schemas that have been defined for your account.
     * Get all schemas
     * @param [archived] Whether to return only results that have been archived.
     */
    public getAll(archived?: boolean, _options?: PromiseConfigurationOptions): Promise<CollectionResponseObjectSchemaNoPaging> {
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
        const result = this.api.getAll(archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an existing object schema.
     * Get an existing schema
     * @param objectType Fully qualified name or object type ID of your schema.
     */
    public getByIdWithHttpInfo(objectType: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ObjectSchema>> {
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
        const result = this.api.getByIdWithHttpInfo(objectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an existing object schema.
     * Get an existing schema
     * @param objectType Fully qualified name or object type ID of your schema.
     */
    public getById(objectType: string, _options?: PromiseConfigurationOptions): Promise<ObjectSchema> {
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
        const result = this.api.getById(objectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the details for an existing object schema.
     * Update a schema
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
     * Update the details for an existing object schema.
     * Update a schema
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



