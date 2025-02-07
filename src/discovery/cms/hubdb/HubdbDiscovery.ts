import {
  createConfiguration,
  RequestContext,
  ResponseContext,
  RowsApi,
  RowsBatchApi,
  ServerConfiguration,
  TablesApi,
} from '../../../../codegen/cms/hubdb/index'
import { Observable } from '../../../../codegen/cms/hubdb/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

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
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.rowsApi = ApiDecoratorService.getInstance().apply<RowsApi>(new RowsApi(configuration))
    this.rowsBatchApi = ApiDecoratorService.getInstance().apply<RowsBatchApi>(new RowsBatchApi(configuration))
    this.tablesApi = ApiDecoratorService.getInstance().apply<TablesApi>(new TablesApi(configuration))
  }
}
