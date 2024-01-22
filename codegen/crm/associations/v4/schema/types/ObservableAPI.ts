import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';

import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";
export class ObservableDefinitionsApi {
    private requestFactory: DefinitionsApiRequestFactory;
    private responseProcessor: DefinitionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefinitionsApiRequestFactory,
        responseProcessor?: DefinitionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefinitionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefinitionsApiResponseProcessor();
    }

    /**
     * Deletes an association definition
     * Delete
     * @param fromObjectType 
     * @param toObjectType 
     * @param associationTypeId 
     */
    public archiveWithHttpInfo(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(fromObjectType, toObjectType, associationTypeId, _options);

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
     * Deletes an association definition
     * Delete
     * @param fromObjectType 
     * @param toObjectType 
     * @param associationTypeId 
     */
    public archive(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(fromObjectType, toObjectType, associationTypeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a user defined association definition
     * Create
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionCreateRequest 
     */
    public createWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: Configuration): Observable<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        const requestContextPromise = this.requestFactory.create(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, _options);

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
     * Create a user defined association definition
     * Create
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionCreateRequest 
     */
    public create(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: Configuration): Observable<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.createWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>) => apiResponse.data));
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        const requestContextPromise = this.requestFactory.getAll(fromObjectType, toObjectType, _options);

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
     * Returns all association types between two object types
     * Read
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Observable<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.getAllWithHttpInfo(fromObjectType, toObjectType, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>) => apiResponse.data));
    }

    /**
     * Update a user defined association definition
     * Update
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionUpdateRequest 
     */
    public updateWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.update(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, _options);

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
     * Update a user defined association definition
     * Update
     * @param fromObjectType 
     * @param toObjectType 
     * @param publicAssociationDefinitionUpdateRequest 
     */
    public update(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: Configuration): Observable<void> {
        return this.updateWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
