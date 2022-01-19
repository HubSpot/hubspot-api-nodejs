import { createConfiguration } from '../../../../../codegen/cms/blogs/authors/configuration'
import { BlogAuthorsApi, RequestContext, ResponseContext } from '../../../../../codegen/cms/blogs/authors/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class AuthorsDiscovery extends BaseDiscovery {
  public blogAuthorsApi: BlogAuthorsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.blogAuthorsApi = new BlogAuthorsApi(configuration)
  }
}
