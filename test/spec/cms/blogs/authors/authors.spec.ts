import { BlogAuthorsApi } from '../../../../../codegen/cms/blogs/authors/index'
import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.blogs.authors
    expect(Object.prototype.hasOwnProperty.call(client, 'blogAuthorsApi')).toBeTruthy()
    expect(BlogAuthorsApi.name).toBe(client.blogAuthorsApi.constructor.name)
  })
})
