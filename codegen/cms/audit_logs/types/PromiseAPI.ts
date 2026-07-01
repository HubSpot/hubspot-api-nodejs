import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';
import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
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
    public cmsAuditLogsV3WithHttpInfo(after?: string, before?: string, eventType?: Array<string>, limit?: number, objectId?: Array<string>, objectType?: Array<string>, sort?: Array<string>, userId?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAuditLog>> {
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
        const result = this.api.cmsAuditLogsV3WithHttpInfo(after, before, eventType, limit, objectId, objectType, sort, userId, observableOptions);
        return result.toPromise();
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
    public cmsAuditLogsV3(after?: string, before?: string, eventType?: Array<string>, limit?: number, objectId?: Array<string>, objectType?: Array<string>, sort?: Array<string>, userId?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicAuditLog> {
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
        const result = this.api.cmsAuditLogsV3(after, before, eventType, limit, objectId, objectType, sort, userId, observableOptions);
        return result.toPromise();
    }


}



