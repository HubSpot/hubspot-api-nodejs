import {
  OwnersApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../codegen/crm/owners/index'
import { Observable } from '../../../../codegen/crm/owners/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class OwnersDiscovery {
  public ownersApi: OwnersApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.ownersApi = ApiDecoratorService.getInstance().apply<OwnersApi>(new OwnersApi(configuration))
  }
}
