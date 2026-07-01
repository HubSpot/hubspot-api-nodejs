import {
  BasicApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../codegen/crm/timeline/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/crm/timeline/rxjsStub'

export default class TimelineDiscovery {
  public eventsApi: BasicApi
  public templatesApi: BasicApi
  public tokensApi: BasicApi

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
    this.eventsApi = api
    this.templatesApi = api
    this.tokensApi = api
  }
}
