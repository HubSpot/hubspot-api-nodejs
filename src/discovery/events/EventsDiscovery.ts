import {
  Configuration,
  createConfiguration,
  EventsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../codegen/events/index'
import { Observable } from '../../../codegen/events/rxjsStub'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import IConfiguration from '../../configuration/IConfiguration'
import ApiDecoratorService from '../../services/ApiDecoratorService'

export default class EventsDiscovery {
  public eventsApi: EventsApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.eventsApi = ApiDecoratorService.getInstance().apply<EventsApi, Configuration>(
      new EventsApi(configuration),
      configuration,
    )
  }
}
