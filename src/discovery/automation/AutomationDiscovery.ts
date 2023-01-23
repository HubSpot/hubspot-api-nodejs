import { initObjectOld } from '../../services/initObjectOld'
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
      this._actions = initObjectOld<ActionsDiscovery>('automation/actions/ActionsDiscovery', this.config)
    }
    return this._actions
  }
}
