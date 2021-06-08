import { configuration } from '../../configuration'
import { BaseDiscovery } from '../BaseDiscovery'
import { SettingsApi, SubscriptionsApi } from '../../../codegen/webhooks/index'
import { createConfiguration } from '../../../codegen/webhooks/configuration'


export class WebhooksDiscovery extends BaseDiscovery {
    public settingsApi: SettingsApi
    public subscriptionsApi: SubscriptionsApi
    
    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.settingsApi = new SettingsApi(configuration)
        this.subscriptionsApi = new SubscriptionsApi(configuration)
    }
}
