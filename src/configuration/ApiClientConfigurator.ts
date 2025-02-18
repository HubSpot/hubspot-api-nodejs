import merge from 'lodash.merge'
import { IRequestContext } from '../services/IRequestContext'
import IConfiguration from './IConfiguration'
import { VERSION } from './version'

export class ApiClientConfigurator {
  public static getParams<
    RequestContextType extends IRequestContext,
    ResponseContextType,
    ObservableRequestContextType,
    ObservableResponseContextType,
    ServerConfiguration,
  >(
    config: IConfiguration,
    serverConfigurationClass: new (
      url: string,
      variableConfiguration: { [key: string]: string },
    ) => ServerConfiguration,
    observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType,
    observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType,
  ) {
    const params = {
      middleware: this.getMiddleware<
        RequestContextType,
        ResponseContextType,
        ObservableRequestContextType,
        ObservableResponseContextType
      >(config, observableRequestContextParam, observableResponseContextParam),
      authMethods: this.getAuthMethods(config),
    }

    merge(params, this.getBaseServer(config, serverConfigurationClass))

    return params
  }

  public static getUserAgent() {
    return `hubspot-api-client-nodejs; ${VERSION}`
  }

  protected static getAuthMethods(config: IConfiguration) {
    let authMethods = {}

    if (config.accessToken) {
      authMethods = Object.assign(authMethods, {
        oauth2: {
          accessToken: config.accessToken,
        },
      })
      authMethods = Object.assign(authMethods, {
        oauth2_legacy: {
          accessToken: config.accessToken,
        },
      })
    }

    if (config.apiKey) {
      authMethods = Object.assign(authMethods, {
        hapikey: config.apiKey,
      })
    }

    if (config.developerApiKey) {
      authMethods = Object.assign(authMethods, {
        developer_hapikey: config.developerApiKey,
      })
    }

    return authMethods
  }

  protected static getBaseServer<ServerConfiguration>(
    config: IConfiguration,
    serverConfigurationClass: new (
      url: string,
      variableConfiguration: { [key: string]: string },
    ) => ServerConfiguration,
  ) {
    if (config.basePath) {
      return { baseServer: new serverConfigurationClass(config.basePath, {}) }
    }
    return {}
  }

  protected static getMiddleware<
    RequestContextType extends IRequestContext,
    ResponseContextType,
    ObservableRequestContextType,
    ObservableResponseContextType,
  >(
    config: IConfiguration,
    observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType,
    observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType,
  ) {
    const middleware = [
      this.getHeaderMiddleware<
        RequestContextType,
        ResponseContextType,
        ObservableRequestContextType,
        ObservableResponseContextType
      >(config, observableRequestContextParam, observableResponseContextParam),
    ]

    if (config.httpAgent) {
      middleware.push(
        this.getHttpAgentMiddleware<
          RequestContextType,
          ResponseContextType,
          ObservableRequestContextType,
          ObservableResponseContextType
        >(config, observableRequestContextParam, observableResponseContextParam),
      )
    }

    if (config.middleware) {
      middleware.push(
        ...this.getCustomMiddleware<
          RequestContextType,
          ResponseContextType,
          ObservableRequestContextType,
          ObservableResponseContextType
        >(config, observableRequestContextParam, observableResponseContextParam),
      )
    }

    return middleware
  }

  protected static getCustomMiddleware<
    RequestContextType extends IRequestContext,
    ResponseContextType,
    ObservableRequestContextType,
    ObservableResponseContextType,
  >(
    config: IConfiguration,
    observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType,
    observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType,
  ) {
    return (
      config.middleware
        ?.filter((m) => m.pre || m.post)
        .map((m) => ({
          pre: (context: RequestContextType): ObservableRequestContextType => {
            if (m.pre && typeof m.pre === 'function') {
              return new observableRequestContextParam(Promise.resolve(m.pre(context) as RequestContextType))
            }
            return new observableRequestContextParam(Promise.resolve(context))
          },
          post: (context: ResponseContextType): ObservableResponseContextType => {
            if (m.post && typeof m.post === 'function') {
              return new observableResponseContextParam(Promise.resolve(m.post(context) as ResponseContextType))
            }
            return new observableResponseContextParam(Promise.resolve(context))
          },
        })) ?? []
    )
  }

  protected static getHeaderMiddleware<
    RequestContextType extends IRequestContext,
    ResponseContextType,
    ObservableRequestContextType,
    ObservableResponseContextType,
  >(
    config: IConfiguration,
    observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType,
    observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType,
  ) {
    const headers = merge(config.defaultHeaders, { 'User-agent': this.getUserAgent() })

    return {
      pre(context: RequestContextType): ObservableRequestContextType {
        for (const key in headers) {
          if (Object.prototype.hasOwnProperty.call(headers, key)) {
            context.setHeaderParam(key, headers[key])
          }
        }
        return new observableRequestContextParam(Promise.resolve(context))
      },
      post(context: ResponseContextType): ObservableResponseContextType {
        return new observableResponseContextParam(Promise.resolve(context))
      },
    }
  }

  protected static getHttpAgentMiddleware<
    RequestContextType extends IRequestContext,
    ResponseContextType,
    ObservableRequestContextType,
    ObservableResponseContextType,
  >(
    config: IConfiguration,
    observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType,
    observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType,
  ) {
    const httpAgent = config.httpAgent

    return {
      pre(context: RequestContextType): ObservableRequestContextType {
        if (httpAgent) {
          context.setAgent(httpAgent)
        }
        return new observableRequestContextParam(Promise.resolve(context))
      },
      post(context: ResponseContextType): ObservableResponseContextType {
        return new observableResponseContextParam(Promise.resolve(context))
      },
    }
  }
}
