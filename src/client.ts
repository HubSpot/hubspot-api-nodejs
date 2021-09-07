import Bottleneck from 'bottleneck'
import crypto = require('crypto')
import http = require('http')
import * as _ from 'lodash'
import * as qs from 'querystring'
import request = require('request')
import { Response } from 'request'
import {
  CallbacksApi as ActionsCallbacksApi,
  DefinitionsApi as ActionsDefinitionsApi,
  FunctionsApi as ActionsFunctionsApi,
  RevisionsApi as ActionsRevisionsApi,
} from '../codegen/automation/actions/api'
import * as actionsModels from '../codegen/automation/actions/model/models'
import { DefaultApi as AuditLogsDefaultApi } from '../codegen/cms/audit_logs/api'
import * as auditLogsModels from '../codegen/cms/audit_logs/model/models'
import { DefaultApi as AuthorsDefaultApi } from '../codegen/cms/blogs/authors/api'
import * as authorsModels from '../codegen/cms/blogs/authors/model/models'
import { DefaultApi as BlogPostsDefaultApi } from '../codegen/cms/blogs/blog_posts/api'
import * as blogPostsModels from '../codegen/cms/blogs/blog_posts/model/models'
import { DefaultApi as TagsDefaultApi } from '../codegen/cms/blogs/tags/api'
import * as tagsModels from '../codegen/cms/blogs/tags/model/models'
import { DomainsApi } from '../codegen/cms/domains/api'
import * as domainsModels from '../codegen/cms/domains/model/models'
import { RowsApi, RowsBatchApi, TablesApi } from '../codegen/cms/hubdb/api'
import * as hubdbModels from '../codegen/cms/hubdb/model/models'
import { DefaultApi as PerformanceDefaultApi } from '../codegen/cms/performance/api'
import * as performanceModels from '../codegen/cms/performance/model/models'
import { DefaultApi as SiteSearchDefaultApi } from '../codegen/cms/site_search/api'
import * as siteSearchModels from '../codegen/cms/site_search/model/models'
import { RedirectsApi } from '../codegen/cms/url_redirects/api'
import * as urlRedirectsModels from '../codegen/cms/url_redirects/model/models'
import {
  DefinitionApi as CommunicationPreferencesDefinitionApi,
  StatusApi as CommunicationPreferencesStatusApi,
} from '../codegen/communication_preferences/api'
import * as communicationPreferencesModels from '../codegen/communication_preferences/model/models'
import { GenerateApi } from '../codegen/conversations/visitor_identification/api'
import * as visitorIdentificationModels from '../codegen/conversations/visitor_identification/model/models'
import { BatchApi as AssociationsBatchApi, TypesApi } from '../codegen/crm/associations/api'
import * as associationsModels from '../codegen/crm/associations/model/models'
import {
  AssociationsApi as CompaniesAssociationsApi,
  BasicApi as CompaniesBasicApi,
  BatchApi as CompaniesBatchApi,
  SearchApi as CompaniesSearchApi,
} from '../codegen/crm/companies/api'
import * as companiesModels from '../codegen/crm/companies/model/models'
import {
  AssociationsApi as ContactsAssociationsApi,
  BasicApi as ContactsBasicApi,
  BatchApi as ContactsBatchApi,
  SearchApi as ContactsSearchApi,
} from '../codegen/crm/contacts/api'
import * as contactsModels from '../codegen/crm/contacts/model/models'
import {
  AssociationsApi as DealsAssociationsApi,
  BasicApi as DealsBasicApi,
  BatchApi as DealsBatchApi,
  SearchApi as DealsSearchApi,
} from '../codegen/crm/deals/api'
import * as dealsModels from '../codegen/crm/deals/model/models'
import {
  CallbacksApi as AccountingCallbacksApi,
  InvoiceApi as AccountingInvoiceApi,
  SettingsApi as AccountingSettingsApi,
  SyncApi as AccountingSyncApi,
  UserAccountsApi as AccountingUserAccountsApi,
} from '../codegen/crm/extensions/accounting/api'
import * as accountingModels from '../codegen/crm/extensions/accounting/model/models'
import { SettingsApi as СallingSettingsApi } from '../codegen/crm/extensions/calling/api'
import * as callingModels from '../codegen/crm/extensions/calling/model/models'
import { CardsApi, SampleResponseApi as CardsSampleResponseApi } from '../codegen/crm/extensions/cards/api'
import * as cardsModels from '../codegen/crm/extensions/cards/model/models'
import { SettingsApi as VideoconferencingSettingsApi } from '../codegen/crm/extensions/videoconferencing/api'
import * as videoconferencingModels from '../codegen/crm/extensions/videoconferencing/model/models'
import { CoreApi as ImportsCoreApi } from '../codegen/crm/imports/api/coreApi'
import * as importsModels from '../codegen/crm/imports/model/models'
import {
  AssociationsApi as LineItemsAssociationsApi,
  BasicApi as LineItemsBasicApi,
  BatchApi as LineItemsBatchApi,
  SearchApi as LineItemsSearchApi,
} from '../codegen/crm/line_items/api'
import * as lineItemsModels from '../codegen/crm/line_items/model/models'
import {
  AssociationsApi as ObjectsAssociationsApi,
  BasicApi as ObjectsBasicApi,
  BatchApi as ObjectsBatchApi,
  SearchApi as ObjectsSearchApi,
} from '../codegen/crm/objects/api'
import {
  AssociationsApi as FeedbackSubmissionsAssociationsApi,
  BasicApi as FeedbackSubmissionsBasicApi,
  BatchApi as FeedbackSubmissionsBatchApi,
  SearchApi as FeedbackSubmissionsSearchApi,
} from '../codegen/crm/objects/feedback_submissions/api'
import * as feedbackSubmissionsModels from '../codegen/crm/objects/feedback_submissions/model/models'
import * as objectsModels from '../codegen/crm/objects/model/models'
import { ApiKeyAuth, DefaultApi as OwnersDefaultApi, OAuth } from '../codegen/crm/owners/api'
import * as ownersModels from '../codegen/crm/owners/model/models'
import { PipelinesApi, PipelineStagesApi } from '../codegen/crm/pipelines/api'
import * as pipelinesModels from '../codegen/crm/pipelines/model/models'
import {
  AssociationsApi as ProductsAssociationsApi,
  BasicApi as ProductsBasicApi,
  BatchApi as ProductsBatchApi,
  SearchApi as ProductsSearchApi,
} from '../codegen/crm/products/api'
import * as productsModels from '../codegen/crm/products/model/models'
import {
  BatchApi as PropertiesBatchApi,
  CoreApi as PropertiesCoreApi,
  GroupsApi as PropertiesGroupsApi,
} from '../codegen/crm/properties/api'
import * as propertiesModels from '../codegen/crm/properties/model/models'
import {
  AssociationsApi as QuotesAssociationsApi,
  BasicApi as QuotesBasicApi,
  BatchApi as QuotesBatchApi,
  SearchApi as QuotesSearchApi,
} from '../codegen/crm/quotes/api'
import * as quotesModels from '../codegen/crm/quotes/model/models'
import { CoreApi as SchemasCoreApi, DefaultApi as SchemasDefaultApi } from '../codegen/crm/schemas/api'
import * as schemasModels from '../codegen/crm/schemas/model/models'
import {
  AssociationsApi as TicketsAssociationsApi,
  BasicApi as TicketsBasicApi,
  BatchApi as TicketsBatchApi,
  SearchApi as TicketsSearchApi,
} from '../codegen/crm/tickets/api'
import * as ticketsModels from '../codegen/crm/tickets/model/models'
import { EventsApi, TemplatesApi, TokensApi } from '../codegen/crm/timeline/api'
import * as timelineModels from '../codegen/crm/timeline/model/models'
import { EventsApi as EventsEventsApi } from '../codegen/events/api'
import * as eventsModels from '../codegen/events/model/models'
import { DefaultApi as TransactionalDefaultApi } from '../codegen/marketing/transactional/api'
import * as transactionalModels from '../codegen/marketing/transactional/model/models'
import {
  AccessTokensApi as OauthAccessTokensApi,
  RefreshTokensApi as OauthRefreshTokensApi,
  TokensApi as OauthTokensApi,
} from '../codegen/oauth/api'
import * as oauthModels from '../codegen/oauth/model/models'
import { SettingsApi, SubscriptionsApi } from '../codegen/webhooks/api'
import * as webhooksModels from '../codegen/webhooks/model/models'
import { VERSION } from './version'

