import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
import { TokenResponseIF } from '../models/TokenResponseIF';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param token 
     */
    public archiveRefreshToken(token: string, _options?: Configuration): Promise<void> {
        const result = this.api.archiveRefreshToken(token, _options);
        return result.toPromise();
    }

    /**
     * @param grantType 
     * @param code 
     * @param redirectUri 
     * @param clientId 
     * @param clientSecret 
     * @param refreshToken 
     */
    public createToken(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Promise<TokenResponseIF> {
        const result = this.api.createToken(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options);
        return result.toPromise();
    }

    /**
     * @param token 
     */
    public getAccessToken(token: string, _options?: Configuration): Promise<AccessTokenInfoResponse> {
        const result = this.api.getAccessToken(token, _options);
        return result.toPromise();
    }

    /**
     * @param token 
     */
    public getRefreshToken(token: string, _options?: Configuration): Promise<RefreshTokenInfoResponse> {
        const result = this.api.getRefreshToken(token, _options);
        return result.toPromise();
    }


}



