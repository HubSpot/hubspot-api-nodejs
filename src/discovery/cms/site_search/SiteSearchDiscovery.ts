import { createConfiguration } from '../../../../codegen/cms/site_search/configuration'
import { PublicApi } from '../../../../codegen/cms/site_search/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class SiteSearchDiscovery extends BaseDiscovery {
  public publicApi: PublicApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.publicApi = new PublicApi(configuration)
  }
}
