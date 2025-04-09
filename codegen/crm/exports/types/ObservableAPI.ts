import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ActionResponseWithSingleResultURI } from '../models/ActionResponseWithSingleResultURI';
import { PublicExportRequest } from '../models/PublicExportRequest';
import { TaskLocator } from '../models/TaskLocator';

import { PublicExportsApiRequestFactory, PublicExportsApiResponseProcessor} from "../apis/PublicExportsApi";
export class ObservablePublicExportsApi {
    private requestFactory: PublicExportsApiRequestFactory;
    private responseProcessor: PublicExportsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicExportsApiRequestFactory,
        responseProcessor?: PublicExportsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublicExportsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublicExportsApiResponseProcessor();
    }

    /**
     * Returns the status of the export with taskId, including the URL of the resulting file if the export status is COMPLETE
     * Get the status of the export including the URL to download the file
     * @param taskId 
     */
    public getStatusWithHttpInfo(taskId: number, _options?: Configuration): Observable<HttpInfo<ActionResponseWithSingleResultURI>> {
        const requestContextPromise = this.requestFactory.getStatus(taskId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the status of the export with taskId, including the URL of the resulting file if the export status is COMPLETE
     * Get the status of the export including the URL to download the file
     * @param taskId 
     */
    public getStatus(taskId: number, _options?: Configuration): Observable<ActionResponseWithSingleResultURI> {
        return this.getStatusWithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<ActionResponseWithSingleResultURI>) => apiResponse.data));
    }

    /**
     * Begins exporting CRM data for the portal as specified in the request body
     * Start an export
     * @param publicExportRequest 
     */
    public startWithHttpInfo(publicExportRequest: PublicExportRequest, _options?: Configuration): Observable<HttpInfo<TaskLocator>> {
        const requestContextPromise = this.requestFactory.start(publicExportRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startWithHttpInfo(rsp)));
            }));
    }

    /**
     * Begins exporting CRM data for the portal as specified in the request body
     * Start an export
     * @param publicExportRequest 
     */
    public start(publicExportRequest: PublicExportRequest, _options?: Configuration): Observable<TaskLocator> {
        return this.startWithHttpInfo(publicExportRequest, _options).pipe(map((apiResponse: HttpInfo<TaskLocator>) => apiResponse.data));
    }

}
