import { createConfiguration } from '../../../../codegen/crm/timeline/configuration'
import {
  EventsApi,
  RequestContext,
  ResponseContext,
  TemplatesApi,
  TokensApi,
} from '../../../../codegen/crm/timeline/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class TimelineDiscovery {
  public eventsApi: EventsApi
  public templatesApi: TemplatesApi
  public tokensApi: TokensApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.eventsApi = new EventsApi(configuration)
    this.templatesApi = new TemplatesApi(configuration)
    this.tokensApi = new TokensApi(configuration)
  }
}
