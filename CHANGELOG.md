# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/HubSpot/hubspot-api-nodejs/compare/12.0.1...HEAD)

## [13.0.0-beta.0] - 2025-02-24

### Updates

- Added the ability to add custom middleware through the `config.middleware` option.
- Migrated to `typescript-eslint`.
- Updated `prettier`.

## [12.0.1] - 2024-09-23

## Fixes

- Fixed build errors.

## [12.0.0] - 2024-09-23

## CMS

- Changed type from `string` to laguages enum in `cms/blogs/blog_posts/models/AttachToLangPrimaryRequestVNext::language`.
- Added parameter `campaignName` to `cms/blogs/blog_posts/models/ContentLanguageVariation`.
- Added parameter `breakpointStyles` to `cms/blogs/blog_posts/models/Styles`.
- Added parameter `name` to `cms.hubdb.rowsApi.cloneDraftTableRow()`.
- Added parameter `archived` to `cms.hubdb.rowsApi.getDraftTableRowById()` and `cms.hubdb.rowsApi.getTableRow()`.
- Added parameters `offset` and `archived` to `cms.hubdb.rowsApi.getTableRows()` and `cms.hubdb.rowsApi.readDraftTableRows()`.
- Changed the response object type from  `CollectionResponseWithTotalHubDbTableRowV3ForwardPaging` to `UnifiedCollectionResponseWithTotalBaseHubDbTableRowV3` for `cms.hubdb.rowsApi.getTableRows()` and `cms.hubdb.rowsApi.readDraftTableRows()`.
- Changed parameter `batchInputString: BatchInputString` to `batchInputHubDbTableRowBatchCloneRequest: BatchInputHubDbTableRowBatchCloneRequest` in `cms.hubdb.rowsApi.cloneDraftTableRow()`.
- Added parameter `contentType` before `archived` parameter to `cms.hubdb.tablesApi.getAllTables()`.
- Changed parameters from `tableIdOrName: string, includeForeignIds?: boolean, archived?: boolean` to `tableIdOrName: string, isGetLocalizedSchema?: boolean, archived?: boolean, includeForeignIds?: boolean` of `cms.hubdb.tablesApi.getDraftTableDetailsById()` and `cms.hubdb.tablesApi.getTableDetails()`.
- Changed parameters from `tableIdOrName: string, hubDbTableV3Request: HubDbTableV3Request, includeForeignIds?: boolean, archived?: boolean` to `tableIdOrName: string, hubDbTableV3Request: HubDbTableV3Request, isGetLocalizedSchema?: boolean, archived?: boolean, includeForeignIds?: boolean` of `cms.hubdb.tablesApi.updateDraftTable()`.
- Added parameters `createdByUserId`, `updatedBy`, `updatedByUserId`, `createdAt`, `createdBy` and `updatedAt` to `cms/hubdb/models/Column` and `cms/hubdb/models/Option`.
- Added the parameter `isHubspotDefined` to `cms/hubdb/models/HubDbTableCloneRequest`.
- Removed `cms.source_code.ExtractApi.extractByPath()` method.
- Added `doAsync()` and `getAsyncStatus()` methods to `cms.source_code.ExtractApi`.
- Removed `cms.source_code.sourceCodeExtractApi`.

## CRM

