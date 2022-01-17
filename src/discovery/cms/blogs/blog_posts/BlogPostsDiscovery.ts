import { createConfiguration } from '../../../../../codegen/cms/blogs/blog_posts/configuration'
import { BlogPostsApi } from '../../../../../codegen/cms/blogs/blog_posts/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class BlogPostsDiscovery extends BaseDiscovery {
  public blogPostsApi: BlogPostsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.blogPostsApi = new BlogPostsApi(configuration)
  }
}
