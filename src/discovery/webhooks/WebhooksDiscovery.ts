import {
  Configuration,
  createConfiguration,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsApi,
  SubscriptionsApi,
} from '../../../codegen/webhooks/index'
import { Observable } from '../../../codegen/webhooks/rxjsStub'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import IConfiguration from '../../configuration/IConfiguration'
import ApiDecoratorService from '../../services/ApiDecoratorService'
import { validateSignature } from '../../services/validateSignature'

export default class WebhooksDiscovery {
  public settingsApi: SettingsApi
  public subscriptionsApi: SubscriptionsApi

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

    this.settingsApi = ApiDecoratorService.getInstance().apply<SettingsApi, Configuration>(
      new SettingsApi(configuration),
      configuration,
    )
    this.subscriptionsApi = ApiDecoratorService.getInstance().apply<SubscriptionsApi, Configuration>(
      new SubscriptionsApi(configuration),
      configuration,
    )
  }

  /**
   *
   * @deprecated
   */
  public validateSignature(
    signature: string,
    clientSecret: string,
    requestBody: string,
    signatureVersion = 'v1',
    webhooksUrl?: string,
    webhooksMethod = 'POST',
  ): boolean {
    return validateSignature(signature, clientSecret, requestBody, signatureVersion, webhooksUrl, webhooksMethod)
  }
}
