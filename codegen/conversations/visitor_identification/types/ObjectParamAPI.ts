import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { IdentificationTokenGenerationRequest } from '../models/IdentificationTokenGenerationRequest';
import { IdentificationTokenResponse } from '../models/IdentificationTokenResponse';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiGenerateTokenRequest {
    /**
     * 
     * @type IdentificationTokenGenerationRequest
     * @memberof BasicApigenerateToken
     */
    identificationTokenGenerationRequest: IdentificationTokenGenerationRequest
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generate an identification token for a website visitor who has been authenticated using your own system. An identification token returned from this API can be used to pass information about your already-authenticated visitor to the chat widget, so that it treats the visitor as a known contact. This allows support agents to recognize and assist the visitor more effectively.
     * Generate visitor token
     * @param param the request object
     */
    public generateTokenWithHttpInfo(param: BasicApiGenerateTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<IdentificationTokenResponse>> {
        return this.api.generateTokenWithHttpInfo(param.identificationTokenGenerationRequest,  options).toPromise();
    }

    /**
     * Generate an identification token for a website visitor who has been authenticated using your own system. An identification token returned from this API can be used to pass information about your already-authenticated visitor to the chat widget, so that it treats the visitor as a known contact. This allows support agents to recognize and assist the visitor more effectively.
     * Generate visitor token
     * @param param the request object
     */
    public generateToken(param: BasicApiGenerateTokenRequest, options?: ConfigurationOptions): Promise<IdentificationTokenResponse> {
        return this.api.generateToken(param.identificationTokenGenerationRequest,  options).toPromise();
    }

}
