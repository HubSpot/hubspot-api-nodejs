import { IConfiguration } from '../../IConfiguration'
import { ActionsDiscovery } from './actions/ActionsDiscovery'

export class AutomationDiscovery {
  public actions: ActionsDiscovery

  constructor(config: IConfiguration = {}) {
    this.actions = new ActionsDiscovery(config)
  }
}
