import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.blogs.blogPosts
    expect(client.hasOwnProperty('blogPostsApi')).toBeTruthy()
  })
})
