import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';

import { AuditLogsApiRequestFactory, AuditLogsApiResponseProcessor} from "../apis/AuditLogsApi";
export class ObservableAuditLogsApi {
    private requestFactory: AuditLogsApiRequestFactory;
    private responseProcessor: AuditLogsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuditLogsApiRequestFactory,
        responseProcessor?: AuditLogsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuditLogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuditLogsApiResponseProcessor();
    }

    /**
     * Returns audit logs based on filters.
     * Query audit logs
     * @param [userId] Comma separated list of user ids to filter by.
     * @param [eventType] Comma separated list of event types to filter by (CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED).
     * @param [objectType] Comma separated list of object types to filter by (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)
     * @param [objectId] Comma separated list of object ids to filter by.
     * @param [after] Timestamp after which audit logs will be returned
     * @param [before] Timestamp before which audit logs will be returned
     * @param [limit] The number of logs to return.
     * @param [sort] The sort direction for the audit logs. (Can only sort by timestamp).
     */
    public getPageWithHttpInfo(userId?: Array<string>, eventType?: Array<string>, objectType?: Array<string>, objectId?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicAuditLog>> {
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

        const requestContextPromise = this.requestFactory.getPage(userId, eventType, objectType, objectId, after, before, limit, sort, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns audit logs based on filters.
     * Query audit logs
     * @param [userId] Comma separated list of user ids to filter by.
     * @param [eventType] Comma separated list of event types to filter by (CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED).
     * @param [objectType] Comma separated list of object types to filter by (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)
     * @param [objectId] Comma separated list of object ids to filter by.
     * @param [after] Timestamp after which audit logs will be returned
     * @param [before] Timestamp before which audit logs will be returned
     * @param [limit] The number of logs to return.
     * @param [sort] The sort direction for the audit logs. (Can only sort by timestamp).
     */
    public getPage(userId?: Array<string>, eventType?: Array<string>, objectType?: Array<string>, objectId?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: ConfigurationOptions): Observable<CollectionResponsePublicAuditLog> {
        return this.getPageWithHttpInfo(userId, eventType, objectType, objectId, after, before, limit, sort, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicAuditLog>) => apiResponse.data));
    }

}
