import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().files
    expect(client.hasOwnProperty('filesApi')).toBeTruthy()
    expect(client.hasOwnProperty('foldersApi')).toBeTruthy()
  })
})
