import {
  AttendanceSubscriberStateChangesApi,
  Configuration,
  createConfiguration,
  MarketingEventsExternalApi,
  RequestContext,
  ResponseContext,
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

    this.attendanceSubscriberStateChangesApi = ApiDecoratorService.getInstance().apply<
      AttendanceSubscriberStateChangesApi,
      Configuration
    >(new AttendanceSubscriberStateChangesApi(configuration), configuration)
    this.marketingEventsExternalApi = ApiDecoratorService.getInstance().apply<
      MarketingEventsExternalApi,
      Configuration
    >(new MarketingEventsExternalApi(configuration), configuration)
    this.settingsExternalApi = ApiDecoratorService.getInstance().apply<SettingsExternalApi, Configuration>(
      new SettingsExternalApi(configuration),
      configuration,
    )
  }
}
