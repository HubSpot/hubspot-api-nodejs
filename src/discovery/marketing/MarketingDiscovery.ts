import { configuration } from '../../configuration'
import { TransactionalDiscovery } from './transactional/TransactionalDiscovery'


export class MarketingDiscovery {
    public transactional: TransactionalDiscovery

    constructor(config: configuration) {
        this.transactional = new TransactionalDiscovery(config)
    }
}