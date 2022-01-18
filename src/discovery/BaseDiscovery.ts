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
   * create Configuration
   */
  public createConfiguration(createFunction: any) {
    const configuration = createFunction(this.getParams())

    return configuration
  }

  /**
   * getParams
   */
  public getParams() {
    let params = {}
    if (this.config.accessToken) {
      params = {
        authMethods: {
          oauth2: {
            accessToken: this.config.accessToken,
          },
        },
      }
    } else if (this.config.apiKey) {
      params = {
        authMethods: {
          hapikey: this.config.apiKey,
        },
      }
    } else if (this.config.developerApiKey) {
      params = {
        authMethods: {
          hapikey: this.config.developerApiKey,
        },
      }
    }

    return params
  }


  /**
   * newgetParams
   */
   public newgetParams<RequestContextType extends IRequestContext, ResponseContextType>() {
    let midllewares = [{
      pre(context: RequestContextType): Observable<RequestContextType> {
        context.setHeaderParam("User-agent", `hubspot-api-client-nodejs; ${VERSION}`);
        return new Observable<RequestContextType>(Promise.resolve(context));
      },
      post(context: ResponseContextType): Observable<ResponseContextType> {
        return new Observable<ResponseContextType>(Promise.resolve(context));
      }
    }];
    let params = {}
    if (this.config.accessToken) {
      params = {
        authMethods: {
          oauth2: {
            accessToken: this.config.accessToken,
          },
          middleware: midllewares,
        },
      }
    } else if (this.config.apiKey) {
      params = {
        authMethods: {
          hapikey: this.config.apiKey,
        },
        middleware: midllewares,
      }
    } else if (this.config.developerApiKey) {
      params = {
        authMethods: {
          hapikey: this.config.developerApiKey,
        },
        middleware: midllewares,
      }
    }

    return params
  }
}

