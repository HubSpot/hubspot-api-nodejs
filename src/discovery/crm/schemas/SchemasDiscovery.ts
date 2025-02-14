import {
  CoreApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../codegen/crm/schemas/index'
import { Observable } from '../../../../codegen/crm/schemas/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class SchemasDiscovery {
  public coreApi: CoreApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.coreApi = ApiDecoratorService.getInstance().apply<CoreApi>(new CoreApi(configuration))
  }
}