- Added `crm.associassociations.v4.reportApi`.
- Added parameter `idProperty` to `crm.companies.basicApi.getById()`, `crm.companies.basicApi.update()`, `crm.deals.basicApi.getById()`, `crm.deals.basicApi.update()`.
- Added method `upsert` to `crm.companies.batchApi`, `crm.contacts.batchApi`, `crm.deals.batchApi`, `crm.line_items.batchApi`, `crm.objects.batchApi`, `crm.objects.calls.batchApi`, `crm.objects.communications.batchApi`, `crm.objects.emails.batchApi`, `crm.objects.meetings.batchApi`, `crm.objects.notes.batchApi`, `crm.objects.postal_mail.batchApi`, `crm.objects.tasks.batchApi`, `crm.objects.taxes.batchApi`, `crm.products.batchApi`, `crm.quotes.batchApi`, `crm.tickets.batchApi`
- Removed `crm.companies.GDPRApi`, `crm.deals.GDPRApi`, `crm.line_items.GDPRApi`, `crm.objects.GDPRApi`, `crm.objects.calls.GDPRApi`, `crm.objects.communications.GDPRApi`, `crm.objects.emails.GDPRApi`, `crm.objects.feedback_submissions.GDPRApi`, `crm.objects.goals.GDPRApi`, `crm.objects.meetings.GDPRApi`, `crm.objects.notes.GDPRApi`, `crm.objects.postal_mail.GDPRApi`, `crm.objects.tasks.GDPRApi`, `crm.objects.taxes.GDPRApi`, `crm.products.GDPRApi`, `crm.quotes.GDPRApi`, `crm.tickets.GDPRApi`
- Removed `crm.line_items.publicObjectApi`, `crm.objects.publicObjectApi`, `crm.objects.calls.publicObjectApi`, `crm.objects.communications.publicObjectApi`, `crm.objects.emails.publicObjectApi`, `crm.objects.feedback_submissions.publicObjectApi`, `crm.objects.goals.publicObjectApi`, `crm.objects.meetings.publicObjectApi`, `crm.objects.notes.publicObjectApi`, `crm.objects.postal_mail.publicObjectApi`, `crm.objects.tasks.publicObjectApi`, `crm.objects.taxes.publicObjectApi`, `crm.products.publicObjectApi`, `crm.quotes.publicObjectApi`
- Renamed `publicObjectApi` to `mergeApi` in `crm.companies`, `crm.contacts`, `crm.deals` and `crm.tickets`.
- Made `associationCategory` and `associationTypeId` parameters nullable in `crm/companies/models/AssociationSpec`, `crm/contacts/models/AssociationSpec`, `crm/deals/models/AssociationSpec`, `crm/tickets/models/AssociationSpec`.
- Made `types` and `to` parameters nullable in `crm/companies/models/PublicAssociationsForObject`, `crm/contacts/models/PublicAssociationsForObject`, `crm/deals/models/PublicAssociationsForObject`, `crm/tickets/models/PublicAssociationsForObject`.
- Made `id` parameter nullable in `crm/companies/models/PublicObjectId`, `crm/contacts/models/PublicObjectId`, `crm/deals/models/PublicObjectId` and `crm/tickets/models/PublicObjectId`.
- Made `limit`, `after`, `sorts`, `properties` and `filterGroups` parameters nullable in `crm/companies/models/PublicObjectSearchRequest`, `crm/contacts/models/PublicObjectSearchRequest`, `crm/deals/models/PublicObjectSearchRequest`, `crm/line_items/models/PublicObjectSearchRequest`, `crm/objects/models/PublicObjectSearchRequest`, `crm/objects/calls/models/PublicObjectSearchRequest`, `crm/objects/communications/models/PublicObjectSearchRequest`, `crm/objects/emails/models/PublicObjectSearchRequest`, `crm/objects/feedback_submissions/models/PublicObjectSearchRequest`, `crm/objects/goals/models/PublicObjectSearchRequest`, `crm/objects/leads/models/PublicObjectSearchRequest`, `crm/objects/postal_mail/models/PublicObjectSearchRequest`, `crm/objects/tasks/models/PublicObjectSearchRequest`, `crm/objects/taxes/models/PublicObjectSearchRequest`, `crm/products/models/PublicObjectSearchRequest`, `crm/quotes/models/PublicObjectSearchRequest` and `crm/tickets/models/PublicObjectSearchRequest`.
- Added parameter `objectWriteTraceId` to `crm/companies/models/SimplePublicObjectBatchInput`, `crm/companies/models/SimplePublicObjectInput`, `crm/companies/models/SimplePublicObjectInputForCreate`, `crm/contacts/models/SimplePublicObjectBatchInput`, `crm/contacts/models/SimplePublicObjectInput`, `crm/contacts/models/SimplePublicObjectInputForCreate`, `crm/deals/models/SimplePublicObjectBatchInput`, `crm/deals/models/SimplePublicObjectInput`, `crm/deals/models/SimplePublicObjectInputForCreate`, `crm/line_items/models/SimplePublicObjectBatchInput`, `crm/line_items/models/SimplePublicObjectInput`, `crm/line_items/models/SimplePublicObjectInputForCreate`, `crm/objects/models/SimplePublicObjectBatchInput`, `crm/objects/models/SimplePublicObjectInput`, `crm/objects/models/SimplePublicObjectInputForCreate`, `crm/objects/calls/models/SimplePublicObjectBatchInput`, `crm/objects/calls/models/SimplePublicObjectInput`, `crm/objects/calls/models/SimplePublicObjectInputForCreate`,`crm/objects/communications/models/SimplePublicObjectBatchInput`, `crm/objects/communications/models/SimplePublicObjectInput`, `crm/objects/communications/models/SimplePublicObjectInputForCreate`, `crm/objects/emails/models/SimplePublicObjectBatchInput`, `crm/objects/emails/models/SimplePublicObjectInput`, `crm/objects/emails/models/SimplePublicObjectInputForCreate`, `crm/objects/leads/models/SimplePublicObjectBatchInput`, `crm/objects/leads/models/SimplePublicObjectInput`, `crm/objects/leads/models/SimplePublicObjectInputForCreate`, `crm/objects/leads/models/SimplePublicObjectBatchInputUpsert`, `crm/objects/meetings/models/SimplePublicObjectBatchInput`, `crm/objects/meetings/models/SimplePublicObjectInput`, `crm/objects/meetings/models/SimplePublicObjectInputForCreate`, `crm/objects/notes/models/SimplePublicObjectBatchInput`, `crm/objects/notes/models/SimplePublicObjectInput`, `crm/objects/notes/models/SimplePublicObjectInputForCreate`, `crm/objects/postal_mail/models/SimplePublicObjectBatchInput`, `crm/objects/postal_mail/models/SimplePublicObjectInput`, `crm/objects/postal_mail/models/SimplePublicObjectInputForCreate`, `crm/objects/tasks/models/SimplePublicObjectBatchInput`, `crm/objects/tasks/models/SimplePublicObjectInput`, `crm/objects/tasks/models/SimplePublicObjectInputForCreate`, `crm/objects/taxes/models/SimplePublicObjectBatchInput`, `crm/objects/taxes/models/SimplePublicObjectInput`, `crm/objects/taxes/models/SimplePublicObjectInputForCreate`, `crm/products/models/SimplePublicObjectBatchInput`, `crm/products/models/SimplePublicObjectInput`, `crm/products/models/SimplePublicObjectInputForCreate`, `crm/quotes/models/SimplePublicObjectBatchInput`, `crm/quotes/models/SimplePublicObjectInput`, `crm/quotes/models/SimplePublicObjectInputForCreate`, `crm/tickets/models/SimplePublicObjectBatchInput`, `crm/tickets/models/SimplePublicObjectInput` and `crm/tickets/models/SimplePublicObjectInputForCreate`.
- Made `associations` parameter nullable in `crm/companies/models/SimplePublicObjectInputForCreate`, `crm/contacts/models/SimplePublicObjectInputForCreate`, `crm/deals/models/SimplePublicObjectInputForCreate` and  `crm/tickets/models/SimplePublicObjectInputForCreate`.
- Removed `crm.extensions.accounting` API client.
- Added method `markAsReady` to `crm.extensions.calling.recordingSettingsApi`.
- Added parameter `supportsInboundCalling` to `crm/extensions/calling/models/SettingsPatchRequest`, `crm/extensions/calling/models/SettingsRequest` and `crm/extensions/calling/models/SettingsResponse`.
- Added parameters `userIdIncludingInactive` and `type` to `crm/owners/models/PublicOwner`.
- Removed `archive`, `create` and `update` methods from `crm.objects.feedback_submissions.basicApi`, `crm.objects.feedback_submissions.batchApi`, `crm.objects.goals.basicApi` and `crm.objects.goals.batchApi`.
- Changed response object type `BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors` to `BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject` of `crm.objects.leads.rowsApi.upsert()`.
- Removed `crm.schemas.PublicObjectSchemasApi`.
- Added parameters `createdByUserId` and `updatedByUserId` to `crm/schemas/models/ObjectSchema`.
- Added parameter `clearDescription` to `crm/schemas/models/ObjectTypeDefinitionPatch`.

