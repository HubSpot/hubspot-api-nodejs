import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.siteSearch
    expect(client.hasOwnProperty('publicApi')).toBeTruthy()
  })
})
