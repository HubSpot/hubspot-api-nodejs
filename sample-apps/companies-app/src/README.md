# HubSpot-nodejs companies sample app

This is a sample app for the [node-hubspot wrapper](https://www.npmjs.com/package/hubspot). Currently, this app focuses on demonstrating the functionality of [OAuth API](https://developers.hubspot.com/docs/methods/oauth2/oauth2-overview) endpoints and their related actions.

Please see the documentation on [How do I create an app in HubSpot?](https://developers.hubspot.com/docs/faq/how-do-i-create-an-app-in-hubspot)

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
docker-compose -f  ../../../docker-compose-companies.yml up --build
```
You should now be able to navigate to [http://localhost:3000](http://localhost:3000) and use the application.

### Testing
1. Copy .test-env.template to .test-env
2. Paste your HubSpot Apikey, HubSpot Client Id, HubSpot Client Secret, HubSpot Authorization email, HubSpot Authorization password 
and HubSpot Account Name as the value for HUBSPOT_API_KEY, HUBSPOT_CLIENT_ID, HUBSPOT_CLIENT_SECRET, HUBSPOT_AUTHORIZATION_EMAIL, 
HUBSPOT_AUTHORIZATION_PASSWORD and HUBSPOT_ACCOUNT_NAME in .env-test

```bash
docker-compose -f  ../../../docker-compose-companies-test.yml up --build
```

