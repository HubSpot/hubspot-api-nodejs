import {
  createConfiguration,
  DefinitionsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../../../codegen/crm/associations/v4/schema/index'
import { Observable } from '../../../../../../codegen/crm/associations/v4/schema/rxjsStub'
import { ApiClientConfigurator } from '../../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../../../services/ApiDecoratorService'

export default class SchemaDiscovery {
  public definitionsApi: DefinitionsApi

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

    this.definitionsApi = ApiDecoratorService.getInstance().apply<DefinitionsApi>(new DefinitionsApi(configuration))
  }
}
