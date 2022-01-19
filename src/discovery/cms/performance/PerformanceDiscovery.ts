import { createConfiguration } from '../../../../codegen/cms/performance/configuration'
import { PublicPerformanceApi, RequestContext, ResponseContext } from '../../../../codegen/cms/performance/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class PerformanceDiscovery extends BaseDiscovery {
  public publicPerformanceApi: PublicPerformanceApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.publicPerformanceApi = new PublicPerformanceApi(configuration)
  }
}
