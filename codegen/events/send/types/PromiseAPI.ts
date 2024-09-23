import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BehavioralEventHttpCompletionRequest } from '../models/BehavioralEventHttpCompletionRequest';
import { ObservableCustomEventDataApi } from './ObservableAPI';

import { CustomEventDataApiRequestFactory, CustomEventDataApiResponseProcessor} from "../apis/CustomEventDataApi";
export class PromiseCustomEventDataApi {
    private api: ObservableCustomEventDataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomEventDataApiRequestFactory,
        responseProcessor?: CustomEventDataApiResponseProcessor
    ) {
        this.api = new ObservableCustomEventDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Endpoint to send an instance of a custom event.
     * Send custom event completion
     * @param behavioralEventHttpCompletionRequest 
     */
    public sendWithHttpInfo(behavioralEventHttpCompletionRequest: BehavioralEventHttpCompletionRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.sendWithHttpInfo(behavioralEventHttpCompletionRequest, _options);
        return result.toPromise();
    }

    /**
     * Endpoint to send an instance of a custom event.
     * Send custom event completion
     * @param behavioralEventHttpCompletionRequest 
     */
    public send(behavioralEventHttpCompletionRequest: BehavioralEventHttpCompletionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.send(behavioralEventHttpCompletionRequest, _options);
        return result.toPromise();
    }


}



