import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.transactional
    expect(client.hasOwnProperty('defaultApi')).toBeTruthy()
  })
})
