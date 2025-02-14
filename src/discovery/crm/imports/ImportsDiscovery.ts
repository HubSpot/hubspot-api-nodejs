import {
  CoreApi,
  PublicImportsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../codegen/crm/imports/index'
import { Observable } from '../../../../codegen/crm/imports/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class ImportsDiscovery {
  public coreApi: CoreApi
  public publicImportsApi: PublicImportsApi

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

    this.coreApi = ApiDecoratorService.getInstance().apply<CoreApi>(new CoreApi(configuration))
    this.publicImportsApi = ApiDecoratorService.getInstance().apply<PublicImportsApi>(
      new PublicImportsApi(configuration),
    )
  }
}
