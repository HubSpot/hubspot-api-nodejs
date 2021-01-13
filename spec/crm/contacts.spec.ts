import 'jasmine'
import * as apis from '../../codegen/crm/contacts/api'
import { Client } from '../../index'

describe('api client', () => {
  it('discoverable', () => {
    const client = new Client()
    expect(client.crm.contacts.hasOwnProperty('basicApi')).toBeTruthy()
  });
});
