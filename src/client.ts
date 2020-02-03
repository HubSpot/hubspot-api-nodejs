import Bottleneck from 'bottleneck'
import http = require('http')
import * as _ from 'lodash'
import * as qs from 'querystring'
import request = require('request')
import { Response } from 'request'
// @ts-ignore
import * as pJson from '../../package.json'
import { BatchApi as AssociationsBatchApi } from '../codegen/crm/associations/api'
import {
    AssociationsApi as CompaniesAssociationsApi,
    BasicApi as CompaniesBasicApi,
    BatchApi as CompaniesBatchApi,
    SearchApi as CompaniesSearchApi,
} from '../codegen/crm/companies/api'
import {
    AssociationsApi as ContactsAssociationsApi,
    BasicApi as ContactsBasicApi,
    BatchApi as ContactsBatchApi,
    SearchApi as ContactsSearchApi,
} from '../codegen/crm/contacts/api'
import {
    AssociationsApi as DealsAssociationsApi,
    BasicApi as DealsBasicApi,
    BatchApi as DealsBatchApi,
    SearchApi as DealsSearchApi,
} from '../codegen/crm/deals/api'
import { DefaultApi as CardsDefaultApi } from '../codegen/crm/extensions/cards/api'
import {
    AssociationsApi as LineItemsAssociationsApi,
    BasicApi as LineItemsBasicApi,
    BatchApi as LineItemsBatchApi,
    SearchApi as LineItemsSearchApi,
} from '../codegen/crm/line_items/api'
import { ApiKeyAuth, DefaultApi as OwnersDefaultApi, OAuth } from '../codegen/crm/owners/api'
import { PipelinesApi, PipelineStagesApi } from '../codegen/crm/pipelines/api'
import {
    AssociationsApi as ProductsAssociationsApi,
    BasicApi as ProductsBasicApi,
    BatchApi as ProductsBatchApi,
    SearchApi as ProductsSearchApi,
} from '../codegen/crm/products/api'
import {
    BatchApi as PropertiesBatchApi,
    CoreApi as PropertiesCoreApi,
    GroupsApi as PropertiesGroupsApi,
} from '../codegen/crm/properties/api'
import {
    AssociationsApi as QuotesAssociationsApi,
    BasicApi as QuotesBasicApi,
    BatchApi as QuotesBatchApi,
    SearchApi as QuotesSearchApi,
} from '../codegen/crm/quotes/api'
import {
    AssociationsApi as TicketsAssociationsApi,
    BasicApi as TicketsBasicApi,
    BatchApi as TicketsBatchApi,
    SearchApi as TicketsSearchApi,
} from '../codegen/crm/tickets/api'

import { DefaultApi as OauthDefaultApi } from '../codegen/oauth/api'

const DEFAULT_HEADERS = { 'User-Agent': `${pJson.name}_${pJson.version}` }
const METHOD_NAMES_TO_EXCLUDE_FROM_PATCHING = [
    'constructor',
    'useQuerystring',
    'basePath',
    'defaultHeaders',
    'setDefaultAuthentication',
    'setApiKey',
    'accessToken',
    'addInterceptor',]

const RETRY_TIMEOUT = {
    INTERNAL_SERVER_ERROR: 200,
    TOO_MANY_REQUESTS: 10*1000
}

const TEN_SECONDLY_ROLLING = "TEN_SECONDLY_ROLLING"

export enum NumberOfRetries {
    NoRetries,
    One,
    Two,
    Three,
    Four,
    Five,
    Six
}

