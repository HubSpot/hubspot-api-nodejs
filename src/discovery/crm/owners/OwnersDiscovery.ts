import { createConfiguration } from '../../../../codegen/crm/owners/configuration'
import { OwnersApi, RequestContext, ResponseContext } from '../../../../codegen/crm/owners/index'
import { Observable } from '../../../../codegen/crm/owners/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class OwnersDiscovery {
  public ownersApi: OwnersApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.ownersApi = new OwnersApi(configuration)
  }
}
