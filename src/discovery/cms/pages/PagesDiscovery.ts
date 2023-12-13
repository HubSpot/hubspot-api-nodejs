import {
  createConfiguration,
  LandingPagesApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SitePagesApi,
} from '../../../../codegen/cms/pages/index'
import { Observable } from '../../../../codegen/cms/pages/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

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
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.landingPagesApi = ApiDecoratorService.getInstance().apply<LandingPagesApi>(new LandingPagesApi(configuration))
    this.sitePagesApi = ApiDecoratorService.getInstance().apply<SitePagesApi>(new SitePagesApi(configuration))
  }
}
