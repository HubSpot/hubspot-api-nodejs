import { initObject } from '../../services/initObject'
import BaseDiscovery from '../BaseDiscovery'
import type ActionsDiscovery from './actions/ActionsDiscovery'

export default class AutomationDiscovery extends BaseDiscovery {
  protected _actions: ActionsDiscovery | undefined

  /**
   * Getter
   * @returns ActionsDiscovery
   */
  get actions() {
    if (!this._actions) {
      this._actions = initObject<ActionsDiscovery>('automation/actions/ActionsDiscovery', this.config)
    }
    return this._actions
  }
}
