import {
  EventsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  TemplatesApi,
  TokensApi,
  createConfiguration,
} from '../../../../codegen/crm/timeline/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/crm/timeline/rxjsStub'

export default class TimelineDiscovery {
  public eventsApi: EventsApi
  public templatesApi: TemplatesApi
  public tokensApi: TokensApi

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

    this.eventsApi = ApiDecoratorService.getInstance().apply<EventsApi>(new EventsApi(configuration))
    this.templatesApi = ApiDecoratorService.getInstance().apply<TemplatesApi>(new TemplatesApi(configuration))
    this.tokensApi = ApiDecoratorService.getInstance().apply<TokensApi>(new TokensApi(configuration))
  }
}
