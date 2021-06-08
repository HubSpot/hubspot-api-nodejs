import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { DefaultApi } from '../../../../codegen/marketing/transactional/index'
import { createConfiguration } from '../../../../codegen/marketing/transactional/configuration'

export class TransactionalDiscovery extends baseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
