import * as hubspot from './index'
const hubspotClient = new hubspot.Client({ accessToken: '' })

hubspotClient.apiRequest({
  path: '/crm/v3/objects/contacts',
  defaultJson: false,
  body: {
    properties: {
      email: 'Joshgreen3@example.net',
      firstname: 'Josh',
      lastname: 'Green',
    },
  },
})
