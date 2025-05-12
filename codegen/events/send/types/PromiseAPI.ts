import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BatchedBehavioralEventHttpCompletionRequest } from '../models/BatchedBehavioralEventHttpCompletionRequest';
import { BehavioralEventHttpCompletionRequest } from '../models/BehavioralEventHttpCompletionRequest';
import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send data for a single event completion.
     * Send a custom event completion
     * @param behavioralEventHttpCompletionRequest 
     */
    public sendWithHttpInfo(behavioralEventHttpCompletionRequest: BehavioralEventHttpCompletionRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.sendWithHttpInfo(behavioralEventHttpCompletionRequest, _options);
        return result.toPromise();
    }

    /**
     * Send data for a single event completion.
     * Send a custom event completion
     * @param behavioralEventHttpCompletionRequest 
     */
    public send(behavioralEventHttpCompletionRequest: BehavioralEventHttpCompletionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.send(behavioralEventHttpCompletionRequest, _options);
        return result.toPromise();
    }


}



import { ObservableBatchApi } from './ObservableAPI';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class PromiseBatchApi {
    private api: ObservableBatchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send multiple event completions at once.
     * Send a batch of event completions
     * @param batchedBehavioralEventHttpCompletionRequest 
     */
    public sendWithHttpInfo(batchedBehavioralEventHttpCompletionRequest: BatchedBehavioralEventHttpCompletionRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.sendWithHttpInfo(batchedBehavioralEventHttpCompletionRequest, _options);
        return result.toPromise();
    }

    /**
     * Send multiple event completions at once.
     * Send a batch of event completions
     * @param batchedBehavioralEventHttpCompletionRequest 
     */
    public send(batchedBehavioralEventHttpCompletionRequest: BatchedBehavioralEventHttpCompletionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.send(batchedBehavioralEventHttpCompletionRequest, _options);
        return result.toPromise();
    }


}



