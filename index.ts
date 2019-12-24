import { Client } from './src/client'
export = (options: {
    apiKey?: string,
    accessToken?: string,
    clientId?: string,
    clientSecret?: string,
    redirectUri?: string,
    refreshToken?: string,
    basePath?: string,
    defaultHeaders?: object
} = {}) => {
    return new Client(options)
}
