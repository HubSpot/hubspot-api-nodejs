import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.imports
    expect(client.hasOwnProperty('coreApi')).toBeTruthy()
  })
})
