import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { DomainsApi } from '../../../../codegen/cms/domains/index'
import { createConfiguration } from '../../../../codegen/cms/domains/configuration'

export class DomainsDiscovery extends baseDiscovery {
    public domainsApi: DomainsApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.domainsApi = new DomainsApi(configuration)
    }
}
