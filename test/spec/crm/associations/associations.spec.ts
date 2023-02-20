import { Client } from '../../../../index'
import AssociationsDiscovery from '../../../../src/discovery/crm/associations/v4/AssociationsDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(client.hasOwnProperty('typesApi')).toBeTruthy()
    expect(AssociationsDiscovery.name).toBe(client.v4.constructor.name)
  })
})
