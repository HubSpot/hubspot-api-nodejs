import { initObject } from '../../services/initObject'
import BaseDiscovery from '../BaseDiscovery'

export class AutomationDiscovery extends BaseDiscovery {
  protected _actions: any

  /**
   * Getter
   * @returns ActionsDiscovery
   */
  get actions() {
    if (!this._actions) {
      this._actions = initObject('automation/actions/ActionsDiscovery', this.config)
    }

    return this._actions
  }
}
