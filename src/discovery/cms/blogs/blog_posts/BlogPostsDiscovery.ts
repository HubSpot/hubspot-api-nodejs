import { createConfiguration } from '../../../../../codegen/cms/blogs/blog_posts/configuration'
import { BlogPostsApi, RequestContext, ResponseContext } from '../../../../../codegen/cms/blogs/blog_posts/index'
import { ApiClientConfirator } from '../../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../../configuration/IConfiguration'

export class BlogPostsDiscovery {
  public blogPostsApi: BlogPostsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.blogPostsApi = new BlogPostsApi(configuration)
  }
}
