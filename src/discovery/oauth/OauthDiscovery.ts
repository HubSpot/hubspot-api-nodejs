import * as qs from 'querystring'
import {
  AccessTokensApi,
  RefreshTokensApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  TokensApi,
  createConfiguration,
} from '../../../codegen/oauth/index'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../services/ApiDecoratorService'
import BaseDiscovery from '../BaseDiscovery'
import IConfiguration from '../../configuration/IConfiguration'
import { Observable } from '../../../codegen/oauth/rxjsStub'
import type V3Discovery from './v3/V3Discovery'

export default class OauthDiscovery extends BaseDiscovery {
  /**
   * @deprecated Use `oauth.v3.advancedApi` instead
   */
  public accessTokensApi: AccessTokensApi
  /**
   * @deprecated Use `oauth.v3.advancedApi` instead
   */
  public refreshTokensApi: RefreshTokensApi
  /**
   * @deprecated Use `oauth.v3.advancedApi` instead
   */
  public tokensApi: TokensApi
  protected _v3: V3Discovery | undefined

  constructor(config: IConfiguration = {}) {
    super(config)
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.accessTokensApi = ApiDecoratorService.getInstance().apply<AccessTokensApi>(new AccessTokensApi(configuration))
    this.refreshTokensApi = ApiDecoratorService.getInstance().apply<RefreshTokensApi>(
      new RefreshTokensApi(configuration),
    )
    this.tokensApi = ApiDecoratorService.getInstance().apply<TokensApi>(new TokensApi(configuration))
  }

  /**
   * Getter
   * @returns V3Discovery
   */
  get v3() {
    if (!this._v3) {
      const requiredClass = require('./v3/V3Discovery')
      this._v3 = new requiredClass.default(this.config) as V3Discovery
    }

    return this._v3
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
