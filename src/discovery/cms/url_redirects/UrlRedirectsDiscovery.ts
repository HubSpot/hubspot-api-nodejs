import { createConfiguration } from '../../../../codegen/cms/url_redirects/configuration'
import { RedirectsApi, RequestContext, ResponseContext } from '../../../../codegen/cms/url_redirects/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class UrlRedirectsDiscovery {
  public redirectsApi: RedirectsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.redirectsApi = new RedirectsApi(configuration)
  }
}
