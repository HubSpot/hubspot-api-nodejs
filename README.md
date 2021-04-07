# hubspot-api-nodejs

NodeJS v3 [HubSpot API](https://developers.hubspot.com/docs/api/overview) SDK(Client) files and sample apps

Sample Applications can be found in [sample-apps](sample-apps/) folder

## Installing

```shell
npm install @hubspot/api-client
```

## Instantiate client

```javascript
const hubspot = require('@hubspot/api-client')
const hubspotClient = new hubspot.Client({ apiKey: YOUR_API_KEY })
```

You can also authenticate via token:

```javascript
const hubspotClient = new hubspot.Client({ accessToken: YOUR_ACCESS_TOKEN })
```

You can provide developer API key. There is no need to create separate client instances for using endpoints with API key and Developer API key support.

```javascript
const hubspotClient = new hubspot.Client({ developerApiKey: YOUR_DEVELOPER_API_KEY })
```

```javascript
const hubspotClient = new hubspot.Client({ apiKey: YOUR_API_KEY, developerApiKey: YOUR_DEVELOPER_API_KEY })
```

```javascript
const hubspotClient = new hubspot.Client({ accessToken: YOUR_ACCESS_TOKEN, developerApiKey: YOUR_DEVELOPER_API_KEY })
```

To change the base path:

```javascript
const hubspotClient = new hubspot.Client({ accessToken: YOUR_ACCESS_TOKEN, basePath: 'https://some-url' })
```

To add custom headers to all request:

```javascript
const hubspotClient = new hubspot.Client({
    accessToken: YOUR_ACCESS_TOKEN,
    defaultHeaders: { 'My-header': 'test-example' },
})
```

If you're an app developer, you can also instantiate a client and obtain a new accessToken with your app
details and a refresh_token:

```javascript
const hubspotClient = new hubspot.Client()
return hubspotClient.oauth.defaultApi
    .createToken('refresh_token', undefined, undefined, YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, YOUR_REFRESH_TOKEN)
    .then((results) => {
        console.log(results.body)

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
    maxConcurrent: 6,
    id: 'hubspot-client-limiter',
}
```

Additional limiter created for search requests with following default setting:

```javascript
const DEFAULT_SEARCH_LIMITER_OPTIONS = {
    minTime: 550,
    maxConcurrent: 3,
    id: 'search-hubspot-client-limiter',
}
```

For search limiter settings provided in `limiterOptions` merged with DEFAULT_SEARCH_LIMITER_OPTIONS, so it's not possible to change 'minTime' & 'maxConcurrent' values and `id` would always have prefix 'search-'.

It's possible to turn off rate limiting:

```javascript
const hubspotClient = new hubspot.Client({
    accessToken: YOUR_ACCESS_TOKEN,
    useLimiter: false,
})
```

It's possible to turn on retry for failed requests with statuses 429 or 5xx. To turn on/off Configurable Retries use numberOfApiCallRetries option on Client instance creation.
numberOfApiCallRetries could be set to a numberfrom 0 - 6. If numberOfApiCallRetries is set to a number greater than 0 it means that if any API Call receives ISE5xx this call will be retried after a delay 200 \* retryNumber ms and if 429 (Rate limit is exceeded) is returned for "TEN_SECONDLY_ROLLING" the call will be retried after a delay 10 sec. Number of retries will not exceed numberOfApiCallRetries value.

```javascript
const hubspotClient = new hubspot.Client({
    accessToken: YOUR_ACCESS_TOKEN,
    numberOfApiCallRetries: NumberOfRetries.Six,
})
```

It's possible to create client instance with Interceptors functions which would be called and awaited before request is made:

```javascript
const hubspotClient = new hubspot.Client({
    accessToken: YOUR_ACCESS_TOKEN,
    interceptors: [interceptorFn1, interceptorFn2],
})
```

## Usage

All methods return a [promise]. The success includes the serialized to JSON body and response objects. Use the API method via:

```javascript
hubspotClient.crm.contacts.basicApi
    .getPage(limit, after, properties, associations, archived)
    .then((results) => {
        console.log(results.body)
    })
    .catch((err) => {
        console.error(err)
    })
```

[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

### {EXAMPLE} Create Contact, Company and associate created objects

```javascript
const contactObj = {
    properties: {
        firstname: yourValue,
        lastname: yourValue,
    },
}
const companyObj = {
    properties: {
        domain: yourValue,
        name: yourValue,
    },
}

const hubspotClient = new hubspot.Client({ apiKey: YOUR_API_KEY })
const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj)
const createCompanyResponse = await hubspotClient.crm.companies.basicApi.create(companyObj)
await hubspotClient.crm.companies.associationsApi.create(
    createCompanyResponse.body.id,
    'contacts',
    createContactResponse.body.id,
    'company_to_contact`
)
```

### {EXAMPLE} Update multiple objects in batch mode

```javascript
const dealObj = {
    id: yourId,
    properties: {
        amount: yourValue,
    },
}

const dealObj2 = {
    id: yourId,
    properties: {
        amount: yourValue,
    },
}

const hubspotClient = new hubspot.Client({ apiKey: YOUR_API_KEY })
await hubspotClient.crm.deals.batchApi.update({ inputs: [dealObj, dealObj2] })
```

### {EXAMPLE} Import Contacts:

#### first option with fs.ReadStream

```javascript
const hubspot = require('@hubspot/api-client')
const fs = require('fs')

const hubspotClient = new hubspot.Client({ apiKey: YOUR_API_KEY })
const importRequest = {
    name: 'test_import',
    files: [
        {
            fileName: `test.csv`,
            fileImportPage: {
                hasHeader: true,
                columnMappings: [
                    {
                        columnName: 'First Name',
                        propertyName: 'firstname',
                        columnObjectType: 'CONTACT',
                    },
                    {
                        columnName: 'Email',
                        propertyName: 'email',
                        columnObjectType: 'CONTACT',
                    },
                ],
            },
        },
    ],
}
const importFilePath = `./test.csv`
const importFileReadStream = fs.createReadStream(importFilePath)
const result = await hubspotClient.crm.imports.coreApi.create(JSON.stringify(importRequest), importFileReadStream)

console.log(JSON.stringify(result.body))
```

#### second option with RequestDetailedFile

```javascript
const hubspot = require('@hubspot/api-client')
const fs = require('fs')

const hubspotClient = new hubspot.Client({ apiKey: YOUR_API_KEY })
const importRequest = {
    name: 'test_import',
    files: [
        {
            fileName: `test.csv`,
            fileImportPage: {
                hasHeader: true,
                columnMappings: [
                    {
                        columnName: 'First Name',
                        propertyName: 'firstname',
                        columnObjectType: 'CONTACT',
                    },
                    {
                        columnName: 'Email',
                        propertyName: 'email',
                        columnObjectType: 'CONTACT',
                    },
                ],
            },
        },
    ],
}
const importFilePath = `./test.csv`
const importFileConfig = {
    value: fs.readFileSync(importFilePath),
    options: {
        filename: 'test.csv',
        contentType: 'text/csv',
    },
}
const result = await hubspotClient.crm.imports.coreApi.create(JSON.stringify(importRequest), importFileConfig)

console.log(JSON.stringify(result.body))
```

### {EXAMPLE} Search Contacts:

Only 3 FilterGroups with max 3 Filters are supported.

Despite 'sorts' is an array, however, currently, only one sort parameter is supported.

In JS 'sort' it's possible to set as:

1. < propertyName > - returned results will be sorted by provided property name in 'ASCENDING' order. e.g: 'hs_object_id'
2. < stringified sort object > - returned results will be sorted by provided property name and sort direction. e.g: JSON.stringify({ propertyName: 'hs_object_id', direction: 'ASCENDING' }) or JSON.stringify({ propertyName: 'hs_object_id', direction: 'DESCENDING' })
3. < sort object > - returned results will be sorted by provided property name and sort direction. e.g: { propertyName: 'hs_object_id', direction: 'ASCENDING' } or { propertyName: 'hs_object_id', direction: 'DESCENDING' }

In TS works only the first two options.

`after` for initial search should be set as 0

```javascript
const filter = { propertyName: 'createdate', operator: 'GTE', value: Date.now() - 30 * 60000 }
const filterGroup = { filters: [filter] }
const sort = JSON.stringify({ propertyName: 'createdate', direction: 'DESCENDING' })
const query = 'test'
const properties = ['createdate', 'firstname', 'lastname']
const limit = 100
const after = 0

const publicObjectSearchRequest = {
    filterGroups: [filterGroup],
    sorts: [sort],
    query,
    properties,
    limit,
    after,
}

const result = await hubspotClient.crm.contacts.searchApi.doSearch(publicObjectSearchRequest)
console.log(JSON.stringify(result.body))
```

### Get all:

getAll method is available for all major objects (Companies, Contacts, Deals, LineItems, Products, Quotes & Tickets) and works like

```javascript
const allContacts = await hubspotClient.crm.contacts.getAll()
```

Please note that pagination is used under the hood to get all results.

### OAuth

#### Obtain your authorization url

```javascript
const clientId = 'your_client_id'
const redirectUri = 'take_me_to_the_ballpark'
const scope = 'some scopes'
const uri = hubspotClient.oauth.getAuthorizationUrl(clientId, redirectUri, scope)
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

### CMS

#### Get audit logs

```javascript
const auditLogsResponse = await hubspotClient.cms.auditLogs.defaultApi.getPage()
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
import * as hubspot from '@hubspot/api-client'
const hubspotClient = new hubspot.Client({ apiKey: YOUR_API_KEY, developerApiKey: YOUR_DEVELOPER_API_KEY })
```

## License

Apache 2.0

## Contributing

Install project dependencies with
```bash
npm install
```


You can run the tests by executing:
```bash
npm run test
```

You can check the TypeScript code by running:
```
npm run lint
```

If there is a linting error based on formatting, you can run the command below to auto-correct the formatting:
```
npm run prettier:write
```
