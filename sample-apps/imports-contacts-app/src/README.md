# HubSpot-nodejs imports contacts sample app

This is a sample app for the [hubspot-nodejs SDK](https://www.npmjs.com/package/@hubspot/api-client). Currently, this app focuses on demonstrating the functionality of [Imports API](https://developers.hubspot.com/docs/api/crm/imports) endpoints and their related actions.

Please see the documentation on [Creating an app in HubSpot](https://developers.hubspot.com/docs/api/creating-an-ap)

### HubSpot Public API links used in this application

  - [Imports](https://developers.hubspot.com/docs/api/crm/imports)

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
