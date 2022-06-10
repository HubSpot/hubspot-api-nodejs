# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/HubSpot/hubspot-api-nodejs/compare/7.0.1...HEAD)

## [7.0.1] - 2022-06-10

### Fixed

- `crm()->feedbackSubmissions()` method names

## [7.0.0] - 2022-06-07

### Added

- crm()->quotes()->publicObjectApi()
- crm()->feedbackSubmissions()->publicObjectApi()
- added idProperty to update and getById methods of crm()->contacts()->basicApi()
- support text/html response

### Updated

- dependenccies (typescript to 4.7.3 and ts-node to 10.8.1)

## [6.0.1] - 2022-05-12

### Added

- ability to change base url
- ability to set default headers

### Fixed

- hubspot.apiRequest

## [6.0.1-beta.6] - 2022-04-14

### Added

- `crm.companies.publicObjectApi`
- `crm.contacts.publicObjectApi`
- `crm.deals.publicObjectApi`
- `crm.lineItems.publicObjectApi`
- `crm.objects.calls.publicObjectApi`
- `crm.objects.publicObjectApi`
- `crm.objects.emails.publicObjectApi`
- `crm.objects.meetings.publicObjectApi`
- `crm.objects.notes.publicObjectApi`
- `crm.objects.tasks.publicObjectApi`
- `crm.products.publicObjectApi`
- `crm.tickets.publicObjectApi`
- add field "values" to all CRM objects `Filter`

## [6.0.1-beta5] - 2022-04-08

### Added

- add to `cms.blogs.authors.blogAuthorsApi` Language methods
- add to `cms.blogs.blogPosts.blogPostsApi` Language methods
- add to `cms.blogs.tags.blogTagsApi` Language methods

### Update

 - rename crm.pipelines.pipelineStagesApi.getCrmV3PipelinesObjectTypePipelineIdAudit() => crm.pipelines.pipelineStagesApi.getAudit()
 - rename crm.pipelines.pipelinesApi.getCrmV3PipelinesObjectTypePipelineIdStagesStageIdAudit() => crm.pipelines.pipelinesApi.getAudit()

## [6.0.1-beta4] - 2022-03-29

### Added

- `cms.sourceCode` API client
- `crm.objects.calls` API client
- `crm.objects.emails` API client
- `crm.objects.meetings` API client
- `crm.objects.notes` API client
- `crm.objects.tasks` API client
- `marketing.events` API client
- `settings.users` API client

### Fixed

 - fixed TimelineEvents
 - fixed Webhooks double appId

### Update

 - rename crm.contants.gdpr.postCrmV3ObjectsContactsGdprDelete() => crm.contants.gdpr.purge()
 - rename crm.objects.gdpr.postCrmV3ObjectsContactsGdprDelete() => crm.objects.gdpr.purge()

## [6.0.1-beta3] - 2022-02-18

### Added

- apiRequest()

### Update

 - Regenerate Codegen

## [6.0.1-beta2] - 2022-02-09

### Fixed 

- autification configuration

## [6.0.1-beta1] - 2022-02-03

### Added

- webhooks.validateSignature()

## [6.0.1-beta] - 2022-01-31

### Fixed

- Iterable middlewares 

## [6.0.0-beta] - 2022-01-27

### Update (breaking changes)

- Migrate from request to node-fetch
- Rewrite [Client](src/client.ts)
- `crm.objects.feedbackSubmissions` => `crm.feedbackSubmissions`

## [5.0.0] - 2021-09-14

### Added

- `crm.objects.gdprApi` API client
- `crm.contacts.gdprApi` API client

### Fixed (breaking changes)

- `oauth()` fully regenerated
- `cms.auditLogs.defaultApi` => `cms.auditLogs.auditLogsApi`
- `cms.blogs.authors.defaultApi` => `cms.blogs.authors.authorApi`
- `cms.blogs.blogPosts.defaultApi` => `cms.blogs.blogPosts.blogPostApi`
- `cms.blogs.tags.defaultApi` => `cms.blogs.tags.tagApi`
- `cms.performance.defaultApi` => `cms.performance.publicPerformanceApi`
- `cms.siteSearch.defaultApi` => `cms.siteSearch.publicApi`
- `crm.imports.defaultApi` => `crm.imports.publicImportsApi`
- `crm.owners.defaultApi` => `crm.owners.ownersApi`
- `crm.schemas.defaultApi` => `crm.schemas.publicObjectSchemasApi` and `crm.schemas.coreApi`
- `marketing.transactional.defaultApi` => `marketing.transactional.publicSmtpTokensApi` and `marketing.transactional.singleSendApi`

