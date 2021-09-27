import { createConfiguration } from '../../../../../codegen/cms/blogs/blog_posts/configuration'
import { BlogPostApi } from '../../../../../codegen/cms/blogs/blog_posts/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class BlogPostsDiscovery extends BaseDiscovery {
  public blogPostApi: BlogPostApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.blogPostApi = new BlogPostApi(configuration)
  }
}
