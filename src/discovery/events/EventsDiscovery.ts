import { configuration } from '../../configuration'
import { BaseDiscovery } from '../BaseDiscovery'
import { EventsApi } from '../../../codegen/events/index'
import { createConfiguration } from '../../../codegen/events/configuration'


export class EventsDiscovery extends BaseDiscovery {
    public eventsApi: EventsApi
    
    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.eventsApi = new EventsApi(configuration)
    }
}
