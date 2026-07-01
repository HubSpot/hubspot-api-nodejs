import {
  BasicApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../../codegen/cms/blogs/authors/index'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'
import IConfiguration from '../../../../configuration/IConfiguration'
import { Observable } from '../../../../../codegen/cms/blogs/authors/rxjsStub'

export default class AuthorsDiscovery {
  public blogAuthorsApi: BasicApi

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
    this.blogAuthorsApi = api
  }
}
