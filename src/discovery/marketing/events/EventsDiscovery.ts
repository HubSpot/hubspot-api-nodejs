import { createConfiguration } from '../../../../codegen/marketing/events/configuration'
import {
  AttendanceSubscriberStateChangesApi,
  MarketingEventsExternalApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsExternalApi,
} from '../../../../codegen/marketing/events/index'
import { Observable } from '../../../../codegen/marketing/events/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'

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

    this.attendanceSubscriberStateChangesApi = new AttendanceSubscriberStateChangesApi(configuration)
    this.marketingEventsExternalApi = new MarketingEventsExternalApi(configuration)
    this.settingsExternalApi = new SettingsExternalApi(configuration)
  }
}
