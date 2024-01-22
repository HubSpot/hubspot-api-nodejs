import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { IdentificationTokenGenerationRequest } from '../models/IdentificationTokenGenerationRequest';
import { IdentificationTokenResponse } from '../models/IdentificationTokenResponse';
import { ObservableGenerateApi } from './ObservableAPI';

import { GenerateApiRequestFactory, GenerateApiResponseProcessor} from "../apis/GenerateApi";
export class PromiseGenerateApi {
    private api: ObservableGenerateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GenerateApiRequestFactory,
        responseProcessor?: GenerateApiResponseProcessor
    ) {
        this.api = new ObservableGenerateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
     * Generate a token
     * @param identificationTokenGenerationRequest 
     */
    public generateTokenWithHttpInfo(identificationTokenGenerationRequest: IdentificationTokenGenerationRequest, _options?: Configuration): Promise<HttpInfo<IdentificationTokenResponse>> {
        const result = this.api.generateTokenWithHttpInfo(identificationTokenGenerationRequest, _options);
        return result.toPromise();
    }

    /**
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
     * Generate a token
     * @param identificationTokenGenerationRequest 
     */
    public generateToken(identificationTokenGenerationRequest: IdentificationTokenGenerationRequest, _options?: Configuration): Promise<IdentificationTokenResponse> {
        const result = this.api.generateToken(identificationTokenGenerationRequest, _options);
        return result.toPromise();
    }


}



