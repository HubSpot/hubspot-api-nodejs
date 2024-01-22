import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AssociationDefinition } from '../models/AssociationDefinition';
import { AssociationDefinitionEgg } from '../models/AssociationDefinitionEgg';
import { CollectionResponseObjectSchemaNoPaging } from '../models/CollectionResponseObjectSchemaNoPaging';
import { ObjectSchema } from '../models/ObjectSchema';
import { ObjectSchemaEgg } from '../models/ObjectSchemaEgg';
import { ObjectTypeDefinition } from '../models/ObjectTypeDefinition';
import { ObjectTypeDefinitionPatch } from '../models/ObjectTypeDefinitionPatch';

import { CoreApiRequestFactory, CoreApiResponseProcessor} from "../apis/CoreApi";
export class ObservableCoreApi {
    private requestFactory: CoreApiRequestFactory;
    private responseProcessor: CoreApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CoreApiRequestFactory,
        responseProcessor?: CoreApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CoreApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CoreApiResponseProcessor();
    }

    /**
     * Deletes a schema. Any existing records of this schema must be deleted **first**. Otherwise this call will fail.
     * Delete a schema
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectType: string, archived?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(objectType, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a schema. Any existing records of this schema must be deleted **first**. Otherwise this call will fail.
     * Delete a schema
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectType: string, archived?: boolean, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(objectType, archived, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes an existing association from a schema.
     * Remove an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationIdentifier Unique ID of the association to remove.
     */
    public archiveAssociationWithHttpInfo(objectType: string, associationIdentifier: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveAssociation(objectType, associationIdentifier, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveAssociationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes an existing association from a schema.
     * Remove an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationIdentifier Unique ID of the association to remove.
     */
    public archiveAssociation(objectType: string, associationIdentifier: string, _options?: Configuration): Observable<void> {
        return this.archiveAssociationWithHttpInfo(objectType, associationIdentifier, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Define a new object schema, along with custom properties and associations. The entire object schema, including its object type ID, properties, and associations will be returned in the response.
     * Create a new schema
     * @param objectSchemaEgg Object schema definition, including properties and associations.
     */
    public createWithHttpInfo(objectSchemaEgg: ObjectSchemaEgg, _options?: Configuration): Observable<HttpInfo<ObjectSchema>> {
        const requestContextPromise = this.requestFactory.create(objectSchemaEgg, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Define a new object schema, along with custom properties and associations. The entire object schema, including its object type ID, properties, and associations will be returned in the response.
     * Create a new schema
     * @param objectSchemaEgg Object schema definition, including properties and associations.
     */
    public create(objectSchemaEgg: ObjectSchemaEgg, _options?: Configuration): Observable<ObjectSchema> {
        return this.createWithHttpInfo(objectSchemaEgg, _options).pipe(map((apiResponse: HttpInfo<ObjectSchema>) => apiResponse.data));
    }

    /**
     * Defines a new association between the primary schema\'s object type and other object types.
     * Create an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationDefinitionEgg Attributes that define the association.
     */
    public createAssociationWithHttpInfo(objectType: string, associationDefinitionEgg: AssociationDefinitionEgg, _options?: Configuration): Observable<HttpInfo<AssociationDefinition>> {
        const requestContextPromise = this.requestFactory.createAssociation(objectType, associationDefinitionEgg, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAssociationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Defines a new association between the primary schema\'s object type and other object types.
     * Create an association
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param associationDefinitionEgg Attributes that define the association.
     */
    public createAssociation(objectType: string, associationDefinitionEgg: AssociationDefinitionEgg, _options?: Configuration): Observable<AssociationDefinition> {
        return this.createAssociationWithHttpInfo(objectType, associationDefinitionEgg, _options).pipe(map((apiResponse: HttpInfo<AssociationDefinition>) => apiResponse.data));
    }

    /**
     * Returns all object schemas that have been defined for your account.
     * Get all schemas
     * @param archived Whether to return only results that have been archived.
     */
    public getAllWithHttpInfo(archived?: boolean, _options?: Configuration): Observable<HttpInfo<CollectionResponseObjectSchemaNoPaging>> {
        const requestContextPromise = this.requestFactory.getAll(archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all object schemas that have been defined for your account.
     * Get all schemas
     * @param archived Whether to return only results that have been archived.
     */
    public getAll(archived?: boolean, _options?: Configuration): Observable<CollectionResponseObjectSchemaNoPaging> {
        return this.getAllWithHttpInfo(archived, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseObjectSchemaNoPaging>) => apiResponse.data));
    }

    /**
     * Returns an existing object schema.
     * Get an existing schema
     * @param objectType Fully qualified name or object type ID of your schema.
     */
    public getByIdWithHttpInfo(objectType: string, _options?: Configuration): Observable<HttpInfo<ObjectSchema>> {
        const requestContextPromise = this.requestFactory.getById(objectType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns an existing object schema.
     * Get an existing schema
     * @param objectType Fully qualified name or object type ID of your schema.
     */
    public getById(objectType: string, _options?: Configuration): Observable<ObjectSchema> {
        return this.getByIdWithHttpInfo(objectType, _options).pipe(map((apiResponse: HttpInfo<ObjectSchema>) => apiResponse.data));
    }

    /**
     * Update the details for an existing object schema.
     * Update a schema
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param objectTypeDefinitionPatch Attributes to update in your schema.
     */
    public updateWithHttpInfo(objectType: string, objectTypeDefinitionPatch: ObjectTypeDefinitionPatch, _options?: Configuration): Observable<HttpInfo<ObjectTypeDefinition>> {
        const requestContextPromise = this.requestFactory.update(objectType, objectTypeDefinitionPatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the details for an existing object schema.
     * Update a schema
     * @param objectType Fully qualified name or object type ID of your schema.
     * @param objectTypeDefinitionPatch Attributes to update in your schema.
     */
    public update(objectType: string, objectTypeDefinitionPatch: ObjectTypeDefinitionPatch, _options?: Configuration): Observable<ObjectTypeDefinition> {
        return this.updateWithHttpInfo(objectType, objectTypeDefinitionPatch, _options).pipe(map((apiResponse: HttpInfo<ObjectTypeDefinition>) => apiResponse.data));
    }

}

import { PublicObjectSchemasApiRequestFactory, PublicObjectSchemasApiResponseProcessor} from "../apis/PublicObjectSchemasApi";
export class ObservablePublicObjectSchemasApi {
    private requestFactory: PublicObjectSchemasApiRequestFactory;
    private responseProcessor: PublicObjectSchemasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicObjectSchemasApiRequestFactory,
        responseProcessor?: PublicObjectSchemasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublicObjectSchemasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublicObjectSchemasApiResponseProcessor();
    }

    /**
     * @param objectType 
     */
    public purgeWithHttpInfo(objectType: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.purge(objectType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.purgeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param objectType 
     */
    public purge(objectType: string, _options?: Configuration): Observable<void> {
        return this.purgeWithHttpInfo(objectType, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
