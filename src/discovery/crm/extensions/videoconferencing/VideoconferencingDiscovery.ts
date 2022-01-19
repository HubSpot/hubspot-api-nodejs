import { createConfiguration } from '../../../../../codegen/crm/extensions/videoconferencing/configuration'
import {
  RequestContext,
  ResponseContext,
  SettingsApi,
} from '../../../../../codegen/crm/extensions/videoconferencing/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class VideoconferencingDiscovery extends BaseDiscovery {
  public settingsApi: SettingsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.settingsApi = new SettingsApi(configuration)
  }
}
