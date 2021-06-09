import { Configuration } from '../../../Configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { DefaultApi } from '../../../../codegen/cms/performance/index'
import { createConfiguration } from '../../../../codegen/cms/performance/configuration'

export class PerformanceDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: Configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
