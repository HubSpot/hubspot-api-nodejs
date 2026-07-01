import {
  BasicApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../codegen/webhooks/index'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../services/ApiDecoratorService'
import IConfiguration from '../../configuration/IConfiguration'
import { Observable } from '../../../codegen/webhooks/rxjsStub'

export default class WebhooksDiscovery {
  public settingsApi: BasicApi
  public subscriptionsApi: BasicApi

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

    const api = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.settingsApi = api
    this.subscriptionsApi = api
  }
}
