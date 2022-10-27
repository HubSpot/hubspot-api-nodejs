import { Client } from '../../../../index'
import AuthorsDiscovery from '../../../../src/discovery/cms/blogs/authors/AuthorsDiscovery'
import BlogPostsDiscovery from '../../../../src/discovery/cms/blogs/blog_posts/BlogPostsDiscovery'
import TagsDiscovery from '../../../../src/discovery/cms/blogs/tags/TagsDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.blogs
    expect(AuthorsDiscovery.name).toBe(client.authors.constructor.name)
    expect(BlogPostsDiscovery.name).toBe(client.blogPosts.constructor.name)
    expect(TagsDiscovery.name).toBe(client.tags.constructor.name)
  })
})
