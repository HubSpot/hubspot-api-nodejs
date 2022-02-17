import * as _ from 'lodash'
import { IConfiguration } from '../../configuration/IConfiguration'
import { AuthTypes } from './AuthTypes'
import { IHttpOptions } from './IHttpOptions'

export class Auth {
  public static chooseAuth(opts: IHttpOptions = {}, config: IConfiguration = {}): string | undefined {
    let type
    if (opts.authType) {
      if (opts.authType !== 'none' && _.get(config, opts.authType)) {
        type = opts.authType
      }
    } else {
      _.forIn(AuthTypes, (value, key) => {
        if (_.get(config, key)) {
          type = key
        }
      })
    }

    return type
  }
}
