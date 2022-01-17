import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.blogs.tags
    expect(client.hasOwnProperty('blogTagsApi')).toBeTruthy()
  })
})
