import { createConfiguration } from '../../../codegen/webhooks/configuration'
import { RequestContext, ResponseContext, SettingsApi, SubscriptionsApi } from '../../../codegen/webhooks/index'
import { IConfiguration } from '../../configuration/IConfiguration'
import { BaseDiscovery } from '../BaseDiscovery'

export class WebhooksDiscovery extends BaseDiscovery {
  public settingsApi: SettingsApi
  public subscriptionsApi: SubscriptionsApi

  constructor(config: IConfiguration = {}) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.settingsApi = new SettingsApi(configuration)
    this.subscriptionsApi = new SubscriptionsApi(configuration)
  }
}
