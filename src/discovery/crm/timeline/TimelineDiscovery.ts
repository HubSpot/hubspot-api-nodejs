import { Configuration } from '../../../Configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { EventsApi, TemplatesApi, TokensApi } from '../../../../codegen/crm/timeline/index'
import { createConfiguration } from '../../../../codegen/crm/timeline/configuration'

export class TimelineDiscovery extends BaseDiscovery {
    public eventsApi: EventsApi
    public templatesApi: TemplatesApi
    public tokensApi: TokensApi

    constructor(config: Configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.eventsApi = new EventsApi(configuration)
        this.templatesApi = new TemplatesApi(configuration)
        this.tokensApi = new TokensApi(configuration)
    }
}
