import {
  BlogPostsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../../codegen/cms/blogs/blog_posts/index'
import { Observable } from '../../../../../codegen/cms/blogs/blog_posts/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'

export default class BlogPostsDiscovery {
  public blogPostsApi: BlogPostsApi

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

    this.blogPostsApi = ApiDecoratorService.getInstance().apply<BlogPostsApi>(new BlogPostsApi(configuration))
  }
}
