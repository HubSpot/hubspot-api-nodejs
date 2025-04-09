import { Client } from '../../../../index'
import InvoicesDiscovery from '../../../../src/discovery/crm/commerce/invoices/InvoicesDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.commerce
    expect(InvoicesDiscovery.name).toBe(client.invoices.constructor.name)
  })
})
