import { createConfiguration } from '../../../../codegen/cms/hubdb/configuration'
import { RequestContext, ResponseContext, RowsApi, RowsBatchApi, TablesApi } from '../../../../codegen/cms/hubdb/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class HubdbDiscovery extends BaseDiscovery {
  public rowsApi: RowsApi
  public rowsBatchApi: RowsBatchApi
  public tablesApi: TablesApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.rowsApi = new RowsApi(configuration)
    this.rowsBatchApi = new RowsBatchApi(configuration)
    this.tablesApi = new TablesApi(configuration)
  }
}
