import IConfiguration from '../../configuration/IConfiguration'
import { AuthTypes } from './AuthTypes'
import { IHttpOptions } from './IHttpOptions'

export class Auth {
  public static chooseAuth(opts: IHttpOptions = {}, config: IConfiguration = {}): string | undefined {
    let type
    if (opts.authType) {
      if (opts.authType !== 'none' && opts.authType in config) {
        type = opts.authType
      }
    } else {
      for (const key in AuthTypes) {
        if (config[key as keyof typeof AuthTypes]) {
          type = key
        }
      }
    }

    return type
  }
}
