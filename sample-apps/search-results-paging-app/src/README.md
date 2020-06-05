# HubSpot-nodejs limiting handling and retry sample app

This is a sample app for the [hubspot-nodejs SDK](../../../../../).

Please see the documentation on [Creating an app in HubSpot](https://developers.hubspot.com/docs/api/creating-an-ap)

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

Intent of this sample is to show how to work with  HubSpot API rate limits and show how to use Retry client functionality. Sample shows 5 different ways of configuring hubspot client instance/'s depending of app needs:

1. One client instance with default bottleneck limiting config. Applicable for app's that: 
    - use only one client instance 
    - are not scalable
    - do not expect to have high loads to hubspot api
    
```javascript
const hubspotClient = new hubspot.Client()
```

2. One client instance with default bottleneck limiting config and three retries. Applicable for app's that: 
    - use only one client instance 
    - are not scalable
    - expect to have high loads to hubspot api

```javascript
const hubspotClient = new hubspot.Client({
    numberOfApiCallRetries: hubspot.NumberOfRetries.Three
})
```    
   
3. Client instances without bottleneck limiting and six retries. Applicable for app's that: 
    - use several client instance 
    - might be scalable
    - do not expect to have high loads to hubspot api   

```javascript
const hubspotClient = new hubspot.Client({
    useLimiter: false,
    numberOfApiCallRetries: hubspot.NumberOfRetries.Three
})
```  

4. Client instances with custom bottleneck limiting config that supports [clustering](https://www.npmjs.com/package/bottleneck#clustering) with Redis. Applicable for app's that: 
    - use several client instance 
    - are scalable
    - do not expect to have high loads to hubspot api     

```javascript
const hubspotClient = new hubspot.Client({
    limiterOptions: {
        /* Some basic options */
        maxConcurrent: CONCURRENCY_LIMIT,
        minTime: THROTTLING_DELAY_TIME,
        id: BOTTLENECK_ID, // All limiters with the same id will be clustered together
        /* Clustering options */
        datastore: 'ioredis', // or "redis"
        clearDatastore: false,
        clientOptions: {
            host: REDIS_HOST,
            port: REDIS_PORT
            // Redis client options
            // Using NodeRedis? See https://github.com/NodeRedis/node_redis#options-object-properties
            // Using ioredis? See https://github.com/luin/ioredis/blob/master/API.md#new-redisport-host-options
        },
        Redis
    }
})
```  

5. Client instances with custom bottleneck limiting config that supports [clustering](https://www.npmjs.com/package/bottleneck#clustering) with Redis and three retries. Applicable for app's that: 
    - use several client instance 
    - are scalable
    - expect to have high loads to hubspot api

```javascript
const hubspotClient = new hubspot.Client({
    limiterOptions: {
        /* Some basic options */
        maxConcurrent: CONCURRENCY_LIMIT,
        minTime: THROTTLING_DELAY_TIME,
        id: BOTTLENECK_ID, // All limiters with the same id will be clustered together
        /* Clustering options */
        datastore: 'ioredis', // or "redis"
        clearDatastore: false,
        clientOptions: {
            host: REDIS_HOST,
            port: REDIS_PORT
            // Redis client options
            // Using NodeRedis? See https://github.com/NodeRedis/node_redis#options-object-properties
            // Using ioredis? See https://github.com/luin/ioredis/blob/master/API.md#new-redisport-host-options
        },
        Redis
    },
    numberOfApiCallRetries: hubspot.NumberOfRetries.Three
})
```  

### Setup App

Make sure you have [Docker](https://www.docker.com/) installed.
Make sure you have [Docker Compose](https://docs.docker.com/compose/) installed.

### Configure

1. Copy .env.template to .env
2. Paste your HubSpot Client Id and HubSpot Client Secret as the value for HUBSPOT_CLIENT_ID and HUBSPOT_CLIENT_SECRET in .env

### Running

The best way to run this project (with the least configuration), is using docker cli.

```bash
docker-compose -f  ../../../docker-compose-search-results-paging.yml up --build
```
You should now be able to navigate to [http://localhost:3000](http://localhost:3000) and use the application. 

Application makes a Promise map of 200 clients and launches all of them in random order.
Additionally you can check console for logs. For batch execution logs are showing:
 - batch execution start
 - execution index of the client (selected randomly), iteration number (order number in which the client was launched) and requestTime for batch function. e.g { index: 188, iteration: 186, requestTime: 37425 }
 - batch execution end
