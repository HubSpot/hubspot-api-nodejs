# HubSpot-nodejs contacts sample app

This is a sample app for the [node-hubspot wrapper](https://www.npmjs.com/package/hubspot). Currently, this app focuses on demonstrating the functionality of [Contacts API](https://developers.hubspot.com/docs/methods/contacts/contacts-overview) endpoints and their related actions.

Please see the documentation on [How do I create an app in HubSpot?](https://developers.hubspot.com/docs/faq/how-do-i-create-an-app-in-hubspot)

### HubSpot Public API links used in this application

  - [Create contact](https://tools.hubteam.com/api-catalog/services/CrmPublicObjects-Service/v3/spec/internal)
  - [Get a contact record by its id](https://tools.hubteam.com/api-catalog/services/CrmPublicObjects-Service/v3/spec/internal)
  - [Get all contacts](https://tools.hubteam.com/api-catalog/services/CrmPublicObjects-Service/v3/spec/internal)
  - [Get all contacts properties](https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public?branch=master&swaggerVersion=2)
  - [Get all contact property groups](https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public?branch=master&swaggerVersion=2)
  - [Get list of owners](https://app.hubspot.com/vnext/api/v1%2Fapis%2Fcrm%2Fv3%2Fowners-preview)
  - [Update a contact property](https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public)
  - [Create a contact property](https://tools.hubteam.com/api-catalog/services/CrmPublicProperties-Service/v3/spec/public)
  - [Search for contacts by email, name, or company name](https://tools.hubteam.com/api-catalog/services/CrmPublicObjects-Service/v3/spec/internal)


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
