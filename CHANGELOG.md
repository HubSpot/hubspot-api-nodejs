# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0-beta] - 2020-04-18

### Added

- This CHANGELOG.md file.

### Breaking changes:

- Updated clients method names:
  1. archiveBatch => archive (crm.associations.batchApi)
  2. createBatch => create (crm.associations.batchApi)
  3. readBatch => read (crm.associations.batchApi)
  4. getTypes => getAll (crm.associations.typesApi)
  5. archiveAssociation => archive (crm.companies.associationsApi, crm.contacts.associationsApi, crm.deals.associationsApi, crm.lineItems.associationsApi, crm.products.associationsApi, crm.quotes.associationsApi, crm.tickets.associationsApi)
  6. createAssociation => create (crm.companies.associationsApi, crm.contacts.associationsApi, crm.deals.associationsApi, crm.lineItems.associationsApi, crm.products.associationsApi, crm.quotes.associationsApi, crm.tickets.associationsApi)
  7. getAssociations => getAll (crm.companies.associationsApi, crm.contacts.associationsApi, crm.deals.associationsApi, crm.lineItems.associationsApi, crm.products.associationsApi, crm.quotes.associationsApi, crm.tickets.associationsApi)
  8. archiveBatch => archive (crm.companies.batchApi, crm.contacts.batchApi, crm.deals.batchApi, crm.lineItems.batchApi, crm.products.batchApi, crm.quotes.batchApi, crm.tickets.batchApi)
  9. createBatch => create (crm.companies.batchApi, crm.contacts.batchApi, crm.deals.batchApi, crm.lineItems.batchApi, crm.products.batchApi, crm.quotes.batchApi, crm.tickets.batchApi)
  10. readBatch => read (crm.companies.batchApi, crm.contacts.batchApi, crm.deals.batchApi, crm.lineItems.batchApi, crm.products.batchApi, crm.quotes.batchApi, crm.tickets.batchApi)
  11. updateBatch => update (crm.companies.batchApi, crm.contacts.batchApi, crm.deals.batchApi, crm.lineItems.batchApi, crm.products.batchApi, crm.quotes.batchApi, crm.tickets.batchApi)
  12. archiveEventTemplate => archive (crm.timeline.templatesApi)
  13. createEventTemplate => create (crm.timeline.templatesApi)
  14. getAllEventTemplates => getAll (crm.timeline.templatesApi)
  15. getEventTemplateById => getById (crm.timeline.templatesApi)
  16. updateEventTemplate => update (crm.timeline.templatesApi)
  17. archiveEventTemplateToken => archive (crm.timeline.tokensApi)
  18. createEventTemplateToken => create (crm.timeline.tokensApi)
  19. updateEventTemplateToken => update (crm.timeline.tokensApi)
  20. clearSettings => clear (webhooks.settingsApi)
  21. configureSettings => configure (webhooks.settingsApi)
  22. getSettings => getAll (webhooks.settingsApi)
  23. deleteSubscription => archive ()
  24. getSubscription => getById (webhooks.subscriptionsApi)
  25. getSubscriptions => getAll (webhooks.subscriptionsApi)
  26. updateSubscription => update (webhooks.subscriptionsApi)

[unreleased]: https://github.com/HubSpot/hubspot-api-nodejs/compare/v1.0.0-beta...HEAD
[1.0.0-beta]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v1.0.0-beta
