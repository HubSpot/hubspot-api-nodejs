import {
  BasicApi,
  BatchApi,
  MultiLanguageApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../../codegen/cms/blogs/blog_posts/index'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'
import IConfiguration from '../../../../configuration/IConfiguration'
import { Observable } from '../../../../../codegen/cms/blogs/blog_posts/rxjsStub'

export default class BlogPostsDiscovery {
  public basicApi: BasicApi
  public batchApi: BatchApi
  public multiLanguageApi: MultiLanguageApi

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

    this.basicApi = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi>(new BatchApi(configuration))
    this.multiLanguageApi = ApiDecoratorService.getInstance().apply<MultiLanguageApi>(
      new MultiLanguageApi(configuration),
    )
  }
}
