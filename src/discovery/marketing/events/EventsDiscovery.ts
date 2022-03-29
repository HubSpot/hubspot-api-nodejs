import { createConfiguration } from '../../../../codegen/marketing/events/configuration'
import {
  BasicApi,
  BatchApi,
  RequestContext,
  ResponseContext,
  SearchApi,
  SettingsApi,
  SubscriberStateChangesApi,
} from '../../../../codegen/marketing/events/index'
import { Observable } from '../../../../codegen/marketing/events/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class EventsDiscovery {
  public basicApi: BasicApi
  public batchApi: BatchApi
  public searchApi: SearchApi
  public settingsApi: SettingsApi
  public subscriberStateChangesApi: SubscriberStateChangesApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.searchApi = new SearchApi(configuration)
    this.settingsApi = new SettingsApi(configuration)
    this.subscriberStateChangesApi = new SubscriberStateChangesApi(configuration)
  }
}
