# hubspot-api-nodejs

NodeJS v3 [HubSpot API](https://developers.hubspot.com/docs/api/overview) SDK(Client) files

### Sample apps

Please, take a look at our [Sample apps](https://github.com/HubSpot/sample-apps-list)

## Installing

```shell
npm install @hubspot/api-client
```

## Instantiate client

```javascript
const hubspot = require('@hubspot/api-client')
const hubspotClient = new hubspot.Client({ accessToken: YOUR_ACCESS_TOKEN })
```

For ES modules
```javascript
import { Client } from "@hubspot/api-client";
const hubspotClient = new Client({ accessToken: YOUR_ACCESS_TOKEN });
```
You'll need to create a [private app](https://developers.hubspot.com/docs/api/private-apps) to get your access token or you can obtain [OAuth2 access token](https://developers.hubspot.com/docs/api/working-with-oauth).

You can provide developer API key. There is no need to create separate client instances for using endpoints with API key and Developer API key support.

```javascript
const hubspotClient = new hubspot.Client({ developerApiKey: YOUR_DEVELOPER_API_KEY })
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
hubspotClient.oauth.tokensApi
    .createToken('refresh_token', undefined, undefined, YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, YOUR_REFRESH_TOKEN)
    .then((results) => {
        console.log(results)

        // this assigns the accessToken to the client, so your client is ready
        // to use
        hubspotClient.setAccessToken(results.accessToken)

        return hubspotClient.crm.companies.basicApi.getPage()
    })
```

## Usage

All methods return a [promise]. The success includes the serialized to JSON body and response objects. Use the API method via:

```javascript
hubspotClient.crm.contacts.basicApi
    .getPage(limit, after, properties, propertiesWithHistory, associations, archived)
    .then((results) => {
        console.log(results)
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

const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj)
const createCompanyResponse = await hubspotClient.crm.companies.basicApi.create(companyObj)
await hubspotClient.crm.companies.associationsApi.create(
    createCompanyResponse.id,
    'contacts',
    createContactResponse.id,
    'company_to_contact'
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

await hubspotClient.crm.deals.batchApi.update({ inputs: [dealObj, dealObj2] })
```

### {EXAMPLE} Import Contacts:

#### first option with fs.ReadStream

```javascript
const fs = require('fs')

const fileName = 'test.csv'

const importRequest = {
    name: 'import(' + fileName + ')',
    files: [
        {
            fileName: fileName,
            fileFormat: 'CSV',
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
                ]
            }
        }
    ]
}
const importFileReadStream = fs.createReadStream(fileName)
const response = await  hubspotClient.crm.imports.coreApi.create(importFileReadStream, JSON.stringify(importRequest));

console.log(JSON.stringify(response))
```

#### second option with RequestDetailedFile

```javascript
const fs = require('fs')

const fileName = 'test.csv'
const importRequest = {
    name: 'import(' + fileName + ')',
    files: [
        {
            fileName: fileName,
            fileFormat: 'CSV',
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
                ]
            }
        }
    ]
}

const importFileConfig = {
    value: fs.readFileSync(fileName, "utf8"),
    options: {
        filename: fileName,
        contentType: 'text/csv',
    },
}
const result = await  hubspotClient.crm.imports.coreApi.create(importFileConfig, JSON.stringify(importRequest));

console.log(JSON.stringify(result))
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
const filter = { propertyName: 'createdate', operator: 'GTE', value: `${Date.now() - 30 * 60000}` }
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
console.log(JSON.stringify(result))
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
return hubspotClient.oauth.tokensApi.createToken(
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

#### get contacts 

```javascript
const response = await hubspotClient.apiRequest({
    method: 'get',
    path: '/crm/v3/objects/contacts',
})
const json = await response.json()
console.log(json)
```

#### upload a file

```javascript
const formData = new FormData();
const options = {
// some options
};
formData.append("folderPath", '/');
formData.append("options", JSON.stringify(options));
formData.append("file", fs.createReadStream('file path'));

const response = await hubspotClient.apiRequest({
    method: 'POST',
    path: '/filemanager/api/v3/files/upload',
    body: formData,
    defaultJson: false
});

console.log(response);
```

## Typescript

You may use this library in your Typescript project via:

```typescript
import * as hubspot from '@hubspot/api-client'
const hubspotClient = new hubspot.Client({ accessToken: YOUR_ACCESS_TOKEN , developerApiKey: YOUR_DEVELOPER_API_KEY })
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
