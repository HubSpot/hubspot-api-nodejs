import { createConfiguration } from '../../../../codegen/cms/performance/configuration'
import {
  PublicPerformanceApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/cms/performance/index'
import { Observable } from '../../../../codegen/cms/performance/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'

export default class PerformanceDiscovery {
  public publicPerformanceApi: PublicPerformanceApi

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

    this.publicPerformanceApi = new PublicPerformanceApi(configuration)
  }
}
