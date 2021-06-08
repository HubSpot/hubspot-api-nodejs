import { configuration } from '../../../../configuration'
import { baseDiscovery } from '../../../baseDiscovery'
import { DefaultApi } from '../../../../../codegen/cms/blogs/blog_posts/index'
import { createConfiguration } from '../../../../../codegen/cms/blogs/blog_posts/configuration'

export class BlogPostsDiscovery extends baseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
