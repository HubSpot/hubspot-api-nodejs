import { createConfiguration } from '../../../../codegen/cms/site_search/configuration'
import { DefaultApi } from '../../../../codegen/cms/site_search/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class SiteSearchDiscovery extends BaseDiscovery {
  public defaultApi: DefaultApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.defaultApi = new DefaultApi(configuration)
  }
}
