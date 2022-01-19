import { createConfiguration } from '../../../codegen/events/configuration'
import { EventsApi, RequestContext, ResponseContext } from '../../../codegen/events/index'
import { IConfiguration } from '../../IConfiguration'
import { BaseDiscovery } from '../BaseDiscovery'

export class EventsDiscovery extends BaseDiscovery {
  public eventsApi: EventsApi

  constructor(config: IConfiguration = {}) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.eventsApi = new EventsApi(configuration)
  }
}