## [4.1.0] - 2021-07-28

### Added

  - communicationPreferences API client

## [4.0.0] - 2021-06-22

### Fixed

  - rename method "search" => "doSearch" crm.objects.searchApi API clients
  - regenerate all clients

## [3.4.1] - 2021-02-17

### Fixed

  - fix generateToken method in `conversations.visitorIdentification` API clients

## [3.4.0] - 2021-02-16

### Added

  - conversations.visitorIdentification API client
  - events API client

## [3.3.0] - 2021-02-10

### Added

  - crm.extensions.accounting API client
  - crm.extensions.calling API client
  - crm.extensions.videoconferencing API client
  - crm.objects.feedbackSubmissions API client
  - marketing.transactional API client

## [3.2.6] - 2021-01-28

### Fixed

- fixed npm build

## [3.2.1] - 2021-01-26

### Fixed

- fix batch methods in `cms.blogs` API clients

## [3.2.0] - 2021-01-26

### Added

  - automation.actions client

## [3.1.0] - 2020-12-15

### Added

  - crm.objects and crm.schemas clients  
  - cms.hubdb clients
  - cms.blogs.authors, cms.blogs.blogPosts and cms.blogs.tags clients

## [3.0.0] - 2020-08-28
  
### Added
  
  - differentiation between Developer API key and API key. There is no need to create separate client instances for using endpoints with API key and Developer API key support.  

### Updated

  - SubscriptionPatchRequest model (replace `enabled` with `active` property)
  - removed optional attribute for some parameters in crm clients methods
  - changed parameters order for all crm.**.batchApi.read methods
  - removed all create/update methods from CRM quotes
  - response types extended for all crm.**.batchApi.create/read/update methods

## [2.1.1] - 2020-07-24
  
### Added
  
  - trello-integration-app sample
  - 'Search Contacts' example to README.MD

### Fixed

  - fixed initial initialization for webhooks-app
  - fixed webhook verification for webhooks-app
  - `getAll` methods for CRM objects (for clients with disabled limiter)
  - 'Create Contact, Company and associate created objects' example in README.md

## [2.1.0] - 2020-06-18
  
### Added
  
  - auditLogs, domains, performance, urlRedirects and siteSearch cms clients
  - imports-contacts-app sample
  - limiter for search methods
  - search-results-paging-app sample

### Updated

  - default limiter options: increased `maxConcurrent` to 6, added `id` - 'hubspot-client-limiter'
  - retry functionality to overcome secondly search limit failures 

## [2.0.1] - 2020-05-25

### Added:

- validateSignature method to webhooks 

## [2.0.0] - 2020-05-06

### Breaking changes:

- Updated crm.imports.coreApi client method names: getAll => getPage

## [1.1.0-beta] - 2020-04-24
  
### Added
  
  - New updateBatch method to webhooks.subscriptionsApi
  - updated timelineModels

### Updated

  - extended webhooks-sample-app to setup application webhooks configuration after successful authorization
  - documents path in sample-app
  
### Fixed

  - 'apiKey' authorization for webhooks clients

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

[unreleased]: https://github.com/HubSpot/hubspot-api-nodejs/compare/7.0.1...HEAD
[1.0.0-beta]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v1.0.0-beta
[1.1.0-beta]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/v1.1.0-beta
[2.0.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/2.0.1
[2.1.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/2.1.0
[2.1.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/2.1.1
[3.1.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/3.1.0
[3.2.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/3.2.0
[3.2.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/3.2.1
[3.2.6]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/3.2.6
[3.3.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/3.3.0
[3.4.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/3.4.0
[3.4.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/3.4.1
[4.0.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/4.0.0
[4.1.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/4.1.0
[5.0.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/5.0.0
[6.0.0-beta]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/6.0.0-beta
[6.0.1-beta]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/6.0.1-beta
[6.0.1-beta1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/6.0.1-beta1
[6.0.1-beta2]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/6.0.1-beta2
[6.0.1-beta3]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/6.0.1-beta3
[6.0.1-beta4]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/6.0.1-beta4
[6.0.1-beta5]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/6.0.1-beta5
[6.0.1-beta.6]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/6.0.1-beta.6
[6.0.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/6.0.1
[7.0.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/7.0.0
[7.0.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/7.0.1
