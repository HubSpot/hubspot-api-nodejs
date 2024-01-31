import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';

import { TypesApiRequestFactory, TypesApiResponseProcessor} from "../apis/TypesApi";
export class ObservableTypesApi {
    private requestFactory: TypesApiRequestFactory;
    private responseProcessor: TypesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TypesApiRequestFactory,
        responseProcessor?: TypesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TypesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TypesApiResponseProcessor();
    }

    /**
     * List all the valid association types available between two object types
     * List association types
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicAssociationDefinitionNoPaging>> {
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
     * List all the valid association types available between two object types
     * List association types
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Observable<CollectionResponsePublicAssociationDefinitionNoPaging> {
        return this.getAllWithHttpInfo(fromObjectType, toObjectType, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicAssociationDefinitionNoPaging>) => apiResponse.data));
    }

}
