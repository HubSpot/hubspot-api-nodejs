import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class ObservableBasicApi {
    private requestFactory: BasicApiRequestFactory;
    private responseProcessor: BasicApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicApiResponseProcessor();
    }

    /**
     * @param [after]
     * @param [before]
     * @param [eventType]
     * @param [limit]
     * @param [objectId]
     * @param [objectType]
     * @param [sort]
     * @param [userId]
     */
    public cmsAuditLogsV3WithHttpInfo(after?: string, before?: string, eventType?: Array<string>, limit?: number, objectId?: Array<string>, objectType?: Array<string>, sort?: Array<string>, userId?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicAuditLog>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.cmsAuditLogsV3(after, before, eventType, limit, objectId, objectType, sort, userId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cmsAuditLogsV3WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [after]
     * @param [before]
     * @param [eventType]
     * @param [limit]
     * @param [objectId]
     * @param [objectType]
     * @param [sort]
     * @param [userId]
     */
    public cmsAuditLogsV3(after?: string, before?: string, eventType?: Array<string>, limit?: number, objectId?: Array<string>, objectType?: Array<string>, sort?: Array<string>, userId?: Array<string>, _options?: ConfigurationOptions): Observable<CollectionResponsePublicAuditLog> {
        return this.cmsAuditLogsV3WithHttpInfo(after, before, eventType, limit, objectId, objectType, sort, userId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicAuditLog>) => apiResponse.data));
    }

}
