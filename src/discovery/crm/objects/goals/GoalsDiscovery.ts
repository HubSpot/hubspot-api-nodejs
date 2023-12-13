import { createConfiguration } from '../../../../../codegen/crm/objects/goals/configuration'
import {
  BasicApi,
  BatchApi,
  GDPRApi,
  PublicObjectApi,
  RequestContext,
  ResponseContext,
  SearchApi,
  ServerConfiguration,
} from '../../../../../codegen/crm/objects/goals/index'
import { Observable } from '../../../../../codegen/crm/objects/goals/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'

export default class GoalsDiscovery {
  public basicApi: BasicApi
  public batchApi: BatchApi
  public gdprApi: GDPRApi
  public publicObjectApi: PublicObjectApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.basicApi = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi>(new BatchApi(configuration))
    this.gdprApi = ApiDecoratorService.getInstance().apply<GDPRApi>(new GDPRApi(configuration))
    this.publicObjectApi = ApiDecoratorService.getInstance().apply<PublicObjectApi>(new PublicObjectApi(configuration))
    this.searchApi = ApiDecoratorService.getInstance().apply<SearchApi>(new SearchApi(configuration))
  }
}