const DEFAULT_HEADERS = { 'User-Agent': `hubspot-api-client-nodejs; ${VERSION}` }
const DEFAULT_LIMITER_OPTIONS = {
  minTime: 1000 / 9,
  maxConcurrent: 6,
  id: 'hubspot-client-limiter',
}
const SEARCH_LIMITER_MIN_TIME = 550
const SEARCH_METHOD_NAME = 'doSearch'
const METHOD_NAMES_TO_EXCLUDE_FROM_PATCHING = [
  'constructor',
  'useQuerystring',
  'basePath',
  'defaultHeaders',
  'setDefaultAuthentication',
  'setApiKey',
  'accessToken',
  'addInterceptor',
]

const RETRY_TIMEOUT = {
  INTERNAL_SERVER_ERROR: 200,
  TOO_MANY_REQUESTS: 10 * 1000,
  TOO_MANY_SEARCH_REQUESTS: 1000,
}

const TEN_SECONDLY_ROLLING = 'TEN_SECONDLY_ROLLING'
const SECONDLY_LIMIT_MESSAGE = 'You have reached your secondly limit.'

export type LimiterOptions = Bottleneck.ConstructorOptions

export enum NumberOfRetries {
  NoRetries,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
}

export type Interceptor = (requestOptions: request.Options) => Promise<any> | void

export {
  accountingModels,
  actionsModels,
  associationsModels,
  communicationPreferencesModels,
  companiesModels,
  contactsModels,
  dealsModels,
  callingModels,
  cardsModels,
  feedbackSubmissionsModels,
  eventsModels,
  importsModels,
  lineItemsModels,
  ownersModels,
  objectsModels,
  pipelinesModels,
  productsModels,
  propertiesModels,
  quotesModels,
  ticketsModels,
  timelineModels,
  transactionalModels,
  oauthModels,
  webhooksModels,
  auditLogsModels,
  authorsModels,
  blogPostsModels,
  tagsModels,
  domainsModels,
  hubdbModels,
  performanceModels,
  schemasModels,
  urlRedirectsModels,
  visitorIdentificationModels,
  siteSearchModels,
  videoconferencingModels,
}

export class HttpError extends Error {
  constructor(public response: http.IncomingMessage, public body: any, public statusCode?: number) {
    super('HTTP request failed')
    this.name = 'HttpError'
  }
}

