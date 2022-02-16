import { AuthMethods } from './AuthMethods'

export enum AuthTypes {
    apiKey = AuthMethods.hapikey,
    accessToken = AuthMethods.oauth2,
    developerApiKey = AuthMethods.hapikey,
}
