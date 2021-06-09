import { Configuration } from '../../Configuration'
import { ActionsDiscovery } from './actions/ActionsDiscovery'

export class AutomationDiscovery {
    public actions: ActionsDiscovery

    constructor(config: Configuration) {
        this.actions = new ActionsDiscovery(config)
    }
}
