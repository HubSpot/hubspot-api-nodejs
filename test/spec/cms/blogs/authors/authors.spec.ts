import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.blogs.authors
    expect(client.hasOwnProperty('authorApi')).toBeTruthy()
  })
})
