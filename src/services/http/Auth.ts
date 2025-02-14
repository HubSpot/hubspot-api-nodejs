import { AuthTypes } from './AuthTypes'
import IConfiguration from '../../configuration/IConfiguration'
import { IHttpOptions } from './IHttpOptions'
import get from 'lodash.get'

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
