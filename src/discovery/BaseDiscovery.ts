import { IConfiguration } from '../IConfiguration'
import { VERSION } from '../version'

export class BaseDiscovery {
  public config: IConfiguration

  constructor(config: IConfiguration) {
    this.config = config
  }

  /**
   * create Configuration
   */
  public createConfiguration(createFunction: any) {
    const configuration = createFunction(this.getParams())

    return configuration
  }

  /**
   * getParams
   */
  public getParams() {
    let params = {}
    if (this.config.accessToken) {
      params = {
        authMethods: {
          oauth2: {
            accessToken: this.config.accessToken,
          },
        },
      }
    } else if (this.config.apiKey) {
      params = {
        authMethods: {
          hapikey: this.config.apiKey,
        },
      }
    } else if (this.config.developerApiKey) {
      params = {
        authMethods: {
          hapikey: this.config.developerApiKey,
        },
      }
    }

    return params
  }
}
