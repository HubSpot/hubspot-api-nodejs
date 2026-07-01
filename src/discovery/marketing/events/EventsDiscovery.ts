import {
  BasicApi,
  BatchApi,
  IdentifiersApi,
  ListAssociationsApi,
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
  public addEventAttendeesApi: BasicApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public changePropertyApi: BasicApi
  public identifiersApi: IdentifiersApi
  public listAssociationsApi: ListAssociationsApi
  public retrieveParticipantStateApi: BasicApi
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

    const api = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.addEventAttendeesApi = api
    this.basicApi = api
    this.changePropertyApi = api
    this.retrieveParticipantStateApi = api
    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi>(new BatchApi(configuration))
    this.identifiersApi = ApiDecoratorService.getInstance().apply<IdentifiersApi>(new IdentifiersApi(configuration))
    this.listAssociationsApi = ApiDecoratorService.getInstance().apply<ListAssociationsApi>(
      new ListAssociationsApi(configuration),
    )
    this.settingsApi = ApiDecoratorService.getInstance().apply<SettingsApi>(new SettingsApi(configuration))
    this.subscriberStateChangesApi = ApiDecoratorService.getInstance().apply<SubscriberStateChangesApi>(
      new SubscriberStateChangesApi(configuration),
    )
  }
}
