import { configuration } from '../configuration'

export class baseDiscovery {

    public config: configuration
  
    constructor(config: configuration) {
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