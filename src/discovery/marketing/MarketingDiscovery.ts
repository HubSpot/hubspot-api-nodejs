import { IConfiguration } from '../../IConfiguration'
import { TransactionalDiscovery } from './transactional/TransactionalDiscovery'


export class MarketingDiscovery {
    public transactional: TransactionalDiscovery

    constructor(config: IConfiguration) {
        this.transactional = new TransactionalDiscovery(config)
    }
}