export class Client {
    public oauth: {
        defaultApi: OauthDefaultApi,
        getAuthorizationUrl: (clientId: string, redirectUri: string, scopes: string) => string
    }
    public crm: {
        associations: {
            batchApi: AssociationsBatchApi
        },
        companies: {
            associationsApi: CompaniesAssociationsApi,
            basicApi: CompaniesBasicApi,
            batchApi: CompaniesBatchApi,
            searchApi: CompaniesSearchApi
        },
        contacts: {
            associationsApi: ContactsAssociationsApi,
            basicApi: ContactsBasicApi,
            batchApi: ContactsBatchApi,
            searchApi: ContactsSearchApi
        },
        deals: {
            associationsApi: DealsAssociationsApi,
            basicApi: DealsBasicApi,
            batchApi: DealsBatchApi,
            searchApi: DealsSearchApi
        },
        extensions: {
            cards: {
                defaultApi: CardsDefaultApi
            },
        },
        lineItems: {
            associationsApi: LineItemsAssociationsApi,
            basicApi: LineItemsBasicApi,
            batchApi: LineItemsBatchApi,
            searchApi: LineItemsSearchApi
        },
        owners: {
            defaultApi: OwnersDefaultApi
        },
        pipelines: {
            pipelinesApi: PipelinesApi,
            pipelineStagesApi: PipelineStagesApi
        },
        products: {
            associationsApi: ProductsAssociationsApi,
            basicApi: ProductsBasicApi,
            batchApi: ProductsBatchApi,
            searchApi: ProductsSearchApi
        },
        properties: {
            batchApi: PropertiesBatchApi,
            coreApi: PropertiesCoreApi,
            groupsApi: PropertiesGroupsApi
        },
        quotes: {
            associationsApi: QuotesAssociationsApi,
            basicApi: QuotesBasicApi,
            batchApi: QuotesBatchApi,
            searchApi: QuotesSearchApi
        },
        tickets: {
            associationsApi: TicketsAssociationsApi,
            basicApi: TicketsBasicApi,
            batchApi: TicketsBatchApi,
            searchApi: TicketsSearchApi
        }
    }
    protected _oauthDefaultApi: OauthDefaultApi
    protected _associationsBatchApi: AssociationsBatchApi
    protected _companiesAssociationsApi: CompaniesAssociationsApi
    protected _companiesBasicApi: CompaniesBasicApi
    protected _companiesBatchApi: CompaniesBatchApi
    protected _companiesSearchApi: CompaniesSearchApi
    protected _contactsAssociationsApi: ContactsAssociationsApi
    protected _contactsBasicApi: ContactsBasicApi
    protected _contactsBatchApi: ContactsBatchApi
    protected _contactsSearchApi: ContactsSearchApi
    protected _dealsAssociationsApi: DealsAssociationsApi
    protected _dealsBasicApi: DealsBasicApi
    protected _dealsBatchApi: DealsBatchApi
    protected _dealsSearchApi: DealsSearchApi
    protected _cardsDefaultApi: CardsDefaultApi
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
    protected _ticketsAssociationsApi: TicketsAssociationsApi
    protected _ticketsBasicApi: TicketsBasicApi
    protected _ticketsBatchApi: TicketsBatchApi
    protected _ticketsSearchApi: TicketsSearchApi
    protected _apiClientsWithAuth: any[]
    protected _apiClients: any[]
    protected _apiKey: string | undefined
    protected _basePath = 'https://api.hubapi.com'
    protected _accessToken: string | undefined
    protected _defaultHeaders: object | undefined
    protected _refreshToken: string | undefined
    protected authentications = {
        'hapikey': new ApiKeyAuth('query', 'hapikey'),
        'oauth2': new OAuth(),
    }
    protected _limiter: Bottleneck
    protected _numberOfApiCallRetries: NumberOfRetries
    protected _allowRateLimiting = true

