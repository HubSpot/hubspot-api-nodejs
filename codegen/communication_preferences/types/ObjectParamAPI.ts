import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { PublicSubscriptionStatus } from '../models/PublicSubscriptionStatus';
import { PublicSubscriptionStatusesResponse } from '../models/PublicSubscriptionStatusesResponse';
import { PublicUpdateSubscriptionStatusRequest } from '../models/PublicUpdateSubscriptionStatusRequest';
import { SubscriptionDefinitionsResponse } from '../models/SubscriptionDefinitionsResponse';

import { ObservableAdvancedApi } from "./ObservableAPI";
import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";

export interface AdvancedApiSubscribeRequest {
    /**
     * 
     * @type PublicUpdateSubscriptionStatusRequest
     * @memberof AdvancedApisubscribe
     */
    publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest
}

export interface AdvancedApiUnsubscribeRequest {
    /**
     * 
     * @type PublicUpdateSubscriptionStatusRequest
     * @memberof AdvancedApiunsubscribe
     */
    publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest
}

export class ObjectAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedApiRequestFactory, responseProcessor?: AdvancedApiResponseProcessor) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public subscribeWithHttpInfo(param: AdvancedApiSubscribeRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicSubscriptionStatus>> {
        return this.api.subscribeWithHttpInfo(param.publicUpdateSubscriptionStatusRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public subscribe(param: AdvancedApiSubscribeRequest, options?: ConfigurationOptions): Promise<PublicSubscriptionStatus> {
        return this.api.subscribe(param.publicUpdateSubscriptionStatusRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public unsubscribeWithHttpInfo(param: AdvancedApiUnsubscribeRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicSubscriptionStatus>> {
        return this.api.unsubscribeWithHttpInfo(param.publicUpdateSubscriptionStatusRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public unsubscribe(param: AdvancedApiUnsubscribeRequest, options?: ConfigurationOptions): Promise<PublicSubscriptionStatus> {
        return this.api.unsubscribe(param.publicUpdateSubscriptionStatusRequest,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiGetEmailStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetEmailStatus
     */
    emailAddress: string
}

export interface BasicApiGetPageRequest {
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getEmailStatusWithHttpInfo(param: BasicApiGetEmailStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicSubscriptionStatusesResponse>> {
        return this.api.getEmailStatusWithHttpInfo(param.emailAddress,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getEmailStatus(param: BasicApiGetEmailStatusRequest, options?: ConfigurationOptions): Promise<PublicSubscriptionStatusesResponse> {
        return this.api.getEmailStatus(param.emailAddress,  options).toPromise();
    }

    /**
     * Get a list of subscription status definitions from the account.
     * Retrieve all subscription status definitions
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BasicApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionDefinitionsResponse>> {
        return this.api.getPageWithHttpInfo( options).toPromise();
    }

    /**
     * Get a list of subscription status definitions from the account.
     * Retrieve all subscription status definitions
     * @param param the request object
     */
    public getPage(param: BasicApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<SubscriptionDefinitionsResponse> {
        return this.api.getPage( options).toPromise();
    }

}
