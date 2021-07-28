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
  
## [1.1.0-beta] - 2020-04-24
  
### Added
  
  - New updateBatch method to webhooks.subscriptionsApi
  - updated timelineModels

### Updated

  - extended webhooks-sample-app to setup application webhooks configuration after successful authorization
  - documents path in sample-app
  
### Fixed

  - 'apiKey' authorization for webhooks clients  
  
## [2.0.0] - 2020-05-06

### Breaking changes:

- Updated crm.imports.coreApi client method names: getAll => getPage

## [2.0.1] - 2020-05-25

### Added:

- validateSignature method to webhooks  

## [2.1.0] - 2020-06-18
  
### Added
  
  - auditLogs, domains, performance, urlRedirects and siteSearch cms clients
  - imports-contacts-app sample
  - limiter for search methods
  - search-results-paging-app sample

### Updated

  - default limiter options: increased `maxConcurrent` to 6, added `id` - 'hubspot-client-limiter'
  - retry functionality to overcome secondly search limit failures 
  
## [2.1.1] - 2020-07-24
  
### Added
  
  - trello-integration-app sample
  - 'Search Contacts' example to README.MD

### Fixed

  - fixed initial initialization for webhooks-app
  - fixed webhook verification for webhooks-app
  - `getAll` methods for CRM objects (for clients with disabled limiter)
  - 'Create Contact, Company and associate created objects' example in README.md
  
## [3.0.0] - 2020-08-28
  
### Added
  
  - differentiation between Developer API key and API key. There is no need to create separate client instances for using endpoints with API key and Developer API key support.  

### Updated

  - SubscriptionPatchRequest model (replace `enabled` with `active` property)
  - removed optional attribute for some parameters in crm clients methods
  - changed parameters order for all crm.**.batchApi.read methods
  - removed all create/update methods from CRM quotes
  - response types extended for all crm.**.batchApi.create/read/update methods

## [3.1.0] - 2020-12-15

### Added

  - crm.objects and crm.schemas clients  
  - cms.hubdb clients
  - cms.blogs.authors, cms.blogs.blogPosts and cms.blogs.tags clients
  
## [3.2.0] - 2021-01-26

### Added

  - automation.actions client

## [3.2.1] - 2021-01-26

### Fixed

- fix batch methods in `cms.blogs` API clients

## [3.2.6] - 2021-01-28

### Fixed

- fixed npm build

## [3.3.0] - 2021-02-10

### Added

  - crm.extensions.accounting API client
  - crm.extensions.calling API client
  - crm.extensions.videoconferencing API client
  - crm.objects.feedbackSubmissions API client
  - marketing.transactional API client

## [3.4.0] - 2021-02-16

### Added

  - conversations.visitorIdentification API client
  - events API client

## [3.4.1] - 2021-02-17

### Fixed

  - fix generateToken method in `conversations.visitorIdentification` API clients

## [4.0.0] - 2021-06-22

### Fixed

  - rename method "search" => "doSearch" crm.objects.searchApi API clients
  - regenerate all clients

## [4.1.0] - 2021-07-28

### Added

  - communicationPreferences API client

[unreleased]: https://github.com/HubSpot/hubspot-api-nodejs/compare/v4.1.0...HEAD
[1.0.0-beta]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v1.0.0-beta
[1.1.0-beta]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v1.1.0-beta
[2.0.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v2.0.0
[2.0.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v2.0.1
[2.1.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v2.1.0
[2.1.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v2.1.1
[3.0.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v3.0.0
[3.1.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v3.1.0
[3.2.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v3.2.0
[3.2.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v3.2.1
[3.2.6]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v3.2.6
[3.3.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v3.3.0
[3.4.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v3.4.0
[3.4.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v3.4.1
[4.0.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v4.0.0
[4.1.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v4.1.0
