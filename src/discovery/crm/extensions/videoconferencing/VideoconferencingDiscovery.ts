import { configuration } from '../../../../configuration'
import { baseDiscovery } from '../../../baseDiscovery'
import { SettingsApi } from '../../../../../codegen/crm/extensions/videoconferencing/index'
import { createConfiguration } from '../../../../../codegen/crm/extensions/videoconferencing/configuration'

export class VideoconferencingDiscovery extends baseDiscovery {
    public settingsApi: SettingsApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.settingsApi = new SettingsApi(configuration)
    }
}