export class Client {
  public automation: {
    actions: {
      callbacksApi: ActionsCallbacksApi
      definitionsApi: ActionsDefinitionsApi
      functionsApi: ActionsFunctionsApi
      revisionsApi: ActionsRevisionsApi
    }
  }
  public oauth: {
    accessTokensApi: OauthAccessTokensApi
    refreshTokensApi: OauthRefreshTokensApi
    tokensApi: OauthTokensApi
    getAuthorizationUrl: (
      clientId: string,
      redirectUri: string,
      scope: string,
      optionalScope?: string,
      state?: string,
    ) => string
  }
  public crm: {
    associations: {
      batchApi: AssociationsBatchApi
      typesApi: TypesApi
    }
    companies: {
      associationsApi: CompaniesAssociationsApi
      basicApi: CompaniesBasicApi
      batchApi: CompaniesBatchApi
      searchApi: CompaniesSearchApi
      getAll: (
        limit?: number,
        after?: string,
        properties?: string[],
        associations?: string[],
        archived?: boolean,
        options?: { headers: { [name: string]: string } },
      ) => Promise<companiesModels.SimplePublicObject[]>
    }
    contacts: {
      associationsApi: ContactsAssociationsApi
      basicApi: ContactsBasicApi
      batchApi: ContactsBatchApi
      searchApi: ContactsSearchApi
      getAll: (
        limit?: number,
        after?: string,
        properties?: string[],
        associations?: string[],
        archived?: boolean,
        options?: { headers: { [name: string]: string } },
      ) => Promise<contactsModels.SimplePublicObject[]>
    }
    objects: {
      associationsApi: ObjectsAssociationsApi
      basicApi: ObjectsBasicApi
      batchApi: ObjectsBatchApi
      searchApi: ObjectsSearchApi
      feedbackSubmissions: {
        associationsApi: FeedbackSubmissionsAssociationsApi
        basicApi: FeedbackSubmissionsBasicApi
        batchApi: FeedbackSubmissionsBatchApi
        searchApi: FeedbackSubmissionsSearchApi
      }
    }
    deals: {
      associationsApi: DealsAssociationsApi
      basicApi: DealsBasicApi
      batchApi: DealsBatchApi
      searchApi: DealsSearchApi
      getAll: (
        limit?: number,
        after?: string,
        properties?: string[],
        associations?: string[],
        archived?: boolean,
        options?: { headers: { [name: string]: string } },
      ) => Promise<dealsModels.SimplePublicObject[]>
    }
    extensions: {
      accounting: {
        callbacksApi: AccountingCallbacksApi
        invoiceApi: AccountingInvoiceApi
        settingsApi: AccountingSettingsApi
        syncApi: AccountingSyncApi
        userAccountsApi: AccountingUserAccountsApi
      }
      calling: {
        settingsApi: СallingSettingsApi
      }
      cards: {
        cardsApi: CardsApi
        sampleResponseApi: CardsSampleResponseApi
      }
      videoconferencing: {
        settingsApi: VideoconferencingSettingsApi
      }
    }
    imports: {
      coreApi: ImportsCoreApi
    }
    lineItems: {
      associationsApi: LineItemsAssociationsApi
      basicApi: LineItemsBasicApi
      batchApi: LineItemsBatchApi
      searchApi: LineItemsSearchApi
      getAll: (
        limit?: number,
        after?: string,
        properties?: string[],
        associations?: string[],
        archived?: boolean,
        options?: { headers: { [name: string]: string } },
      ) => Promise<lineItemsModels.SimplePublicObject[]>
    }
    owners: {
      defaultApi: OwnersDefaultApi
    }
    pipelines: {
      pipelinesApi: PipelinesApi
      pipelineStagesApi: PipelineStagesApi
    }
    products: {
      associationsApi: ProductsAssociationsApi
      basicApi: ProductsBasicApi
      batchApi: ProductsBatchApi
      searchApi: ProductsSearchApi
      getAll: (
        limit?: number,
        after?: string,
        properties?: string[],
        associations?: string[],
        archived?: boolean,
        options?: { headers: { [name: string]: string } },
      ) => Promise<productsModels.SimplePublicObject[]>
    }
    properties: {
      batchApi: PropertiesBatchApi
      coreApi: PropertiesCoreApi
      groupsApi: PropertiesGroupsApi
    }
    quotes: {
      associationsApi: QuotesAssociationsApi
      basicApi: QuotesBasicApi
      batchApi: QuotesBatchApi
      searchApi: QuotesSearchApi
      getAll: (
        limit?: number,
        after?: string,
        properties?: string[],
        associations?: string[],
        archived?: boolean,
        options?: { headers: { [name: string]: string } },
      ) => Promise<quotesModels.SimplePublicObject[]>
    }
    schemas: {
      coreApi: SchemasCoreApi
      defaultApi: SchemasDefaultApi
    }
    tickets: {
      associationsApi: TicketsAssociationsApi
      basicApi: TicketsBasicApi
      batchApi: TicketsBatchApi
      searchApi: TicketsSearchApi
      getAll: (
        limit?: number,
        after?: string,
        properties?: string[],
        associations?: string[],
        archived?: boolean,
        options?: { headers: { [name: string]: string } },
      ) => Promise<ticketsModels.SimplePublicObject[]>
    }
    timeline: {
      eventsApi: EventsApi
      templatesApi: TemplatesApi
      tokensApi: TokensApi
    }
  }
  public events: {
    eventsApi: EventsEventsApi
  }
  public marketing: {
    transactional: {
      defaultApi: TransactionalDefaultApi
    }
  }
  public webhooks: {
    settingsApi: SettingsApi
    subscriptionsApi: SubscriptionsApi
    validateSignature: (
      signature: string,
      clientSecret: string,
      requestBody: string,
      signatureVersion?: string,
      webhooksUrl?: string,
      webhooksMethod?: string,
    ) => boolean
  }
  public cms: {
    auditLogs: {
      defaultApi: AuditLogsDefaultApi
    }
    blogs: {
      authors: {
        defaultApi: AuthorsDefaultApi
      }
      blogPosts: {
        defaultApi: BlogPostsDefaultApi
      }
      tags: {
        defaultApi: TagsDefaultApi
      }
    }
    domains: {
      domainsApi: DomainsApi
    }
    hubdb: {
      rowsApi: RowsApi
      rowsBatchApi: RowsBatchApi
      tablesApi: TablesApi
    }
    performance: {
      defaultApi: PerformanceDefaultApi
    }
    urlRedirects: {
      redirectsApi: RedirectsApi
    }
    siteSearch: {
      defaultApi: SiteSearchDefaultApi
    }
  }
  public communicationPreferences: {
    definitionApi: CommunicationPreferencesDefinitionApi
    statusApi: CommunicationPreferencesStatusApi
  }
  public conversations: {
    visitorIdentification: {
      generateApi: GenerateApi
    }
  }
  protected _interceptors: Interceptor[] = []
  protected _actionsCallbacksApi: ActionsCallbacksApi
  protected _actionsDefinitionsApi: ActionsDefinitionsApi
  protected _actionsFunctionsApi: ActionsFunctionsApi
  protected _actionsRevisionsApi: ActionsRevisionsApi
  protected _oauthAccessTokensApi: OauthAccessTokensApi
  protected _oauthRefreshTokensApi: OauthRefreshTokensApi
  protected _oauthTokensApi: OauthTokensApi
  protected _associationsBatchApi: AssociationsBatchApi
  protected _typesApi: TypesApi
  protected _communicationPreferencesDefinitionApi: CommunicationPreferencesDefinitionApi
  protected _communicationPreferencesStatusApi: CommunicationPreferencesStatusApi
  protected _companiesAssociationsApi: CompaniesAssociationsApi
  protected _companiesBasicApi: CompaniesBasicApi
  protected _companiesBatchApi: CompaniesBatchApi
  protected _companiesSearchApi: CompaniesSearchApi
  protected _contactsAssociationsApi: ContactsAssociationsApi
  protected _contactsBasicApi: ContactsBasicApi
  protected _contactsBatchApi: ContactsBatchApi
  protected _contactsSearchApi: ContactsSearchApi
  protected _feedbackSubmissionsAssociationsApi: FeedbackSubmissionsAssociationsApi
  protected _feedbackSubmissionsBasicApi: FeedbackSubmissionsBasicApi
  protected _feedbackSubmissionsBatchApi: FeedbackSubmissionsBatchApi
  protected _feedbackSubmissionsSearchApi: FeedbackSubmissionsSearchApi
  protected _objectsAssociationsApi: ObjectsAssociationsApi
  protected _objectsBasicApi: ObjectsBasicApi
  protected _objectsBatchApi: ObjectsBatchApi
  protected _objectsSearchApi: ObjectsSearchApi
  protected _dealsAssociationsApi: DealsAssociationsApi
  protected _dealsBasicApi: DealsBasicApi
  protected _dealsBatchApi: DealsBatchApi
  protected _dealsSearchApi: DealsSearchApi
  protected _accountingCallbacksApi: AccountingCallbacksApi
  protected _accountingInvoiceApi: AccountingInvoiceApi
  protected _accountingSettingsApi: AccountingSettingsApi
  protected _accountingSyncApi: AccountingSyncApi
  protected _accountingUserAccountsApi: AccountingUserAccountsApi
  protected _callingSettingsApi: СallingSettingsApi
  protected _cardsApi: CardsApi
  protected _cardsSampleResponseApi: CardsSampleResponseApi
  protected _videoconferencingSettingsApi: VideoconferencingSettingsApi
  protected _importsCoreApi: ImportsCoreApi
  protected _lineItemsAssociationsApi: LineItemsAssociationsApi
  protected _lineItemsBasicApi: LineItemsBasicApi
  protected _lineItemsBatchApi: LineItemsBatchApi
  protected _lineItemsSearchApi: LineItemsSearchApi
  protected _ownersDefaultApi: OwnersDefaultApi
  protected _pipelinesApi: PipelinesApi
  protected _pipelineStagesApi: PipelineStagesApi
  protected _productsAssociationsApi: ProductsAssociationsApi
  protected _productsBasicApi: ProductsBasicApi
  protected _productsBatchApi: ProductsBatchApi
  protected _productsSearchApi: ProductsSearchApi
  protected _propertiesBatchApi: PropertiesBatchApi
  protected _propertiesCoreApi: PropertiesCoreApi
  protected _propertiesGroupsApi: PropertiesGroupsApi
  protected _quotesAssociationsApi: QuotesAssociationsApi
  protected _quotesBasicApi: QuotesBasicApi
  protected _quotesBatchApi: QuotesBatchApi
  protected _quotesSearchApi: QuotesSearchApi
  protected _schemasDefaultApi: SchemasDefaultApi
  protected _schemasCoreApi: SchemasCoreApi
  protected _ticketsAssociationsApi: TicketsAssociationsApi
  protected _ticketsBasicApi: TicketsBasicApi
  protected _ticketsBatchApi: TicketsBatchApi
  protected _ticketsSearchApi: TicketsSearchApi
  protected _eventsApi: EventsApi
  protected _templatesApi: TemplatesApi
  protected _tokensApi: TokensApi
  protected _eventsEventsApi: EventsEventsApi
  protected _transactionalDefaultApi: TransactionalDefaultApi
  protected _settingsApi: SettingsApi
  protected _subscriptionsApi: SubscriptionsApi
  protected _auditLogsDefaultApi: AuditLogsDefaultApi
  protected _authorsDefaultApi: AuthorsDefaultApi
  protected _blogPostsDefaultApi: BlogPostsDefaultApi
  protected _tagsDefaultApi: TagsDefaultApi
  protected _siteSearchDefaultApi: SiteSearchDefaultApi
  protected _domainsApi: DomainsApi
  protected _rowsApi: RowsApi
  protected _rowsBatchApi: RowsBatchApi
  protected _tablesApi: TablesApi
  protected _performanceDefaultApi: PerformanceDefaultApi
  protected _redirectsApi: RedirectsApi
  protected _generateApi: GenerateApi
  protected _apiClientsWithApiKeyAuth: any[]
  protected _apiClientsWithDevApiKeyAuth: any[]
  protected _apiClients: any[]
  protected _apiKey: string | undefined
  protected _developerApiKey: string | undefined
  protected _basePath = 'https://api.hubapi.com'
  protected _accessToken: string | undefined
  protected _defaultHeaders: object | undefined
  protected authentications = {
    hapikey: new ApiKeyAuth('query', 'hapikey'),
    oauth2: new OAuth(),
  }
  protected _limiter: Bottleneck | undefined
  protected _searchLimiter: Bottleneck | undefined
  protected _numberOfApiCallRetries: NumberOfRetries
  protected _useLimiter = true
  protected _useSearchLimiter = false
  protected _limiterOptions: LimiterOptions | undefined
  protected _searchLimiterOptions: LimiterOptions | undefined

