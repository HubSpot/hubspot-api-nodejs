import { configuration } from '../../../configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { DefaultApi } from '../../../../codegen/cms/site_search/index'
import { createConfiguration } from '../../../../codegen/cms/site_search/configuration'

export class SiteSearchDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
