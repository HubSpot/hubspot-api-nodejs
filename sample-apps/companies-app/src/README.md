# HubSpot-nodejs companies sample app

This is a sample app for the [hubspot-nodejs SDK](https://www.npmjs.com/package/@hubspot/api-client).
Currently, this app focuses on demonstrating the functionality of [Companies API](https://developers.hubspot.com/docs/api/crm/companies) endpoints and their related actions.

Please see the documentation on [Creating an app in HubSpot](https://developers.hubspot.com/docs/api/creating-an-app)
### HubSpot Public API links used in this application

  - [Create a company object](https://developers.hubspot.com/docs/api/crm/companies)
  - [Update a company](https://developers.hubspot.com/docs/api/crm/companies)
  - [Search for companies by domain](https://developers.hubspot.com/docs/api/crm/companies)
  - [Get companies](https://developers.hubspot.com/docs/api/crm/companies)
  - [Get all company properties](https://developers.hubspot.com/docs/api/crm/properties)
  - [Get a company](https://developers.hubspot.com/docs/api/crm/companies)
  - [Get associated contacts at a company](https://developers.hubspot.com/docs/api/crm/associations)
  - [Read a batch of contact objects by ID](https://developers.hubspot.com/docs/api/crm/associations)
  - [Get all contacts](https://developers.hubspot.com/docs/api/crm/contacts)
  - [Search for contacts](https://developers.hubspot.com/docs/api/crm/contacts)
  - [Create associations between company and contacts](https://developers.hubspot.com/docs/api/crm/associations)
  - [Delete associations between company and contacts](https://developers.hubspot.com/docs/api/crm/associations)
  - [Using OAuth 2.0 access tokens](https://developers.hubspot.com/docs/api/intro-to-auth)

### Setup App

Make sure you have [Docker](https://www.docker.com/) installed.
Make sure you have [Docker Compose](https://docs.docker.com/compose/) installed.

### Configure

1. Copy .env.template to .env
2. Paste your HubSpot Client Id and HubSpot Client Secret as the value for HUBSPOT_CLIENT_ID and HUBSPOT_CLIENT_SECRET in .env

### Running

The best way to run this project (with the least configuration), is using docker cli.

```bash
docker-compose -f  ../docker-compose.yml up --build
```
You should now be able to navigate to [http://localhost:3000](http://localhost:3000) and use the application.

### Testing
1. Copy .test-env.template to .test-env
2. Paste your HubSpot Apikey, HubSpot Client Id, HubSpot Client Secret, HubSpot Authorization email, HubSpot Authorization password 
and HubSpot Account Name as the value for HUBSPOT_API_KEY, HUBSPOT_CLIENT_ID, HUBSPOT_CLIENT_SECRET, HUBSPOT_AUTHORIZATION_EMAIL, 
HUBSPOT_AUTHORIZATION_PASSWORD and HUBSPOT_ACCOUNT_NAME in .env-test

```bash
docker-compose -f  ../docker-compose-test.yml up --build
```

