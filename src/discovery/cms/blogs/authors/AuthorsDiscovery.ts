import {
  BlogAuthorsApi,
  createConfiguration,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../../codegen/cms/blogs/authors/index'
import { Observable } from '../../../../../codegen/cms/blogs/authors/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'

export default class AuthorsDiscovery {
  public blogAuthorsApi: BlogAuthorsApi

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

    this.blogAuthorsApi = ApiDecoratorService.getInstance().apply<BlogAuthorsApi>(new BlogAuthorsApi(configuration))
  }
}
