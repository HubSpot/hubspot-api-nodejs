import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BehavioralEventHttpCompletionRequest } from '../models/BehavioralEventHttpCompletionRequest';
import { ObservableBehavioralEventsTrackingApi } from './ObservableAPI';

import { BehavioralEventsTrackingApiRequestFactory, BehavioralEventsTrackingApiResponseProcessor} from "../apis/BehavioralEventsTrackingApi";
export class PromiseBehavioralEventsTrackingApi {
    private api: ObservableBehavioralEventsTrackingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BehavioralEventsTrackingApiRequestFactory,
        responseProcessor?: BehavioralEventsTrackingApiResponseProcessor
    ) {
        this.api = new ObservableBehavioralEventsTrackingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Endpoint to send an instance of a behavioral event
     * Sends Custom Behavioral Event
     * @param behavioralEventHttpCompletionRequest 
     */
    public sendWithHttpInfo(behavioralEventHttpCompletionRequest: BehavioralEventHttpCompletionRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.sendWithHttpInfo(behavioralEventHttpCompletionRequest, _options);
        return result.toPromise();
    }

    /**
     * Endpoint to send an instance of a behavioral event
     * Sends Custom Behavioral Event
     * @param behavioralEventHttpCompletionRequest 
     */
    public send(behavioralEventHttpCompletionRequest: BehavioralEventHttpCompletionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.send(behavioralEventHttpCompletionRequest, _options);
        return result.toPromise();
    }


}



