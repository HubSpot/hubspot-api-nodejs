import IConfiguration from '../configuration/IConfiguration'

export default class BaseDiscovery {
  public config: IConfiguration

  constructor(config: IConfiguration = {}) {
    this.config = config
  }
}
