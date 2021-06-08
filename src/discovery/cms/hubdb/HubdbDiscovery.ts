import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { RowsApi, RowsBatchApi, TablesApi } from '../../../../codegen/cms/hubdb/index'
import { createConfiguration } from '../../../../codegen/cms/hubdb/configuration'

export class HubdbDiscovery extends baseDiscovery {
    public rowsApi: RowsApi
    public rowsBatchApi: RowsBatchApi
    public tablesApi: TablesApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.rowsApi = new RowsApi(configuration)
        this.rowsBatchApi = new RowsBatchApi(configuration)
        this.tablesApi = new TablesApi(configuration)
    }
}
