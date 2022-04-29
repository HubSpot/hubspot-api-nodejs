import { createConfiguration } from '../../../codegen/communication_preferences/configuration'
import {
  DefinitionApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  StatusApi,
} from '../../../codegen/communication_preferences/index'
import { Observable } from '../../../codegen/communication_preferences/rxjsStub'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../configuration/IConfiguration'

export class CommunicationPreferencesDiscovery {
  public definitionApi: DefinitionApi
  public statusApi: StatusApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.definitionApi = new DefinitionApi(configuration)
    this.statusApi = new StatusApi(configuration)
  }
}
