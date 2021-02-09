import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.extensions.accounting
    expect(client.hasOwnProperty('callbacksApi')).toBeTruthy()
    expect(client.hasOwnProperty('invoiceApi')).toBeTruthy()
    expect(client.hasOwnProperty('settingsApi')).toBeTruthy()
    expect(client.hasOwnProperty('syncApi')).toBeTruthy()
    expect(client.hasOwnProperty('userAccountsApi')).toBeTruthy()
  })
})
