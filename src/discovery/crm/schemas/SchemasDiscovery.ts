import { createConfiguration } from '../../../../codegen/crm/schemas/configuration'
import { CoreApi, PublicObjectSchemasApi, RequestContext, ResponseContext } from '../../../../codegen/crm/schemas/index'
import { Observable } from '../../../../codegen/crm/schemas/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class SchemasDiscovery {
  public coreApi: CoreApi
  public publicObjectSchemasApi: PublicObjectSchemasApi

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
    this.publicObjectSchemasApi = new PublicObjectSchemasApi(configuration)
  }
}
