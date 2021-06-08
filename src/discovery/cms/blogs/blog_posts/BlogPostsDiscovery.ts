import { configuration } from '../../../../configuration'
import { BaseDiscovery } from '../../../BaseDiscovery'
import { DefaultApi } from '../../../../../codegen/cms/blogs/blog_posts/index'
import { createConfiguration } from '../../../../../codegen/cms/blogs/blog_posts/configuration'

export class BlogPostsDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
