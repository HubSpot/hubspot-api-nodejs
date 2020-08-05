const _ = require('lodash')
const Promise = require('bluebird')
const utils = require('./utils')

const APPLICATION_ID = process.env.HUBSPOT_APPLICATION_ID
const WEBHOOKS_SUBSCRIPTIONS = [
    {
        eventType: 'contact.propertyChange',
        propertyName: 'firstname',
    },
    {
        eventType: 'contact.propertyChange',
        propertyName: 'lastname',
    },
    {
        eventType: 'contact.creation',
    },
    {
        eventType: 'contact.deletion',
    },
]

let hubspotClient

const getAllWebhooksSubscriptions = async () => {
    console.log(
        'Calling hubspotClient.webhooks.subscriptionsApi.getAll API method. Retrieve all webhooks subscriptions.',
    )
    // Retrieve all webhooks subscriptions for application
    // GET /webhooks/v3/{appId}/subscriptions
    // https://developers.hubspot.com/docs/api/webhooks
    const response = await hubspotClient.webhooks.subscriptionsApi.getAll(APPLICATION_ID)
    utils.logJson(response.body)

    return response.body.results
}

const createWebhooksSubscription = async (webhooksSubscription) => {
    console.log('Calling hubspotClient.webhooks.subscriptionsApi.create API method. Create webhooks subscription.')
    // Create webhooks subscription
    // POST /webhooks/v3/{appId}/subscriptions
    // https://developers.hubspot.com/docs/api/webhooks
    const contactsResponse = await hubspotClient.webhooks.subscriptionsApi.create(APPLICATION_ID, webhooksSubscription)
    utils.logJson(contactsResponse.body)

    return contactsResponse.body
}

const updateAllWebhooksSubscriptions = async (webhooksSubscriptions, active) => {
    const inputs = _.map(webhooksSubscriptions, (webhooksSubscription) => ({ id: webhooksSubscription.id, active }))

    if (_.isEmpty(inputs)) {
        return Promise.resolve()
    }

    console.log('Calling hubspotClient.webhooks.subscriptionsApi.updateBatch API method. Update webhooks subscription.')
    // Update webhooks subscriptions
    // POST /webhooks/v3/{appId}/subscriptions/batch/update
    // https://developers.hubspot.com/docs/api/webhooks
    const response = await hubspotClient.webhooks.subscriptionsApi.updateBatch(APPLICATION_ID, { inputs })
    utils.logJson(response.body)
}

const configureWebhooksSubscriptionsSettings = async (targetUrl) => {
    console.log(
        'Calling hubspotClient.webhooks.settingsApi.configure API method. Configure webhooks subscriptions settings.',
    )
    // Configure webhooks subscriptions settings
    // POST /webhooks/v3/{appId}/settings
    // https://developers.hubspot.com/docs/api/webhooks
    const response = await hubspotClient.webhooks.settingsApi.configure(APPLICATION_ID, { targetUrl })
    utils.logJson(response.body)
}

const getWebhooksSubscriptionsToActivate = (allWebhooksSubscriptions) =>
    _.filter(allWebhooksSubscriptions, (webhooksSubscription) =>
        _.find(WEBHOOKS_SUBSCRIPTIONS, { eventType: webhooksSubscription.eventType }),
    )

const getWebhooksSubscriptionsToDeActivate = (allWebhooksSubscriptions) => _.filter(allWebhooksSubscriptions, 'active')

const getWebhooksSubscriptionsToCreate = (allWebhooksSubscriptions) =>
    WEBHOOKS_SUBSCRIPTIONS.filter(
        (webhooksSubscription) => !_.find(allWebhooksSubscriptions, webhooksSubscription),
    ).map((webhooksSubscription) => _.assign({}, webhooksSubscription, { active: true }))

const createNotExistedWebhooksSubscriptions = (allWebhooksSubscriptions) => {
    const webhooksSubscriptionsToCreate = getWebhooksSubscriptionsToCreate(allWebhooksSubscriptions)

    return Promise.map(webhooksSubscriptionsToCreate, createWebhooksSubscription)
}

const setupClient = (client) => {
    hubspotClient = client
}

exports.setupWebhooksSubscriptions = async (url, hubspotClient) => {
    console.log('Started Webhooks Subscriptions setup')
    setupClient(hubspotClient)
    const allWebhooksSubscriptions = await getAllWebhooksSubscriptions()
    const webhooksSubscriptionsToDeActivate = getWebhooksSubscriptionsToDeActivate(allWebhooksSubscriptions)
    await updateAllWebhooksSubscriptions(webhooksSubscriptionsToDeActivate, false)
    await configureWebhooksSubscriptionsSettings(`${url}/webhooks`)
    const webhooksSubscriptionsToActivate = getWebhooksSubscriptionsToActivate(allWebhooksSubscriptions)
    await updateAllWebhooksSubscriptions(webhooksSubscriptionsToActivate, true)
    await createNotExistedWebhooksSubscriptions(allWebhooksSubscriptions)
    console.log('Finished Webhooks Subscriptions setup')
}