    constructor(
        options: {
            apiKey?: string
            accessToken?: string
            clientId?: string
            clientSecret?: string
            redirectUri?: string
            refreshToken?: string
            basePath?: string
            defaultHeaders?: object
            allowRateLimiting?: boolean
            numberOfApiCallRetries?: NumberOfRetries
        } = {},
    ) {
        this._oauthDefaultApi = new OauthDefaultApi()
        this._associationsBatchApi = new AssociationsBatchApi()
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
        this._cardsDefaultApi = new CardsDefaultApi()
        this._lineItemsAssociationsApi = new LineItemsAssociationsApi()
        this._lineItemsBasicApi = new LineItemsBasicApi()
        this._lineItemsBatchApi = new LineItemsBatchApi()
        this._lineItemsSearchApi = new LineItemsSearchApi()
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
        this._ticketsAssociationsApi = new TicketsAssociationsApi()
        this._ticketsBasicApi = new TicketsBasicApi()
        this._ticketsBatchApi = new TicketsBatchApi()
        this._ticketsSearchApi = new TicketsSearchApi()
        this._apiClientsWithAuth = [
            this._associationsBatchApi,
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
            this._cardsDefaultApi,
            this._lineItemsAssociationsApi,
            this._lineItemsBasicApi,
            this._lineItemsBatchApi,
            this._lineItemsSearchApi,
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
            this._ticketsAssociationsApi,
            this._ticketsBasicApi,
            this._ticketsBatchApi,
            this._ticketsSearchApi,
        ]
        this._apiClients = this._apiClientsWithAuth.slice()
        this._apiClients.push(this._oauthDefaultApi)
        this._limiter = new Bottleneck({
            maxConcurrent: 5,
            minTime: 1000/9,
        })
        this._numberOfApiCallRetries = NumberOfRetries.NoRetries
        this._setUseQuerystring(true)
        this._setOptions(options)
        this.crm = {
            associations: {
                batchApi: this._associationsBatchApi,
            },
            companies: {
                associationsApi: this._companiesAssociationsApi,
                basicApi: this._companiesBasicApi,
                batchApi: this._companiesBatchApi,
                searchApi: this._companiesSearchApi,
            },
            contacts: {
                associationsApi: this._contactsAssociationsApi,
                basicApi: this._contactsBasicApi,
                batchApi: this._contactsBatchApi,
                searchApi: this._contactsSearchApi,
            },
            deals: {
                associationsApi: this._dealsAssociationsApi,
                basicApi: this._dealsBasicApi,
                batchApi: this._dealsBatchApi,
                searchApi: this._dealsSearchApi,
            },
            extensions: {
                cards: {
                    defaultApi: this._cardsDefaultApi,
                },
            },
            lineItems: {
                associationsApi: this._lineItemsAssociationsApi,
                basicApi: this._lineItemsBasicApi,
                batchApi: this._lineItemsBatchApi,
                searchApi: this._lineItemsSearchApi,
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
            },
            tickets: {
                associationsApi: this._ticketsAssociationsApi,
                basicApi: this._ticketsBasicApi,
                batchApi: this._ticketsBatchApi,
                searchApi: this._ticketsSearchApi,
            },
        }
        this.oauth = {
            defaultApi: this._oauthDefaultApi,
            getAuthorizationUrl: this._getAuthorizationUrl.bind(this),
        }
    }

    public setApiKey(apiKeyToSet: string) {
        this._apiKey = apiKeyToSet
        this.authentications.hapikey.apiKey = apiKeyToSet
        _.each(this._apiClientsWithAuth, (apiClient) => {
            apiClient.setApiKey(0, apiKeyToSet)
        })
    }

