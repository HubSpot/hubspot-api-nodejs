import { IConfiguration } from '../IConfiguration'

export class BaseDiscovery {

    public config: IConfiguration
  
    constructor(config: IConfiguration) {
        this.config = config
    }

    /**
     * getParams
     */
    public getParams() {
        let params = {}
        if (this.config.apiKey) {
            params = {
                authMethods: {
                    hapikey: this.config.apiKey
                } 
            }
        } else if (this.config.accessToken) {
            params = {
                authMethods: {
                    oauth2: {
                        accessToken: this.config.accessToken
                    }
                } 
            }
        }

        return params
    }
  }
  