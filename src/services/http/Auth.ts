import get from 'lodash.get'
import IConfiguration from '../../configuration/IConfiguration'
import { AuthTypes } from './AuthTypes'
import { IHttpOptions } from './IHttpOptions'

export class Auth {
  public static chooseAuth(opts: IHttpOptions = {}, config: IConfiguration = {}): string | undefined {
    let type
    if (opts.authType) {
      if (opts.authType !== 'none' && get(config, opts.authType)) {
        type = opts.authType
      }
    } else {
      for (const key in AuthTypes) {
        if (get(config, key)) {
          type = key
        }
      }
    }

    return type
  }
}
