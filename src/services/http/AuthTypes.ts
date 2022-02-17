import { AuthMethods } from './AuthMethods'

export enum AuthTypes {
  apiKey = AuthMethods.hapikey,
  accessToken = AuthMethods.accessToken,
  developerApiKey = AuthMethods.hapikey,
}
