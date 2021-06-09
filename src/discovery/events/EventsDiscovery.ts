import { Configuration } from '../../Configuration'
import { BaseDiscovery } from '../BaseDiscovery'
import { EventsApi } from '../../../codegen/events/index'
import { createConfiguration } from '../../../codegen/events/configuration'


export class EventsDiscovery extends BaseDiscovery {
    public eventsApi: EventsApi
    
    constructor(config: Configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.eventsApi = new EventsApi(configuration)
    }
}
