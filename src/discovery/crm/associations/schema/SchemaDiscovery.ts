import {
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  TypesApi,
  createConfiguration,
} from '../../../../../codegen/crm/associations/schema/index'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'
import BaseDiscovery from '../../../BaseDiscovery'
import IConfiguration from '../../../../configuration/IConfiguration'
import { Observable } from '../../../../../codegen/crm/associations/schema/rxjsStub'

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
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.typesApi = ApiDecoratorService.getInstance().apply<TypesApi>(new TypesApi(configuration))
  }
}
