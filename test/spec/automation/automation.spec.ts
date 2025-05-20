import ActionsDiscovery from '../../../src/discovery/automation/actions/ActionsDiscovery'
import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().automation
    expect(ActionsDiscovery.name).toBe(client.actions.constructor.name)
  })
})
