import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { PublicPerformanceResponse } from '../models/PublicPerformanceResponse';

import { PublicPerformanceApiRequestFactory, PublicPerformanceApiResponseProcessor} from "../apis/PublicPerformanceApi";
export class ObservablePublicPerformanceApi {
    private requestFactory: PublicPerformanceApiRequestFactory;
    private responseProcessor: PublicPerformanceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicPerformanceApiRequestFactory,
        responseProcessor?: PublicPerformanceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublicPerformanceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublicPerformanceApiResponseProcessor();
    }

    /**
     * Returns time series data website performance data for the given domain and/or path.
     * View your website\'s performance.
     * @param domain The domain to search return data for.
     * @param path The url path of the domain to return data for.
     * @param pad Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
     * @param sum Specifies whether the time series data should be summated for the given period. Defaults to false.
     * @param period A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param interval The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param start A timestamp in milliseconds that indicates the start of the time period.
     * @param end A timestamp in milliseconds that indicates the end of the time period.
     */
    public getPageWithHttpInfo(domain?: string, path?: string, pad?: boolean, sum?: boolean, period?: string, interval?: string, start?: number, end?: number, _options?: Configuration): Observable<HttpInfo<PublicPerformanceResponse>> {
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns time series data website performance data for the given domain and/or path.
     * View your website\'s performance.
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
        return this.getPageWithHttpInfo(domain, path, pad, sum, period, interval, start, end, _options).pipe(map((apiResponse: HttpInfo<PublicPerformanceResponse>) => apiResponse.data));
    }

    /**
     * Returns uptime time series website performance data for the given domain.
     * View your website\'s uptime.
     * @param domain The domain to search return data for.
     * @param path 
     * @param pad Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
     * @param sum Specifies whether the time series data should be summated for the given period. Defaults to false.
     * @param period A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param interval The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @param start A timestamp in milliseconds that indicates the start of the time period.
     * @param end A timestamp in milliseconds that indicates the end of the time period.
     */
    public getUptimeWithHttpInfo(domain?: string, path?: string, pad?: boolean, sum?: boolean, period?: string, interval?: string, start?: number, end?: number, _options?: Configuration): Observable<HttpInfo<PublicPerformanceResponse>> {
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUptimeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns uptime time series website performance data for the given domain.
     * View your website\'s uptime.
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
        return this.getUptimeWithHttpInfo(domain, path, pad, sum, period, interval, start, end, _options).pipe(map((apiResponse: HttpInfo<PublicPerformanceResponse>) => apiResponse.data));
    }

}
