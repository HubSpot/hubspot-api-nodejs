import { Client } from '../../../../index'
import { BasicApi } from '../../../../codegen/conversations/visitor_identification/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().conversations.visitorIdentification
    expect(Object.prototype.hasOwnProperty.call(client, 'generateApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.generateApi.constructor.name)
  })
})
