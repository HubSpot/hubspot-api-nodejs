import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { EventsApi, TemplatesApi, TokensApi } from '../../../../codegen/crm/timeline/index'
import { createConfiguration } from '../../../../codegen/crm/timeline/configuration'

export class TimelineDiscovery extends baseDiscovery {
    public eventsApi: EventsApi
    public templatesApi: TemplatesApi
    public tokensApi: TokensApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.eventsApi = new EventsApi(configuration)
        this.templatesApi = new TemplatesApi(configuration)
        this.tokensApi = new TokensApi(configuration)
    }
}
