import { PublicSMTPTokensApi, SingleSendApi } from '../../../../codegen/marketing/transactional/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.transactional
    expect(Object.prototype.hasOwnProperty.call(client, 'publicSMTPTokensApi')).toBeTruthy()
    expect(PublicSMTPTokensApi.name).toBe(client.publicSMTPTokensApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'singleSendApi')).toBeTruthy()
    expect(SingleSendApi.name).toBe(client.singleSendApi.constructor.name)
  })
})
