import { Configuration } from '../../../Configuration'
import { AuthorsDiscovery } from './authors/AuthorsDiscovery'
import { BlogPostsDiscovery } from './blog_posts/BlogPostsDiscovery'
import { TagsDiscovery } from './tags/TagsDiscovery'


export class BlogsDiscovery {
    public authors: AuthorsDiscovery
    public blogPosts: BlogPostsDiscovery
    public tags: TagsDiscovery

    constructor(config: Configuration) {
        this.authors = new AuthorsDiscovery(config)
        this.blogPosts = new BlogPostsDiscovery(config)
        this.tags = new TagsDiscovery(config)
    }
}