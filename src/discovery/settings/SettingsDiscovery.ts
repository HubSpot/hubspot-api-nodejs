import BaseDiscovery from '../BaseDiscovery'
import type BusinessUnitsDiscovery from './business_units/BusinessUnitsDiscovery'
import type UsersDiscovery from './users/UsersDiscovery'

export default class SettingsDiscovery extends BaseDiscovery {
  protected _businessUnits: BusinessUnitsDiscovery | undefined
  protected _users: UsersDiscovery | undefined

  /**
   * Getter
   * @returns BusinessUnitsDiscovery
   */
  get businessUnits() {
    if (!this._businessUnits) {
      const requiredClass = require('./business_units/BusinessUnitsDiscovery')
      this._businessUnits = new requiredClass.default(this.config) as BusinessUnitsDiscovery
    }

    return this._businessUnits
  }

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
