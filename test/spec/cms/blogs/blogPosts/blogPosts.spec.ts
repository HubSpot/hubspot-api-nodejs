import { BlogPostsApi } from '../../../../../codegen/cms/blogs/blog_posts/index'
import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.blogs.blogPosts
    expect(Object.prototype.hasOwnProperty.call(client, 'blogPostsApi')).toBeTruthy()
    expect(BlogPostsApi.name).toBe(client.blogPostsApi.constructor.name)
  })
})
