import { Configuration } from '../../../Configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { AssociationsApi, BasicApi, BatchApi, SearchApi } from '../../../../codegen/crm/deals/index'
import { createConfiguration } from '../../../../codegen/crm/deals/configuration'

export class DealsDiscovery extends BaseDiscovery {
    public associationsApi: AssociationsApi
    public basicApi: BasicApi
    public batchApi: BatchApi
    public searchApi: SearchApi

    constructor(config: Configuration) {
        super(config)

        const configuration = createConfiguration(this.getParams())

        this.associationsApi = new AssociationsApi(configuration)
        this.basicApi = new BasicApi(configuration)
        this.batchApi = new BatchApi(configuration)
        this.searchApi = new SearchApi(configuration)
    }
}
