import { createConfiguration } from '../../../../../codegen/cms/blogs/tags/configuration'
import { TagApi } from '../../../../../codegen/cms/blogs/tags/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class TagsDiscovery extends BaseDiscovery {
  public tagApi: TagApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.tagApi = new TagApi(configuration)
  }
}
