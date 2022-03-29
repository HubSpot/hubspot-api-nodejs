import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.objects
    expect(client.hasOwnProperty('associationsApi')).toBeTruthy()
    expect(client.hasOwnProperty('basicApi')).toBeTruthy()
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(client.hasOwnProperty('calls')).toBeTruthy()
    expect(client.hasOwnProperty('emails')).toBeTruthy()
    expect(client.hasOwnProperty('gdprApi')).toBeTruthy()
    expect(client.hasOwnProperty('feedbackSubmissions')).toBeTruthy()
    expect(client.hasOwnProperty('meetings')).toBeTruthy()
    expect(client.hasOwnProperty('notes')).toBeTruthy()
    expect(client.hasOwnProperty('tasks')).toBeTruthy()
    expect(client.hasOwnProperty('searchApi')).toBeTruthy()
  })
})
