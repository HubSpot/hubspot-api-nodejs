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
      const requiredClass = require('./actions/ActionsDiscovery')
      this._actions = new requiredClass.default(this.config) as ActionsDiscovery
    }

    return this._actions
  }
}
