import BaseDiscovery from '../BaseDiscovery'
import type AssociationsDiscovery from './associations/AssociationsDiscovery'
import type CompaniesDiscovery from './companies/CompaniesDiscovery'
import type ContactsDiscovery from './contacts/ContactsDiscovery'
import type DealsDiscovery from './deals/DealsDiscovery'
import type ExtensionsDiscovery from './extensions/ExtensionsDiscovery'
import type ImportsDiscovery from './imports/ImportsDiscovery'
import type LineItemsDiscovery from './line_items/LineItemsDiscovery'
import type ListsDiscovery from './lists/ListsDiscovery'
import type ObjectsDiscovery from './objects/ObjectsDiscovery'
import type OwnersDiscovery from './owners/OwnersDiscovery'
import type PipelinesDiscovery from './pipelines/PipelinesDiscovery'
import type ProductsDiscovery from './products/ProductsDiscovery'
import type PropertiesDiscovery from './properties/PropertiesDiscovery'
import type QuotesDiscovery from './quotes/QuotesDiscovery'
import type SchemasDiscovery from './schemas/SchemasDiscovery'
import type TicketsDiscovery from './tickets/TicketsDiscovery'
import type TimelineDiscovery from './timeline/TimelineDiscovery'

export default class CrmDiscovery extends BaseDiscovery {
  protected _associations: AssociationsDiscovery | undefined
  protected _companies: CompaniesDiscovery | undefined
  protected _contacts: ContactsDiscovery | undefined
  protected _deals: DealsDiscovery | undefined
  protected _extensions: ExtensionsDiscovery | undefined
  protected _imports: ImportsDiscovery | undefined
  protected _lineItems: LineItemsDiscovery | undefined
  protected _lists: ListsDiscovery | undefined
  protected _objects: ObjectsDiscovery | undefined
  protected _owners: OwnersDiscovery | undefined
  protected _pipelines: PipelinesDiscovery | undefined
  protected _products: ProductsDiscovery | undefined
  protected _properties: PropertiesDiscovery | undefined
  protected _quotes: QuotesDiscovery | undefined
  protected _schemas: SchemasDiscovery | undefined
  protected _tickets: TicketsDiscovery | undefined
  protected _timeline: TimelineDiscovery | undefined

  /**
   * Getter
   * @returns AssociationsDiscovery
   */
  get associations() {
    if (!this._associations) {
      const requiredClass = require('./associations/AssociationsDiscovery')
      this._associations = new requiredClass.default(this.config) as AssociationsDiscovery
    }

    return this._associations
  }

  /**
   * Getter
   * @returns CompaniesDiscovery
   */
  get companies() {
    if (!this._companies) {
      const requiredClass = require('./companies/CompaniesDiscovery')
      this._companies = new requiredClass.default(this.config) as CompaniesDiscovery
    }

    return this._companies
  }

  /**
   * Getter
   * @returns ContactsDiscovery
   */
  get contacts() {
    if (!this._contacts) {
      const requiredClass = require('./contacts/ContactsDiscovery')
      this._contacts = new requiredClass.default(this.config) as ContactsDiscovery
    }

    return this._contacts
  }

  /**
   * Getter
   * @returns DealsDiscovery
   */
  get deals() {
    if (!this._deals) {
      const requiredClass = require('./deals/DealsDiscovery')
      this._deals = new requiredClass.default(this.config) as DealsDiscovery
    }

    return this._deals
  }

  /**
   * Getter
   * @returns ExtensionsDiscovery
   */
  get extensions() {
    if (!this._extensions) {
      const requiredClass = require('./extensions/ExtensionsDiscovery')
      this._extensions = new requiredClass.default(this.config) as ExtensionsDiscovery
    }

    return this._extensions
  }

  /**
   * Getter
   * @returns ImportsDiscovery
   */
  get imports() {
    if (!this._imports) {
      const requiredClass = require('./imports/ImportsDiscovery')
      this._imports = new requiredClass.default(this.config) as ImportsDiscovery
    }

    return this._imports
  }

  /**
   * Getter
   * @returns LineItemsDiscovery
   */
  get lineItems() {
    if (!this._lineItems) {
      const requiredClass = require('./line_items/LineItemsDiscovery')
      this._lineItems = new requiredClass.default(this.config) as LineItemsDiscovery
    }

    return this._lineItems
  }

  /**
   * Getter
   * @returns ListsDiscovery
   */
  get lists() {
    if (!this._lists) {
      const requiredClass = require('./lists/ListsDiscovery')
      this._lists = new requiredClass.default(this.config) as ListsDiscovery
    }

    return this._lists
  }

  /**
   * Getter
   * @returns ObjectsDiscovery
   */
  get objects() {
    if (!this._objects) {
      const requiredClass = require('./objects/ObjectsDiscovery')
      this._objects = new requiredClass.default(this.config) as ObjectsDiscovery
    }

    return this._objects
  }

  /**
   * Getter
   * @returns OwnersDiscovery
   */
  get owners() {
    if (!this._owners) {
      const requiredClass = require('./owners/OwnersDiscovery')
      this._owners = new requiredClass.default(this.config) as OwnersDiscovery
    }

    return this._owners
  }

  /**
   * Getter
   * @returns PipelinesDiscovery
   */
  get pipelines() {
    if (!this._pipelines) {
      const requiredClass = require('./pipelines/PipelinesDiscovery')
      this._pipelines = new requiredClass.default(this.config) as PipelinesDiscovery
    }

    return this._pipelines
  }

  /**
   * Getter
   * @returns ProductsDiscovery
   */
  get products() {
    if (!this._products) {
      const requiredClass = require('./products/ProductsDiscovery')
      this._products = new requiredClass.default(this.config) as ProductsDiscovery
    }

    return this._products
  }

  /**
   * Getter
   * @returns PropertiesDiscovery
   */
  get properties() {
    if (!this._properties) {
      const requiredClass = require('./properties/PropertiesDiscovery')
      this._properties = new requiredClass.default(this.config) as PropertiesDiscovery
    }

    return this._properties
  }

  /**
   * Getter
   * @returns QuotesDiscovery
   */
  get quotes() {
    if (!this._quotes) {
      const requiredClass = require('./quotes/QuotesDiscovery')
      this._quotes = new requiredClass.default(this.config) as QuotesDiscovery
    }

    return this._quotes
  }

  /**
   * Getter
   * @returns SchemasDiscovery
   */
  get schemas() {
    if (!this._schemas) {
      const requiredClass = require('./schemas/SchemasDiscovery')
      this._schemas = new requiredClass.default(this.config) as SchemasDiscovery
    }

    return this._schemas
  }

  /**
   * Getter
   * @returns TicketsDiscovery
   */
  get tickets() {
    if (!this._tickets) {
      const requiredClass = require('./tickets/TicketsDiscovery')
      this._tickets = new requiredClass.default(this.config) as TicketsDiscovery
    }

    return this._tickets
  }

  /**
   * Getter
   * @returns TimelineDiscovery
   */
  get timeline() {
    if (!this._timeline) {
      const requiredClass = require('./timeline/TimelineDiscovery')
      this._timeline = new requiredClass.default(this.config) as TimelineDiscovery
    }

    return this._timeline
  }
}
