import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { DefaultApi } from '../../../../codegen/cms/site_search/index'
import { createConfiguration } from '../../../../codegen/cms/site_search/configuration'

export class SiteSearchDiscovery extends baseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
