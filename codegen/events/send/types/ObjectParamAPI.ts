import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BehavioralEventHttpCompletionRequest } from '../models/BehavioralEventHttpCompletionRequest';

import { ObservableCustomEventDataApi } from "./ObservableAPI";
import { CustomEventDataApiRequestFactory, CustomEventDataApiResponseProcessor} from "../apis/CustomEventDataApi";

export interface CustomEventDataApiSendRequest {
    /**
     * 
     * @type BehavioralEventHttpCompletionRequest
     * @memberof CustomEventDataApisend
     */
    behavioralEventHttpCompletionRequest: BehavioralEventHttpCompletionRequest
}

export class ObjectCustomEventDataApi {
    private api: ObservableCustomEventDataApi

    public constructor(configuration: Configuration, requestFactory?: CustomEventDataApiRequestFactory, responseProcessor?: CustomEventDataApiResponseProcessor) {
        this.api = new ObservableCustomEventDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Endpoint to send an instance of a custom event.
     * Send custom event completion
     * @param param the request object
     */
    public sendWithHttpInfo(param: CustomEventDataApiSendRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.sendWithHttpInfo(param.behavioralEventHttpCompletionRequest,  options).toPromise();
    }

    /**
     * Endpoint to send an instance of a custom event.
     * Send custom event completion
     * @param param the request object
     */
    public send(param: CustomEventDataApiSendRequest, options?: Configuration): Promise<void> {
        return this.api.send(param.behavioralEventHttpCompletionRequest,  options).toPromise();
    }

}
