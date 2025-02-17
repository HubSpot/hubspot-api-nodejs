import {
  RequestContext,
  ResponseContext,
  RowsApi,
  RowsBatchApi,
  ServerConfiguration,
  TablesApi,
  createConfiguration,
} from '../../../../codegen/cms/hubdb/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/cms/hubdb/rxjsStub'

export default class HubdbDiscovery {
  public rowsApi: RowsApi
  public rowsBatchApi: RowsBatchApi
  public tablesApi: TablesApi

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

    this.rowsApi = ApiDecoratorService.getInstance().apply<RowsApi>(new RowsApi(configuration))
    this.rowsBatchApi = ApiDecoratorService.getInstance().apply<RowsBatchApi>(new RowsBatchApi(configuration))
    this.tablesApi = ApiDecoratorService.getInstance().apply<TablesApi>(new TablesApi(configuration))
  }
}
