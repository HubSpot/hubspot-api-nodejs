import { createConfiguration } from '../../../codegen/events/configuration'
import { EventsApi, RequestContext, ResponseContext } from '../../../codegen/events/index'
import { ApiClientConfirator } from '../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../configuration/IConfiguration'

export class EventsDiscovery {
  public eventsApi: EventsApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.eventsApi = new EventsApi(configuration)
  }
}
