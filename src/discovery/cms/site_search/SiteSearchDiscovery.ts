import { createConfiguration } from '../../../../codegen/cms/site_search/configuration'
import { PublicApi, RequestContext, ResponseContext } from '../../../../codegen/cms/site_search/index'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class SiteSearchDiscovery extends BaseDiscovery {
  public publicApi: PublicApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.publicApi = new PublicApi(configuration)
  }
}
