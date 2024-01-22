import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BatchInputPublicAssociation } from '../models/BatchInputPublicAssociation';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponsePublicAssociation } from '../models/BatchResponsePublicAssociation';
import { BatchResponsePublicAssociationMulti } from '../models/BatchResponsePublicAssociationMulti';
import { BatchResponsePublicAssociationMultiWithErrors } from '../models/BatchResponsePublicAssociationMultiWithErrors';
import { BatchResponsePublicAssociationWithErrors } from '../models/BatchResponsePublicAssociationWithErrors';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class ObservableBatchApi {
    private requestFactory: BatchApiRequestFactory;
    private responseProcessor: BatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApiResponseProcessor();
    }

    /**
     * Remove the associations between all pairs of objects identified in the request body.
     * Archive a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public archiveWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(fromObjectType, toObjectType, batchInputPublicAssociation, _options);

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
     * Remove the associations between all pairs of objects identified in the request body.
     * Archive a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public archive(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociation, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Associate all pairs of objects identified in the request body.
     * Create a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public createWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Observable<HttpInfo<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors>> {
        const requestContextPromise = this.requestFactory.create(fromObjectType, toObjectType, batchInputPublicAssociation, _options);

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
     * Associate all pairs of objects identified in the request body.
     * Create a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public create(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Observable<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors> {
        return this.createWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociation, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors>) => apiResponse.data));
    }

    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicObjectId 
     */
    public readWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicObjectId: BatchInputPublicObjectId, _options?: Configuration): Observable<HttpInfo<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti>> {
        const requestContextPromise = this.requestFactory.read(fromObjectType, toObjectType, batchInputPublicObjectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicObjectId 
     */
    public read(fromObjectType: string, toObjectType: string, batchInputPublicObjectId: BatchInputPublicObjectId, _options?: Configuration): Observable<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti> {
        return this.readWithHttpInfo(fromObjectType, toObjectType, batchInputPublicObjectId, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti>) => apiResponse.data));
    }

}
