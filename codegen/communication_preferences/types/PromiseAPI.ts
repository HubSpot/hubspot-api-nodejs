import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { PublicSubscriptionStatus } from '../models/PublicSubscriptionStatus';
import { PublicSubscriptionStatusesResponse } from '../models/PublicSubscriptionStatusesResponse';
import { PublicUpdateSubscriptionStatusRequest } from '../models/PublicUpdateSubscriptionStatusRequest';
import { SubscriptionDefinition } from '../models/SubscriptionDefinition';
import { SubscriptionDefinitionsResponse } from '../models/SubscriptionDefinitionsResponse';
import { ObservableDefinitionApi } from './ObservableAPI';

import { DefinitionApiRequestFactory, DefinitionApiResponseProcessor} from "../apis/DefinitionApi";
export class PromiseDefinitionApi {
    private api: ObservableDefinitionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefinitionApiRequestFactory,
        responseProcessor?: DefinitionApiResponseProcessor
    ) {
        this.api = new ObservableDefinitionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of all subscription definitions for the portal
     * Get subscription definitions
     */
    public getPage(_options?: Configuration): Promise<SubscriptionDefinitionsResponse> {
        const result = this.api.getPage(_options);
        return result.toPromise();
    }


}



import { ObservableStatusApi } from './ObservableAPI';

import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi";
export class PromiseStatusApi {
    private api: ObservableStatusApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatusApiRequestFactory,
        responseProcessor?: StatusApiResponseProcessor
    ) {
        this.api = new ObservableStatusApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of subscriptions and their status for a given contact.
     * Get subscription statuses for a contact
     * @param emailAddress 
     */
    public getEmailStatus(emailAddress: string, _options?: Configuration): Promise<PublicSubscriptionStatusesResponse> {
        const result = this.api.getEmailStatus(emailAddress, _options);
        return result.toPromise();
    }

    /**
     * Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
     * Subscribe a contact
     * @param publicUpdateSubscriptionStatusRequest 
     */
    public subscribe(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Promise<PublicSubscriptionStatus> {
        const result = this.api.subscribe(publicUpdateSubscriptionStatusRequest, _options);
        return result.toPromise();
    }

    /**
     * Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
     * Unsubscribe a contact
     * @param publicUpdateSubscriptionStatusRequest 
     */
    public unsubscribe(publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, _options?: Configuration): Promise<PublicSubscriptionStatus> {
        const result = this.api.unsubscribe(publicUpdateSubscriptionStatusRequest, _options);
        return result.toPromise();
    }


}



