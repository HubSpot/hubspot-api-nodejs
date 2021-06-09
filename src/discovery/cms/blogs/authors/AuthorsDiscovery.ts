import { Configuration } from '../../../../Configuration'
import { BaseDiscovery } from '../../../BaseDiscovery'
import { DefaultApi } from '../../../../../codegen/cms/blogs/authors/index'
import { createConfiguration } from '../../../../../codegen/cms/blogs/authors/configuration'

export class AuthorsDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: Configuration) {
        super(config)

        const configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
