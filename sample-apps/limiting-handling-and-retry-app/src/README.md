# HubSpot-nodejs companies sample app

This is a sample app for the [hubspot-nodejs SDK](../../../../../).
Currently, this app focuses on demonstrating the functionality of [Companies API](https://developers.hubspot.com/docs-beta/crm/companies) endpoints and their related actions.

Please see the documentation on [Creating an app in HubSpot](https://developers.hubspot.com/docs-beta/creating-an-app)
### HubSpot Public API links used in this application

  - [Create a company object](https://developers.hubspot.com/docs-beta/crm/companies)
  - [Update a company](https://developers.hubspot.com/docs-beta/crm/companies)
  - [Search for companies by domain](https://developers.hubspot.com/docs-beta/crm/companies)
  - [Get companies](https://developers.hubspot.com/docs-beta/crm/companies)
  - [Get all company properties](https://developers.hubspot.com/docs-beta/crm/properties)
  - [Get a company](https://developers.hubspot.com/docs-beta/crm/companies)
  - [Get associated contacts at a company](https://developers.hubspot.com/docs-beta/crm/associations)
  - [Read a batch of contact objects by ID](https://developers.hubspot.com/docs-beta/crm/companies)
  - [Get all contacts](https://developers.hubspot.com/docs-beta/crm/contacts)
  - [Search for contacts](https://developers.hubspot.com/docs-beta/crm/contacts)
  - [Create associations between company and contacts](https://developers.hubspot.com/docs-beta/crm/associations)
  - [Delete associations between company and contacts](https://developers.hubspot.com/docs-beta/crm/associations)

### Setup App

Make sure you have [Docker](https://www.docker.com/) installed.
Make sure you have [Docker Compose](https://docs.docker.com/compose/) installed.

### Configure

1. Copy .env.template to .env
2. Paste your HubSpot Client Id and HubSpot Client Secret as the value for HUBSPOT_CLIENT_ID and HUBSPOT_CLIENT_SECRET in .env

### Running

The best way to run this project (with the least configuration), is using docker cli.

```bash
docker-compose -f  ../../../docker-compose-limiting-handling-and-retry.yml up --build
```
You should now be able to navigate to [http://localhost:3000](http://localhost:3000) and use the application.


