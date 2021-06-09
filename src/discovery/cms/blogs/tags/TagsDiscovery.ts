import { createConfiguration } from '../../../../../codegen/cms/blogs/tags/configuration'
import { DefaultApi } from '../../../../../codegen/cms/blogs/tags/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class TagsDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: IConfiguration) {
        super(config)

        const configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
