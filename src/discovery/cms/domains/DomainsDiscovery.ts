import { createConfiguration } from '../../../../codegen/cms/domains/configuration'
import { DomainsApi, RequestContext, ResponseContext } from '../../../../codegen/cms/domains/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class DomainsDiscovery {
  public domainsApi: DomainsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.domainsApi = new DomainsApi(configuration)
  }
}
