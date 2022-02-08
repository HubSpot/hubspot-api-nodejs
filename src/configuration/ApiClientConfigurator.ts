import * as _ from 'lodash'
import { IRequestContext } from '../services/IRequestContext'
import { IConfiguration } from './IConfiguration'
import { VERSION } from './version'

export class ApiClientConfigurator {
  public static getParams<
    RequestContextType extends IRequestContext,
    ResponseContextType,
    ObservableRequestContextType,
    ObservableResponseContextType
  >(
    config: IConfiguration,
    observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType,
    observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType,
  ) {
    let params = {
      middleware: [
        this.getHeaderMiddleware<
          RequestContextType,
          ResponseContextType,
          ObservableRequestContextType,
          ObservableResponseContextType
        >(observableRequestContextParam, observableResponseContextParam),
      ],
      authMethods: {},
    }

    if (config.accessToken) {
      _.merge(params.authMethods, {
        oauth2: {
          accessToken: config.accessToken,
        },
      })
      _.merge(params.authMethods, {
        oauth2_legacy: {
          accessToken: config.accessToken,
        },
      })
    }

    if (config.apiKey) {
      _.merge(params.authMethods, {
        hapikey: config.apiKey,
      })
    }

    if (config.developerApiKey) {
      _.merge(params.authMethods, {
        developer_hapikey: config.developerApiKey,
      })
    }
    return params
  }

  protected static getHeaderMiddleware<
    RequestContextType extends IRequestContext,
    ResponseContextType,
    ObservableRequestContextType,
    ObservableResponseContextType
  >(
    observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType,
    observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType,
  ) {
    return {
      pre(context: RequestContextType): ObservableRequestContextType {
        context.setHeaderParam('User-agent', `hubspot-api-client-nodejs; ${VERSION}`)
        return new observableRequestContextParam(Promise.resolve(context))
      },
      post(context: ResponseContextType): ObservableResponseContextType {
        return new observableResponseContextParam(Promise.resolve(context))
      },
    }
  }
}
