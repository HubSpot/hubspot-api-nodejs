# HubSpot-nodejs search results paging sample app

This is a sample app for the [hubspot-nodejs SDK](https://www.npmjs.com/package/@hubspot/api-client). It focuses on demonstrating of Trello integration, Trello cards and HubSpot deals in particular.

Please see the documentation on [Creating an app in HubSpot](https://developers.hubspot.com/docs/api/creating-an-ap)

### HubSpot Public API links used in this application

  - [CRM Custom Cards](https://developers.hubspot.com/docs/api/crm/extensions/custom-cards)
  - [Deals](https://developers.hubspot.com/docs/api/crm/deals)
  - [Pipelines](https://developers.hubspot.com/docs/api/crm/pipelines)

### Setup App

Make sure you have [Docker](https://www.docker.com/) installed.
Make sure you have [Docker Compose](https://docs.docker.com/compose/) installed.

### Configure

1. Copy .env.template to .env
2. Paste your HUBSPOT_CLIENT_ID, HUBSPOT_CLIENT_SECRET, HUBSPOT_APPLICATION_ID and HUBSPOT_DEVELOPER_API_KEY
3. Paste you TRELLO_API_KEY. You can obtain it from [https://trello.com/app-key](https://trello.com/app-key)

### Running

The best way to run this project (with the least configuration), is using docker cli.

```bash
docker-compose -f  ../docker-compose.yml up --build
```

Copy Ngrok url from console. Now you should be able to navigate to that url and use the application.