## CRM Lists

- Added `crm.lists.foldersApi`.
- Changed `listIds` type from `Array<number>` to `Array<string>` in `crm.lists.listsApi.getAll()`.
- Changed `listId` type from `number` to `string` in `crm.lists.listsApi.getById()`, `crm.lists.listsApi.remove()`, `crm.lists.listsApi.restore()`, `crm.lists.listsApi.updateListFilters()` and `crm.lists.listsApi.updateName()`.
- Added `crm.lists.mappingApi`.
- Changed `listId` type from `number` to `string` and `requestBody` type from `Array<number>` to `Array<string>` in `crm.lists.membershipsApi.add()` and `crm.lists.membershipsApi.remove()`.
- Changed `listIds` and `sourceListId` types from `number` to `string` in `crm.lists.membershipsApi.addAllFromList()`.
- Changed `listId` type from `number` to `string` in `crm.lists.membershipsApi.addAndRemove()`, `crm.lists.membershipsApi.getPage()` and `crm.lists.membershipsApi.removeAll()`.
- Added `crm.lists.membershipsApi.getLists()` and `crm.lists.membershipsApi.getPageOrderedByAddedToListDate()`.
- Changed response object type `CollectionResponseLong` to `ApiCollectionResponseJoinTimeAndRecordId` of `crm.lists.membershipsApi.getPage()`.
- Added parameter `customProperties` to `crm/lists/models/ListCreateRequest`.
- Added parameters `listIds`, `processingTypes` and `sort` to `crm/lists/models/ListSearchRequest`.
- Made `offset` and `additionalProperties` parameters nullable in `crm/lists/models/ListSearchRequest`.
- Changed `recordIdsToRemove` and `recordIdsToAdd` type from `Array<number>` to `Array<string>` in `crm/lists/models/MembershipChangeRequest`.
- Changed `recordIdsRemoved`, `recordsIdsAdded` and `recordIdsMissing` type from `Array<number>` to `Array<string>` in `crm/lists/models/MembershipsUpdateResponse`.
- Changed `listId` type from `number` to `string` in `crm/lists/models/PublicAssociationInListFilter`, `crm/lists/models/PublicInListFilter`, `crm/lists/models/PublicObjectListSearchResult`, `crm/lists/models/PublicPropertyAssociationFilterBranchFiltersInner` and `crm/lists/models/PublicPropertyAssociationInListFilter`.
- Changed `coalescingRefineBy` type from `PublicEventAnalyticsFilterCoalescingRefineBy` to `PublicFormSubmissionFilterCoalescingRefineBy` in `crm/lists/models/PublicAssociationInListFilter`, `crm/lists/models/PublicNumAssociationsFilter`, `crm/lists/models/PublicObjectList` and `crm/lists/models/PublicPropertyAssociationInListFilter`.
- Changed `businessUnitId` type from `number` to `string` and `subscriptionIds` from `Array<number>` to `Array<string>` in `crm/lists/models/PublicCommunicationSubscriptionFilter` and `crm/lists/models/PublicPropertyAssociationFilterBranchFiltersInner`.
- Changed `coalescingRefineBy` and `pruningRefineBy` parameters type from `PublicEventAnalyticsFilterCoalescingRefineBy` to `PublicFormSubmissionFilterCoalescingRefineBy` in `crm/lists/models/PublicCtaAnalyticsFilter`, `crm/lists/models/PublicEventAnalyticsFilter`, `crm/lists/models/PublicFormSubmissionFilter`, `crm/lists/models/PublicFormSubmissionOnPageFilter`, `crm/lists/models/PublicPageViewAnalyticsFilter`, `crm/lists/models/PublicPropertyAssociationFilterBranchFiltersInner` and `crm/lists/models/PublicUnifiedEventsFilter`.
- Changed `pruningRefineBy` type from `PublicEventAnalyticsFilterCoalescingRefineBy` to `PublicFormSubmissionFilterCoalescingRefineBy` in `crm/lists/models/PublicEmailEventFilter`.
- Changed `subscriptionIds` type from `Array<number>` to `Array<string>` in `crm/lists/models/PublicEmailSubscriptionFilter`.
- Changed `operation` type from `PublicPropertyFilterOperation` to `PublicSurveyMonkeyValueFilterValueComparison` in `crm/lists/models/PublicEventFilterMetadata` and `crm/lists/models/PublicPropertyFilter`.
- Changed `valueComparison` type from `PublicPropertyFilterOperation` to `PublicSurveyMonkeyValueFilterValueComparison` in `crm/lists/models/PublicSurveyMonkeyValueFilter`.
- Added parameter `size` to `crm/lists/models/PublicPropertyAssociationFilterBranchFiltersInner` and `crm/lists/models/PublicObjectList`.
- Changed `createdById` and `updatedById` type from `number` to `string` in `crm/lists/models/PublicObjectList` and `crm/lists/models/PublicObjectListSearchResult`.
- Added parameter `coalescingRefineBy` to `crm/lists/models/PublicPropertyAssociationFilterBranchFilterBranchesInner` and `crm/lists/models/PublicUnifiedEventsFilterBranch`.
- Changed `emailId` and `appId` type from `number` to `string` in `crm/lists/models/PublicPropertyAssociationFilterBranchFiltersInner`.
- Renamed  from `crm/lists/models/PublicPropertyFilterOperation` to `crm/lists/models/PublicSurveyMonkeyValueFilterValueComparison`.
- Changed `fiscalYearStart` type from `PublicPropertyFilterOperationFiscalYearStartEnum` to `PublicSurveyMonkeyValueFilterValueComparisonFiscalYearStartEnum` in `crm/lists/models/PublicSurveyMonkeyValueFilterValueComparison`.

