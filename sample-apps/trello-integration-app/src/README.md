# HubSpot-nodejs search results paging sample app

This is a sample app for the [hubspot-nodejs SDK](../../../../../).

Please see the documentation on [Creating an app in HubSpot](https://developers.hubspot.com/docs/api/creating-an-ap)

Intent of this sample is to show how to paginate over search results if number of total objects that match search criteria exceeds api limit of 10 000. 

### HubSpot Public API links used in this application

  - [Search for contacts](https://developers.hubspot.com/docs/api/crm/contacts)

### Setup App

Make sure you have [Docker](https://www.docker.com/) installed.
Make sure you have [Docker Compose](https://docs.docker.com/compose/) installed.

### Configure

1. Copy .env.template to .env
2. Paste your HubSpot Client Id, HubSpot Client Secret and Contacts Search Query as the value for HUBSPOT_CLIENT_ID, HUBSPOT_CLIENT_SECRET and CONTACTS_SEARCH_QUERY in .env

### Running

The best way to run this project (with the least configuration), is using docker cli.

```bash
docker-compose -f  ../../../docker-compose-trello-integration.yml up --build
```
You should now be able to navigate to [http://localhost:3000](http://localhost:3000) and use the application. 
