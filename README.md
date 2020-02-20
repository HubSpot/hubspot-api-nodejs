# hubspot-api-nodejs
NodeJS v3 [HubSpot API](https://developers.hubspot.com/docs-beta/overview) SDK(Client) files and sample apps

Sample Applications can be found in [sample-apps](sample-apps/) folder

## Installing

```shell
npm install @hubspot/api-client
```

## Instantiate client

```javascript
const hubspot = require('hubspot')
const hubspotClient = new hubspot.Client({ apiKey: 'abc'})
```

You can also authenticate via token:

```javascript
const hubspotClient = new hubspot.Client({ accessToken: YOUR_ACCESS_TOKEN })
```

To change the base path:

```javascript
const hubspotClient = new hubspot.Client({ accessToken: YOUR_ACCESS_TOKEN, basePath: 'https://some-url' })
```

To add custom headers to all request:

```javascript
const hubspotClient = new hubspot.Client({ accessToken: YOUR_ACCESS_TOKEN, defaultHeaders: { "My-header": "test-example" } })
```

If you're an app developer, you can also instantiate a client and obtain a new accessToken with your app
details and a refresh_token:

```javascript
const hubspotClient = new hubspot.Client();
return hubspotClient.oauth.defaultApi.createToken(
    'refresh_token',
    undefined,
    undefined,
    YOUR_CLIENT_ID,
    YOUR_CLIENT_SECRET,
    YOUR_REFRESH_TOKEN
)
    .then(results => {
        console.log(results.body);
        
        // this assigns the accessToken to the client, so your client is ready
        // to use
        hubspotClient.setAccessToken(results.body.accessToken)

        return hubspotClient.crm.companies.basicApi.getPage()
    })
```

[Bottleneck](https://github.com/SGrondin/bottleneck) is used for rate limiting. To override the default settings, pass a `limiterOptions` object when instantiating the client. Bottleneck options can be found [here](https://github.com/SGrondin/bottleneck#constructor).
Please note that Apps using OAuth are only subject to a limit of 100 requests every 10 seconds. Limits related to the API Add-on don't apply.
Default settings for the limiter are:

```javascript
const DEFAULT_LIMITER_OPTIONS = {
    minTime: 1000 / 9,
    maxConcurrent: 5,
}
```

It's possible to turn off rate limiting:

```javascript
const hubspotClient = new hubspot.Client({ 
    accessToken: YOUR_ACCESS_TOKEN, 
    useLimiter: false,
})
```

It's possible to turn on retry for failed requests with statuses 429 or 5xx. To turn on/off Configurable Retries use numberOfApiCallRetries option on Client instance creation.
numberOfApiCallRetries could be set to a numberfrom 0 - 6. If numberOfApiCallRetries is set to a number greater than 0 it means that if any API Call receives ISE5xx this call will be retried after a delay 200 * retryNumber ms and if 429 (Rate limit is exceeded) is returned for "TEN_SECONDLY_ROLLING" the call will be retried after a delay 10 sec. Number of retries will not exceed numberOfApiCallRetries value.

```javascript
const hubspotClient = new hubspot.Client({ 
    accessToken: YOUR_ACCESS_TOKEN, 
    numberOfApiCallRetries : NumberOfRetries.Six
})
```

It's possible to create client instance with Interceptors functions which would be called and awaited before request is made:

```javascript
const hubspotClient = new hubspot.Client({ 
    accessToken: YOUR_ACCESS_TOKEN, 
    interceptors: [interceptorFn1, interceptorFn2]
})
```

## Usage

All methods return a [promise]. The success includes the serialized to JSON body and response objects. Use the API method via:

```javascript
hubspotClient.crm.contacts.basicApi.getPage(limit, after, properties, associations, archived)
  .then(results => {
    console.log(results.body)
  })
  .catch(err => {
    console.error(err)
  })
```

[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

## {EXAMPLE} Create Contact, Company and associate created objects

```javascript
const contactObj = { 
    properties: {
        firstname: yourValue,
        lastname: yourValue
    }
};
const companyObj = {
    properties: {
        domain: yourValue,
        name: yourValue
     }
};

const hubspotClient = new hubspot.Client({ apiKey: YOUR_API_KEY });
const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj)
const createCompanyResponse = await hubspotClient.crm.companies.basicApi.create(companyObj)
await hubspotClient.crm.companies.associationsApi.createAssociation(createCompanyResponse.body.id, 'contacts', createContactResponse.body.id)
```

### OAuth

#### Obtain your authorization url

```javascript
const client_id = 'your_client_id'
const redirect_uri = 'take_me_to_the_ballpark'
const scope = 'some scopes'
const uri = hubspotClient.oauth.getAuthorizationUrl(client_id, redirect_uri, scope)
```

#### Obtain an access token from an authorization_code

```javascript
return hubspotClient.oauth.defaultApi.createToken(
        'authorization_code',
        code, // the code you received from the oauth flow
        YOUR_REDIRECT_URI,
        YOUR_CLIENT_ID,
        YOUR_CLIENT_SECRET,
    ).then(...)
```

## Not wrapped endpoint(s)

It is possible to access the hubspot request method directly,
it could be handy if client doesn't have implementation for some endpoint yet.
Exposed request method benefits by having all configured client params.

```javascript
hubspotClient.apiRequest({
            method: 'PUT',
            path: '/some/api/not/wrapped/yet',
            body: { key: 'value' },
          })
```

## Typescript

You may use this library in your Typescript project via:

```typescript
import Client from 'hubspot';
const hubspotClient = new Client({ apiKey: YOUR_API_KEY });
```

## License

MIT
