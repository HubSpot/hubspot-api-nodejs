import { Configuration } from '../../../Configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { DomainsApi } from '../../../../codegen/cms/domains/index'
import { createConfiguration } from '../../../../codegen/cms/domains/configuration'

export class DomainsDiscovery extends BaseDiscovery {
    public domainsApi: DomainsApi

    constructor(config: Configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.domainsApi = new DomainsApi(configuration)
    }
}
