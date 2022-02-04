import * as _ from 'lodash'
import { any } from 'bluebird'
import { IRequestContext } from '../services/IRequestContext'
import { Observable } from '../services/Observable'
import { IConfiguration } from './IConfiguration'
import { VERSION } from './version'

export class ApiClientConfigurator {
  public static getParams<RequestContextType extends IRequestContext, ResponseContextType>(config: IConfiguration) {
    let params = {
      authMethods: {},
      middleware: [this.getHeaderMiddleware<RequestContextType, ResponseContextType>()]
    }
    if (config.accessToken) {
      _.merge(params.authMethods, {
        oauth2:  {
          accessToken: config.accessToken
        }
      })
      _.merge(params.authMethods, {
        oauth2_legacy:  {
          accessToken: config.accessToken
        }
      })
    }
    
    if (config.apiKey) {
      _.merge(params.authMethods, {
        hapikey:  config.apiKey
      })
    }

    if (config.developerApiKey) {
      _.merge(params.authMethods, {
        developer_hapikey:  config.developerApiKey
      })
    }

    return params
  }

  protected static getHeaderMiddleware<RequestContextType extends IRequestContext, ResponseContextType>() {
    return {
      pre(context: RequestContextType): Observable<RequestContextType> {
        context.setHeaderParam('User-agent', `hubspot-api-client-nodejs; ${VERSION}`)
        return new Observable<RequestContextType>(Promise.resolve(context))
      },
      post(context: ResponseContextType): Observable<ResponseContextType> {
        return new Observable<ResponseContextType>(Promise.resolve(context))
      },
    }
  }
}
