import { createConfiguration } from '../../../../../codegen/cms/blogs/blog_posts/configuration'
import { BlogPostsApi, RequestContext, ResponseContext } from '../../../../../codegen/cms/blogs/blog_posts/index'
import { Observable } from '../../../../../codegen/cms/blogs/blog_posts/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../../configuration/IConfiguration'

export class BlogPostsDiscovery {
  public blogPostsApi: BlogPostsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.blogPostsApi = new BlogPostsApi(configuration)
  }
}
