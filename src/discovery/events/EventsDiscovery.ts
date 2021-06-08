import { configuration } from '../../configuration'
import { baseDiscovery } from '../baseDiscovery'
import { EventsApi } from '../../../codegen/events/index'
import { createConfiguration } from '../../../codegen/events/configuration'


export class EventsDiscovery extends baseDiscovery {
    public eventsApi: EventsApi
    
    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.eventsApi = new EventsApi(configuration)
    }
}
