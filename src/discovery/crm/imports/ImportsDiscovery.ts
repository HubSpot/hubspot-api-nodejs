import {
  CoreApi,
  PublicImportsApi,
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
