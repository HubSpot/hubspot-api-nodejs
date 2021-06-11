import { createConfiguration } from '../../../../codegen/marketing/transactional/configuration'
import { DefaultApi } from '../../../../codegen/marketing/transactional/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class TransactionalDiscovery extends BaseDiscovery {
  public defaultApi: DefaultApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.defaultApi = new DefaultApi(configuration)
  }
}
