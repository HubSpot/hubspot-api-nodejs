import { createConfiguration } from '../../../../codegen/cms/performance/configuration'
import { PublicPerformanceApi } from '../../../../codegen/cms/performance/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class PerformanceDiscovery extends BaseDiscovery {
  public publicPerformanceApi: PublicPerformanceApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.publicPerformanceApi = new PublicPerformanceApi(configuration)
  }
}
