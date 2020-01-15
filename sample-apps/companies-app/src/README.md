# HubSpot-nodejs companies sample app

This is a sample app for the [node-hubspot wrapper](https://www.npmjs.com/package/hubspot). Currently, this app focuses on demonstrating the functionality of [OAuth API](https://developers.hubspot.com/docs/methods/oauth2/oauth2-overview) endpoints and their related actions.

Please see the documentation on [How do I create an app in HubSpot?](https://developers.hubspot.com/docs/faq/how-do-i-create-an-app-in-hubspot)

### HubSpot Public API links used in this application

  - [Create a company object]( https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview )
  - [Update a company]( https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview)
  - [Search for companies by domain](https://developers.hubspot.com/docs/methods/companies/search_companies_by_domain)
  - [Get all companies](https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview)
  - [Get all company properties](https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public?branch=master&swaggerVersion=2)
  - [Get a company](https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview)
  - [Get associated contacts at a company]( https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview)
  - [Read a batch of contact objects by ID](https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview)
  - [Get all contacts](https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview)
  - [Search for contacts by email, name, or company name](https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview)
  - [Create association between CRM objects](https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview)
  - [Delete associations between CRM objects](https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fobjects-preview)

### Setup App

Make sure you have [Docker](https://www.docker.com/) installed.
Make sure you have [Docker Compose](https://docs.docker.com/compose/) installed.

### Configure

1. Copy .env.template to .env
2. Paste your HubSpot Client Id and HubSpot Client Secret as the value for HUBSPOT_CLIENT_ID and HUBSPOT_CLIENT_SECRET in .env

### Running

The best way to run this project (with the least configuration), is using docker cli.

```bash
docker-compose -f  ../../../docker-compose-companies.yml up
```
You should now be able to navigate to [http://localhost:3000](http://localhost:3000) and use the application.

### Testing
1. Add HUBSPOT_API_KEY, BASE_PATH, HUBSPOT_AUTHORIZATION_EMAIL, HUBSPOT_AUTHORIZATION_PASSWORD & HUBSPOT_ACCOUNT_NAME to .env

```bash
npm i
npm test
```

