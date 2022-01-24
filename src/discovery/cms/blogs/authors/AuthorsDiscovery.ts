import { createConfiguration } from '../../../../../codegen/cms/blogs/authors/configuration'
import { BlogAuthorsApi, RequestContext, ResponseContext } from '../../../../../codegen/cms/blogs/authors/index'
import { ApiClientConfirator } from '../../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../../configuration/IConfiguration'

export class AuthorsDiscovery {
  public blogAuthorsApi: BlogAuthorsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.blogAuthorsApi = new BlogAuthorsApi(configuration)
  }
}
