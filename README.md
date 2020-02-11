# nodejs-hubspot-3
NodeJS v3 [HubSpot API](https://developers.hubspot.com/docs-beta/overview) SDK(Client) files and sample apps

Sample Applications can be found in [sample-apps](sample-apps/) folder

```shell
npm install hubspot
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

By default client created with [Bottleneck](https://github.com/SGrondin/bottleneck) realization of Rate and Concurrent Limiting.
Default settings for limiter are:

```javascript
{
    maxConcurrent: 5,
    minTime: 1000 / 9
 }
```

It's possible to turn of either Rate or Concurrent Limiting:

```javascript
const hubspotClient = new hubspot.Client({ 
    accessToken: YOUR_ACCESS_TOKEN, 
    allowRateLimiting: false,
    allowConcurrentLimiting: false
})
```

It's possible to turn on retry for failed requests with statuses 429 or 500. To turn on/off Configurable Retries use numberOfApiCallRetries option on Client instance creation.
numberOfApiCallRetries could be from 0 - 6. If numberOfApiCallRetries have value more than 0 it means that on ISE500 called method would be retried after delay 200 ms and on 429 for "TEN_SECONDLY_ROLLING" called method would be retried after delay 10 sec. Number of retries can not reach more than numberOfApiCallRetries value.

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

All methods return a [promise]. The success includes the serialized to JSON body and response objects.

[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

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
        REDIRECT_URI,
        CLIENT_ID,
        CLIENT_SECRET,
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
