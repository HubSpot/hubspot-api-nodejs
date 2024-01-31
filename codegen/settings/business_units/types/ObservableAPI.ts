import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponsePublicBusinessUnitNoPaging } from '../models/CollectionResponsePublicBusinessUnitNoPaging';

import { BusinessUnitApiRequestFactory, BusinessUnitApiResponseProcessor} from "../apis/BusinessUnitApi";
export class ObservableBusinessUnitApi {
    private requestFactory: BusinessUnitApiRequestFactory;
    private responseProcessor: BusinessUnitApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessUnitApiRequestFactory,
        responseProcessor?: BusinessUnitApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BusinessUnitApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BusinessUnitApiResponseProcessor();
    }

    /**
     * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
     * Get Business Units for a user
     * @param userId Identifier of user to retrieve.
     * @param properties The names of properties to optionally include in the response body. The only valid value is &#x60;logoMetadata&#x60;.
     * @param name The names of Business Units to retrieve. If empty or not provided, then all associated Business Units will be returned.
     */
    public getByUserIDWithHttpInfo(userId: string, properties?: Array<string>, name?: Array<string>, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicBusinessUnitNoPaging>> {
        const requestContextPromise = this.requestFactory.getByUserID(userId, properties, name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByUserIDWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
     * Get Business Units for a user
     * @param userId Identifier of user to retrieve.
     * @param properties The names of properties to optionally include in the response body. The only valid value is &#x60;logoMetadata&#x60;.
     * @param name The names of Business Units to retrieve. If empty or not provided, then all associated Business Units will be returned.
     */
    public getByUserID(userId: string, properties?: Array<string>, name?: Array<string>, _options?: Configuration): Observable<CollectionResponsePublicBusinessUnitNoPaging> {
        return this.getByUserIDWithHttpInfo(userId, properties, name, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicBusinessUnitNoPaging>) => apiResponse.data));
    }

}
