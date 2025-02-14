import {
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsApi,
  SubscriptionsApi,
  createConfiguration,
} from '../../../codegen/webhooks/index'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../services/ApiDecoratorService'
import IConfiguration from '../../configuration/IConfiguration'
import { Observable } from '../../../codegen/webhooks/rxjsStub'

export default class WebhooksDiscovery {
  public settingsApi: SettingsApi
  public subscriptionsApi: SubscriptionsApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.settingsApi = ApiDecoratorService.getInstance().apply<SettingsApi>(new SettingsApi(configuration))
    this.subscriptionsApi = ApiDecoratorService.getInstance().apply<SubscriptionsApi>(
      new SubscriptionsApi(configuration),
    )
  }
}
