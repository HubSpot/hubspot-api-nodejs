import {
  createConfiguration,
  PublicApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/cms/site_search/index'
import { Observable } from '../../../../codegen/cms/site_search/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class SiteSearchDiscovery {
  public publicApi: PublicApi

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

    this.publicApi = ApiDecoratorService.getInstance().apply<PublicApi>(new PublicApi(configuration))
  }
}
