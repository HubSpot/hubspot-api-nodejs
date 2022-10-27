import { Client } from '../../../index'
import ActionsDiscovery from '../../../src/discovery/automation/actions/ActionsDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().automation
    expect(ActionsDiscovery.name).toBe(client.actions.constructor.name)
  })
})
