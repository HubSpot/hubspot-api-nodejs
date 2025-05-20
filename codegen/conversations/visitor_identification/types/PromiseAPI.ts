import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
    public generateTokenWithHttpInfo(identificationTokenGenerationRequest: IdentificationTokenGenerationRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<IdentificationTokenResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.generateTokenWithHttpInfo(identificationTokenGenerationRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
     * Generate a token
     * @param identificationTokenGenerationRequest
     */
    public generateToken(identificationTokenGenerationRequest: IdentificationTokenGenerationRequest, _options?: PromiseConfigurationOptions): Promise<IdentificationTokenResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.generateToken(identificationTokenGenerationRequest, observableOptions);
        return result.toPromise();
    }


}



