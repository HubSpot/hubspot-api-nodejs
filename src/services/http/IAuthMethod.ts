import { AuthMethods } from './AuthMethods'

export interface IAuthMethod {
  type: AuthMethods,
  value: string,
}
