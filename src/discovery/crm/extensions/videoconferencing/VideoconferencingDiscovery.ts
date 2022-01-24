import { createConfiguration } from '../../../../../codegen/crm/extensions/videoconferencing/configuration'
import {
  RequestContext,
  ResponseContext,
  SettingsApi,
} from '../../../../../codegen/crm/extensions/videoconferencing/index'
import { ApiClientConfirator } from '../../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../../configuration/IConfiguration'

export class VideoconferencingDiscovery {
  public settingsApi: SettingsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.settingsApi = new SettingsApi(configuration)
  }
}
