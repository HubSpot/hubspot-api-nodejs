import { Configuration } from '../../Configuration'
import { TransactionalDiscovery } from './transactional/TransactionalDiscovery'


export class MarketingDiscovery {
    public transactional: TransactionalDiscovery

    constructor(config: Configuration) {
        this.transactional = new TransactionalDiscovery(config)
    }
}
