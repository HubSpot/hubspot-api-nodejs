import {
  AttendanceSubscriberStateChangesApi,
  BasicApi,
  BatchApi,
  createConfiguration,
  MarketingEventsExternalApi,
  RequestContext,
  ResponseContext,
  SearchApi,
  ServerConfiguration,
  SettingsApi,
  SubscriberStateChangesApi,
} from '../../../../codegen/marketing/events/index'
import { Observable } from '../../../../codegen/marketing/events/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class EventsDiscovery {
  public attendanceSubscriberStateChangesApi: AttendanceSubscriberStateChangesApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public marketingEventsExternalApi: MarketingEventsExternalApi
  public searchApi: SearchApi
  public settingsApi: SettingsApi
  public subscriberStateChangesApi: SubscriberStateChangesApi

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

    this.attendanceSubscriberStateChangesApi =
      ApiDecoratorService.getInstance().apply<AttendanceSubscriberStateChangesApi>(
        new AttendanceSubscriberStateChangesApi(configuration),
      )
    this.basicApi = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi>(new BatchApi(configuration))
    this.marketingEventsExternalApi = ApiDecoratorService.getInstance().apply<MarketingEventsExternalApi>(
      new MarketingEventsExternalApi(configuration),
    )
    this.searchApi = ApiDecoratorService.getInstance().apply<SearchApi>(new SearchApi(configuration))
    this.settingsApi = ApiDecoratorService.getInstance().apply<SettingsApi>(new SettingsApi(configuration))
    this.subscriberStateChangesApi = ApiDecoratorService.getInstance().apply<SubscriberStateChangesApi>(
      new SubscriberStateChangesApi(configuration),
    )
  }
}