  constructor(
    options: {
      apiKey?: string
      accessToken?: string
      basePath?: string
      defaultHeaders?: object
      developerApiKey?: string
      useLimiter?: boolean
      limiterOptions?: LimiterOptions
      numberOfApiCallRetries?: NumberOfRetries
      interceptors?: Interceptor[]
    } = {},
  ) {
    this._actionsCallbacksApi = new ActionsCallbacksApi()
    this._actionsDefinitionsApi = new ActionsDefinitionsApi()
    this._actionsFunctionsApi = new ActionsFunctionsApi()
    this._actionsRevisionsApi = new ActionsRevisionsApi()
    this._oauthAccessTokensApi = new OauthAccessTokensApi()
    this._oauthRefreshTokensApi = new OauthRefreshTokensApi()
    this._oauthTokensApi = new OauthTokensApi()
    this._associationsBatchApi = new AssociationsBatchApi()
    this._typesApi = new TypesApi()
    this._communicationPreferencesDefinitionApi = new CommunicationPreferencesDefinitionApi()
    this._communicationPreferencesStatusApi = new CommunicationPreferencesStatusApi()
    this._companiesAssociationsApi = new CompaniesAssociationsApi()
    this._companiesBasicApi = new CompaniesBasicApi()
    this._companiesBatchApi = new CompaniesBatchApi()
    this._companiesSearchApi = new CompaniesSearchApi()
    this._contactsAssociationsApi = new ContactsAssociationsApi()
    this._contactsBasicApi = new ContactsBasicApi()
    this._contactsBatchApi = new ContactsBatchApi()
    this._contactsSearchApi = new ContactsSearchApi()
    this._dealsAssociationsApi = new DealsAssociationsApi()
    this._dealsBasicApi = new DealsBasicApi()
    this._dealsBatchApi = new DealsBatchApi()
    this._dealsSearchApi = new DealsSearchApi()
    this._accountingCallbacksApi = new AccountingCallbacksApi()
    this._accountingInvoiceApi = new AccountingInvoiceApi()
    this._accountingSettingsApi = new AccountingSettingsApi()
    this._accountingSyncApi = new AccountingSyncApi()
    this._accountingUserAccountsApi = new AccountingUserAccountsApi()
    this._callingSettingsApi = new СallingSettingsApi()
    this._cardsApi = new CardsApi()
    this._cardsSampleResponseApi = new CardsSampleResponseApi()
    this._feedbackSubmissionsAssociationsApi = new FeedbackSubmissionsAssociationsApi()
    this._feedbackSubmissionsBasicApi = new FeedbackSubmissionsBasicApi()
    this._feedbackSubmissionsBatchApi = new FeedbackSubmissionsBatchApi()
    this._feedbackSubmissionsSearchApi = new FeedbackSubmissionsSearchApi()
    this._videoconferencingSettingsApi = new VideoconferencingSettingsApi()
    this._importsCoreApi = new ImportsCoreApi()
    this._lineItemsAssociationsApi = new LineItemsAssociationsApi()
    this._lineItemsBasicApi = new LineItemsBasicApi()
    this._lineItemsBatchApi = new LineItemsBatchApi()
    this._lineItemsSearchApi = new LineItemsSearchApi()
    this._objectsAssociationsApi = new ObjectsAssociationsApi()
    this._objectsBasicApi = new ObjectsBasicApi()
    this._objectsBatchApi = new ObjectsBatchApi()
    this._objectsSearchApi = new ObjectsSearchApi()
    this._ownersDefaultApi = new OwnersDefaultApi()
    this._pipelinesApi = new PipelinesApi()
    this._pipelineStagesApi = new PipelineStagesApi()
    this._productsAssociationsApi = new ProductsAssociationsApi()
    this._productsBasicApi = new ProductsBasicApi()
    this._productsBatchApi = new ProductsBatchApi()
    this._productsSearchApi = new ProductsSearchApi()
    this._propertiesBatchApi = new PropertiesBatchApi()
    this._propertiesCoreApi = new PropertiesCoreApi()
    this._propertiesGroupsApi = new PropertiesGroupsApi()
    this._quotesAssociationsApi = new QuotesAssociationsApi()
    this._quotesBasicApi = new QuotesBasicApi()
    this._quotesBatchApi = new QuotesBatchApi()
    this._quotesSearchApi = new QuotesSearchApi()
    this._schemasDefaultApi = new SchemasDefaultApi()
    this._schemasCoreApi = new SchemasCoreApi()
    this._ticketsAssociationsApi = new TicketsAssociationsApi()
    this._ticketsBasicApi = new TicketsBasicApi()
    this._ticketsBatchApi = new TicketsBatchApi()
    this._ticketsSearchApi = new TicketsSearchApi()
    this._eventsApi = new EventsApi()
    this._templatesApi = new TemplatesApi()
    this._tokensApi = new TokensApi()
    this._eventsEventsApi = new EventsEventsApi()
    this._transactionalDefaultApi = new TransactionalDefaultApi()
    this._settingsApi = new SettingsApi()
    this._subscriptionsApi = new SubscriptionsApi()
    this._auditLogsDefaultApi = new AuditLogsDefaultApi()
    this._authorsDefaultApi = new AuthorsDefaultApi()
    this._blogPostsDefaultApi = new BlogPostsDefaultApi()
    this._tagsDefaultApi = new TagsDefaultApi()
    this._domainsApi = new DomainsApi()
    this._rowsApi = new RowsApi()
    this._rowsBatchApi = new RowsBatchApi()
    this._tablesApi = new TablesApi()
    this._performanceDefaultApi = new PerformanceDefaultApi()
    this._redirectsApi = new RedirectsApi()
    this._generateApi = new GenerateApi()
    this._siteSearchDefaultApi = new SiteSearchDefaultApi()

    this._apiClientsWithApiKeyAuth = [
      this._accountingCallbacksApi,
      this._accountingInvoiceApi,
      this._accountingSettingsApi,
      this._accountingSyncApi,
      this._accountingUserAccountsApi,
      this._actionsCallbacksApi,
      this._associationsBatchApi,
      this._typesApi,
      this._callingSettingsApi,
      this._communicationPreferencesDefinitionApi,
      this._communicationPreferencesStatusApi,
      this._companiesAssociationsApi,
      this._companiesBasicApi,
      this._companiesBatchApi,
      this._companiesSearchApi,
      this._contactsAssociationsApi,
      this._contactsBasicApi,
      this._contactsBatchApi,
      this._contactsSearchApi,
      this._dealsAssociationsApi,
      this._dealsBasicApi,
      this._dealsBatchApi,
      this._dealsSearchApi,
      this._feedbackSubmissionsAssociationsApi,
      this._feedbackSubmissionsBasicApi,
      this._feedbackSubmissionsBatchApi,
      this._feedbackSubmissionsSearchApi,
      this._importsCoreApi,
      this._lineItemsAssociationsApi,
      this._lineItemsBasicApi,
      this._lineItemsBatchApi,
      this._lineItemsSearchApi,
      this._objectsAssociationsApi,
      this._objectsBasicApi,
      this._objectsBatchApi,
      this._objectsSearchApi,
      this._ownersDefaultApi,
      this._pipelinesApi,
      this._pipelineStagesApi,
      this._productsAssociationsApi,
      this._productsBasicApi,
      this._productsBatchApi,
      this._productsSearchApi,
      this._propertiesBatchApi,
      this._propertiesCoreApi,
      this._propertiesGroupsApi,
      this._quotesAssociationsApi,
      this._quotesBasicApi,
      this._quotesBatchApi,
      this._quotesSearchApi,
      this._schemasDefaultApi,
      this._schemasCoreApi,
      this._ticketsAssociationsApi,
      this._ticketsBasicApi,
      this._ticketsBatchApi,
      this._ticketsSearchApi,
      this._templatesApi,
      this._tokensApi,
      this._eventsEventsApi,
      this._transactionalDefaultApi,
      this._authorsDefaultApi,
      this._blogPostsDefaultApi,
      this._tagsDefaultApi,
      this._domainsApi,
      this._rowsApi,
      this._rowsBatchApi,
      this._tablesApi,
      this._generateApi,
      this._redirectsApi,
      this._siteSearchDefaultApi,
      this._videoconferencingSettingsApi,
    ]
    this._apiClientsWithDevApiKeyAuth = [
      this._actionsDefinitionsApi,
      this._actionsFunctionsApi,
      this._actionsRevisionsApi,
      this._auditLogsDefaultApi,
      this._cardsApi,
      this._settingsApi,
      this._subscriptionsApi,
      this._performanceDefaultApi,
    ]
    this._apiClients = [
      ...this._apiClientsWithApiKeyAuth,
      ...this._apiClientsWithDevApiKeyAuth,
      this._oauthAccessTokensApi,
      this._oauthRefreshTokensApi,
      this._oauthTokensApi,
      this._cardsSampleResponseApi,
      this._eventsApi,
    ]
    this._numberOfApiCallRetries = NumberOfRetries.NoRetries
    this._setUseQuerystring(true)
    this._setOptions(options)
    this.automation = {
      actions: {
        callbacksApi: this._actionsCallbacksApi,
        definitionsApi: this._actionsDefinitionsApi,
        functionsApi: this._actionsFunctionsApi,
        revisionsApi: this._actionsRevisionsApi,
      },
    }
    this.crm = {
      associations: {
        batchApi: this._associationsBatchApi,
        typesApi: this._typesApi,
      },
      companies: {
        associationsApi: this._companiesAssociationsApi,
        basicApi: this._companiesBasicApi,
        batchApi: this._companiesBatchApi,
        searchApi: this._companiesSearchApi,
        getAll: this._retrieveGetAllFunction<
          companiesModels.SimplePublicObject,
          companiesModels.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging
        >(this._companiesBasicApi.getPage.bind(this._companiesBasicApi)),
      },
      contacts: {
        associationsApi: this._contactsAssociationsApi,
        basicApi: this._contactsBasicApi,
        batchApi: this._contactsBatchApi,
        searchApi: this._contactsSearchApi,
        getAll: this._retrieveGetAllFunction<
          contactsModels.SimplePublicObject,
          contactsModels.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging
        >(this._contactsBasicApi.getPage.bind(this._contactsBasicApi)),
      },
      deals: {
        associationsApi: this._dealsAssociationsApi,
        basicApi: this._dealsBasicApi,
        batchApi: this._dealsBatchApi,
        searchApi: this._dealsSearchApi,
        getAll: this._retrieveGetAllFunction<
          dealsModels.SimplePublicObject,
          dealsModels.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging
        >(this._dealsBasicApi.getPage.bind(this._dealsBasicApi)),
      },
      extensions: {
        accounting: {
          callbacksApi: this._accountingCallbacksApi,
          invoiceApi: this._accountingInvoiceApi,
          settingsApi: this._accountingSettingsApi,
          syncApi: this._accountingSyncApi,
          userAccountsApi: this._accountingUserAccountsApi,
        },
        calling: {
          settingsApi: this._callingSettingsApi,
        },
        cards: {
          cardsApi: this._cardsApi,
          sampleResponseApi: this._cardsSampleResponseApi,
        },
        videoconferencing: {
          settingsApi: this._videoconferencingSettingsApi,
        },
      },
      imports: {
        coreApi: this._importsCoreApi,
      },
      lineItems: {
        associationsApi: this._lineItemsAssociationsApi,
        basicApi: this._lineItemsBasicApi,
        batchApi: this._lineItemsBatchApi,
        searchApi: this._lineItemsSearchApi,
        getAll: this._retrieveGetAllFunction<
          lineItemsModels.SimplePublicObject,
          lineItemsModels.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging
        >(this._lineItemsBasicApi.getPage.bind(this._lineItemsBasicApi)),
      },
      objects: {
        associationsApi: this._objectsAssociationsApi,
        basicApi: this._objectsBasicApi,
        batchApi: this._objectsBatchApi,
        searchApi: this._objectsSearchApi,
        feedbackSubmissions: {
          associationsApi: this._feedbackSubmissionsAssociationsApi,
          basicApi: this._feedbackSubmissionsBasicApi,
          batchApi: this._feedbackSubmissionsBatchApi,
          searchApi: this._feedbackSubmissionsSearchApi,
        },
      },
      owners: {
        defaultApi: this._ownersDefaultApi,
      },
      pipelines: {
        pipelinesApi: this._pipelinesApi,
        pipelineStagesApi: this._pipelineStagesApi,
      },
      products: {
        associationsApi: this._productsAssociationsApi,
        basicApi: this._productsBasicApi,
        batchApi: this._productsBatchApi,
        searchApi: this._productsSearchApi,
        getAll: this._retrieveGetAllFunction<
          productsModels.SimplePublicObject,
          productsModels.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging
        >(this._productsBasicApi.getPage.bind(this._productsBasicApi)),
      },
      properties: {
        batchApi: this._propertiesBatchApi,
        coreApi: this._propertiesCoreApi,
        groupsApi: this._propertiesGroupsApi,
      },
      quotes: {
        associationsApi: this._quotesAssociationsApi,
        basicApi: this._quotesBasicApi,
        batchApi: this._quotesBatchApi,
        searchApi: this._quotesSearchApi,
        getAll: this._retrieveGetAllFunction<
          quotesModels.SimplePublicObject,
          quotesModels.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging
        >(this._quotesBasicApi.getPage.bind(this._quotesBasicApi)),
      },
      schemas: {
        defaultApi: this._schemasDefaultApi,
        coreApi: this._schemasCoreApi,
      },
      tickets: {
        associationsApi: this._ticketsAssociationsApi,
        basicApi: this._ticketsBasicApi,
        batchApi: this._ticketsBatchApi,
        searchApi: this._ticketsSearchApi,
        getAll: this._retrieveGetAllFunction<
          ticketsModels.SimplePublicObject,
          ticketsModels.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging
        >(this._ticketsBasicApi.getPage.bind(this._ticketsBasicApi)),
      },
      timeline: {
        eventsApi: this._eventsApi,
        templatesApi: this._templatesApi,
        tokensApi: this._tokensApi,
      },
    }
    this.events = {
      eventsApi: this._eventsEventsApi,
    }
    this.marketing = {
      transactional: {
        defaultApi: this._transactionalDefaultApi,
      },
    }
    this.oauth = {
      accessTokensApi: this._oauthAccessTokensApi,
      refreshTokensApi: this._oauthRefreshTokensApi,
      tokensApi: this._oauthTokensApi,
      getAuthorizationUrl: this._getAuthorizationUrl,
    }
    this.webhooks = {
      settingsApi: this._settingsApi,
      subscriptionsApi: this._subscriptionsApi,
      validateSignature: this._validateSignature,
    }
    this.cms = {
      auditLogs: {
        defaultApi: this._auditLogsDefaultApi,
      },
      blogs: {
        authors: {
          defaultApi: this._authorsDefaultApi,
        },
        blogPosts: {
          defaultApi: this._blogPostsDefaultApi,
        },
        tags: {
          defaultApi: this._tagsDefaultApi,
        },
      },
      domains: {
        domainsApi: this._domainsApi,
      },
      hubdb: {
        rowsApi: this._rowsApi,
        rowsBatchApi: this._rowsBatchApi,
        tablesApi: this._tablesApi,
      },
      performance: {
        defaultApi: this._performanceDefaultApi,
      },
      urlRedirects: {
        redirectsApi: this._redirectsApi,
      },
      siteSearch: {
        defaultApi: this._siteSearchDefaultApi,
      },
    }
    this.communicationPreferences = {
      definitionApi: this._communicationPreferencesDefinitionApi,
      statusApi: this._communicationPreferencesStatusApi,
    }
    this.conversations = {
      visitorIdentification: {
        generateApi: this._generateApi,
      },
    }
  }

