import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { BatchApi, TypesApi } from '../../../../codegen/crm/associations/index'
import { createConfiguration } from '../../../../codegen/crm/associations/configuration'

export class AssociationsDiscovery extends baseDiscovery {
    public batchApi: BatchApi
    public typesApi: TypesApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.batchApi = new BatchApi(configuration)
        this.typesApi = new TypesApi(configuration)
    }
}
