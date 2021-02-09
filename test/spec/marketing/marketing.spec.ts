import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing
    expect(client.hasOwnProperty('transactional')).toBeTruthy()
  })
})
