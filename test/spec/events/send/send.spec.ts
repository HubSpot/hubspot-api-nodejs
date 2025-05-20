import { Client } from '../../../../index'
import { BasicApi, BatchApi } from '../../../../codegen/events/send/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().events.send
    expect(Object.prototype.hasOwnProperty.call(client, 'basicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
  })
})
