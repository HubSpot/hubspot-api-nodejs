import { createConfiguration } from '../../../codegen/events/configuration'
import { EventsApi, RequestContext, ResponseContext } from '../../../codegen/events/index'
import { Observable } from '../../../codegen/events/rxjsStub'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../configuration/IConfiguration'

export class EventsDiscovery {
  public eventsApi: EventsApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.eventsApi = new EventsApi(configuration)
  }
}
