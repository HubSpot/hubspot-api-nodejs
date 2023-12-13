import {
  BehavioralEventsTrackingApi,
  createConfiguration,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/events/send/index'
import { Observable } from '../../../../codegen/events/send/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class EventsDiscovery {
  public behavioralEventsTrackingApi: BehavioralEventsTrackingApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.behavioralEventsTrackingApi = ApiDecoratorService.getInstance().apply<BehavioralEventsTrackingApi>(
      new BehavioralEventsTrackingApi(configuration),
    )
  }
}
