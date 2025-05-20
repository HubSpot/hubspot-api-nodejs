import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { BatchedBehavioralEventHttpCompletionRequest } from '../models/BatchedBehavioralEventHttpCompletionRequest';
import { BehavioralEventHttpCompletionRequest } from '../models/BehavioralEventHttpCompletionRequest';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiSendRequest {
    /**
     * 
     * @type BehavioralEventHttpCompletionRequest
     * @memberof BasicApisend
     */
    behavioralEventHttpCompletionRequest: BehavioralEventHttpCompletionRequest
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send data for a single event completion.
     * Send a custom event completion
     * @param param the request object
     */
    public sendWithHttpInfo(param: BasicApiSendRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.sendWithHttpInfo(param.behavioralEventHttpCompletionRequest,  options).toPromise();
    }

    /**
     * Send data for a single event completion.
     * Send a custom event completion
     * @param param the request object
     */
    public send(param: BasicApiSendRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.send(param.behavioralEventHttpCompletionRequest,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiSendRequest {
    /**
     * 
     * @type BatchedBehavioralEventHttpCompletionRequest
     * @memberof BatchApisend
     */
    batchedBehavioralEventHttpCompletionRequest: BatchedBehavioralEventHttpCompletionRequest
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send multiple event completions at once.
     * Send a batch of event completions
     * @param param the request object
     */
    public sendWithHttpInfo(param: BatchApiSendRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.sendWithHttpInfo(param.batchedBehavioralEventHttpCompletionRequest,  options).toPromise();
    }

    /**
     * Send multiple event completions at once.
     * Send a batch of event completions
     * @param param the request object
     */
    public send(param: BatchApiSendRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.send(param.batchedBehavioralEventHttpCompletionRequest,  options).toPromise();
    }

}
