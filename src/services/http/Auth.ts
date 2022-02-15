import * as _ from 'lodash'
import { AuthMethod } from './AuthMethod'
import { IHttpOptions } from './IHttpOptions'
import { IConfiguration } from '../../configuration/IConfiguration'

export class Auth {
    static readonly hapikey: string = 'hapikey'
    static readonly oauth2: string = 'oauth2'
    static types = {
      apiKey: Auth.hapikey,
      accessToken: Auth.oauth2,
      developerApiKey: Auth.hapikey,
    }

    public static chooseAuth(opts: IHttpOptions = {}, config: IConfiguration = {}): AuthMethod | null {
      let auth = null
      if (opts.authType && _.get(config, opts.authType)) {
        auth = {
          type: _.get(Auth.types, opts.authType),
          value: _.get(config, opts.authType),
        }
      } else {
        _.forIn(Auth.types, (value, key) => {
          if (_.get(config, key)) {
            auth = {
              type: value,
              value: _.get(config, key),
            }
          }
        })
      }
      return auth
    }
}
