import { createConfiguration } from '../../../codegen/webhooks/configuration'
import {
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsApi,
  SubscriptionsApi,
} from '../../../codegen/webhooks/index'
import { Observable } from '../../../codegen/webhooks/rxjsStub'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../configuration/IConfiguration'
import { validateSignature } from '../../services/validateSignature'

export class WebhooksDiscovery {
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

    this.settingsApi = new SettingsApi(configuration)
    this.subscriptionsApi = new SubscriptionsApi(configuration)
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
