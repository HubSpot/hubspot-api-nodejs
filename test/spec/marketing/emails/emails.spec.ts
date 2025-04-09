import {
  MarketingEmailsApi,
  StatisticsApi
} from '../../../../codegen/marketing/emails/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.emails
    expect(Object.prototype.hasOwnProperty.call(client, 'marketingEmailsApi')).toBeTruthy()
    expect(MarketingEmailsApi.name).toBe(client.marketingEmailsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'statisticsApi')).toBeTruthy()
    expect(StatisticsApi.name).toBe(client.statisticsApi.constructor.name)
  })
})