    public setBasePath(basePathToSet?: string) {
        if (_.isNil(basePathToSet)) {
            return
        }

        this._basePath = basePathToSet
        const oauthBasePath = `${basePathToSet}/oauth`.replace(/\/+$/, '')
        const associationsBasePath = `${basePathToSet}/crm/v3/associations`.replace(/\/+$/, '')
        const companiesBasePath = `${basePathToSet}/crm/v3/objects`.replace(/\/+$/, '')
        const contactsBasePath = `${basePathToSet}/crm/v3/objects`.replace(/\/+$/, '')
        const dealsBasePath = `${basePathToSet}/crm/v3/objects`.replace(/\/+$/, '')
        const cardsBasePath = `${basePathToSet}/crm/v3/extensions`.replace(/\/+$/, '')
        const lineItemsBasePath = `${basePathToSet}/crm/v3/objects`.replace(/\/+$/, '')
        const ownersBasePath = `${basePathToSet}/crm/v3/owners`.replace(/\/+$/, '')
        const pipelinesBasePath = `${basePathToSet}/crm/v3/pipelines`.replace(/\/+$/, '')
        const productsBasePath = `${basePathToSet}/crm/v3/objects`.replace(/\/+$/, '')
        const propertiesBasePath = `${basePathToSet}/crm/v3/properties`.replace(/\/+$/, '')
        const quotesBasePath = `${basePathToSet}/crm/v3/objects`.replace(/\/+$/, '')
        const ticketsBasePath = `${basePathToSet}/crm/v3/objects`.replace(/\/+$/, '')

        this._oauthDefaultApi.basePath = oauthBasePath
        this._associationsBatchApi.basePath = associationsBasePath
        this._companiesAssociationsApi.basePath = companiesBasePath
        this._companiesBasicApi.basePath = companiesBasePath
        this._companiesBatchApi.basePath = companiesBasePath
        this._companiesSearchApi.basePath = companiesBasePath
        this._contactsAssociationsApi.basePath = contactsBasePath
        this._contactsBasicApi.basePath = contactsBasePath
        this._contactsBatchApi.basePath = contactsBasePath
        this._contactsSearchApi.basePath = contactsBasePath
        this._dealsAssociationsApi.basePath = dealsBasePath
        this._dealsBasicApi.basePath = dealsBasePath
        this._dealsBatchApi.basePath = dealsBasePath
        this._dealsSearchApi.basePath = dealsBasePath
        this._cardsDefaultApi.basePath = cardsBasePath
        this._lineItemsAssociationsApi.basePath = lineItemsBasePath
        this._lineItemsBasicApi.basePath = lineItemsBasePath
        this._lineItemsBatchApi.basePath = lineItemsBasePath
        this._lineItemsSearchApi.basePath = lineItemsBasePath
        this._ownersDefaultApi.basePath = ownersBasePath
        this._pipelinesApi.basePath = pipelinesBasePath
        this._pipelineStagesApi.basePath = pipelinesBasePath
        this._productsAssociationsApi.basePath = productsBasePath
        this._productsBasicApi.basePath = productsBasePath
        this._productsBatchApi.basePath = productsBasePath
        this._productsSearchApi.basePath = productsBasePath
        this._propertiesBatchApi.basePath = propertiesBasePath
        this._propertiesCoreApi.basePath = propertiesBasePath
        this._propertiesGroupsApi.basePath = propertiesBasePath
        this._quotesAssociationsApi.basePath = quotesBasePath
        this._quotesBasicApi.basePath = quotesBasePath
        this._quotesBatchApi.basePath = quotesBasePath
        this._quotesSearchApi.basePath = quotesBasePath
        this._ticketsAssociationsApi.basePath = ticketsBasePath
        this._ticketsBasicApi.basePath = ticketsBasePath
        this._ticketsBatchApi.basePath = ticketsBasePath
        this._ticketsSearchApi.basePath = ticketsBasePath
    }

    public setAccessToken(accessTokenToSet: string) {
        this._accessToken = accessTokenToSet
        this.authentications.oauth2.accessToken = accessTokenToSet
        _.each(this._apiClientsWithAuth, (apiClient) => {
            apiClient.accessToken = accessTokenToSet
        })
    }

    public setDefaultHeaders(defaultHeadersToSet?: object) {
        this._defaultHeaders = _.assign({}, defaultHeadersToSet, DEFAULT_HEADERS)
        _.each(this._apiClients, (apiClient) => {
            apiClient.defaultHeaders = this._defaultHeaders
        })
    }

    public setAuth(options: { apiKey?: string; accessToken?: string } = {}) {
        if (options.apiKey) {
            this.setApiKey(options.apiKey)
        } else if (options.accessToken) {
            this.setAccessToken(options.accessToken)
        }
    }

    public getOptions(): {
        basePath: string | undefined
        defaultHeaders: object | undefined
        refreshToken: string | undefined
        apiKey: string | undefined
        accessToken: string | undefined
        allowRateLimiting: boolean
        numberOfApiCallRetries: NumberOfRetries
    } {
        return {
            accessToken: this._accessToken,
            apiKey: this._apiKey,
            basePath: this._basePath,
            defaultHeaders: this._defaultHeaders,
            refreshToken: this._refreshToken,
            allowRateLimiting: this._allowRateLimiting,
            numberOfApiCallRetries: this._numberOfApiCallRetries
        }
    }

