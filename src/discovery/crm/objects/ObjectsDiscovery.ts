import { Configuration } from '../../../Configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { AssociationsApi, BasicApi, BatchApi, SearchApi } from '../../../../codegen/crm/objects/index'
import { createConfiguration } from '../../../../codegen/crm/objects/configuration'

export class ObjectsDiscovery extends BaseDiscovery {
    public associationsApi: AssociationsApi
    public basicApi: BasicApi
    public batchApi: BatchApi
    public searchApi: SearchApi

    constructor(config: Configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.associationsApi = new AssociationsApi(configuration)
        this.basicApi = new BasicApi(configuration)
        this.batchApi = new BatchApi(configuration)
        this.searchApi = new SearchApi(configuration)
    }
}
