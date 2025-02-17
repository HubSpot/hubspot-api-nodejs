import {
  FoldersApi,
  ListsApi,
  MappingApi,
  MembershipsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../codegen/crm/lists/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/crm/lists/rxjsStub'

export default class ListsDiscovery {
  public foldersApi: FoldersApi
  public listsApi: ListsApi
  public mappingApi: MappingApi
  public membershipsApi: MembershipsApi

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

    this.foldersApi = ApiDecoratorService.getInstance().apply<FoldersApi>(new FoldersApi(configuration))
    this.listsApi = ApiDecoratorService.getInstance().apply<ListsApi>(new ListsApi(configuration))
    this.mappingApi = ApiDecoratorService.getInstance().apply<MappingApi>(new MappingApi(configuration))
    this.membershipsApi = ApiDecoratorService.getInstance().apply<MembershipsApi>(new MembershipsApi(configuration))
  }
}
