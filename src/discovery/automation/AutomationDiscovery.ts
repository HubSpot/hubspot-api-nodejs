import IConfiguration from '../../configuration/IConfiguration'
import ActionsDiscovery from './actions/ActionsDiscovery'

export default class AutomationDiscovery {
  public actions: ActionsDiscovery

  constructor(config: IConfiguration = {}) {
    this.actions = new ActionsDiscovery(config)
  }
}
