import { createConfiguration } from '../../../codegen/events/configuration'
import { EventsApi, RequestContext, ResponseContext } from '../../../codegen/events/index'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../configuration/IConfiguration'

export class EventsDiscovery {
  public eventsApi: EventsApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.eventsApi = new EventsApi(configuration)
  }
}
