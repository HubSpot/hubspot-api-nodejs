import { IConfiguration } from '../../configuration/IConfiguration'
import { BaseDiscovery } from '../BaseDiscovery'
import { initObject } from '../../services/initObject'

export class CrmDiscovery extends BaseDiscovery {
  protected _associations: any
  protected _companies: any
  protected _contacts: any
  protected _deals: any
  protected _extensions: any
  protected _imports: any
  protected _lineItems: any
  protected _objects: any
  protected _owners: any
  protected _pipelines: any
  protected _products: any
  protected _properties: any
  protected _quotes: any
  protected _schemas: any
  protected _tickets: any
  protected _timeline: any

  /**
  * Getter
  * @returns AssociationsDiscovery
  */
   get associations() {
    if(!this._associations) {
      this._associations = initObject('crm/associations/AssociationsDiscovery', this.config)
    }

    return this._associations
  }

  /**
  * Getter
  * @returns CompaniesDiscovery
  */
   get companies() {
    if(!this._companies) {
      this._companies = initObject('crm/companies/CompaniesDiscovery', this.config)
    }

    return this._companies
  }

  /**
  * Getter
  * @returns ContactsDiscovery
  */
   get contacts() {
    if(!this._contacts) {
      this._contacts = initObject('crm/contacts/ContactsDiscovery', this.config)
    }

    return this._contacts
  }

  /**
  * Getter
  * @returns DealsDiscovery
  */
   get deals() {
    if(!this._deals) {
      this._deals = initObject('crm/deals/DealsDiscovery', this.config)
    }

    return this._deals
  }

  /**
  * Getter
  * @returns ExtensionsDiscovery
  */
   get extensions() {
    if(!this._extensions) {
      this._extensions = initObject('crm/extensions/ExtensionsDiscovery', this.config)
    }

    return this._extensions
  }

  /**
  * Getter
  * @returns ImportsDiscovery
  */
   get imports() {
    if(!this._imports) {
      this._imports = initObject('crm/imports/ImportsDiscovery', this.config)
    }

    return this._imports
  }

  /**
  * Getter
  * @returns LineItemsDiscovery
  */
   get lineItems() {
    if(!this._lineItems) {
      this._lineItems = initObject('crm/line_items/LineItemsDiscovery', this.config)
    }

    return this._lineItems
  }

  /**
  * Getter
  * @returns ObjectsDiscovery
  */
   get objects() {
    if(!this._objects) {
      this._objects = initObject('crm/objects/ObjectsDiscovery', this.config)
    }

    return this._objects
  }

  /**
  * Getter
  * @returns OwnersDiscovery
  */
   get owners() {
    if(!this._owners) {
      this._owners = initObject('crm/owners/OwnersDiscovery', this.config)
    }

    return this._owners
  }

  /**
  * Getter
  * @returns LineItemsDiscovery
  */
   get pipelines() {
    if(!this._pipelines) {
      this._pipelines = initObject('crm/pipelines/PipelinesDiscovery', this.config)
    }

    return this._pipelines
  }

  /**
  * Getter
  * @returns ProductsDiscovery
  */
   get products() {
    if(!this._products) {
      this._products = initObject('crm/products/ProductsDiscovery', this.config)
    }

    return this._products
  }

  /**
  * Getter
  * @returns PropertiesDiscovery
  */
   get properties() {
    if(!this._properties) {
      this._properties = initObject('crm/properties/PropertiesDiscovery', this.config)
    }

    return this._properties
  }

  /**
  * Getter
  * @returns QuotesDiscovery
  */
   get quotes() {
    if(!this._quotes) {
      this._quotes = initObject('crm/quotes/QuotesDiscovery', this.config)
    }

    return this._quotes
  }

  /**
  * Getter
  * @returns SchemasDiscovery
  */
   get schemas() {
    if(!this._schemas) {
      this._schemas = initObject('crm/schemas/SchemasDiscovery', this.config)
    }

    return this._schemas
  }

  /**
  * Getter
  * @returns TicketsDiscovery
  */
   get tickets() {
    if(!this._tickets) {
      this._tickets = initObject('crm/tickets/TicketsDiscovery', this.config)
    }

    return this._tickets
  }

  /**
  * Getter
  * @returns TimelineDiscovery
  */
   get timeline() {
    if(!this._timeline) {
      this._timeline = initObject('crm/timeline/TimelineDiscovery', this.config)
    }

    return this._timeline
  }

}
