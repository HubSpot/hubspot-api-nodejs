import { createConfiguration } from '../../../../codegen/cms/performance/configuration'
import { DefaultApi } from '../../../../codegen/cms/performance/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class PerformanceDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: IConfiguration) {
        super(config)

        const configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