  public setApiKey(apiKeyToSet: string) {
    this._apiKey = apiKeyToSet
    this.authentications.hapikey.apiKey = apiKeyToSet
    _.each(this._apiClientsWithApiKeyAuth, (apiClient) => {
      apiClient.setApiKey(0, apiKeyToSet)
    })
  }

  public setDeveloperApiKey(developerApiKeyToSet: string) {
    this._developerApiKey = developerApiKeyToSet
    _.each(this._apiClientsWithDevApiKeyAuth, (apiClient) => {
      apiClient.setApiKey(0, developerApiKeyToSet)
    })
  }

  public setBasePath(basePathToSet?: string) {
    if (_.isNil(basePathToSet)) {
      return
    }

    this._basePath = basePathToSet.replace(/\/+$/, '')

    _.each(this._apiClients, (apiClient) => {
      apiClient.basePath = this._basePath
    })
  }

  public setAccessToken(accessTokenToSet: string) {
    this._accessToken = accessTokenToSet
    this.authentications.oauth2.accessToken = accessTokenToSet
    _.each(this._apiClients, (apiClient) => {
      apiClient.accessToken = accessTokenToSet
    })
  }

  public addInterceptor(interceptor: Interceptor) {
    this._interceptors.push(interceptor)
    _.each(this._apiClients, (apiClient) => {
      apiClient.addInterceptor(interceptor)
    })
  }

