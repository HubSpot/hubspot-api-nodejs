import { createConfiguration } from '../../../../../codegen/cms/blogs/tags/configuration'
import { BlogTagsApi } from '../../../../../codegen/cms/blogs/tags/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class TagsDiscovery extends BaseDiscovery {
  public blogTagsApi: BlogTagsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.blogTagsApi = new BlogTagsApi(configuration)
  }
}
