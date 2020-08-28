const _ = require('lodash')
const express = require('express')
const router = new express.Router()
const dbHelper = require('./db-helper')
const utils = require('./utils')

const EVENTS_COUNT_PER_PAGE = 25

const getEventForView = (event) => {
    const type = _.chain(event)
        .get('event_type')
        .split('.')
        .last()
        .value()
    const name = _.get(event, 'property_name')
    const value = _.get(event, 'property_value')

    return { type, name, value }
}

const getFullName = (contact) => {
    const firstName = _.get(contact, 'properties.firstname') || ''
    const lastName = _.get(contact, 'properties.lastname') || ''
    return `${firstName} ${lastName}`
}

const prepareContactsForView = (events, contacts) => {
    return _.reduce(
        events,
        (eventsForView, event) => {
            const contactId = _.get(event, 'object_id')

            if (_.isNil(eventsForView[contactId])) {
                const contact = _.find(contacts, { id: contactId.toString() })
                const name = contact ? getFullName(contact) : 'Deleted'
                eventsForView[contactId] = { name, events: [] }
            }

            const eventForView = getEventForView(event)
            eventsForView[contactId].events.push(eventForView)
            return eventsForView
        },
        {},
    )
}

const getPaginationConfig = async (offset) => {
    const totalCount = await dbHelper.getEventsCount()
    const pagesCount = Math.ceil(totalCount / EVENTS_COUNT_PER_PAGE)

    const rawPaginationConfig = _.map(Array(pagesCount), (v, index) => {
        const link = `/contacts/?offset=${index * EVENTS_COUNT_PER_PAGE}`
        const aClass = index * EVENTS_COUNT_PER_PAGE === offset ? 'active' : ''
        return { label: index + 1, link, aClass }
    })

    if (rawPaginationConfig.length < 2) return []

    return rawPaginationConfig.length === 2
        ? rawPaginationConfig
        : _.concat([{ label: '<<', link: '/contacts' }], rawPaginationConfig, [
              { label: '>>', link: `/contacts?offset=${(pagesCount - 1) * EVENTS_COUNT_PER_PAGE}` },
          ])
}

exports.getRouter = () => {
    router.get('/', async (req, res) => {
        try {
            const offset = req.query.offset ? parseInt(req.query.offset) : 0
            const limit = req.query.limit ? parseInt(req.query.limit) : EVENTS_COUNT_PER_PAGE

            const contactIds = await dbHelper.getContactIds(offset, limit)
            const paginationConfig = await getPaginationConfig(offset)

            const batchRead = {
                properties: [],
                inputs: _.map(contactIds, (contactId) => {
                    return { id: contactId }
                }),
            }

            console.log('Calling hubspotClient.crm.contacts.batchApi.read API method. Retrieve contacts.')
            // Get a batch of contacts by id's
            // POST /crm/v3/objects/contacts/batch/read
            // https://developers.hubspot.com/docs/api/crm/contacts
            const contactsResponse = await req.hubspotClient.crm.contacts.batchApi.read(batchRead)
            utils.logJson(contactsResponse.body)

            const events = await dbHelper.getEvents(contactIds)
            const contacts = prepareContactsForView(events, contactsResponse.body.results)
            await dbHelper.setAllWebhooksEventsShown()

            res.render('contacts', { contacts, paginationConfig })
        } catch (e) {
            console.error(e)
            res.redirect(`/error?msg=${e.message}`)
        }
    })

    return router
}
