import {
  Configuration,
  createConfiguration,
  DomainsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/cms/domains/index'
import { Observable } from '../../../../codegen/cms/domains/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class DomainsDiscovery {
  public domainsApi: DomainsApi

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

    this.domainsApi = ApiDecoratorService.getInstance().apply<DomainsApi, Configuration>(
      new DomainsApi(configuration),
      configuration,
    )
  }
}
