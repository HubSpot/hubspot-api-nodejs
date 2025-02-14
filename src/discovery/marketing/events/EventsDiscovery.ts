import {
  AttendanceSubscriberStateChangesApi,
  BasicApi,
  ParticipantStateApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsApi,
  SubscriberStateChangesApi,
  createConfiguration,
} from '../../../../codegen/marketing/events/index'
import { Observable } from '../../../../codegen/marketing/events/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class EventsDiscovery {
  public attendanceSubscriberStateChangesApi: AttendanceSubscriberStateChangesApi
  public basicApi: BasicApi
  public participantStateApi: ParticipantStateApi
  public settingsApi: SettingsApi
  public subscriberStateChangesApi: SubscriberStateChangesApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.attendanceSubscriberStateChangesApi =
      ApiDecoratorService.getInstance().apply<AttendanceSubscriberStateChangesApi>(
        new AttendanceSubscriberStateChangesApi(configuration),
      )
    this.basicApi = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.participantStateApi = ApiDecoratorService.getInstance().apply<ParticipantStateApi>(
      new ParticipantStateApi(configuration),
    )
    this.settingsApi = ApiDecoratorService.getInstance().apply<SettingsApi>(new SettingsApi(configuration))
    this.subscriberStateChangesApi = ApiDecoratorService.getInstance().apply<SubscriberStateChangesApi>(
      new SubscriberStateChangesApi(configuration),
    )
  }
}
