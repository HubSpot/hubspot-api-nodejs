import { createConfiguration } from '../../../codegen/events/configuration'
import { EventsApi } from '../../../codegen/events/index'
import { IConfiguration } from '../../IConfiguration'
import { BaseDiscovery } from '../BaseDiscovery'

export class EventsDiscovery extends BaseDiscovery {
  public eventsApi: EventsApi

  constructor(config: IConfiguration = {}) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.eventsApi = new EventsApi(configuration)
  }
}
