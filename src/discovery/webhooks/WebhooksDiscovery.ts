import { createConfiguration } from '../../../codegen/webhooks/configuration'
import { SettingsApi, SubscriptionsApi } from '../../../codegen/webhooks/index'
import { Configuration } from '../../Configuration'
import { BaseDiscovery } from '../BaseDiscovery'


export class WebhooksDiscovery extends BaseDiscovery {
    public settingsApi: SettingsApi
    public subscriptionsApi: SubscriptionsApi
    
    constructor(config: Configuration) {
        super(config)

        const configuration = createConfiguration(this.getParams())
        
        this.settingsApi = new SettingsApi(configuration)
        this.subscriptionsApi = new SubscriptionsApi(configuration)
    }
}
