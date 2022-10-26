import { IConfiguration } from '../../configuration/IConfiguration'
import { BaseDiscovery } from '../BaseDiscovery'
import { ContactsDiscovery } from './contacts/ContactsDiscovery'
import { DealsDiscovery } from './deals/DealsDiscovery'
import { ExtensionsDiscovery } from './extensions/ExtensionsDiscovery'
import { ImportsDiscovery } from './imports/ImportsDiscovery'
import { LineItemsDiscovery } from './line_items/LineItemsDiscovery'
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
  public contacts: ContactsDiscovery
  public deals: DealsDiscovery
  public extensions: ExtensionsDiscovery
  public imports: ImportsDiscovery
  public lineItems: LineItemsDiscovery
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
    this.contacts = new ContactsDiscovery(config)
    this.deals = new DealsDiscovery(config)
    this.extensions = new ExtensionsDiscovery(config)
    this.imports = new ImportsDiscovery(config)
    this.lineItems = new LineItemsDiscovery(config)
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
      this._associations = initObject('cms/associations/AssociationsDiscovery', this.config)
    }
    return this._associations
  }

  /**
  * Getter
  * @returns CompaniesDiscovery
  */
   get companies() {
    if(!this._companies) {
      this._companies = initObject('cms/companies/CompaniesDiscovery', this.config)
    }
    return this._companies
  }

}
