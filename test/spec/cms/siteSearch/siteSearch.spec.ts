import { Client } from '../../../../index'
import { BasicApi } from '../../../../codegen/cms/site_search/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.siteSearch
    expect(Object.prototype.hasOwnProperty.call(client, 'publicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.publicApi.constructor.name)
  })
})
