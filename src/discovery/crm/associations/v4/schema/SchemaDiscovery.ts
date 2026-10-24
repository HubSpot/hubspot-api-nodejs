import {
  DefinitionConfigurationsApi,
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
  public definitionConfigurationsApi: DefinitionConfigurationsApi
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

    this.definitionConfigurationsApi = ApiDecoratorService.getInstance().apply<DefinitionConfigurationsApi>(
      new DefinitionConfigurationsApi(configuration),
    )
    this.definitionsApi = ApiDecoratorService.getInstance().apply<DefinitionsApi>(new DefinitionsApi(configuration))
  }
}
