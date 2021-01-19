import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.extensions.cards
    expect(client.hasOwnProperty('cardsApi')).toBeTruthy()
  })
})
