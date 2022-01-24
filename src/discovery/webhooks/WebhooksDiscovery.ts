import { createConfiguration } from '../../../codegen/webhooks/configuration'
import { RequestContext, ResponseContext, SettingsApi, SubscriptionsApi } from '../../../codegen/webhooks/index'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../configuration/IConfiguration'

export class WebhooksDiscovery {
  public settingsApi: SettingsApi
  public subscriptionsApi: SubscriptionsApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.settingsApi = new SettingsApi(configuration)
    this.subscriptionsApi = new SubscriptionsApi(configuration)
  }
}
