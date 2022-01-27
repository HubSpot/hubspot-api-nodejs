import { createConfiguration } from '../../../../codegen/cms/site_search/configuration'
import { PublicApi, RequestContext, ResponseContext } from '../../../../codegen/cms/site_search/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class SiteSearchDiscovery {
  public publicApi: PublicApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.publicApi = new PublicApi(configuration)
  }
}
