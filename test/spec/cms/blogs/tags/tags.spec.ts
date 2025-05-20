import { BlogTagsApi } from '../../../../../codegen/cms/blogs/tags/index'
import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.blogs.tags
    expect(Object.prototype.hasOwnProperty.call(client, 'blogTagsApi')).toBeTruthy()
    expect(BlogTagsApi.name).toBe(client.blogTagsApi.constructor.name)
  })
})
