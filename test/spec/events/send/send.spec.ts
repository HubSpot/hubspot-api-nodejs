import { CustomEventDataApi } from '../../../../codegen/events/send/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().events.send
    expect(client.hasOwnProperty('customEventDataApi')).toBeTruthy()
    expect(CustomEventDataApi.name).toBe(client.customEventDataApi.constructor.name)
  })
})
