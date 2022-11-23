import { createConfiguration } from '../../../../codegen/cms/site_search/configuration'
import {
  PublicApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/cms/site_search/index'
import { Observable } from '../../../../codegen/cms/site_search/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'

export default class SiteSearchDiscovery {
  public publicApi: PublicApi

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

    this.publicApi = new PublicApi(configuration)
  }
}
