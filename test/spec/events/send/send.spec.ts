import { Client } from '../../../../index'
import { CustomEventDataApi } from '../../../../codegen/events/send/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().events.send
    expect(Object.prototype.hasOwnProperty.call(client, 'customEventDataApi')).toBeTruthy()
    expect(CustomEventDataApi.name).toBe(client.customEventDataApi.constructor.name)
  })
})
