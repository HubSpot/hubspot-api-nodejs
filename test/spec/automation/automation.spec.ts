import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().automation
    expect(client.hasOwnProperty('actions')).toBeTruthy()
  })
})
