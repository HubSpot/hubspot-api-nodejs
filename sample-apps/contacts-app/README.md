# HubSpot-nodejs contacts sample app

This is a sample app for the [node-hubspot wrapper](https://www.npmjs.com/package/hubspot). Currently, this app focuses on demonstrating the functionality of [Contacts API](https://developers.hubspot.com/docs/methods/contacts/contacts-overview) endpoints and their related actions.

Please see the documentation on [How do I create an app in HubSpot?](https://developers.hubspot.com/docs/faq/how-do-i-create-an-app-in-hubspot)

### HubSpot Public API links used in this application

  - [Create or update a contact](https://developers.hubspot.com/docs/methods/contacts/create_or_update)
  - [Get a contact record by its vid](https://developers.hubspot.com/docs/methods/contacts/get_contact)
  - [Get all contacts](https://developers.hubspot.com/docs/methods/contacts/get_contacts)
  - [Get All Contacts Properties](https://developers.hubspot.com/docs/methods/contacts/v2/get_contacts_properties)
  - [Get List of Owners](https://developers.hubspot.com/docs/methods/owners/get_owners)
  - [Update a contact property](https://developers.hubspot.com/docs/methods/contacts/v2/update_contact_property)
  - [Create a contact property](https://developers.hubspot.com/docs/methods/contacts/v2/create_contacts_property)
  - [Search for contacts by email, name, or company name](https://developers.hubspot.com/docs/methods/contacts/search_contacts)

  Application also demonstrates [contacts pagination](https://git.hubteam.com/HubSpot/hubspot-integration-samples-js/blob/master/contacts-app/index.js) by saving first 10 pages of contacts into a csv file

### Setup App

Make sure you have [Docker](https://www.docker.com/) installed.
Make sure you have [Docker Compose](https://docs.docker.com/compose/) installed.

### Configure

1. Copy .env.template to .env
2. Paste your HubSpot API Key as the value for HUBSPOT_API_KEY in .env

### Running

The best way to run this project (with the least configuration), is using docker cli.

```bash
docker-compose up 
```
You should now be able to navigate to [http://localhost:3000](http://localhost:3000) and use the application.
