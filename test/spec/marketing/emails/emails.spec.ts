import { BasicApi } from '../../../../codegen/marketing/emails/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.emails
    expect(Object.prototype.hasOwnProperty.call(client, 'marketingEmailsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.marketingEmailsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'statisticsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.statisticsApi.constructor.name)
  })
})
