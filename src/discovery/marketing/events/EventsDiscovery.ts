import {
  AddEventAttendeesApi,
  BasicApi,
  BatchApi,
  ChangePropertyApi,
  IdentifiersApi,
  ListAssociationsApi,
  RetrieveParticipantStateApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsApi,
  SubscriberStateChangesApi,
  createConfiguration,
} from '../../../../codegen/marketing/events/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/marketing/events/rxjsStub'

export default class EventsDiscovery {
  public addEventAttendeesApi: AddEventAttendeesApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public changePropertyApi: ChangePropertyApi
  public identifiersApi: IdentifiersApi
  public listAssociationsApi: ListAssociationsApi
  public retrieveParticipantStateApi: RetrieveParticipantStateApi
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

    this.addEventAttendeesApi = ApiDecoratorService.getInstance().apply<AddEventAttendeesApi>(
      new AddEventAttendeesApi(configuration),
    )
    this.basicApi = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi>(new BatchApi(configuration))
    this.changePropertyApi = ApiDecoratorService.getInstance().apply<ChangePropertyApi>(
      new ChangePropertyApi(configuration),
    )
    this.identifiersApi = ApiDecoratorService.getInstance().apply<IdentifiersApi>(new IdentifiersApi(configuration))
    this.listAssociationsApi = ApiDecoratorService.getInstance().apply<ListAssociationsApi>(
      new ListAssociationsApi(configuration),
    )
    this.retrieveParticipantStateApi = ApiDecoratorService.getInstance().apply<RetrieveParticipantStateApi>(
      new RetrieveParticipantStateApi(configuration),
    )
    this.settingsApi = ApiDecoratorService.getInstance().apply<SettingsApi>(new SettingsApi(configuration))
    this.subscriberStateChangesApi = ApiDecoratorService.getInstance().apply<SubscriberStateChangesApi>(
      new SubscriberStateChangesApi(configuration),
    )
  }
}
