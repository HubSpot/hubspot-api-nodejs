import { Configuration } from '../../../Configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { DefaultApi } from '../../../../codegen/marketing/transactional/index'
import { createConfiguration } from '../../../../codegen/marketing/transactional/configuration'

export class TransactionalDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: Configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
