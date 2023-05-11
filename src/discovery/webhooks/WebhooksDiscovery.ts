import {
  createConfiguration,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsApi,
  SubscriptionsApi,
} from '../../../codegen/webhooks/index'
import { Observable } from '../../../codegen/webhooks/rxjsStub'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import IConfiguration from '../../configuration/IConfiguration'
import ApiDecoratorService from '../../services/ApiDecoratorService'

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
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.settingsApi = ApiDecoratorService.getInstance().apply<SettingsApi>(new SettingsApi(configuration))
    this.subscriptionsApi = ApiDecoratorService.getInstance().apply<SubscriptionsApi>(
      new SubscriptionsApi(configuration),
    )
  }
}
