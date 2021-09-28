import { createConfiguration } from '../../../../../codegen/crm/extensions/calling/configuration'
import { SettingsApi } from '../../../../../codegen/crm/extensions/calling/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class CallingDiscovery extends BaseDiscovery {
  public settingsApi: SettingsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.settingsApi = new SettingsApi(configuration)
  }
}
