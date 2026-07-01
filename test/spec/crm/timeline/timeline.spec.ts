import { BasicApi } from '../../../../codegen/crm/timeline/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.timeline
    expect(Object.prototype.hasOwnProperty.call(client, 'eventsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.eventsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'templatesApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.templatesApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'tokensApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.tokensApi.constructor.name)
  })
})
