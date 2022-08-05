import forIn from 'lodash/forIn'
import merge from 'lodash/merge'
import { IRequestContext } from '../services/IRequestContext'
import { IConfiguration } from './IConfiguration'
import { VERSION } from './version'

export class ApiClientConfigurator {
  public static getParams<
    RequestContextType extends IRequestContext,
    ResponseContextType,
    ObservableRequestContextType,
    ObservableResponseContextType,
    ServerConfiguration
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
      middleware: [
        this.getHeaderMiddleware<
          RequestContextType,
          ResponseContextType,
          ObservableRequestContextType,
          ObservableResponseContextType
        >(config, observableRequestContextParam, observableResponseContextParam),
      ],
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

  protected static getHeaderMiddleware<
    RequestContextType extends IRequestContext,
    ResponseContextType,
    ObservableRequestContextType,
    ObservableResponseContextType
  >(
    config: IConfiguration,
    observableRequestContextParam: new (promise: Promise<RequestContextType>) => ObservableRequestContextType,
    observableResponseContextParam: new (promise: Promise<ResponseContextType>) => ObservableResponseContextType,
  ) {
    const headers = { ...config.defaultHeaders, 'User-agent': this.getUserAgent() }

    return {
      pre(context: RequestContextType): ObservableRequestContextType {
        forIn(headers, (value, key) => {
          context.setHeaderParam(key, value)
        })
        return new observableRequestContextParam(Promise.resolve(context))
      },
      post(context: ResponseContextType): ObservableResponseContextType {
        return new observableResponseContextParam(Promise.resolve(context))
      },
    }
  }
}
