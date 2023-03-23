import * as qs from 'querystring'
import {
  AccessTokensApi,
  createConfiguration,
  RefreshTokensApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  TokensApi,
} from '../../../codegen/oauth/index'
import { Observable } from '../../../codegen/oauth/rxjsStub'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import IConfiguration from '../../configuration/IConfiguration'
import ApiDecoratorService from '../../services/ApiDecoratorService'

export default class OauthDiscovery {
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
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.accessTokensApi = ApiDecoratorService.getInstance().apply<AccessTokensApi>(new AccessTokensApi(configuration))
    this.refreshTokensApi = ApiDecoratorService.getInstance().apply<RefreshTokensApi>(
      new RefreshTokensApi(configuration),
    )
    this.tokensApi = ApiDecoratorService.getInstance().apply<TokensApi>(new TokensApi(configuration))
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

    if (params.optional_scope === undefined) {
      delete params.optional_scope
    }

    if (params.state === undefined) {
      delete params.state
    }

    return `https://app.hubspot.com/oauth/authorize?${qs.stringify(params)}`
  }
}
