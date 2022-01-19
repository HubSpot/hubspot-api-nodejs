import { createConfiguration } from '../../../../codegen/cms/url_redirects/configuration'
import { RedirectsApi, RequestContext, ResponseContext } from '../../../../codegen/cms/url_redirects/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class UrlRedirectsDiscovery extends BaseDiscovery {
  public redirectsApi: RedirectsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.redirectsApi = new RedirectsApi(configuration)
  }
}