  public setDefaultHeaders(defaultHeadersToSet?: object) {
    this._defaultHeaders = _.assign({}, defaultHeadersToSet, DEFAULT_HEADERS)
    _.each(this._apiClients, (apiClient) => {
      apiClient.defaultHeaders = this._defaultHeaders
    })
  }

  public setAuth(options: { apiKey?: string; developerApiKey?: string; accessToken?: string } = {}) {
    if (options.apiKey) {
      this.setApiKey(options.apiKey)
    }

    if (options.developerApiKey) {
      this.setDeveloperApiKey(options.developerApiKey)
    }

    if (options.accessToken) {
      this.setAccessToken(options.accessToken)
    }
  }

  public getOptions(): {
    basePath: string | undefined
    defaultHeaders: object | undefined
    apiKey: string | undefined
    developerApiKey: string | undefined
    accessToken: string | undefined
    useLimiter: boolean
    limiterOptions: LimiterOptions | undefined
    numberOfApiCallRetries: NumberOfRetries
    interceptors: Interceptor[]
  } {
    return {
      basePath: this._basePath,
      defaultHeaders: this._defaultHeaders,
      apiKey: this._apiKey,
      developerApiKey: this._developerApiKey,
      accessToken: this._accessToken,
      useLimiter: this._useLimiter,
      limiterOptions: this._limiterOptions,
      numberOfApiCallRetries: this._numberOfApiCallRetries,
      interceptors: this._interceptors,
    }
  }

