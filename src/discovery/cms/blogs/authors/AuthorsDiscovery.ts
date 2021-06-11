import { createConfiguration } from '../../../../../codegen/cms/blogs/authors/configuration'
import { DefaultApi } from '../../../../../codegen/cms/blogs/authors/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class AuthorsDiscovery extends BaseDiscovery {
  public defaultApi: DefaultApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.defaultApi = new DefaultApi(configuration)
  }
}
