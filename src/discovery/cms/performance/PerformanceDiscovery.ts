import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { DefaultApi } from '../../../../codegen/cms/performance/index'
import { createConfiguration } from '../../../../codegen/cms/performance/configuration'

export class PerformanceDiscovery extends baseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
