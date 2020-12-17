# HubSpot-nodejs oauth sample app

This is a sample app for the [hubspot-nodejs SDK](https://www.npmjs.com/package/@hubspot/api-client). Currently, this app focuses on demonstrating the functionality of [OAuth API](https://developers.hubspot.com/docs/api/working-with-oauth) endpoints and their related actions.

  - [Using OAuth 2.0 access tokens](https://developers.hubspot.com/docs/api/intro-to-auth)
  - [Get all contacts](https://developers.hubspot.com/docs/api/crm/contacts)

Please see the documentation on [Creating an app in HubSpot](https://developers.hubspot.com/docs/api/creating-an-ap)

### Configure

1. Copy .env.template to .env
2. Paste your HubSpot Client Id and HubSpot Client Secret as the value for HUBSPOT_CLIENT_ID and HUBSPOT_CLIENT_SECRET in .env

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
3. Paste your HubSpot Apikey, HubSpot Client Id, HubSpot Client Secret, HubSpot Authorization email, HubSpot Authorization password
and HubSpot Account Name as the value for HUBSPOT_API_KEY, HUBSPOT_CLIENT_ID, HUBSPOT_CLIENT_SECRET, HUBSPOT_AUTHORIZATION_EMAIL, 
HUBSPOT_AUTHORIZATION_PASSWORD and HUBSPOT_ACCOUNT_NAME in .env-test

```bash
docker-compose -f ../docker-compose-test.yml up --build
```
