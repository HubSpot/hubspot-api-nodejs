import { BatchApi } from '../../../../../codegen/crm/objects/deal_splits/index'
import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.objects.dealSplits
    expect(Object.prototype.hasOwnProperty.call(client, 'batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
  })
})
