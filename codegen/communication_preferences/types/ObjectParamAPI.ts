import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { PublicSubscriptionStatus } from '../models/PublicSubscriptionStatus';
import { PublicSubscriptionStatusesResponse } from '../models/PublicSubscriptionStatusesResponse';
import { PublicUpdateSubscriptionStatusRequest } from '../models/PublicUpdateSubscriptionStatusRequest';
import { SubscriptionDefinitionsResponse } from '../models/SubscriptionDefinitionsResponse';

import { ObservableDefinitionApi } from "./ObservableAPI";
import { DefinitionApiRequestFactory, DefinitionApiResponseProcessor} from "../apis/DefinitionApi";

export interface DefinitionApiGetPageRequest {
}

export class ObjectDefinitionApi {
    private api: ObservableDefinitionApi

    public constructor(configuration: Configuration, requestFactory?: DefinitionApiRequestFactory, responseProcessor?: DefinitionApiResponseProcessor) {
        this.api = new ObservableDefinitionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of all subscription definitions for the portal
     * Get subscription definitions
     * @param param the request object
     */
    public getPageWithHttpInfo(param: DefinitionApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<SubscriptionDefinitionsResponse>> {
        return this.api.getPageWithHttpInfo( options).toPromise();
    }

    /**
     * Get a list of all subscription definitions for the portal
     * Get subscription definitions
     * @param param the request object
     */
    public getPage(param: DefinitionApiGetPageRequest = {}, options?: Configuration): Promise<SubscriptionDefinitionsResponse> {
        return this.api.getPage( options).toPromise();
    }

}

import { ObservableStatusApi } from "./ObservableAPI";
import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi";

export interface StatusApiGetEmailStatusRequest {
    /**
     * 
     * @type string
     * @memberof StatusApigetEmailStatus
     */
    emailAddress: string
}

export interface StatusApiSubscribeRequest {
    /**
     * 
     * @type PublicUpdateSubscriptionStatusRequest
     * @memberof StatusApisubscribe
     */
    publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest
}

export interface StatusApiUnsubscribeRequest {
    /**
     * 
     * @type PublicUpdateSubscriptionStatusRequest
     * @memberof StatusApiunsubscribe
     */
    publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest
}

export class ObjectStatusApi {
    private api: ObservableStatusApi

    public constructor(configuration: Configuration, requestFactory?: StatusApiRequestFactory, responseProcessor?: StatusApiResponseProcessor) {
        this.api = new ObservableStatusApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of subscriptions and their status for a given contact.
     * Get subscription statuses for a contact
     * @param param the request object
     */
    public getEmailStatusWithHttpInfo(param: StatusApiGetEmailStatusRequest, options?: Configuration): Promise<HttpInfo<PublicSubscriptionStatusesResponse>> {
        return this.api.getEmailStatusWithHttpInfo(param.emailAddress,  options).toPromise();
    }

    /**
     * Returns a list of subscriptions and their status for a given contact.
     * Get subscription statuses for a contact
     * @param param the request object
     */
    public getEmailStatus(param: StatusApiGetEmailStatusRequest, options?: Configuration): Promise<PublicSubscriptionStatusesResponse> {
        return this.api.getEmailStatus(param.emailAddress,  options).toPromise();
    }

    /**
     * Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
     * Subscribe a contact
     * @param param the request object
     */
    public subscribeWithHttpInfo(param: StatusApiSubscribeRequest, options?: Configuration): Promise<HttpInfo<PublicSubscriptionStatus>> {
        return this.api.subscribeWithHttpInfo(param.publicUpdateSubscriptionStatusRequest,  options).toPromise();
    }

    /**
     * Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
     * Subscribe a contact
     * @param param the request object
     */
    public subscribe(param: StatusApiSubscribeRequest, options?: Configuration): Promise<PublicSubscriptionStatus> {
        return this.api.subscribe(param.publicUpdateSubscriptionStatusRequest,  options).toPromise();
    }

    /**
     * Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
     * Unsubscribe a contact
     * @param param the request object
     */
    public unsubscribeWithHttpInfo(param: StatusApiUnsubscribeRequest, options?: Configuration): Promise<HttpInfo<PublicSubscriptionStatus>> {
        return this.api.unsubscribeWithHttpInfo(param.publicUpdateSubscriptionStatusRequest,  options).toPromise();
    }

    /**
     * Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
     * Unsubscribe a contact
     * @param param the request object
     */
    public unsubscribe(param: StatusApiUnsubscribeRequest, options?: Configuration): Promise<PublicSubscriptionStatus> {
        return this.api.unsubscribe(param.publicUpdateSubscriptionStatusRequest,  options).toPromise();
    }

}
