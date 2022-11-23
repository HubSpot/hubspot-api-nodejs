import { createConfiguration } from '../../../../codegen/cms/url_redirects/configuration'
import {
  RedirectsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/cms/url_redirects/index'
import { Observable } from '../../../../codegen/cms/url_redirects/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'

export default class UrlRedirectsDiscovery {
  public redirectsApi: RedirectsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.redirectsApi = new RedirectsApi(configuration)
  }
}
