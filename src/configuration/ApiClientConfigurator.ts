import merge from 'lodash.merge'
import { IRequestContext } from '../services/IRequestContext'
import IConfiguration from './IConfiguration'
import { VERSION } from './version'

type MiddlewarePreBase<RequestContextType extends IRequestContext> = (context: RequestContextType) => RequestContextType
type MiddlewarePostBase<ResponseContextType> = (context: ResponseContextType) => ResponseContextType
export default interface IMiddlewareConfiguration<RequestContextType extends IRequestContext, ResponseContextType>
  extends IConfiguration {
  middleware?: Array<{
    pre: MiddlewarePreBase<RequestContextType> | undefined
    post: MiddlewarePostBase<ResponseContextType> | undefined
  }>
}

export class ApiClientConfigurator {
  public static getParams<
    RequestContextType extends IRequestContext,
    ResponseContextType,
    ObservableRequestContextType,
    ObservableResponseContextType,
    ServerConfiguration,
  >(
    config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>,
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

  protected static getAuthMethods<RequestContextType extends IRequestContext, ResponseContextType>(
    config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>,
  ) {
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

  protected static getBaseServer<ServerConfiguration, RequestContextType extends IRequestContext, ResponseContextType>(
    config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>,
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
    config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>,
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
    config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>,
    observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType,
    observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType,
  ) {
    // if (m.pre && typeof m.pre === 'function') {
    //   middleware.pre = (context) => {
    //         return new observableRequestContextParam(Promise.resolve(m.pre(context)));
    //     };
    // }
    // if (m.post && typeof m.post === 'function') {
    //   middleware.post = (context) => {
    //         return new observableResponseContextParam(Promise.resolve(m.post(context)));
    //     };
    // }
    // if (middleware.pre || middleware.post) custom.push(middleware);
    return (
      config.middleware
        ?.filter((m) => m.pre || m.post)
        .map((m) => ({
          pre: (context: RequestContextType): ObservableRequestContextType => {
            if (m.pre && typeof m.pre === 'function') {
              return new observableRequestContextParam(Promise.resolve(m.pre(context)))
            }
            return new observableRequestContextParam(Promise.resolve(context))
          },
          post: (context: ResponseContextType): ObservableResponseContextType => {
            if (m.post && typeof m.post === 'function') {
              return new observableResponseContextParam(Promise.resolve(m.post(context)))
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
    config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>,
    observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType,
    observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType,
  ) {
    const headers = merge(config.defaultHeaders, { 'User-agent': this.getUserAgent() })

    return {
      pre(context: RequestContextType): ObservableRequestContextType {
        for (const key in headers) {
          if (headers.hasOwnProperty(key)) {
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
    config: IMiddlewareConfiguration<RequestContextType, ResponseContextType>,
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
