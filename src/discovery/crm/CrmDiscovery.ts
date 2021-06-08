import { configuration } from '../../configuration'
import { AssociationsDiscovery } from './associations/AssociationsDiscovery'
import { CompaniesDiscovery } from './companies/CompaniesDiscovery'
import { ContactsDiscovery } from './contacts/ContactsDiscovery'
import { DealsDiscovery } from './deals/DealsDiscovery'
import { ExtensionsDiscovery } from './extensions/ExtensionsDiscovery'
import { FeedbackSubmissionsDiscovery } from './feedback_submissions/FeedbackSubmissionsDiscovery'
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


export class CrmDiscovery {
    public associations: AssociationsDiscovery
    public companies: CompaniesDiscovery
    public contacts: ContactsDiscovery
    public deals: DealsDiscovery
    public extensions: ExtensionsDiscovery
    public feedbackSubmissions: FeedbackSubmissionsDiscovery
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

    constructor(config: configuration) {
        this.associations = new AssociationsDiscovery(config)
        this.companies = new CompaniesDiscovery(config)
        this.contacts = new ContactsDiscovery(config)
        this.deals = new DealsDiscovery(config)
        this.extensions = new ExtensionsDiscovery(config)
        this.feedbackSubmissions = new FeedbackSubmissionsDiscovery(config)
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
}