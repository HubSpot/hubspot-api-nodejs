import { BasicApi } from '../../../../../codegen/crm/extensions/cards/index'
import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.extensions.cards
    expect(Object.prototype.hasOwnProperty.call(client, 'cardsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.cardsApi.constructor.name)
  })
})
