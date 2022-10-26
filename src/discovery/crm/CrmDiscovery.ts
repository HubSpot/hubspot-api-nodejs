import { IConfiguration } from '../../configuration/IConfiguration'
import { BaseDiscovery } from '../BaseDiscovery'
import { ObjectsDiscovery } from './objects/ObjectsDiscovery'
import { OwnersDiscovery } from './owners/OwnersDiscovery'
import { PipelinesDiscovery } from './pipelines/PipelinesDiscovery'
import { ProductsDiscovery } from './products/ProductsDiscovery'
import { PropertiesDiscovery } from './properties/PropertiesDiscovery'
import { QuotesDiscovery } from './quotes/QuotesDiscovery'
import { SchemasDiscovery } from './schemas/SchemasDiscovery'
import { TicketsDiscovery } from './tickets/TicketsDiscovery'
import { TimelineDiscovery } from './timeline/TimelineDiscovery'
import { initObject } from '../../services/initObject'

export class CrmDiscovery extends BaseDiscovery {
  protected _associations: any
  protected _companies: any
  protected _contacts: any
  protected _deals: any
  protected _extensions: any
  protected _imports: any
  protected _lineItems: any
  public objects: ObjectsDiscovery
  public owners: OwnersDiscovery
  public pipelines: PipelinesDiscovery
  public products: ProductsDiscovery
  public properties: PropertiesDiscovery
  public quotes: QuotesDiscovery
  public schemas: SchemasDiscovery
  public tickets: TicketsDiscovery
  public timeline: TimelineDiscovery

  constructor(config: IConfiguration = {}) {
    super(config);
    this.objects = new ObjectsDiscovery(config)
    this.owners = new OwnersDiscovery(config)
    this.pipelines = new PipelinesDiscovery(config)
    this.products = new ProductsDiscovery(config)
    this.properties = new PropertiesDiscovery(config)
    this.quotes = new QuotesDiscovery(config)
    this.schemas = new SchemasDiscovery(config)
    this.tickets = new TicketsDiscovery(config)
    this.timeline = new TimelineDiscovery(config)
  }

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

}
