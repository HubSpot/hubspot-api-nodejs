import { GenerateApi } from '../../../../codegen/conversations/visitor_identification/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().conversations.visitorIdentification
    expect(Object.prototype.hasOwnProperty.call(client, 'generateApi')).toBeTruthy()
    expect(GenerateApi.name).toBe(client.generateApi.constructor.name)
  })
})
