import { createConfiguration } from '../../../../../codegen/crm/extensions/videoconferencing/configuration'
import {
  RequestContext,
  ResponseContext,
  SettingsApi,
} from '../../../../../codegen/crm/extensions/videoconferencing/index'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../../configuration/IConfiguration'

export class VideoconferencingDiscovery {
  public settingsApi: SettingsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.settingsApi = new SettingsApi(configuration)
  }
}
