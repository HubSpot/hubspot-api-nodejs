import {
  LandingPagesApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SitePagesApi,
  createConfiguration,
} from '../../../../codegen/cms/pages/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/cms/pages/rxjsStub'

export default class PagesDiscovery {
  public landingPagesApi: LandingPagesApi
  public sitePagesApi: SitePagesApi

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

    this.landingPagesApi = ApiDecoratorService.getInstance().apply<LandingPagesApi>(new LandingPagesApi(configuration))
    this.sitePagesApi = ApiDecoratorService.getInstance().apply<SitePagesApi>(new SitePagesApi(configuration))
  }
}
