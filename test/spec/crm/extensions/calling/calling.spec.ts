import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.extensions.calling
    expect(client.hasOwnProperty('settingsApi')).toBeTruthy()
  })
})