## Marketing

- Renamed method `create` to `createByContactIds` in `marketing.events.attendanceSubscriberStateChangesApi`.
- Renamed method `createByEmail` to `createByContactEmails` in `marketing.events.attendanceSubscriberStateChangesApi`.
- Renamed method `archiveBatch` to `batchArchive` and moved from`marketing.events.batchApi` to `marketing.events.basicApi`.
- Renamed method `doUpsert` to `batchUpsert` and moved from`marketing.events.batchApi` to `marketing.events.basicApi`.
- Renamed method `doCancel` to `cancel` in `marketing.events.basicApi`.
- Renamed method `getById` to `getDetails` in `marketing.events.basicApi`.
- Renamed method `replace` to `upsert` in `marketing.events.basicApi`.
- Renamed method `create` to `update` in `marketing.events.settingsApi`.
- Renamed method `doEmailUpsertById` to `upsertByContactEmail` in `marketing.events.subscriberStateChangesApi`.
- Renamed method `doUpsertById` to `upsertByContactId` in `marketing.events.subscriberStateChangesApi`.
- Added new method `complete` to `marketing.events.basicApi`.
- Moved method `doSearch` from `marketing.events.searchApi` to `marketing.events.basicApi`.
- Added `marketing.events.ParticipantStateApi`.
- Added parameter `eventCompleted` to `marketing/events/models/MarketingEventPublicDefaultResponse`, `marketing/events/models/MarketingEventPublicReadResponse` and `marketing/events/models/MarketingEventUpdateRequestParams`.
- Added parameter `importStatus` to `marketing/events/models/MarketingEventUpdateRequestParams`.
- Added parameters `dataSensitivity`, `unit` and `isEncrypted` to `marketing/events/models/PropertyValue`.
- Removed `marketing.events.batchApi`, `marketing.events.marketingEventsExternalApi` and `marketing.events.searchApi`.
- Changed `legalConsentOptions` type from `any` to `HubSpotFormDefinitionAllOfLegalConsentOptions` in `marketing/forms/models/CollectionResponseFormDefinitionBaseForwardPagingResultsInner`, `marketing/forms/models/FormDefinitionBase`, `marketing/forms/models/FormDefinitionCreateRequestBase` and `marketing/forms/models/HubSpotFormDefinition`.
- Changed `legalConsentOptions` type from `any` to `HubSpotFormDefinitionCreateRequestAllOfLegalConsentOptions` in `marketing/forms/models/HubSpotFormDefinitionCreateRequest`.
- Changed `legalConsentOptions` type from `HubSpotFormDefinitionPatchRequestLegalConsentOptions` to `HubSpotFormDefinitionCreateRequestAllOfLegalConsentOptions` in `marketing/forms/models/HubSpotFormDefinitionPatchRequest`.
- Renamed `marketing.transactional.publicSmtpTokensApi` to `marketing.transactional.publicSMTPTokensApi`.

## Events

- Changed parameters order from `objectType?: string, eventType?: string, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, indexTableName?: string, indexSpecificMetadata?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>` to `objectType?: string, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>` in `events.eventsApi.getPage()`.
- Added new method `getTypes` to `marketing.events.basicApi`.
- Renamed `marketing.events.send.behavioralEventsTrackingApi` to `marketing.events.send.customEventDataApi`.

## OAuth, Settings Users

- Removed parameters `scopeToScopeGroupPks`, `trialScopes` and `trialScopeToScopeGroupPks` in `oauth/models/AccessTokenInfoResponse`.
- Changed `idProperty` type from `string` to `'USER_ID' | 'EMAIL'` in `settings.users.usersApi.archive`, `settings.users.usersApi.getById` and `settings.users.usersApi.replace`.
- Added nullable parameters `firstName` and `lastName` to `settings/users/models/PublicUser`, `settings/users/models/PublicUserUpdate` and `settings/users/models/UserProvisionRequest`.
- Added nullable parameter `objectTypeId` to `webhooks/models/SubscriptionCreateRequest` and `webhooks/models/SubscriptionResponse`.
- Removed parameter `period` from `webhooks/models/ThrottlingSettings`.

## [11.2.0] - 2024-08-14

## Added

- Added `crm.objects.leads` Api client.

## [11.1.0] - 2024-02-29

## Added

- Added param `idProperty` to `SimplePublicObjectBatchInput` in all CRM clients.

## [11.0.0] - 2024-02-13

## Updated

- `crm.associations.v4.basicApi.archive(objectType: string, objectId: number, toObjectType: string, toObjectId: number, _options?: Configuration)` => `crm.associations.v4.basicApi.archive(objectType: string, objectId: string, toObjectType: string, toObjectId: string, _options?: Configuration)`
- `crm.associations.v4.basicApi.create(objectType: string, objectId: number, toObjectType: string, toObjectId: number, associationSpec: Array<AssociationSpec>, _options?: Configuration): Promise<LabelsBetweenObjectPair1>` => `crm.associations.v4.basicApi.create(objectType: string, objectId: string, toObjectType: string, toObjectId: string, associationSpec: Array<AssociationSpec>, _options?: Configuration): Promise<LabelsBetweenObjectPair>`
- `crm.associations.v4.basicApi.createDefault(fromObjectType: string, fromObjectId: number, toObjectType: string, toObjectId: number, _options?: Configuration)` => `crm.associations.v4.basicApi.createDefault(fromObjectType: string, fromObjectId: string, toObjectType: string, toObjectId: string, _options?: Configuration)`
- `crm.associations.v4.basicApi.getPage(objectType: string, objectId: number, toObjectType: string, after?: string, limit?: number, _options?: Configuration)` => `crm.associations.v4.basicApi.getPage(objectType: string, objectId: string, toObjectType: string, after?: string, limit?: number, _options?: Configuration)`
- Cnange type from `number` to `string` in `crm/associations/v4/models/MultiAssociatedObjectWithLabel::toObjectId`.
- Added param `'inverseLabel'?: string` to `crm/associations/v4/schema/models/PublicAssociationDefinitionCreateRequest` and `crm/associations/v4/schema/models/PublicAssociationDefinitionUpdateRequest`.
- Added new association types to `enums/AssociationTypes`.