  public apiRequest(opts: any): Promise<{ response: http.IncomingMessage; body?: any }> {
    const params = _.cloneDeep(opts)
    params.method = params.method || 'GET'
    params.json = true
    params.resolveWithFullResponse = true
    params.url = params.overlapUrl || this._basePath + (params.path || '')
    delete params.overlapUrl
    delete params.path
    params.qsStringifyOptions = {
      arrayFormat: 'repeat',
    }
    params.qs = Object.assign({}, params.qs)

    params.headers = _.assign({}, opts.headers, this._defaultHeaders)

    if (this.authentications.hapikey.apiKey) {
      this.authentications.hapikey.applyToRequest(params)
    }
    if (this.authentications.oauth2.accessToken) {
      this.authentications.oauth2.applyToRequest(params)
    }

    let authenticationPromise = Promise.resolve()
    if (this.authentications.hapikey.apiKey) {
      authenticationPromise = authenticationPromise.then(() => this.authentications.hapikey.applyToRequest(params))
    }
    if (this.authentications.oauth2.accessToken) {
      authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(params))
    }

    let interceptorPromise = authenticationPromise

    for (const interceptor of this._interceptors) {
      interceptorPromise = interceptorPromise.then(() => interceptor(params))
    }

    return interceptorPromise.then(() => {
      return new Promise<{ response: http.IncomingMessage; body?: any }>((resolve, reject) => {
        request(params, (error: any, response: Response, body: any) => {
          if (error) {
            reject(error)
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body })
            } else {
              reject(new HttpError(response, body, response.statusCode))
            }
          }
        })
      })
    })
  }

  protected _getAuthorizationUrl(
    clientId: string,
    redirectUri: string,
    scope: string,
    optionalScope?: string,
    state?: string,
  ): string {
    const params = {
      client_id: clientId,
      redirect_uri: redirectUri,
      scope,
      optional_scope: optionalScope,
      state,
    }

    return `https://app.hubspot.com/oauth/authorize?${qs.stringify(_.omitBy(params, _.isNil))}`
  }

  protected _validateSignature(
    signature: string,
    clientSecret: string,
    requestBody: string,
    signatureVersion = 'v1',
    webhooksUrl?: string,
    webhooksMethod = 'POST',
  ): boolean {
    const sourceString = _.isEqual(signatureVersion, 'v1')
      ? clientSecret + requestBody
      : clientSecret + webhooksMethod + webhooksUrl + requestBody

    const hash = crypto
      .createHash('sha256')
      .update(sourceString)
      .digest('hex')

    return _.isEqual(signature, hash)
  }

  private _retrieveGetAllFunction<T, V>(
    getPageFunction: (
      limit?: number,
      after?: string,
      properties?: string[],
      associations?: string[],
      archived?: boolean,
      options?: { headers: { [name: string]: string } },
    ) => Promise<{ response: http.IncomingMessage; body: V }>,
  ): (
    limit?: number,
    after?: string,
    properties?: string[],
    associations?: string[],
    archived?: boolean,
    options?: { headers: { [name: string]: string } },
  ) => Promise<T[]> {
    return async (
      limit?: number,
      after?: string,
      properties?: string[],
      associations?: string[],
      archived?: boolean,
      options?: { headers: { [name: string]: string } },
    ): Promise<T[]> => {
      const limitInternal = limit ?? 100
      let afterInternal = after
      const result: T[] = []
      let response: { response: http.IncomingMessage; body: V }

      do {
        response = await getPageFunction(limitInternal, afterInternal, properties, associations, archived, options)
        afterInternal = _.get(response, 'body.paging.next.after')
        result.push(..._.get(response, 'body.results'))
      } while (!_.isNil(afterInternal))

      return result
    }
  }

  private _setOptions(options: {
    apiKey?: string
    developerApiKey?: string
    accessToken?: string
    basePath?: string
    defaultHeaders?: object
    useLimiter?: boolean
    limiterOptions?: LimiterOptions
    numberOfApiCallRetries?: NumberOfRetries
    interceptors?: Interceptor[]
  }) {
    this.setAuth(options)
    this.setBasePath(options.basePath)
    this.setDefaultHeaders(options.defaultHeaders)
    this._setMethodsPatchOptions(options)
    this._setInterceptors(options)
  }

  private _setUseQuerystring(useQuerystring: boolean) {
    _.each(this._apiClients, (apiClient) => (apiClient._useQuerystring = useQuerystring))
  }

  private _getLimiterWrappedMethod(method: any) {
    if (!this._limiter) {
      throw new Error('Limiter not defined')
    }
    return this._limiter.wrap(method)
  }

  private _getSearchLimiterWrappedMethod(method: any) {
    if (!this._searchLimiter) {
      throw new Error('Search Limiter not defined')
    }
    return this._searchLimiter.wrap(method)
  }

  private _waitAfterRequestFailure(statusCode: number, retryNumber: number, retryTimeout: number) {
    console.error(
      `Request failed with status code [${statusCode}], will retry [${retryNumber}] time in [${retryTimeout}] ms`,
    )
    return new Promise((resolve) => setTimeout(resolve, retryTimeout * retryNumber))
  }

  private _getRetryWrappedMethod(method: any) {
    return async (...args: any) => {
      const numberOfRetries = this._numberOfApiCallRetries.valueOf() + 1
      let resultSuccess: any
      let resultRejected: any

      for (let index = 1; index <= numberOfRetries; index++) {
        try {
          resultSuccess = await method(...args)
          resultRejected = null
          break
        } catch (e) {
          resultRejected = e

          if (_.isEqual(index, numberOfRetries)) {
            break
          }

          const statusCode = _.get(e, 'response.statusCode')

          if (statusCode >= 500 && statusCode <= 599) {
            await this._waitAfterRequestFailure(statusCode, index, RETRY_TIMEOUT.INTERNAL_SERVER_ERROR)
            continue
          }

          if (_.isEqual(statusCode, 429)) {
            const policyName = _.get(e, 'response.body.policyName')

            if (_.isEqual(policyName, TEN_SECONDLY_ROLLING)) {
              await this._waitAfterRequestFailure(statusCode, index, RETRY_TIMEOUT.TOO_MANY_REQUESTS)
              continue
            }

            const message = _.get(e, 'response.body.message')

            if (_.isEqual(message, SECONDLY_LIMIT_MESSAGE)) {
              await this._waitAfterRequestFailure(statusCode, index, RETRY_TIMEOUT.TOO_MANY_SEARCH_REQUESTS)
              continue
            }
          }

          break
        }
      }

      return new Promise((resolve, reject) => {
        if (resultRejected) {
          return reject(resultRejected)
        }
        return resolve(resultSuccess)
      })
    }
  }

  private _patchApiClientMethod(methodName: string, clientInstance: any, clientPrototype: any) {
    const methodToPatch = clientPrototype[methodName].bind(clientInstance)

    let patchedMethod = methodToPatch

    if (this._useSearchLimiter && _.isEqual(methodName, SEARCH_METHOD_NAME)) {
      patchedMethod = this._getSearchLimiterWrappedMethod(methodToPatch)
    }

    if (this._useLimiter) {
      patchedMethod = this._getLimiterWrappedMethod(patchedMethod)
    }

    if (!_.isEqual(this._numberOfApiCallRetries, NumberOfRetries.NoRetries)) {
      patchedMethod = this._getRetryWrappedMethod(patchedMethod)
    }

    clientInstance[methodName] = patchedMethod
  }

  private _patchApiClient(clientInstance: any) {
    const clientPrototype = Object.getPrototypeOf(clientInstance)
    let methodsNamesToPatch = Object.getOwnPropertyNames(clientPrototype)
    methodsNamesToPatch = _.differenceWith(methodsNamesToPatch, METHOD_NAMES_TO_EXCLUDE_FROM_PATCHING)

    const patchFn = this._patchApiClientMethod.bind(this)

    _.each(methodsNamesToPatch, (methodName) => {
      patchFn(methodName, clientInstance, clientPrototype)
    })
  }

  private _patchApiClients() {
    _.each(this._apiClients, this._patchApiClient.bind(this))
  }

  private _patchApiRequestMethod() {
    let apiRequestMethodToPatch: any = this.apiRequest.bind(this)

    if (this._useLimiter) {
      apiRequestMethodToPatch = this._getLimiterWrappedMethod(apiRequestMethodToPatch)
    }

    if (!_.isEqual(this._numberOfApiCallRetries, NumberOfRetries.NoRetries)) {
      apiRequestMethodToPatch = this._getRetryWrappedMethod(apiRequestMethodToPatch)
    }

    this.apiRequest = apiRequestMethodToPatch
  }

  private _setMethodsPatchOptions(
    options: {
      useLimiter?: boolean
      limiterOptions?: LimiterOptions
      numberOfApiCallRetries?: NumberOfRetries
    } = {},
  ) {
    this._useLimiter = _.isNil(options.useLimiter) ? true : options.useLimiter
    this._numberOfApiCallRetries = _.isNil(options.numberOfApiCallRetries)
      ? NumberOfRetries.NoRetries
      : options.numberOfApiCallRetries

    if (this._useLimiter) {
      this._limiterOptions = _.isNil(options.limiterOptions) ? DEFAULT_LIMITER_OPTIONS : options.limiterOptions
      this._limiter = new Bottleneck(this._limiterOptions)
      const limiterMinTime = _.get(this._limiterOptions, 'minTime') || 0

      if (limiterMinTime < SEARCH_LIMITER_MIN_TIME) {
        this._useSearchLimiter = true
        const minTime = SEARCH_LIMITER_MIN_TIME - limiterMinTime
        const id = `search-${this._limiterOptions.id}`
        this._searchLimiterOptions = { ...this._limiterOptions, minTime, id, maxConcurrent: 3 }
        this._searchLimiter = new Bottleneck(this._searchLimiterOptions)
      }
    }

    if (this._useLimiter || !_.isEqual(this._numberOfApiCallRetries, NumberOfRetries.NoRetries)) {
      this._patchApiClients()
      this._patchApiRequestMethod()
    }
  }

  private _setInterceptors(options: { interceptors?: Interceptor[] } = {}) {
    if (options.interceptors) {
      _.each(options.interceptors, this.addInterceptor.bind(this))
    }
  }
}
