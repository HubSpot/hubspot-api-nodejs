import * as _ from 'lodash'
import * as qs from 'querystring'
import { createConfiguration } from '../../../codegen/oauth/configuration'
import {
  AccessTokensApi,
  RefreshTokensApi,
  RequestContext,
  ResponseContext,
  TokensApi,
} from '../../../codegen/oauth/index'
import { ApiClientConfirator } from '../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../configuration/IConfiguration'

export class OauthDiscovery {
  public accessTokensApi: AccessTokensApi
  public refreshTokensApi: RefreshTokensApi
  public tokensApi: TokensApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

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
