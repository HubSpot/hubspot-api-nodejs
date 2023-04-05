import {
  AttendanceSubscriberStateChangesApi,
  createConfiguration,
  MarketingEventsExternalApi,
  RequestContext,
  ResponseContext,
  SearchApi,
  ServerConfiguration,
  SettingsExternalApi,
} from '../../../../codegen/marketing/events/index'
import { Observable } from '../../../../codegen/marketing/events/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class EventsDiscovery {
  public attendanceSubscriberStateChangesApi: AttendanceSubscriberStateChangesApi
  public marketingEventsExternalApi: MarketingEventsExternalApi
  public searchApi: SearchApi
  public settingsExternalApi: SettingsExternalApi

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
    this.marketingEventsExternalApi = ApiDecoratorService.getInstance().apply<MarketingEventsExternalApi>(
      new MarketingEventsExternalApi(configuration),
    )
    this.searchApi = ApiDecoratorService.getInstance().apply<SearchApi>(new SearchApi(configuration))
    this.settingsExternalApi = ApiDecoratorService.getInstance().apply<SettingsExternalApi>(
      new SettingsExternalApi(configuration),
    )
  }
}
