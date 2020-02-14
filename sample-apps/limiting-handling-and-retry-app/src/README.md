# HubSpot-nodejs limiting handling and retry sample app

This is a sample app for the [hubspot-nodejs SDK](../../../../../).

Please see the documentation on [Creating an app in HubSpot](https://developers.hubspot.com/docs-beta/creating-an-app)

Intent of this sample is to show different ways how to overcome HubSpot API rate limits and show how to use Retry client functionality 

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


