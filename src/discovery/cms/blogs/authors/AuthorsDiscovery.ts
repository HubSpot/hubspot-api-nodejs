import { createConfiguration } from '../../../../../codegen/cms/blogs/authors/configuration'
import { BlogAuthorsApi } from '../../../../../codegen/cms/blogs/authors/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class AuthorsDiscovery extends BaseDiscovery {
  public blogAuthorsApi: BlogAuthorsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.blogAuthorsApi = new BlogAuthorsApi(configuration)
  }
}