## [11.0.0-beta.0] - 2024-01-31

## Updated

- `automation.actions.definitionsAPI.create(appId: number, extensionActionDefinitionInput: ExtensionActionDefinitionInput):Promise<ExtensionActionDefinition>` => `automation.actions.definitionsAPI.create(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg):Promise<PublicActionDefinition>`.
- `automation.actions.definitionsAPI.getById():Promise<ExtensionActionDefinition>` => `automation.actions.definitionsAPI.getById():Promise<PublicActionDefinition>`.
- `automation.actions.definitionsAPI.update(definitionId: string, appId: number, extensionActionDefinitionPatch: ExtensionActionDefinitionPatch):Promise<ExtensionActionDefinition>` => `automation.actions.definitionsAPI.update(definitionId: string, appId: number, publicActionDefinitionPatch: PublicActionDefinitionPatch):Promise<PublicActionDefinition>`.
- `automation.actions.definitionsAPI.getPage():Promise<CollectionResponseExtensionActionDefinitionForwardPaging>` => `automation.actions.definitionsAPI.getPage():Promise<CollectionResponsePublicActionDefinitionForwardPaging>`.
- Added new function type `POST_ACTION_EXECUTION` to all methods of `automation.actions.functionsApi`.
- `automation.actions.functionsApi.createOrReplace():Promise<ActionFunctionIdentifier>` => `automation.actions.functionsApi.createOrReplace():Promise<PublicActionFunctionIdentifier >`.
- `automation.actions.functionsApi.createOrReplaceByFunctionType():Promise<ActionFunctionIdentifier>` => `automation.actions.functionsApi.createOrReplaceByFunctionType():Promise<PublicActionFunctionIdentifier >`.
- `automation.actions.functionsApi.getByFunctionType():Promise<ActionFunction>` => `automation.actions.functionsApi.getByFunctionType():Promise<PublicActionFunction>`.
- `automation.actions.functionsApi.getById():Promise<ActionFunction>` => `automation.actions.functionsApi.getById():Promise<PublicActionFunction>`.
- `automation.actions.functionsApi.getPage():Promise<CollectionResponseActionFunctionIdentifierNoPaging>` => `automation.actions.functionsApi.getPage():Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging>`.
- `automation.actions.revisionsApi.getById():Promise<ActionRevision>` => `automation.actions.revisionsApi.getById():Promise<PublicActionRevision>`.
- `automation.actions.revisionsApi.getPage():Promise<CollectionResponseActionRevisionForwardPaging>` => `automation.actions.revisionsApi.getPage():Promise<CollectionResponsePublicActionRevisionForwardPaging>`.
- Added param `property` to `cms.blogs.authors.blogAuthorsApi.getById()`.
- Added param `property` to `cms.blogs.authors.blogAuthorsApi.getPage()`.
- Changed type from laguages enum to `string` in `cms/blogs/authors/models/AttachToLangPrimaryRequestVNext::language` and `cms/blogs/authors/models/AttachToLangPrimaryRequestVNext::primaryLanguage`.
- Added param `property` to `cms.blogs.blogPosts.blogPostsApi.getById()`.
- Added param `property` to `cms.blogs.blogPosts.blogPostsApi.getPage()`.
- Changed type from laguages enum to `string` in `cms/blogs/blog_posts/models/AttachToLangPrimaryRequestVNext::language` and `cms/blogs/blog_posts/models/AttachToLangPrimaryRequestVNext::primaryLanguage`.
- Cnange type from `SideOrCornerVerticalSideEnum` to `string` in `cms/blogs/blog_posts/models/SideOrCorner::verticalSide`.
- Cnange type from `SideOrCornerHorizontalSideEnum` to `string` in `cms/blogs/blog_posts/models/SideOrCorner::horizontalSide`.
- Cnange type from `StylesVerticalAlignmentEnum` to `string` in `cms/blogs/blog_posts/models/Styles::verticalAlignment`.
- Cnange type from `StylesFlexboxPositioningEnum` to `string` in `cms/blogs/blog_posts/models/Styles::flexboxPositioning`.
- Added param `property` to `cms.blogs.tags.blogTagsApi.getById()`.
- Added param `property` to `cms.blogs.tags.blogTagsApi.getPage()`.
- Changed type from laguages enum to `string` in `cms/blogs/tags/models/AttachToLangPrimaryRequestVNext::language` and `cms/blogs/tags/models/AttachToLangPrimaryRequestVNext::primaryLanguage`.
- Cnange type from `ErrorCategory` to `string` in `crm/associations/models/StandardError::category`.
- `crm.associations.v4.basicApi.create(): Promise<LabelsBetweenObjectPair>` => `crm.associations.v4.basicApi.create(): Promise<LabelsBetweenObjectPair1>`
- Cnange type from `ErrorCategory` to `string` in `crm/associations/v4/models/StandardError::category`.
- Rename `crm.associations.v4.schema.definitionsApi._delete()` => `crm.associations.v4.schema.definitionsApi.archive()`.
- Removed `crm.objects.associationsApi`.
- Cnange type from `number` to `string` in `PublicObjectSearchRequest::after` in all CRM clients.
- `crm.objects.postalMail.basicApi.archive(postalMail: string, _options?: Configuration)` => `crm.objects.postalMail.basicApi.archive(postalMailId: string, _options?: Configuration)`.
- `crm.objects.postalMail.basicApi.getById(postalMail: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration)` => `crm.objects.postalMail.basicApi.getById(postalMailId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration)`.
- `crm.objects.postalMail.basicApi.update(postalMail: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration)` => `crm.objects.postalMail.basicApi.update(postalMailId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration)`.
- Added param `validateDealStageUsagesBeforeDelete` to `cms.pipelines.pipelinesApi.archive()`, `cms.pipelines.pipelinesApi.replace()` and `cms.pipelines.pipelinesApi.update()`.
- `events.eventsApi.getPage(occurredAfter?: Date, occurredBefore?: Date, objectType?: string, objectId?: number, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: Configuration)` => `events.eventsApi.getPage(objectType?: string, eventType?: string, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, indexTableName?: string, indexSpecificMetadata?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: Configuration)`
- Rewrite all enums from type to enum.

