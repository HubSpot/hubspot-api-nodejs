import { createConfiguration } from '../../../../codegen/cms/domains/configuration'
import { DomainsApi, RequestContext, ResponseContext } from '../../../../codegen/cms/domains/index'
import { Observable } from '../../../../codegen/cms/domains/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class DomainsDiscovery {
  public domainsApi: DomainsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.domainsApi = new DomainsApi(configuration)
  }
}
