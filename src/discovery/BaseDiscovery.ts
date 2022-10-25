import { IConfiguration } from '../configuration/IConfiguration'

export class BaseDiscovery {
  public config: IConfiguration

  constructor(config: IConfiguration = {}) {
    this.config = config
  }
}
