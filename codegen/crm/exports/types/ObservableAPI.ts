import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
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
    public getStatusWithHttpInfo(taskId: number, _options?: ConfigurationOptions): Observable<HttpInfo<ActionResponseWithSingleResultURI>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getStatus(taskId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
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
    public getStatus(taskId: number, _options?: ConfigurationOptions): Observable<ActionResponseWithSingleResultURI> {
        return this.getStatusWithHttpInfo(taskId, _options).pipe(map((apiResponse: HttpInfo<ActionResponseWithSingleResultURI>) => apiResponse.data));
    }

    /**
     * Begins exporting CRM data for the portal as specified in the request body
     * Start an export
     * @param publicExportRequest
     */
    public startWithHttpInfo(publicExportRequest: PublicExportRequest, _options?: ConfigurationOptions): Observable<HttpInfo<TaskLocator>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.start(publicExportRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
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
    public start(publicExportRequest: PublicExportRequest, _options?: ConfigurationOptions): Observable<TaskLocator> {
        return this.startWithHttpInfo(publicExportRequest, _options).pipe(map((apiResponse: HttpInfo<TaskLocator>) => apiResponse.data));
    }

}
