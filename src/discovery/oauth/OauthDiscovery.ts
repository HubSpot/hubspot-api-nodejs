import * as _ from 'lodash'
import * as qs from 'querystring'
import { createConfiguration } from '../../../codegen/oauth/configuration'
import {
  AccessTokensApi,
  RefreshTokensApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  TokensApi,
} from '../../../codegen/oauth/index'
import { Observable } from '../../../codegen/oauth/rxjsStub'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../configuration/IConfiguration'

export class OauthDiscovery {
  public accessTokensApi: AccessTokensApi
  public refreshTokensApi: RefreshTokensApi
  public tokensApi: TokensApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable)
    )

    this.accessTokensApi = new AccessTokensApi(configuration)
    this.refreshTokensApi = new RefreshTokensApi(configuration)
    this.tokensApi = new TokensApi(configuration)
  }

  public getAuthorizationUrl(
    clientId: string,
    redirectUri: string,
    scope: string,
    optionalScope?: string,
    state?: string,
  ): string {
    const params = {
      client_id: clientId,
      redirect_uri: redirectUri,
      scope,
      optional_scope: optionalScope,
      state,
    }

    return `https://app.hubspot.com/oauth/authorize?${qs.stringify(_.omitBy(params, _.isNil))}`
  }
}
