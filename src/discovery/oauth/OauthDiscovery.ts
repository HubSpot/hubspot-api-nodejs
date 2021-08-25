import * as _ from 'lodash'
import * as qs from 'querystring'
import { createConfiguration } from '../../../codegen/oauth/configuration'
import { AccessTokensApi, RefreshTokensApi, TokensApi } from '../../../codegen/oauth/index'
import { IConfiguration } from '../../IConfiguration'
import { BaseDiscovery } from '../BaseDiscovery'

export class OauthDiscovery extends BaseDiscovery {
  public accessTokensApi: AccessTokensApi
  public refreshTokensApi: RefreshTokensApi
  public tokensApi: TokensApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.accessTokensApi = new AccessTokensApi(configuration)
    this.refreshTokensApi = new RefreshTokensApi(configuration)
    this.tokensApi = new TokensApi(configuration)
  }

  getAuthorizationUrl(
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
