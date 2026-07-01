import {
  BasicApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../codegen/crm/imports/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/crm/imports/rxjsStub'

export default class ImportsDiscovery {
  public coreApi: BasicApi
  public publicImportsApi: BasicApi

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

    const api = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.coreApi = api
    this.publicImportsApi = api
  }
}
