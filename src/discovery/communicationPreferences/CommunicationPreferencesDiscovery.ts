import { createConfiguration } from '../../../codegen/communication_preferences/configuration'
import {
  DefinitionApi,
  RequestContext,
  ResponseContext,
  StatusApi,
} from '../../../codegen/communication_preferences/index'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../configuration/IConfiguration'

export class CommunicationPreferencesDiscovery {
  public definitionApi: DefinitionApi
  public statusApi: StatusApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.definitionApi = new DefinitionApi(configuration)
    this.statusApi = new StatusApi(configuration)
  }
}
