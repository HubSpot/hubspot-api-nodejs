import { configuration } from '../../../configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { AssociationsApi, BasicApi, BatchApi, SearchApi } from '../../../../codegen/crm/quotes/index'
import { createConfiguration } from '../../../../codegen/crm/quotes/configuration'

export class QuotesDiscovery extends BaseDiscovery {
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
