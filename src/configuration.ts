
export interface ConfigurationParameters {
    apiKey?: string;
    accessToken?: string;
}


export class configuration {
    public apiKey?: string
    public accessToken?: string

    constructor(config: ConfigurationParameters) {
        if (config.apiKey) {
            this.apiKey = config.apiKey
        }

        if (config.accessToken) {
            this.accessToken = config.accessToken
        }
    }
}
