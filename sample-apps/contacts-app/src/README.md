# HubSpot-nodejs contacts sample app

This is a sample app for the [hubspot-php SDK](../../../../). Currently, this app focuses on demonstrating the functionality of [Contacts API](https://developers.hubspot.com/docs-beta/crm/contacts) endpoints and their related actions.

Please see the documentation on [Creating an app in HubSpot](https://developers.hubspot.com/docs-beta/creating-an-app)
### HubSpot Public API links used in this application

  - [Create contact](https://developers.hubspot.com/docs-beta/crm/contacts)
  - [Get a contact record by its id](https://developers.hubspot.com/docs-beta/crm/contacts)
  - [Get all contacts](https://developers.hubspot.com/docs-beta/crm/contacts)
  - [Get all contacts properties](https://developers.hubspot.com/docs-beta/crm/properties)
  - [Get all contact property groups](https://developers.hubspot.com/docs-beta/crm/properties)
  - [Get list of owners](https://developers.hubspot.com/docs-beta/crm/owners)
  - [Update a contact property](https://developers.hubspot.com/docs-beta/crm/properties)
  - [Create a contact property](https://developers.hubspot.com/docs-beta/crm/properties)
  - [Search for contacts](https://developers.hubspot.com/docs-beta/crm/contacts)


### Setup App

Make sure you have [Docker](https://www.docker.com/) installed.
Make sure you have [Docker Compose](https://docs.docker.com/compose/) installed.

### Configure

1. Copy .env.template to .env
2. Paste your HubSpot API Key as the value for HUBSPOT_API_KEY in .env

### Running

The best way to run this project (with the least configuration), is using docker cli.

```bash
docker-compose -f  ../../../docker-compose-contacts.yml up --build
```
You should now be able to navigate to [http://localhost:3000](http://localhost:3000) and use the application.

### Testing
1. Copy .test-env.template to .test-env
2. Paste your HubSpot Apikey, HubSpot User Name and HubSpot User Last Name as the value for HUBSPOT_API_KEY, HUBSPOT_USER_NAME and HUBSPOT_USER_LAST_NAME in .env-test

```bash
docker-compose -f  ../../../docker-compose-contacts-test.yml up --build
```
