import { configuration } from '../../configuration'
import { ActionsDiscovery } from './actions/ActionsDiscovery'

export class AutomationDiscovery {
    public actions: ActionsDiscovery

    constructor(config: configuration) {
        this.actions = new ActionsDiscovery(config)
    }
}
