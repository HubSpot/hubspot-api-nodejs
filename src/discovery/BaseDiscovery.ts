import { IConfiguration } from '../IConfiguration'
import { VERSION } from '../version'
import { IRequestContext } from './IRequestContext'
import { Observable } from './Observable'

export class BaseDiscovery {
  public config: IConfiguration

  constructor(config: IConfiguration) {
    this.config = config
  }

  /**
   * getParams
   */
  public getParams<RequestContextType extends IRequestContext, ResponseContextType>() {
    let params = {}
    if (this.config.accessToken) {
      params = {
        authMethods: {
          oauth2: {
            accessToken: this.config.accessToken,
          },
          middleware: this.getHeaderMiddleware<RequestContextType, ResponseContextType>(),
        },
      }
    } else if (this.config.apiKey) {
      params = {
        authMethods: {
          hapikey: this.config.apiKey,
        },
        middleware: this.getHeaderMiddleware<RequestContextType, ResponseContextType>(),
      }
    } else if (this.config.developerApiKey) {
      params = {
        authMethods: {
          hapikey: this.config.developerApiKey,
        },
        middleware: this.getHeaderMiddleware<RequestContextType, ResponseContextType>(),
      }
    }

    return params
  }

  public getHeaderMiddleware<RequestContextType extends IRequestContext, ResponseContextType>() {
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
