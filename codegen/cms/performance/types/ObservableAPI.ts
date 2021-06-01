import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { PerformanceView } from '../models/PerformanceView';
import { PublicPerformanceResponse } from '../models/PublicPerformanceResponse';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Returns time series data website performance data for the given domain and/or path.
     * View your website's performance.
     * @param domain The domain to search return data for.
     * @param path The url path of the domain to return data for.
     * @param pad Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
     * @param sum Specifies whether the time series data should be summated for the given period. Defaults to false.
     * @param period A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param interval The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param start A timestamp in milliseconds that indicates the start of the time period.
     * @param end A timestamp in milliseconds that indicates the end of the time period.
     */
    public getPage(domain?: string, path?: string, pad?: boolean, sum?: boolean, period?: string, interval?: string, start?: number, end?: number, _options?: Configuration): Observable<PublicPerformanceResponse> {
        const requestContextPromise = this.requestFactory.getPage(domain, path, pad, sum, period, interval, start, end, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPage(rsp)));
            }));
    }
 
    /**
     * Returns uptime time series website performance data for the given domain.
     * View your website's uptime.
     * @param domain The domain to search return data for.
     * @param path 
     * @param pad Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
     * @param sum Specifies whether the time series data should be summated for the given period. Defaults to false.
     * @param period A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param interval The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param start A timestamp in milliseconds that indicates the start of the time period.
     * @param end A timestamp in milliseconds that indicates the end of the time period.
     */
    public getUptime(domain?: string, path?: string, pad?: boolean, sum?: boolean, period?: string, interval?: string, start?: number, end?: number, _options?: Configuration): Observable<PublicPerformanceResponse> {
        const requestContextPromise = this.requestFactory.getUptime(domain, path, pad, sum, period, interval, start, end, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUptime(rsp)));
            }));
    }
 
}
