import {
  DefinitionsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../../../codegen/crm/associations/v4/schema/index'
import { ApiClientConfigurator } from '../../../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../../../services/ApiDecoratorService'
import IConfiguration from '../../../../../configuration/IConfiguration'
import { Observable } from '../../../../../../codegen/crm/associations/v4/schema/rxjsStub'

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
