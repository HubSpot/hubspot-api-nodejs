import { createConfiguration } from '../../../../codegen/cms/performance/configuration'
import { PublicPerformanceApi, RequestContext, ResponseContext } from '../../../../codegen/cms/performance/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class PerformanceDiscovery {
  public publicPerformanceApi: PublicPerformanceApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.publicPerformanceApi = new PublicPerformanceApi(configuration)
  }
}
