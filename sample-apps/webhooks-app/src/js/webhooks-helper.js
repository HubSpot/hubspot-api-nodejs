const _ = require('lodash')
const utils = require('./utils')
const hubspot = require('../../../..')

const APPLICATION_ID = process.env.HUBSPOT_APPLICATION_ID
const DEVELOPER_API_KEY = process.env.HUBSPOT_DEVELOPER_API_KEY

let hubspotClient

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

const addIdForExistedWebhooksSubscriptions = (webhooksSubscriptions, allWebhooksSubscriptions) => {
    webhooksSubscriptions.forEach((webhooksSubscription) => {
        const existedWebhooksSubscription = _.find(allWebhooksSubscriptions, webhooksSubscription)
        webhooksSubscription.id = _.get(existedWebhooksSubscription, 'id')
    })
}

const updateAllWebhooksSubscriptions = async (webhooksSubscriptions, active) => {
    const inputs = _.map(webhooksSubscriptions, (webhooksSubscription) => ({ id: webhooksSubscription.id, active }))

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

const createNotExistedWebhooksSubscriptions = (webhooksSubscriptions) =>
    webhooksSubscriptions.forEach(async (webhooksSubscription) => {
        if (_.isNil(webhooksSubscription.id)) {
            await createWebhooksSubscription(_.assign({}, webhooksSubscription, { active: true }))
        }
    })

exports.setupWebhooksSubscriptions = async (url) => {
    console.log('Started Webhooks Subscriptions setup')

    if (_.isNil(hubspotClient)) {
        hubspotClient = new hubspot.Client({ apiKey: DEVELOPER_API_KEY })
    }

    const webhooksSubscriptions = _.cloneDeep(WEBHOOKS_SUBSCRIPTIONS)
    const allWebhooksSubscriptions = await getAllWebhooksSubscriptions()

    if (!_.isEmpty(allWebhooksSubscriptions)) {
        addIdForExistedWebhooksSubscriptions(webhooksSubscriptions, allWebhooksSubscriptions)
        await updateAllWebhooksSubscriptions(allWebhooksSubscriptions, false)
    }

    await configureWebhooksSubscriptionsSettings(`${url}/webhooks`)

    if (!_.isEmpty(allWebhooksSubscriptions)) {
        addIdForExistedWebhooksSubscriptions(webhooksSubscriptions, allWebhooksSubscriptions)
        await updateAllWebhooksSubscriptions(allWebhooksSubscriptions, true)
    }

    await createNotExistedWebhooksSubscriptions(webhooksSubscriptions)

    console.log('Finished Webhooks Subscriptions setup')
}
