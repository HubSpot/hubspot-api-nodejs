import { createConfiguration } from '../../../../../codegen/cms/blogs/tags/configuration'
import { BlogTagsApi, RequestContext, ResponseContext } from '../../../../../codegen/cms/blogs/tags/index'
import { IConfiguration } from '../../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class TagsDiscovery extends BaseDiscovery {
  public blogTagsApi: BlogTagsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.blogTagsApi = new BlogTagsApi(configuration)
  }
}
