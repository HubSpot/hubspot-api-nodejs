import { configuration } from '../../../../configuration'
import { baseDiscovery } from '../../../baseDiscovery'
import { DefaultApi } from '../../../../../codegen/cms/blogs/tags/index'
import { createConfiguration } from '../../../../../codegen/cms/blogs/tags/configuration'

export class TagsDiscovery extends baseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
