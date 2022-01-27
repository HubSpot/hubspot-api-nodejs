import { createConfiguration } from '../../../../../codegen/cms/blogs/tags/configuration'
import { BlogTagsApi, RequestContext, ResponseContext } from '../../../../../codegen/cms/blogs/tags/index'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../../configuration/IConfiguration'

export class TagsDiscovery {
  public blogTagsApi: BlogTagsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.blogTagsApi = new BlogTagsApi(configuration)
  }
}
