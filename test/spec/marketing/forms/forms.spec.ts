import { FormsApi } from '../../../../codegen/marketing/forms/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.forms
    expect(Object.prototype.hasOwnProperty.call(client, 'formsApi')).toBeTruthy()
    expect(FormsApi.name).toBe(client.formsApi.constructor.name)
  })
})
