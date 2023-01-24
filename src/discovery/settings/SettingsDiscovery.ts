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
      const requiredClass = require('./users/UsersDiscovery')
      this._users = new requiredClass.default(this.config) as UsersDiscovery
    }

    return this._users
  }
}
