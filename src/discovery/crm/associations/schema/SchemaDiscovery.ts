import {
  createConfiguration,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  TypesApi,
} from '../../../../../codegen/crm/associations/schema/index'
import { Observable } from '../../../../../codegen/crm/associations/schema/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'
import BaseDiscovery from '../../../BaseDiscovery'

export default class SchemaDiscovery extends BaseDiscovery {
  public typesApi: TypesApi

  constructor(config: IConfiguration) {
    super(config)
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.typesApi = ApiDecoratorService.getInstance().apply<TypesApi>(new TypesApi(configuration))
  }
}
