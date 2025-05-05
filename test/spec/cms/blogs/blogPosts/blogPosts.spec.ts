import { BasicApi, BatchApi, MultiLanguageApi } from '../../../../../codegen/cms/blogs/blog_posts/index'
import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.blogs.blogPosts
    expect(Object.prototype.hasOwnProperty.call(client, 'basicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'multiLanguageApi')).toBeTruthy()
    expect(MultiLanguageApi.name).toBe(client.multiLanguageApi.constructor.name)
  })
})
