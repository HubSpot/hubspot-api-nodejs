import { createConfiguration } from '../../../../codegen/cms/url_redirects/configuration'
import { RedirectsApi, RequestContext, ResponseContext } from '../../../../codegen/cms/url_redirects/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class UrlRedirectsDiscovery {
  public redirectsApi: RedirectsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.redirectsApi = new RedirectsApi(configuration)
  }
}
