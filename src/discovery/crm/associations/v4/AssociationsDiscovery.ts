import {
  BatchApi,
  createConfiguration,
  DefinitionsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../../codegen/crm/associations/v4/index'
import { Observable } from '../../../../../codegen/crm/associations/v4/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'

export default class AssociationsDiscovery {
  public batchApi: BatchApi
  public definitionsApi: DefinitionsApi

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

    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi>(new BatchApi(configuration))
    this.definitionsApi = ApiDecoratorService.getInstance().apply<DefinitionsApi>(new DefinitionsApi(configuration))
  }
}
