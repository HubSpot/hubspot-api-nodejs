import { createConfiguration } from '../../../../../codegen/crm/extensions/calling/configuration'
import { RequestContext, ResponseContext, SettingsApi } from '../../../../../codegen/crm/extensions/calling/index'
import { ApiClientConfirator } from '../../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../../configuration/IConfiguration'

export class CallingDiscovery {
  public settingsApi: SettingsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.settingsApi = new SettingsApi(configuration)
  }
}
