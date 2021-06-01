import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { PerformanceView } from '../models/PerformanceView';
import { PublicPerformanceResponse } from '../models/PublicPerformanceResponse';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetPageRequest {
    /**
     * The domain to search return data for.
     * @type string
     * @memberof DefaultApigetPage
     */
    domain?: string
    /**
     * The url path of the domain to return data for.
     * @type string
     * @memberof DefaultApigetPage
     */
    path?: string
    /**
     * Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
     * @type boolean
     * @memberof DefaultApigetPage
     */
    pad?: boolean
    /**
     * Specifies whether the time series data should be summated for the given period. Defaults to false.
     * @type boolean
     * @memberof DefaultApigetPage
     */
    sum?: boolean
    /**
     * A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @type string
     * @memberof DefaultApigetPage
     */
    period?: string
    /**
     * The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @type string
     * @memberof DefaultApigetPage
     */
    interval?: string
    /**
     * A timestamp in milliseconds that indicates the start of the time period.
     * @type number
     * @memberof DefaultApigetPage
     */
    start?: number
    /**
     * A timestamp in milliseconds that indicates the end of the time period.
     * @type number
     * @memberof DefaultApigetPage
     */
    end?: number
}

export interface DefaultApiGetUptimeRequest {
    /**
     * The domain to search return data for.
     * @type string
     * @memberof DefaultApigetUptime
     */
    domain?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetUptime
     */
    path?: string
    /**
     * Specifies whether the time series data should have empty intervals if performance data is not present to create a continuous set.
     * @type boolean
     * @memberof DefaultApigetUptime
     */
    pad?: boolean
    /**
     * Specifies whether the time series data should be summated for the given period. Defaults to false.
     * @type boolean
     * @memberof DefaultApigetUptime
     */
    sum?: boolean
    /**
     * A relative period to return time series data for. This value is ignored if start and/or end are provided. Valid periods: [15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @type string
     * @memberof DefaultApigetUptime
     */
    period?: string
    /**
     * The time series interval to group data by. Valid intervals: [1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w]
     * @type string
     * @memberof DefaultApigetUptime
     */
    interval?: string
    /**
     * A timestamp in milliseconds that indicates the start of the time period.
     * @type number
     * @memberof DefaultApigetUptime
     */
    start?: number
    /**
     * A timestamp in milliseconds that indicates the end of the time period.
     * @type number
     * @memberof DefaultApigetUptime
     */
    end?: number
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns time series data website performance data for the given domain and/or path.
     * View your website's performance.
     * @param param the request object
     */
    public getPage(param: DefaultApiGetPageRequest, options?: Configuration): Promise<PublicPerformanceResponse> {
        return this.api.getPage(param.domain, param.path, param.pad, param.sum, param.period, param.interval, param.start, param.end,  options).toPromise();
    }

    /**
     * Returns uptime time series website performance data for the given domain.
     * View your website's uptime.
     * @param param the request object
     */
    public getUptime(param: DefaultApiGetUptimeRequest, options?: Configuration): Promise<PublicPerformanceResponse> {
        return this.api.getUptime(param.domain, param.path, param.pad, param.sum, param.period, param.interval, param.start, param.end,  options).toPromise();
    }

}
