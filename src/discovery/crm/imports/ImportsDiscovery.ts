import { createConfiguration } from '../../../../codegen/crm/imports/configuration'
import { CoreApi, PublicImportsApi, RequestContext, ResponseContext } from '../../../../codegen/crm/imports/index'
import { Observable } from '../../../../codegen/crm/imports/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class ImportsDiscovery {
  public coreApi: CoreApi
  public publicImportsApi: PublicImportsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.coreApi = new CoreApi(configuration)
    this.publicImportsApi = new PublicImportsApi(configuration)
  }
}
