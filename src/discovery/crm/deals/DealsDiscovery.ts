import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { AssociationsApi, BasicApi, BatchApi, SearchApi } from '../../../../codegen/crm/deals/index'
import { createConfiguration } from '../../../../codegen/crm/deals/configuration'

export class DealsDiscovery extends baseDiscovery {
    public associationsApi: AssociationsApi
    public basicApi: BasicApi
    public batchApi: BatchApi
    public searchApi: SearchApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.associationsApi = new AssociationsApi(configuration)
        this.basicApi = new BasicApi(configuration)
        this.batchApi = new BatchApi(configuration)
        this.searchApi = new SearchApi(configuration)
    }
}
