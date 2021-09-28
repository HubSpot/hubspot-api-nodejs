import { createConfiguration } from '../../../codegen/webhooks/configuration'
import { SettingsApi, SubscriptionsApi } from '../../../codegen/webhooks/index'
import { IConfiguration } from '../../IConfiguration'
import { BaseDiscovery } from '../BaseDiscovery'

export class WebhooksDiscovery extends BaseDiscovery {
  public settingsApi: SettingsApi
  public subscriptionsApi: SubscriptionsApi

  constructor(config: IConfiguration = {}) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.settingsApi = new SettingsApi(configuration)
    this.subscriptionsApi = new SubscriptionsApi(configuration)
  }
}
