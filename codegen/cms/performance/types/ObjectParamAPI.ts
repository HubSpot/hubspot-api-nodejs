import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { PublicPerformanceResponse } from '../models/PublicPerformanceResponse';

import { ObservablePublicPerformanceApi } from "./ObservableAPI";
import { PublicPerformanceApiRequestFactory, PublicPerformanceApiResponseProcessor} from "../apis/PublicPerformanceApi";

export interface PublicPerformanceApiGetPageRequest {
    /**
     * The domain to search return data for.
     * @type string
     * @memberof PublicPerformanceApigetPage
     */
    domain?: string
    /**
     * The url path of the domain to return data for.
     * @type string
     * @memberof PublicPerformanceApigetPage
     */
    path?: string
    /**
     * Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
     * @type boolean
     * @memberof PublicPerformanceApigetPage
     */
    pad?: boolean
    /**
     * Specifies whether the time series data should be summated for the given period. Defaults to false.
     * @type boolean
     * @memberof PublicPerformanceApigetPage
     */
    sum?: boolean
    /**
     * A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @type string
     * @memberof PublicPerformanceApigetPage
     */
    period?: string
    /**
     * The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @type string
     * @memberof PublicPerformanceApigetPage
     */
    interval?: string
    /**
     * A timestamp in milliseconds that indicates the start of the time period.
     * @type number
     * @memberof PublicPerformanceApigetPage
     */
    start?: number
    /**
     * A timestamp in milliseconds that indicates the end of the time period.
     * @type number
     * @memberof PublicPerformanceApigetPage
     */
    end?: number
}

export interface PublicPerformanceApiGetUptimeRequest {
    /**
     * The domain to search return data for.
     * @type string
     * @memberof PublicPerformanceApigetUptime
     */
    domain?: string
    /**
     * 
     * @type string
     * @memberof PublicPerformanceApigetUptime
     */
    path?: string
    /**
     * Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
     * @type boolean
     * @memberof PublicPerformanceApigetUptime
     */
    pad?: boolean
    /**
     * Specifies whether the time series data should be summated for the given period. Defaults to false.
     * @type boolean
     * @memberof PublicPerformanceApigetUptime
     */
    sum?: boolean
    /**
     * A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @type string
     * @memberof PublicPerformanceApigetUptime
     */
    period?: string
    /**
     * The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @type string
     * @memberof PublicPerformanceApigetUptime
     */
    interval?: string
    /**
     * A timestamp in milliseconds that indicates the start of the time period.
     * @type number
     * @memberof PublicPerformanceApigetUptime
     */
    start?: number
    /**
     * A timestamp in milliseconds that indicates the end of the time period.
     * @type number
     * @memberof PublicPerformanceApigetUptime
     */
    end?: number
}

export class ObjectPublicPerformanceApi {
    private api: ObservablePublicPerformanceApi

    public constructor(configuration: Configuration, requestFactory?: PublicPerformanceApiRequestFactory, responseProcessor?: PublicPerformanceApiResponseProcessor) {
        this.api = new ObservablePublicPerformanceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns time series data website performance data for the given domain and/or path.
     * View your website\'s performance.
     * @param param the request object
     */
    public getPageWithHttpInfo(param: PublicPerformanceApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<PublicPerformanceResponse>> {
        return this.api.getPageWithHttpInfo(param.domain, param.path, param.pad, param.sum, param.period, param.interval, param.start, param.end,  options).toPromise();
    }

    /**
     * Returns time series data website performance data for the given domain and/or path.
     * View your website\'s performance.
     * @param param the request object
     */
    public getPage(param: PublicPerformanceApiGetPageRequest = {}, options?: Configuration): Promise<PublicPerformanceResponse> {
        return this.api.getPage(param.domain, param.path, param.pad, param.sum, param.period, param.interval, param.start, param.end,  options).toPromise();
    }

    /**
     * Returns uptime time series website performance data for the given domain.
     * View your website\'s uptime.
     * @param param the request object
     */
    public getUptimeWithHttpInfo(param: PublicPerformanceApiGetUptimeRequest = {}, options?: Configuration): Promise<HttpInfo<PublicPerformanceResponse>> {
        return this.api.getUptimeWithHttpInfo(param.domain, param.path, param.pad, param.sum, param.period, param.interval, param.start, param.end,  options).toPromise();
    }

    /**
     * Returns uptime time series website performance data for the given domain.
     * View your website\'s uptime.
     * @param param the request object
     */
    public getUptime(param: PublicPerformanceApiGetUptimeRequest = {}, options?: Configuration): Promise<PublicPerformanceResponse> {
        return this.api.getUptime(param.domain, param.path, param.pad, param.sum, param.period, param.interval, param.start, param.end,  options).toPromise();
    }

}
