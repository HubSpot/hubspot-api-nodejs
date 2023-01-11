import {
  BatchApi,
  Configuration,
  createConfiguration,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  TypesApi,
} from '../../../../codegen/crm/associations/index'
import { Observable } from '../../../../codegen/crm/associations/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class AssociationsDiscovery {
  public batchApi: BatchApi
  public typesApi: TypesApi

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

    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi, Configuration>(
      new BatchApi(configuration),
      configuration,
    )
    this.typesApi = ApiDecoratorService.getInstance().apply<TypesApi, Configuration>(
      new TypesApi(configuration),
      configuration,
    )
  }
}
