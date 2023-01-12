import {
  Configuration,
  createConfiguration,
  PublicPerformanceApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/cms/performance/index'
import { Observable } from '../../../../codegen/cms/performance/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

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

    this.publicPerformanceApi = ApiDecoratorService.getInstance().apply<PublicPerformanceApi, Configuration>(
      new PublicPerformanceApi(configuration),
      configuration,
    )
  }
}
