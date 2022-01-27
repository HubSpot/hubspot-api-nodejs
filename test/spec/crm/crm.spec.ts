import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm
    expect(client.hasOwnProperty('associations')).toBeTruthy()
    expect(client.hasOwnProperty('companies')).toBeTruthy()
    expect(client.hasOwnProperty('contacts')).toBeTruthy()
    expect(client.hasOwnProperty('deals')).toBeTruthy()
    expect(client.hasOwnProperty('extensions')).toBeTruthy()
    expect(client.hasOwnProperty('feedbackSubmissions')).toBeTruthy()
    expect(client.hasOwnProperty('imports')).toBeTruthy()
    expect(client.hasOwnProperty('lineItems')).toBeTruthy()
    expect(client.hasOwnProperty('objects')).toBeTruthy()
    expect(client.hasOwnProperty('owners')).toBeTruthy()
    expect(client.hasOwnProperty('pipelines')).toBeTruthy()
    expect(client.hasOwnProperty('products')).toBeTruthy()
    expect(client.hasOwnProperty('properties')).toBeTruthy()
    expect(client.hasOwnProperty('quotes')).toBeTruthy()
    expect(client.hasOwnProperty('schemas')).toBeTruthy()
    expect(client.hasOwnProperty('tickets')).toBeTruthy()
    expect(client.hasOwnProperty('timeline')).toBeTruthy()
  })
})
