import { Client } from '../../../../index'
import { FormsApi } from '../../../../codegen/marketing/forms/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.forms
    expect(Object.prototype.hasOwnProperty.call(client, 'formsApi')).toBeTruthy()
    expect(FormsApi.name).toBe(client.formsApi.constructor.name)
  })
})
