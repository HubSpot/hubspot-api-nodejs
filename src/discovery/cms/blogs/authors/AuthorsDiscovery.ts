import { createConfiguration } from '../../../../../codegen/cms/blogs/authors/configuration'
import { AuthorApi } from '../../../../../codegen/cms/blogs/authors/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class AuthorsDiscovery extends BaseDiscovery {
  public authorApi: AuthorApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.authorApi = new AuthorApi(configuration)
  }
}