```typescript
export type Enum = "OPTION1" | "OPTION2";
// =>
export enum Enum {
    Option1 = 'OPTION1',
    Option2 = 'OPTION2'
}
```

## Added

- `crm.companies.gdprApi` API client.
- `crm.deals.gdprApi` API client.
- `crm.extensions.calling.recordingSettingsApi` API client.
- `crm.line_items.gdprApi` API client.
- `crm.objects.calls.gdprApi` API client.
- `crm.objects.communications.gdprApi` API client.
- `crm.objects.emails.gdprApi` API client.
- `crm.objects.feedbackSubmissions.gdprApi` API client.
- `crm.objects.meetings.gdprApi` API client.
- `crm.objects.notes.gdprApi` API client.
- `crm.objects.postalMail.gdprApi` API client.
- `crm.objects.tasks.gdprApi` API client.
- `crm.products.gdprApi` API client.
- `crm.quotes.gdprApi` API client.
- `crm.tickets.gdprApi` API client.

## [10.2.0] - 2023-12-13

## Added

- `cms.pages` Api client.
- `crm.lists` Api client.
- `crm.objects.goals` Api client.
- `crm.objects.taxes` Api client.
- `events.send` Api client.
- `settings.businessUnits` Api client.

## [10.1.0] - 2023-11-23

## Added

- `marketing.forms` Api client.

## [10.0.0] - 2023-09-25

## Updated

- `cms.auditLogs.auditLogsApi.getPage(objectId?: Array<string>, userId?: Array<string>, after?: string, before?: string, sort?: Array<string>, eventType?: Array<string>, limit?: number, objectType?: Array<string>, _options?: Configuration)` => `cms.auditLogs.auditLogsApi.getPage(userId?: Array<string>, eventType?: Array<string>, objectType?: Array<string>, objectId?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: Configuration)`
- Cnange type from `number` to `string` in `cms/hubdb/models/HubDbTableRowV3BatchUpdateRequest.id`.
- Nullable `startDatetime`, `endDatetime` and `totalRequestTime` in `cms/performance/models/PerformanceView`.
- Rename `cms.sourceCode.contentApi.get()` => `cms.sourceCode.contentApi.download()`
- Rename `cms.sourceCode.contentApi.replace()` => `cms.sourceCode.contentApi.createOrUpdate()`
- `crm.timeline.eventsApi.createBatch() BatchResponseTimelineEventResponse | BatchResponseTimelineEventResponseWithErrors` => `crm.timeline.eventsApi.createBatch() BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors`
- Cnange type from `ErrorCategory` to `string` in `crm/timeline/models/StandardError::category`.
- Nullable `options` in `crm/timeline/models/TimelineEventTemplateToken` and `codegen/crm/timeline/models/TimelineEventTemplateTokenUpdateRequest`.
- Required `links` in `files/models/FolderUpdateTaskLocator` and `files/models/ImportFromUrlTaskLocator`.
- Nullable `duplicateValidationStrategy`, `duplicateValidationScope` and `overwrite` in `files/models/ImportFromUrlInput`.
- Cnange type from `ErrorCategory` to `string` in `files/models/StandardError::category`.
- Move method `archive` from `marketing.events.marketingEventsExternalApi` to `marketing.events.basicApi`.
- Move method `create` from `marketing.events.marketingEventsExternalApi` to `marketing.events.basicApi`.
- Move method `doCancel` from `marketing.events.marketingEventsExternalApi` to `marketing.events.basicApi`.
- Move method `getById` from `marketing.events.marketingEventsExternalApi` to `marketing.events.basicApi`.
- Move method `replace` from `marketing.events.marketingEventsExternalApi` to `marketing.events.basicApi`.
- Move method `update` from `marketing.events.marketingEventsExternalApi` to `marketing.events.basicApi`.
- Move method `archiveBatch` from `marketing.events.marketingEventsExternalApi` to `marketing.events.batchApi`.
- Move method `doUpsert` from `marketing.events.marketingEventsExternalApi` to `marketing.events.batchApi`.
- Move method `doEmailUpsertById` from `marketing.events.marketingEventsExternalApi` to `marketing.events.subscriberStateChanges`.
- Move method `doUpsertById` from `marketing.events.marketingEventsExternalApi` to `marketing.events.subscriberStateChanges`.
- Rename `marketing.events.settingsExternalApi` => `marketing.events.settingsApi`
- Cnange type from `ErrorCategory` to `string` in `marketing/events/models/StandardError::category`.
- `crm.extensions.cards.cardsApi.archive(appId: number, cardId: string, _options?: Configuration)` => `crm.extensions.cards.cardsApi.archive(cardId: string, appId: number, _options?: Configuration)`
- `crm.extensions.cards.cardsApi.getById(appId: number, cardId: string, _options?: Configuration): Promise<CardResponse >` => `crm.extensions.cards.cardsApi.getById(cardId: string, appId: number, _options?: Configuration): Promise<PublicCardResponse >`
- `crm.extensions.cards.cardsApi.update(appId: number, cardId: string, cardPatchRequest: CardPatchRequest, _options?: Configuration): Promise<CardResponse >` => `crm.extensions.cards.cardsApi.update(cardId: string, appId: number, cardPatchRequest: CardPatchRequest, _options?: Configuration): Promise<PublicCardResponse >`
- `crm.extensions.cards.cardsApi.create(): Promise<CardResponse >` => `crm.extensions.cards.cardsApi.create(): Promise<PublicCardResponse >`
- `crm.extensions.cards.cardsApi.getAll(): Promise<CardListResponse >` => `crm.extensions.cards.cardsApi.getAll(): Promise<PublicCardListResponse >`:


## Added

