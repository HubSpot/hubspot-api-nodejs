import { Client } from '../../../../index'
import { BasicApi } from '../../../../codegen/marketing/forms/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.forms
    expect(Object.prototype.hasOwnProperty.call(client, 'formsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.formsApi.constructor.name)
  })
})
