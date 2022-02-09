import { createConfiguration } from '../../../../codegen/cms/performance/configuration'
import { PublicPerformanceApi, RequestContext, ResponseContext } from '../../../../codegen/cms/performance/index'
import { Observable } from '../../../../codegen/cms/performance/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class PerformanceDiscovery {
  public publicPerformanceApi: PublicPerformanceApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.publicPerformanceApi = new PublicPerformanceApi(configuration)
  }
}
