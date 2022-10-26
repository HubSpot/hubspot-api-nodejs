import { initObject } from '../../services/initObject'
import BaseDiscovery from '../BaseDiscovery'

export class SettingsDiscovery extends BaseDiscovery {
  protected _users: any

  /**
   * Getter
   * @returns UsersDiscovery
   */
  get users() {
    if (!this._users) {
      this._users = initObject('settings/users/UsersDiscovery', this.config)
    }

    return this._users
  }
}
