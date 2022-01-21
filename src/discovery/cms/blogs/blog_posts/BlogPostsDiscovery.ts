import { createConfiguration } from '../../../../../codegen/cms/blogs/blog_posts/configuration'
import { BlogPostsApi, RequestContext, ResponseContext } from '../../../../../codegen/cms/blogs/blog_posts/index'
import { IConfiguration } from '../../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class BlogPostsDiscovery extends BaseDiscovery {
  public blogPostsApi: BlogPostsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.blogPostsApi = new BlogPostsApi(configuration)
  }
}
