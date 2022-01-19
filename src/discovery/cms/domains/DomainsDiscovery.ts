import { createConfiguration } from '../../../../codegen/cms/domains/configuration'
import { DomainsApi, RequestContext, ResponseContext } from '../../../../codegen/cms/domains/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class DomainsDiscovery extends BaseDiscovery {
  public domainsApi: DomainsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.domainsApi = new DomainsApi(configuration)
  }
}
