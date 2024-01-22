import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { PublicPerformanceResponse } from '../models/PublicPerformanceResponse';
import { ObservablePublicPerformanceApi } from './ObservableAPI';

import { PublicPerformanceApiRequestFactory, PublicPerformanceApiResponseProcessor} from "../apis/PublicPerformanceApi";
export class PromisePublicPerformanceApi {
    private api: ObservablePublicPerformanceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicPerformanceApiRequestFactory,
        responseProcessor?: PublicPerformanceApiResponseProcessor
    ) {
        this.api = new ObservablePublicPerformanceApi(configuration, requestFactory, responseProcessor);
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
    public getPageWithHttpInfo(domain?: string, path?: string, pad?: boolean, sum?: boolean, period?: string, interval?: string, start?: number, end?: number, _options?: Configuration): Promise<HttpInfo<PublicPerformanceResponse>> {
        const result = this.api.getPageWithHttpInfo(domain, path, pad, sum, period, interval, start, end, _options);
        return result.toPromise();
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
    public getPage(domain?: string, path?: string, pad?: boolean, sum?: boolean, period?: string, interval?: string, start?: number, end?: number, _options?: Configuration): Promise<PublicPerformanceResponse> {
        const result = this.api.getPage(domain, path, pad, sum, period, interval, start, end, _options);
        return result.toPromise();
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
    public getUptimeWithHttpInfo(domain?: string, path?: string, pad?: boolean, sum?: boolean, period?: string, interval?: string, start?: number, end?: number, _options?: Configuration): Promise<HttpInfo<PublicPerformanceResponse>> {
        const result = this.api.getUptimeWithHttpInfo(domain, path, pad, sum, period, interval, start, end, _options);
        return result.toPromise();
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
    public getUptime(domain?: string, path?: string, pad?: boolean, sum?: boolean, period?: string, interval?: string, start?: number, end?: number, _options?: Configuration): Promise<PublicPerformanceResponse> {
        const result = this.api.getUptime(domain, path, pad, sum, period, interval, start, end, _options);
        return result.toPromise();
    }


}