    public apiRequest(opts: any): Promise<{ response: http.IncomingMessage; body?: any; }> {
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

        return new Promise<{ response: http.IncomingMessage; body?: any; }>((resolve, reject) => {
            request(params, (error: any, response: Response, body: any) => {
                if (error) {
                    reject(error)
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response, body })
                    } else {
                        reject({ response, body })
                    }
                }
            })
        })
    }

    protected _getAuthorizationUrl(clientId: string, redirectUri: string, scopes: string): string {
        const params = {
            client_id: clientId,
            redirect_uri: redirectUri,
            scopes,
        }
        return `https://app.hubspot.com/oauth/authorize?${qs.stringify(params)}`
    }

    private _setOptions(options: {
        apiKey?: string
        accessToken?: string
        refreshToken?: string
        basePath?: string
        defaultHeaders?: object
        allowRateLimiting?: boolean
        numberOfApiCallRetries? : NumberOfRetries
    }) {
        this.setAuth(options)
        this.setBasePath(options.basePath)
        this.setDefaultHeaders(options.defaultHeaders)
        this._patchApiClients(options)
    }

    private _setUseQuerystring(useQuerystring: boolean) {
        _.each(this._apiClients, (apiClient) => apiClient._useQuerystring = useQuerystring)
    }

    private _getLimiterWrappedMethod(method: any) {
        return this._limiter.wrap(method)
    }

    private _waitAfterRequestFailure(statusCode: number, retryNumber: number, retryTimeout: number) {
        console.error(`Request failed with status code [${statusCode}], will retry [${retryNumber}] time in [${retryTimeout}] ms`)
        return new Promise((resolve) => setTimeout(resolve, retryTimeout))
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

                    if (_.isEqual(statusCode,500)) {
                        await this._waitAfterRequestFailure(statusCode, index, RETRY_TIMEOUT.INTERNAL_SERVER_ERROR)
                        continue
                    }

                    if (_.isEqual(statusCode,429)) {
                        const policyName = _.get(e, 'response.body.policyName')

                        if (_.isEqual(policyName, TEN_SECONDLY_ROLLING)) {
                            await this._waitAfterRequestFailure(statusCode, index, RETRY_TIMEOUT.TOO_MANY_REQUESTS)
                            continue
                        }
                    }

                    break
                }
            }

            return new Promise((resolve, reject)=> {
                if (resultRejected) {
                    return reject(resultRejected)
                }
                return resolve(resultSuccess)
            })
        }
    }

    private _patchApiClientMethod (methodName: string, clientInstance: any, clientPrototype: any) {
        const methodBinned = clientPrototype[methodName].bind(clientInstance)

        let patchedMethod = methodBinned

        if (this._allowRateLimiting) {
            patchedMethod = this._getLimiterWrappedMethod(methodBinned)
        }

        if (!_.isEqual(this._numberOfApiCallRetries, NumberOfRetries.NoRetries)) {
            patchedMethod = this._getRetryWrappedMethod(patchedMethod)
        }

        clientInstance[methodName] = patchedMethod
    }

    private _patchApiClient(clientInstance: any) {
        const clientPrototype = Object.getPrototypeOf(clientInstance)
        let methodsNamesToPatch = Object.getOwnPropertyNames(clientPrototype);
        methodsNamesToPatch = _.differenceWith(methodsNamesToPatch, METHOD_NAMES_TO_EXCLUDE_FROM_PATCHING)

        const patchFn = this._patchApiClientMethod.bind(this)

        _.each(methodsNamesToPatch, (methodName) => {
            patchFn(methodName, clientInstance, clientPrototype)
        })
    }

    private _patchApiClients(options: { allowRateLimiting?: boolean; numberOfApiCallRetries? : NumberOfRetries } = {}) {
        this._allowRateLimiting = _.isNil(options.allowRateLimiting)? true: options.allowRateLimiting
        this._numberOfApiCallRetries = _.isNil(options.numberOfApiCallRetries)? NumberOfRetries.NoRetries: options.numberOfApiCallRetries

        if (this._allowRateLimiting || !_.isEqual(this._numberOfApiCallRetries, NumberOfRetries.NoRetries)) {
            _.each(this._apiClients, this._patchApiClient.bind(this))
        }
    }
}
