import { createConfiguration } from '../../../../../codegen/cms/blogs/blog_posts/configuration'
import { DefaultApi } from '../../../../../codegen/cms/blogs/blog_posts/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class BlogPostsDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: IConfiguration) {
        super(config)

        const configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
