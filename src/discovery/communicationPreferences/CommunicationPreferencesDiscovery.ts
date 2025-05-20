import {
  DefinitionApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  StatusApi,
  createConfiguration,
} from '../../../codegen/communication_preferences/index'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../services/ApiDecoratorService'
import IConfiguration from '../../configuration/IConfiguration'
import { Observable } from '../../../codegen/communication_preferences/rxjsStub'

export default class CommunicationPreferencesDiscovery {
  public definitionApi: DefinitionApi
  public statusApi: StatusApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.definitionApi = ApiDecoratorService.getInstance().apply<DefinitionApi>(new DefinitionApi(configuration))
    this.statusApi = ApiDecoratorService.getInstance().apply<StatusApi>(new StatusApi(configuration))
  }
}
