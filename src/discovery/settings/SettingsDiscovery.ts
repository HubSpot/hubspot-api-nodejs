import { IConfiguration } from '../../configuration/IConfiguration'
import { UsersDiscovery } from './users/UsersDiscovery'

export class SettingsDiscovery {
  public users: UsersDiscovery

  constructor(config: IConfiguration = {}) {
    this.users = new UsersDiscovery(config)
  }
}