- Added param `prev` to `cms/audit_logs/models/PreviousPage`.
- Added param `properties` to `cms.sourceCode.metadataApi.get()`.
- Added param `hash` to `cms/source_code/models/AssetFileMetadata`.
- Added method `getMetadata` to `files.filesApi`.
- Added param `expiresAt` to `files/models/FileUpdateInput` and `files/models/ModelFile`.
- Added params `roleIds`, `sendWelcomeEmail` and `superAdmin` to `settings/users/models/PublicUser`

## [9.1.1] - 2023-08-16

## Fixed

- Nullable `properties` in `SimplePublicObject` and `SimplePublicObjectWithAssociations` (all crm object's clients).

## [9.1.0] - 2023-07-27

## Removed `hapikey` from

- `automation.actions.callbacksApi` Api.
- `cms` (all Api clients).
- `communicationPreferences` (all Api clients).
- `conversations` (all API clients).
- `crm` (all Api clients).
- `events` (all Api clients).
- `files` (all Api clients).
- `marketing.events.settingsExternalApi` Api.
- `marketing.transactional` Api client.

## Updated

- Cnange type from `object` to `string` in `cms/hubdb/models/StandardError.category`.
- Cnange type from `StandardError[]` to `StandardError1[]` in `crm/associations/v4/models/BatchResponseSimplePublicObjectWithErrors::errors`.
- Cnange type from `ErrorCategory` to `string` in `crm/companies/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/contacts/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/deals/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/lineitems/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/objects/calls/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/objects/communications/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/objects/emails/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/objects/feedback_submissions/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/objects/meetings/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/objects/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/objects/notes/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/objects/postal_mail/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/objects/tasks/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/products/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/properties/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/quotes/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `crm/tickets/models/StandardError::category`.
- Cnange type from `ErrorCategory` to `string` in `webhooks/models/StandardError::category`.

## [9.0.1] - 2023-07-26

## Fixed

- Remove console.error message indicating a response status code (Retry mechanism).

## [9.0.0] - 2023-06-08

## Updated

- Release stable version.

## [9.0.0-beta.3] - 2023-05-11

## Added

- `crm.associations.v4.basicApi` Api.

## Updated

- `crm.associations.typesApi` => `crm.associations.schema.typesApi`.
- `crm.associations.v4.definitionsApi` => `crm.associations.v4.schema.definitionsApi`.
- Removed deprecated `webhooks.validateSignature()` method.

## [9.0.0-beta.2] - 2023-05-03

## Added

- Add ability to change http agent(`config.httpAgent`).

## [9.0.0-beta.1] - 2023-04-28

## Updated

- Add new event types to webhooks.

## Added

- `crm.objects.communications` Api client.

## [9.0.0-beta.0] - 2023-04-06

## Updated

- Rename `cms.hubdb.rowsBatchApi.batchCloneDraftTableRows()` => `cms.hubdb.rowsBatchApi.cloneDraftTableRows()`.
- Rename `cms.hubdb.rowsBatchApi.batchCreateDraftTableRows()` => `cms.hubdb.rowsBatchApi.createDraftTableRows()`.
- Rename `cms.hubdb.rowsBatchApi.batchPurgeDraftTableRows()` => `cms.hubdb.rowsBatchApi.purgeDraftTableRows()`.
- Rename `cms.hubdb.rowsBatchApi.batchReadDraftTableRows()` => `cms.hubdb.rowsBatchApi.readDraftTableRows()`.
- Rename `cms.hubdb.rowsBatchApi.batchReadTableRows()` => `cms.hubdb.rowsBatchApi.readTableRows()`.
- Rename `cms.hubdb.rowsBatchApi.batchReplaceDraftTableRows()` => `cms.hubdb.rowsBatchApi.replaceDraftTableRows()`.
- Rename `cms.hubdb.rowsBatchApi.batchUpdateDraftTableRows()` => `cms.hubdb.rowsBatchApi.updateDraftTableRows()`.
- `cms.hubdb.tablesApi.getDraftTableDetailsById(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration)` => `cms.hubdb.tablesApi.getDraftTableDetailsById(tableIdOrName: string, includeForeignIds?: boolean, archived?: boolean, _options?: Configuration)`
- `cms.hubdb.tablesApi.getTableDetails(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration)` => `cms.hubdb.tablesApi.getTableDetails(tableIdOrName: string, includeForeignIds?: boolean, archived?: boolean, _options?: Configuration)`
- `cms.hubdb.tablesApi.updateDraftTable(tableIdOrName: string, hubDbTableV3Request: HubDbTableV3Request, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration)` => `cms.hubdb.tablesApi.updateDraftTable(tableIdOrName: string, hubDbTableV3Request: HubDbTableV3Request, includeForeignIds?: boolean, archived?: boolean, _options?: Configuration)`
- Removed `crm.companies.associationsApi`.
- Removed `crm.contacts.associationsApi`.
- Removed `crm.deals.associationsApi`.
- Removed `crm.line_items.associationsApi`.
- Removed `crm.objects.calls.associationsApi`.
- Removed `crm.objects.emails.associationsApi`.
- Removed `crm.objects.feedbackSubmissions.associationsApi`.
- Removed `crm.objects.meetings.associationsApi`.
- Removed `crm.objects.notes.associationsApi`.
- Removed `crm.objects.postalMail.associationsApi`.
- Removed `crm.objects.tasks.associationsApi`.
- Removed `crm.products.associationsApi`.
- Removed `crm.quotes.associationsApi`.
- Removed `crm.tickets.associationsApi`.
- `crm.companies.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.companies.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.contacts.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.contacts.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.deals.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.deals.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.line_items.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.line_items.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.objects.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.objects.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.objects.calls.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.objects.calls.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.objects.emails.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.objects.emails.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.objects.feedbackSubmissions.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.objects.feedbackSubmissions.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.objects.meetings.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.objects.meetings.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.objects.notes.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.objects.notes.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.objects.postalMail.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.objects.postalMail.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.objects.tasks.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.objects.tasks.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.objects.products.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.objects.products.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.objects.quotes.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.objects.quotes.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `crm.objects.tickets.basicApi.create(SimplePublicObjectInput => SimplePublicObjectInputForCreate)`
- `crm.objects.tickets.batchApi.create(BatchInputSimplePublicObjectInput => BatchInputSimplePublicObjectInputForCreate)`
- `marketing.events.marketingEventsExternalApi.doSearch()` => `marketing.events.searchApi.doSearch()`
- Rename `oauth.accessTokensApi.getAccessToken` => `oauth.accessTokensApi.get`.
- Rename `oauth.refreshTokensApi.archiveRefreshToken` => `oauth.refreshTokensApi.archive`.
- Rename `oauth.refreshTokensApi.getRefreshToken` => `oauth.refreshTokensApi.get`.
- Rename `oauth.tokensApi.createToken` => `oauth.tokensApi.create`.

## Added

- Added param `properties` to `crm.properties.coreApi.getAll`.
- Added param `properties` to `crm.properties.coreApi.getByName`.
- Added param `highValue` to all Filter's model.

## [8.9.0] - 2023-04-05

## Added

- Retry mechanism and rate limiting to apiRequest.

## [8.8.1] - 2023-03-23

## Fixed

- Access token update fix.

## [8.8.0] - 2023-03-02

## Added

- Update models for `crm.properties` API client.

## [8.7.0] - 2023-02-28

## Added

- Rate limiting.

## [8.6.0] - 2023-02-20

## Added

- `crm.associations.v4` API client

## Fixed

- Fix `oauth.refreshTokensApi.archiveRefreshToken()` method

## [8.5.0] - 2023-02-08

## Added

- Enum `AssociationTypes` (which contains the most popular HubSpot defined association types).
- Information about reserved words to README (e.g. `form`).

## [8.4.2] - 2023-01-24

## Fixed

- Discoveries mechanism

## [8.4.1] - 2023-01-19

## Fixed

- Discoveries mechanism

## [8.4.0] - 2023-01-16

## Added

- Retry mechanism

## Fixed

- Fix `crm.associations` API client

## [8.3.2] - 2022-12-22

## Fixed

- Moved @types/node-fetch package from devDependencies to dependencies

## [8.3.1] - 2022-12-21

## Fixed

- Remove unused imports from codegen

## [8.3.0] - 2022-12-19

## Added

- `crm.objects.postalMail` API client

## [8.2.0] - 2022-12-06

## Updated

- Added Private App access token to `cms.domains`

## [8.1.1] - 2022-12-05

## Fixed

- Fix all assosciation APIs

## Updated

- Replace Lodash to navite code in part of code
- Load only merge and get methods form Lodash

## [8.1.0] - 2022-11-28

## Updated

- Optimization memory usage

## [8.0.1] - 2022-11-23

## Updated

- Revert memory usage optimization PR due to unstable work

## [8.0.0] - 2022-11-21

## Updated

- Optimization memory usage
- Regenerate all clients
- Added Private App access token to `cms.performance`, `crm.schemas` , `crm.imports` and `crm.objects.feedbackSubmissions`
- Updated `marketing.events` API client
- Deprecated `crm.extensions.accounting` API client

## Added

- `files` Api client

## [7.1.2] - 2022-07-22

## Fixed

- Fixed file uploading with apiRequest

## [7.1.1] - 2022-07-20

## Fixed

- Added OAuth to `crm.import.coreApi`

## [7.1.0] - 2022-07-15

### Added

- Sinature Utill

### Deprecated

- webhooks.validateSignature()

## [7.0.1] - 2022-06-10

### Fixed

- `crm.feedbackSubmissions` method names

## [7.0.0] - 2022-06-07

### Added

- crm.quotes.publicObjectApi()
- crm.feedbackSubmissions.publicObjectApi()
- added idProperty to update and getById methods of crm.contacts.basicApi
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

### Updated

- rename crm.contants.gdpr.postCrmV3ObjectsContactsGdprDelete() => crm.contants.gdpr.purge()
- rename crm.objects.gdpr.postCrmV3ObjectsContactsGdprDelete() => crm.objects.gdpr.purge()

## [6.0.1-beta3] - 2022-02-18

### Added

- apiRequest()

### Updated

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

- Migrate from request to node-fetch (Migrate to new code generator).
- `from` is reserved word. Use `_from` instead of `from`.
- Rewrite [Client](src/client.ts)
- `crm.objects.feedbackSubmissions` => `crm.feedbackSubmissions`

## [5.0.0] - 2021-09-14

### Added

- `crm.objects.gdprApi` API client
- `crm.contacts.gdprApi` API client

### Fixed (breaking changes)

- `oauth` fully regenerated
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

### Breaking changes

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

[Unreleased]: https://github.com/HubSpot/hubspot-api-nodejs/compare/12.0.1...HEAD
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
[7.1.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/7.1.0
[7.1.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/7.1.1
[7.1.2]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/7.1.2
[8.0.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.0.0
[8.0.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.0.1
[8.1.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.1.0
[8.1.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.1.1
[8.2.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.2.0
[8.3.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.3.0
[8.3.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.3.1
[8.3.2]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.3.2
[8.4.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.4.0
[8.4.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.4.1
[8.4.2]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.4.2
[8.5.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.5.0
[8.6.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.6.0
[8.7.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.7.0
[8.8.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.8.0
[8.8.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.8.1
[8.9.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/8.9.0
[9.0.0-beta.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/9.0.0-beta.0
[9.0.0-beta.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/9.0.0-beta.1
[9.0.0-beta.2]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/9.0.0-beta.2
[9.0.0-beta.3]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/9.0.0-beta.3
[9.0.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/9.0.0
[9.0.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/9.0.1
[9.1.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/9.1.0
[9.1.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/9.1.1
[10.0.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/10.0.0
[10.1.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/10.1.0
[10.2.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/10.2.0
[11.0.0-beta.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/11.0.0-beta.0
[11.0.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/11.0.0
[11.1.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/11.1.0
[11.2.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/11.2.0
[12.0.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/12.0.0
[12.0.1]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/12.0.1
[13.0.0-beta.0]: https://github.com/HubSpot/hubspot-api-nodejs/releases/tag/13.0.0-beta.0
