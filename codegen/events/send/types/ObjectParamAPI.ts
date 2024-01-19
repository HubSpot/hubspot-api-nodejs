import { Configuration} from '../configuration'

import { BehavioralEventHttpCompletionRequest } from '../models/BehavioralEventHttpCompletionRequest';

import { ObservableBehavioralEventsTrackingApi } from "./ObservableAPI";
import { BehavioralEventsTrackingApiRequestFactory, BehavioralEventsTrackingApiResponseProcessor} from "../apis/BehavioralEventsTrackingApi";

export interface BehavioralEventsTrackingApiPostEventsV3SendRequest {
    /**
     * 
     * @type BehavioralEventHttpCompletionRequest
     * @memberof BehavioralEventsTrackingApipostEventsV3Send
     */
    behavioralEventHttpCompletionRequest: BehavioralEventHttpCompletionRequest
}

export class ObjectBehavioralEventsTrackingApi {
    private api: ObservableBehavioralEventsTrackingApi

    public constructor(configuration: Configuration, requestFactory?: BehavioralEventsTrackingApiRequestFactory, responseProcessor?: BehavioralEventsTrackingApiResponseProcessor) {
        this.api = new ObservableBehavioralEventsTrackingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Endpoint to send an instance of a behavioral event
     * Sends Custom Behavioral Event
     * @param param the request object
     */
    public postEventsV3Send(param: BehavioralEventsTrackingApiPostEventsV3SendRequest, options?: Configuration): Promise<void> {
        return this.api.postEventsV3Send(param.behavioralEventHttpCompletionRequest,  options).toPromise();
    }

}
