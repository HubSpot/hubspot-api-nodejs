# HubSpot-nodejs contacts sample app

This is a sample app for the [hubspot-nodejs SDK](https://www.npmjs.com/package/@hubspot/api-client). Currently, this app focuses on demonstrating the functionality of [Contacts API](https://developers.hubspot.com/docs/api/crm/contacts) endpoints and their related actions. Additionally it shows how to work with paged results and how to use getAll method.

Please see the documentation on [Creating an app in HubSpot](https://developers.hubspot.com/docs/api/creating-an-app)
### HubSpot Public API links used in this application

  - [Create contact](https://developers.hubspot.com/docs/api/crm/contacts)
  - [Get a contact record by its id](https://developers.hubspot.com/docs/api/crm/contacts)
  - [Get all contacts](https://developers.hubspot.com/docs/api/crm/contacts)
  - [Get all contacts properties](https://developers.hubspot.com/docs/api/crm/properties)
  - [Get all contact property groups](https://developers.hubspot.com/docs/api/crm/properties)
  - [Get list of owners](https://developers.hubspot.com/docs/api/crm/owners)
  - [Update a contact property](https://developers.hubspot.com/docs/api/crm/properties)
  - [Create a contact property](https://developers.hubspot.com/docs/api/crm/properties)
  - [Search for contacts](https://developers.hubspot.com/docs/api/crm/contacts)


### Setup App

Make sure you have [Node](https://nodejs.org/) >=10.13.0 installed.

### Configure

1. Copy .env.template to .env
2. Paste your HubSpot API Key as the value for HUBSPOT_API_KEY in .env

### Install
```bash
npm install
```

### Running

```bash
npm run dev
```
You should now be able to navigate to [http://localhost:3000](http://localhost:3000) and use the application.

### Testing
1. Copy .test-env.template to .test-env
2. Make sure you have [Docker](https://www.docker.com/) installed. Make sure you have [Docker Compose](https://docs.docker.com/compose/) installed.
3. Paste your HubSpot Apikey, HubSpot User Name and HubSpot User Last Name as the value for HUBSPOT_API_KEY, HUBSPOT_USER_NAME and HUBSPOT_USER_LAST_NAME in .env-test

```bash
docker-compose -f  ../docker-compose-test.yml up --build
```
