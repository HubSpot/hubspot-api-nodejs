import { createConfiguration } from '../../../../../codegen/cms/blogs/tags/configuration'
import {
  BlogTagsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../../codegen/cms/blogs/tags/index'
import { Observable } from '../../../../../codegen/cms/blogs/tags/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'

export default class TagsDiscovery {
  public blogTagsApi: BlogTagsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.blogTagsApi = new BlogTagsApi(configuration)
  }
}
