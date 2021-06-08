import { configuration } from '../../../../configuration'
import { baseDiscovery } from '../../../baseDiscovery'
import { DefaultApi } from '../../../../../codegen/cms/blogs/authors/index'
import { createConfiguration } from '../../../../../codegen/cms/blogs/authors/configuration'

export class AuthorsDiscovery extends baseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
