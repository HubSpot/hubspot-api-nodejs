import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.blogs
    expect(client.hasOwnProperty('authors')).toBeTruthy()
    expect(client.hasOwnProperty('blogPosts')).toBeTruthy()
    expect(client.hasOwnProperty('tags')).toBeTruthy()
  })
})
