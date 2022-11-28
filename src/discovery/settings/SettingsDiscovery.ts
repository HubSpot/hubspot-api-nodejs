import { initObject } from '../../services/initObject'
import BaseDiscovery from '../BaseDiscovery'
import type UsersDiscovery from './users/UsersDiscovery'

export default class SettingsDiscovery extends BaseDiscovery {
  protected _users: UsersDiscovery | undefined

  /**
   * Getter
   * @returns UsersDiscovery
   */
  get users() {
    if (!this._users) {
      this._users = initObject<UsersDiscovery>('settings/users/UsersDiscovery', this.config)
    }

    return this._users
  }
}
