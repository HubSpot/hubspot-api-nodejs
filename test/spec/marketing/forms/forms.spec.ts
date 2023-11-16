import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.forms
    expect(client.hasOwnProperty('formsApi')).toBeTruthy()
  })
})
