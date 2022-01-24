import { IConfiguration } from '../configuration/IConfiguration'
import { VERSION } from '../configuration/version'
import { IRequestContext } from '../services/IRequestContext'
import { Observable } from '../services/Observable'

export class ApiClientConfirator {
  public static getParams<RequestContextType extends IRequestContext, ResponseContextType>(config: IConfiguration) {
    let params = {}
    if (config.accessToken) {
      params = {
        authMethods: {
          oauth2: {
            accessToken: config.accessToken,
          },
          middleware: this.getHeaderMiddleware<RequestContextType, ResponseContextType>(),
        },
      }
    } else if (config.apiKey) {
      params = {
        authMethods: {
          hapikey: config.apiKey,
        },
        middleware: this.getHeaderMiddleware<RequestContextType, ResponseContextType>(),
      }
    } else if (config.developerApiKey) {
      params = {
        authMethods: {
          hapikey: config.developerApiKey,
        },
        middleware: this.getHeaderMiddleware<RequestContextType, ResponseContextType>(),
      }
    }

    return params
  }

  public static getHeaderMiddleware<RequestContextType extends IRequestContext, ResponseContextType>() {
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
